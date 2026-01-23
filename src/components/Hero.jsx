import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const social_media = [
    {
      logo: "logo-linkedin",
      url: "https://www.linkedin.com/in/blessing-akinola-a567a4389/"
    },
    {
      logo: "logo-twitter",
      url: "https://twitter.com/straksman"
    },
    {
      logo: "logo-github",
      url: "https://github.com/strakins" // Added GitHub
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen font-Roboto flex mt-10 py-10 md:flex-row flex-col items-center bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="flex-1 flex items-center justify-center h-full order-2 md:order-1">
        <img 
          src={hero} 
          alt="Blessing Akinola - Full Stack Developer" 
          className="h-300 md:h-[500px] object-cover rounded-2xl shadow-2xl shadow-cyan-500/20 transform hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="flex-1 order-1 md:order-2 px-6">
        <div className="md:text-left text-center">
          <h3 className="md:text-3xl text-2xl md:leading-normal leading-10 text-white font-bold mb-4">
            <span className="text-cyan-400 md:text-4xl text-2xl font-Montserrat">
              Full-Stack Developer
            </span>
          </h3>
          <h1 className="md:text-5xl text-xl font-bold text-white mb-2 md:mb-6">
            Building <span className="text-cyan-400">scalable solutions</span> that help businesses grow
          </h1>
          <p className="text-gray-300 text-[12px] md:text-xl mb-8 max-w-2xl">
            I develop production-ready web and mobile applications that solve real business problems. 
            From POS systems to e-commerce platforms — I build software that converts users and streamlines operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact">
              <button className="btn-primary bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold text-sm md:text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/30">
                Let's Discuss Your Idea
              </button>
            </a>
            <a href="projects">
              <button className="btn-outline border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold text-sm md:text-lg transition-all">
                View Previous Projects
              </button>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl">
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold">5+</div>
              <div className="text-gray-400 text-[13px] md:text-sm">Years Experience</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold">16+</div>
              <div className="text-gray-400 text-[12px] md:text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-cyan-400 text-2xl font-bold">100%</div>
              <div className="text-gray-400 text-[12px] md:text-sm">Client Satisfaction</div>
            </div>
          </div>

          <div className="mt-10 text-2xl flex items-center md:justify-start justify-center gap-6">
            {social_media?.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 p-2 rounded-full bg-gray-800/50"
              >
                <ion-icon name={icon.logo}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;