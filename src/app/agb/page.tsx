export default function AGBPage() {
  return (
    <main className="min-h-screen bg-secondary py-40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-4 mb-8">
            <svg className="w-8 h-8 text-[#e88906]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h1 className="text-3xl font-bold text-foreground font-canto-bold">
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>
          </div>
          
          <div className="space-y-8 text-muted-foreground font-muli">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 1 Geltungsbereich</h2>
              <p className="mb-4">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Daily Dose of Content und seinen Kunden über die Erbringung von Social Media Dienstleistungen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 2 Vertragsgegenstand</h2>
              <p className="mb-4">
                Daily Dose of Content erbringt Dienstleistungen im Bereich Social Media Management, Content-Erstellung, Videoproduktion und Social Media Beratung gemäß den individuell vereinbarten Leistungsbeschreibungen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 3 Vertragsschluss</h2>
              <p className="mb-4">
                Der Vertrag kommt durch die schriftliche Bestätigung des Angebots durch beide Parteien zustande. Mündliche Nebenabreden sind nur wirksam, wenn sie schriftlich bestätigt werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 4 Leistungserbringung</h2>
              <p className="mb-4">
                Die Leistungen werden gemäß der vereinbarten Leistungsbeschreibung erbracht. Änderungen bedürfen der schriftlichen Vereinbarung. Daily Dose of Content behält sich vor, Unterauftragnehmer einzusetzen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 5 Mitwirkungspflichten des Kunden</h2>
              <p className="mb-4">
                Der Kunde verpflichtet sich, alle für die Leistungserbringung erforderlichen Informationen, Materialien und Zugänge rechtzeitig zur Verfügung zu stellen. Verzögerungen aufgrund fehlender Mitwirkung gehen zu Lasten des Kunden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 6 Vergütung und Zahlungsbedingungen</h2>
              <p className="mb-4">
                Die Vergütung richtet sich nach der vereinbarten Preisliste bzw. dem individuellen Angebot. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 7 Urheberrechte und Nutzungsrechte</h2>
              <p className="mb-4">
                Daily Dose of Content räumt dem Kunden die für den vereinbarten Zweck erforderlichen Nutzungsrechte an den erstellten Inhalten ein. Die Urheberrechte verbleiben bei Daily Dose of Content, soweit nicht anders vereinbart.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 8 Vertraulichkeit</h2>
              <p className="mb-4">
                Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen vertraulichen Informationen streng vertraulich zu behandeln und nicht an Dritte weiterzugeben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 9 Haftung</h2>
              <p className="mb-4">
                Daily Dose of Content haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht wesentliche Vertragspflichten verletzt werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 10 Kündigung</h2>
              <p className="mb-4">
                Der Vertrag kann von beiden Parteien mit einer Frist von 30 Tagen zum Monatsende gekündigt werden, soweit nicht anders vereinbart. Das Recht zur außerordentlichen Kündigung bleibt unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">§ 11 Schlussbestimmungen</h2>
              <p className="mb-4">
                Es gilt deutsches Recht. Erfüllungsort und Gerichtsstand ist [Ort]. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>

<div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
