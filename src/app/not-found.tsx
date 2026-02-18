import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-brand-primary mb-4">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-4 font-canto-bold">
          Seite nicht gefunden
        </h1>
        <p className="text-lg text-muted-foreground mb-8 font-muli">
          Die angeforderte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary/90 transition-colors duration-200"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  )
}
