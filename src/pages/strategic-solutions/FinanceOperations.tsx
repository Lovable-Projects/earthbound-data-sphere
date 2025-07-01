
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { DollarSign, FileText, RefreshCw, FileCheck, Database } from 'lucide-react';

const FinanceOperations: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Automated Financial Workflows',
      description: 'Automating financial workflows for invoice ingestion, approvals, expense reporting, and reconciliations.'
    },
    {
      icon: Database,
      title: 'Data Standardization & Validation',
      description: 'Standardizing and validating data across systems for more accurate forecasting and reporting.'
    },
    {
      icon: RefreshCw,
      title: 'Intelligent Exception Handling',
      description: 'Implementing intelligent exception handling to reduce delays and manual review.'
    },
    {
      icon: FileCheck,
      title: 'Scalable Finance Operations',
      description: 'Designing scalable finance operations models that can support rapid growth or acquisition events.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Finance Operations"
      description="Unlocking efficiency in financial processes through automation, integration, and strategic optimization."
      categoryIcon={DollarSign}
      services={services}
      ctaTitle="Ready to Optimize Your Finance Operations?"
      ctaDescription="Let's streamline your financial processes and unlock efficiency."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default FinanceOperations;
