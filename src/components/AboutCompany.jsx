import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroVideo from '../assets/hero video eden compr.mp4';

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
    q: '1. What does Northstar Homes do?',
    a: 'Northstar Homes is a real estate development company creating premium residential and commercial spaces in Hyderabad and Vizag. With a focus on quality, design, sustainability, and customer experience, Northstar has delivered apartments, villas, plots, and commercial developments across strategic locations.'
  },
  {
    q: '2. What kind of projects does Northstar develop?',
    a: 'Northstar develops gated community apartments, luxury villas, premium villa plots, and commercial spaces. Our projects are designed to offer modern living, comfort, security, thoughtful planning, and long-term value for homebuyers and investors.'
  },
  {
    q: '3. Why should customers choose Northstar Homes?',
    a: 'Customers choose Northstar for its commitment to quality construction, thoughtful design, sustainable planning, transparent communication, and customer-focused service. Every project is planned to create spaces that are not only beautiful, but also practical, durable, and valuable over time.'
  },
  {
    q: '4. Where does Northstar Homes have projects?',
    a: 'Northstar Homes has projects across Hyderabad and Visakhapatnam. Our developments are located in key residential and growth corridors, offering customers access to premium city living, strong connectivity, and well-planned lifestyle spaces.'
  },
  {
    q: '5. Are Northstar projects approved by RERA and relevant authorities?',
    a: 'Yes. Northstar Homes follows regulatory requirements and project approval processes. Northstar properties are approved by HMDA and RERA, reflecting the company’s focus on compliance, transparency, and buyer confidence.'
  },
  {
    q: '6. How does Northstar ensure construction quality?',
    a: 'Northstar ensures quality through careful planning, reliable materials, strong site supervision, and detailed checks at every stage. Before handover, our homes are also inspected by PropChk, a professional third-party property inspection company, giving customers added confidence in the workmanship, finishes, functionality, and overall readiness of their home.'
  },
  {
    q: '7. Does Northstar provide support after booking?',
    a: 'Yes. Northstar believes in providing complete customer support throughout the homebuying journey. From enquiry and booking to documentation, project communication, possession, and post-possession assistance, the team remains connected with customers at every important stage.'
  },
  {
    q: '8. Does Northstar provide construction updates to customers?',
    a: 'Yes. Northstar keeps customers informed through regular project communication and construction updates. This helps buyers stay aware of the progress of their home and builds transparency throughout the journey.'
  },
  {
    q: '9. What security features are available in Northstar gated communities?',
    a: 'Northstar gated communities are planned with security features such as controlled access, manned security, CCTV surveillance, intercom systems, lighting, and perimeter protection, etc depending on the project specifications.'
  },
  {
    q: '10. Does Northstar focus on sustainability?',
    a: 'Yes. Sustainability is an important part of Northstar’s development approach. The company focuses on water and energy efficiency, green cover, landscaped surroundings, and design practices that support healthier and more responsible living environments.'
  },
  {
    q: '11. Can NRIs enquire or buy Northstar properties?',
    a: 'Yes. NRIs can enquire for Northstar projects in Hyderabad and Vizag. Our team will assist with project details, virtual discussions, documentation guidance, payment process, and coordination for family visits or site visits in India.'
  },
  {
    q: '12. How can I contact Northstar Homes?',
    a: 'Customers can contact Northstar Homes through the website enquiry form or by calling the sales team. The current website lists +91 8657553355 as the contact number for enquiries.'
  }
];

const testimonialProjects = [
  'All',
  'Garden Suites',
  'District 1',
  'Hillside',
  'Eden Garden',
  'Park Avenue',
  'Allura',
  'Airport Boulevard'
];

