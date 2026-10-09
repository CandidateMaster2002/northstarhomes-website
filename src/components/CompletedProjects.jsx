import React from 'react'
import { siteConfig } from '../siteConfig'

export default function CompletedProjects() {
  const completed = siteConfig.projects.filter(p => p.status === 'Completed');

  return (
    <section id="completed-projects" className="bg-bg border-b border-line pt-[60px] pb-16 max-[880px]:pt-[36px] max-[880px]:pb-[72px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6">
        
        <div className="mb-8 flex flex-wrap justify-between items-end gap-6">
          <h2 className="text-[clamp(28px,3vw,38px)] leading-[1.15] font-heading text-ink">
            Completed Projects
          </h2>
          <a href="#coming-soon" className="text-[12px] font-bold tracking-[0.15em] uppercase text-accent lg:hover:text-accent2 transition-colors flex items-center gap-2">
            View All <span className="text-lg leading-none">&rarr;</span>
          </a>
        </div>

        {/* Compact Horizontal Scroll / Carousel Layout */}
        {/* Hides scrollbar but keeps functionality */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-6 pb-8 -mx-10 px-10 max-[880px]:-mx-6 max-[880px]:px-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {completed.map((project, idx) => {
            return (
              <a 
                href="#coming-soon" 
                key={project.id} 
                className="group relative block rounded-xl overflow-hidden shadow-sm lg:hover:shadow-xl transition-all duration-500 h-[260px] lg:h-[320px] w-[260px] lg:w-[300px] flex-shrink-0 snap-start"
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-soft">
                  {project.image && (
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105" />
                  )}
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 lg:group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-2.5 py-1 mb-3 border border-white/30 rounded text-[10px] tracking-[0.2em] uppercase text-white font-medium bg-black/20 backdrop-blur-sm">
                      Completed
                    </span>
                    <h3 className="text-[22px] font-heading text-white leading-[1.1] mb-1.5 drop-shadow-md">
                      {project.name}
                    </h3>
                    <p className="text-[12px] tracking-[0.08em] uppercase text-white/80 font-medium flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {project.location}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Global style for hiding scrollbar injected directly */}
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
        `}} />

      </div>
    </section>
  )
}
