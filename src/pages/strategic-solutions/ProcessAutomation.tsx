
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Zap, Target, Settings, BarChart3, CheckCircle } from 'lucide-react';

const ProcessAutomation: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Automation Readiness Assessment',
      description: 'Evaluate current processes to identify repetitive, error-prone, or high-cost tasks suitable for automation.'
    },
    {
      icon: Settings,
      title: 'Modular Workflow Design',
      description: 'Build scalable, logic-driven workflows that align with business rules and are easy to adapt over time.'
    },
    {
      icon: Zap,
      title: 'RPA & AI Integration',
      description: 'Automate repetitive steps using bots and intelligent decisioning systems that route tasks based on data inputs.'
    },
    {
      icon: CheckCircle,
      title: 'Seamless Orchestration',
      description: 'Coordinate automated and human-in-the-loop steps to ensure end-to-end process flow across platforms.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Process & Workflow Automation"
      description="Streamlining Execution Across Teams with Intelligent Automation"
      categoryIcon={Zap}
      services={services}
      ctaTitle="Ready to Automate Your Processes?"
      ctaDescription="Let's streamline your operations with intelligent automation solutions."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default ProcessAutomation;
