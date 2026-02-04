'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'Referenzen', href: '/referenzen' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'FAQ', href: '/faq' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false)
            }
        }

        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [mobileMenuOpen])

    return (
        <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
            <nav
                ref={navRef}
                className="mx-auto max-w-7xl bg-card/95 backdrop-blur-md rounded-2xl shadow-lg shadow-foreground/5 border border-border/20"
                aria-label="Top"
                style={{ padding: '0' }}
            >
                <div
                    className="flex w-full items-center justify-between px-6 py-4"
                >
                    <div className="flex items-center -my-6">
                        <Link href="/" className="block">
                            <Image
                                src="/logo-header.png"
                                alt="Daily Dose Logo"
                                width={200}
                                height={120}
                                className="h-28 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className="ml-10 hidden space-x-1 lg:block">
                        {navigation.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="inline-block px-4 py-2 text-lg font-medium text-foreground hover:text-brand-primary transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button Desktop */}
                    <div className="hidden lg:block">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center rounded-lg bg-brand-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-brand-primary/90 transition-colors duration-200"
                        >
                            Jetzt starten
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted/50 hover:text-brand-primary transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Menu öffnen</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile navigation */}
                <div 
                    className={`lg:hidden border-t border-border/20 bg-card/95 backdrop-blur-md rounded-b-2xl overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileMenuOpen 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className={`space-y-1 px-6 pb-3 pt-2 transition-transform duration-300 ease-in-out ${
                        mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
                    }`}>
                        {navigation.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block rounded-lg px-4 py-2 text-base font-medium text-foreground hover:bg-muted/50 hover:text-brand-primary transition-all duration-200 ${
                                    mobileMenuOpen 
                                        ? 'translate-x-0 opacity-100' 
                                        : 'translate-x-4 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                                }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/kontakt"
                            className={`block rounded-lg bg-brand-primary px-4 py-2 text-base font-semibold text-primary-foreground text-center hover:bg-brand-primary/90 transition-all duration-200 mt-3 ${
                                mobileMenuOpen 
                                    ? 'translate-x-0 opacity-100 scale-100' 
                                    : 'translate-x-4 opacity-0 scale-95'
                            }`}
                            style={{
                                transitionDelay: mobileMenuOpen ? `${navigation.length * 50}ms` : '0ms'
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Jetzt starten
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
