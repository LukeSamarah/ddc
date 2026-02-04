import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unser Service - Social Media Agentur Mönchengladbach',
  description: 'Von der Content-Planung über professionelle Videoproduktion bis zur Veröffentlichung - Ihr Full-Service Partner für Social Media in Mönchengladbach. 6-Schritte-Prozess für maximale Sichtbarkeit.',
  keywords: [
    'Social Media Service',
    'Content Produktion Mönchengladbach',
    'Videoproduktion Service',
    'Social Media Prozess',
    'Content Plan Erstellung',
    'Social Media Agentur Mönchengladbach',
    'Videoschnitt Service',
    'Social Media Management'
  ],
  alternates: {
    canonical: 'https://dailydoseofcontent.de/service',
  },
  openGraph: {
    title: 'Unser Service - Social Media Agentur Mönchengladbach | Daily Dose of Content',
    description: 'Von der Content-Planung über professionelle Videoproduktion bis zur Veröffentlichung. Ihr Full-Service Partner für Social Media.',
    url: 'https://dailydoseofcontent.de/service',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Daily Dose of Content',
    images: [
      {
        url: '/logo-daily-dose-of-content.png',
        width: 1200,
        height: 630,
        alt: 'Daily Dose of Content Service - Social Media Agentur Mönchengladbach',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unser Service - Social Media Agentur Mönchengladbach',
    description: 'Von der Content-Planung über professionelle Videoproduktion bis zur Veröffentlichung.',
    images: ['/logo-daily-dose-of-content.png'],
  },
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
