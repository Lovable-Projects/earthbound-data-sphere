
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Target, Users, BarChart, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EmailMarketing: React.FC = () => {
  const services = [
    {
      icon: Mail,
      title: 'Email Campaign Design',
      description: 'Beautiful, responsive email templates and campaigns that capture attention and drive action across all devices.'
    },
    {
      icon: Settings,
      title: 'Marketing Automation',
      description: 'Sophisticated automation workflows that nurture leads, onboard customers, and maximize lifetime value.'
    },
    {
      icon: Target,
      title: 'List Segmentation',
      description: 'Advanced audience segmentation and personalization strategies to deliver the right message to the right people.'
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'A/B testing, analytics tracking, and continuous optimization to improve open rates, click rates, and conversions.'
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
              <Mail className="w-4 h-4 mr-2" />
              Growth Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Email Marketing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Powerful email marketing campaigns and automation that nurture leads, engage customers, and drive consistent revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Email Marketing
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
              Our Email Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive email marketing solutions that build relationships, drive engagement, and generate consistent revenue.
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
            Ready to Supercharge Your Email Marketing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's create email marketing campaigns that build relationships and drive consistent business growth.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Launch Your Email Strategy
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default EmailMarketing;
