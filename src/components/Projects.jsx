import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";;
import POS from '../assets/images/pos.png';
import OMIFEM from '../assets/images/omifem_cuts.png';
import ENTITY from '../assets/images/Entityblock.png';

const Projects = () => {
  const caseStudies = [
    {
      img: POS,
      title: "POS & Inventory Management System",
      category: "Business Solution",
      description: "Full-stack system supporting sales processing, stock tracking, real-time reporting, and role-based access control.",
      features: ["Sales Processing", "Inventory Tracking", "Analytics Dashboard", "Multi-store Support"],
      results: ["30% faster checkout", "20% reduction in stockouts", "Real-time reporting"],
      tech: ["React", "Node.js", "MongoDB", "Firebase"],
      link: "#"
    },
    {
      img: OMIFEM,
      title: "OmifemCuts Fashion Platform",
      category: "E-commerce Mobile App",
      description: "Mobile-first fashion e-commerce with real-time pricing, Firebase auth, and WhatsApp commerce integration.",
      features: ["Real-time Pricing", "WhatsApp Commerce", "User Engagement", "Mobile-first"],
      results: ["40% higher engagement", "Seamless mobile experience", "Social commerce integration"],
      tech: ["React Native", "Firebase", "WhatsApp API", "Stripe"],
      link: "#"
    },
    {
      img: ENTITY,
      title: "Web3 Ticketing Platform",
      category: "Blockchain Solution",
      description: "Secure decentralized ticketing platform with NFT integration and fraud-proof transactions.",
      features: ["Smart Contracts", "NFT Tickets", "Secure Transactions", "Decentralized"],
      results: ["Zero fraud incidents", "Reduced commission fees", "Enhanced security"],
      tech: ["Solidity", "Web3.js", "React", "Node.js"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm md:text-base font-semibold">COMPLETED PROJECTS</span>
          <h3 className="text-2xl md:text-4xl font-bold text-white mt-2">
            Products That <span className="text-cyan-400">Deliver Results</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
            Real projects solving real business problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-white font-semibold mb-2">Business Impact:</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href="/contact" 
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-lg font-semibold block transition-colors"
                >
                  Build Something Similar
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
            <span className="mr-2">Ready to build your solution?</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;