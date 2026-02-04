import Link from 'next/link'
import Image from 'next/image'

interface ImageTextSectionNewProps {
  title: string
  content: string
  images: string[]
  button?: {
    text: string
    href: string
  }
  backgroundColor?: 'white' | 'gray'
  badge?: string
  imagePosition?: 'left' | 'right'
  hideImageOnMobile?: boolean
}

export default function ImageTextSectionNew({ 
  title, 
  content, 
  images, 
  button, 
  backgroundColor = 'white',
  badge,
  imagePosition = 'right',
  hideImageOnMobile = false
}: ImageTextSectionNewProps) {
  const bgColor = backgroundColor === 'gray' ? 'bg-[#FFF3E6]' : 'bg-card'
  
  const textContent = (
    <div className="space-y-6">
      {/* Pill Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2eae5] rounded-full text-sm font-medium text-foreground bg-accent">
          <svg className="w-4 h-4 text-[#e88906]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
          </svg>
          {badge}
        </div>
      )}
      
      {/* Large Title */}
      <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-tight font-canto-bold">
        {title}
      </h2>
      
      {/* Text Content */}
      <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-muli">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={paragraph.startsWith('**') ? 'font-semibold text-foreground' : ''}>
            {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
          </p>
        ))}
      </div>
      
      {/* Dark Box (only if no button) */}
      {!button && (
        <div className="bg-primary rounded-2xl p-6 mt-8">
          <h3 className="text-xl font-semibold text-white mb-3 font-canto-bold">
            Unser Ansatz
          </h3>
          <p className="text-primary-foreground/80 font-muli">
            Wir glauben an die Kraft authentischer Inhalte und strategischer Planung für nachhaltigen Social Media Erfolg.
          </p>
        </div>
      )}
      
      {/* Orange Button */}
      {button && (
        <div className="pt-4">
          <Link 
            href={button.href}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#e88906] hover:bg-[#e88906]/90 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {button.text}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
      
      {/* Bottom Text (only if no button) */}
      {!button && (
        <p className="text-muted-foreground font-muli italic">
          Effizient, individuell und mit spürbaren Ergebnissen.
        </p>
      )}
    </div>
  )
  
  const imageContent = (
    <div className={`${hideImageOnMobile ? 'hidden lg:flex' : 'flex'} justify-center ${imagePosition === 'left' ? 'lg:justify-start' : 'lg:justify-end'}`}>
      <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={`${title} - Daily Dose of Content`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 448px"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
  
  return (
    <section className={`py-20 bg-accent ${bgColor} relative`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
