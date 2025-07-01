
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Search, BarChart, Users, Target } from 'lucide-react';

const MarketResearch: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Market Analysis & Intelligence',
      description: 'Comprehensive market research and competitive analysis to identify opportunities and understand your market landscape.'
    },
    {
      icon: Users,
      title: 'Customer Insights & Segmentation',
      description: 'Deep customer research and behavioral analysis to understand your target audience and create detailed buyer personas.'
    },
    {
      icon: BarChart,
      title: 'Industry Trends & Forecasting',
      description: 'Strategic trend analysis and market forecasting to help you stay ahead of industry changes and opportunities.'
    },
    {
      icon: Target,
      title: 'Opportunity Assessment',
      description: 'Systematic evaluation of market opportunities and strategic positioning to maximize your competitive advantage.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Market Research"
      description="Data-driven market intelligence that reveals opportunities, validates strategies, and guides informed business decisions."
      categoryIcon={BarChart}
      services={services}
      ctaTitle="Ready to Understand Your Market?"
      ctaDescription="Let's uncover the insights that will drive your strategic decisions and fuel your growth."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default MarketResearch;
