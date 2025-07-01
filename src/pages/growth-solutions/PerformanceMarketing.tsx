
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { TrendingUp, Target, BarChart3, Zap, Users } from 'lucide-react';

const PerformanceMarketing: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Paid Search & Display Advertising',
      description: 'Strategic Google Ads, Bing Ads, and display campaigns that maximize ROI and drive qualified traffic to your business.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics & Optimization',
      description: 'Data-driven campaign optimization with advanced tracking, A/B testing, and performance analysis for continuous improvement.'
    },
    {
      icon: Zap,
      title: 'Conversion Rate Optimization',
      description: 'Landing page optimization and conversion funnel improvements that turn more visitors into customers.'
    },
    {
      icon: Users,
      title: 'Audience Targeting & Retargeting',
      description: 'Precision audience targeting and sophisticated retargeting campaigns that reach the right people at the right time.'
    }
  ];

  return (
    <SolutionTemplate
      category="Core Growth Solutions"
      title="Performance Marketing & Paid Media"
      description="High-ROI advertising campaigns that drive measurable results and accelerate customer acquisition through strategic paid media optimization."
      categoryIcon={TrendingUp}
      services={services}
      ctaTitle="Ready to Scale Your Advertising ROI?"
      ctaDescription="Let's create performance marketing campaigns that deliver measurable growth and maximize your advertising investment."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
    />
  );
};

export default PerformanceMarketing;
