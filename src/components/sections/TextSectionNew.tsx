interface TextSectionNewProps {
  title: string
  content: string
  backgroundColor?: 'white' | 'gray'
  badge?: string
}

export default function TextSectionNew({ 
  title, 
  content, 
  backgroundColor = 'white',
  badge 
}: TextSectionNewProps) {
  const bgColor = backgroundColor === 'gray' ? 'bg-secondary' : 'bg-card'
  
  return (
    <section className={`py-20 ${bgColor} relative`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Pill Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2eae5] rounded-full text-sm font-medium text-foreground">
                <svg className="w-4 h-4 text-[#e88906]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
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
            
            {/* Dark Box */}
            <div className="bg-primary rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-white mb-3 font-canto-bold">
                Unser Ansatz
              </h3>
              <p className="text-primary-foreground/80 font-muli">
                Wir glauben an die Kraft authentischer Inhalte und strategischer Planung für nachhaltigen Social Media Erfolg.
              </p>
            </div>
            
            {/* Bottom Text */}
            <p className="text-muted-foreground font-muli italic">
              Effizient, individuell und mit spürbaren Ergebnissen.
            </p>
          </div>
          
          {/* Right: Placeholder Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#e88906] to-[#cbaea5] flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Unser Leitbild</h3>
                  <p className="text-sm opacity-90">Social Media, das funktioniert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
