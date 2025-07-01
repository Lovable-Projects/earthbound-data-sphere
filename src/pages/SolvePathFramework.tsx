import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Rocket, BarChart3, Users, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SolvePathFramework: React.FC = () => {
  const frameworkSteps = [
    {
      icon: Search,
      title: 'Discover',
      subtitle: 'Deep Analysis Phase',
      description: 'We start by understanding your business inside and out. Our comprehensive analysis covers market positioning, competitor landscape, current performance metrics, and untapped opportunities.',
      features: ['Market Analysis', 'Competitor Research', 'Performance Audit', 'Opportunity Mapping']
    },
    {
      icon: Target,
      title: 'Define',
      subtitle: 'Strategic Planning',
      description: 'Based on our discoveries, we define clear objectives and create a strategic roadmap. Every goal is measurable, achievable, and aligned with your business vision.',
      features: ['Goal Setting', 'Strategy Development', 'Resource Planning', 'Timeline Creation']
    },
    {
      icon: Lightbulb,
      title: 'Design',
      subtitle: 'Solution Architecture',
      description: 'We design tailored solutions that address your specific challenges. Our approach combines proven methodologies with innovative strategies for maximum impact.',
      features: ['Custom Solutions', 'System Design', 'Process Optimization', 'Technology Stack']
    },
    {
      icon: Rocket,
      title: 'Deploy',
      subtitle: 'Implementation & Launch',
      description: 'Rapid execution without compromising quality. We implement solutions with precision, ensuring smooth deployment and immediate value delivery.',
      features: ['Agile Implementation', 'Quality Assurance', 'Rapid Deployment', 'Performance Monitoring']
    },
    {
      icon: BarChart3,
      title: 'Deliver',
      subtitle: 'Results & Optimization',
      description: 'We continuously monitor performance and optimize for better results. Our data-driven approach ensures sustained growth and continuous improvement.',
      features: ['Performance Tracking', 'Data Analysis', 'Continuous Optimization', 'Reporting & Insights']
    }
  ];

  const benefits = [
    'Systematic approach to growth challenges',
    'Data-driven decision making process',
    'Reduced time-to-market for solutions',
    'Measurable and predictable outcomes',
    'Scalable framework for future growth',
    'Risk mitigation through proven methodologies'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6">
              Our Methodology
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              The <span className="text-primary">SolvePath</span> Framework
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our proven 5-step methodology that transforms business challenges into growth opportunities. 
              A systematic approach that delivers consistent, measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Framework Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{step.title}</h2>
                      <p className="text-primary font-medium">{step.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <Card>
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                          <step.icon className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Step {index + 1}</h3>
                        <p className="text-3xl font-bold text-primary mb-4">{step.title}</p>
                        <p className="text-muted-foreground">{step.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose the SolvePath Framework?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our framework isn't just a process—it's a proven methodology that consistently delivers results 
              for businesses of all sizes across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card>
              <CardContent className="p-12">
                <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Ready to Experience the SolvePath Difference?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's apply our proven framework to your unique business challenges 
                  and unlock your growth potential.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Your SolvePath Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolvePathFramework;
