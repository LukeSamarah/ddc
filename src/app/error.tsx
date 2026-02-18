'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-foreground mb-4 font-canto-bold">
          Etwas ist schiefgelaufen
        </h1>
        <p className="text-lg text-muted-foreground mb-8 font-muli">
          Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary/90 transition-colors duration-200"
        >
          Erneut versuchen
        </button>
      </div>
    </main>
  )
}
