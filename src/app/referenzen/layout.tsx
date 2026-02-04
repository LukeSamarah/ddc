import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referenzen - Erfolgreiche Social Media Projekte Mönchengladbach',
  description: 'Erfolgreiche Social Media Projekte von Daily Dose of Content in Mönchengladbach und Umgebung. Sehen Sie unsere Referenzen und Erfolgsgeschichten regionaler Unternehmen.',
  alternates: {
    canonical: 'https://dailydoseofcontent.de/referenzen',
  },
  openGraph: {
    title: 'Referenzen - Erfolgreiche Social Media Projekte Mönchengladbach | Daily Dose of Content',
    description: 'Erfolgreiche Social Media Projekte von Daily Dose of Content in Mönchengladbach und Umgebung. Sehen Sie unsere Referenzen und Erfolgsgeschichten regionaler Unternehmen.',
    url: 'https://dailydoseofcontent.de/referenzen',
  },
}

export default function ReferenzenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
