
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Settings, Zap, Target, CheckCircle } from 'lucide-react';

const ProcessOptimization: React.FC = () => {
  const services = [
    {
      icon: Settings,
      title: 'Workflow Analysis & Redesign',
      description: 'Comprehensive workflow analysis and redesign to eliminate bottlenecks and improve operational efficiency.'
    },
    {
      icon: Zap,
      title: 'Automation & Technology Integration',
      description: 'Strategic automation implementation and technology integration to streamline operations and reduce manual work.'
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Systematic performance optimization across all business processes to maximize productivity and results.'
    },
    {
      icon: CheckCircle,
      title: 'Quality & Compliance Systems',
      description: 'Quality management and compliance systems that ensure consistency and meet industry standards.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Process Optimization"
      description="Strategic process optimization that eliminates inefficiencies, accelerates operations, and drives sustainable growth."
      categoryIcon={Settings}
      services={services}
      ctaTitle="Ready to Streamline Your Operations?"
      ctaDescription="Let's optimize your processes to eliminate inefficiencies and accelerate your business performance."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default ProcessOptimization;
