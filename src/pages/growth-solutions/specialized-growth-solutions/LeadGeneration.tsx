
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Funnel, Users, Target, Zap, TrendingUp } from 'lucide-react';

const LeadGeneration: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Lead Magnet Development',
      description: 'High-converting lead magnets and content offers that attract qualified prospects and build your email list.'
    },
    {
      icon: Funnel,
      title: 'Sales Funnel Design & Optimization',
      description: 'Strategic sales funnel development that guides prospects through each stage of the buyer journey to conversion.'
    },
    {
      icon: Users,
      title: 'Multi-Channel Lead Generation',
      description: 'Integrated lead generation campaigns across multiple channels including content marketing, social media, and paid advertising.'
    },
    {
      icon: Zap,
      title: 'Lead Qualification & Nurturing',
      description: 'Automated lead scoring and nurturing sequences that identify sales-ready prospects and move them toward purchase.'
    }
  ];

  return (
    <SolutionTemplate
      category="Specialized Growth Solutions"
      title="Lead Generation & Funnel Strategy"
      description="Strategic lead generation systems that attract qualified prospects and convert them into customers through optimized funnel experiences."
      categoryIcon={Funnel}
      services={services}
      ctaTitle="Ready to Generate Quality Leads?"
      ctaDescription="Let's build lead generation systems that consistently deliver qualified prospects for your sales team."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
    />
  );
};

export default LeadGeneration;
