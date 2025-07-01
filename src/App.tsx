import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import Insights from '@/pages/Insights';
import GrowthSolutions from '@/pages/GrowthSolutions';
import StrategicSolutions from '@/pages/StrategicSolutions';
import CoreGrowthSolutions from '@/pages/CoreGrowthSolutions';
import SpecializedGrowthSolutions from '@/pages/SpecializedGrowthSolutions';
import SolvePathFramework from '@/pages/about/SolvePathFramework';
import Preloader from '@/components/layout/Preload Screen';

// Core Growth Solutions
import PerformanceMarketing from '@/pages/growth-solutions/PerformanceMarketing';
import SocialMedia from '@/pages/growth-solutions/SocialMedia';
import EmailMarketing from '@/pages/growth-solutions/EmailMarketing';
import CreativeSolutions from '@/pages/growth-solutions/CreativeSolutions';
import ConversionOptimization from '@/pages/growth-solutions/ConversionOptimization';
import SEO from '@/pages/growth-solutions/SEO';
import WebsiteSolutions from '@/pages/growth-solutions/WebsiteSolutions';

// Specialized Growth Solutions
import AuditInsights from '@/pages/growth-solutions/specialized-growth-solutions/AuditInsights';
import AnalyticsTracking from '@/pages/growth-solutions/specialized-growth-solutions/AnalyticsTracking';
import LeadGeneration from '@/pages/growth-solutions/specialized-growth-solutions/LeadGeneration';
import BrandStrategy from '@/pages/growth-solutions/specialized-growth-solutions/BrandStrategy';
import ContentStrategy from '@/pages/growth-solutions/specialized-growth-solutions/ContentStrategy';
import AIContent from '@/pages/growth-solutions/specialized-growth-solutions/AIContent';
import ExecutiveBranding from '@/pages/growth-solutions/specialized-growth-solutions/ExecutiveBranding';

// Strategic Solutions
import ProcessAutomation from '@/pages/strategic-solutions/ProcessAutomation';
import DigitalSystemsEnablement from '@/pages/strategic-solutions/DigitalSystemsEnablement';
import CustomSolutionEngineering from '@/pages/strategic-solutions/CustomSolutionEngineering';
import EnterpriseEvolution from '@/pages/strategic-solutions/EnterpriseEvolution';
import FinanceOperations from '@/pages/strategic-solutions/FinanceOperations';
import Operations from '@/pages/strategic-solutions/Operations';
import HumanResources from '@/pages/strategic-solutions/HumanResources';
import ComplianceGovernance from '@/pages/strategic-solutions/ComplianceGovernance';
import CrossFunctionalLeadership from '@/pages/strategic-solutions/CrossFunctionalLeadership';
import MarketResearch from '@/pages/strategic-solutions/MarketResearch';
import ProcessOptimization from '@/pages/strategic-solutions/ProcessOptimization';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);


  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/solvepath-framework" element={<SolvePathFramework />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/growth-solutions" element={<GrowthSolutions />} />
              <Route path="/strategic-solutions" element={<StrategicSolutions />} />
              <Route path="/core-growth-solutions" element={<CoreGrowthSolutions />} />
              <Route path="/specialized-growth-solutions" element={<SpecializedGrowthSolutions />} />
              
              {/* Core Growth Solutions Routes */}
              <Route path="/growth-solutions/performance-marketing" element={<PerformanceMarketing />} />
              <Route path="/growth-solutions/social-media-marketing" element={<SocialMedia />} />
              <Route path="/growth-solutions/email-marketing" element={<EmailMarketing />} />
              <Route path="/growth-solutions/creative-solutions" element={<CreativeSolutions />} />
              <Route path="/growth-solutions/conversion-optimization" element={<ConversionOptimization />} />
              <Route path="/growth-solutions/seo-website-growth" element={<SEO />} />
              <Route path="/growth-solutions/website-solutions" element={<WebsiteSolutions />} />
              
              {/* Specialized Growth Solutions Routes */}
              <Route path="/specialized-growth-solutions/audit-insights" element={<AuditInsights />} />
              <Route path="/specialized-growth-solutions/analytics-tracking" element={<AnalyticsTracking />} />
              <Route path="/specialized-growth-solutions/lead-generation" element={<LeadGeneration />} />
              <Route path="/specialized-growth-solutions/brand-strategy" element={<BrandStrategy />} />
              <Route path="/specialized-growth-solutions/content-strategy" element={<ContentStrategy />} />
              <Route path="/specialized-growth-solutions/ai-content" element={<AIContent />} />
              <Route path="/specialized-growth-solutions/executive-branding" element={<ExecutiveBranding />} />
              
              {/* Strategic Solutions Routes */}
              <Route path="/strategic-solutions/process-automation" element={<ProcessAutomation />} />
              <Route path="/strategic-solutions/digital-systems-enablement" element={<DigitalSystemsEnablement />} />
              <Route path="/strategic-solutions/custom-solution-engineering" element={<CustomSolutionEngineering />} />
              <Route path="/strategic-solutions/enterprise-evolution" element={<EnterpriseEvolution />} />
              <Route path="/strategic-solutions/finance-operations" element={<FinanceOperations />} />
              <Route path="/strategic-solutions/operations" element={<Operations />} />
              <Route path="/strategic-solutions/human-resources" element={<HumanResources />} />
              <Route path="/strategic-solutions/compliance-governance" element={<ComplianceGovernance />} />
              <Route path="/strategic-solutions/cross-functional-leadership" element={<CrossFunctionalLeadership />} />
              <Route path="/strategic-solutions/market-research" element={<MarketResearch />} />
              <Route path="/strategic-solutions/process-optimization" element={<ProcessOptimization />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
