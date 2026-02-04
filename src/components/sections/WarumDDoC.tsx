import Image from 'next/image'
import Link from 'next/link'

interface WarumDDoCProps {
  title?: string
  content?: string
  backgroundColor?: 'white' | 'gray'
}

export default function WarumDDoC({
  title,
  content,
  backgroundColor = 'white'
}: WarumDDoCProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-secondary' : 'bg-card'

  return (
    <div className={`${bgClass} py-12 sm:py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Bild links */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="w-full max-w-lg">
              <Image
                src="/social-media-management-laptop.png"
                alt="Daily Dose of Content"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text rechts */}
          <div className="flex items-center order-1 lg:order-2">
            <div className="lg:max-w-lg">
              {title && (
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl font-canto-bold">
                  {title}
                </h3>
              )}
              {content && (
                <div className="mt-6 text-base leading-7 text-muted-foreground space-y-4 sm:text-lg sm:leading-8 font-muli">
                  {content.split('\n\n').map((paragraph, index) => {
                    const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    return (
                      <p key={index} dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
                    );
                  })}
                </div>
              )}
              <div className="mt-8">
                <Link 
                  href="/ueber-uns"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#e88906] hover:bg-[#d67905] transition-colors duration-200 font-muli"
                >
                  Mehr über uns erfahren
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
