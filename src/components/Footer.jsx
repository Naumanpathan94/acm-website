import React, { useRef, useEffect, useState } from 'react';
import { Code, Heart, Linkedin, Github, Twitter, Mail, MapPin, Phone, ExternalLink, Star, Sparkles, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
    { name: 'Join Us', href: '#join' }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://in.linkedin.com/company/rait-acm-student-chapter',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    { 
      icon: Github, 
      href: '#',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:from-gray-500 hover:to-gray-700'
    },
    { 
      icon: Twitter, 
      href: '#',
      color: 'from-sky-500 to-blue-600',
      hoverColor: 'hover:from-sky-400 hover:to-blue-500'
    },
    { 
      icon: Mail, 
      href: 'mailto:rait.acm@gmail.com',
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-500 hover:to-pink-500'
    }
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0">
        {['</', '/>', '{}', '[]', '()', ';;'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-blue-400/10 font-mono text-2xl animate-float-code"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Top Border with Gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/30 transform -skew-x-12 animate-shimmer"></div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 max-w-full overflow-x-hidden">
        {/* Main Footer Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="group flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                    RAIT ACM Student Chapter
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    Advancing Computing as a Science & Profession
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md">
                Empowering students through technical excellence, innovation, and community building. 
                Join us in shaping the future of computing technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span className="text-sm">Ramrao Adik Institute of Technology, Nerul</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">rait.acm@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-400 animate-pulse" />
                Connect With Us
              </h4>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 bg-gradient-to-br ${social.color} ${social.hoverColor} rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl`}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Stay updated with our latest events</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-l-xl focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 text-sm transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
                    <Mail className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm mb-2 flex items-center justify-center lg:justify-start">
                  <span>© 2025 RAIT ACM Student Chapter. All rights reserved.</span>
                  <Heart className="w-4 h-4 ml-2 text-red-400 animate-pulse" />
                </p>
                <p className="text-xs text-gray-500 flex items-center justify-center lg:justify-start">
                  <Sparkles className="w-3 h-3 mr-1 text-yellow-400" />
                  Recognized by ACM - World's Largest Computing Society
                </p>
              </div>

              {/* Stats */}
              <div className="flex space-x-8 text-center">
                <div className="group">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    310+
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Followers
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    25+
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Events
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
                    1K+
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Students
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/25 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <style jsx>{`
        @keyframes float-code {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-10px) rotate(5deg) scale(1.05); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) rotate(10deg) scale(1.1); 
            opacity: 0.15;
          }
          75% { 
            transform: translateY(-10px) rotate(5deg) scale(1.05); 
            opacity: 0.2;
          }
        }
        
        .animate-float-code {
          animation: float-code 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
