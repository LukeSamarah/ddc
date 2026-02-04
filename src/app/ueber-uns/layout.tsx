import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über uns - Social Media Agentur Mönchengladbach',
  description: 'Lernen Sie Amelie Klein und das Team von Daily Dose of Content kennen. Ihre Social Media Agentur in Mönchengladbach für professionelle Betreuung mittelständischer Unternehmen.',
  alternates: {
    canonical: 'https://dailydoseofcontent.de/ueber-uns',
  },
  openGraph: {
    title: 'Über uns - Social Media Agentur Mönchengladbach | Daily Dose of Content',
    description: 'Lernen Sie Amelie Klein und das Team von Daily Dose of Content kennen. Ihre Social Media Agentur in Mönchengladbach für professionelle Betreuung mittelständischer Unternehmen.',
    url: 'https://dailydoseofcontent.de/ueber-uns',
  },
}

export default function UeberUnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
