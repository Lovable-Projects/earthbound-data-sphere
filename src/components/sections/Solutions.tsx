import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Settings, ArrowRight, Zap, Target, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: TrendingUp,
      title: 'Growth Solutions',
      subtitle: 'High-Performance Marketing',
      description: 'Attract the right audience, convert consistently, and expand your market reach with our end-to-end growth marketing strategy and execution.',
      features: [
        'Performance Marketing & Paid Media',
        'Social Media Marketing & Brand Engagement',
        'Email Marketing & Marketing Automation',
        'Conversion Rate Optimization (CRO)',
        'SEO & Website Growth',
        'Creative Solutions'
      ],
      href: '/growth-solutions',
      color: 'bg-gradient-to-br from-primary/10 to-primary/5',
      iconColor: 'text-primary'
    },
    {
      icon: Cog,
      title: 'Strategic Solutions',
      subtitle: 'Technology-Enhanced Operational Scaling',
      description: 'Improve efficiency, automate intelligently, and ensure operations scale without chaos through high-ROI tailored strategy and implementations.',
      features: [
        'Process & Workflow Automation',
        'Digital Systems Enablement',
        'Custom Solution Engineering',
        'Enterprise Evolution & Strategic Transformation',
        'Cross-Functional Solutions',
        'Compliance & Governance'
      ],
      href: '/strategic-solutions',
      color: 'bg-gradient-to-br from-accent/10 to-accent/5',
      iconColor: 'text-accent'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-primary text-2xl sm:text-3xl md:text-4xl px-2">
            Two Solution Families
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-base sm:text-lg px-2">
            Whether you're launching something new or optimizing what's already working, 
            we deliver what your business needs to grow, adapt, and move faster.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 gap-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link to={solution.href} className="block group">
                <Card>
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground/80">
                      {solution.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Services:</h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {solution.features.length > 4 && (
                          <li className="text-sm text-muted-foreground ml-6">
                            + {solution.features.length - 4} more services
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Explore {solution.title}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Ready to accelerate your business?
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Let's discuss your specific needs
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. We'll help you identify the right combination of 
            Growth and Strategic Solutions to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
