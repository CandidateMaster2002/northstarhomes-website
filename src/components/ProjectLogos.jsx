import React from 'react';

// Import all logos
import l1 from '../assets/logotoWEBP/Norhstar_Allura.webp';
import l2 from '../assets/logotoWEBP/Northsatr_Airport.webp';
import l3 from '../assets/logotoWEBP/Northstar_Amgplaza.webp';
import l4 from '../assets/logotoWEBP/Northstar_Distrcit 1.webp';
import l5 from '../assets/logotoWEBP/Northstar_Eden Gardens.webp';
import l6 from '../assets/logotoWEBP/Northstar_Gardensuits.webp';
import l7 from '../assets/logotoWEBP/Northstar_GoldenValley.webp';
import l8 from '../assets/logotoWEBP/Northstar_Hillside.webp';
import l9 from '../assets/logotoWEBP/Northstar_Leela.webp';
import l10 from '../assets/logotoWEBP/Northstar_Mangogrove.webp';
import l11 from '../assets/logotoWEBP/Northstar_Palacio.webp';
import l12 from '../assets/logotoWEBP/Northstar_Parkave.webp';
import l13 from '../assets/logotoWEBP/Northstar_Veda.webp';
import l14 from '../assets/logotoWEBP/Sanctuary.webp';

export default function ProjectLogos() {
  const logos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14];
  
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
          {infiniteLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[200px] h-[100px] mx-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <img 
                src={logo} 
                alt="Northstar Project Logo" 
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
