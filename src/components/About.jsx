import React, { useState } from 'react'
import aboutImg from '../assets/hero-image-watermark-removed.webp'
import ScrollReveal from './ScrollReveal'

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-[72px] lg:py-[120px] bg-bg overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[72px] items-center">
          
          {/* Left: Image */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal>
              {/* Changed group-hover to lg:group-hover to prevent ghost hovers on mobile */}
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-line group">
                <img 
                  src={aboutImg} 
                  alt="About Northstar Homes" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
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
              <p className="text-[17px] lg:text-[20px] leading-[1.6] text-ink/80 font-medium mb-8 lg:mb-10 border-l-2 border-accent pl-5">
                At Northstar, every project begins with people — their dreams, their comfort, their lifestyle, and their future.
              </p>
            </ScrollReveal>
            
            {/* Magazine-style text split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10">
              <ScrollReveal delay={0.4}>
                <p className="text-[15px] leading-[1.8] text-muted">
                  Established in 2012, Northstar Homes has grown into a trusted real estate developer across Hyderabad and Visakhapatnam, creating premium apartments, luxury villas, plotted communities, and commercial spaces. Our developments are shaped with thoughtful design and responsible planning.
                </p>
              </ScrollReveal>
              
              <div className="flex flex-col justify-between">
                <ScrollReveal delay={0.5}>
                  {/* On mobile, this paragraph is hidden unless expanded. On desktop (md), always visible */}
                  <div className={`${isExpanded ? 'block' : 'hidden md:block'}`}>
                    <p className="text-[15px] leading-[1.8] text-muted mb-6">
                      For us, real estate is not just about building structures. It is about creating places where families grow, communities come together, and everyday life feels more meaningful.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Mobile Read More Toggle */}
                <ScrollReveal delay={0.5}>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="md:hidden text-[12px] font-bold uppercase tracking-[0.15em] text-accent mt-2 flex items-center gap-1"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                    <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                </ScrollReveal>
                
                <ScrollReveal delay={0.6}>
                  <div className="mt-6 md:mt-0">
                    <a
                      href="#coming-soon"
                      className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-ink font-bold border-b border-accent pb-[2px] lg:hover:text-accent transition-colors group"
                    >
                      Read Our Story 
                      <span className="transition-transform lg:group-hover:translate-x-1">&rarr;</span>
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
