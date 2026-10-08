import React, { useState, useEffect } from 'react'
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
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import ComingSoon from './components/ComingSoon'

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#coming-soon') {
    return (
      <div className="bg-bg text-ink font-body text-base leading-relaxed flex flex-col min-h-screen">
        <Header />
        <ComingSoon />
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-bg text-ink font-body text-base leading-relaxed overflow-x-hidden">
      <Header />
      <Hero />
      <CredentialBand />
      <About />
      <Timeline />
      <OngoingProjects />
      <CompletedProjects />
      <ProjectLogos />
      <WhyNorthstar />
      <Testimonials />
      <Enquiry />
      <Footer />
      <FloatingContact />
    </div>
  )
}
