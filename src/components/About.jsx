import React from 'react'
import aboutImg from '../assets/hero-image-watermark-removed.webp'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-16 overflow-hidden bg-bg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left: Image */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal>
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-line group">
                <img 
                  src={aboutImg} 
                  alt="About Northstar Homes" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Condensed Copy Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <ScrollReveal delay={0.1}>
              <p className="mb-4 text-[11px] tracking-[0.3em] uppercase text-accent font-bold">
                About Northstar
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="text-[36px] lg:text-[46px] leading-[1.1] font-heading text-ink mb-6">
                We Build Spaces Where Life Feels Truly at Home.
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-[18px] lg:text-[20px] leading-[1.6] text-ink/80 font-medium mb-10 border-l-2 border-accent pl-5">
                At Northstar, every project begins with people — their dreams, their comfort, their lifestyle, and their future.
              </p>
            </ScrollReveal>
            
            {/* Magazine-style text split to reduce height and heavy reading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <ScrollReveal delay={0.4}>
                <p className="text-[15px] leading-[1.8] text-muted">
                  Established in 2012, Northstar Homes has grown into a trusted real estate developer across Hyderabad and Visakhapatnam, creating premium apartments, luxury villas, plotted communities, and commercial spaces. Our developments are shaped with thoughtful design and responsible planning.
                </p>
              </ScrollReveal>
              
              <div className="flex flex-col justify-between">
                <ScrollReveal delay={0.5}>
                  <p className="text-[15px] leading-[1.8] text-muted mb-6">
                    For us, real estate is not just about building structures. It is about creating places where families grow, communities come together, and everyday life feels more meaningful.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.6}>
                  <div>
                    <a
                      href="#coming-soon"
                      className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-ink font-bold border-b border-accent pb-[2px] hover:text-accent transition-colors group"
                    >
                      Read Our Story 
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
