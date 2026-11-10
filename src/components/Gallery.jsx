import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Real project & elevation imagery
import imgAllura from '../assets/projects/allura.webp';
import imgSpPalacio from '../assets/projects/sp-palacio.webp';
import imgSanctuary from '../assets/projects/sanctuary.webp';
import imgParkAvenue from '../assets/projects/park-avenue.webp';
import imgGoldenValley from '../assets/projects/golden-valley.webp';
import imgDistrict1 from '../assets/projects/district1.webp';
import imgAirportBoulevard from '../assets/projects/airport-boulevard.webp';
import imgHillside from '../assets/projects/hillside.webp';
import imgVeda from '../assets/projects/veda.webp';
import imgEdenGardens from '../assets/projects/eden-gardens.webp';
import imgLeela from '../assets/projects/leela.webp';
import imgAmgPlaza from '../assets/projects/amg-plaza.webp';
import imgGardenSuites from '../assets/projects/garden-suites.webp';

// Extra high-res project views
import imgHouse from '../assets/extracted_images/images/house-img.jpeg';
import imgHeaderside from '../assets/extracted_images/images/headerside.jpg';
import imgWeAlways from '../assets/extracted_images/images/we-always.jpg';
import imgHeroWatermark from '../assets/hero-image-watermark-removed.webp';
import imgBlog1 from '../assets/blogs/blog_1268.webp';
import imgBlog2 from '../assets/blogs/blog_1274.webp';
import imgBlog3 from '../assets/blogs/blog_1306.webp';
import imgBlog4 from '../assets/blogs/blog_1314.webp';
import videoHero from '../assets/hero video eden compr.mp4';

// Northstar Homes gallery media collection
export const galleryMedia = [
  { id: 1, type: 'image', category: 'COMMERCIAL', src: imgAmgPlaza, title: 'AMG Plaza' },
  { id: 2, type: 'image', category: 'HIGHRISE', src: imgDistrict1, title: 'District 1' },
  { id: 3, type: 'image', category: 'HIGHRISE', src: imgSpPalacio, title: 'SP Palacio' },
  { id: 4, type: 'video', category: 'TOWNSHIP', src: videoHero, title: 'Eden Gardens Drone Tour' },
  { id: 5, type: 'image', category: 'VILLAS', src: imgAllura, title: 'Allura' },
  { id: 6, type: 'image', category: 'TOWNSHIP', src: imgSanctuary, title: 'Sanctuary' },
  { id: 7, type: 'image', category: 'HIGHRISE', src: imgParkAvenue, title: 'Park Avenue' },
  { id: 8, type: 'image', category: 'TOWNSHIP', src: imgGoldenValley, title: 'Golden Valley' },
  { id: 9, type: 'image', category: 'VILLAS', src: imgHillside, title: 'Hillside' },
  { id: 10, type: 'image', category: 'VILLAS', src: imgAirportBoulevard, title: 'Airport Boulevard' },
  { id: 11, type: 'image', category: 'INTERIORS', src: imgHouse, title: 'Signature Living' },
  { id: 12, type: 'image', category: 'INTERIORS', src: imgBlog1, title: 'Gourmet Kitchen' },
  { id: 13, type: 'image', category: 'INTERIORS', src: imgBlog2, title: 'Master Suite' },
  { id: 14, type: 'image', category: 'HIGHRISE', src: imgVeda, title: 'Veda' },
  { id: 15, type: 'image', category: 'HIGHRISE', src: imgEdenGardens, title: 'Eden Gardens' },
  { id: 16, type: 'image', category: 'HIGHRISE', src: imgLeela, title: 'Leela' },
  { id: 17, type: 'image', category: 'VILLAS', src: imgGardenSuites, title: 'Garden Suites' },
  { id: 18, type: 'image', category: 'AMENITIES', src: imgHeaderside, title: 'Clubhouse' },
  { id: 19, type: 'image', category: 'AMENITIES', src: imgWeAlways, title: 'Promenade' },
  { id: 20, type: 'image', category: 'TOWNSHIP', src: imgHeroWatermark, title: 'Master Plan' },
  { id: 21, type: 'image', category: 'INTERIORS', src: imgBlog3, title: 'Smart Spaces' },
  { id: 22, type: 'image', category: 'HIGHRISE', src: imgBlog4, title: 'Skyline Terrace' },
];

// Clean Northstar-specific categories (customizable later via CMS)
const categories = ['ALL WORKS', 'VILLAS', 'HIGHRISE', 'TOWNSHIP', 'COMMERCIAL', 'INTERIORS', 'AMENITIES'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL WORKS');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredItems = activeCategory === 'ALL WORKS'
    ? galleryMedia
    : galleryMedia.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#07294A] text-white pt-[90px] sm:pt-[106px]">
      
      {/* ── Northstar Brand Filter Strip ── */}
      <div className="w-full bg-[#041629] border-b border-[#0B6FB5]/20 flex flex-wrap items-center">
        
        {/* Brand Accent Filter Pill (Northstar Deep Blue & Royal Accent) */}
        <div className="bg-[#0B6FB5] text-white px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-2.5 text-[11px] sm:text-[12px] font-nav tracking-[0.22em] uppercase font-semibold shrink-0 shadow-md">
          <span>GALLERY FILTER</span>
          <span className="text-[13px] leading-none">&rarr;</span>
        </div>

        {/* Category Navigation Links */}
        <div className="flex-1 flex items-center gap-6 sm:gap-8 px-6 sm:px-8 py-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] sm:text-[12px] font-nav tracking-[0.2em] uppercase transition-colors duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#3898E2] font-semibold border-b-2 border-[#3898E2] pb-1'
                    : 'text-[#8FA7BD] hover:text-white font-medium pb-1'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* ── Seamless Full-Bleed Media Grid (Zero text printed on images) ── */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 p-1 bg-[#041629]">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            onClick={() => setSelectedMedia(item)}
            className="group relative aspect-[16/10] bg-[#07294A]/40 overflow-hidden cursor-pointer select-none"
          >
            {item.type === 'video' ? (
              // Video Media Item
              <div className="relative w-full h-full">
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Video Play Badge Indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#07294A]/80 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
                  <svg className="w-4 h-4 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ) : (
              // Pure Image Item — Zero text overlay
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            )}

            {/* Subtle Hover Darkening Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

            {/* Corner brand watermark pill */}
            <div className="absolute bottom-2.5 right-2.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-[9px] uppercase tracking-widest text-[#C7DCED] bg-[#07294A]/85 backdrop-blur-md px-2 py-0.5 rounded-sm border border-white/10 font-nav">
                NORTHSTAR
              </span>
            </div>

          </motion.div>
        ))}
      </div>

      {/* ── Fullscreen Lightbox for Media ── */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#041629]/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
            onClick={() => setSelectedMedia(null)}
          >
            <div 
              className="relative max-w-[1400px] w-full max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-[#07294A]/90 hover:bg-[#0B6FB5] text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Fullscreen Media Render */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                {selectedMedia.type === 'video' ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt=""
                    className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
