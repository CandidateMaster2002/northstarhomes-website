import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroVideo from '../assets/hero video eden compr.mp4';

// Rich architecture & community imagery for visual sections
import imgAllura from '../assets/projects/allura.webp';
import imgSpPalacio from '../assets/projects/sp-palacio.webp';
import imgSanctuary from '../assets/projects/sanctuary.webp';
import imgParkAvenue from '../assets/projects/park-avenue.webp';
import imgDistrict1 from '../assets/projects/district1.webp';
import imgEdenGardens from '../assets/projects/eden-gardens.webp';
import imgGardenSuites from '../assets/projects/garden-suites.webp';
import imgHillside from '../assets/projects/hillside.webp';
import imgHeaderside from '../assets/extracted_images/images/headerside.jpg';
import imgHouse from '../assets/extracted_images/images/house-img.jpeg';
import imgWeAlways from '../assets/extracted_images/images/we-always.jpg';

// Track record stats from client
const statsData = [
  { value: '14+', label: 'Years of Experience' },
  { value: '9', label: 'Completed Projects' },
  { value: '6', label: 'Ongoing Projects' },
  { value: '1', label: 'Upcoming Projects' },
  { value: '8+', label: 'Winning Awards' },
  { value: '550+', label: 'Happy Customers' },
  { value: '13L', label: 'Lakhs Sft Delivered' },
];

// Customer video testimonials provided by client
const testimonialsData = [
  {
    project: 'Garden Suites',
    title: 'Customer Experience at Garden Suites',
    url: 'https://www.youtube.com/watch?v=1tioxCia_tg&list=PLJg41rg9rZHoRZJRt6MFfoco7yU3RA_K8&index=8',
    embedId: '1tioxCia_tg'
  },
  {
    project: 'District 1',
    title: 'Life & Community at District 1 (Video 1)',
    url: 'https://www.youtube.com/watch?v=FKe_OYnkQdE&list=PLJg41rg9rZHoRZJRt6MFfoco7yU3RA_K8&index=4',
    embedId: 'FKe_OYnkQdE'
  },
  {
    project: 'District 1',
    title: 'Resident Testimonial — District 1 (Video 2)',
    url: 'https://www.youtube.com/watch?v=5_WoLtNDpz4&list=PLJg41rg9rZHoRZJRt6MFfoco7yU3RA_K8&index=2',
    embedId: '5_WoLtNDpz4'
  },
  {
    project: 'District 1',
    title: 'Homeowner Reflections — District 1 (Video 3)',
    url: 'https://www.youtube.com/watch?v=JZGHM_--MUo&t=9s',
    embedId: 'JZGHM_--MUo'
  },
  {
    project: 'District 1',
    title: 'Quality & Community — District 1 (Video 4)',
    url: 'https://www.youtube.com/watch?v=VfGoMCO_7pY&t=74s',
    embedId: 'VfGoMCO_7pY'
  },
  {
    project: 'Hillside',
    title: 'Villa Living at Northstar Hillside (Video 1)',
    url: 'https://www.youtube.com/watch?v=cjoz_eESxWU&list=PLJg41rg9rZHoRZJRt6MFfoco7yU3RA_K8&index=11',
    embedId: 'cjoz_eESxWU'
  },
  {
    project: 'Hillside',
    title: 'Gated Luxury & Green Living at Hillside (Video 2)',
    url: 'https://www.youtube.com/watch?v=Hb1kTRisg1M&t=2s',
    embedId: 'Hb1kTRisg1M'
  },
  {
    project: 'Eden Garden',
    title: 'Family Living at Northstar Eden Garden, Vizag',
    url: 'https://www.youtube.com/watch?v=dbDrWb69YVw&list=PLJg41rg9rZHoRZJRt6MFfoco7yU3RA_K8&index=1',
    embedId: 'dbDrWb69YVw'
  },
  {
    project: 'Park Avenue',
    title: 'Modern Living at Northstar Park Avenue (Video 1)',
    url: 'https://www.youtube.com/watch?v=0EIa0DBWzhs',
    embedId: '0EIa0DBWzhs'
  },
  {
    project: 'Park Avenue',
    title: 'Resident Snapshot — Park Avenue (Shorts)',
    url: 'https://www.youtube.com/shorts/YTfDS-I4Aiw',
    embedId: 'YTfDS-I4Aiw'
  },
  {
    project: 'Allura',
    title: 'Luxury Villa Community — Northstar Allura (Video 1)',
    url: 'https://www.youtube.com/watch?v=2AIT4t0M0kE',
    embedId: '2AIT4t0M0kE'
  },
  {
    project: 'Allura',
    title: 'Homeowner Story — Northstar Allura (Video 2)',
    url: 'https://www.youtube.com/watch?v=dUbepaBZnqw&t=2s',
    embedId: 'dUbepaBZnqw'
  },
  {
    project: 'Airport Boulevard',
    title: 'Smart Villa Living at Northstar Airport Boulevard',
    url: 'https://www.youtube.com/watch?v=bKjdmNlv8q4',
    embedId: 'bKjdmNlv8q4'
  }
];

