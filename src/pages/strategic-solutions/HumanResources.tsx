
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Users, UserPlus, ShieldCheck, BookOpen, BarChart3 } from 'lucide-react';

const HumanResources: React.FC = () => {
  const services = [
    {
      icon: UserPlus,
      title: 'Digital Onboarding & Offboarding',
      description: 'Digitizing onboarding and offboarding workflows to eliminate manual steps and reduce time-to-productivity.'
    },
    {
      icon: ShieldCheck,
      title: 'Automated Compliance Tracking',
      description: 'Automating compliance tracking for policies, access revocation, certifications, and regulatory acknowledgments.'
    },
    {
      icon: BookOpen,
      title: 'HR System Integration',
      description: 'Integrating HR systems to ensure data consistency across recruitment, payroll, and performance tools.'
    },
    {
      icon: BarChart3,
      title: 'Self-Service HR Portals',
      description: 'Enabling HR self-service and knowledge portals to reduce internal ticket volume and increase employee satisfaction.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Human Resources"
      description="Streamlining HR processes to reduce friction, improve compliance, and elevate the employee experience."
      categoryIcon={Users}
      services={services}
      ctaTitle="Ready to Transform Your HR Operations?"
      ctaDescription="Let's streamline your human resources processes and improve employee experience."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default HumanResources;
