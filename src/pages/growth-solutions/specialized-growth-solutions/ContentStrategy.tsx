
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { FileText, Calendar, Target, TrendingUp, Users } from 'lucide-react';

const ContentStrategy: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Content Strategy & Planning',
      description: 'Comprehensive content strategies aligned with business goals that drive engagement, traffic, and conversions.'
    },
    {
      icon: Calendar,
      title: 'Editorial Calendar & Content Planning',
      description: 'Strategic content calendars and planning systems that ensure consistent, high-quality content across all channels.'
    },
    {
      icon: Users,
      title: 'Audience-Centric Content Development',
      description: 'Content development focused on your audience needs, pain points, and interests that drives meaningful engagement.'
    },
    {
      icon: TrendingUp,
      title: 'Content Performance & Optimization',
      description: 'Content performance analysis and optimization strategies that maximize reach, engagement, and conversion rates.'
    }
  ];

  return (
    <SolutionTemplate
      category="Specialized Growth Solutions"
      title="Content Strategy & Planning"
      description="Strategic content frameworks that engage audiences, support business objectives, and create consistent value for your target market."
      categoryIcon={FileText}
      services={services}
      ctaTitle="Ready to Scale Your Content?"
      ctaDescription="Let's create a content strategy that consistently delivers value to your audience and drives business results."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
    />
  );
};

export default ContentStrategy;
