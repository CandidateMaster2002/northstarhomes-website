import React, { useRef, useEffect, useState } from 'react'
import { siteConfig } from '../siteConfig'

// Import project logos
import logoNorthstar from '../assets/Northstar-logo_webp_file-removebg-preview.webp'; // Kept original
import logoVeda from '../assets/logos_mono/Veda logo Monochromatic Image.png';
import logoGardenSuites from '../assets/logos_mono/Northstar Garden Suites Monochromatic image.png';
import logoEdenGardens from '../assets/logos_mono/Eden Garden Monochromatic Image.png';
import logoAmgPlaza from '../assets/logos_mono/AMG Plaza Monochromatic Image.png';
import logoDistrict1 from '../assets/logos_mono/District 1 Monochromatic Image1.png';
import logoHillside from '../assets/logos_mono/Hill Side Monochromatic Image.png';
import logoAirport from '../assets/logos_mono/Airport Boulevard Monochromatic image.png';
import logoLeela from '../assets/logos_mono/Leela Logo Monochromatic image.png';
import logoAllura from '../assets/logos_mono/Allura Monochromatic Image.png';
import logoParkAve from '../assets/logos_mono/Park Avenue Logo Monochromatic Image..png';
import logoPalacio from '../assets/logos_mono/SP Palacio logo Monochromatic image.png';
import logoSanctuary from '../assets/logos_mono/Sanctuary Logo Monochromatic image.png';
import logoGoldenValley from '../assets/logotoWEBP/Northstar_GoldenValley.webp'; // Client hasn't provided Golden Valley mono yet, or it's named differently.

const logoMap = {
  northstar: logoNorthstar,
  veda: logoVeda,
  gardensuites: logoGardenSuites,
  edengardens: logoEdenGardens,
  amgplaza: logoAmgPlaza,
  district1: logoDistrict1,
  hillside: logoHillside,
  airport: logoAirport,
  leela: logoLeela,
  allura: logoAllura,
  parkave: logoParkAve,
  palacio: logoPalacio,
  sanctuary: logoSanctuary,
  goldenvalley: logoGoldenValley,
};

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const timeline = siteConfig.timeline;

  return (
    <section ref={sectionRef} id="legacy" className="bg-soft py-[72px] lg:py-[120px] overflow-hidden border-t border-line">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="mb-4 text-[11px] tracking-[0.3em] uppercase text-accent font-bold">
            Our Legacy
          </p>
          <h2 className="text-[32px] lg:text-[46px] leading-[1.15] font-heading text-ink">
            A decade of building trust.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className={`absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-ml-[1px] w-[2px] bg-line transition-all duration-[2s] ease-out origin-top ${
            isVisible ? 'scale-y-100' : 'scale-y-0'
          }`} />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 lg:gap-8">
            {timeline.map((entry, idx) => {
              const projects = entry.items.filter(i => i.type === 'project');
              const awards = entry.items.filter(i => i.type === 'award');
              const milestones = entry.items.filter(i => i.type === 'milestone');
              
              // Alternating layout logic for desktop
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={entry.year} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  
                  {/* The Node (Dot on the line) */}
                  <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full border-[3px] border-bg bg-accent shadow-sm -ml-[7px] md:-ml-[8px] z-10 mt-1.5 md:mt-0" />

                  {/* Desktop: Content block (Left or Right) */}
                  <div className={`w-full md:w-1/2 pl-[60px] md:pl-0 ${isEven ? 'md:pr-[60px] md:text-right' : 'md:pl-[60px] md:order-last md:text-left'}`}>
                    
                    {/* The Year */}
                    <h3 className="text-[42px] lg:text-[56px] font-heading font-bold text-ink/10 leading-none mb-4 md:mb-6">
                      {entry.year}
                    </h3>

                    <div className={`flex flex-col gap-6 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      
                      {/* Projects (Monochromatic Logos) */}
                      {projects.length > 0 && (
                        <div className={`flex flex-wrap gap-5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {projects.map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                              {item.logoKey && logoMap[item.logoKey] ? (
                                <img 
                                  src={logoMap[item.logoKey]} 
                                  alt={item.title || "Project Logo"} 
                                  className="h-[35px] lg:h-[45px] w-auto object-contain opacity-70 transition-opacity duration-300 lg:hover:opacity-100" 
                                />
                              ) : (
                                <span className="text-[14px] font-bold text-ink/70">{item.title}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Milestones */}
                      {milestones.length > 0 && (
                        <div className="flex flex-col gap-2">
                          {milestones.map((item, i) => (
                            <p key={i} className="text-[14px] text-muted leading-relaxed font-medium">
                              {item.title}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Awards (Minimalist Text) */}
                      {awards.length > 0 && (
                        <div className={`flex flex-col gap-3 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          {awards.map((award, i) => (
                            <div key={i} className="flex items-start gap-2 max-w-[280px]">
                              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                              </svg>
                              <div className="flex flex-col">
                                <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-ink leading-tight">
                                  {award.title}
                                </span>
                                {award.subtitle && (
                                  <span className="text-[11px] text-muted mt-1 leading-tight">
                                    {award.subtitle}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                  
                  {/* Empty space for the other half on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
