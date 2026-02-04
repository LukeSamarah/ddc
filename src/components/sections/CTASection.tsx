interface CTASectionProps {
  subtitle: string
  text: string
}

export default function CTASection({ subtitle, text }: CTASectionProps) {
  return (
    <div className="bg-gradient-to-r from-brand-secondary to-brand-tertiary py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-2xl font-semibold text-brand-black mb-4">
          {subtitle}
        </h3>
        <p className="text-lg text-brand-black/80 leading-relaxed mb-8">
          {text}
        </p>
        <a
          href="/kontakt"
          className="inline-flex items-center bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Kontakt aufnehmen
        </a>
      </div>
    </div>
  )
}
