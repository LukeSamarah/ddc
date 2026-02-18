import Image from 'next/image'
import { FormattedContent } from '@/lib/formatContent'

interface ImageTextSectionProps {
  title: string
  content: string
  imagePosition?: 'left' | 'right'
  backgroundColor?: 'white' | 'gray'
  images?: string[]
  showVideo?: boolean
  button?: {
    text: string
    href: string
  }
}

export default function ImageTextSection({
  title,
  content,
  imagePosition = 'right',
  backgroundColor = 'white',
  images,
  showVideo = false,
  button
}: ImageTextSectionProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-secondary' : 'bg-card'
  const isImageLeft = imagePosition === 'left'

  return (
    <div className={`${bgClass} py-12 sm:py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className={`lg:pt-4 ${isImageLeft ? 'lg:order-2' : ''}`}>
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl font-canto-bold">
                {title}
              </h3>
              <div className="mt-6 text-base leading-7 text-muted-foreground space-y-4 sm:text-lg sm:leading-8 font-muli">
                <FormattedContent content={content} />
              </div>
              {button && (
                <div className="mt-8">
                  <a
                    href={button.href}
                    className="inline-flex items-center rounded-md bg-[#e88906] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#e88906]/90 transition-colors duration-200"
                  >
                    {button.text}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className={`flex items-center justify-center ${isImageLeft ? 'lg:order-1' : ''}`}>
            <div className="w-full max-w-md">
              {showVideo ? (
                <div className="bg-black p-2 rounded-lg shadow-2xl">
                  <div className="relative overflow-hidden rounded">
                    <video
                      className="w-full h-auto max-w-sm"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/videos/hero-poster.webp"
                    >
                      <source src="/videos/social-media-agentur-hero-video.webm" type="video/webm" />
                    </video>
                  </div>
                </div>
              ) : images && images.length > 0 ? (
                <div className="border-4 border-[#e88906]/20 rounded-2xl overflow-hidden shadow-xl bg-white p-4">
                  <Image
                    src={images[0] || "/placeholder.svg"}
                    alt={title || "Daily Dose of Content - Social Media Agentur"}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              ) : (
<div className="border-4 border-dashed border-border rounded-2xl bg-secondary p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="text-sm">Bild wird geladen...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
