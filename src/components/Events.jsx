import React, { useRef, useEffect, useState } from 'react';
import { Calendar, ExternalLink, Star, Trophy, Code, Users, BookOpen, Zap, Sparkles, ArrowRight, Clock, ChevronLeft, MapPin, Award, Monitor, Coffee, Lightbulb, Target, Presentation, Mic, Video, Network } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Technovate 2025",
    subtitle: "RAIT's Premier Technical Festival",
    date: "February 2025",
    location: "RAIT Campus",
    description: "RAIT's flagship technical festival featuring cutting-edge competitions, workshops, exhibitions, and industry interactions. Experience the future of technology.",
    status: "Annual Flagship",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    icon: Trophy,
    participants: "2000+",
    duration: "4 Days",
    category: "festival",
    highlights: ["Tech Exhibitions", "Industry Talks", "Competitions", "Networking"],
    registrationOpen: true,
    featured: true
  },
  {
    id: 2,
    title: "ELIXER - Annual Techfest",
    subtitle: "Technical Excellence Showcase",
    date: "March 2025",
    location: "RAIT Campus",
    description: "RAIT ACM Student Chapter's annual technical festival featuring innovative projects, coding competitions, and technical workshops.",
    status: "Annual Event",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: Award,
    participants: "800+",
    duration: "3 Days",
    category: "festival",
    highlights: ["Project Showcase", "Technical Competitions", "Workshops", "Innovation Fair"],
    registrationOpen: true,
    featured: true
  },
  {
    id: 3,
    title: "ACM-W Women Centric Hackathon",
    subtitle: "Uniting, Creating and Innovating",
    date: "November 2024 - December 2024",
    location: "Online/Hybrid",
    description: "A 24-hour hackathon promoting gender diversity in tech, empowering women to develop innovative solutions to real-world problems.",
    status: "Completed",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    icon: Code,
    participants: "300+",
    duration: "24 Hours",
    category: "hackathon",
    highlights: ["Women Empowerment", "Innovation", "Mentorship", "Networking"],
    registrationOpen: false,
    featured: true
  },
  {
    id: 4,
    title: "48 Hour Virtual Hackathon", 
    subtitle: "Code. Create. Conquer.",
    date: "Monthly",
    location: "Virtual",
    description: "Intensive coding marathon challenging students to develop innovative solutions within 48 hours. Regular monthly competitions.",
    status: "Regular Event",
    gradient: "from-green-500 via-emerald-500 to-cyan-500",
    icon: Monitor,
    participants: "200+",
    duration: "48 Hours",
    category: "hackathon",
    highlights: ["Intensive Coding", "Problem Solving", "Team Building", "Innovation"],
    registrationOpen: true,
    featured: false
  },
  {
    id: 5,
    title: "Distinguished Speaker Programme",
    subtitle: "Industry Insights & Career Guidance",
    date: "Monthly",
    location: "RAIT Campus / Virtual",
    description: "Industry experts and academicians share insights on cutting-edge technologies, career opportunities, and industry trends.",
    status: "Monthly Series",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: Mic,
    participants: "200+",
    duration: "2 Hours",
    category: "workshop",
    highlights: ["Industry Experts", "Career Guidance", "Technology Trends", "Q&A Sessions"],
    registrationOpen: true,
    featured: false
  },
  {
    id: 6,
    title: "CODEJAM Sessions",
    subtitle: "Competitive Programming Practice",
    date: "Weekly",
    location: "Computer Lab / Online",
    description: "Regular coding practice sessions to enhance programming skills, competitive coding abilities, and problem-solving techniques.",
    status: "Weekly Sessions",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    icon: Zap,
    participants: "80+",
    duration: "3 Hours",
    category: "workshop",
    highlights: ["Competitive Programming", "Skill Building", "Practice Problems", "Peer Learning"],
    registrationOpen: true,
    featured: false
  },
  {
    id: 7,
    title: "Technical Workshops",
    subtitle: "Hands-on Learning Experience",
    date: "Bi-Weekly",
    location: "Labs & Online",
    description: "Comprehensive workshops on latest technologies including AI/ML, Web Development, Mobile Apps, and emerging tech stacks.",
    status: "Regular Series",
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    icon: BookOpen,
    participants: "150+",
    duration: "4-6 Hours",
    category: "workshop",
    highlights: ["Hands-on Learning", "Latest Technologies", "Expert Instructors", "Certification"],
    registrationOpen: true,
    featured: false
  },
  {
    id: 8,
    title: "National Paper Presentations",
    subtitle: "Research & Innovation Showcase",
    date: "Bi-Annual",
    location: "RAIT Campus",
    description: "Platform for students to present research work and technical innovations at national level with industry evaluation.",
    status: "Bi-Annual Event",
    gradient: "from-teal-500 via-green-500 to-lime-500",
    icon: Presentation,
    participants: "120+",
    duration: "2 Days",
    category: "conference",
    highlights: ["Research Papers", "Innovation", "Industry Judges", "Recognition"],
    registrationOpen: false,
    featured: false
  },
  {
    id: 9,
    title: "Summer & Winter Internships",
    subtitle: "Industry Experience Program",
    date: "Seasonal",
    location: "Partner Companies",
    description: "Comprehensive internship programs connecting students with leading tech companies during academic breaks.",
    status: "Seasonal Program",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    icon: Target,
    participants: "100+",
    duration: "2-3 Months",
    category: "internship",
    highlights: ["Industry Experience", "Skill Development", "Networking", "Career Growth"],
    registrationOpen: true,
    featured: false
  },
  {
    id: 10,
    title: "Tech Talks & Seminars",
    subtitle: "Knowledge Sharing Sessions",
    date: "Fortnightly",
    location: "Auditorium / Virtual",
    description: "Regular sessions featuring alumni, industry professionals, and researchers sharing insights on emerging technologies.",
    status: "Regular Series",
    gradient: "from-rose-500 via-pink-500 to-purple-500",
    icon: Video,
    participants: "250+",
    duration: "1.5 Hours",
    category: "seminar",
    highlights: ["Expert Insights", "Alumni Network", "Technology Updates", "Career Advice"],
    registrationOpen: true,
    featured: false
  },
  {
    id: 11,
    title: "Innovation & Startup Bootcamp",
    subtitle: "Entrepreneurship Development",
    date: "Quarterly",
    location: "Innovation Lab",
    description: "Intensive bootcamp focusing on startup development, innovation methodologies, and entrepreneurship skills.",
    status: "Quarterly Event",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: Lightbulb,
    participants: "60+",
    duration: "3 Days",
    category: "bootcamp",
    highlights: ["Startup Development", "Innovation", "Mentorship", "Funding Guidance"],
    registrationOpen: true,
    featured: false
  },
  {
    id: 12,
    title: "Industry Connect Sessions",
    subtitle: "Building Professional Networks",
    date: "Monthly",
    location: "Campus & Virtual",
    description: "Networking sessions connecting students with industry professionals, alumni, and potential employers.",
    status: "Monthly Networking",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: Network,
    participants: "180+",
    duration: "2 Hours",
    category: "networking",
    highlights: ["Professional Networking", "Career Opportunities", "Industry Insights", "Alumni Connect"],
    registrationOpen: true,
    featured: false
  }
];

