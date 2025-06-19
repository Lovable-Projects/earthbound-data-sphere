
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, BarChart, Lightbulb, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessConsulting: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive business strategy development, goal setting, and roadmap creation to accelerate your growth trajectory.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Identify and eliminate bottlenecks, optimize processes, and implement systems that scale with your business.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Strategic innovation guidance, new opportunity identification, and competitive advantage development.'
    },
    {
      icon: BarChart,
      title: 'Performance Analysis',
      description: 'Deep-dive business analysis, KPI optimization, and data-driven insights to improve operational efficiency.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-accent/10 to-accent/5"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <Users className="w-4 h-4 mr-2" />
              Strategic Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Business Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic business consulting that optimizes operations, accelerates growth, and transforms challenges into competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Transform Your Business
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/strategic-solutions">
                  View All Strategic Solutions
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
              Our Business Consulting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert business consulting services designed to optimize your operations and accelerate sustainable growth.
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
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
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
        className="py-24 bg-gradient-to-br from-accent/10 to-primary/10"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Optimize Your Business Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's work together to identify opportunities and implement strategies that drive sustainable growth.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your Strategic Transformation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default BusinessConsulting;
