import React, { useRef, useEffect, useState } from 'react'
import { siteConfig } from '../siteConfig'

// Import project logos
import logoNorthstar from '../assets/Northstar-logo_webp_file-removebg-preview.webp';
import logoVeda from '../assets/logotoWEBP/Northstar_Veda.webp';
import logoGardenSuites from '../assets/logotoWEBP/Northstar_Gardensuits.webp';
import logoEdenGardens from '../assets/logotoWEBP/Northstar_Eden Gardens.webp';
import logoAmgPlaza from '../assets/logotoWEBP/Northstar_Amgplaza.webp';
import logoDistrict1 from '../assets/logotoWEBP/Northstar_Distrcit 1.webp';
import logoHillside from '../assets/logotoWEBP/Northstar_Hillside.webp';
import logoAirport from '../assets/logotoWEBP/Northsatr_Airport.webp';
import logoLeela from '../assets/logotoWEBP/Northstar_Leela.webp';
import logoAllura from '../assets/logotoWEBP/Norhstar_Allura.webp';
import logoParkAve from '../assets/logotoWEBP/Northstar_Parkave.webp';
import logoPalacio from '../assets/logotoWEBP/Northstar_Palacio.webp';
import logoSanctuary from '../assets/logotoWEBP/Sanctuary.webp';
import logoGoldenValley from '../assets/logotoWEBP/Northstar_GoldenValley.webp';

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

/* Laurel wreath for awards */
function LaurelWreath({ children }) {
  return (
    <div className="relative flex items-center justify-center py-1.5 px-1">
      <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-[18px] h-[36px] text-amber-500/80" viewBox="0 0 30 60" fill="none">
        <path d="M22 5 C18 8 14 16 12 22 C10 16 6 10 2 8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M20 12 C16 16 13 24 12 30 C10 24 6 18 2 16" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M18 20 C15 24 13 32 12 38 C10 32 7 26 4 24" stroke="currentColor" strokeWidth="2" fill="none"/>
        <ellipse cx="15" cy="8" rx="5" ry="3" fill="currentColor" opacity="0.25" transform="rotate(-30 15 8)"/>
        <ellipse cx="14" cy="17" rx="5" ry="3" fill="currentColor" opacity="0.25" transform="rotate(-15 14 17)"/>
        <ellipse cx="13" cy="27" rx="4" ry="3" fill="currentColor" opacity="0.25" transform="rotate(-5 13 27)"/>
      </svg>
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[18px] h-[36px] text-amber-500/80 scale-x-[-1]" viewBox="0 0 30 60" fill="none">
        <path d="M22 5 C18 8 14 16 12 22 C10 16 6 10 2 8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M20 12 C16 16 13 24 12 30 C10 24 6 18 2 16" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M18 20 C15 24 13 32 12 38 C10 32 7 26 4 24" stroke="currentColor" strokeWidth="2" fill="none"/>
        <ellipse cx="15" cy="8" rx="5" ry="3" fill="currentColor" opacity="0.25" transform="rotate(-30 15 8)"/>
        <ellipse cx="14" cy="17" rx="5" ry="3" fill="currentColor" opacity="0.25" transform="rotate(-15 14 17)"/>
        <ellipse cx="13" cy="27" rx="4" ry="3" fill="currentColor" opacity="0.25" transform="rotate(-5 13 27)"/>
      </svg>
      <div className="px-5">{children}</div>
    </div>
  );
}

