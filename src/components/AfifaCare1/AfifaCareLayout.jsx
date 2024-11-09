// src/App.js
import React from 'react';
import Navbar from './Nav';
import HeroSection from './HeroSection';
import ServicesSection from './ServiceSection';
import Footer from './Footer';

const AfifaCareLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default AfifaCareLayout;
