
import React from 'react';
import { Mail, Target, Users, BarChart } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const EmailMarketing: React.FC = () => {
  const services = [
    {
      icon: Mail,
      title: 'Email Campaign Design',
      description: 'Beautiful, responsive email templates that drive engagement and reflect your brand perfectly.'
    },
    {
      icon: Target,
      title: 'Marketing Automation',
      description: 'Sophisticated automated email sequences that nurture leads and convert prospects into customers.'
    },
    {
      icon: Users,
      title: 'List Segmentation & Personalization',
      description: 'Target the right audience with personalized messaging based on behavior and preferences.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive tracking of opens, clicks, conversions, and ROI to optimize campaign performance.'
    }
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions"
      title="Email Marketing & Marketing Automation"
      description="Build lasting relationships with your audience through strategic email marketing campaigns and intelligent automation workflows that convert prospects into loyal customers."
      categoryIcon={Mail}
      services={services}
      ctaTitle="Ready to Boost Your Email ROI?"
      ctaDescription="Let's create email campaigns that your audience actually wants to read and engage with."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
    />
  );
};

export default EmailMarketing;
