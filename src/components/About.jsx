import React, { useRef, useEffect, useState } from 'react';
import { Target, Zap, Trophy, Code, Users, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ followers: 0, events: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounter('followers', 310);
          animateCounter('events', 25);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (key, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 30);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background Elements for Full Coverage */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-green-500/10 rounded-full blur-3xl animate-spin slow-spin"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Full viewport gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900/30 via-transparent to-gray-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
        
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content container with proper mobile spacing */}
      <div className="w-full h-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-500/25 hover:to-purple-500/25 transition-all duration-300 group">
              <Target className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform duration-300" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Our Chapter
              </span>
              <Sparkles className="w-3 h-3 ml-1 group-hover:scale-110 transition-transform duration-300" />
            </div>
           
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight px-2">
              About Us
            </h2>
           
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                Advancing computing as a science and profession through
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold"> innovation </span>
                and
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> community</span>
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Main Content - Mobile First Layout */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
            {/* Left Column - Mission & Stats */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                <div className="relative bg-gray-800/70 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-gray-600/30 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Our Mission</h3>
                  </div>
                 
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl">
                      <span className="text-blue-400 font-semibold">RAIT ACM Student Chapter</span> is recognized by the International Association for Computing Machinery (ACM),
                      the world's largest educational and scientific computing society. We are committed to advancing computing
                      as a science and profession.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl">
                      Our chapter organizes technical events, workshops, hackathons, and speaker sessions to enhance
                      students' technical skills and provide industry exposure. We bridge the gap between academia
                      and industry through our various initiatives.
                    </p>
                  </div>

                  <div className="flex items-center mt-6 sm:mt-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="font-semibold text-sm sm:text-base lg:text-lg">Learn more about our journey</span>
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="group relative">
                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative text-center p-4 sm:p-6 lg:p-8 bg-gray-800/70 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-600/30 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 hover:scale-105">
                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2 sm:mb-4">
                      {counters.followers}+
                    </div>
                    <p className="text-gray-400 font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">LinkedIn Followers</p>
                    <div className="mt-2 sm:mt-4 w-full h-1 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
               
                <div className="group relative">
                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative text-center p-4 sm:p-6 lg:p-8 bg-gray-800/70 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-600/30 hover:border-purple-500/50 hover:bg-gray-800/80 transition-all duration-500 hover:scale-105">
                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2 sm:mb-4">
                      {counters.events}+
                    </div>
                    <p className="text-gray-400 font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">Annual Events</p>
                    <div className="mt-2 sm:mt-4 w-full h-1 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {[
                {
                  icon: Trophy,
                  title: 'ELIXER Techfest',
                  desc: 'Annual flagship technical festival bringing innovation to life',
                  color: 'blue',
                  gradient: 'from-blue-500 to-blue-600',
                },
                {
                  icon: Code,
                  title: 'Hackathons',
                  desc: '24hr & 48hr coding marathons for creative problem solving',
                  color: 'purple',
                  gradient: 'from-purple-500 to-purple-600',
                },
                {
                  icon: Users,
                  title: 'Speaker Programs',
                  desc: 'Distinguished & eminent speakers sharing industry insights',
                  color: 'green',
                  gradient: 'from-green-500 to-green-600',
                },
                {
                  icon: BookOpen,
                  title: 'Paper Presentations',
                  desc: 'National level technical presentations and research showcase',
                  color: 'orange',
                  gradient: 'from-orange-500 to-orange-600',
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${item.gradient} rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
                  <div className="relative bg-gray-800/70 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl text-center border border-gray-600/30 hover:border-white/20 hover:bg-gray-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 h-full flex flex-col justify-center min-h-[200px] sm:min-h-[240px]">
                    <div className="relative mb-4 sm:mb-6">
                      <div className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br ${item.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-${item.color}-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <item.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
                    </div>
                   
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {item.title}
                    </h4>
                   
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
                      {item.desc}
                    </p>

                    <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className={`w-full h-1 sm:h-2 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
       
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
       
        .slow-spin {
          animation: spin 20s linear infinite;
        }
       
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
       
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;