import { FormattedContent } from '@/lib/formatContent'

interface VideoSectionProps {
  title: string
  content: string
  backgroundColor?: 'white' | 'gray'
}

export default function VideoSection({
  title,
  content,
  backgroundColor = 'white'
}: VideoSectionProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-[#FFF3E6]' : 'bg-card'

  return (
    <div className={`${bgClass} py-12 sm:py-16 lg:py-24 xl:py-32 bg-[rgba(242,235,230,1)]`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* iPhone 15 Pro Mockup links */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* iPhone im Querformat */}
              <div className="relative scale-75 md:scale-90">
                {/* Outer iPhone Frame - Titan Effect */}
                <div className="relative bg-gradient-to-br from-[#d1d5db] via-[#9ca3af] to-[#6b7280] rounded-[60px] p-2 shadow-2xl">
                  {/* Inner iPhone Frame - Black Bezel */}
                  <div className="relative bg-black rounded-[52px] p-2 overflow-hidden">

                    {/* Status Bar */}
                    <div className="absolute top-2 left-0 right-0 z-20 flex justify-between items-center px-6 py-2 text-white text-xs font-semibold">
                      <span className="time">9:41</span>
                      <div className="dynamic-island w-32 h-7 bg-black rounded-full"></div>
                      <div className="battery flex items-center gap-1">
                        <span>100%</span>
                        <div className="battery-icon w-6 h-3 border border-white rounded-sm">
                          <div className="w-full h-full bg-[#22c55e] rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* iPhone Screen mit Video */}
                    <div className="relative bg-black rounded-[48px] w-[390px] h-[844px] overflow-hidden">
                      <video
                        className="absolute top-11 left-0 w-full h-[calc(100%-44px)] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/videos/showcase-poster.webp"
                      >
                        <source src="/videos/social-media-content-showcase.webm" type="video/webm" />
                      </video>
                    </div>

                    {/* Side Buttons */}
                    <div className="absolute -left-1 top-20 w-1 h-12 bg-[#9ca3af] rounded-r"></div>
                    <div className="absolute -left-1 top-36 w-1 h-8 bg-[#9ca3af] rounded-r"></div>
                    <div className="absolute -left-1 top-48 w-1 h-8 bg-[#9ca3af] rounded-r"></div>
                    <div className="absolute -right-1 top-32 w-1 h-20 bg-[#9ca3af] rounded-l"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text rechts */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-canto-bold">
              {title}
            </h2>
            <div className="mt-8 text-base leading-7 text-muted-foreground space-y-4 sm:text-lg sm:leading-8 font-muli">
              <FormattedContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
