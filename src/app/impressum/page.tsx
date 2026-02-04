import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Daily Dose of Content - Amelie Klein, Mönchengladbach. Angaben gemäß § 5 TMG.',
  alternates: {
    canonical: 'https://dailydoseofcontent.de/impressum',
  },
  openGraph: {
    title: 'Impressum - Daily Dose of Content',
    description: 'Rechtliche Angaben zu Daily Dose of Content - Amelie Klein, Mönchengladbach.',
    url: 'https://dailydoseofcontent.de/impressum',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return (
<main className="min-h-screen bg-secondary py-40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-4 mb-8">
            <svg className="w-8 h-8 text-[#e88906]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="text-3xl font-bold text-foreground font-canto-bold">
              Impressum
            </h1>
          </div>
          
          <div className="space-y-8 text-muted-foreground font-muli">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2">
                <p><strong>Daily Dose of Content</strong></p>
                <p>Inhaber: Amelie Klein</p>
                <p>Im Schlaun 11</p>
                <p>41189 Mönchengladbach</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p><strong>Telefon:</strong> +49 157 58774195</p>
                <p><strong>E-Mail:</strong> klein@dailydoseofcontent.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>DE408017118</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="space-y-2">
                <p>Amelie Klein</p>
                <p>Im Schlaun 11</p>
                <p>41189 Mönchengladbach</p>
              </div>
            </section>

            <section>
<h2 className="text-xl font-semibold text-foreground mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
