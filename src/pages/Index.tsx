import React from 'react';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import Solutions from '@/components/sections/Solutions';
import ProcessSection from '@/components/sections/ProcessSection';
import ResultsSection from '@/components/sections/ResultsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import UIBlocksSection from '@/components/sections/UIBlocksSection';
import ServiceInquiryForm from '@/components/sections/ServiceInquiryForm';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <Solutions />
      <ProcessSection />
      <ResultsSection />
      <TimelineSection />
      <UIBlocksSection />
      <ServiceInquiryForm />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Index;
