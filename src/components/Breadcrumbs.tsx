'use client'

import { usePathname } from 'next/navigation'

// Deutsche Übersetzungen für Pfad-Segmente
const pathTranslations: Record<string, string> = {
  'service': 'Service',
  'kontakt': 'Kontakt',
  'ueber-uns': 'Über uns',
  'referenzen': 'Referenzen',
  'faq': 'FAQ',
  'dienstleistungen': 'Dienstleistungen',
  'prozess': 'Prozess',
  'datenschutz': 'Datenschutz',
  'impressum': 'Impressum',
  'agb': 'AGB'
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  // Keine Breadcrumbs auf der Homepage
  if (pathname === '/') return null

  // Keine Breadcrumbs auf rechtlichen Seiten (optional)
  if (['/datenschutz', '/impressum', '/agb'].includes(pathname)) return null

  const segments = pathname.split('/').filter(Boolean)

  const breadcrumbItems = [
    { name: 'Home', href: '/', position: 1 }
  ]

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`

    // Übersetzen oder Segment formatieren
    const name = pathTranslations[segment] || segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    breadcrumbItems.push({
      name,
      href: currentPath,
      position: index + 2
    })
  })

  // BreadcrumbList Schema für SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": `https://dailydoseofcontent.de${item.href}`
    }))
  }

  return (
    <>
      {/* Schema.org JSON-LD - Unsichtbar für User, nur für Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
