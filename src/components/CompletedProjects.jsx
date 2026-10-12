import React from 'react'
import { siteConfig } from '../siteConfig'

export default function CompletedProjects() {
  const completed = siteConfig.projects.filter(p => p.status === 'Completed');
  
  // Duplicate array 4 times for continuous, seamless infinite loop
  const infiniteCompleted = [...completed, ...completed, ...completed, ...completed];

  return (
    <section id="completed-projects" className="bg-bg border-b border-line pt-[64px] pb-16 max-[880px]:pt-[40px] max-[880px]:pb-[64px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-8">
        <div className="flex flex-wrap justify-between items-end gap-6">
          <div>
            <p className="mb-2 text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold">
              Delivered Communities
            </p>
            <h2 className="text-[clamp(32px,3.4vw,48px)] leading-[1.12] font-heading font-normal text-ink">
              Completed Projects
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.18em] text-muted font-body">
              Hover to pause
            </span>
            <a 
              href="#coming-soon" 
              className="text-[12px] font-medium tracking-[0.16em] uppercase text-accent hover:text-ink transition-colors flex items-center gap-2 font-body"
            >
              View All <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Gliding Carousel Track */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft fading edges for editorial luxury depth */}
        <div className="absolute top-0 left-0 w-[120px] max-[880px]:w-[60px] h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[120px] max-[880px]:w-[60px] h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        {/* Continuous Gliding Rail — Slower than Logo ticker (65s), Pauses on Hover */}
        <div className="flex animate-marquee-slow w-max items-center py-2 cursor-pointer">
          {infiniteCompleted.map((project, idx) => (
            <a 
              href="#coming-soon" 
              key={`${project.id}-${idx}`} 
              className="group/card relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-[280px] lg:h-[340px] w-[270px] lg:w-[320px] flex-shrink-0 mx-3 lg:mx-4 hover:-translate-y-1.5"
            >
              {/* Background Project Image */}
              <div className="absolute inset-0 bg-soft">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                    loading="lazy"
                  />
                )}
              </div>
              
              {/* Gradient Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent opacity-80 group-hover/card:opacity-95 transition-opacity duration-500" />

              {/* Bottom Card Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 mb-2.5 border border-white/30 rounded-full text-[10px] tracking-[0.2em] uppercase text-white font-body font-medium bg-black/20 backdrop-blur-sm">
                    Delivered
                  </span>
                  <h3 className="text-[23px] lg:text-[26px] font-heading font-normal text-white leading-tight mb-1.5 drop-shadow-sm">
                    Northstar {project.name}
                  </h3>
                  <p className="text-[12px] tracking-[0.06em] text-white/80 font-body font-light flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-accent2d shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {project.location}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
