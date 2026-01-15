// components/CTABanner.jsx
import React from "react";

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-white mb-6">
          Ready to Build Your Solution?
        </h3>
        <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
          Let's discuss how we can turn your idea into a scalable, production-ready application.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Start Your Project
          </a>
          <a 
            href="https://calendly.com/your-calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Schedule Free Consultation
          </a>
        </div>
        <p className="text-gray-400 mt-8">
          ⚡ Typically respond within 24 hours
        </p>
      </div>
    </section>
  );
};

export default CTABanner;