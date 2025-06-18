
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconHover3D } from '@/components/ui/icon-3d-hover';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered Content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Growth & Strategic Solutions
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              <span className="block">
                We bring{' '}
                <span className="text-primary relative inline-block">
                  growth
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 dark:bg-primary/30 -z-10"
                  />
                </span>
              </span>
              <span className="block mt-2">
                and{' '}
                <span className="text-primary relative inline-block">
                  scale
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 dark:bg-primary/30 -z-10"
                  />
                </span>
                {' '}to life
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-foreground/90 dark:text-foreground/80 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              We help businesses grow faster, scale with confidence, and solve what holds progress back where it matters most.
            </motion.p>
          </div>

          {/* Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <div 
              onClick={() => scrollToSection('growth-solutions')}
              className="cursor-pointer"
            >
              <IconHover3D
                heading="Growth Solutions"
                text="Attract the right audience, convert consistently, and expand your market reach with our end-to-end growth marketing strategy and execution."
                width={600}
                height={180}
              />
            </div>
            
            <div 
              onClick={() => scrollToSection('strategic-solutions')}
              className="cursor-pointer"
            >
              <IconHover3D
                heading="Strategic Solutions"
                text="Improve efficiency, automate intelligently, and ensure operations scale without chaos through high-ROI tailored strategy and implementations."
                width={600}
                height={180}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
