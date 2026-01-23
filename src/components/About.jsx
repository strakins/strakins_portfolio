import React from "react";
import aboutImg from "../assets/images/work_area.jpg";

const About = () => {
  const services = [
    { title: "POS & Inventory Systems", desc: "Sales processing, stock tracking, reporting" },
    { title: "E-commerce Platforms", desc: "Mobile-first, real-time pricing, payment integration" },
    { title: "Mobile Applications", desc: "React Native, cross-platform, app store deployment" },
    { title: "Web3 Solutions", desc: "Blockchain integration, smart contracts, NFTs" },
  ];

  const techStack = ["React", "React Native", "Next.js", "Node.js", "Firebase", "MongoDB"];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm md:text-base">BUSINESS-FOCUSED DEVELOPMENT</span>
          <h3 className="text-xl md:text-4xl font-bold text-white mt-2">
            Building Solutions That <span className="text-cyan-400">Drive Results</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-lg">
            I specialize in developing applications that solve real business problems, 
            focusing on conversion, scalability, and user experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={aboutImg}
                alt="About Blessing Akinola"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-6">
              From Concept to Production-Ready Solutions
            </h4>
            <p className="text-gray-300 mb-8 text-sm md:text-base">
              I'm a Full-Stack Developer who builds applications that help businesses 
              sell more, manage operations efficiently, and engage users effectively. 
              My approach combines technical expertise with business understanding to 
              deliver solutions that actually move the needle.
            </p>

            <div className="mb-8">
              <h5 className="text-xl font-semibold text-white mb-4">What I Build:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="text-cyan-400 font-semibold">{service.title}</div>
                    <div className="text-gray-400 text-sm">{service.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h5 className="text-xl font-semibold text-white mb-4">Core Stack:</h5>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-full border border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-4">
              <a href="/contact" className="btn-primary bg-cyan-600 hover:bg-cyan-700 px-6 py-3">
                Discuss Your Project
              </a>
              <a href="https://drive.google.com/file/d/1oj8jtHyqaeNdBYetv9rrxW25yzemCbwY/view?usp=sharing" target="_blank" download className="border-2 rounded-full border-cyan-500 mx-auto md:mx-0 text-cyan-400 px-6 py-3">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;