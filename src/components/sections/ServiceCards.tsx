'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  color: string
}

interface ServiceCardsProps {
  services: Service[]
}

export default function ServiceCards({ services }: ServiceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(services.length).fill(false))
  const rafRef = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY)
    })
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardsRef.current.findIndex(card => card === entry.target)
        if (index !== -1) {
          setIsVisible(prev => {
            const newVisible = [...prev]
            newVisible[index] = entry.isIntersecting
            return newVisible
          })
        }
      })
    }, observerOptions)

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  return (
    <div ref={containerRef} className="min-h-screen py-32 bg-gradient-to-br from-brand-tertiary via-brand-secondary/20 to-brand-tertiary relative overflow-hidden">
      {/* Actively Moving Milk Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <style jsx>{`
          @keyframes floatBubble1 {
            0% { transform: translate3d(0px, 0px, 0) scale(1); }
            25% { transform: translate3d(30px, -20px, 0) scale(1.1); }
            50% { transform: translate3d(-15px, -40px, 0) scale(0.9); }
            75% { transform: translate3d(20px, -25px, 0) scale(1.05); }
            100% { transform: translate3d(0px, 0px, 0) scale(1); }
          }
          @keyframes floatBubble2 {
            0% { transform: translate3d(0px, 0px, 0) scale(1); }
            33% { transform: translate3d(-25px, 15px, 0) scale(0.8); }
            66% { transform: translate3d(40px, -10px, 0) scale(1.2); }
            100% { transform: translate3d(0px, 0px, 0) scale(1); }
          }
          @keyframes floatBubble3 {
            0% { transform: translate3d(0px, 0px, 0) scale(1); }
            20% { transform: translate3d(15px, 25px, 0) scale(1.1); }
            40% { transform: translate3d(-30px, 10px, 0) scale(0.9); }
            60% { transform: translate3d(25px, -15px, 0) scale(1.05); }
            80% { transform: translate3d(-10px, 20px, 0) scale(0.95); }
            100% { transform: translate3d(0px, 0px, 0) scale(1); }
          }
          @keyframes driftUp {
            0% { transform: translate3d(0px, 0px, 0); opacity: 0.4; }
            50% { transform: translate3d(20px, -50px, 0); opacity: 0.8; }
            100% { transform: translate3d(-15px, -100px, 0); opacity: 0.2; }
          }
          @keyframes driftSide {
            0% { transform: translate3d(0px, 0px, 0); }
            25% { transform: translate3d(50px, 10px, 0); }
            50% { transform: translate3d(80px, -20px, 0); }
            75% { transform: translate3d(30px, 5px, 0); }
            100% { transform: translate3d(0px, 0px, 0); }
          }
          .float-bubble-1 { animation: floatBubble1 12s ease-in-out infinite; }
          .float-bubble-2 { animation: floatBubble2 15s ease-in-out infinite 2s; }
          .float-bubble-3 { animation: floatBubble3 18s ease-in-out infinite 4s; }
          .drift-up-1 { animation: driftUp 20s ease-in-out infinite; }
          .drift-up-2 { animation: driftUp 25s ease-in-out infinite 5s; }
          .drift-side-1 { animation: driftSide 22s ease-in-out infinite; }
          .drift-side-2 { animation: driftSide 28s ease-in-out infinite 8s; }
        `}</style>
        
        {/* Large floating bubbles with complex movement */}
        <div 
          className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full blur-lg float-bubble-1"
          style={{ 
            transform: `translate3d(${scrollY * 0.05}px, ${scrollY * 0.02}px, 0)`,
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute top-1/4 right-16 w-24 h-24 bg-brand-primary/20 rounded-full blur-md float-bubble-2"
          style={{ 
            transform: `translate3d(${scrollY * -0.03}px, ${scrollY * 0.04}px, 0)`,
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-brand-secondary/25 rounded-full blur-sm float-bubble-3"
          style={{ 
            transform: `translate3d(${scrollY * 0.02}px, ${scrollY * -0.06}px, 0)`,
            willChange: 'transform'
          }}
        />
        
        {/* Medium bubbles with drift animations */}
        <div 
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/40 rounded-full blur-sm drift-side-1"
          style={{ 
            transform: `translate3d(${scrollY * 0.08}px, ${scrollY * 0.03}px, 0)`,
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute top-20 right-1/3 w-12 h-12 bg-brand-primary/30 rounded-full blur-sm drift-up-1"
          style={{ 
            transform: `translate3d(${scrollY * -0.06}px, ${scrollY * 0.05}px, 0)`,
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute bottom-10 right-10 w-14 h-14 bg-brand-secondary/35 rounded-full blur-sm drift-side-2"
          style={{ 
            transform: `translate3d(${scrollY * 0.04}px, ${scrollY * -0.04}px, 0)`,
            willChange: 'transform'
          }}
        />
        
        {/* Small active particles */}
        <div 
          className="absolute top-1/3 left-1/2 w-8 h-8 bg-white/50 rounded-full drift-up-2"
          style={{ 
            transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.06}px, 0)`,
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute top-3/4 left-20 w-6 h-6 bg-brand-primary/40 rounded-full float-bubble-1"
          style={{ 
            transform: `translate3d(${scrollY * -0.08}px, ${scrollY * 0.07}px, 0)`,
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-brand-secondary/30 rounded-full drift-side-1"
          style={{ 
            transform: `translate3d(${scrollY * 0.06}px, ${scrollY * -0.05}px, 0)`,
            willChange: 'transform'
          }}
        />
        
        {/* Tiny swimming dots */}
        <div 
          className="absolute top-40 left-3/4 w-4 h-4 bg-white/60 rounded-full float-bubble-2"
          style={{ 
            transform: `translate3d(${scrollY * 0.12}px, ${scrollY * 0.04}px, 0)`,
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute bottom-40 left-10 w-5 h-5 bg-brand-primary/50 rounded-full drift-up-1"
          style={{ 
            transform: `translate3d(${scrollY * -0.04}px, ${scrollY * -0.08}px, 0)`,
            willChange: 'transform'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Minimal Header */}
        <div className="text-center mb-32">
          <h1 className="text-7xl font-bold text-brand-black mb-8 tracking-tight">
            Services
          </h1>
          <div className="w-32 h-0.5 bg-brand-primary mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={service.id}
                ref={(el) => { cardsRef.current[index] = el }}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                } transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isVisible[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                {/* Image/Icon Side */}
                <div className="flex-1 flex justify-center">
                  <div 
                    className={`relative w-80 h-80 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-700 ease-out ${
                      isVisible[index] ? 'scale-100' : 'scale-90'
                    }`}
                    style={{
                      transform: `translateY(${scrollY * (isEven ? 0.02 : -0.02)}px)`,
                      willChange: 'transform'
                    }}
                  >
                    <div className="text-8xl filter drop-shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div 
                  className="flex-1 text-center lg:text-left"
                  style={{
                    transform: `translateY(${scrollY * (isEven ? -0.01 : 0.01)}px)`,
                    willChange: 'transform'
                  }}
                >
                  <h2 className="text-5xl lg:text-6xl font-bold text-brand-black mb-8 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className={`h-1 bg-brand-primary mt-8 ${
                    !isEven ? 'lg:ml-auto' : ''
                  } mx-auto lg:mx-0 transition-all duration-800 ease-out ${
                    isVisible[index] ? 'w-24' : 'w-0'
                  }`} style={{ 
                    transitionDelay: `${index * 150 + 300}ms`,
                    willChange: 'width'
                  }} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Spacing */}
        <div className="h-32" />
      </div>
    </div>
  )
}
