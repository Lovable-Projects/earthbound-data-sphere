
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconHover3D } from '../ui/icon-3d-hover';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center w-full py-12">

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-4"
          >
            We bring{' '}
            <span className="text-primary relative inline-block">
              growth
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-primary/20 dark:bg-primary/30 -z-10"
              />
            </span>
            {' '}and{' '}
            <span className="text-primary relative inline-block">
              scale
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-primary/20 dark:bg-primary/30 -z-10"
              />
            </span>
            {' '}to life
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl px-4"
          >
            We help businesses grow fast and scale smart. The right solution. The right time. Delivered.
          </motion.p>

          {/* 3D Icon Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center w-full px-4"
          >
            <Link to="/growth-solutions" className="block w-full max-w-md lg:max-w-none">
              <IconHover3D 
                heading="Growth Solutions"
                text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
                width={600}
                height={150}
              />
            </Link>
            
            <Link to="/strategic-solutions" className="block w-full max-w-md lg:max-w-none">
              <IconHover3D 
                heading="Strategic Solutions"
                text="Tailored strategy and implementations built for precision, scalability, and operational efficiency."
                width={600}
                height={150}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
