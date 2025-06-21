
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Insights from '@/pages/Insights';
import GrowthSolutions from '@/pages/GrowthSolutions';
import StrategicSolutions from '@/pages/StrategicSolutions';
import NotFound from '@/pages/NotFound';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import ScrollToTop from '@/components/ScrollToTop';

// Growth Solutions Pages
import DigitalMarketing from '@/pages/growth-solutions/DigitalMarketing';
import SEO from '@/pages/growth-solutions/SEO';
import SocialMedia from '@/pages/growth-solutions/SocialMedia';
import ContentMarketing from '@/pages/growth-solutions/ContentMarketing';
import EmailMarketing from '@/pages/growth-solutions/EmailMarketing';

// Strategic Solutions Pages
import BusinessConsulting from '@/pages/strategic-solutions/BusinessConsulting';
import MarketResearch from '@/pages/strategic-solutions/MarketResearch';
import BrandStrategy from '@/pages/strategic-solutions/BrandStrategy';
import Analytics from '@/pages/strategic-solutions/Analytics';
import ProcessOptimization from '@/pages/strategic-solutions/ProcessOptimization';

// New Performance Marketing and Social Media pages
import PerformanceMarketing from '@/pages/growth-solutions/PerformanceMarketing';
import SocialMediaMarketing from '@/pages/growth-solutions/SocialMediaMarketing';

// New Growth Solutions Pages
import CreativeSolutions from '@/pages/growth-solutions/CreativeSolutions';
import ConversionOptimization from '@/pages/growth-solutions/ConversionOptimization';
import SEOWebsiteGrowth from '@/pages/growth-solutions/SEOWebsiteGrowth';
import WebsiteSolutions from '@/pages/growth-solutions/WebsiteSolutions';

// New Strategic Solutions Pages  
import ProcessAutomation from '@/pages/strategic-solutions/ProcessAutomation';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="insights" element={<Insights />} />
            <Route path="growth-solutions" element={<GrowthSolutions />} />
            <Route path="strategic-solutions" element={<StrategicSolutions />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            
            {/* Growth Solutions Sub-pages */}
            <Route path="growth-solutions/digital-marketing" element={<DigitalMarketing />} />
            <Route path="growth-solutions/seo" element={<SEO />} />
            <Route path="growth-solutions/social-media" element={<SocialMedia />} />
            <Route path="growth-solutions/content" element={<ContentMarketing />} />
            <Route path="growth-solutions/email" element={<EmailMarketing />} />
            <Route path="growth-solutions/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="growth-solutions/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="growth-solutions/creative-solutions" element={<CreativeSolutions />} />
            <Route path="growth-solutions/conversion-optimization" element={<ConversionOptimization />} />
            <Route path="growth-solutions/seo-website-growth" element={<SEOWebsiteGrowth />} />
            <Route path="growth-solutions/website-solutions" element={<WebsiteSolutions />} />
            
            {/* Strategic Solutions Sub-pages */}
            <Route path="strategic-solutions/consulting" element={<BusinessConsulting />} />
            <Route path="strategic-solutions/research" element={<MarketResearch />} />
            <Route path="strategic-solutions/branding" element={<BrandStrategy />} />
            <Route path="strategic-solutions/analytics" element={<Analytics />} />
            <Route path="strategic-solutions/optimization" element={<ProcessOptimization />} />
            <Route path="strategic-solutions/process-automation" element={<ProcessAutomation />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
