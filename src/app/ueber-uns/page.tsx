import TextSectionNew from '@/components/sections/TextSectionNew'
import ImageTextSectionNew from '@/components/sections/ImageTextSectionNew'
import { content } from '@/data/content'
import Image from 'next/image'

export default function UeberUnsPage() {
  const { hero, sections } = content.ueberUns

  return (
    <main className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e88906] via-[#e88906] to-[#cbaea5] pt-32 pb-20 sm:pt-40 sm:pb-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float-1"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-white/15 rounded-full animate-float-2"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-white/25 rounded-full animate-float-3"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-white/20 rounded-full animate-float-1"></div>
        <div className="absolute top-40 left-1/2 w-4 h-4 bg-white/15 rounded-full animate-float-2"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-float-3"></div>
        <div className="absolute top-60 right-10 w-7 h-7 bg-white/10 rounded-full animate-float-1"></div>
        <div className="absolute bottom-60 left-20 w-4 h-4 bg-white/20 rounded-full animate-float-2"></div>
        
        {/* Large Background Blurs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto pt-16 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-canto-bold">
              Über uns
            </h1>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/10 via-black/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2eae5] rounded-full text-sm font-medium text-foreground">
                <svg className="w-4 h-4 text-[#e88906]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Über uns
              </div>

              {/* Large Title */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-tight font-canto-bold">
                {hero.title}
              </h2>
              
              {/* Text Content */}
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-muli">
                {hero.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {/* Dark Box */}
              <div className="bg-primary rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-semibold text-white mb-3 font-canto-bold">
                  Meine Mission
                </h3>
                <p className="text-primary-foreground/80 font-muli">
                  Social Media soll für Unternehmen keine Belastung sein, sondern ein kraftvolles Werkzeug für Wachstum und Sichtbarkeit.
                </p>
              </div>
              
              {/* Bottom Text */}
              <p className="text-muted-foreground font-muli italic">
                Mit Leidenschaft und Know-how für Ihren Erfolg.
              </p>
            </div>
            
            {/* Right: Image Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                  <Image
                    src={hero.image || "/placeholder.svg"}
                    alt="Amelie Klein - Gründerin von Daily Dose of Content"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 30%' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section, index) => {
        if (section.type === 'text') {
          return (
            <TextSectionNew
              key={index}
              title={section.title}
              content={section.content}
              backgroundColor={section.backgroundColor}
              badge="Leitbild"
            />
          )
        }
        if (section.type === 'imageText') {
          // First imageText section (Leitbild) - image left, hidden on mobile
          if (index === 0) {
            return (
              <ImageTextSectionNew
                key={index}
                title={section.title}
                content={section.content}
                backgroundColor={section.backgroundColor}
                images={section.images}
                button={section.button}
                badge="Leitbild"
                imagePosition="left"
                hideImageOnMobile={true}
              />
            )
          }
          // Second imageText section (Vision) - image right, visible on mobile
          else {
            return (
              <ImageTextSectionNew
                key={index}
                title={section.title}
                content={section.content}
                backgroundColor={section.backgroundColor}
                images={section.images}
                button={section.button}
                badge="Vision"
                imagePosition="right"
                hideImageOnMobile={false}
              />
            )
          }
        }
        return null
      })}
    </main>
  )
}
