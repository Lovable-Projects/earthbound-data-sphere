
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Target, Settings, TrendingUp, Users, Zap } from 'lucide-react';

const EnterpriseEvolution: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Business Model Reengineering',
      description: 'Help leadership reshape how value is created, delivered, and captured across the business.'
    },
    {
      icon: Settings,
      title: 'Scalable Operational Frameworks',
      description: 'Design operating structures that increase capacity without increasing complexity.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Planning & Roadmapping',
      description: 'Guide long-term decisions on markets, teams, investments, and digital transformation.'
    },
    {
      icon: Users,
      title: 'Cross-Functional Optimization',
      description: 'Break down silos, streamline collaboration, and align departments on shared outcomes.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Enterprise Evolution & Strategic Transformation"
      description="Redefining Models, Reshaping Operations, and Scaling for Long-Term Success"
      categoryIcon={Target}
      services={services}
      ctaTitle="Ready to Transform Your Enterprise?"
      ctaDescription="Let's reshape your operations and scale for long-term success."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default EnterpriseEvolution;
