import React from 'react'

export default function ComingSoon() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center min-h-[60vh] mt-[80px]">
      <h1 className="text-[clamp(40px,5vw,72px)] font-heading leading-tight mb-4 text-accent2d">
        Coming Soon
      </h1>
      <p className="text-lg text-muted max-w-lg mx-auto">
        We are actively working on this page. Please check back later for updates!
      </p>
      <a 
        href="#" 
        className="mt-8 inline-block px-8 py-4 bg-btn-bg text-btn-ink text-[13px] tracking-[0.16em] uppercase transition-transform hover:-translate-y-1"
      >
        Return to Home
      </a>
    </div>
  )
}
