
import React from 'react';
import Hero from '@/components/sections/Hero';
import TimelineSection from '@/components/sections/TimelineSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';

const Index: React.FC = () => {
  return (
    <div>
      <Hero />
      <TimelineSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default Index;
