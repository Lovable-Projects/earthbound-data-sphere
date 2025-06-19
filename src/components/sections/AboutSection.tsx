
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About Us</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                The right solution at the right time can change everything. We make the right solutions happen right now.
              </p>
              <p>
                We solve what's really holding you back—whether it's growth, operations or both. Born from performance marketing where speed and ROI are non-negotiable, we apply the same relentless focus to optimize entire businesses.
              </p>
              <p>
                <strong>Our approach:</strong> Identify the real problem. Design solutions that fit your reality. Execute with urgency.
              </p>
              <p>
                World-class outcomes don't require world-size teams. We're lean, expert-driven, and built for speed without compromise.
              </p>
              <p className="text-primary font-semibold">
                Ready to scale with confidence? Let's talk.
              </p>
            </div>
          </motion.div>

          {/* Our Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Journey So Far</h3>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                It started with a simple observation: the best campaigns weren't just creative—they were surgical.
              </p>
              <p>
                We began in performance marketing, obsessing over every conversion and ROI point. But as we drove growth for ambitious businesses, we kept hitting the same wall—great campaigns throttled by slow processes and operational bottlenecks.
              </p>
              <p>
                <strong>The breakthrough:</strong> the same precision that optimized ad spend could optimize entire operations.
              </p>
              <p>
                We didn't abandon our marketing DNA, we expanded it. The urgency, data-driven decisions and relentless focus on results stayed. Now we solve the problems that were limiting success in the first place.
              </p>
              <p>
                Today, we're the partner businesses call when speed matters, stakes are high, and "good enough" isn't enough.
              </p>
              <p className="text-primary font-semibold">
                <strong>The lesson:</strong> breakthrough results don't come from doing more—they come from solving what's really in the way.
              </p>
            </div>
          </motion.div>

          {/* Value Props Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 rounded-lg bg-background border">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Precision Focus</h4>
              <p className="text-foreground/70">
                We identify the real problems holding you back and design surgical solutions that fit your reality.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background border">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Speed & Urgency</h4>
              <p className="text-foreground/70">
                Born from performance marketing, we execute with the urgency and precision that drives real results.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background border">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Expert-Driven</h4>
              <p className="text-foreground/70">
                Lean, world-class teams built for speed without compromise. Quality over quantity, always.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
