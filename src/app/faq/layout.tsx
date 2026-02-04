import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Häufig gestellte Fragen zu Social Media Content-Produktion Mönchengladbach',
  description: 'Antworten auf häufige Fragen zu unserem Social Media Service, Videoproduktion, Ablauf, Preisen und Zusammenarbeit in Mönchengladbach. Erfahren Sie mehr über unsere Dienstleistungen.',
  keywords: [
    'Social Media FAQ',
    'Videoproduktion Fragen',
    'Content Produktion Kosten',
    'Social Media Service Ablauf',
    'Daily Dose Content FAQ',
    'Mönchengladbach Social Media',
    'Shooting Ablauf',
    'Social Media Preise'
  ],
  alternates: {
    canonical: 'https://dailydoseofcontent.de/faq',
  },
  openGraph: {
    title: 'FAQ - Häufig gestellte Fragen | Daily Dose of Content',
    description: 'Antworten auf häufige Fragen zu unserem Social Media Service, Videoproduktion, Ablauf und Preisen in Mönchengladbach.',
    url: 'https://dailydoseofcontent.de/faq',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Daily Dose of Content',
    images: [
      {
        url: '/logo-daily-dose-of-content.png',
        width: 1200,
        height: 630,
        alt: 'Daily Dose of Content FAQ - Häufig gestellte Fragen',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Häufig gestellte Fragen zu Social Media Content-Produktion',
    description: 'Antworten auf häufige Fragen zu unserem Social Media Service, Videoproduktion und Ablauf.',
    images: ['/logo-daily-dose-of-content.png'],
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
