import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Verified portrait images from src/assets/leadership
import chairmanImg from '../assets/leadership/chairman.jpeg';
import viceChairmanImg from '../assets/leadership/vice-chairman.jpeg';
import mdImg from '../assets/leadership/md.jpeg';
import anilImg from '../assets/leadership/anil-kumar.png';
import saurabhImg from '../assets/leadership/saurabh-tyagi.jpeg';
import sandeepImg from '../assets/leadership/sandeep-tumula.jpeg';
import harishwarImg from '../assets/leadership/harishwar-reddy.jpeg';
import kiranImg from '../assets/leadership/kiran.jpeg';
import swathiImg from '../assets/leadership/swathi-reddy.jpeg';
import subhashImg from '../assets/leadership/subhash.jpeg';

// 1. Leadership (Board of 3 with verbatim bio paragraphs for popup)
const guidingMembers = [
  {
    name: 'Mr. K. Laxma Reddy',
    role: 'Chairman',
    image: chairmanImg,
    bio: [
      'A visionary leader who guides Northstar with strong values and clear direction.',
      'He believes in building with trust, responsibility, and long-term purpose.',
      'His leadership gives Northstar a strong foundation of integrity and confidence.',
      'He continues to inspire the company to create developments that stand the test of time.'
    ]
  },
  {
    name: 'Mr. Narayan Rao Gali',
    role: 'Vice-Chairman',
    image: viceChairmanImg,
    bio: [
      'A steady leader who brings balance, experience, and business wisdom to Northstar.',
      'He plays an important role in shaping the company’s growth and planning.',
      'His focus on discipline and quality strengthens every stage of development.',
      'He supports Northstar’s commitment to delivering reliable and meaningful spaces.'
    ]
  },
  {
    name: 'Mr. Uttam Reddy',
    role: 'Managing Director',
    image: mdImg,
    bio: [
      'A dynamic leader who drives Northstar with energy, innovation, and execution.',
      'He focuses on creating modern spaces that match the needs of today’s customers.',
      'His approach brings together design, quality, transparency, and timely delivery.',
      'Under his leadership, Northstar continues to grow as a trusted real estate brand.'
    ]
  },
];

// 2. Business Partner / Project Partner
const businessPartnerMembers = [
  {
    name: 'Mr. Karumuru Anil Kumar Reddy',
    role: 'Project Partner',
    image: anilImg,
  },
];

// 3. Team (6 Department Heads)
const teamMembers = [
  {
    name: 'Mr. Saurabh Tyagi',
    role: 'Business Development Head',
    image: saurabhImg,
  },
  {
    name: 'Mr. Sandeep Tumula',
    role: 'Senior Quantity Surveyor',
    image: sandeepImg,
  },
  {
    name: 'Mr. Sripuram Harishwar Reddy',
    role: 'Manager – Liaisoning',
    image: harishwarImg,
  },
  {
    name: 'Mr. Kiran',
    role: 'Head – Procurement',
    image: kiranImg,
  },
  {
    name: 'Ms. Swathi Reddy B.',
    role: 'GM – Customer Relations',
    image: swathiImg,
  },
  {
    name: 'Mr. Subhash',
    role: 'Chief Architect',
    image: subhashImg,
  },
];

