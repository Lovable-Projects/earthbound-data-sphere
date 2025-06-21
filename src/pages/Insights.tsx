
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Target, 
  Search, 
  Users, 
  CheckCircle, 
  Settings, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Insights: React.FC = () => {
  const stages = [
    {
      number: 1,
      title: "Identify Problems & Opportunities",
      description: "Identify pain points, inefficiencies, and areas of untapped value",
      questions: "What's slowing us down? Where are we wasting time or resources? Where could we be doing more with what we already have?",
      output: "Clear list of business-relevant problems and opportunities",
      icon: <Search className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Investigate Root Causes & Dependencies",
      description: "Surface the true drivers and systemic factors behind what's happening",
      questions: "What's underneath this issue? Who or what is involved in making change possible? Where are the real points of failure?",
      output: "Root cause map with relevant people, tools, and processes",
      icon: <Target className="w-6 h-6" />
    },
    {
      number: 3,
      title: "Group & Prioritize",
      description: "Organize insights into focus areas and determine what matters most",
      questions: "What's related? What rises to the top in terms of value, urgency, and feasibility? Are we aligned on what to solve first?",
      output: "Grouped themes, impact/effort map, or scored list",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: 4,
      title: "Translate Into Challenges",
      description: "Frame the right problems to solve in a way that guides thinking and action",
      questions: "Is this challenge framed around outcomes? Does it reflect real constraints? Is it broad enough for innovation, but focused enough to act on?",
      output: "Well-formed challenge statements",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: 5,
      title: "Develop Approaches",
      description: "Generate viable, creative paths to address the challenge",
      questions: "What are the possible ways forward? Which ones fit the context, capabilities, and goals?",
      output: "Prioritized list of strategic approaches",
      icon: <Settings className="w-6 h-6" />
    },
    {
      number: 6,
      title: "Define Solutions",
      description: "Build implementable, validated solutions designed for near-term and long-term ROI",
      questions: "What does success look like? How do we validate early and scale later? Are we designing for flexibility, speed, and sustainability?",
      output: "De-risked, staged solution plans with clear criteria",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insights - Solution Design Framework | Perssonify</title>
        <meta 
          name="description" 
          content="The Solution Design Framework - Clarity, Structure, and Momentum for Solving What Matters Most. A structured thinking and execution framework for complex business problems." 
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            The Solution Design Framework
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
          >
            Clarity, Structure, and Momentum for Solving What Matters Most
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            The Solution Design Framework is a structured thinking and execution framework for translating complex business problems and opportunities into actionable, scalable solutions. It's designed for situations where the path forward isn't obvious, where surface-level fixes fall short, and where deeper insight, structured alignment, and rigorous execution are required.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Get Started with Our Framework
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Framework Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-6">Framework Overview</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At its core, the Solution Design Framework answers a simple but essential question: "What's the smartest, clearest way to move from challenge to solution—without wasting time, resources, or momentum?"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <motion.div 
                      className="text-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stage.icon}
                    </motion.div>
                  </div>
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {stage.number}
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-3">{stage.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm">{stage.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-medium text-sm mb-2">Key Questions:</h5>
                  <p className="text-muted-foreground text-sm italic">{stage.questions}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-sm mb-2">Output:</h5>
                  <p className="text-muted-foreground text-sm">{stage.output}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Use It For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-6">What We Use This Framework For</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              "Diagnose and untangle complex, interdependent issues",
              "Identify meaningful opportunities hidden within operations, systems, or customer journeys",
              "Convert loosely defined pain points into structured, high-value solution spaces",
              "Develop and deliver scalable solutions through concept design, validation, and execution"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground mb-8">
              The Solution Design Framework is not a theory or abstraction—it's a practical sequence built to help decision-makers and operators move forward with confidence and clarity. It adapts to cross-functional use cases, supports both strategic and tactical problem solving, and allows for modular implementation depending on context and stage.
            </p>
            
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Apply This Framework to Your Business
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
