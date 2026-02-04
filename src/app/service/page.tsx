'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, Video, Scissors, MessageCircle, Smartphone, Rocket } from 'lucide-react'
import GrafikenSection from '@/components/sections/GrafikenSection'

const processSteps = [
  {
    id: 1,
    title: "Content Plan Erstellung",
    description: "Wir erstellen einen umfassenden Content Plan für Ihre Social-Media-Inhalte. Darin legen wir fest, welche Ideen und Themen produziert werden. Vorab teilen wir den Plan mit Ihnen, besprechen alles gemeinsam und passen Inhalte nach Ihren Wünschen an.",
    icon: Calendar
  },
  {
    id: 2,
    title: "Content-Produktion vor Ort",
    description: "Bei der Content-Produktion drehen wir vor Ort die Inhalte ab, die im Content-Plan festgelegt wurden. Wir filmen Videos, nehmen Interviews auf und dokumentieren relevante Abläufe im Unternehmen. So entsteht der Rohstoff, aus dem später fertiger Social-Media-Content wird.",
    icon: Video
  },
  {
    id: 3,
    title: "Videoschnitt & Postproduktion",
    description: "Wir bearbeiten die gedrehten Aufnahmen, schneiden Szenen zusammen, optimieren Ton und Bildqualität und fügen bei Bedarf Untertitel, Musik oder Effekte hinzu. Am Ende entsteht fertiger Content, bereit für die Veröffentlichung auf Social Media.",
    icon: Scissors
  },
  {
    id: 4,
    title: "Feedback-Schleifen und Freigabe Prozess",
    description: "Wir stellen Ihnen die produzierten Videos zur Verfügung, damit Sie sich diese in Ruhe ansehen können. Dabei haben Sie die Möglichkeit, uns Ihre Änderungswünsche mitzuteilen, auf Fehler hinzuweisen und einzelne Videos auszusortieren. Erst nach dieser Abstimmung wird der Content final freigegeben.",
    icon: MessageCircle
  },
  {
    id: 5,
    title: "Social Media Kanäle erstellen",
    description: "Falls gewünscht, erstellen und richten wir Ihre Social Media Kanäle professionell ein.",
    icon: Smartphone
  },
  {
    id: 6,
    title: "Veröffentlichung & Posting-Service",
    description: "Wir posten regelmäßig auf den von Ihnen gewünschten Social-Media-Kanälen. Die Posting-Frequenz bestimmen Sie, so bleiben Sie sichtbar und erreichen Ihre Zielgruppe zuverlässig.",
    icon: Rocket
  }
]

const services = [
  { 
    title: "Content Plan", 
    icon: Calendar,
    description: "Themen und Inhalte werden geplant und vorab besprochen."
  },
  { 
    title: "Content Produktion", 
    icon: Video,
    description: "Wir drehen alle geplanten Inhalte direkt bei Ihnen im Unternehmen."
  },
  { 
    title: "Videoschnitt & Postproduktion", 
    icon: Scissors,
    description: "Rohmaterial wird bearbeitet und fertiggestellt."
  },
  { 
    title: "Feedback & Freigabe", 
    icon: MessageCircle,
    description: "Sie sehen sich alles an, nennen Änderungswünsche und erteilen die Freigaben."
  },
  { 
    title: "Social Media Kanäle erstellen", 
    icon: Smartphone,
    description: "Ggf. erstellen und einrichten ihrer gewünschten Social Media Kanäle."
  },
  { 
    title: "Veröffentlichung", 
    icon: Rocket,
    description: "Der Content wird auf Ihren Social-Media-Kanälen nach Ihrer gewünschten Frequenz veröffentlicht."
  }
]

function ProcessStep({ step, isVisible }: { step: typeof processSteps[0], index: number, isVisible: boolean }) {
  const IconComponent = step.icon

  return (
    <div className={`flex items-start gap-8 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Timeline dot */}
      <div className="flex-shrink-0 relative">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#e88906] to-[#cbaea5] flex items-center justify-center text-white font-bold text-lg shadow-lg transition-transform duration-300 hover:scale-110 ${isVisible ? 'scale-100' : 'scale-0'}`}>
          {step.id}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 lg:pr-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e88906]/10 to-[#cbaea5]/10 flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-[#e88906]" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-canto-bold">
              {step.title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed font-muli">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ServicePage() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [expandedServices, setExpandedServices] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleService = (index: number) => {
    setExpandedServices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0', 10)
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])])
          }
        })
      },
      { threshold: 0.3 }
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e88906] via-[#e88906] to-[#cbaea5] pt-32 pb-20 sm:pt-40 sm:pb-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-white/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-ping"></div>
        <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-white/15 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-1/2 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-16 left-1/3 w-5 h-5 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto pt-16 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-canto-bold">
              Unser Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl font-muli">
              Von der ersten Idee bis zum fertigen Post – wir begleiten Sie durch den gesamten Prozess der professionellen Content-Erstellung.
            </p>
            
            {/* Key Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Strategisch geplant</h3>
                <p className="text-white/80 text-sm">Durchdachte Content-Strategie für maximale Wirkung</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Professionell produziert</h3>
                <p className="text-white/80 text-sm">Hochwertige Videos direkt vor Ort bei Ihnen</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Zuverlässig veröffentlicht</h3>
                <p className="text-white/80 text-sm">Regelmäßige Posts nach Ihrem Zeitplan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 sm:py-32 relative bg-[rgba(242,235,230,1)]">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/10 via-black/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-canto-bold">
              Unser Prozess
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-muli">
              6 Schritte zu Ihrem perfekten Social Media Content
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#e88906] via-[#cbaea5] to-[#e88906]"></div>
            
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[index] = el }}
                data-step={index}
                className="relative"
              >
                <ProcessStep 
                  step={step} 
                  index={index} 
                  isVisible={visibleSteps.includes(index)} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-canto-bold">
              Unsere Leistungen im Überblick
            </h2>
          </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isExpanded = expandedServices.includes(index)
              
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div 
                    className="p-6 cursor-pointer rounded-2xl bg-card shadow-lg border border-border hover:border-[#e88906]/30 transition-all duration-300 hover:shadow-xl"
                    onClick={() => toggleService(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#e88906] to-[#cbaea5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground font-canto-bold">
                          {service.title}
                        </h3>
                      </div>
                      <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tooltip/Overlay Content - schwebt über anderen Elementen */}
                  <div className={`absolute left-0 right-0 top-full mt-2 z-50 transition-all duration-300 ${
                    isExpanded ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="p-4 rounded-xl bg-card shadow-2xl border border-[#e88906]/20">
                      <p className="text-muted-foreground font-muli text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grafiken Section */}
      <GrafikenSection
        title="Professionelle Grafikerstellung"
        backgroundColor="gray"
        variant="services"
      />
    </main>
  )
}
