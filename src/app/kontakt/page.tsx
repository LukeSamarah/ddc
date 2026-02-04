'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!acceptPrivacy) {
      setSubmitStatus('error')
      setErrorMessage('Bitte stimmen Sie der Datenschutzerklärung zu.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        setAcceptPrivacy(false)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Ein Fehler ist aufgetreten')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Netzwerkfehler. Bitte versuchen Sie es später erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary pt-32 pb-20 sm:pt-40 sm:pb-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float-1"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-white/15 rounded-full animate-float-2"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-white/25 rounded-full animate-float-3"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-white/20 rounded-full animate-float-1"></div>
        <div className="absolute top-40 left-1/2 w-4 h-4 bg-white/15 rounded-full animate-float-2"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-float-3"></div>
        <div className="absolute top-60 right-10 w-7 h-7 bg-white/10 rounded-full animate-float-1"></div>
        <div className="absolute bottom-60 left-20 w-4 h-4 bg-white/20 rounded-full animate-float-2"></div>
        
        {/* Large Background Blurs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto pt-16 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-canto-bold">
              Kontakt aufnehmen
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/10 via-black/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-canto-bold">
                Kontaktieren Sie uns
              </h2>
              
              <div className="space-y-6 text-surface-foreground font-muli">
                <div className="text-lg leading-8 space-y-4">
                  <p>
                    Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren?
                  </p>
                  <p>
                    Wir freuen uns darauf, von Ihnen zu hören und gemeinsam zu besprechen, wie wir Ihnen helfen können.
                  </p>
                  <p>
                    Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-xl border border-brand-primary/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                      <a 
                        href="mailto:klein@dailydoseofcontent.de"
                        className="text-brand-primary hover:text-brand-primary/80 transition-colors duration-200 font-medium"
                      >
                        klein@dailydoseofcontent.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-xl border border-brand-primary/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                      <a 
                        href="tel:+4915758774195"
                        className="text-brand-primary hover:text-brand-primary/80 transition-colors duration-200 font-medium"
                      >
                        +49 157 58774195
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-canto-bold">
                Nachricht senden
              </h2>
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success-muted border border-success/20 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-success font-medium">
                      Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-error-muted border border-error/20 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-error font-medium">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 bg-card disabled:bg-muted disabled:cursor-not-allowed"
                      placeholder="Ihr Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 bg-card disabled:bg-muted disabled:cursor-not-allowed"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 bg-card disabled:bg-muted disabled:cursor-not-allowed"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 bg-card resize-none disabled:bg-muted disabled:cursor-not-allowed"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  ></textarea>
                </div>
                
                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    disabled={isSubmitting}
                    className="mt-1 w-4 h-4 text-brand-primary border-border rounded focus:ring-ring focus:ring-2 disabled:cursor-not-allowed"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    Ich habe die{' '}
                    <Link href="/datenschutz" className="text-brand-primary hover:text-brand-primary/80 underline transition-colors">
                      Datenschutzerklärung
                    </Link>{' '}
                    gelesen und stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu. *
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-primary-foreground font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wird gesendet...
                    </span>
                  ) : (
                    'Nachricht senden'
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
