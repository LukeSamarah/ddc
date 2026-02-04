import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Initialize fonts with CSS variables for Design Mode compatibility
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Daily Dose of Content - Social Media Marketing",
    template: "%s | Daily Dose of Content"
  },
  description: "Professionelle Social Media Betreuung für mittelständische Unternehmen. Content-Erstellung, Videoproduktion und Social Media Management aus einer Hand.",
  keywords: ["Social Media Marketing", "Content Erstellung", "Videoproduktion", "Mönchengladbach", "Social Media Betreuung", "Instagram Marketing", "Facebook Marketing"],
  authors: [{ name: "Amelie Klein" }],
  creator: "Daily Dose of Content",
  publisher: "Daily Dose of Content",
  metadataBase: new URL('https://dailydoseofcontent.de'),
  alternates: {
    canonical: 'https://dailydoseofcontent.de',
  },
  icons: {
    icon: '/logo-favicon.ico',
    shortcut: '/logo-favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://dailydoseofcontent.de',
    title: 'Daily Dose of Content - Social Media Marketing Mönchengladbach',
    description: 'Professionelle Social Media Betreuung für mittelständische Unternehmen in Mönchengladbach. Content-Erstellung, Videoproduktion und Social Media Management aus einer Hand.',
    siteName: 'Daily Dose of Content',
    images: [
      {
        url: '/logo-daily-dose-of-content.png',
        width: 1200,
        height: 630,
        alt: 'Daily Dose of Content Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Dose of Content - Social Media Marketing Mönchengladbach',
    description: 'Professionelle Social Media Betreuung für mittelständische Unternehmen in Mönchengladbach.',
    images: ['/logo-daily-dose-of-content.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e88906' },
    { media: '(prefers-color-scheme: dark)', color: '#e88906' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Daily Dose of Content - Social Media Agentur Showreel",
    "description": "Professionelle Social Media Betreuung für mittelständische Unternehmen. Content-Erstellung, Videoproduktion und Social Media Management aus Mönchengladbach.",
    "thumbnailUrl": "https://dailydoseofcontent.de/videos/hero-poster.webp",
    "uploadDate": "2024-07-01",
    "contentUrl": "https://dailydoseofcontent.de/videos/social-media-agentur-hero-video.webm",
    "embedUrl": "https://dailydoseofcontent.de",
    "duration": "PT12S",
    "publisher": {
      "@type": "Organization",
      "name": "Daily Dose of Content",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dailydoseofcontent.de/logo-daily-dose-of-content.png"
      }
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Daily Dose of Content",
    "description": "Professionelle Social Media Betreuung für mittelständische Unternehmen",
    "url": "https://dailydoseofcontent.de",
    "telephone": "+49-157-58774195",
    "email": "klein@dailydoseofcontent.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Im Schlaun 11",
      "addressLocality": "Mönchengladbach",
      "postalCode": "41189",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.1805",
      "longitude": "6.4428"
    },
    "founder": {
      "@type": "Person",
      "name": "Amelie Klein"
    },
    "sameAs": [
      "https://www.instagram.com/daily.dose.of.content/",
      "https://www.facebook.com/dailydoseofcontent",
      "https://www.linkedin.com/company/daily-dose-of-content"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Bank Transfer, PayPal",
    "currenciesAccepted": "EUR",
    "openingHours": "Mo-Fr 09:00-18:00",
    "vatID": "DE408017118",
    "legalName": "Daily Dose of Content - Amelie Klein",
    "image": "https://dailydoseofcontent.de/logo-daily-dose-of-content.png",
    "hasMap": "https://maps.google.com/?q=Im+Schlaun+11,+41189+Mönchengladbach",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.1805",
        "longitude": "6.4428"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Social Media Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Produktion",
            "description": "Professionelle Video- und Fotoproduktion für Social Media mit hochwertigem Equipment",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Daily Dose of Content"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Management",
            "description": "Regelmäßige Betreuung und Posting auf Social Media Kanälen - Ihr Content, professionell veröffentlicht",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Daily Dose of Content"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Videoproduktion",
            "description": "Hochwertige Videoproduktion mit professionellem Equipment inkl. Drohnen, Gimbals und 4K-Kameras",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Daily Dose of Content"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Strategie",
            "description": "Strategische Content-Planung und Beratung für maximale Reichweite auf Social Media",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Daily Dose of Content"
            }
          }
        }
      ]
    }
  }

  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/logo-favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" as="image" href="/videos/hero-poster.webp" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ScrollToTop />
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
