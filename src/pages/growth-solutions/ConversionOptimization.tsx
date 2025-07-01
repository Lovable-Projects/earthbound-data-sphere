
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Target, BarChart3, Zap, TestTube, TrendingUp } from 'lucide-react';

const ConversionOptimization: React.FC = () => {
  const services = [
    {
      icon: TestTube,
      title: 'A/B Testing & Experimentation',
      description: 'Systematic A/B testing and multivariate experiments that identify the highest-converting variations of your pages and campaigns.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Performance Analysis',
      description: 'Deep analytics analysis and user behavior tracking that reveals conversion bottlenecks and optimization opportunities.'
    },
    {
      icon: Zap,
      title: 'Landing Page Optimization',
      description: 'Strategic landing page design and optimization that improves user experience and maximizes conversion rates.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Funnel Analysis',
      description: 'Complete conversion funnel analysis and optimization that identifies and eliminates barriers to customer conversion.'
    }
  ];

  return (
    <SolutionTemplate
      category="Core Growth Solutions"
      title="Conversion Rate Optimization (CRO)"
      description="Data-driven optimization strategies that systematically improve your conversion rates and maximize the value of your existing traffic."
      categoryIcon={Target}
      services={services}
      ctaTitle="Ready to Convert More Visitors?"
      ctaDescription="Let's optimize your conversion funnel to turn more visitors into customers and maximize your marketing ROI."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
    />
  );
};

export default ConversionOptimization;
