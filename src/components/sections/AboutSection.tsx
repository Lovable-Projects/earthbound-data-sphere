<<<<<<< HEAD
=======

>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap } from 'lucide-react';
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

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="lg:ml-20"
=======
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Perssonify</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a growth-focused agency that helps businesses scale fast and smart. 
              Our team combines strategic thinking with rapid execution to deliver 
              measurable results that drive sustainable growth.
            </p>
            <p className="text-muted-foreground mb-8">
              From performance marketing to strategic consulting, we provide the right 
              solutions at the right time. Our data-driven approach ensures every 
              decision is backed by insights and every action moves you closer to your goals.
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
<<<<<<< HEAD
            className="grid grid-cols-1 gap-6 lg:ml-20"
=======
            className="grid grid-cols-1 gap-6"
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 custom-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
