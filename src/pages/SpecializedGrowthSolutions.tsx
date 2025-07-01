
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconHover3D } from '@/components/ui/icon-3d-hover';
import { 
  SearchCheck, 
  BarChart3, 
  Funnel, 
  Building, 
  FileText, 
  Cpu, 
  UserCheck 
} from 'lucide-react';

const SpecializedGrowthSolutions: React.FC = () => {
  const solutions = [
    {
      title: "Deep Dive Audit & Strategic Insights",
      description: "Clarity through expert analysis. Comprehensive audits that uncover hidden opportunities and provide actionable strategic recommendations.",
      icon: SearchCheck
    },
    {
      title: "Analytics and Event Tracking Setup",
      description: "Track what matters, measure what works. Advanced analytics implementation that provides deep insights into user behavior and business performance.",
      icon: BarChart3
    },
    {
      title: "Lead Generation & Funnel Strategy",
      description: "Build funnels that convert. Strategic funnel design and optimization that transforms prospects into customers at every stage.",
      icon: Funnel
    },
    {
      title: "Brand Architecture & Strategy",
      description: "Define, differentiate, scale. Comprehensive brand strategy that creates lasting market positioning and competitive advantage.",
      icon: Building
    },
    {
      title: "Content Strategy & Planning",
      description: "Structure content to drive growth. Strategic content frameworks that engage audiences and support business objectives.",
      icon: FileText
    },
    {
      title: "AI-Accelerated Content Production Pipelines",
      description: "Create more, faster, with precision. Advanced AI-powered content systems that scale your content creation while maintaining quality.",
      icon: Cpu
    },
    {
      title: "Executive Personal Branding & LinkedIn Marketing",
      description: "Elevate presence, grow influence. Strategic personal branding that positions executives as thought leaders and drives business growth.",
      icon: UserCheck
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-primary">
              Specialized Growth Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced strategic solutions for complex growth challenges. 
              Precision-engineered implementations for scalable business transformation.
            </p>
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
              Ready to move faster?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's explore how our specialized solutions can accelerate your growth.
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

export default SpecializedGrowthSolutions;
