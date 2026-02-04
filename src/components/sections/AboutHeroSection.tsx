import Image from 'next/image'

interface AboutHeroSectionProps {
  title: string
  content: string
  image: string
  imagePosition?: 'left' | 'right'
}

export default function AboutHeroSection({
  title,
  content,
  image,
  imagePosition = 'right'
}: AboutHeroSectionProps) {
  const isImageLeft = imagePosition === 'left'

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className={`lg:pt-4 ${isImageLeft ? 'lg:order-2' : ''}`}>
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-canto-bold">
                {title}
              </h1>
              <div className="mt-8 text-lg leading-8 text-muted-foreground font-muli">
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={`flex items-center justify-center ${isImageLeft ? 'lg:order-1' : ''}`}>
            <div className="w-full max-w-md">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt="Amelie Klein, Gründerin von Daily Dose of Content"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
