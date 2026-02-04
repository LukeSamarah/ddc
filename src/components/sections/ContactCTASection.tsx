import Link from 'next/link'

interface ContactCTASectionProps {
  backgroundColor?: 'white' | 'gray'
}

export default function ContactCTASection({ 
  backgroundColor = 'gray' 
}: ContactCTASectionProps) {
  const bgColor = backgroundColor === 'gray' ? 'bg-muted' : 'bg-background'
  
  return (
    <section className={`py-20 sm:py-32 bg-[rgba(242,235,230,1)] ${bgColor} relative`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Floating Bubbles */}
          <div className="absolute top-8 left-8 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-16 right-16 w-4 h-4 bg-white/15 rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 right-8 w-5 h-5 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-12 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-8 right-1/3 w-4 h-4 bg-white/15 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          
          {/* Large Background Blurs */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 right-4 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-canto-bold">
              Bereit für mehr Sichtbarkeit?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-muli leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Social Media Präsenz auf das nächste Level bringen. 
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 px-8 py-4 bg-card text-brand-primary font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Jetzt Kontakt aufnehmen
              </Link>
              
              <a
                href="tel:+4915758774195"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 hover:bg-white/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 157 58774195
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
