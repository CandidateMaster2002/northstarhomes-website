import React from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'
import ScrollReveal from './ScrollReveal'

// Import project logos
import logoNorthstar from '../assets/Northstar-logo_webp_file-removebg-preview.webp';
import logoVeda from '../assets/monochromelogostoWEBP/Veda logo Monochromatic Image.webp';
import logoGardenSuites from '../assets/monochromelogostoWEBP/Northstar Garden Suites Monochromatic image.webp';
import logoEdenGardens from '../assets/monochromelogostoWEBP/Eden Garden Monochromatic Image.webp';
import logoAmgPlaza from '../assets/monochromelogostoWEBP/AMG Plaza Monochromatic Image.webp';
import logoDistrict1 from '../assets/monochromelogostoWEBP/District 1 Monochromatic Image1.webp';
import logoHillside from '../assets/monochromelogostoWEBP/Hill Side Monochromatic Image.webp';
import logoAirport from '../assets/monochromelogostoWEBP/Airport Boulevard Monochromatic image.webp';
import logoLeela from '../assets/monochromelogostoWEBP/Leela Logo Monochromatic image.webp';
import logoAllura from '../assets/monochromelogostoWEBP/Allura Monochromatic Image.webp';
import logoParkAve from '../assets/monochromelogostoWEBP/Park Avenue Logo Monochromatic Image..webp';
import logoPalacio from '../assets/monochromelogostoWEBP/SP Palacio logo Monochromatic image.webp';
import logoSanctuary from '../assets/monochromelogostoWEBP/Sanctuary Logo Monochromatic image.webp';
import logoGoldenValley from '../assets/monochromelogostoWEBP/Golden Valley Logo Final Approved-monochrome.webp';

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
  const timeline = siteConfig.timeline;

  return (
    <section id="legacy" className="bg-soft py-[72px] lg:py-[120px] overflow-hidden border-t border-line">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <ScrollReveal>
            <p className="mb-2 text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold">
              Milestones & Heritage
            </p>
            <h2 className="text-[36px] lg:text-[54px] leading-[1.12] font-heading font-normal text-ink">
              A Decade of Building Trust.
            </h2>
          </ScrollReveal>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line — Grows downwards */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-ml-[1px] w-[2px] bg-line origin-top" 
          />

          {/* Timeline Items — Progressive Scroll Reveal */}
          <div className="flex flex-col gap-14 lg:gap-10">
            {timeline.map((entry, idx) => {
              const projects = entry.items.filter(i => i.type === 'project');
              const awards = entry.items.filter(i => i.type === 'award');
              const milestones = entry.items.filter(i => i.type === 'milestone');
              
              // Alternating layout logic for desktop
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={entry.year} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25, margin: "-40px" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                >
                  
                  {/* The Node (Dot on the line) with scale-in animation */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                    className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full border-[3px] border-bg bg-accent shadow-sm -ml-[7px] md:-ml-[8px] z-10 mt-1.5 md:mt-0 group-hover:scale-125 transition-transform duration-300" 
                  />

                  {/* Desktop: Content block (Left or Right) */}
                  <div className={`w-full md:w-1/2 pl-[60px] md:pl-0 ${isEven ? 'md:pr-[60px] md:text-right' : 'md:pl-[60px] md:order-last md:text-left'}`}>
                    
                    {/* The Year — Slides smoothly into view */}
                    <motion.h3 
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[48px] lg:text-[68px] font-heading font-normal text-ink/35 leading-none mb-4 md:mb-6 group-hover:text-accent/60 transition-colors duration-500"
                    >
                      {entry.year}
                    </motion.h3>

                    {/* Milestone Details Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex flex-col gap-6 ${isEven ? 'md:items-end' : 'md:items-start'}`}
                    >
                      
                      {/* Projects (Monochromatic Logos) */}
                      {projects.length > 0 && (
                        <div className={`flex flex-wrap gap-5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {projects.map((item, i) => {
                            const specialClass = item.logoKey === 'goldenvalley' ? 'scale-150' : item.logoKey === 'amgplaza' ? 'scale-125 brightness-0' : 'scale-100';
                            
                            return (
                              <div key={i} className="group/logo cursor-pointer flex items-center justify-center">
                                {item.logoKey && logoMap[item.logoKey] ? (
                                  <img 
                                    src={logoMap[item.logoKey]} 
                                    alt={item.title || "Project Logo"} 
                                    className={`h-[45px] lg:h-[65px] w-auto max-w-[180px] object-contain opacity-70 transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:scale-105 ${specialClass}`} 
                                  />
                                ) : (
                                  <span className="text-[14px] font-bold text-ink/70">{item.title}</span>
                                )}
                              </div>
                            );
                          })}
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

                    </motion.div>
                  </div>
                  
                  {/* Empty space for the other half on desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
