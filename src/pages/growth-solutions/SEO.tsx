
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, TrendingUp, Target, Globe, BarChart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SEO: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Technical SEO Optimization',
      description: 'Complete technical audit and optimization including site speed, mobile optimization, and search engine crawlability.'
    },
    {
      icon: Target,
      title: 'Keyword Strategy & Research',
      description: 'In-depth keyword research and strategic targeting to capture high-intent traffic and improve search rankings.'
    },
    {
      icon: BarChart,
      title: 'Content Optimization',
      description: 'SEO-optimized content creation and existing content enhancement to improve search visibility and user engagement.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Comprehensive SEO analytics, ranking tracking, and performance reporting to measure and improve results.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-primary/5"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Search className="w-4 h-4 mr-2" />
              Growth Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              SEO Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic search engine optimization that drives organic traffic, improves rankings, and delivers sustainable long-term growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Boost Your Rankings
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/growth-solutions">
                  View All Growth Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our SEO Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive SEO solutions that improve your search visibility and drive qualified organic traffic to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-card custom-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-br from-primary/10 to-accent/10"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's create an SEO strategy that drives sustainable organic growth for your business.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your SEO Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default SEO;
