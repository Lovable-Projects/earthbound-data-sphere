import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Cog, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Target,
      title: "Analyze",
      description: "Deep dive into your current state, identifying bottlenecks and opportunities for growth."
    },
    {
      icon: Lightbulb,
      title: "Strategize",
      description: "Craft tailored solutions that align with your business goals and market demands."
    },
    {
      icon: Cog,
      title: "Execute",
      description: "Implement solutions with precision, maintaining quality and timeline commitments."
    },
    {
      icon: Rocket,
      title: "Scale",
      description: "Monitor, optimize, and scale successful strategies for sustained growth."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to delivering results that matter, built on years of experience 
            and hundreds of successful transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-background rounded-2xl p-8 text-center custom-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