// Enhanced 3D Marquee with mobile-responsive design
const Marquee3D = ({ events, onEventSelect, selectedCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const filtered = selectedCategory === 'all' 
      ? events 
      : events.filter(event => event.category === selectedCategory);
    setFilteredEvents(filtered);
    setCurrentIndex(0);
  }, [selectedCategory, events]);

  useEffect(() => {
    if (!isHovered && filteredEvents.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [filteredEvents.length, isHovered]);

  const getItemStyle = (index) => {
    if (isMobile) {
      // Mobile: Simple horizontal slider
      const offset = (index - currentIndex) * 100;
      return {
        transform: `translateX(${offset}%)`,
        opacity: index === currentIndex ? 1 : 0,
        zIndex: index === currentIndex ? 10 : 1,
      };
    } else {
      // Desktop: 3D carousel
      const diff = (index - currentIndex + filteredEvents.length) % filteredEvents.length;
      const angle = (diff * 360) / Math.max(filteredEvents.length, 1);
      const radius = window.innerWidth < 1024 ? 200 : 320;
      const x = Math.sin((angle * Math.PI) / 180) * radius;
      const z = Math.cos((angle * Math.PI) / 180) * radius;
      const scale = z > 0 ? 1 : 0.6;
      const opacity = z > 0 ? 1 : 0.3;
      
      return {
        transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
        opacity,
        zIndex: Math.round(z * 10),
      };
    }
  };

  if (filteredEvents.length === 0) {
    return (
      <div className="h-64 md:h-96 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-4xl md:text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-sm md:text-base">No events found in this category</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden">
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: isMobile ? 'none' : '1200px' }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {filteredEvents.map((event, index) => (
          <div
            key={event.id}
            className={`absolute cursor-pointer transition-all duration-1000 ease-out transform-gpu ${
              isMobile 
                ? 'w-11/12 max-w-sm h-48 hover:scale-105' 
                : 'w-64 md:w-80 h-44 md:h-56 hover:scale-110'
            }`}
            style={getItemStyle(index)}
            onClick={() => onEventSelect(event)}
          >
            <div className={`w-full h-full bg-gradient-to-br ${event.gradient} rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden group`}>
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full z-10">
                  ⭐ Featured
                </div>
              )}
              
              {/* Registration Status */}
              <div className="absolute top-2 left-2 z-10">
                <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${event.registrationOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              </div>

              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="px-2 md:px-3 py-1 text-xs font-bold rounded-full bg-white/20 text-white backdrop-blur-sm">
                  {isMobile ? event.status.split(' ')[0] : event.status}
                </span>
                <event.icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-125 transition-transform duration-300" />
              </div>
              
              <h3 className="text-base md:text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-yellow-200 transition-colors duration-300">
                {event.title}
              </h3>
              
              <p className="text-white/80 text-xs md:text-sm mb-2 font-medium line-clamp-1">
                {event.subtitle}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center text-white/80 text-xs mb-2 md:mb-3 space-y-1 md:space-y-0">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span className="mr-3">{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span className="truncate">{isMobile ? event.location.split(' ')[0] : event.location}</span>
                </div>
              </div>
              
              <div className="flex justify-between text-white/80 text-xs">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {event.participants}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {event.duration}
                </span>
              </div>

              {/* Hover overlay - disabled on mobile */}
              {!isMobile && (
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Click for Details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
        {filteredEvents.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            } ${isMobile ? 'hover:scale-125' : 'hover:scale-150'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Mobile navigation arrows */}
      {isMobile && filteredEvents.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white z-20 touch-manipulation"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length)}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white z-20 touch-manipulation"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % filteredEvents.length)}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
};

// Event Detail Modal with mobile optimization
const EventDetailModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4">
      <div className="bg-gray-900 rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className={`h-24 md:h-32 bg-gradient-to-r ${event.gradient} rounded-t-2xl md:rounded-t-3xl relative`}>
          <button
            onClick={onClose}
            className="absolute top-2 md:top-4 right-2 md:right-4 text-white hover:text-gray-300 transition-colors touch-manipulation p-2"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-2 md:bottom-4 left-3 md:left-6 flex items-center">
            <event.icon className="w-6 h-6 md:w-8 md:h-8 text-white mr-2 md:mr-3" />
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-white line-clamp-1">{event.title}</h2>
              <p className="text-white/80 text-sm md:text-base line-clamp-1">{event.subtitle}</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <Calendar className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
              <span className="truncate">{event.date}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <MapPin className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <Users className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" />
              <span>{event.participants} participants</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <Clock className="w-4 h-4 mr-2 text-orange-400 flex-shrink-0" />
              <span>{event.duration}</span>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 md:mb-3">About This Event</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{event.description}</p>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 md:mb-3">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {event.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center text-gray-300 text-sm md:text-base">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button 
              className={`flex-1 py-3 px-4 md:px-6 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base touch-manipulation ${
                event.registrationOpen 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105' 
                  : 'bg-gray-600 text-gray-300 cursor-not-allowed'
              }`}
              disabled={!event.registrationOpen}
            >
              {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
            </button>
            <button className="py-3 px-4 md:px-6 rounded-xl border border-gray-600 text-gray-300 hover:border-gray-500 transition-colors text-sm md:text-base touch-manipulation">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Category Filter Component with mobile optimization
const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-center mb-6 md:mb-8 px-4">
      <div className="flex flex-wrap gap-1 md:gap-2 p-1 md:p-2 bg-gray-800/50 rounded-xl md:rounded-2xl backdrop-blur-sm border border-gray-700/50 max-w-full overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl font-medium transition-all duration-300 flex items-center whitespace-nowrap text-xs md:text-sm touch-manipulation ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            <category.icon className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">{category.name}</span>
            <span className="sm:hidden">{category.name.split(' ')[0]}</span>
            <span className="ml-1 md:ml-2 px-1 md:px-2 py-0.5 text-xs rounded-full bg-white/20">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Enhanced Events View with better filtering and layout
const DetailedEventsView = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Events', icon: Sparkles, count: events.length },
    { id: 'festival', name: 'Festivals', icon: Trophy, count: events.filter(e => e.category === 'festival').length },
    { id: 'hackathon', name: 'Hackathons', icon: Code, count: events.filter(e => e.category === 'hackathon').length },
    { id: 'workshop', name: 'Workshops', icon: BookOpen, count: events.filter(e => e.category === 'workshop').length },
    { id: 'conference', name: 'Conferences', icon: Presentation, count: events.filter(e => e.category === 'conference').length },
    { id: 'internship', name: 'Internships', icon: Target, count: events.filter(e => e.category === 'internship').length },
    { id: 'networking', name: 'Networking', icon: Network, count: events.filter(e => e.category === 'networking').length }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <>
      <section className="py-8 md:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-green-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-6 md:mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group touch-manipulation"
          >
            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Events Overview
          </button>

          {/* Header */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent leading-tight">
              All RAIT ACM Events
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base px-4">
              Discover our comprehensive range of technical events, workshops, and activities designed to enhance your skills and career prospects.
            </p>
          </div>

          {/* Category Filter */}
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Events Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id}
                className="group relative cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 md:px-3 py-1 rounded-full shadow-lg">
                    ⭐ Featured
                  </div>
                )}

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${event.gradient} rounded-2xl md:rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-1000`}></div>
                
                {/* Main Card */}
                <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-gray-700/50 overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105">
                  {/* Top Gradient Bar */}
                  <div className={`h-2 bg-gradient-to-r ${event.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    {/* Header Section */}
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 md:px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${event.gradient} bg-opacity-20 text-white border border-white/20 backdrop-blur-sm`}>
                          {event.status}
                        </span>
                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${event.registrationOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                      </div>
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${event.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <event.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
        
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-2 md:mb-3 font-medium">
                      {event.subtitle}
                    </p>
        
                    {/* Date & Location */}
                    <div className="flex items-center text-blue-400 font-semibold mb-2 text-sm">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span className="mr-3 truncate">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-green-400 font-semibold mb-3 text-sm">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span className="truncate">{event.location}</span>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                      {event.description}
                    </p>
        
                    {/* Stats */}
                    <div className="flex justify-between items-center mb-3 md:mb-4 p-2 md:p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{event.participants}</div>
                        <div className="text-xs text-gray-400">Participants</div>
                      </div>
                      <div className="w-px h-6 bg-white/20"></div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {event.duration}
                        </div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex flex-wrap gap-1">
                        {event.highlights.slice(0, 2).map((highlight, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-lg">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
        
                    {/* Learn More Button */}
                    <button className="group/button w-full text-blue-400 font-semibold flex items-center justify-center hover:text-blue-300 transition-all duration-300 p-2 rounded-xl border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-400/10 text-sm touch-manipulation">
                      View Details 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .animate-spin-slow {
            animation: spin 20s linear infinite;
          }
          
          .line-clamp-3 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
        `}</style>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </>
  );
};

// Main Events Component
const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'All', icon: Sparkles },
    { id: 'festival', name: 'Festivals', icon: Trophy },
    { id: 'hackathon', name: 'Hackathons', icon: Code },
    { id: 'workshop', name: 'Workshops', icon: BookOpen },
    { id: 'conference', name: 'Conferences', icon: Presentation },
    { id: 'networking', name: 'Networking', icon: Network }
  ];

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleViewAllEvents = () => {
    setShowDetailedView(true);
  };

  const handleBackToOverview = () => {
    setShowDetailedView(false);
  };

  if (showDetailedView) {
    return <DetailedEventsView onBack={handleBackToOverview} />;
  }

  return (
    <>
      <section 
        ref={sectionRef}
        id="events" 
        className="py-16 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
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
              className="absolute text-purple-400/20 animate-float-icon hidden md:block"
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
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 rounded-full text-xs font-semibold mb-4 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group">
              <Calendar className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform duration-300" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                RAIT ACM Events & Activities
              </span>
              <Sparkles className="w-3 h-3 ml-1 group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent leading-tight px-4">
              Explore Our Events
            </h2>
            
            <div className="relative px-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                From flagship 
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold"> Technovate </span>
                to specialized workshops, discover events that shape your 
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-semibold"> tech journey</span>
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Category Filter for Main View */}
          <div className={`flex justify-center mb-6 md:mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap gap-1 md:gap-2 p-1 md:p-2 bg-gray-800/50 rounded-xl md:rounded-2xl backdrop-blur-sm border border-gray-700/50 max-w-full overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl font-medium transition-all duration-300 flex items-center whitespace-nowrap text-xs md:text-sm touch-manipulation ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <category.icon className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3D Marquee */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Marquee3D 
              events={events} 
              onEventSelect={handleEventSelect} 
              selectedCategory={selectedCategory}
            />
          </div>

          {/* Statistics Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-xl md:text-2xl font-bold text-blue-400">12+</div>
              <div className="text-xs md:text-sm text-gray-400">Event Types</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-xl md:text-2xl font-bold text-purple-400">3000+</div>
              <div className="text-xs md:text-sm text-gray-400">Annual Participants</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-xl md:text-2xl font-bold text-green-400">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Events Per Year</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-xl md:text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-xs md:text-sm text-gray-400">Skill Growth</div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl md:rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
              <button 
                onClick={handleViewAllEvents}
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center text-sm md:text-base touch-manipulation"
              >
                <span>Explore All Events</span>
                <ExternalLink className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl md:rounded-2xl"></div>
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400 px-4">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs md:text-sm">Upcoming Events</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse delay-300"></div>
                <span className="text-xs md:text-sm">Open Registration</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse delay-500"></div>
                <span className="text-xs md:text-sm">Industry Recognition</span>
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
          
          .line-clamp-1 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          
          .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          
          .line-clamp-3 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
        `}</style>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </>
  );
};

export default Events;