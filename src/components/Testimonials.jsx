// components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Blessing delivered a POS system that transformed our retail operations. Sales tracking is now 30% faster.",
      name: "Retail Business Owner",
      role: "Client"
    },
    {
      quote: "The e-commerce platform he built increased our mobile conversions by 40%. Exceptional work!",
      name: "Fashion Brand CEO",
      role: "Client"
    },
    {
      quote: "Professional, timely, and technical expert. His solutions are always scalable and well-architected.",
      name: "Tech Startup Founder",
      role: "Client"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold">CLIENT FEEDBACK</span>
          <h3 className="text-4xl font-bold text-white mt-2">
            What Clients <span className="text-cyan-400">Say</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-2xl">
              <div className="text-cyan-400 text-3xl mb-4">"</div>
              <p className="text-gray-300 text-lg mb-6">{testimonial.quote}</p>
              <div>
                <div className="text-white font-bold">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;