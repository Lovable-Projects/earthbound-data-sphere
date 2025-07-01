
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Database, BarChart, Users, Zap, Settings } from 'lucide-react';

const DigitalSystemsEnablement: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Platform Performance Audit',
      description: 'Analyze core systems (e.g., CRM, ERP, PM tools) to identify inefficiencies, friction points, and underutilized capabilities.'
    },
    {
      icon: Users,
      title: 'User Experience & Enablement Strategy',
      description: 'Optimize interface layouts, workflows, and data access to reduce effort and increase adoption.'
    },
    {
      icon: Zap,
      title: 'AI Copilot & Assistant Integration',
      description: 'Embed AI into daily workflows to enhance task support, predictive analytics, and decision augmentation.'
    },
    {
      icon: Settings,
      title: 'Custom Dashboards & Reporting Layers',
      description: 'Build real-time visibility tools that centralize performance insights and operational health indicators.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Digital Systems Enablement"
      description="Enhancing Platform Strategy & Workforce Effectiveness with Intelligent Systems"
      categoryIcon={Database}
      services={services}
      ctaTitle="Ready to Enable Your Digital Systems?"
      ctaDescription="Let's optimize your platforms and empower your teams with intelligent systems."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default DigitalSystemsEnablement;
