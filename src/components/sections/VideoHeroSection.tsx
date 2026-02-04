'use client'

export default function VideoHeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/hero-poster.webp"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/social-media-agentur-hero-video.webm" type="video/webm" />
      </video>
      
<div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Wir kümmern uns um Ihr Social Media,
          </h1>
          <h2 className="text-3xl md:text-5xl font-light">
            damit Sie es nicht müssen.
          </h2>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="text-white hover:text-white/80 transition-colors cursor-pointer p-2"
          aria-label="Nach unten scrollen"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