function MemberCard({ member, idx, onClick, isClickable }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      onClick={isClickable ? () => onClick(member) : undefined}
      className={`group flex flex-col ${isClickable ? 'cursor-pointer' : ''}`}
    >
      {/* Square aspect ratio, grayscale portrait (with subtle hover color reveal & hover zoom) */}
      <div className="relative aspect-square w-full bg-[#EAEAEA] overflow-hidden mb-4 rounded-sm">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        {/* Subtle indicator icon on hover for leaders */}
        {isClickable && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#1A1A1A] shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        )}
      </div>

      {/* Name: Playfair Display Medium */}
      <h3 className={`text-[17px] sm:text-[18px] lg:text-[19px] font-heading font-medium text-[#1A1A1A] leading-snug tracking-tight ${isClickable ? 'group-hover:text-[#0B6FB5] transition-colors' : ''}`}>
        {member.name}
      </h3>

      {/* Role / Designation */}
      <p className="text-[12px] sm:text-[13px] text-[#8C827A] font-body font-normal mt-1 leading-normal">
        {member.role}
      </p>
    </motion.div>
  );
}

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] pt-28 sm:pt-36 pb-28">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-heading font-normal text-[#1A1A1A] tracking-tight">
            Leadership
          </h1>
        </div>

        {/* ── Category 1: Guiding Leadership (Interactive popup on click) ── */}
        <section className="mb-20 sm:mb-24">
          <div className="mb-8 pb-3 border-b border-[#D8E6F2]">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#0B6FB5] font-semibold font-nav block mb-1">
              BOARD & GOVERNANCE
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-heading font-normal text-[#1A1A1A]">
              Guiding Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12">
            {guidingMembers.map((member, idx) => (
              <MemberCard 
                key={member.name} 
                member={member} 
                idx={idx} 
                isClickable={true}
                onClick={(m) => setActiveLeader(m)}
              />
            ))}
          </div>
        </section>

        {/* ── Category 2: Business Partner / Project Partner ── */}
        <section className="mb-20 sm:mb-24">
          <div className="mb-8 pb-3 border-b border-[#D8E6F2]">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#0B6FB5] font-semibold font-nav block mb-1">
              PARTNERSHIP
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-heading font-normal text-[#1A1A1A]">
              Business Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12">
            {businessPartnerMembers.map((member, idx) => (
              <MemberCard key={member.name} member={member} idx={idx} isClickable={false} />
            ))}
          </div>
        </section>

        {/* ── Category 3: Team ── */}
        <section>
          <div className="mb-8 pb-3 border-b border-[#D8E6F2]">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#0B6FB5] font-semibold font-nav block mb-1">
              CORE LEADERSHIP
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-heading font-normal text-[#1A1A1A]">
              Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12">
            {teamMembers.map((member, idx) => (
              <MemberCard key={member.name} member={member} idx={idx} isClickable={false} />
            ))}
          </div>
        </section>

      </div>

      {/* ── Lodha-Style Leader Modal Popup ── */}
      <AnimatePresence>
        {activeLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveLeader(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[920px] w-full bg-white rounded-lg shadow-2xl p-8 sm:p-12 lg:p-16 border border-[#E5E0D8]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Circular Close Button (Top-Right, exactly like screenshot) */}
              <button
                type="button"
                onClick={() => setActiveLeader(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[#D5CFC7] hover:border-[#1A1A1A] flex items-center justify-center text-[#8C827A] hover:text-[#1A1A1A] transition-all cursor-pointer"
                aria-label="Close popup"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Body: Left Photo + Right Content */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 items-start">
                
                {/* Left Portrait Photo */}
                <div className="md:col-span-2 w-full aspect-square bg-[#EAEAEA] overflow-hidden rounded-sm">
                  <img
                    src={activeLeader.image}
                    alt={activeLeader.name}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>

                {/* Right Details */}
                <div className="md:col-span-3 space-y-4 pt-1 sm:pt-2">
                  <div>
                    <h2 className="text-[24px] sm:text-[30px] font-heading font-medium text-[#1A1A1A] tracking-tight leading-tight">
                      {activeLeader.name}
                    </h2>
                    <p className="text-[13px] sm:text-[14px] text-[#8C827A] font-body font-medium mt-1">
                      {activeLeader.role}
                    </p>
                  </div>

                  {/* Verbatim Paragraphs */}
                  <div className="space-y-3 pt-2 text-[14px] sm:text-[15px] font-body font-normal text-[#4A4A4A] leading-[1.75]">
                    {activeLeader.bio?.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
