import Image from 'next/image'

interface ClientLogosSectionProps {
  title: string
  backgroundColor?: 'white' | 'gray'
}

const clientLogos = [
  { name: "ISOTEC", src: "/referenzen/logos/logo-isotec.png" },
  { name: "Almdorfbau", src: "/referenzen/logos/logo-almdorfbau.png" },
  { name: "Sprügel", src: "/referenzen/logos/logo-spruegel.png" },
  { name: "JR Consulting", src: "/referenzen/logos/logo-jr-consulting.png" },
  { name: "Eifeltrecker", src: "/referenzen/logos/logo-eifeltrecker.svg" }
]

export default function ClientLogosSection({
  title,
  backgroundColor = 'white'
}: ClientLogosSectionProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-secondary' : 'bg-card'

  return (
<section className="py-24 sm:py-32 bg-[#FFF3E6] bg-[rgba(242,234,229,1)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-canto-bold">
            {title}
          </h2>
        </div>
        
{/* Static Client Logos Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center max-w-6xl">
            {clientLogos.map((client) => (
              <div 
                key={client.name}
                className="flex items-center justify-center h-24 transition-all duration-300 hover:-translate-y-1"
              >
                {client.src ? (
                  <Image
                    src={client.src || "/placeholder.svg"}
                    alt={`${client.name} Logo - Kunde von Daily Dose of Content`}
                    width={160}
                    height={80}
                    className="object-contain max-h-20 w-auto"
                    sizes="(max-width: 768px) 50vw, 160px"
                  />
                ) : (
                  <div className="text-muted-foreground font-semibold text-sm">
                    {client.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
