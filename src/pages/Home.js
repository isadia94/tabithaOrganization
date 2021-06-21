import React from "react";
import Hero from "../Components/Hero";
import ServicesSection from "../Components/ServicesSection";
import { AboutData } from "../data/AboutData";
import { ServicesData } from "../data/ServicesData";
import { SliderData } from "../data/SliderData";
import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";

const Home = () => {
  return (
    <div>
      <Hero slides={SliderData} />
      <AboutSection {...AboutData} />
      <ServicesSection services={ServicesData} />
      <ContactSection />
    </div>
  );
};

export default Home;
