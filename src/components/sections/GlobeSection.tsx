
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GlobeSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Global <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We serve businesses worldwide with our growth and strategic solutions. 
              From small startups to enterprise companies, we help organizations 
              scale efficiently and achieve their ambitious goals.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">500+ businesses transformed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">50+ countries served</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">98% client satisfaction rate</span>
              </div>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Worldwide Reach</h3>
                <p className="text-muted-foreground">Connecting businesses across continents</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
