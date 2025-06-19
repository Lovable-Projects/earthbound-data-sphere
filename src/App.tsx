
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
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

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
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
          
          {/* Strategic Solutions Sub-pages */}
          <Route path="strategic-solutions/consulting" element={<BusinessConsulting />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
