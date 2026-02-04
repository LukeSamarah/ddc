import FAQAccordion from '@/components/FAQAccordion'

const faqData = [
  {
    id: 1,
    question: "Für welche Unternehmen oder Branchen arbeitet ihr?",
    answer: "Wir arbeiten vor allem mit mittelständischen Unternehmen, Handwerksbetrieben und Dienstleistern, die ihren Online-Auftritt professionell und authentisch gestalten möchten. Dabei spielt die Branche keine Rolle. Entscheidend ist, dass ihr Wert auf qualitative Videoaufnahmen legt, die euer Unternehmen glaubwürdig präsentieren."
  },
  {
    id: 2,
    question: "Wie läuft ein Shooting oder Videodreh bei euch ab?",
    answer: "Nach der Anfrage besprechen wir gemeinsam eure Ziele und die gewünschten Inhalte. Anschließend erstelle ich einen Content Plan für den Drehtag. Diesen werdet ihr vorab zugeschickt bekommen um euch schonmal einen guten Überblick über die Videoideen zu verschaffen. Am Drehtag selbst kümmern wir uns um Technik, Licht und Regie, ihr müsst nur präsent sein und mitmachen. Das A und O sind motivierte Mitarbeiter, die Lust haben vor der Kamera zu stehen! Niemand soll gezwungen werden, darunter leidet auch die Qualität der Videos. Nach dem Dreh folgt die professionelle Nachbearbeitung, bevor ihr die fertigen Medien zur Freigabe erhaltet und es anschließend mit dem Posten los gehen kann."
  },
  {
    id: 3,
    question: "Wie schnell erhalten wir die fertigen Fotos oder Videos?",
    answer: "Je nach Umfang des Projekts erhaltet ihr die fertigen Ergebnisse in der Regel innerhalb von 5–10 Werktagen."
  },
  {
    id: 4,
    question: "Wie viel kostet eure Arbeit – gibt es feste Pakete oder individuelle Angebote?",
    answer: "Da jedes Unternehmen andere Anforderungen hat, erstellen wir nach einem kurzen Gespräch ein individuelles Angebot."
  },
  {
    id: 5,
    question: "Können wir eigene Ideen oder Wünsche ins Shooting einbringen?",
    answer: "Auf jeden Fall! Eure Ideen sind sogar ausdrücklich erwünscht. Wir kombinieren eure Vorstellungen mit unserem Know-how, um das Beste herauszuholen. Ob bestimmte Perspektiven, Orte oder Motive, wir setzen eure Wünsche professionell um und beraten euch, wie sie am wirkungsvollsten umgesetzt werden können."
  },
  {
    id: 6,
    question: "In welchen Regionen seid ihr im Einsatz?",
    answer: "Wir sind hauptsächlich in Nordrhein Westfalen tätig, kommen aber auch gerne zu euch, bundesweit oder bei Bedarf im gesamten D/A/CH Raum."
  },
  {
    id: 7,
    question: "Wie kann man sich am besten auf den Drehtag vorbereiten?",
    answer: "Es ist besonders wichtig, dass vor dem Dreh alle Personen, die vor der Kamera stehen eingeweiht werden und diese den Content Plan bekommen. Erwünscht sind immer mindestens drei. Außerdem sind unterschiedliche Outfits wünschenswert, um abwechslungsreiche Videos zu filmen. Wenn an bestimmten Orten gefilmt werden soll, wo ggf. noch etwas aufgebaut werden muss dann bitte dies auch vorab erledigen. Und das Wichtigste: Locker bleiben, wir sorgen für eine entspannte Atmosphäre!"
  },
  {
    id: 8,
    question: "Welche Technik nutzt ihr bei euren Produktionen?",
    answer: "Wir arbeiten mit hochwertigem Kameraequipment, darunter Drohnen, Gimbals, Lichtsysteme und Audio-Setups auf Profi-Niveau. Zum Einsatz kommen u. a. die DJI Osmo Pocket 3, DJI Drohnen und professionelle Spiegelreflexkameras. Damit garantieren wir gestochen scharfe Aufnahmen in 4K-Qualität und eine saubere Postproduktion."
  },
  {
    id: 9,
    question: "Wie können wir euch am besten buchen oder anfragen?",
    answer: "Am einfachsten ist eine Anfrage über unser Kontaktformular oder direkt per E-Mail / Telefon. Erzählt uns kurz, worum es geht, und wir melden uns schnell mit einem passenden Vorschlag. Wir vereinbaren dann ein unverbindliches Vorgespräch, um eure Ideen zu besprechen."
  }
]

export default function FAQPage() {
  // FAQ Schema für Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e88906] via-[#e88906] to-[#cbaea5] pt-32 pb-20 sm:pt-40 sm:pb-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        {/* Floating Bubbles */}
        <div className="absolute top-24 left-16 w-3 h-3 bg-white/25 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-24 w-5 h-5 bg-white/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-48 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-12 w-6 h-6 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-16 w-3 h-3 bg-white/25 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-1/2 w-4 h-4 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-20 left-2/3 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center pt-16 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-canto-bold mb-6">
              FAQ – Häufig gestellte Fragen
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-muli">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Dienstleistungen,
              den Ablauf und die Zusammenarbeit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-bold text-foreground mb-6 font-canto-bold">
            Haben Sie weitere Fragen?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-muli">
            Wir freuen uns darauf, Ihre individuellen Fragen zu beantworten und
            gemeinsam mit Ihnen die perfekte Lösung zu finden.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-lg bg-[#e88906] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#e88906]/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </main>
    </>
  )
}
