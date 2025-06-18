
import React from 'react';
import Hero from '@/components/sections/Hero';
import StickySolutionsSection from '@/components/sections/StickySolutionsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import { Process } from '@/components/sections/ResultsSection';
import CTASection from '@/components/sections/CTASection';

const Index: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <div id="growth-solutions">
        <StickySolutionsSection />
      </div>
      <ProcessSection />
      <Process />
      <CTASection />
    </div>
  );
};

export default Index;
