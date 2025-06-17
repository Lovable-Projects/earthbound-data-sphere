import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Target, Zap, ArrowRight, BarChart, Users, Mail, Search, Globe, Palette, Eye, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const GrowthSolutions: React.FC = () => {
  const coreGrowthSolutions = [
    {
      icon: BarChart,
      title: 'Performance Marketing & Paid Media',
      description: 'High-impact, ROI-driven advertising campaigns across multiple platforms to maximize reach and conversions.'
    },
    {
      icon: Users,
      title: 'Social Media Marketing & Brand Engagement',
      description: 'Building and activating audiences through strategic content, engagement strategies, and social media growth.'
    },
    {
      icon: Mail,
      title: 'Email Marketing & Marketing Automation',
      description: 'Lead nurturing, CRM-integrated campaigns, and automated sequences designed to transform prospects into loyal customers.'
    },
    {
      icon: Palette,
      title: 'Creative Solutions',
      description: 'Visual branding, marketing collateral, and creative content that aligns with business goals and strengthens brand identity.'
    },
    {
      icon: Eye,
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Testing and refining key elements of the user journey to increase conversions across landing pages, websites, and campaigns.'
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO) & Website Growth',
      description: 'Long-term strategies to increase organic visibility, search rankings, and website performance.'
    },
    {
      icon: Globe,
      title: 'Website Solutions',
      description: 'Development, optimization, and maintenance of websites to ensure seamless user experience and conversion readiness.'
    }
  ];

  const specializedSolutions = [
    {
      icon: BarChart3,
      title: 'Deep Dive Audit & Strategic Insights',
      description: 'Comprehensive performance analysis, competitor benchmarking, and identification of growth opportunities.'
    },
    {
      icon: Target,
      title: 'Analytics and Event Tracking Setup',
      description: 'Implementing tracking systems to provide actionable insights on customer behavior and marketing performance.'
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation & Funnel Strategy',
      description: 'Structuring full-funnel strategies that attract qualified leads, nurture them effectively, and convert with consistency.'
    },
    {
      icon: Zap,
      title: 'Brand Architecture & Strategy',
      description: 'Crafting a cohesive and scalable brand strategy that differentiates businesses in competitive markets.'
    },
    {
      icon: Palette,
      title: 'Content Strategy & Planning',
      description: 'Developing editorial calendars, messaging frameworks, and cross-channel content strategies to support sustained growth.'
    },
    {
      icon: BarChart3,
      title: 'AI-Accelerated Content Production Pipelines',
      description: 'AI-enhanced workflows that increase content production efficiency while maintaining quality and brand consistency.'
    },
    {
      icon: Users,
      title: 'Executive Personal Branding & LinkedIn Marketing',
      description: 'Executive thought leadership and audience-building strategies to expand professional influence and drive business opportunities.'
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4 mr-2" />
              High-Performance Marketing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-foreground mb-6">
              Growth Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Grow by Acquiring More Customers, Improving Engagement and Increasing Conversion Rates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Growing Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/strategic-solutions">
                  Strategic Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Built for Momentum
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Perssonify's Growth Solutions are designed to build momentum—fast. We turn strategy into execution 
              by owning the entire process end-to-end: planning, production, optimization, and performance. 
              Our team brings deep expertise across the growth solution spectrum, so we have tight control, 
              fast turnaround, and the ability to deliver high-quality outcomes without excess overhead.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're building brand authority, driving demand, or scaling acquisition, we match smart 
              strategy with operational firepower—so growth isn't just a goal, it's a measurable outcome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Growth Solutions */}
      <section className="pt-24 pb-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Core Growth Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              For businesses looking to grow their top line and expand their customer base, engagement and reach, 
              these solutions focus on direct customer acquisition, brand visibility, and engagement-driven marketing 
              to increase conversions and long-term retention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreGrowthSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-background custom-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-playfair">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg font-semibold text-foreground mb-4">
              Ready to attract, engage, and convert more customers?
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Let's Build Your Growth Engine
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Specialized Growth Solutions */}
      <section className="pt-24 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Specialized Growth Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              For businesses looking to refine and optimize their growth strategies, these specialized solutions 
              offer deeper insights, strategy optimization, brand enhancement and AI-enabled acceleration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-accent/10 to-accent/5 custom-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-playfair">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg font-semibold text-foreground mb-4">
              Looking for sharper insights, stronger positioning, and smarter ways to scale?
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Let's Optimize Your Growth Strategy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our Growth Solutions can help you attract more customers, 
              improve engagement, and increase conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/strategic-solutions">
                  View Strategic Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GrowthSolutions;
