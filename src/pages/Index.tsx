
import React from 'react';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import OurPromiseSection from '@/components/sections/OurPromiseSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import WhyAheadSection from '@/components/sections/WhyAheadSection';
import UnfairAdvantageSection from '@/components/sections/UnfairAdvantageSection';
import CookieConsent from '@/components/CookieConsent';
import SocialMeta from '@/components/SocialMeta';

const Index: React.FC = () => {
  return (
    <div>
      <SocialMeta />
      <Hero />
      <AboutSection />
      <WhyChooseUsSection />
      <OurPromiseSection />
      <WhatWeDoSection />
      <WhyAheadSection />
      <UnfairAdvantageSection />
      <TimelineSection />
      <ProcessSection />
      <ContactSection />
      <CookieConsent />
    </div>
  );
};

export default Index;
