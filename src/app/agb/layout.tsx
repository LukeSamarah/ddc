import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB',
  description: 'Allgemeine Geschäftsbedingungen (AGB) von Daily Dose of Content. Rechtliche Bedingungen für unsere Social Media Dienstleistungen.',
  alternates: {
    canonical: 'https://dailydoseofcontent.de/agb',
  },
  openGraph: {
    title: 'AGB - Daily Dose of Content',
    description: 'Allgemeine Geschäftsbedingungen von Daily Dose of Content.',
    url: 'https://dailydoseofcontent.de/agb',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function AGBLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
