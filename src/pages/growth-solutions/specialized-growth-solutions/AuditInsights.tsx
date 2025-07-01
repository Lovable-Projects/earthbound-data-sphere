
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { SearchCheck, FileText, TrendingUp, Target, BarChart3 } from 'lucide-react';

const AuditInsights: React.FC = () => {
  const services = [
    {
      icon: SearchCheck,
      title: 'Comprehensive Marketing Audit',
      description: 'Complete analysis of your current marketing efforts, identifying strengths, weaknesses, and untapped opportunities for growth.'
    },
    {
      icon: FileText,
      title: 'Strategic Recommendations Report',
      description: 'Detailed report with actionable recommendations prioritized by impact and feasibility for immediate implementation.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Analysis & Benchmarking',
      description: 'In-depth competitive analysis that reveals market positioning opportunities and strategic advantages.'
    },
    {
      icon: Target,
      title: 'Growth Opportunity Mapping',
      description: 'Strategic roadmap that identifies and prioritizes the highest-impact growth opportunities for your business.'
    }
  ];

  return (
    <SolutionTemplate
      category="Specialized Growth Solutions"
      title="Deep Dive Audit & Strategic Insights"
      description="Comprehensive marketing and business audits that uncover hidden opportunities and provide actionable strategic recommendations for accelerated growth."
      categoryIcon={SearchCheck}
      services={services}
      ctaTitle="Ready for Strategic Clarity?"
      ctaDescription="Let's audit your current approach and uncover the strategic insights that will drive your next phase of growth."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
    />
  );
};

export default AuditInsights;
