'use client'

import React from "react"

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with /api/contact endpoint
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.')
  }

  return (
    <div className="bg-gradient-to-b from-card to-[#fff7ed] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Kontakt
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground sm:text-2xl font-medium">
            Lassen Sie uns über Ihr Projekt sprechen
          </p>
          <p className="mt-4 text-lg leading-7 text-muted-foreground">
            Wir freuen uns darauf, von Ihnen zu hören und gemeinsam zu besprechen, 
            wie wir Ihnen helfen können.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
          {/* Kontakt Informationen */}
          <div className="lg:pr-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sprechen Sie uns an
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? 
                Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.
              </p>
              
              <div className="mt-10 space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e88906]">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">E-Mail</h3>
                    <p className="text-muted-foreground">info@dailydose.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e88906]">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Telefon</h3>
                    <p className="text-muted-foreground">+49 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e88906]">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Antwortzeit</h3>
                    <p className="text-muted-foreground">Innerhalb von 24 Stunden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kontakt Formular */}
          <div className="lg:pl-4">
            <div className="mx-auto max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                      Vor- und Nachname *
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-[#e88906] sm:text-sm sm:leading-6 transition-colors"
                        placeholder="Max Mustermann"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-foreground">
                      Unternehmen
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-[#e88906] sm:text-sm sm:leading-6 transition-colors"
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                    E-Mail Adresse *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-[#e88906] sm:text-sm sm:leading-6 transition-colors"
                      placeholder="max.mustermann@beispiel.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground">
                    Telefonnummer
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-[#e88906] sm:text-sm sm:leading-6 transition-colors"
                      placeholder="+49 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                    Ihre Nachricht *
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-[#e88906] sm:text-sm sm:leading-6 transition-colors resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt oder Ihre Fragen..."
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-lg bg-[#e88906] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#d67905] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e88906] transition-all duration-200 transform hover:scale-105"
                  >
                    Nachricht senden
                  </button>
                </div>

                <p className="text-xs leading-5 text-muted-foreground">
                  * Pflichtfelder. Durch das Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
