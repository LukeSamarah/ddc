import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt - Social Media Agentur Mönchengladbach',
  description: 'Kontaktieren Sie Daily Dose of Content für professionelle Social Media Betreuung in Mönchengladbach. Amelie Klein - Tel: +49 157 58774195 | E-Mail: klein@dailydoseofcontent.de',
  alternates: {
    canonical: 'https://dailydoseofcontent.de/kontakt',
  },
  openGraph: {
    title: 'Kontakt - Social Media Agentur Mönchengladbach | Daily Dose of Content',
    description: 'Kontaktieren Sie Daily Dose of Content für professionelle Social Media Betreuung in Mönchengladbach. Amelie Klein - Ihr Partner für Content-Erstellung und Videoproduktion.',
    url: 'https://dailydoseofcontent.de/kontakt',
    images: [
      {
        url: '/logo-daily-dose-of-content.png',
        width: 1200,
        height: 630,
        alt: 'Daily Dose of Content - Kontakt',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt - Social Media Agentur Mönchengladbach | Daily Dose of Content',
    description: 'Kontaktieren Sie Daily Dose of Content für professionelle Social Media Betreuung in Mönchengladbach.',
    images: ['/logo-daily-dose-of-content.png'],
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
