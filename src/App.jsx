import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;