
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Globe, 
  Eye,
  ArrowLeft 
} from 'lucide-react';

const PerformanceMarketing: React.FC = () => {
  const keyDeliverables = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Ad Strategy & Setup",
      description: "Identifying high-intent audiences, keyword research, and targeting optimization."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-Platform Execution",
      description: "Google Ads, Display Network, YouTube, Meta (Facebook/Instagram), LinkedIn, Content Recommendation Networks (Taboola, Outbrain, Revcontent), Alternative Platforms (Reddit Ads, Quora Ads, X Ads), Direct Media Buys on premium websites and industry-specific publications, and Performance Marketing Partnerships."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Creative Development",
      description: "High-converting ad creatives, including static, carousel, and video formats."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Bid & Budget Optimization",
      description: "Maximizing ROI through dynamic budget allocation and A/B testing."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Landing Page Optimization",
      description: "Custom landing pages built for high engagement and conversion rates."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics & Reporting",
      description: "Continuous campaign monitoring and strategic adjustments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Performance Marketing & Paid Media | Perssonify</title>
        <meta 
          name="description" 
          content="Drive customers, users & revenue with precision advertising and multi-platform reach. Expert performance marketing and paid media management." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/growth-solutions" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Growth Solutions
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Performance Marketing & Paid Media
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Driving Customers, Users & Revenue with Precision Advertising and Multi-Platform Reach
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Digital advertising should be an investment with a measurable return. Our performance-driven ad campaigns are structured to maximize conversions, optimize budgets, and generate high-value leads, customers, and users across multiple platforms.
          </p>
          
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Key Deliverables Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Deliverables</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDeliverables.map((deliverable, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">
                    {deliverable.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{deliverable.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {deliverable.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-8">Expected Outcome</h3>
          <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
            <p className="text-lg text-foreground leading-relaxed">
              <strong>Higher lead quality, increased customer acquisition, user growth, and a streamlined conversion journey.</strong>
            </p>
          </div>
          
          <div className="mt-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">Ready to Drive Results?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMarketing;
