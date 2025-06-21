
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Camera, 
  Video, 
  FileImage, 
  Presentation,
  ArrowLeft,
  ArrowRight 
} from 'lucide-react';

const CreativeSolutions: React.FC = () => {
  const keyDeliverables = [
    {
      icon: <FileImage className="w-6 h-6" />,
      title: "Social Media Graphics",
      description: "Static images, GIFs, carousel ads, and post templates for brand consistency"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Ad Creatives",
      description: "High-performance static and motion graphics for paid media campaigns"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Content",
      description: "Short-form promotional videos, explainer videos, and branded reels"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Landing Page & Email Designs",
      description: "Visually optimized pages and email templates that drive action"
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Custom Branding Assets",
      description: "Business presentations, marketing brochures, and sales enablement materials"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Creative Solutions | Perssonify</title>
        <meta 
          name="description" 
          content="Visual storytelling that captivates & converts. Creative solutions for social media, ads, videos, and branding assets." 
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/growth-solutions" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Growth Solutions
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Creative Solutions
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
          >
            Visual Storytelling that Captivates & Converts
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Creativity is the cornerstone of effective communication. From engaging social media visuals to high-impact marketing collateral, Perssonify's creative solutions ensure your brand stands out in a crowded digital landscape. Our approach blends strategic messaging with compelling design to deliver assets that drive engagement, reinforce brand identity, and accelerate conversions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Start Creating
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Deliverables Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Key Deliverables
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDeliverables.map((deliverable, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {deliverable.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold">{deliverable.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {deliverable.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Outcome
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 p-8 rounded-lg border border-primary/20"
          >
            <p className="text-lg text-foreground leading-relaxed">
              <strong>Stronger brand recall, higher engagement rates, and more effective digital storytelling.</strong>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Ready to Create Impact?
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CreativeSolutions;
