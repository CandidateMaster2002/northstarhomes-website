import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Verified images from src/assets/leadership
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

// 1. Leadership (Board)
const leadershipMembers = [
  {
    name: 'Mr. K. Laxma Reddy',
    role: 'Chairman',
    image: chairmanImg,
  },
  {
    name: 'Mr. Narayan Rao Gali',
    role: 'Vice-Chairman',
    image: viceChairmanImg,
  },
  {
    name: 'Mr. Uttam Reddy',
    role: 'Managing Director',
    image: mdImg,
  },
];

// 2. Project Partner (Between Leadership and Team)
const projectPartners = [
  {
    name: 'Mr. Karumuru Anil Kumar Reddy',
    role: 'Project Partner',
    image: anilImg,
  },
];

// 3. Team (Saurabh Tyagi + Core Department Heads)
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

export default function Leadership() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-screen bg-bg text-ink pt-28 lg:pt-36">

      {/* ─────────────────────────────────────────────────────────────
          HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[320px] lg:min-h-[380px] bg-[#07294A] text-white flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07294A] via-[#07294A]/90 to-[#07294A]/60 z-10" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 relative z-20 w-full">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-body font-semibold mb-6 text-[#8FA7BD]">
            <span className="text-[#4FA3E3]">About Us</span>
            <span>/</span>
            <a href="#about-company" className="hover:text-white transition-colors">Company</a>
            <span>/</span>
            <span className="text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">Leadership</span>
            <span>/</span>
            <a href="#awards" className="hover:text-white transition-colors">Awards</a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[840px]"
          >
            <h1 className="text-[40px] sm:text-[54px] lg:text-[64px] font-heading font-normal leading-[1.08] text-white tracking-tight mb-4">
              Leadership
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#A6C5DE] font-light max-w-[600px] leading-relaxed">
              The vision, governance, and experienced team guiding Northstar Homes toward enduring quality and sustainable communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: LEADERSHIP (BOARD)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[12px] tracking-[0.25em] uppercase font-semibold text-accent block mb-2 font-body">
                Leadership
              </span>
              <h2 className="text-[32px] sm:text-[42px] font-heading font-normal text-ink leading-tight">
                Guiding Vision & Governance
              </h2>
            </div>
            <div className="h-0.5 w-16 bg-accent hidden md:block mb-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {leadershipMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-white border border-line flex flex-col hover:border-accent hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] bg-[#07294A]/5 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details: Only Role and Name */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-accent font-body block mb-1.5">
                      {member.role}
                    </span>
                    <h3 className="text-[20px] sm:text-[22px] font-heading font-normal text-ink leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: PROJECT PARTNER (BETWEEN LEADERSHIP AND TEAM)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-soft border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[12px] tracking-[0.25em] uppercase font-semibold text-accent block mb-2 font-body">
                Partnership
              </span>
              <h2 className="text-[32px] sm:text-[42px] font-heading font-normal text-ink leading-tight">
                Project Partner
              </h2>
            </div>
            <div className="h-0.5 w-16 bg-accent hidden md:block mb-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectPartners.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group bg-white border border-line flex flex-col hover:border-accent hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] bg-[#07294A]/5 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details: Only Role and Name */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-accent font-body block mb-1.5">
                      {member.role}
                    </span>
                    <h3 className="text-[20px] sm:text-[22px] font-heading font-normal text-ink leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TEAM
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[12px] tracking-[0.25em] uppercase font-semibold text-accent font-body block mb-2">
                Core Execution
              </span>
              <h2 className="text-[32px] sm:text-[42px] font-heading font-normal text-ink leading-tight">
                Team
              </h2>
            </div>
            <div className="h-0.5 w-16 bg-accent hidden md:block mb-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white border border-line flex flex-col hover:border-accent hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] bg-[#07294A]/5 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details: Only Role and Name */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-accent font-body block mb-1.5">
                      {member.role}
                    </span>
                    <h3 className="text-[20px] sm:text-[22px] font-heading font-normal text-ink leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
