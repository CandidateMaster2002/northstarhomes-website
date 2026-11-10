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

// Exact awards content verbatim
const awardsData = [
  {
    id: 1,
    year: '2017',
    title: 'Young Achiever Award',
    recipient: 'Mr. Uttam Reddy',
    organization: 'Times Realty Icons 2018',
    image: youngAchieverImg,
  },
  {
    id: 2,
    year: '2017',
    title: 'Prestigious Award at Times Realty Icons',
    recipient: 'Northstar Homes, District 1',
    organization: 'Times Realty Icons',
    image: timesDistrict1Img,
  },
  {
    id: 3,
    year: '2017',
    title: 'Prestigious Award at Times Realty Icons',
    recipient: 'Northstar Homes Hillside',
    organization: 'Times Realty Icons',
    image: timesHillsideImg,
  },
  {
    id: 4,
    year: '2017',
    title: 'Best Award in Real Estate Category',
    recipient: 'Northstar Homes',
    organization: 'HMTV Business Excellence Awards',
    image: hmtvImg,
  },
  {
    id: 5,
    year: '2016',
    title: 'Best Design Apartment Project of the Year',
    recipient: 'Northstar Homes, District 1',
    organization: 'Project Recognition',
    image: bestDesignAptImg,
  },
  {
    id: 6,
    year: '2016',
    title: 'Upcoming Ultra Luxury Villa Project of the Year',
    recipient: 'Northstar Homes, Hillside',
    organization: 'Project Recognition',
    image: upcomingVillaImg,
  },
  {
    id: 7,
    year: '2015',
    title: 'Emerging Developers of the Year – Northstar Homes',
    recipient: 'Silicon India',
    organization: 'Silicon India',
    image: emergingDevImg,
  },
];

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] pt-28 sm:pt-36 pb-28">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* ── Page Header (Editorial Luxury Style) ── */}
        <div className="text-center max-w-[820px] mx-auto mb-16 sm:mb-20">
          <p className="text-[11px] sm:text-[12px] tracking-[0.28em] uppercase text-[#0B6FB5] font-semibold font-nav mb-3">
            HONOURS & RECOGNITION
          </p>
          <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-heading font-normal text-[#1A1A1A] leading-[1.12] tracking-tight mb-4">
            Recognitions we got
          </h1>
          <p className="text-[15px] sm:text-[17px] font-body font-normal text-[#6B7280] leading-relaxed">
            We are a developer invested in our customers’ success and improving the communities we serve.
          </p>
        </div>

        {/* ── Rectangular Frame Visuals Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-14">
          {awardsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedAward(item)}
              className="group flex flex-col cursor-pointer"
            >
              {/* Architectural Rectangular Frame (16:10 aspect ratio with clean border) */}
              <div className="relative aspect-[16/10] w-full bg-[#F4F4F4] overflow-hidden rounded-sm border border-[#E5E0D8] mb-5 shadow-sm group-hover:shadow-md transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Clean Rectangular Year Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#07294A] font-heading font-medium text-[13px] border border-[#E5E0D8] shadow-sm">
                    {item.year}
                  </span>
                </div>

                {/* Subtle Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#1A1A1A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Award Details (Placed below the rectangular frame) */}
              <div className="flex flex-col flex-1">
                {/* Award Title: Playfair Display Medium */}
                <h2 className="text-[19px] sm:text-[21px] font-heading font-medium text-[#1A1A1A] leading-snug tracking-tight mb-2 group-hover:text-[#0B6FB5] transition-colors">
                  {item.title}
                </h2>

                {/* Recipient: Montserrat Regular */}
                <p className="text-[14px] font-body text-[#1A1A1A]/85 font-medium mb-1">
                  {item.recipient}
                </p>

                {/* Organization / Award Body */}
                <p className="text-[12px] tracking-[0.14em] uppercase font-nav text-[#8C827A] font-medium">
                  {item.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Rectangular Frame Lightbox Zoom Modal ── */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-[960px] w-full bg-white rounded-lg border border-[#E5E0D8] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#0B6FB5] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Full Uncropped Rectangular Photo */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#0E0E0E] flex items-center justify-center">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Modal Metadata Footer */}
              <div className="p-6 sm:p-8 bg-white border-t border-[#D8E6F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded bg-[#EEF5FB] text-[#0B6FB5] text-[11px] tracking-[0.2em] uppercase font-nav font-semibold border border-[#D8E6F2] mb-2">
                    {selectedAward.year}
                  </span>
                  <h3 className="text-[20px] sm:text-[24px] font-heading font-medium text-[#1A1A1A] leading-snug">
                    {selectedAward.title}
                  </h3>
                  <p className="text-[15px] font-body text-[#1A1A1A]/80 font-medium mt-1">
                    {selectedAward.recipient}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <span className="text-[12px] tracking-[0.16em] uppercase font-nav text-[#8C827A] font-medium block">
                    {selectedAward.organization}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
