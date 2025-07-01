
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Settings, Shuffle, Timer, Users, BarChart3 } from 'lucide-react';

const Operations: React.FC = () => {
  const services = [
    {
      icon: Shuffle,
      title: 'Multi-Step Workflow Mapping',
      description: 'Mapping multi-step operational workflows to identify friction, escalation points, and failure risks.'
    },
    {
      icon: Users,
      title: 'Cross-Functional Process Orchestration',
      description: 'Orchestrating cross-functional processes to unify execution across sales, delivery, finance, and support.'
    },
    {
      icon: Timer,
      title: 'Automated Task Handoffs & SLA Tracking',
      description: 'Automating task handoffs and SLA tracking to ensure accountability and transparency.'
    },
    {
      icon: BarChart3,
      title: 'Performance Dashboards',
      description: 'Implementing performance dashboards for real-time visibility and data-driven adjustments.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Operations"
      description="Eliminating delays, inefficiencies, and handoff gaps in operational execution."
      categoryIcon={Settings}
      services={services}
      ctaTitle="Ready to Streamline Your Operations?"
      ctaDescription="Let's eliminate delays and optimize your operational execution."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default Operations;
