import React from 'react'
import heroVideo from '../assets/hero video eden.mp4'

export default function Hero() {
  return (
    <section id="top" className="relative w-full h-screen bg-deep overflow-hidden">
      <video 
        src={heroVideo} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover"
      />
    </section>
  )
}
