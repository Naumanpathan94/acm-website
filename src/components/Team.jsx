import React, { useRef, useEffect, useState } from 'react';
import { Users, Linkedin, Github, Twitter, Mail, Star, Award, Crown, Zap, Heart, Sparkles, ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: "Chapter Chair",
    position: "Chairperson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#",
    email: "chair@rait.acm.org",
    description: "Leading the chapter's vision and strategic direction with innovation and excellence",
    specialization: "Leadership & Strategy",
    gradient: "from-yellow-400 to-orange-500",
    icon: Crown
  },
  {
    name: "Vice Chair",
    position: "Vice Chairperson", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#",
    email: "vicechair@rait.acm.org",
    description: "Supporting chapter operations and fostering meaningful member engagement",
    specialization: "Operations & Engagement",
    gradient: "from-purple-400 to-pink-500",
    icon: Award
  },
  {
    name: "Technical Head",
    position: "Technical Committee",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#",
    email: "tech@rait.acm.org",
    description: "Orchestrating technical events and maintaining cutting-edge digital presence",
    specialization: "Technology & Development",
    gradient: "from-blue-400 to-purple-500",
    icon: Zap
  },
  {
    name: "Event Coordinator",
    position: "Events Team",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#",
    email: "events@rait.acm.org",
    description: "Coordinating ELIXER and creating memorable experiences for our community",
    specialization: "Event Management",
    gradient: "from-green-400 to-blue-500",
    icon: Star
  }
];

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
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
      id="team" 
      className="py-8 sm:py-16 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 sm:w-60 h-32 sm:h-60 bg-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Team Icons - Reduced for mobile */}
      <div className="absolute inset-0">
        {[Users, Star, Award, Crown, Zap, Heart].slice(0, 4).map((Icon, i) => (
          <div
            key={i}
            className="absolute text-green-400/20 animate-float-team"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <Icon className="w-4 sm:w-6 h-4 sm:h-6" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-green-500/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group">
            <Users className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Leadership Team
            </span>
            <Sparkles className="w-3 h-3 ml-1 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent leading-tight px-2">
            Team
          </h2>
          
          <div className="relative max-w-4xl mx-auto px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
              Meet the 
              <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text font-semibold"> dedicated individuals </span>
              who drive our chapter forward and organize 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold"> impactful events</span>
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Team Grid - Mobile First */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative w-full"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => {
                setHoveredMember(index);
                setActiveCard(index);
              }}
              onMouseLeave={() => {
                setHoveredMember(null);
                setActiveCard(null);
              }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-1000`}></div>
              
              {/* Main Card */}
              <div className="relative text-center transform transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-8 hover:scale-105">
                {/* Profile Image Section */}
                <div className="relative mb-6 sm:mb-8 mx-auto w-fit">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-2xl sm:rounded-3xl object-cover shadow-2xl border-2 sm:border-4 border-gray-700 hover:border-white/20 transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Status Indicator */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 bg-green-400 rounded-full border-2 sm:border-4 border-white animate-pulse shadow-lg">
                      <div className="absolute inset-0.5 sm:inset-1 bg-green-400 rounded-full animate-ping"></div>
                    </div>

                    {/* Role Icon */}
                    <div className={`absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-br ${member.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <member.icon className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-white" />
                    </div>
                  </div>

                  {/* Social Media Cluster - Mobile Optimized */}
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 flex space-x-1 sm:space-x-2">
                    {[
                      { icon: Linkedin, href: member.linkedin, color: 'from-blue-600 to-blue-800' },
                      { icon: Github, href: member.github, color: 'from-gray-600 to-gray-800' },
                      { icon: Twitter, href: member.twitter, color: 'from-sky-500 to-blue-600' },
                      { icon: Mail, href: `mailto:${member.email}`, color: 'from-purple-600 to-pink-600' }
                    ].map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 bg-gradient-to-br ${social.color} rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:-translate-y-1 transform`}
                        style={{ transitionDelay: `${socialIndex * 100}ms` }}
                      >
                        <social.icon className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Information Card - Mobile Optimized */}
                <div className="bg-gray-800/90 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-gray-700/50 hover:border-white/20 hover:bg-gray-700/50 transition-all duration-500 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Name */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>

                    {/* Position */}
                    <p className={`text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.position}
                    </p>

                    {/* Specialization Badge */}
                    <div className="mb-3 sm:mb-4">
                      <span className={`inline-flex items-center px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-opacity-20 text-white border border-white/20`}>
                        <Star className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                        {member.specialization}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4 sm:mb-6">
                      {member.description}
                    </p>

                    {/* Contact Button - Mobile Optimized */}
                    <button className="group/button w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600 hover:to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base">
                      <Mail className="w-3 sm:w-4 h-3 sm:h-4 mr-2 group-hover/button:rotate-12 transition-transform duration-300" />
                      Get in Touch
                      <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Hover Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Floating Achievement Badge */}
                <div className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br ${member.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping flex items-center justify-center`}>
                  <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Mobile Optimized */}
        <div className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
            <button className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center text-sm sm:text-base">
              <span>Join Our Team</span>
              <Users className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl sm:rounded-2xl"></div>
            </button>
          </div>

          {/* Team Stats - Mobile Optimized */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs sm:text-sm">4 Core Members</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse delay-300"></div>
              <span className="text-xs sm:text-sm">15+ Volunteers</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse delay-500"></div>
              <span className="text-xs sm:text-sm">Active Leadership</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-team {
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
        
        .animate-float-team {
          animation: float-team 8s ease-in-out infinite;
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
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Team;