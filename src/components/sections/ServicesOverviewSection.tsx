import { Calendar, Video, Scissors, MessageCircle, Smartphone, Rocket } from 'lucide-react'

const services = [
  { 
    title: "Content Plan", 
    icon: Calendar,
  },
  { 
    title: "Content Produktion", 
    icon: Video,
  },
  { 
    title: "Videoschnitt & Postproduktion", 
    icon: Scissors,
  },
  { 
    title: "Feedback & Freigabe", 
    icon: MessageCircle,
  },
  { 
    title: "Social Media Kanäle erstellen", 
    icon: Smartphone,
  },
  { 
    title: "Veröffentlichung", 
    icon: Rocket,
  }
]

interface ServicesOverviewSectionProps {
  title?: string
  backgroundColor?: 'white' | 'gray'
}

export default function ServicesOverviewSection({ 
  title = "Unsere Leistungen", 
  backgroundColor = 'white' 
}: ServicesOverviewSectionProps) {
  const bgColor = backgroundColor === 'gray' ? 'bg-muted' : 'bg-background'
  
  return (
    <section className={`py-20 sm:py-32 ${bgColor} relative`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl font-canto-bold">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-muli max-w-2xl mx-auto">
            Von der Planung bis zur Veröffentlichung – wir decken alle Aspekte Ihrer Social Media Betreuung ab.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl border border-border hover:border-brand-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-foreground font-canto-bold group-hover:text-brand-primary transition-colors duration-200 text-center leading-tight break-words hyphens-auto">
                  {service.title}
                </h3>
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground font-muli mb-8">
            Interessiert? Lassen Sie uns gemeinsam Ihre Social Media Präsenz auf das nächste Level bringen.
          </p>
          <a 
            href="/service"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Mehr Details zu unserem Service
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
