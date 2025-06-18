
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotateY: 25
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ perspective: "1000px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-background rounded-2xl p-8 text-center custom-shadow hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Sliding line indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-2xl"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
