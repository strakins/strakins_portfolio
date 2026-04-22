

import { useState, useCallback } from "react";
import ServicesHero from "../components/ServicesHero";
import CourseGrid from "../components/CourseGrid";
import ServicesCTA from "../components/ServicesCTA";
import EnrollModal from "../components/EnrollModal";

const Services = () => {
  const [activeCourse, setActiveCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback((course) => {
    setActiveCourse(course);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => setActiveCourse(null), 300);
  }, []);

  return (
    <main
      id="services"
      aria-label="Training services offered by Blessing Akinola"
      style={{ background: "#020617", minHeight: "100vh" }}
    >
      <ServicesHero />
      <CourseGrid onEnroll={openModal} />
      <ServicesCTA onEnroll={openModal} />

      {modalOpen && (
        <EnrollModal course={activeCourse} onClose={closeModal} />
      )}
    </main>
  );
};

export default Services;