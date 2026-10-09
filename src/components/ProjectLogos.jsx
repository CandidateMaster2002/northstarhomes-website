import React from 'react';

// Import all logos
import l1 from '../assets/AllLogosColorfulWEBP/Norhstar_Allura.webp';
import l2 from '../assets/AllLogosColorfulWEBP/Northsatr_Airport.webp';
import l3 from '../assets/AllLogosColorfulWEBP/Northstar_Amgplaza.webp';
import l4 from '../assets/AllLogosColorfulWEBP/Northstar_Distrcit 1.webp';
import l5 from '../assets/AllLogosColorfulWEBP/Northstar_Eden Gardens.webp';
import l6 from '../assets/AllLogosColorfulWEBP/Northstar_Gardensuits.webp';
import l7 from '../assets/AllLogosColorfulWEBP/Golden Valley Logo Final Approved.webp';
import l8 from '../assets/AllLogosColorfulWEBP/Northstar_Hillside.webp';
import l9 from '../assets/AllLogosColorfulWEBP/Northstar_Leela.webp';
import l10 from '../assets/AllLogosColorfulWEBP/Northstar_Mangogrove.webp';
import l11 from '../assets/AllLogosColorfulWEBP/Northstar_Palacio.webp';
import l12 from '../assets/AllLogosColorfulWEBP/Northstar_Parkave.webp';
import l13 from '../assets/AllLogosColorfulWEBP/Northstar_Veda.webp';
import l14 from '../assets/AllLogosColorfulWEBP/Sanctuary.webp';

export default function ProjectLogos() {
  const logos = [
    { src: l1, scale: 'scale-100' },
    { src: l2, scale: 'scale-100' },
    { src: l3, scale: 'scale-125 saturate-200' }, // AMG Plaza
    { src: l4, scale: 'scale-100' },
    { src: l5, scale: 'scale-100' },
    { src: l6, scale: 'scale-100' },
    { src: l7, scale: 'scale-150' }, // Golden Valley
    { src: l8, scale: 'scale-100' },
    { src: l9, scale: 'scale-100' },
    { src: l10, scale: 'scale-100' },
    { src: l11, scale: 'scale-100' },
    { src: l12, scale: 'scale-100' },
    { src: l13, scale: 'scale-100' },
    { src: l14, scale: 'scale-100' },
  ];
  
  // Duplicate array twice to ensure seamless infinite scroll
  const infiniteLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-soft py-[60px] border-t border-line overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6 mb-10 text-center flex flex-col items-center">
        <h2 className="text-[clamp(26px,2.5vw,34px)] font-heading text-ink">
          A Legacy of Landmark Projects
        </h2>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden py-4">
        {/* Fading edges for a premium look */}
        <div className="absolute top-0 left-0 w-[150px] max-[880px]:w-[80px] h-full bg-gradient-to-r from-soft to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[150px] max-[880px]:w-[80px] h-full bg-gradient-to-l from-soft to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Content */}
        <div className="flex animate-marquee w-max items-center">
          {infiniteLogos.map((logoItem, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[180px] h-[100px] mx-8 flex items-center justify-center transition-all duration-300 lg:hover:-translate-y-1 cursor-pointer group"
            >
              <div className={`w-full h-full flex items-center justify-center ${logoItem.scale}`}>
                <img 
                  src={logoItem.src} 
                  alt="Northstar Project Logo" 
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
