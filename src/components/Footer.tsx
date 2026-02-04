import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/service' },
  { name: 'Referenzen', href: '/referenzen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'FAQ', href: '/faq' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-tertiary to-brand-secondary shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          {/* Logo & Brand Section */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="block">
              <Image
                src="/logo-daily-dose-of-content.png"
                alt="Daily Dose of Content Logo"
                width={350}
                height={140}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-lg text-black/80 leading-relaxed max-w-sm">
              Professionelle Social Media Betreuung für mittelständische Unternehmen. 
              Wir schaffen Sichtbarkeit und authentische Verbindungen.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Mobile: Navigation first, Desktop: Navigation first */}
            <div className="md:grid md:grid-cols-2 md:gap-8 xl:order-1">
              <div>
                <h3 className="text-lg font-semibold text-black mb-6">Navigation</h3>
                <ul role="list" className="space-y-4">
                  {navigation.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-foreground/70 hover:text-brand-primary transition-colors duration-200 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Mobile: Kontakt second, Desktop: Mehr second */}
              <div className="mt-12 md:mt-0 md:hidden">
                <h3 className="text-lg font-semibold text-black mb-6">Kontakt</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <a 
                      href="mailto:klein@dailydoseofcontent.de"
                      className="text-base text-foreground/70 hover:text-brand-primary transition-colors duration-200"
                    >
                      klein@dailydoseofcontent.de
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+4915758774195"
                      className="text-base text-foreground/70 hover:text-brand-primary transition-colors duration-200"
                    >
                      +49 157 58774195
                    </a>
                  </li>
                  <li className="pt-2">
                    <span className="text-sm text-black/60">
                      Montag - Freitag: 9:00 - 18:00 Uhr
                    </span>
                  </li>
                </ul>
              </div>
              {/* Desktop: Mehr second */}
              <div className="mt-12 md:mt-0 hidden md:block xl:block">
                <h3 className="text-lg font-semibold text-black mb-6">Mehr</h3>
                <ul role="list" className="space-y-4">
                  {navigation.slice(3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-foreground/70 hover:text-brand-primary transition-colors duration-200 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Desktop: Kontakt third, Mobile: Mehr second */}
            <div className="md:grid md:grid-cols-1 md:gap-8 xl:order-2">
              {/* Mobile: Mehr section */}
              <div className="md:hidden">
                <h3 className="text-lg font-semibold text-black mb-6">Mehr</h3>
                <ul role="list" className="space-y-4">
                  {navigation.slice(3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-foreground/70 hover:text-brand-primary transition-colors duration-200 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Desktop: Kontakt section */}
              <div className="hidden xl:block">
                <h3 className="text-lg font-semibold text-black mb-6">Kontakt</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <a 
                      href="mailto:klein@dailydoseofcontent.de"
                      className="text-base text-foreground/70 hover:text-brand-primary transition-colors duration-200"
                    >
                      klein@dailydoseofcontent.de
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+4915758774195"
                      className="text-base text-foreground/70 hover:text-brand-primary transition-colors duration-200"
                    >
                      +49 157 58774195
                    </a>
                  </li>
                  <li className="pt-2">
                    <span className="text-sm text-black/60">
                      Montag - Freitag: 9:00 - 18:00 Uhr
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-secondary/40">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} Daily Dose of Content. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/datenschutz" className="text-foreground/60 hover:text-brand-primary transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-foreground/60 hover:text-brand-primary transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Impressum
              </Link>
              {/* <Link href="/agb" className="text-black/60 hover:text-[#e88906] transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                AGB
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
