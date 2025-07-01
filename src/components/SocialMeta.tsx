
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SocialMeta: React.FC = () => {
  const location = useLocation();
  const currentUrl = `https://perssonify.com${location.pathname}`;
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Perssonify - Growth & Strategic Solutions That Scale';
      case '/about':
        return 'About Perssonify - Expert Growth & Strategic Solutions';
      case '/contact':
        return 'Contact Perssonify - Ready to Accelerate Your Business Growth?';
      case '/growth-solutions':
        return 'Growth Solutions - High-Performance Marketing Strategy | Perssonify';
      case '/core-growth-solutions':
        return 'Core Growth Solutions - Comprehensive Digital Growth | Perssonify';
      case '/strategic-solutions':
        return 'Strategic Solutions - Operational Excellence & Automation | Perssonify';
      case '/insights':
        return 'Business Insights & Growth Strategies | Perssonify';
      case '/blog':
        return 'Business Growth Blog & Marketing Insights | Perssonify';
      default:
        return 'Perssonify - Growth & Strategic Solutions';
    }
  };

  const getPageDescription = () => {
    switch (location.pathname) {
      case '/':
        return 'Transform your business with Perssonify\'s growth and strategic solutions. We help businesses grow fast and scale smart with proven strategies and expert execution.';
      case '/about':
        return 'Learn about Perssonify\'s mission to deliver growth and strategic solutions that drive measurable results for businesses worldwide.';
      case '/contact':
        return 'Ready to accelerate your business growth? Contact Perssonify for strategic solutions that deliver measurable results and sustainable growth.';
      case '/growth-solutions':
        return 'High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition. Discover our comprehensive growth solutions.';
      case '/core-growth-solutions':
        return 'Comprehensive digital growth solutions for brands that demand impact. Strategic marketing challenges solved with measurable outcomes.';
      case '/strategic-solutions':
        return 'Tailored strategic solutions built for precision, scalability, and operational efficiency. Transform your business operations and drive growth.';
      case '/insights':
        return 'Expert insights on business growth, marketing strategies, and operational excellence. Stay ahead with Perssonify\'s strategic guidance.';
      case '/blog':
        return 'Latest insights on business growth, marketing trends, and strategic solutions. Expert advice to help your business scale effectively.';
      default:
        return 'Professional growth and strategic solutions designed to accelerate your business success with proven methodologies and expert execution.';
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{getPageTitle()}</title>
      <meta name="description" content={getPageDescription()} />
      <meta name="keywords" content="business growth, marketing strategy, strategic solutions, digital marketing, performance marketing, business automation, growth consulting, revenue optimization" />
      <meta name="author" content="Perssonify" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={getPageTitle()} />
      <meta property="og:description" content={getPageDescription()} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Perssonify" />
      <meta property="og:image" content="https://perssonify.com/Logo-Teal.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Perssonify - Growth & Strategic Solutions" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={getPageTitle()} />
      <meta name="twitter:description" content={getPageDescription()} />
      <meta name="twitter:image" content="https://perssonify.com/Logo-Teal.png" />
      <meta name="twitter:image:alt" content="Perssonify - Growth & Strategic Solutions" />
      <meta name="twitter:site" content="@perssonify" />
      <meta name="twitter:creator" content="@perssonify" />

      {/* LinkedIn Meta Tags */}
      <meta property="linkedin:title" content={getPageTitle()} />
      <meta property="linkedin:description" content={getPageDescription()} />
      <meta property="linkedin:image" content="https://perssonify.com/Logo-Teal.png" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Perssonify",
          "url": "https://perssonify.com",
          "logo": "https://perssonify.com/Logo-Teal.png",
          "description": getPageDescription(),
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-609-510-2061",
            "contactType": "customer service",
            "email": "stefan@perssonify.com"
          },
          "sameAs": [
            "https://linkedin.com/company/perssonify",
            "https://twitter.com/perssonify"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SocialMeta;
