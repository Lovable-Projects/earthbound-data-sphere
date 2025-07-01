import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveHoverCard from '../ui/interactive-hover-card';
import { RotatingText } from '../ui/rotating-text';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="relative flex items-center justify-center overflow-hidden pt-32 pb-24">
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-center"
              >
                We bring{' '}
                <span className="text-primary relative inline-block">
                  Growth
                </span>
                {' '}and{' '}
                <span className="text-primary relative inline-block">
                  Scale
                </span>
                {' '}to life.
              </motion.h1>

              {/* Subtitle with Fixed Layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-foreground/90 dark:text-foreground/80 mb-16 leading-relaxed"
              >
                <div className="flex flex-wrap items-center justify-center gap-1">
                  <span>We help businesses grow fast and scale smart.</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-primary border border-primary min-w-[180px] max-w-[220px] justify-center text-center">
                    <RotatingText
                      texts={["The right solution.", "The right time.", " Delivered."]}
                      rotationInterval={2000}
                      mainClassName="inline font-semibold text-black dark:text-white"
                      splitBy="words"
                    />
                  </span>
                </div>
              </motion.div>

              {/* Interactive Hover Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col lg:flex-row gap-6 justify-center items-center w-full mt-8"
              >
                <Link to="/growth-solutions" className="block w-full max-w-lg relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative">
                    <InteractiveHoverCard
                      imageUrl="/Icons/Growth Solutions.png"
                      heading="Growth Solutions"
                      text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </Link>
                
                <Link to="/strategic-solutions" className="block w-full max-w-lg relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative">
                    <InteractiveHoverCard
                      imageUrl="/Icons/Strategic Solutions.png"
                      heading="Strategic Solutions"
                      text="Tailored strategy and implementations built for precision, scalability, and operational efficiency."
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
