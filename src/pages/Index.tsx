
import React from 'react';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';
import CookieConsent from '@/components/CookieConsent';
import SocialMeta from '@/components/SocialMeta';

const Index: React.FC = () => {
  return (
    <div>
      <SocialMeta />
      <Hero />
      <AboutSection />
      <TimelineSection />
      <ProcessSection />
      <ContactSection />
      <CookieConsent />
    </div>
  );
};

export default Index;
