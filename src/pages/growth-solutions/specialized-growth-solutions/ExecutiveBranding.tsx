
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { UserCheck, Users, TrendingUp, MessageCircle, Target } from 'lucide-react';

const ExecutiveBranding: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Personal Brand Strategy Development',
      description: 'Strategic personal branding that positions executives as thought leaders and industry authorities in their field.'
    },
    {
      icon: Users,
      title: 'LinkedIn Profile & Content Optimization',
      description: 'Complete LinkedIn optimization including profile enhancement, content strategy, and engagement tactics for maximum visibility.'
    },
    {
      icon: MessageCircle,
      title: 'Thought Leadership Content Creation',
      description: 'High-quality thought leadership content that showcases expertise and builds credibility with target audiences.'
    },
    {
      icon: TrendingUp,
      title: 'Executive Networking & Engagement',
      description: 'Strategic networking and engagement strategies that build meaningful professional relationships and business opportunities.'
    }
  ];

  return (
    <SolutionTemplate
      category="Specialized Growth Solutions"
      title="Executive Personal Branding & LinkedIn Marketing"
      description="Strategic personal branding that positions executives as thought leaders and drives business growth through enhanced professional presence."
      categoryIcon={UserCheck}
      services={services}
      ctaTitle="Ready to Elevate Your Executive Presence?"
      ctaDescription="Let's build a personal brand that positions you as a thought leader and drives business opportunities."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
    />
  );
};

export default ExecutiveBranding;
