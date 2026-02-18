import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Simple in-memory rate limiter (per-instance; for production consider Redis-based)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

/** Escape HTML special characters to prevent injection in email templates. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Required field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // Input length validation
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Ungültige Eingabe' },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Eingabe zu lang' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Sanitize inputs for HTML email template
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e88906; margin-bottom: 20px;">
          Neue Kontaktanfrage!
        </h2>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 15px 0; color: #333;">Kontaktdaten:</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 5px 0;"><strong>E-Mail:</strong> ${safeEmail}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <h3 style="margin: 0 0 15px 0; color: #333;">Nachricht:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
        </div>

        <div style="margin-top: 30px; padding: 15px; background-color: #e88906; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">
            Diese E-Mail wurde über das Kontaktformular auf dailydoseofcontent.de gesendet.
          </p>
        </div>
      </div>
    `;

    if (!resend) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Dev mode: E-Mail nicht gesendet (kein API Key)');
      }
      return NextResponse.json(
        { message: 'E-Mail-Versand ist nicht konfiguriert (Development Mode)', data: { id: 'dev-mode' } },
        { status: 200 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'noreply@dailydoseofcontent.de',
      to: 'klein@dailydoseofcontent.de',
      subject: `Neue Kontaktanfrage von ${safeName}`,
      html: emailHtml,
      replyTo: email.trim(),
    });

    if (error) {
      console.error('E-Mail-Versand fehlgeschlagen');
      return NextResponse.json(
        { error: 'Fehler beim Senden der E-Mail' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet', data },
      { status: 200 }
    );

  } catch {
    console.error('Kontakt-API: Unerwarteter Fehler');
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}
