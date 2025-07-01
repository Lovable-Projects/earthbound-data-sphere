
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Cog, Target, Settings, Users, Zap } from 'lucide-react';

const CustomSolutionEngineering: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Challenge Mapping & Root Cause Discovery',
      description: 'Rapid diagnostics to identify the core problem, associated risks, and potential solution pathways.'
    },
    {
      icon: Settings,
      title: 'Solution Architecture & Prioritization',
      description: 'Design of a custom solution blueprint that balances speed, feasibility, and strategic value.'
    },
    {
      icon: Users,
      title: 'Expert Collaboration',
      description: 'Matching businesses with trusted solution providers inside an efficient workflow that brings the right capabilities to the table.'
    },
    {
      icon: Zap,
      title: 'Pilot, Validate, and Iterate',
      description: 'Build light MVPs or prototypes to validate direction and reduce risk before full-scale deployment.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Custom Solution Engineering"
      description="Solving High-Stakes, Complex Business Challenges with Precision-Built Solutions"
      categoryIcon={Cog}
      services={services}
      ctaTitle="Ready for Custom Solutions?"
      ctaDescription="Let's engineer precision-built solutions for your unique challenges."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default CustomSolutionEngineering;
