import React, { useEffect, useState } from "react";
import logoImage from "../assets/images/strakins_logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const menuLinks = [
    { 
      name: "Home", 
      link: "#home",
      tagline: "Start Here"
    },
    { 
      name: "About", 
      link: "#about",
      tagline: "My Approach"
    },
    { 
      name: "Skills", 
      link: "#skills",
      tagline: "Expertise"
    },
    { 
      name: "Projects", 
      link: "#projects",
      tagline: "Case Studies"
    },
    { 
      name: "Contact", 
      link: "#contact",
      tagline: "Get Started"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuLinks.map(link => 
        document.querySelector(link.link.replace('#', ''))
      );
      
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && 
              scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(menuLinks[index].link.replace('#', ''));
          }
        }
      });
      
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, link) => {
    e.preventDefault();
    setOpen(false);
    
    const targetId = link.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] transition-all duration-300 ${
        sticky 
          ? "bg-gray-900/95  shadow-lg text-white" 
          : "bg-slate-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, "#home")}
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="w-10 h-10  transform group-hover:rotate-12 transition-transform">
                  <img 
                    src={logoImage} 
                    alt="Blessing Akinola Logo" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold tracking-tight">
                  <span className="text-white">Blessing</span>
                  <span className="text-cyan-400">.</span>
                </h4>
                <span className="text-xs text-gray-400 font-medium">
                  Full-Stack Developer
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuLinks.map((menu, i) => (
              <div key={i} className="relative group">
                <a
                  href={menu.link}
                  onClick={(e) => handleClick(e, menu.link)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === menu.link.replace('#', '')
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex flex-col items-center">
                    <span className="mr-5">{menu.name}</span>
                  </span>
                </a>
                
                {/* Active indicator */}
                {activeSection === menu.link.replace('#', '') && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="ml-4">
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transform hover:-translate-y-0.5"
              >
                Start Project
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm mr-4"
            >
              Contact
            </a>
            
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-[998] transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <div className="space-y-8 text-center">
            {menuLinks.map((menu, i) => (
              <div key={i} className="relative">
                <a
                  href={menu.link}
                  onClick={(e) => {
                    handleClick(e, menu.link);
                    setOpen(false);
                  }}
                  className={`text-2xl font-bold transition-all duration-300 ${
                    activeSection === menu.link.replace('#', '')
                      ? 'text-cyan-400'
                      : 'text-white hover:text-cyan-300'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <span>{menu.name}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          {/* Mobile Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 mb-4">Let's build together</p>
              <a
                href="mailto:akinolablessing25@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 text-lg font-medium"
              >
                akinolablessing25@gmail.com
              </a>
              <p className="text-gray-400 mt-4">
                ⚡ Typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
          style={{
            width: `${(() => {
              const sections = ['home', 'about', 'skills', 'projects', 'contact'];
              const index = sections.indexOf(activeSection);
              return index >= 0 ? ((index + 1) / sections.length) * 100 : 0;
            })()}%`
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;