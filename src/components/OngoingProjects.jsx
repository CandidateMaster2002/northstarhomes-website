import React from 'react'
import { siteConfig } from '../siteConfig'

export default function OngoingProjects() {
  const ongoing = siteConfig.projects.filter(p => p.status === 'Ongoing');

  return (
    <section id="ongoing-projects" className="bg-bg border-t border-line pt-16 pb-8 max-[880px]:pt-10 max-[880px]:pb-6">
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6">
        <div className="mb-10 flex flex-wrap justify-between items-end gap-6">
          <div>
            <p className="mb-2 text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold">
              Our Presence
            </p>
            <h2 className="text-[clamp(34px,3.8vw,52px)] leading-[1.12] font-heading font-normal text-ink">
              Iconic Developments
            </h2>
          </div>
          <a href="#coming-soon" className="text-[12px] font-medium tracking-[0.16em] uppercase text-accent hover:text-ink transition-colors flex items-center gap-2 font-body">
            View All <span className="text-lg leading-none">&rarr;</span>
          </a>
        </div>

        {/* 6-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
          {ongoing.map((project, idx) => {
            // 3-2 pattern: First 3 take 2 cols each (3 across), Next 2 take 3 cols each (2 across)
            const isWide = idx % 5 === 3 || idx % 5 === 4;
            const spanClass = isWide ? 'lg:col-span-3' : 'lg:col-span-2';

            return (
              <a 
                href="#coming-soon" 
                key={project.id} 
                className={`group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-[380px] lg:h-[440px] ${spanClass}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-[#D8E6F2]">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  )}
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07294A]/90 via-[#07294A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Top Tags */}
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-ink text-[10px] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm font-body">
                    {project.city}
                  </span>
                  <span className="bg-accent text-white text-[10px] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm font-body">
                    Ongoing
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex items-end justify-between">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-heading font-normal text-[28px] lg:text-[34px] leading-tight mb-1 drop-shadow-sm">{project.name}</h3>
                    <p className="text-white/80 font-body font-light text-[13px] tracking-wide">
                      Northstar {project.name} | {project.city}
                    </p>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 border border-white/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
