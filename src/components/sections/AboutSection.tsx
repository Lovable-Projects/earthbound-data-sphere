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

  const processWords = [
    'Strategize', 'Plan', 'Implement', 'Execute', 'Oversee', 'Analyze', 'Understand', 'Optimize', 'Innovate'
  ];

  return (
    <section className="section-padding-lg bg-background">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-24 lg:justify-between gap-y-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:ml-0 text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-left text-primary px-2">
              About <span className="text-primary">Us</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed px-2">
              The right solution at the right time can change everything. We make the right solutions happen right now.
            </p>
            <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
              We solve what's really holding you back—whether it's growth, operations or both. Born from performance marketing where speed and ROI are non-negotiable, we apply the same relentless focus to optimize entire businesses.
            </p>
            <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
              Our approach: Identify the real problem. Design solutions that fit your reality. Execute with urgency.
            </p>
            <p className="text-sm sm:text-base text-foreground mb-6 sm:mb-8 leading-relaxed">
              World-class outcomes don't require world-size teams. We're lean, expert-driven, and built for speed without compromise.
            </p>
            <p className="text-base sm:text-lg font-semibold text-primary mb-6 sm:mb-8">
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
            className="grid grid-cols-1 gap-4 sm:gap-6 lg:ml-0 lg:items-end lg:justify-end"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Our Journey So Far Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-24 lg:justify-between">
          {/* Journey Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:ml-0 text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-left text-primary">
              Our Journey <span className="text-primary">So Far</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed">
              It started with a simple observation: the best campaigns weren't just creative—they were surgical.
            </p>
            <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
              We began in performance marketing, obsessing over every conversion and ROI point. But as we drove growth for ambitious businesses, we kept hitting the same wall—great campaigns throttled by slow processes and operational bottlenecks.
            </p>
            <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
              The breakthrough: the same precision that optimized ad spend could optimize entire operations.
            </p>
            <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
              We didn't abandon our marketing DNA, we expanded it. The urgency, data-driven decisions and relentless focus on results stayed. Now we solve the problems that were limiting success in the first place.
            </p>
            <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
              Today, we're the partner businesses call when speed matters, stakes are high, and "good enough" isn't enough.
            </p>
            <p className="text-base sm:text-lg font-semibold text-primary mb-6 sm:mb-8">
              The lesson: breakthrough results don't come from doing more—they come from solving what's really in the way.
            </p>
            <Link to="/about/solvepath-framework">
              <Button size="lg" className="group">
                Learn More About SolvePath Framework
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Journey Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 sm:gap-6 lg:ml-0 lg:items-end lg:justify-end"
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-center text-foreground mb-3 sm:mb-4">
                  From Campaigns to Complete Solutions
                </h3>
                <p className="text-center text-muted-foreground text-sm sm:text-base">
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
