import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Award Images from src/assets/awards
import youngAchieverImg from '../assets/awards/young-achiever-award.jpg';
import timesDistrict1Img from '../assets/awards/times-realty-icons-district1.jpg';
import timesHillsideImg from '../assets/awards/times-realty-icons-hillside.jpeg';
import hmtvImg from '../assets/awards/hmtv.jpeg';
import bestDesignAptImg from '../assets/awards/best-design-apartment.jpg';
import upcomingVillaImg from '../assets/awards/upcomingultra-luxuryvilla.jpeg';
import emergingDevImg from '../assets/awards/emerging-developer.jpg';

// Exact content provided by user
const awardsData = [
  {
    id: 1,
    year: '2017',
    title: 'Young Achiever Award',
    recipient: 'Mr. Uttam Reddy',
    organization: 'Times Realty Icons 2018',
    image: youngAchieverImg
  },
  {
    id: 2,
    year: '2017',
    title: 'Prestigious Award at Times Realty Icons',
    recipient: 'Northstar Homes, District 1',
    organization: 'Times Realty Icons',
    image: timesDistrict1Img
  },
  {
    id: 3,
    year: '2017',
    title: 'Prestigious Award at Times Realty Icons',
    recipient: 'Northstar Homes Hillside',
    organization: 'Times Realty Icons',
    image: timesHillsideImg
  },
  {
    id: 4,
    year: '2017',
    title: 'Best Award in Real Estate Category',
    recipient: 'Northstar Homes',
    organization: 'HMTV Business Excellence Awards',
    image: hmtvImg
  },
  {
    id: 5,
    year: '2016',
    title: 'Best Design Apartment Project of the Year',
    recipient: 'Northstar Homes, District 1',
    organization: 'Project Recognition',
    image: bestDesignAptImg
  },
  {
    id: 6,
    year: '2016',
    title: 'Upcoming Ultra Luxury Villa Project of the Year',
    recipient: 'Northstar Homes, Hillside',
    organization: 'Project Recognition',
    image: upcomingVillaImg
  },
  {
    id: 7,
    year: '2015',
    title: 'Emerging Developers of the Year – Northstar Homes',
    recipient: 'Silicon India',
    organization: 'Silicon India',
    image: emergingDevImg
  }
];

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-ink">

      {/* ─────────────────────────────────────────────────────────────
          HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#07294A] text-white pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10 w-full">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-body font-semibold mb-6 text-[#8FA7BD]">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="#about-company" className="hover:text-white transition-colors">About Us</a>
            <span>/</span>
            <span className="text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">Recognitions we got</span>
          </div>

          <div className="max-w-[820px]">
            <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-heading font-normal text-white leading-[1.14] mb-4">
              Recognitions we got
            </h1>
            <p className="text-[16px] sm:text-[18px] font-body font-light text-[#C7DCED] leading-relaxed">
              We are a developer invested in our customers’ success and improving the communities we serve.
            </p>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          AWARDS GRID (EXACT CONTENT)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {awardsData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedAward(item)}
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[#07294A] font-heading font-bold text-[14px] shadow-md border border-line">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 sm:p-8">
                    <h2 className="text-[20px] sm:text-[22px] font-heading font-normal text-ink leading-snug mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-[15px] font-body text-ink/80 font-medium mb-1">
                      {item.recipient}
                    </p>

                    <p className="text-[13px] tracking-wide uppercase font-body text-muted font-normal">
                      {item.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          LIGHTBOX MODAL FOR PHOTO ZOOM
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedAward && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-[800px] w-full bg-white rounded-2xl sm:rounded-3xl border border-line shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer text-lg font-bold"
                aria-label="Close"
              >
                &times;
              </button>

              <div className="relative aspect-[4/3] bg-black">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[#EEF5FB] text-accent text-[12px] tracking-[0.16em] uppercase font-bold border border-line mb-3">
                  {selectedAward.year}
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-heading font-normal text-ink leading-snug mb-2">
                  {selectedAward.title}
                </h3>
                <p className="text-[16px] font-body text-ink/80 font-medium mb-1">
                  {selectedAward.recipient}
                </p>
                <p className="text-[13px] tracking-wide uppercase font-body text-muted">
                  {selectedAward.organization}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
