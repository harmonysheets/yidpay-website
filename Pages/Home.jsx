import React from 'react';
import HeroSection from '../Components/home/HeroSection';
import HowItWorksSection from '../Components/home/HowItWorksSection';
import FeaturesGrid from '../Components/home/FeaturesGrid';
import StatsSection from '../Components/home/StatsSection';
import TestimonialsSection from '../Components/home/TestimonialsSection';
import CTASection from '../Components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}