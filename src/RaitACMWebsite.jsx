import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RAITACMComponent from './components/join';

const RaitACMWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Polyfill for mobile dynamic vh
  useEffect(() => {
    const setVh = () => {
      // 1% of the viewport height
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'events', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      {/* Hero Section - Full Viewport */}
      <div className="w-full min-h-screen" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
        <Hero scrollToSection={scrollToSection} />
      </div>
      
      {/* About Section - Full Viewport */}
      <div className="w-full min-h-screen" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
        <About />
      </div>
      
      {/* Events Section - Full Viewport */}
      <div className="w-full min-h-screen" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
        <Events />
      </div>

      {/* Join - Full Viewport */}
      <div className="w-full min-h-screen" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
        <RAITACMComponent />
      </div>
      
      {/* Team Section - Full Viewport */}
      <div className="w-full min-h-screen" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
        <Team />
      </div>
      
      {/* Contact Section - Full Viewport */}
      <div className="w-full min-h-screen" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
        <Contact />
      </div>
      
      {/* Footer - Full Width */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default RaitACMWebsite;
