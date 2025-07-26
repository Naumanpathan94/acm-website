import React, { useRef, useEffect, useState } from 'react';
import { Calendar, ExternalLink, Star, Trophy, Code, Users, BookOpen, Zap, Sparkles, ArrowRight, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "ELIXER - Annual Techfest",
    date: "March 2025",
    description: "RAIT ACM Student Chapter organizes the annual Techfest ELIXER featuring competitions, workshops, and technical exhibitions.",
    status: "Annual Event",
    gradient: "from-blue-500 to-purple-600",
    icon: Trophy,
    participants: "500+",
    duration: "3 Days"
  },
  {
    id: 2,
    title: "48 Hour Virtual Hackathon", 
    date: "Ongoing",
    description: "Intensive coding marathon that challenges students to develop innovative solutions within 48 hours.",
    status: "Regular Event",
    gradient: "from-green-500 to-teal-600",
    icon: Code,
    participants: "200+",
    duration: "48 Hours"
  },
  {
    id: 3,
    title: "Distinguished Speaker Programme",
    date: "Monthly",
    description: "Industry experts and academicians share insights on cutting-edge technologies and career opportunities.",
    status: "Monthly",
    gradient: "from-orange-500 to-red-600",
    icon: Users,
    participants: "150+",
    duration: "2 Hours"
  },
  {
    id: 4,
    title: "CODEJAM Sessions",
    date: "Weekly",
    description: "Regular coding practice sessions to enhance programming skills and competitive coding abilities.",
    status: "Weekly",
    gradient: "from-purple-500 to-pink-600",
    icon: Zap,
    participants: "50+",
    duration: "3 Hours"
  },
  {
    id: 5,
    title: "National Level Paper Presentations",
    date: "Bi-Annual",
    description: "Platform for students to present their research work and technical innovations at national level.",
    status: "Bi-Annual",
    gradient: "from-indigo-500 to-blue-600",
    icon: BookOpen,
    participants: "100+",
    duration: "1 Day"
  },
  {
    id: 6,
    title: "Summer & Winter Internships",
    date: "Seasonal",
    description: "Internship programs connecting students with industry opportunities during academic breaks.",
    status: "Seasonal",
    gradient: "from-teal-500 to-green-600",
    icon: Star,
    participants: "75+",
    duration: "2-3 Months"
  }
];

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="events" 
      className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-green-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0">
        {[Calendar, Code, Trophy, Users, BookOpen, Star].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-purple-400/20 animate-float-icon"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <Icon className="w-6 h-6" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 rounded-full text-xs font-semibold mb-4 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group">
            <Calendar className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Events & Activities
            </span>
            <Sparkles className="w-3 h-3 ml-1 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent leading-tight">
            Events & Programs
          </h2>
          
          <div className="relative">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              From 
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold"> ELIXER Techfest </span>
              to coding sessions, we organize diverse technical events throughout the 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-semibold"> year</span>
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Events Grid */}
<div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${event.gradient} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-1000`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105">
                {/* Top Gradient Bar */}
                <div className={`h-2 bg-gradient-to-r ${event.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
                
                <div className="p-8">
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r ${event.gradient} bg-opacity-20 text-white border border-white/20 backdrop-blur-sm`}>
                      {event.status}
                    </span>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${event.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {event.title}
                  </h3>
  
                  {/* Date */}
                  <p className="text-blue-400 font-semibold mb-4 flex items-center group-hover:text-blue-300 transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </p>
  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {event.description}
                  </p>
  
                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{event.participants}</div>
                      <div className="text-xs text-gray-400">Participants</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.duration}
                      </div>
                      <div className="text-xs text-gray-400">Duration</div>
                    </div>
                  </div>
  
                  {/* Learn More Button */}
                  <button className="group/button w-full text-blue-400 font-semibold flex items-center justify-center hover:text-blue-300 transition-all duration-300 p-3 rounded-2xl border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-400/10">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
  
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
  
              {/* Floating Status Indicator */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${event.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping`}>
                <div className={`absolute inset-1 bg-gradient-to-br ${event.gradient} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
<button className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 sm:px-12 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
              <span>View All Events</span>
              <ExternalLink className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 flex justify-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">25+ Events Annually</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse delay-300"></div>
              <span className="text-sm">1000+ Participants</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse delay-500"></div>
              <span className="text-sm">Industry Recognition</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-icon {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-15px) rotate(90deg) scale(1.1); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg) scale(1.2); 
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-15px) rotate(270deg) scale(1.1); 
            opacity: 0.4;
          }
        }
        
        .animate-float-icon {
          animation: float-icon 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Events;
