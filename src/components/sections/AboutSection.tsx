
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We align every action with your business goals for maximum impact.'
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      description: 'Fast implementation without compromising on quality or results.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with proven track records in growth.'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:ml-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Us</span>
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              The right solution at the right time can change everything. We make the right solutions happen right now.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              We solve what's really holding you back—whether it's growth, operations or both. Born from performance marketing where speed and ROI are non-negotiable, we apply the same relentless focus to optimize entire businesses.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              Our approach: Identify the real problem. Design solutions that fit your reality. Execute with urgency.
            </p>
            <p className="text-foreground mb-8 leading-relaxed">
              World-class outcomes don't require world-size teams. We're lean, expert-driven, and built for speed without compromise.
            </p>
            <p className="text-lg font-semibold text-primary mb-8">
              Ready to scale with confidence? Let's talk.
            </p>
            <Link to="/about">
              <Button size="lg" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 lg:ml-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 custom-shadow bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Our Journey So Far Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Journey Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Journey <span className="text-primary">So Far</span>
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              It started with a simple observation: the best campaigns weren't just creative—they were surgical.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              We began in performance marketing, obsessing over every conversion and ROI point. But as we drove growth for ambitious businesses, we kept hitting the same wall—great campaigns throttled by slow processes and operational bottlenecks.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              The breakthrough: the same precision that optimized ad spend could optimize entire operations.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              We didn't abandon our marketing DNA, we expanded it. The urgency, data-driven decisions and relentless focus on results stayed. Now we solve the problems that were limiting success in the first place.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              Today, we're the partner businesses call when speed matters, stakes are high, and "good enough" isn't enough.
            </p>
            <p className="text-lg font-semibold text-primary">
              The lesson: breakthrough results don't come from doing more—they come from solving what's really in the way.
            </p>
          </motion.div>

          {/* Journey Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-0 custom-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-foreground mb-4">
                  From Campaigns to Complete Solutions
                </h3>
                <p className="text-center text-muted-foreground">
                  We evolved from performance marketing specialists to comprehensive business accelerators, maintaining our core DNA of speed, precision, and results.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
