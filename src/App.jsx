import React, { useState, useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import Header from './components/Header'
import Hero from './components/Hero'
import CredentialBand from './components/CredentialBand'
import About from './components/About'
import Timeline from './components/Timeline'
import OngoingProjects from './components/OngoingProjects'
import CompletedProjects from './components/CompletedProjects'
import ProjectLogos from './components/ProjectLogos'
import WhyNorthstar from './components/WhyNorthstar'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import ComingSoon from './components/ComingSoon'
import ProjectDetail from './components/ProjectDetail'
import Careers from './components/Careers'
import AboutCompany from './components/AboutCompany'
import Leadership from './components/Leadership'
import ContactUs from './components/ContactUs'
import HomeLoanGuide from './components/HomeLoanGuide'
import NriGuide from './components/NriGuide'
import EmiCalculator from './components/EmiCalculator'
import BlogListing from './components/BlogListing'
import BlogPost from './components/BlogPost'

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentHash]);

  if (currentHash.startsWith('#project/') || currentHash === '#sanctuary') {
    const projectId = currentHash === '#sanctuary' ? 'sanctuary' : currentHash.replace('#project/', '');
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <ProjectDetail projectId={projectId} />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (currentHash === '#about-company' || currentHash === '#company' || currentHash === '#about-us') {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <AboutCompany />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (currentHash === '#leadership' || currentHash === '#about-leadership') {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <Leadership />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (currentHash === '#careers' || currentHash.startsWith('#careers')) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <Careers />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (
    currentHash === '#contact' || 
    currentHash === '#contact-us' || 
    currentHash === '#contact/general-enquiry' || 
    currentHash === '#contact-general'
  ) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <ContactUs type="general" />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (
    currentHash === '#contact/channel-partner' || 
    currentHash === '#contact-channel-partner' || 
    currentHash === '#channel-partner'
  ) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <ContactUs type="channel-partner" />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (
    currentHash === '#contact/land-owner' || 
    currentHash === '#contact-land-owner' || 
    currentHash === '#land-owner' || 
    currentHash === '#joint-development'
  ) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <ContactUs type="land-owner" />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (
    currentHash === '#contact/vendor' || 
    currentHash === '#contact-vendor' || 
    currentHash === '#vendor' || 
    currentHash === '#contractor'
  ) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <ContactUs type="vendor" />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (
    currentHash === '#home-loan-guide' || 
    currentHash === '#resources/home-loan-guide' || 
    currentHash === '#loan-guide'
  ) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <HomeLoanGuide />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (
    currentHash === '#nri-guide' || 
    currentHash === '#resources/nri-guide' || 
    currentHash === '#nri'
  ) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <NriGuide />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (
    currentHash === '#emi-calculator' || 
    currentHash === '#calculator' || 
    currentHash === '#resources/emi-calculator'
  ) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <EmiCalculator />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  // Single Blog Post
  if (currentHash.startsWith('#blog/')) {
    const slug = currentHash.replace('#blog/', '');
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <BlogPost slug={slug} />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  // All Blogs Listing
  if (
    currentHash === '#blogs' || 
    currentHash === '#blog' || 
    currentHash === '#articles' || 
    currentHash === '#resources/blogs'
  ) {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <BlogListing />
        <Footer />
        <FloatingContact />
      </div>
    );
  }

  if (currentHash === '#coming-soon') {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <ComingSoon />
        <Footer />
      </div>
    )
  }

  // Smooth scroll configuration
  const lenisOptions = {
    lerp: 0.07, // The lower the number, the smoother/heavier the scroll
    smoothWheel: true,
    wheelMultiplier: 1.1, // Slightly faster wheel speed for better UX
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="bg-bg text-ink font-body text-base leading-relaxed overflow-x-hidden">
        <Header />
        <Hero />
        <CredentialBand />
        <About />
        <OngoingProjects />
        <CompletedProjects />
        <Timeline />
        <ProjectLogos />
        <WhyNorthstar />
        <Testimonials />
        <Footer />
        <FloatingContact />
      </div>
    </ReactLenis>
  )
}