/* Year card component */
function YearCard({ entry, isVisible, delay }) {
  const projects = entry.items.filter(i => i.type === 'project');
  const awards = entry.items.filter(i => i.type === 'award');
  const milestones = entry.items.filter(i => i.type === 'milestone');

  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Year bubble */}
      <div className="relative mb-4">
        <div className="w-3.5 h-3.5 rounded-full bg-accent2d shadow-[0_0_12px_rgba(92,194,102,0.5)] mx-auto mb-2 relative z-10 border-2 border-[#050d18]" />
        <p className="text-[28px] font-heading font-bold text-accent2d leading-none">{entry.year}</p>
      </div>

      {/* Project logos */}
      {projects.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-2">
          {projects.map((item, i) => (
            <div key={i} className="h-[45px] w-[90px] flex items-center justify-center">
              {item.logoKey && logoMap[item.logoKey] && (
                <img src={logoMap[item.logoKey]} alt="" className="max-h-full max-w-full object-contain" />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Milestones */}
      {milestones.map((item, i) => (
        <p key={i} className="text-[11px] text-white/50 italic mt-1">{item.title}</p>
      ))}

      {/* Awards */}
      {awards.length > 0 && (
        <div className="flex flex-col gap-1.5 items-center mt-2">
          {awards.map((award, i) => (
            <div key={i} className="max-w-[180px]">
              <LaurelWreath>
                <div className="text-center">
                  <p className="text-[9px] font-bold text-amber-400 uppercase tracking-wider leading-tight">{award.title}</p>
                  {award.subtitle && <p className="text-[7px] text-amber-500/50 mt-0.5">{award.subtitle}</p>}
                </div>
              </LaurelWreath>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const timeline = siteConfig.timeline;

  // Split into serpentine rows: 5 → 4 → 4
  const rows = [
    timeline.slice(0, 5),    // 2012-2016 →→→→→
    timeline.slice(5, 9),    // 2017-2020 ←←←←
    timeline.slice(9, 13),   // 2021-2024 →→→→
  ];

  return (
    <section ref={sectionRef} className="bg-[#050d18] text-white py-12 max-[880px]:py-[50px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="mb-4 text-[12px] tracking-[0.3em] uppercase text-accent2d">
            Our Journey
          </p>
          <h2 className="text-[clamp(28px,3vw,42px)] leading-[1.15] font-heading">
            Building trust since 2012
          </h2>
        </div>

        {/* Serpentine Rows */}
        <div className="flex flex-col gap-6">
          {rows.map((row, rowIdx) => {
            const isReversed = rowIdx % 2 === 1;
            const displayRow = isReversed ? [...row].reverse() : row;

            return (
              <div key={rowIdx}>
                {/* Row of year cards */}
                <div className="relative">
                  {/* Horizontal connecting line — aligned with dot & arrow centers */}
                  <div className={`absolute top-[6px] left-[2%] right-[2%] h-[2px] transition-all duration-[2s] ease-out ${
                    isVisible ? 'bg-gradient-to-r from-accent2d/40 via-accent/40 to-accent2d/40' : 'bg-white/5'
                  }`} style={{ transitionDelay: `${rowIdx * 400}ms` }} />

                  <div className={`flex items-start relative z-10 max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-4 ${
                    isReversed ? 'justify-end' : 'justify-start'
                  }`}>
                    {displayRow.map((entry, colIdx) => {
                      const globalIdx = rowIdx * 5 + colIdx;
                      const isLast = colIdx === displayRow.length - 1;
                      return (
                        <React.Fragment key={entry.year}>
                          <div className={`flex-1 min-w-0 ${row.length === 5 ? 'max-w-[20%]' : 'max-w-[25%]'} max-[768px]:max-w-full`}>
                            <YearCard
                              entry={entry}
                              isVisible={isVisible}
                              delay={globalIdx * 80}
                            />
                          </div>
                          {/* Animated arrow between cards — centered on the line */}
                          {!isLast && (
                            <div className="flex items-center justify-center w-[40px] shrink-0 max-[768px]:hidden" style={{ height: '12px', marginTop: '0px' }}>
                              <div className="flex gap-[3px]">
                                {[0, 1, 2].map(i => (
                                  <svg
                                    key={i}
                                    width="8" height="14" viewBox="0 0 8 14"
                                    className={`text-accent2d ${isReversed ? 'animate-arrow-reverse rotate-180' : 'animate-arrow'}`}
                                    style={{ animationDelay: `${i * 200 + colIdx * 300}ms` }}
                                  >
                                    <path d="M1 1 L6 7 L1 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Curved connector between rows */}
                {rowIdx < rows.length - 1 && (
                  <div className={`flex my-3 max-[768px]:hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${(rowIdx + 1) * 400}ms` }}>
                    <div className={`flex items-center gap-1 ${isReversed ? 'ml-[4%]' : 'ml-auto mr-[4%]'}`}>
                      {/* Vertical turn arrow */}
                      <div className="flex flex-col items-center gap-[2px]">
                        {[0, 1, 2].map(i => (
                          <svg
                            key={i}
                            width="14" height="8" viewBox="0 0 14 8"
                            className="text-accent2d animate-arrow"
                            style={{ animationDelay: `${i * 150}ms` }}
                          >
                            <path d="M1 1 L7 6 L13 1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
