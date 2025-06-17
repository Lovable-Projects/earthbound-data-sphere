import React from 'react';
import Hero from '@/components/sections/Hero';
import ProcessSection from '@/components/sections/ProcessSection';
import { Process } from '@/components/sections/ResultsSection';
import CTASection from '@/components/sections/CTASection';

const Index: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProcessSection />
      <Process />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
};

export default Index;
