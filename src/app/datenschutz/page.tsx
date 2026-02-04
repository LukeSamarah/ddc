import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Daily Dose of Content. Erfahren Sie, wie wir Ihre persönlichen Daten schützen und verarbeiten.',
  alternates: {
    canonical: 'https://dailydoseofcontent.de/datenschutz',
  },
  openGraph: {
    title: 'Datenschutzerklärung - Daily Dose of Content',
    description: 'Datenschutzerklärung von Daily Dose of Content. Informationen zum Datenschutz gemäß DSGVO.',
    url: 'https://dailydoseofcontent.de/datenschutz',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  return (
<main className="min-h-screen bg-secondary py-40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-4 mb-8">
            <svg className="w-8 h-8 text-[#e88906]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h1 className="text-3xl font-bold text-foreground font-canto-bold">
              Datenschutzerklärung
            </h1>
          </div>
          
          <div className="space-y-8 text-muted-foreground font-muli leading-relaxed">
            <div className="bg-[#f2eae5] p-6 rounded-xl border-l-4 border-[#e88906]">
              <h2 className="text-xl font-semibold text-foreground mb-4">Information zum Datenschutz auf der Webseite von Amelie Klein</h2>
              <p className="text-sm text-muted-foreground">gemäß Art. 13, 14 und 21 der Datenschutz-Grundverordnung (DSGVO)</p>
              <p className="mt-4">
                Ich nehme Vertraulichkeit und den Schutz Ihrer persönlichen Daten sehr ernst und möchte Sie an dieser Stelle über den Datenschutz informieren.
              </p>
              <p className="mt-2">
                Diese Datenschutzinformation wird entsprechend den rechtlichen und technischen Anforderungen regelmäßig aktualisiert. Bitte beachten Sie die jeweils aktuelle Fassung meiner Datenschutzinformation. Bei Fragen zu dieser Information oder zum Umgang mit Ihren personenbezogenen Daten können Sie sich jederzeit an eine der unten genannten Kontaktadressen wenden.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">I. Geltungsbereich</h2>
              <p className="mb-4">
                Diese Datenschutzinformation gilt für die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten, die Sie mir zur Verfügung stellen bzw. die ich von Ihnen bei Nutzung
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>meiner Webseite und den zugehörigen Unterseiten,</li>
                <li>während unserer Geschäftsbeziehung</li>
              </ul>
              <p>erhebe.</p>
              <p className="mt-4">
                Diese Datenschutzinformation gilt in Verbindung mit allen sonstigen rechtlichen Hinweisen oder Nutzungsbedingungen, die an anderer Stelle auf meiner Webseite stehen.
              </p>
            </section>

            <section>
<h2 className="text-xl font-semibold text-foreground mb-4">II. Verantwortliche der Datenverarbeitung</h2>
              <div className="bg-secondary p-4 rounded-lg">
                <p><strong>Amelie Klein</strong></p>
                <p>Im Schlaun 11</p>
                <p>41189 Mönchengladbach</p>
                <p><strong>Telefon:</strong> +49 157 58774195</p>
                <p><strong>E-Mail:</strong> klein@dailydoseofcontent.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">III. Kontaktdaten des Datenschutzbeauftragten</h2>
              <p>Ein Datenschutzbeauftragter muss nicht bestellt werden.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">IV. Umfang, Zweck und Rechtsgrundlage der Verarbeitung bei Nutzung der Webseite</h2>
              <p className="mb-4 font-medium">
                Wenn Sie mit der unten beschriebenen Datenerhebung und -verarbeitung bei Zugriffen auf meine Webseite nicht einverstanden sind, verlassen Sie bitte diese Webseite, laden Sie keine weiteren Teile unserer Webseite auf Ihren Computer und treten Sie nicht per E-Mail mit mir in Kontakt. Denn die Datenerhebung und Datenspeicherung erfolgt automatisch.
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">1. Allgemein</h3>
              <p className="mb-4">
                Ich verarbeite personenbezogene Daten, die beim Besuch auf meiner Webseite zur Bereitstellung der Webseite sowie zur Verbesserung unseres Internetangebots erhoben werden, unter Beachtung der geltenden datenschutzrechtlichen Bestimmungen. Personenbezogene Daten werden von mir weder unbefugt veröffentlicht noch sonst unberechtigt an Dritte weitergegeben.
              </p>
              <p className="mb-4">
                Wenn Sie meine Webseite besuchen, speichert der Webserver temporär jeden Zugriff in einer Protokolldatei. Folgende Daten werden erfasst und bis zur automatisierten Löschung gespeichert:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
                <li>IP-Adresse des anfragenden Rechners*</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GTM)</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Übertragene Datenmenge</li>
                <li>Meldung, ob der Abruf erfolgreich war</li>
                <li>Erkennungsdaten des verwendeten Browser- und Betriebssystems</li>
                <li>Internet-Site, von der aus der Zugriff erfolgt</li>
                <li>Inhalt der Anforderung – konkrete Seite</li>
                <li>Zugriffsstatus/ http Statuscode</li>
                <li>Browser-Typ/ -Version</li>
                <li>Betriebssystem und dessen Oberfläche</li>
                <li>Sprache und Version der Browsersoftware</li>
                <li>Besuchte Seiten (inkl. Einstiegs- und Ausstiegsseite)</li>
                <li>Zeit und Häufigkeit der Serveranfrage</li>
              </ul>
              <p className="text-sm italic mb-4">
                (*Die IP Adresse wird nicht mit anderen erhobenen Daten verknüpft. In der Systemzugriffs-Log-Datei werden nur Datum, Uhrzeit und IP-Adresse erfasst, für den Fall eines Angriffs und dessen Abwehr).
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt zum Zweck, die Nutzung der Webseite zu ermöglichen (Verbindungsaufbau), der Systemsicherheit, der technischen Administration der Netzinfrastruktur sowie zur Optimierung des Internetangebotes. Personenbezogene, nicht anonymisierte Nutzerprofile werden nicht erstellt.
              </p>
              <p className="mb-4">
                Die oben genannten Daten sind technisch erforderlich, um Ihnen meine Webseite anzuzeigen und die Stabilität und Sicherheit der Webseite zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DS-GVO.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">2. Cookies</h3>
              <p>Es werden keine Cookies verwendet.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">3. Kontaktaufnahme</h3>
              <p className="mb-4">
                Auf meiner Webseite finden Sie Kontaktformulare, die für die elektronische Kontaktaufnahme genutzt werden können. Alternativ ist eine Kontaktaufnahme über die bereitgestellten E-Mail-Adressen möglich. Nehmen Sie über einen dieser Kanäle Kontakt mit mir auf, erhebe ich die eingegebenen und übermittelten personenbezogenen Daten.
              </p>
              <p className="mb-4">
                Die erfassten personenbezogenen Daten setzen sich im Falle der Nutzung des Kontaktformulars aus den dort eingegebenen Stammdaten (Pflichtfelder: E-Mail-Adresse, Land; freiwillige Felder: Anrede, Vorname, Nachname, Firma, Telefonnummer) und möglicherweise weiteren im Feld &bdquo;Nachricht&ldquo; durch Sie eingegebenen personenbezogenen Daten zusammen. Sollten Sie mich direkt via E-Mail kontaktieren, erfasse ich Ihre E-Mail-Adresse sowie gegebenenfalls sich aus dem Text der E-Mail ergebende personenbezogene Daten.
              </p>
              <p className="mb-4">
                Die Verarbeitung erfolgt aufgrund von Art. 6 Abs. 1 lit. f DSGVO. Der Zweck der Datenverarbeitung und mein berechtigtes Interesse liegen in der Pflege von Geschäftsbeziehungen und darin, die an mich gerichteten Nachrichten beantworten zu können.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">V. Ihre Betroffenenrechte</h2>
              <p className="mb-4">
                Jede betroffene Person hat das Recht auf Auskunft nach Art. 15 DSGVO, das Recht auf Berichtigung nach Art. 16 DSGVO, das Recht auf Löschung nach Art. 17 DSGVO, das Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO sowie das Recht auf Datenübertragbarkeit aus Art. 20 DSGVO. Zur Ausübung der vorgenannten Rechte können Sie sich an die unter Ziffer II genannten Stelle wenden.
              </p>
              <p className="mb-4">
                Sollten Sie mir eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit formfrei widerrufen. Der Widerruf sollte möglichst an die unter Ziffer II genannte Stelle gerichtet werden.
              </p>
              <p className="mb-4">
                Darüber hinaus besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde (Art. 77 DSGVO). Zuständige Aufsichtsbehörde ist:
              </p>
              <p className="font-medium">Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">VI. Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
              <p className="mb-4">
                Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. f der DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein etwaiges auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.
              </p>
              <p className="mb-4">
                Legen Sie Widerspruch ein, werde ich Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, ich kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
              </p>
              <p className="mb-4">
                In Einzelfällen verarbeite ich Ihre personenbezogenen Daten, um Direktwerbung zu betreiben. Sie haben das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
              </p>
              <p className="mb-4">
                Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werde ich Ihre personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.
              </p>
              <p className="mb-4">
                Der Widerspruch kann formfrei erfolgen und sollte möglichst an die in der Datenschutzerklärung unter Ziffer II genannte Stelle gerichtet werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">VII. Schlussbemerkungen</h2>
              <p className="mb-4">
                <strong>Sicherheit:</strong> Ich setze technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch mich verarbeiteten personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen angemessen zu schützen.
              </p>
              <p className="mb-4">
                <strong>Gültigkeit und Aktualität der Datenschutzerklärung:</strong> Diese Datenschutzerklärung datiert von November 2025 und ist gültig, solange keine aktualisierte Fassung sie ersetzt.
              </p>
              <p className="mb-4">
                Durch die Implementierung neuer Technologien kann es notwendig werden, diese Datenschutzerklärung zu ändern. Ich behalte mir vor, die Datenschutzerklärung jederzeit mit Wirkung für die Zukunft zu ändern. Ich empfehle Ihnen, sich die aktuelle Datenschutzerklärung von Zeit zu Zeit erneut durchzulesen.
              </p>
            </section>

<div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Stand: November 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