// 12 FAQs verbatim from client
const faqsData = [
  {
    q: 'How long has Northstar Homes been in the real estate business?',
    a: 'Northstar Homes was founded in 2012 and has over 14 years of experience delivering premium residential and commercial developments.'
  },
  {
    q: 'What types of properties does Northstar develop?',
    a: 'We develop luxury villas, premium gated apartments, plotted communities, and commercial developments across Hyderabad and Visakhapatnam.'
  },
  {
    q: 'Where are Northstar projects located?',
    a: 'Our completed and ongoing projects are situated across high-growth corridors in Hyderabad (Banjara Hills, Financial District, Shamshabad, Gandipet, Srisailam Highway, Abids) and Visakhapatnam.'
  },
  {
    q: 'Are all Northstar projects approved by RERA?',
    a: 'Yes, every project developed by Northstar Homes is strictly compliant with state RERA guidelines and has all requisite statutory approvals.'
  },
  {
    q: 'What is the philosophy behind Northstar design?',
    a: 'Our architectural ethos is built on "Dream. Discover. Dwell." We prioritize natural ventilation, abundant daylight, Vaastu-led orientation, expansive greenery, and durable finishes.'
  },
  {
    q: 'Can NRIs purchase properties with Northstar Homes?',
    a: 'Yes, we have a dedicated NRI concierge service providing end-to-end documentation, power of attorney assistance, remote registration, and banking support.'
  },
  {
    q: 'Do you offer home loan assistance?',
    a: 'Yes, Northstar projects are pre-approved by leading nationalised and private banks including SBI, HDFC, ICICI, and Axis Bank.'
  },
  {
    q: 'How does Northstar ensure construction quality?',
    a: 'We use high-grade materials, advanced construction methods, and multi-tier quality checks across foundation, structural integrity, plumbing, and finishing.'
  },
  {
    q: 'What kind of amenities are standard in Northstar communities?',
    a: 'Our communities typically include fully equipped clubhouses, swimming pools, landscaped central parks, walking tracks, sports courts, and 24/7 multi-tier security.'
  },
  {
    q: 'Are there ongoing projects currently open for booking?',
    a: 'Yes, our flagship ongoing developments including Allura, SP Palacio, Sanctuary, Park Avenue, and Golden Valley are currently welcoming homebuyers.'
  },
  {
    q: 'How can I schedule a site visit?',
    a: 'You can book a site visit online through our Contact page or call our dedicated relationship team directly.'
  },
  {
    q: 'What post-handover support does Northstar offer?',
    a: 'We provide comprehensive handover assistance, facility management coordination, society formation support, and warranty period maintenance.'
  }
];

