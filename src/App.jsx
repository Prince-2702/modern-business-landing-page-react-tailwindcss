import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CompanyLogo from "./Components/CompanyLogo";
import PurposeSection from "./Components/PurposeSection";
import { Features } from "tailwindcss";
import FeaturesSection from "./Components/FeaturesSection";
import ScheduleSection from "./Components/ScheduleSection";
import MonitorSection from "./Components/MonitorSection";
import PricingSection from "./Components/PricingSection";
import ServicesSEction from "./Components/ServicesSEction";
import TestimonialsSection from "./Components/TestimonialsSection";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSEction />
        <TestimonialsSection />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
};

export default App;
