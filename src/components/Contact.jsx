import React, { useRef, useEffect, useState } from 'react';
import { Mail, Users, Linkedin, Github, Twitter, Send, MapPin, Phone, Clock, Star, Sparkles, Heart } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-green-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400/20 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <Heart className="w-4 h-4" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-blue-500/20 text-white rounded-full text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300 group">
            <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
            <Sparkles className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight">
            Contact Us
          </h2>
          
          <div className="relative">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Join our 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold"> community </span>
              or reach out for collaborations and 
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> partnerships</span>
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Information */}
          <div className={`space-y-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
              <div className="relative bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Contact Information</h3>
                </div>
                
                <div className="space-y-8">
                  {[
                    { 
                      icon: Mail, 
                      text: 'rait.acm@gmail.com',
                      gradient: 'from-blue-500 to-purple-600',
                      hover: 'hover:from-blue-400 hover:to-purple-500'
                    },
                    { 
                      icon: MapPin, 
                      text: 'Ramrao Adik Institute of Technology, Nerul',
                      gradient: 'from-green-500 to-teal-600',
                      hover: 'hover:from-green-400 hover:to-teal-500'
                    },
                    { 
                      icon: Phone, 
                      text: '+91 98765 43210',
                      gradient: 'from-orange-500 to-red-600',
                      hover: 'hover:from-orange-400 hover:to-red-500'
                    },
                    { 
                      icon: Clock, 
                      text: 'Mon - Fri: 9:00 AM - 6:00 PM',
                      gradient: 'from-purple-500 to-pink-600',
                      hover: 'hover:from-purple-400 hover:to-pink-500'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} ${item.hover} rounded-2xl flex items-center justify-center mr-5 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Social Media Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-xl font-semibold mb-8 flex items-center text-white">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    Follow Us
                  </h4>
                  <div className="flex space-x-6">
                    {[
                      { 
                        Icon: Linkedin, 
                        color: 'from-blue-600 to-blue-800', 
                        link: 'https://in.linkedin.com/company/rait-acm-student-chapter',
                        hoverColor: 'hover:from-blue-500 hover:to-blue-700'
                      },
                      { 
                        Icon: Github, 
                        color: 'from-gray-600 to-gray-800', 
                        link: '#',
                        hoverColor: 'hover:from-gray-500 hover:to-gray-700'
                      },
                      { 
                        Icon: Twitter, 
                        color: 'from-sky-500 to-blue-600', 
                        link: '#',
                        hoverColor: 'hover:from-sky-400 hover:to-blue-500'
                      }
                    ].map(({ Icon, color, link, hoverColor }, index) => (
                      <a 
                        key={index}
                        href={link} 
                        className={`group/social p-5 bg-gradient-to-br ${color} ${hoverColor} rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-6 h-6 text-white group-hover/social:rotate-12 transition-transform duration-300" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 animate-ping"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
              <div className="relative bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Send us a Message</h3>
                </div>
                
                <div className="space-y-8">
                  <div className="relative group/input">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-8 py-5 bg-white/5 border border-white/20 rounded-2xl focus:outline-none focus:border-blue-400 focus:bg-white/10 text-white placeholder-gray-400 transition-all duration-300 hover:border-white/30 group-hover/input:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                  </div>
                  
                  <div className="relative group/input">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full px-8 py-5 bg-white/5 border border-white/20 rounded-2xl focus:outline-none focus:border-blue-400 focus:bg-white/10 text-white placeholder-gray-400 transition-all duration-300 hover:border-white/30 group-hover/input:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                  </div>
                  
                  <div className="relative group/input">
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      className="w-full px-8 py-5 bg-white/5 border border-white/20 rounded-2xl focus:outline-none focus:border-blue-400 focus:bg-white/10 text-white placeholder-gray-400 resize-none transition-all duration-300 hover:border-white/30 group-hover/input:scale-105"
                    ></textarea>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-red-500/20 opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group/button relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-3 w-5 h-5 group-hover/button:translate-x-1 group-hover/button:rotate-12 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/button:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </div>

                {/* Success Indicator */}
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    We typically respond within 
                    <span className="text-blue-400 font-semibold"> 24 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 backdrop-blur-sm">
            <Heart className="w-5 h-5 text-red-400 mr-3 animate-pulse" />
            <span className="text-white font-medium">Ready to join our amazing community?</span>
            <Sparkles className="w-5 h-5 text-yellow-400 ml-3 animate-pulse delay-500" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-heart {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-10px) rotate(90deg) scale(1.1); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg) scale(1.2); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-10px) rotate(270deg) scale(1.1); 
            opacity: 0.6;
          }
        }
        
        .animate-float-heart {
          animation: float-heart 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 15s linear infinite;
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

export default Contact;
