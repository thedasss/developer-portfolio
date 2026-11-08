import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedWork from '../components/FeaturedWork';
import WhatIDo from '../components/WhatIDo';
import TechStack from '../components/TechStack';
import TestimonialSection from '../components/TestimonialSection';
import ProcessRoadmap from '../components/ProcessRoadmap';
import StatsBanner from '../components/StatsBanner';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenCV, onSelectProject }) {
  return (
    <div className="space-y-0">
      <HeroSection onOpenCV={onOpenCV} />
      <FeaturedWork onSelectProject={onSelectProject} />
      <WhatIDo />
      <TechStack />
      <TestimonialSection />
      <ProcessRoadmap />
      <StatsBanner />
      <ContactSection />
    </div>
  );
}

