import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Users, Target, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExecutionModel: React.FC = () => {
  const principles = [
    {
      icon: Zap,
      title: 'Speed Without Compromise',
      description: 'We move fast but never at the expense of quality. Our agile approach ensures rapid delivery while maintaining high standards.',
      details: ['Rapid prototyping', 'Iterative development', 'Quick feedback loops', 'Quality assurance at every step']
    },
    {
      icon: Target,
      title: 'Laser-Focused Execution',
      description: 'Every action is purposeful and aligned with your goals. We eliminate waste and focus on what truly drives results.',
      details: ['Clear objectives', 'Priority-based planning', 'Resource optimization', 'Results-driven approach']
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, ensuring seamless integration and shared ownership of success.',
      details: ['Dedicated team members', 'Regular communication', 'Transparent processes', 'Shared accountability']
    },
    {
      icon: TrendingUp,
      title: 'Continuous Optimization',
      description: 'We constantly refine and improve based on data and feedback, ensuring sustained growth and performance.',
      details: ['Performance monitoring', 'Data-driven decisions', 'Continuous improvement', 'Adaptive strategies']
    }
  ];

  const executionPhases = [
    {
      phase: 'Week 1-2',
      title: 'Sprint Planning & Setup',
      description: 'Detailed planning, resource allocation, and system setup for immediate implementation.',
      icon: Clock
    },
    {
      phase: 'Week 3-6',
      title: 'Rapid Implementation',
      description: 'Core solution deployment with weekly check-ins and real-time adjustments.',
      icon: Zap
    },
    {
      phase: 'Week 7-8',
      title: 'Testing & Optimization',
      description: 'Performance testing, optimization, and fine-tuning for maximum effectiveness.',
      icon: Target
    },
    {
      phase: 'Ongoing',
      title: 'Monitor & Scale',
      description: 'Continuous monitoring, optimization, and scaling based on performance data.',
      icon: TrendingUp
    }
  ];

  const advantages = [
    'Faster time-to-market than traditional approaches',
    'Reduced project risks through iterative delivery',
    'Higher success rates with agile methodology',
    'Better alignment with business objectives',
    'Improved ROI through focused execution',
    'Enhanced flexibility to adapt to changes'
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
              Our Approach
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Execution</span> Model
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A proven execution methodology that combines agile principles with strategic thinking 
              to deliver results faster and more effectively than traditional approaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Core Execution Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our execution model is built on four fundamental principles that ensure 
              consistent delivery of high-quality results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <principle.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {principle.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Timeline */}
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
              Execution Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures efficient delivery while maintaining flexibility 
              to adapt to your specific needs and market conditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <phase.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {phase.phase}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Our Execution Model Works
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our execution model has been refined through hundreds of successful projects. 
                It combines the best of agile methodology with strategic business thinking 
                to deliver exceptional results consistently.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Proven Success Rate</h3>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">95%</div>
                        <div className="text-sm text-muted-foreground">Project Success Rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">40%</div>
                        <div className="text-sm text-muted-foreground">Faster Delivery</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">200+</div>
                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">98%</div>
                        <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
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
                <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Experience Fast, Effective Execution
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Ready to see how our execution model can accelerate your business growth? 
                  Let's discuss your project and show you the difference our approach makes.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Your Project Today
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

export default ExecutionModel;
