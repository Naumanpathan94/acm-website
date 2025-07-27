import React, { useState, useEffect } from 'react';
import { Menu, X, Code, ChevronRight, Star, Sparkles, Zap, Users, Calendar, Home, User, Phone } from 'lucide-react';
import Logodark from '../assets/logodark.png';


const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [logoHovered, setLogoHovered] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with icons
  const navItems = [
    { name: 'Home', section: 'home', icon: Home },
    { name: 'About', section: 'about', icon: User },
    { name: 'Events', section: 'events', icon: Calendar },
    { name: 'Team', section: 'team', icon: Users },
    { name: 'Contact', section: 'contact', icon: Phone }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 animate-scale-x"></div>
      
      {/* Floating particles in navbar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float-nav"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => scrollToSection('home')}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div className="relative">
              <img
                src={Logodark} 
                alt="RAIT ACM Logo"
                style={{ width: '48px', height: 'auto', objectFit: 'contain' }}
                className={`rounded-2xl shadow-2xl transition-all duration-500 ${
                  logoHovered ? 'scale-110 rotate-6 shadow-blue-500/50' : 'scale-100 rotate-0'
                }`}
              />
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 transition-opacity duration-500 ${
                logoHovered ? 'opacity-50' : 'opacity-0'
              }`}></div>
              {/* Status indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
            </div>
            
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-2xl font-black text-white bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                RAIT ACM
              </h1>
              <p className="text-sm text-gray-400 font-medium flex items-center">
                <Star className="w-3 h-3 mr-1 text-yellow-400" />
                Student Chapter
              </p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
            {navItems.map((item, index) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                onMouseEnter={() => setHoveredItem(item.section)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`group relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl flex items-center space-x-2 ${
                  activeSection === item.section
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background glow for active item */}
                {activeSection === item.section && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-50 animate-pulse"></div>
                )}
                
                <div className="relative flex items-center space-x-2">
                  <item.icon className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredItem === item.section ? 'rotate-12 scale-110' : ''
                  }`} />
                  <span>{item.name}</span>
                  
                  {/* Hover indicator */}
                  <ChevronRight className={`w-3 h-3 opacity-0 transition-all duration-300 ${
                    hoveredItem === item.section ? 'opacity-100 translate-x-1' : 'translate-x-0'
                  }`} />
                </div>

                {/* Active section indicator */}
                {activeSection === item.section && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative p-3 rounded-2xl text-gray-300 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
                }`} />
              </div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl m-4 p-6 shadow-2xl">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">Navigation</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>

            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.section}
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsMenuOpen(false);
                  }}
                  className={`group w-full text-left px-6 py-4 text-base font-medium transition-all duration-300 rounded-2xl flex items-center space-x-4 ${
                    activeSection === item.section
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white hover:translate-x-2'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 transition-transform duration-300 ${
                    activeSection === item.section ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-6'
                  }`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <span className="block">{item.name}</span>
                    {activeSection === item.section && (
                      <span className="text-xs text-blue-400 font-medium">Current Section</span>
                    )}
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    activeSection === item.section 
                      ? 'text-blue-400 rotate-90' 
                      : 'text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile menu footer */}
            <div className="mt-6 pt-4 border-t border-gray-700/50 text-center">
              <p className="text-xs text-gray-400 flex items-center justify-center">
                <Zap className="w-3 h-3 mr-1 text-yellow-400" />
                Powered by RAIT ACM
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-nav {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-10px) rotate(180deg); 
            opacity: 0.6;
          }
        }
        
        .animate-float-nav {
          animation: float-nav 4s ease-in-out infinite;
        }
        
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-scale-x {
          animation: scale-x 2s ease-out;
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
