import React, { useState, useEffect } from 'react';
import { Users, Star, ChevronDown, Quote, Award, Code, Globe, Calendar, BookOpen, Sparkles, ArrowRight, Check } from 'lucide-react';

const RAITACMComponent = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const faqs = [
    {
      question: "What is RAIT ACM Student Chapter?",
      answer: "RAIT ACM Student Chapter is recognized by the International Association for Computing Machinery (ACM), the world's largest educational and scientific computing society. We organize events like ELIXER techfest, hackathons, internships, and distinguished speaker programs.",
      icon: <Award className="h-5 w-5" />
    },
    {
      question: "What's the difference between Local and International membership?",
      answer: "Local membership is absolutely free for all RAITians and makes you part of the RAIT ACM student chapter. International membership is paid and gives you access to the international ACM community with additional benefits like ACM Digital Library access.",
      icon: <Globe className="h-5 w-5" />
    },
    {
      question: "What events does RAIT ACM organize?",
      answer: "We organize the annual Techfest ELIXER, Summer and Winter Internships, 24-hour Hackathons, 48-hour Virtual Hackathons, Distinguished Speaker programmes, National level Paper Presentations, and CODEJAM sessions.",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      question: "How can I join the chapter?",
      answer: "Simply register for local membership which is free for all RAIT students. You can also opt for international ACM membership for additional benefits. Contact us through our official channels for more details.",
      icon: <Users className="h-5 w-5" />
    },
    {
      question: "What are the benefits of joining?",
      answer: "Members get access to exclusive workshops, networking opportunities, career guidance, technical skill development, participation in national competitions, and connections with industry professionals.",
      icon: <Sparkles className="h-5 w-5" />
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      batch: "2022 Graduate",
      company: "Google",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1e6?w=150&h=150&fit=crop&crop=face",
      quote: "RAIT ACM shaped my technical journey. The hackathons and workshops prepared me for real-world challenges. The network I built here continues to help me grow professionally.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Arjun Patel",
      batch: "2021 Graduate",
      company: "Microsoft",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The leadership opportunities at RAIT ACM taught me project management and team collaboration. ELIXER was a game-changer in developing my organizational skills.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Sneha Reddy",
      batch: "2023 Graduate",
      company: "Amazon",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The distinguished speaker sessions exposed me to cutting-edge technologies. The coding competitions and paper presentations built my confidence to present technical solutions.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Rajesh Kumar",
      batch: "2020 Graduate",
      company: "Startup Founder",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "RAIT ACM's entrepreneurship focus and networking events gave me the foundation to start my own tech company. The mentorship from seniors was invaluable.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-x-hidden`}>
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 50}px`,
            top: `${mousePosition.y / 50}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-l from-indigo-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-1000" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-2000" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping animation-delay-500" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/50 rounded-full animate-ping animation-delay-1500" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping animation-delay-3000" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Header Section with better mobile spacing */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6 animate-fadeInUp">
            <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">Join the Community</span>
          </div>
        </div>

        {/* Join Us Section - Enhanced for Mobile */}
        <div className="transform transition-all duration-700 animate-fadeInUp mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-300 mb-8 sm:mb-12 lg:mb-16">
            Join Us Today
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Local Membership Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-gray-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-75" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-slate-500 to-gray-600 p-3 sm:p-4 rounded-2xl mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Local Membership</h3>
                    <p className="text-sm text-gray-400">For RAIT Students</p>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-baseline gap-2">
                    <Star className="h-5 w-5 text-yellow-400 mt-1" />
                    <span className="text-2xl sm:text-3xl font-bold text-white">FREE</span>
                    <span className="text-gray-400 text-sm">Forever</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Join the RAIT ACM Student Chapter absolutely free! Open to all RAITians with exclusive benefits.
                  </p>
                  
                  <ul className="space-y-3 text-sm sm:text-base">
                    {[
                      { icon: Code, text: "Access to workshops and coding sessions" },
                      { icon: Calendar, text: "Participation in ELIXER techfest" },
                      { icon: Award, text: "Hackathon participation opportunities" },
                      { icon: Users, text: "Networking with peers and alumni" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                        <div className="bg-slate-700/50 p-1.5 rounded-lg mr-3 group-hover:bg-slate-600/50 transition-colors duration-300">
                          <item.icon className="h-3.5 w-3.5 text-slate-400" />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-500 hover:to-gray-600 text-white py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                    <span>Join Local Chapter</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* International Membership Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-75" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                  Premium
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 sm:p-4 rounded-2xl mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">International Membership</h3>
                    <p className="text-sm text-gray-400">Global ACM Access</p>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-baseline gap-2">
                    <Star className="h-5 w-5 text-blue-400 mt-1" />
                    <span className="text-lg sm:text-xl font-bold text-white">Premium Benefits</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Access the global ACM community with exclusive international benefits and worldwide recognition.
                  </p>
                  
                  <ul className="space-y-3 text-sm sm:text-base">
                    {[
                      { icon: BookOpen, text: "ACM Digital Library access" },
                      { icon: Globe, text: "Global networking opportunities" },
                      { icon: Award, text: "International conference discounts" },
                      { icon: Sparkles, text: "Priority event access" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                        <div className="bg-blue-700/30 p-1.5 rounded-lg mr-3 group-hover:bg-blue-600/40 transition-colors duration-300">
                          <item.icon className="h-3.5 w-3.5 text-blue-400" />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 text-white py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                    <span>Upgrade to International</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Mobile Optimized */}
        <div className="transform transition-all duration-700 animate-fadeInUp max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-300 mb-8 sm:mb-12 lg:mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-slate-900/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-500"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="bg-gradient-to-r from-slate-600 to-gray-700 p-2 sm:p-2.5 rounded-xl group-hover:from-slate-500 group-hover:to-gray-600 transition-all duration-300 flex-shrink-0">
                      {faq.icon}
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white pr-2 sm:pr-4 leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transform transition-all duration-500 flex-shrink-0 ${openFAQ === index ? 'rotate-180 text-blue-400' : 'text-gray-400'}`}>
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  openFAQ === index ? 'max-h-96 opacity-100 pb-4 sm:pb-6' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-xl p-4 sm:p-6 border-l-4 border-blue-500/50">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section - Mobile First */}
        <div className="transform transition-all duration-700 animate-fadeInUp max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-300 mb-8 sm:mb-12 lg:mb-16">
            What Our Alumni Say
          </h2>
          
          {/* Featured Testimonial - Mobile Responsive */}
          <div className="mb-8 sm:mb-12">
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-700">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} rounded-full blur-lg opacity-50 animate-pulse`} />
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
                    />
                    <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} p-2 sm:p-2.5 rounded-full shadow-lg`}>
                      <Quote className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 sm:mb-6">
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 italic leading-relaxed font-light">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-xl sm:text-2xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-slate-300 font-semibold text-sm sm:text-base">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].batch}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`transition-all duration-500 rounded-full ${
                  currentTestimonial === index
                    ? `w-8 h-3 sm:w-10 sm:h-4 bg-gradient-to-r ${testimonials[index].gradient} scale-110`
                    : 'w-3 h-3 sm:w-4 sm:h-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid - Mobile Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group bg-slate-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/10 transition-all duration-500 hover:border-white/20 hover:scale-105 cursor-pointer ${
                  currentTestimonial === index ? `ring-2 ring-opacity-50 bg-slate-900/50` : ''
                }`}
                style={{
                  ringColor: currentTestimonial === index ? testimonials[index].gradient.split(' ')[1] : 'transparent'
                }}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="text-center">
                  <div className="relative mb-3 sm:mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`} />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto border-2 border-white/10 group-hover:border-white/20 transition-all duration-300"
                    />
                  </div>
                  <h5 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 truncate">{testimonial.name}</h5>
                  <p className="text-xs sm:text-sm text-slate-400 mb-1 truncate">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 truncate">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default RAITACMComponent;
