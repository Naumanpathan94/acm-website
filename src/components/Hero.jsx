import React, { useEffect, useState } from 'react';
import { ChevronRight, Code, Trophy, Users, Star, Sparkles, Zap, ArrowDown } from 'lucide-react';
import landingImage from '../assets/landing.jpg';

const Hero = ({ scrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ['Innovation', 'Excellence', 'Community', 'Technology', 'Future'];
  const fullText = "We see a world where computing helps solve tomorrow's problems";

  useEffect(() => {
    setIsLoaded(true);
    
    // Mouse move effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect for subtitle
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-16 min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs - Adjusted for mobile */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-green-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Moving grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid-move"></div>
        
        {/* Floating particles - Reduced for mobile */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect - Disabled on mobile */}
      <div
        className="fixed w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-1000 ease-out hidden sm:block"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="text-center">
          {/* Animated Badge - Mobile responsive */}
          <div className={`inline-flex items-center px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm mb-6 sm:mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              World's Largest Computing Society
            </span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-yellow-400 animate-pulse delay-500" />
          </div>

          {/* Main Title with Stagger Animation - Mobile responsive */}
          <div className="relative mb-6 sm:mb-8">
            <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-shift">
                RAIT ACM
              </span>
              <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light mt-2 sm:mt-4 text-gray-300 relative">
                Student Chapter
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping"></div>
              </span>
            </h1>
            
            {/* Rotating words - Hidden on mobile for cleaner look */}
            <div className="absolute -right-4 top-4 hidden xl:block">
              <div className="text-blue-400 font-semibold text-lg animate-bounce">
                {words[currentWordIndex]}
              </div>
            </div>
          </div>

          {/* Typewriter Subtitle - Mobile responsive */}
          <div className={`mb-6 sm:mb-8 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 min-h-[2rem] sm:min-h-[3rem] flex items-center justify-center px-2">
              <span className="text-center">{typedText}</span>
              <span className="ml-1 w-0.5 h-6 sm:h-8 bg-blue-400 animate-pulse"></span>
            </p>
          </div>

          {/* Description - Mobile responsive */}
          <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm sm:text-lg md:text-xl max-w-5xl mx-auto leading-relaxed text-gray-300 px-2">
              RAIT ACM Student Chapter, recognized by the{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                INTERNATIONAL
              </span>{' '}
              level Association for Computing Machinery (ACM),{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
                WORLD'S
              </span>{' '}
              largest educational and scientific computing society.
            </p>
          </div>

          {/* Enhanced Action Buttons - Mobile responsive */}
          <div className={`flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center mb-8 sm:mb-16 px-4 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={() => scrollToSection('events')}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <Trophy className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm sm:text-base">Explore Events</span>
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="group relative border-2 border-gray-600 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:border-blue-400 hover:shadow-2xl overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <Code className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm sm:text-base">Learn More</span>
                <Users className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Team Section - Large Centered - Mobile responsive */}
          <div className={`mb-8 sm:mb-12 px-2 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm p-3 sm:p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={landingImage} 
                    alt="RAIT ACM Team" 
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl sm:rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-center">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Our Team
                    </h3>
                    <p className="text-blue-200 text-sm sm:text-lg md:text-xl font-medium">Meet Our Squad</p>
                  </div>
                  <div className="absolute top-3 sm:top-6 right-3 sm:right-6 flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs sm:text-sm font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Row Below - Mobile responsive */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-16 px-4 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                310+
              </div>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">LinkedIn Followers</p>
            </div>
            
            <div className="group text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                25+
              </div>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">Annual Events</p>
            </div>
            
            <div className="group text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text mb-2">
                1K+
              </div>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">Students Reached</p>
            </div>
          </div>

          {/* Scroll Indicator - Mobile responsive */}
          <div className={`transition-all duration-1000 delay-1400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col items-center animate-bounce">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Discover More</p>
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 1;
          }
        }
        
        .animate-float-particle {
          animation: float-particle 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
