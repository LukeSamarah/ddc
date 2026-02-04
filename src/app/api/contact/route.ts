import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Development Logging
    console.log('📧 Kontaktformular eingegangen:', { name, email, message: message.substring(0, 50) + '...' });

    // Validierung
    if (!name || !email || !message) {
      console.log('❌ Validation Error: Fehlende Felder');
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // E-Mail validierung (einfach)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation Error: Ungültige E-Mail:', email);
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e88906; margin-bottom: 20px;">
          Neue Kontaktanfrage!
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 15px 0; color: #333;">Kontaktdaten:</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>E-Mail:</strong> ${email}</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <h3 style="margin: 0 0 15px 0; color: #333;">Nachricht:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #e88906; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">
            Diese E-Mail wurde über das Kontaktformular auf dailydoseofcontent.de gesendet.
          </p>
        </div>
      </div>
    `;

    if (!resend) {
      console.log('⚠️ RESEND_API_KEY nicht konfiguriert - E-Mail wird nicht gesendet');
      return NextResponse.json(
        { message: 'E-Mail-Versand ist nicht konfiguriert (Development Mode)', data: { id: 'dev-mode' } },
        { status: 200 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'noreply@dailydoseofcontent.de',
      to: 'klein@dailydoseofcontent.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('❌ Resend Error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Senden der E-Mail' },
        { status: 500 }
      );
    }

    console.log('✅ E-Mail erfolgreich gesendet:', data?.id);
    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}
