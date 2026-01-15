import React, { useState } from "react";
import emailjs from '@emailjs/browser'; // You'll need to install: npm install emailjs-com

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    timeline: "",
    budget: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration for form submission
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({
        name: "", email: "", company: "", project: "", timeline: "", budget: ""
      });
    })
    .catch(() => {
      alert('Failed to send message. Please try again.');
    });
  };

  const contact_info = [
    { 
      logo: "mail", 
      text: "akinolablessing25@gmail.com",
      action: "mailto:akinolablessing25@gmail.com"
    },
    { 
      logo: "logo-whatsapp", 
      text: "+234 706 300 3993",
      action: "https://wa.me/2347063003993?text=Hi%20Blessing,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20discuss%20a%20project."
    },
    {
      logo: "calendar",
      text: "Schedule a Call",
      action: "https://calendly.com/your-calendar" // Add your Calendly link
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold">LET'S BUILD TOGETHER</span>
          <h3 className="text-4xl font-bold text-white mt-2">
            Ready to <span className="text-cyan-400">Start Your Project?</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Let's discuss how we can transform your idea into a scalable solution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-white mb-6">Project Inquiry</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Company Name (Optional)"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Project Details *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Tell me about your project, goals, and requirements..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="">Select budget</option>
                    <option value="$5k-$10k">$5k - $10k</option>
                    <option value="$10k-$25k">$10k - $25k</option>
                    <option value="$25k-$50k">$25k - $50k</option>
                    <option value="$50k+">$50k+</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
              >
                Send Project Inquiry
              </button>

              <p className="text-gray-500 text-sm text-center">
                I typically respond within 24 hours
              </p>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div>
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-6">Why Work With Me?</h4>
              <ul className="space-y-4">
                {[
                  "🎯 **Business-First Approach**: Solutions designed to drive growth",
                  "⚡ **Fast Delivery**: Agile development with regular updates",
                  "🔒 **Production-Ready**: Scalable, secure, and maintainable code",
                  "📱 **Full-Stack Expertise**: End-to-end solutions from design to deployment"
                ].map((item, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl mb-8">
              <h5 className="text-xl font-bold text-white mb-4">Quick Connect</h5>
              <div className="space-y-4">
                {contact_info.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.action}
                    target={contact.logo === "logo-whatsapp" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 bg-cyan-600/20 rounded-full flex items-center justify-center">
                      <ion-icon name={contact.logo} className="text-cyan-400 text-xl"></ion-icon>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.text}</div>
                      <div className="text-cyan-400 text-sm">Click to connect</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Process Timeline */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-gray-900 p-6 rounded-2xl border border-cyan-500/20">
              <h5 className="text-xl font-bold text-white mb-4">My Process</h5>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Discovery Call", desc: "Understand your needs" },
                  { step: "2", title: "Proposal", desc: "Detailed plan & timeline" },
                  { step: "3", title: "Development", desc: "Agile sprints with updates" },
                  { step: "4", title: "Launch & Support", desc: "Deployment & maintenance" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <div className="text-white font-medium">{step.title}</div>
                      <div className="text-gray-400 text-sm">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;