export default function AboutCompany() {
  const [activeTestimonialProject, setActiveTestimonialProject] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const filteredTestimonials = activeTestimonialProject === 'All'
    ? testimonialsData
    : testimonialsData.filter(t => t.project === activeTestimonialProject);

  return (
    <main className="min-h-screen bg-bg text-ink pt-28 lg:pt-36">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO BANNER (With Video Background & Taglines)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] lg:min-h-[620px] bg-[#07294A] text-white flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07294A] via-[#07294A]/80 to-transparent z-10" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 relative z-20 w-full">
          
          {/* Breadcrumb / Sub-nav Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-body font-semibold mb-8 text-[#8FA7BD]">
            <span className="text-[#4FA3E3]">About Us</span>
            <span>/</span>
            <span className="text-white bg-white/10 px-3 py-1 rounded-full border border-white/15">Company</span>
            <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
            <a href="#legacy" className="hover:text-white transition-colors">Awards</a>
          </div>

          {/* Primary Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[850px]"
          >
            <span className="text-[12px] sm:text-[13px] tracking-[0.28em] uppercase text-[#4FA3E3] font-body font-semibold mb-4 block">
              About Northstar Homes
            </span>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-heading font-normal leading-[1.06] text-white tracking-tight mb-6">
              Built on Trust. Designed for Life.
            </h1>
            <p className="text-[18px] sm:text-[22px] lg:text-[24px] font-heading font-light text-[#C7DCED] leading-relaxed max-w-[720px]">
              At Northstar, we create spaces people believe in, belong to, and cherish for life.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: COMPANY INTRODUCTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-bg border-b border-line" id="intro">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-5">
              <span className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-3 block">
                Company Introduction
              </span>
              <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-heading font-normal text-ink leading-[1.14] tracking-tight">
                We Build Spaces Where Life Feels Truly at Home
              </h2>
              <div className="w-16 h-0.5 bg-accent mt-8" />
            </div>

            {/* Right Column: Narrative Copy */}
            <div className="lg:col-span-7 space-y-6 text-[17px] sm:text-[18px] font-body font-light text-muted leading-[1.85]">
              <p className="text-[20px] sm:text-[22px] font-heading font-normal text-ink leading-snug">
                At Northstar, every project begins with people — their dreams, their comfort, their lifestyle, and their future.
              </p>
              <p>
                Established in 2012, Northstar Homes has grown into a trusted real estate developer across Hyderabad and Visakhapatnam, creating premium apartments, luxury villas, plotted communities, and commercial spaces. Our developments are shaped with thoughtful design, quality construction, responsible planning, and a deep commitment to long-term value.
              </p>
              <p>
                For us, real estate is not just about building structures. It is about creating places where families grow, communities come together, and everyday life feels more meaningful.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TRACK RECORD STATS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#EEF5FB] border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-2 block">
              Proven Track Record
            </span>
            <h3 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink leading-tight">
              A Legacy of Thoughtful Craftsmanship Across Hyderabad & Vizag
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-4">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 text-center border border-line hover:border-accent hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-[34px] sm:text-[40px] lg:text-[44px] font-heading font-normal text-accent group-hover:text-ink transition-colors leading-none block mb-2">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-body font-medium text-muted/80 leading-snug block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: OUR MISSION & VISION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-bg border-b border-line" id="mission">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Mission Card */}
            <div className="p-10 sm:p-12 lg:p-16 rounded-2xl bg-[#07294A] text-[#E9F2FA] relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0B6FB5]/20 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-[12px] tracking-[0.24em] uppercase text-[#4FA3E3] font-body font-semibold mb-4 block">
                Purpose & Commitment
              </span>
              <h3 className="text-[32px] sm:text-[40px] font-heading font-normal text-white mb-6 leading-tight">
                Our Mission
              </h3>
              <p className="text-[17px] sm:text-[18px] font-body font-light text-[#C7DCED] leading-[1.85]">
                At Northstar Homes, we are committed to responsible property development. We believe in creating high-quality spaces, built with sound design principles and delivered on time. Our goal is to enhance how our customers experience life, whether at home, at work, or at leisure.
              </p>
            </div>

            {/* Philosophy Intro Card */}
            <div className="p-10 sm:p-12 lg:p-16 rounded-2xl bg-[#F8FAFC] border border-line">
              <span className="text-[12px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-4 block">
                Core Guiding Principles
              </span>
              <h3 className="text-[32px] sm:text-[40px] font-heading font-normal text-ink mb-6 leading-tight">
                Our Vision
              </h3>
              <p className="text-[17px] sm:text-[18px] font-body font-light text-muted leading-[1.85] mb-6">
                To be recognised across South India as the benchmark for uncompromised construction quality, sustainable plotted and villa community master planning, and enduring customer trust.
              </p>
              <div className="flex items-center gap-3 text-accent font-semibold text-[13px] tracking-wider uppercase">
                <span>Skilled Professionals Behind Every Project</span>
                <span>&rarr;</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: OUR PHILOSOPHY: DREAM. DISCOVER. DWELL.
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-[#F9FBFC] border-b border-line" id="philosophy">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="text-center max-w-[760px] mx-auto mb-16 lg:mb-24">
            <span className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-3 block">
              Architectural Ethos
            </span>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-heading font-normal text-ink leading-tight mb-5">
              Our Philosophy: Dream. Discover. Dwell.
            </h2>
            <p className="text-muted font-light text-[16px] sm:text-[17px] leading-[1.85]">
              These three words define how we approach every project — from the first plot of land we evaluate to the day we hand over the keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* 01: DREAM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-line p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <div>
                <span className="text-[14px] font-heading font-semibold text-accent mb-4 block">
                  01 / PHILOSOPHY
                </span>
                <h3 className="text-[28px] sm:text-[32px] font-heading font-normal text-ink group-hover:text-accent transition-colors leading-tight mb-4">
                  Dream
                </h3>
                <p className="text-[15px] sm:text-[16px] font-body font-light text-muted leading-[1.8]">
                  Every great home begins with listening. We invest deeply in understanding our customers' aspirations, the character of every neighbourhood, and the vision that the future demands of a great address.
                </p>
              </div>
              <div className="w-12 h-1 bg-accent/30 group-hover:bg-accent mt-8 transition-colors" />
            </motion.div>

            {/* 02: DISCOVER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-line p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <div>
                <span className="text-[14px] font-heading font-semibold text-accent mb-4 block">
                  02 / PHILOSOPHY
                </span>
                <h3 className="text-[28px] sm:text-[32px] font-heading font-normal text-ink group-hover:text-accent transition-colors leading-tight mb-4">
                  Discover
                </h3>
                <p className="text-[15px] sm:text-[16px] font-body font-light text-muted leading-[1.8]">
                  We seek out prime locations with strong connectivity and long-term appreciation potential. We partner with accomplished architects, source the finest materials, and secure all regulatory approvals — so our buyers move forward with complete confidence.
                </p>
              </div>
              <div className="w-12 h-1 bg-accent/30 group-hover:bg-accent mt-8 transition-colors" />
            </motion.div>

            {/* 03: DWELL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl border border-line p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <div>
                <span className="text-[14px] font-heading font-semibold text-accent mb-4 block">
                  03 / PHILOSOPHY
                </span>
                <h3 className="text-[28px] sm:text-[32px] font-heading font-normal text-ink group-hover:text-accent transition-colors leading-tight mb-4">
                  Dwell
                </h3>
                <p className="text-[15px] sm:text-[16px] font-body font-light text-muted leading-[1.8]">
                  We design spaces that elevate everyday living — spaces that are functional, beautiful, and built to the highest standards of craftsmanship.
                </p>
              </div>
              <div className="w-12 h-1 bg-accent/30 group-hover:bg-accent mt-8 transition-colors" />
            </motion.div>

          </div>

          {/* Journey Folder Link Callout */}
          <div className="mt-16 p-8 rounded-2xl bg-white border border-line flex flex-wrap items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold block mb-1">
                Company Archive
              </span>
              <h4 className="text-[22px] font-heading font-normal text-ink">
                Our Journey & Growth
              </h4>
              <p className="text-muted text-[14px] font-light mt-1">
                Explore the photo archives, foundation stones, and visual milestones from our founding in 2012 to today.
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1IRbdsbwgskKjWazuCTEI2PDBrvQ0zP-Y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-accent/90 transition-colors shadow-sm"
            >
              Open Journey Archive Drive &rarr;
            </a>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: CUSTOMER TESTIMONIALS (Video Gallery)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-bg border-b border-line" id="testimonials">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          <div className="flex flex-wrap justify-between items-end gap-6 mb-12 lg:mb-16">
            <div>
              <span className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-2 block">
                What Our Customers Say About Us
              </span>
              <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-ink leading-tight">
                Customer Testimonials
              </h2>
            </div>
            <p className="text-muted font-light text-[15px] sm:text-[16px] max-w-[460px] leading-relaxed">
              Hear firsthand from families and homeowners across our communities in Hyderabad and Visakhapatnam.
            </p>
          </div>

          {/* Project Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10 pb-4 border-b border-line">
            {testimonialProjects.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialProject(proj)}
                className={`px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-body transition-all duration-300 cursor-pointer ${
                  activeTestimonialProject === proj
                    ? 'bg-ink text-white font-medium shadow-md'
                    : 'bg-soft text-muted hover:text-ink hover:bg-line/40 font-light border border-line'
                }`}
              >
                {proj}
              </button>
            ))}
          </div>

          {/* Testimonial Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTestimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-line overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Video Thumbnail Frame */}
                <div className="relative aspect-video bg-[#07294A] overflow-hidden flex items-center justify-center">
                  <img
                    src={`https://img.youtube.com/vi/${item.embedId}/hqdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Play Button */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                    aria-label={`Play video: ${item.title}`}
                  >
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-accent block mb-2">
                    {item.project}
                  </span>
                  <h4 className="text-[17px] sm:text-[18px] font-heading font-normal text-ink leading-snug mb-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] tracking-wider uppercase font-semibold text-accent hover:text-ink transition-colors"
                  >
                    Watch on YouTube &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: FREQUENTLY ASKED QUESTIONS (Accordion)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-[#F9FBFC] border-b border-line" id="faqs">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">

          <div className="text-center max-w-[700px] mx-auto mb-14 lg:mb-18">
            <span className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-2 block">
              Clear & Transparent Information
            </span>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-ink leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted font-light text-[15px] sm:text-[16px] leading-relaxed">
              Find answers to common questions about Northstar Homes, our developments, construction standards, and buying process.
            </p>
          </div>

          {/* Accordion Panels */}
          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-line overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="text-[17px] sm:text-[19px] font-heading font-normal text-ink leading-snug">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-line flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-ink text-white border-ink' : 'text-muted'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-[15px] sm:text-[16px] font-body font-light text-muted leading-[1.85] border-t border-line/60 pt-4">
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


      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: ENQUIRY BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#07294A] text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#4FA3E3] font-semibold block mb-3">
            Connect With Our Advisors
          </span>
          <h2 className="text-[34px] sm:text-[44px] font-heading font-normal text-white mb-6 leading-tight">
            Have Questions About Our Communities?
          </h2>
          <p className="text-[#C7DCED] text-[16px] sm:text-[17px] font-light leading-relaxed mb-8 max-w-[600px] mx-auto">
            Our team is here to assist with project details, master plan walkthroughs, site visits, and personalized guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+918657553355"
              className="px-8 py-3.5 rounded-lg bg-accent text-white text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-accent/90 transition-colors shadow-lg"
            >
              Call +91 86575 53355
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg border border-white/30 text-white text-[12px] tracking-[0.16em] uppercase font-medium hover:bg-white hover:text-ink transition-colors"
            >
              Request a Callback
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
