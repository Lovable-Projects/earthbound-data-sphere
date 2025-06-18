
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconHover3D } from '@/components/ui/icon-3d-hover';
import { 
  TrendingUp, 
  Users, 
  Mail, 
  Palette, 
  Target, 
  Search, 
  Globe 
} from 'lucide-react';

const CoreGrowthSolutions: React.FC = () => {
  const solutions = [
    {
      title: "Performance Marketing & Paid Media",
      description: "High-ROI ads that convert. Strategic campaign management across platforms to maximize your advertising spend and drive measurable results.",
      icon: TrendingUp
    },
    {
      title: "Social Media Marketing & Brand Engagement",
      description: "Build audience, spark action. Comprehensive social media strategies that create meaningful connections and drive engagement across all platforms.",
      icon: Users
    },
    {
      title: "Email Marketing & Marketing Automation",
      description: "Automate nurture, drive loyalty. Sophisticated email campaigns and automation workflows that convert prospects into loyal customers.",
      icon: Mail
    },
    {
      title: "Creative Solutions",
      description: "Visuals that get results. Eye-catching designs and compelling creative assets that capture attention and drive conversions.",
      icon: Palette
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "Test. Refine. Convert more. Data-driven optimization strategies that turn more visitors into customers through systematic testing and improvement.",
      icon: Target
    },
    {
      title: "Search Engine Optimization (SEO) & Website Growth",
      description: "Rank higher. Grow faster. Comprehensive SEO strategies that improve your search visibility and drive organic traffic growth.",
      icon: Search
    },
    {
      title: "Website Solutions",
      description: "Seamless, scalable, conversion-ready. Professional websites built for performance, user experience, and business growth.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Core Growth Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-performance marketing strategy and execution that engineers demand, 
              amplifies brand value, and accelerates customer acquisition.
            </p>
          </motion.div>

          {/* Featured Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-20"
          >
            <IconHover3D 
              heading="Growth Solutions"
              text="Transform your marketing with our comprehensive growth solutions designed for maximum impact."
              width={800}
              height={180}
            />
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to grow faster?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our core growth solutions can transform your business.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Let's talk
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoreGrowthSolutions;
