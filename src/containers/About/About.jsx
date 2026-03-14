import React from "react";
import MainLayout from "../../components/Layout/Layout";
import About from "../../components/About/About";
import TravelSection from "../../sections/TravelSection";
import WhyOur from "../../sections/WhyOur";
const AboutPage = () => {
  return (
    <MainLayout>
      <About />
      <TravelSection />
      <WhyOur />
    </MainLayout>
  );
};

export default AboutPage;
