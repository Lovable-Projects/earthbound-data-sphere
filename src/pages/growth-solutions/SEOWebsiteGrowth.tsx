
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Globe, 
  BarChart3, 
  Settings, 
  FileText,
  TrendingUp,
  ArrowLeft,
  ArrowRight 
} from 'lucide-react';

const SEOWebsiteGrowth: React.FC = () => {
  const keyDeliverables = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Comprehensive Website Audit",
      description: "Fixing crawl errors, improving page speed, and resolving SEO issues"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Keyword Research & Mapping",
      description: "Identifying high-opportunity keywords for maximum search visibility"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "On-Page Optimization",
      description: "Content enhancements, meta descriptions, internal linking, and structured data implementation"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Technical SEO Improvements",
      description: "Site architecture, navigation, and schema markup for better indexing"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Programmatic SEO",
      description: "Scalable content generation frameworks to target long-tail keywords and high-intent search queries at scale"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "LLM Optimization & Performance Tracking",
      description: "Structuring content for AI-powered search environments and monthly ranking reports with actionable insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Search Engine Optimization (SEO) & Website Growth | Perssonify</title>
        <meta 
          name="description" 
          content="Turn search into a scalable growth channel. Expert SEO and website growth services for sustainable digital growth." 
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/growth-solutions" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Growth Solutions
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Search Engine Optimization (SEO) & Website Growth
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
          >
            Turning Search into a Scalable Growth Channel
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            SEO is the foundation of sustainable digital growth. We don't just optimize websites—we build search ecosystems that ensure long-term discoverability, credibility, and high-value organic traffic.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Start Growing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Deliverables Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Key Deliverables
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDeliverables.map((deliverable, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {deliverable.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold">{deliverable.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {deliverable.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Outcome
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 p-8 rounded-lg border border-primary/20"
          >
            <p className="text-lg text-foreground leading-relaxed">
              <strong>Higher organic traffic, improved search rankings, and increased inbound lead generation.</strong>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Grow Your Search Presence
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SEOWebsiteGrowth;
