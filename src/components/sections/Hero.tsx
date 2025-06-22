
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconHover3D } from '../ui/icon-3d-hover';
import { SparklesLogo } from '../ui/sparkles-logo';
import { ImagesSlider } from '../ui/images-slider';

const Hero: React.FC = () => {
  const images = [
    "/images/hero-bg.png",
    "/images/DigitalMarketingStrategies.png",
    "/images/DataAnalytics.png"
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <ImagesSlider images={images} overlay={true} overlayClassName="bg-black/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-50 h-full">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center h-full">
            {/* Sparkles Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <SparklesLogo />
            </motion.div>

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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight whitespace-nowrap"
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
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl"
            >
              We help businesses grow fast and scale smart. The right solution. The right time. Delivered.
            </motion.p>

            {/* 3D Icon Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full"
            >
              <Link to="/growth-solutions" className="block">
                <IconHover3D 
                  heading="Growth Solutions"
                  text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
                  width={600}
                  height={150}
                />
              </Link>
              
              <Link to="/strategic-solutions" className="block">
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
      </ImagesSlider>
    </section>
  );
};

export default Hero;