export default function AboutCompany() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#07294A]">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO CINEMA (Lodha / Sobha Inspired Full-Width Banner)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] lg:min-h-[640px] bg-[#07294A] text-white flex items-center overflow-hidden">
        {/* Ambient video background */}
        <div className="absolute inset-0 opacity-40">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#07294A] via-[#07294A]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07294A] via-transparent to-black/30 z-10" />

        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-24 relative z-20 w-full">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-nav font-semibold mb-8 text-[#C7DCED]">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">About Us</span>
            <span>/</span>
            <span className="text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">Company</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[820px]"
          >
            <span className="text-[12px] sm:text-[13px] tracking-[0.28em] uppercase text-[#D5BFA8] font-nav font-semibold mb-4 block">
              OUR STORY & PHILOSOPHY
            </span>
            <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-heading font-normal leading-[1.08] text-white tracking-tight mb-6">
              Building Trust. <br />
              <span className="font-normal text-[#E2EEF8]">Shaping Communities.</span>
            </h1>
            <p className="text-[16px] sm:text-[20px] font-body font-light text-[#C7DCED] leading-relaxed max-w-[680px]">
              At Northstar, we create spaces people believe in, belong to, and cherish for life.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: EDITORIAL INTRO WITH FULL-FRAME VISUAL (Lodha / Sobha)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8E6F2]" id="intro">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] sm:text-[12px] tracking-[0.26em] uppercase text-[#785D4A] font-nav font-semibold block">
                COMPANY INTRODUCTION
              </span>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-[#07294A] leading-[1.14] tracking-tight">
                We Build Spaces Where Life Feels Truly at Home
              </h2>
              <div className="w-16 h-0.5 bg-[#785D4A]" />
              <p className="text-[17px] sm:text-[19px] font-heading font-normal text-[#07294A] leading-snug pt-2">
                At Northstar, every project begins with people — their dreams, their comfort, their lifestyle, and their future.
              </p>
              <p className="text-[15px] sm:text-[16px] font-body text-[#556475] leading-[1.8]">
                Established in 2012, Northstar Homes has grown into a trusted real estate developer across Hyderabad and Visakhapatnam, creating premium apartments, luxury villas, plotted communities, and commercial spaces.
              </p>
            </div>

            {/* Right Large Architectural Visual Frame */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden shadow-2xl border border-[#E5E0D8] group">
                <img
                  src={imgAllura}
                  alt="Northstar Architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#C7DCED] font-nav block mb-1">
                    Signature Development
                  </span>
                  <p className="text-[18px] sm:text-[20px] font-heading font-medium">
                    Allura Luxury Villa Community, Hyderabad
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 3 Split Visual Highlights (Sobha / Lodha style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 border border-[#E5E0D8]">
                <img
                  src={imgSpPalacio}
                  alt="SP Palacio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[18px] font-heading font-medium text-[#07294A] mb-1">
                High-Rise Sophistication
              </h3>
              <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                Contemporary high-rise apartments designed for breathable living in central city hubs.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 border border-[#E5E0D8]">
                <img
                  src={imgSanctuary}
                  alt="Sanctuary"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[18px] font-heading font-medium text-[#07294A] mb-1">
                Nature-Led Plotted Enclaves
              </h3>
              <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                Spacious plotted layouts amidst greenery, planned with enduring infrastructure and long-term appreciation.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 border border-[#E5E0D8]">
                <img
                  src={imgParkAvenue}
                  alt="Park Avenue"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[18px] font-heading font-medium text-[#07294A] mb-1">
                Coastal Community Living
              </h3>
              <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                Gated communities designed around central green parks and modern family recreation.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TRACK RECORD STATS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#D8E6F2]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#785D4A] font-nav font-semibold mb-2 block">
              PROVEN TRACK RECORD
            </span>
            <h3 className="text-[28px] sm:text-[36px] font-heading font-normal text-[#07294A] leading-tight">
              A Legacy of Thoughtful Craftsmanship Across Hyderabad & Vizag
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-5">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-lg p-6 text-center border border-[#D8E6F2] hover:border-[#785D4A] hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-[32px] sm:text-[38px] lg:text-[42px] font-heading font-medium text-[#785D4A] group-hover:text-[#07294A] transition-colors leading-none block mb-2">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-nav font-medium text-[#556475] leading-snug block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CRAFTING TIMELESS ELEGANCE (Visual Showcase inspired by Lodha)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8E6F2]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Visual Mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img
                    src={imgHouse}
                    alt="Interior Luxury"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img
                    src={imgDistrict1}
                    alt="District 1 Facade"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img
                    src={imgHeaderside}
                    alt="Clubhouse Lounge"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img
                    src={imgHillside}
                    alt="Hillside Villa"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Narrative & Craftsmanship Ethos */}
            <div className="space-y-6">
              <span className="text-[11px] sm:text-[12px] tracking-[0.26em] uppercase text-[#785D4A] font-nav font-semibold block">
                CRAFTING TIMELESS ELEGANCE
              </span>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-[#07294A] leading-[1.14] tracking-tight">
                Meticulous Attention to Every Detail
              </h2>
              <div className="w-16 h-0.5 bg-[#785D4A]" />
              
              <p className="text-[16px] font-body text-[#556475] leading-[1.85]">
                Much like the great creators in luxury real estate, our dedication to quality is an ongoing journey. Every Northstar development brings together accomplished architects, skilled structural engineers, and premium construction materials to ensure your home stands the test of time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#785D4A] pl-4">
                  <h4 className="text-[16px] font-heading font-medium text-[#07294A] mb-1">
                    Vaastu-Led Planning
                  </h4>
                  <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                    Thoughtfully aligned orientations maximizing positive natural energy, wind currents, and sunlight.
                  </p>
                </div>

                <div className="border-l-2 border-[#785D4A] pl-4">
                  <h4 className="text-[16px] font-heading font-medium text-[#07294A] mb-1">
                    Dual-Road & Open Layouts
                  </h4>
                  <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                    Rare architectural planning offering dual street access, private landscaped yards, and high privacy.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: OUR MISSION & VISION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#D8E6F2]" id="mission">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Mission Card */}
            <div className="p-10 sm:p-14 rounded-xl bg-[#EEF5FB] text-ink border border-line shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-accent font-nav font-semibold mb-3 block">
                  PURPOSE & COMMITMENT
                </span>
                <h3 className="text-[30px] sm:text-[38px] font-heading font-normal text-ink mb-5 leading-tight">
                  Our Mission
                </h3>
                <p className="text-[16px] sm:text-[17px] font-body font-light text-muted leading-[1.85]">
                  At Northstar Homes, we are committed to responsible property development. We believe in creating high-quality spaces, built with sound design principles and delivered on time. Our goal is to enhance how our customers experience life, whether at home, at work, or at leisure.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-line flex items-center justify-between text-[13px] text-muted font-nav">
                <span>Accountability • Craft • Timely Delivery</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-10 sm:p-14 rounded-xl bg-white border border-[#D8E6F2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#785D4A] font-nav font-semibold mb-3 block">
                  CORE GUIDING PRINCIPLES
                </span>
                <h3 className="text-[30px] sm:text-[38px] font-heading font-normal text-[#07294A] mb-5 leading-tight">
                  Our Vision
                </h3>
                <p className="text-[16px] sm:text-[17px] font-body font-normal text-[#556475] leading-[1.85]">
                  To be recognised across South India as the benchmark for uncompromised construction quality, sustainable plotted and villa community master planning, and enduring customer trust.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#D8E6F2] flex items-center justify-between text-[13px] text-[#785D4A] font-nav font-semibold">
                <span>Skilled Professionals Behind Every Project &rarr;</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: OUR PHILOSOPHY: DREAM. DISCOVER. DWELL. (With Visual Frames)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8E6F2]" id="philosophy">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">

          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#785D4A] font-nav font-semibold mb-3 block">
              ARCHITECTURAL ETHOS
            </span>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[50px] font-heading font-normal text-[#07294A] leading-tight mb-4">
              Our Philosophy: Dream. Discover. Dwell.
            </h2>
            <p className="text-[#556475] font-normal text-[15px] sm:text-[17px] leading-[1.8]">
              These three words define how we approach every project — from the first plot of land we evaluate to the day we hand over the keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 01: DREAM */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg border border-[#D8E6F2] overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={imgEdenGardens}
                  alt="Dream"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[#07294A] font-heading font-medium text-[12px] shadow-sm">
                  01 / DREAM
                </span>
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-heading font-medium text-[#07294A] group-hover:text-[#785D4A] transition-colors mb-3">
                    Dream
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-body text-[#556475] leading-[1.75]">
                    Every great home begins with listening. We invest deeply in understanding our customers' aspirations, the character of every neighbourhood, and the vision that the future demands of a great address.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 02: DISCOVER */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-lg border border-[#D8E6F2] overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={imgGardenSuites}
                  alt="Discover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[#07294A] font-heading font-medium text-[12px] shadow-sm">
                  02 / DISCOVER
                </span>
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-heading font-medium text-[#07294A] group-hover:text-[#785D4A] transition-colors mb-3">
                    Discover
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-body text-[#556475] leading-[1.75]">
                    We seek out prime locations with strong connectivity and long-term appreciation potential. We partner with accomplished architects and secure all approvals so buyers move forward with confidence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 03: DWELL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-lg border border-[#D8E6F2] overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={imgWeAlways}
                  alt="Dwell"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[#07294A] font-heading font-medium text-[12px] shadow-sm">
                  03 / DWELL
                </span>
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-heading font-medium text-[#07294A] group-hover:text-[#785D4A] transition-colors mb-3">
                    Dwell
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-body text-[#556475] leading-[1.75]">
                    We design spaces that elevate everyday living — spaces that are functional, beautiful, and built to the highest standards of craftsmanship.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: CUSTOMER TESTIMONIALS (Video Gallery)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#D8E6F2]" id="testimonials">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#785D4A] font-nav font-semibold block mb-2">
                HEAR FROM OUR COMMUNITY
              </span>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-[#07294A] leading-tight">
                Resident Experiences
              </h2>
            </div>
            <p className="text-[14px] sm:text-[15px] font-body text-[#556475] max-w-[420px]">
              Direct reflections and authentic homebuyer journeys across our completed developments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                onClick={() => setSelectedVideo(t)}
                className="group bg-white rounded-lg border border-[#D8E6F2] overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-[16/9] bg-[#07294A] overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${t.embedId}/hqdefault.jpg`}
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#07294A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#07294A]/90 text-[10px] uppercase tracking-wider text-white font-nav">
                    {t.project}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-[16px] font-heading font-medium text-[#07294A] group-hover:text-[#785D4A] transition-colors leading-snug line-clamp-2">
                    {t.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: FAQS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]" id="faqs">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#785D4A] font-nav font-semibold mb-2 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-heading font-normal text-[#07294A] leading-tight mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-[15px] font-body text-[#556475]">
              Transparent answers regarding our legacy, planning standards, and buying process.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#D8E6F2] rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer bg-white hover:bg-white transition-colors"
                  >
                    <span className="text-[16px] sm:text-[17px] font-heading font-medium text-[#07294A] pr-4">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-[#D5CFC7] flex items-center justify-center shrink-0 text-[#07294A] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 text-[14px] sm:text-[15px] text-[#556475] font-body leading-[1.75] border-t border-[#F0EBE4] pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Testimonial Video Lightbox Modal ── */}
      <AnimatePresence>
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-[900px] w-full bg-black rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>

              <div className="aspect-[16/9] w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
