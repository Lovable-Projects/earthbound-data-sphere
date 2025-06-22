
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconHover3D } from '../ui/icon-3d-hover';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center justify-center min-h-[80vh]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
            Growth & Strategic Solutions
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-4"
          >
            <span className="block sm:inline">We bring </span>
            <span className="text-primary relative inline-block">
              growth
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-primary/20 dark:bg-primary/30 -z-10"
              />
            </span>
            <span className="block sm:inline"> and </span>
            <span className="text-primary relative inline-block">
              scale
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-primary/20 dark:bg-primary/30 -z-10"
              />
            </span>
            <span className="block sm:inline"> to life</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 dark:text-foreground/80 mb-8 sm:mb-12 leading-relaxed max-w-4xl px-4"
          >
            We help businesses grow fast and scale smart. The right solution. The right time. Delivered.
          </motion.p>

          {/* 3D Icon Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center w-full max-w-5xl px-4"
          >
            <Link to="/growth-solutions" className="block w-full max-w-md lg:max-w-none">
              <IconHover3D 
                heading="Growth Solutions"
                text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
                width={500}
                height={120}
              />
            </Link>
            
            <Link to="/strategic-solutions" className="block w-full max-w-md lg:max-w-none">
              <IconHover3D 
                heading="Strategic Solutions"
                text="Tailored strategy and implementations built for precision, scalability, and operational efficiency."
                width={500}
                height={120}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
