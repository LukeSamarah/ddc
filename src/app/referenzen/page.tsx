import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    quote: "Ich arbeite jetzt seit ca. einem Jahr im Bereich Social-Media mit Amelie sehr erfolgreich zusammen. Auf einem Vortrag bei ISOTEC hat Amelie über die Wichtigkeit von Instagram und Facebook berichtet. Das hat mich so stark angesprochen, dass ich Amelie den Auftrag für die Kampagnen bei Instagram und Facebook erteilt habe. Amelie dreht für uns Videos auf unseren Baustellen und bearbeitet Sie anschließend. Das klappt wunderbar. Die Dreharbeiten sind immer wieder Highlights bei uns. Die Zusammenarbeit macht viel Spaß und die Ergebnisse sind wunderbar. Wir sind froh von Amelie betreut zu werden.",
    author: "Henrik Rüger",
    position: "left",
    image: "/referenzen/henrik-rueger-isotec-testimonial.jpg"
  },
  {
    id: 2,
    quote: "Die Zusammenarbeit mit Daily Dose of Content und Amelie war von absoluter Professionalität geprägt. Wir wussten zu jedem Zeitpunkt, was uns erwartet und die Produktionen, als auch die Ergebnisse nach dem Videoschnitt waren für uns nicht nur zur höchsten Zufriedenheit, sondern auch sehr erfolgreich. Durch unsere Zusammenarbeit konnten wir eine vielzahl an Leads generieren, da Amelie versteht, wie Videos aufgebaut sein müssen, damit sie zu dem gewünschten Ergebnis führen. Wir konnten unseren Invest mehrfach wieder reinholen und empfehlen die Zusammenarbeit mit Daily Dose of Content und Amelie Klein uneingeschränkt jedem mittelständischen Unternehmen weiter. Insbesondere wenn man keine inhouse Marketing-Abteilung hat, bietet sich die Dienstleistung sehr an.",
    author: "Jan Randy",
    position: "right",
    image: "/referenzen/jan-randy-jr-consulting.jpg"
  },
  {
    id: 3,
    quote: "Amelie Klein hat uns dabei unterstützt, die Social Media-Präsenz unseres ISOTEC-Fachbetriebs von Grund auf aufzubauen. Neben der Content-Produktion (Konzept, Dreh, Schnitt, Texte) unterstützt sie uns auch beim Redaktionsplan, der laufenden Pflege der Accounts und dem Community-Management. Die Zusammenarbeit mit Frau Klein lief zu jedem Zeitpunkt reibungslos. Sie ist kreativ, zuverlässig und reagiert umgehend, wenn es mal eine Frage oder Änderung gibt. So ist die Zahl unserer Follower in den letzten Monaten stark gewachsen und wir bekommen viel positives Feedback zu unseren Inhalten. Vielen Dank!",
    author: "Charlotte Brückner",
    position: "left",
    image: "/referenzen/charlotte-brueckner-isotec.jpg"
  },
  {
    id: 4,
    quote: "Ich arbeite seit einiger Zeit mit Daily Dose of Content unter der Leitung von Amelie Klein zusammen und bin rundum zufrieden. Amelie versteht es, unser Handwerksunternehmen authentisch und professionell auf Social Media zu präsentieren. Sie hat ein sehr gutes Gespür für starke Inhalte – ob auf der Baustelle, im Büro oder bei unseren Firmenfeiern. Der produzierte Content ist qualitativ hochwertig, zielgruppenorientiert und trifft genau den Ton, der unsere Marke widerspiegelt. Besonders schätze ich ihre Zuverlässigkeit, Kreativität und das Auge fürs Detail. Ich kann Daily Dose of Content und Amelie Klein uneingeschränkt empfehlen – für jeden, der echten, wirkungsvollen Social-Media-Content möchte. — Mike Mines, Geschäftsführer Abdichtungstechnik Mike Mines GmbH",
    author: "Mike Mines",
    position: "right",
    image: "/referenzen/mike-mines-abdichtungstechnik.jpg"
  }
]

const clientLogos = [
  { name: "ISOTEC", logo: "/referenzen/logos/logo-isotec.png" },
  { name: "Almdorfbau", logo: "/referenzen/logos/logo-almdorfbau.png" },
  { name: "Sprügel", logo: "/referenzen/logos/logo-spruegel.png" },
  { name: "JR Consulting", logo: "/referenzen/logos/logo-jr-consulting.png" },
  { name: "Eifeltrecker", logo: "/referenzen/logos/logo-eifeltrecker.svg" }
]

function TestimonialSection({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const isEven = index % 2 === 0

  return (
    <section className={`py-20 bg-[rgba(242,234,229,1)] ${isEven ? 'bg-white' : 'bg-[#f2eae5]'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${testimonial.position === 'right' ? 'lg:grid-flow-col-dense' : ''}`}>

          {/* Text Content */}
          <div className={`${testimonial.position === 'right' ? 'lg:col-start-2' : ''}`}>
            <div className="max-w-xl">
              <div className="text-[#e88906] text-6xl font-serif mb-6">&ldquo;</div>
              <blockquote className="text-lg leading-8 text-muted-foreground font-muli mb-8">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-0.5 bg-[#e88906] mr-4"></div>
                <cite className="text-xl font-semibold text-foreground font-canto-bold not-italic">
                  {testimonial.author}
                </cite>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`${testimonial.position === 'right' ? 'lg:col-start-1' : ''}`}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.author} - Referenz von Daily Dose of Content`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e88906]/10 rounded-full -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function ReferenzenPage() {
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Daily Dose of Content",
    "url": "https://dailydoseofcontent.de",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "ratingCount": "4"
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": t.quote
    }))
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
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
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-12 w-6 h-6 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-16 w-3 h-3 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/2 w-4 h-4 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 left-2/3 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center pt-16 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-canto-bold">
              Diese Unternehmen haben uns bereits ihr Vertrauen geschenkt
            </h1>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-16 bg-card border-b border-border relative overflow-hidden">
        <div className="relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-card via-card/80 to-transparent z-10 pointer-events-none"></div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-card via-card/80 to-transparent z-10 pointer-events-none"></div>

          {/* Moving Container */}
          <div className="flex animate-marquee w-[500%] lg:w-[200%]">
            {/* First group */}
            <div className="flex items-center justify-around" style={{ width: '50%' }}>
              {clientLogos.map((client, index) => (
                <div
                  key={`first-${client.name}-${index}`}
                  className="flex items-center justify-center h-28 px-4 lg:px-12"
                >
                  {client.logo ? (
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} Logo`}
                      width={180}
                      height={90}
                      className="object-contain max-h-24 w-auto"
                      sizes="180px"
                    />
                  ) : (
                    <div className="text-muted-foreground font-semibold text-sm">
                      {client.name}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Second identical group for seamless loop */}
            <div className="flex items-center justify-around" style={{ width: '50%' }}>
              {clientLogos.map((client, index) => (
                <div
                  key={`second-${client.name}-${index}`}
                  className="flex items-center justify-center h-28 px-4 lg:px-12"
                >
                  {client.logo ? (
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} Logo`}
                      width={180}
                      height={90}
                      className="object-contain max-h-24 w-auto"
                      sizes="180px"
                    />
                  ) : (
                    <div className="text-muted-foreground font-semibold text-sm">
                      {client.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.map((testimonial, index) => (
        <TestimonialSection
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
        />
      ))}
    </main>
  )
}
