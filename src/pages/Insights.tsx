
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
  ArrowRight,
  Lightbulb,
  Eye,
  Zap,
  BarChart3,
  Puzzle,
  Workflow
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Insights: React.FC = () => {
  const stages = [
    {
      number: 1,
      title: "Identify Problems & Opportunities",
      description: "Pinpoint what's holding the business back—or what could propel it forward.",
      keyQuestions: "What's slowing us down? Where are we wasting time or resources? Where could we be doing more with what we already have?",
      output: "Clear list of business-relevant problems and opportunities",
      icon: <Search className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Investigate Root Causes & Dependencies",
      description: "Surface the true drivers and systemic factors behind what's happening",
      keyQuestions: "What's underneath this issue? Who or what is involved in making change possible? Where are the real points of failure?",
      output: "Root cause map with relevant people, tools, and processes",
      icon: <Target className="w-6 h-6" />
    },
    {
      number: 3,
      title: "Group & Prioritize",
      description: "Organize insights into focus areas and determine what matters most",
      keyQuestions: "What's related? What rises to the top in terms of value, urgency, and feasibility? Are we aligned on what to solve first?",
      output: "Grouped themes, impact/effort map, or scored list",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: 4,
      title: "Translate Into Challenges",
      description: "Frame the right problems to solve in a way that guides thinking and action",
      keyQuestions: "Is this challenge framed around outcomes? Does it reflect real constraints? Is it broad enough for innovation, but focused enough to act on?",
      output: "Well-formed challenge statements",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: 5,
      title: "Develop Approaches",
      description: "Generate viable, creative paths to address the challenge",
      keyQuestions: "What are the possible ways forward? Which ones fit the context, capabilities, and goals?",
      output: "Prioritized list of strategic approaches",
      icon: <Settings className="w-6 h-6" />
    },
    {
      number: 6,
      title: "Define Solutions",
      description: "Build implementable, validated solutions designed for near-term and long-term ROI",
      keyQuestions: "What does success look like? How do we validate early and scale later? Are we designing for flexibility, speed, and sustainability?",
      output: "De-risked, staged solution plans with clear criteria",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const frameworkUses = [
    "Diagnose and untangle complex, interdependent issues",
    "Identify meaningful opportunities hidden within operations, systems, or customer journeys",
    "Convert loosely defined pain points into structured, high-value solution spaces",
    "Develop and deliver scalable solutions through concept design, validation, and execution"
  ];

  const rootCauseMethods = [
    {
      title: "The '5 Whys' Technique",
      description: "Ask 'why' repeatedly—typically five times—to dig deeper into a symptom and find its root cause.",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "Fishbone (Ishikawa) Diagrams",
      description: "A visual framework to organize possible causes into distinct categories for holistic brainstorming.",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Stakeholder Mapping",
      description: "Identify friction points, role confusion, and handoff issues across functions or teams.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Process Walkthrough",
      description: "Step-by-step observation of how something actually gets done in practice, not how it's documented.",
      icon: <Workflow className="w-5 h-5" />
    }
  ];

  const challengeCategories = [
    { category: "Speed", description: "How might we reduce delays or accelerate performance?" },
    { category: "Quality", description: "How might we improve output, accuracy, or consistency?" },
    { category: "Efficiency", description: "How might we do more with less, or reduce waste?" },
    { category: "Scalability", description: "How might we scale a process without increasing headcount?" },
    { category: "Visibility", description: "How might we improve insight or decision-making?" },
    { category: "Experience", description: "How might we enhance the journey for users or customers?" },
    { category: "Alignment", description: "How might we reduce friction between teams or systems?" }
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
            className="text-4xl md:text-6xl font-bold mb-6 text-[#30C9CB]"
          >
            The Solution Design Framework
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground mb-8 font-medium"
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
            <Button size="lg" className="text-lg px-8 bg-[#30C9CB] hover:bg-[#30C9CB]/90" asChild>
              <Link to="/contact">
                Apply This Framework
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Framework Purpose */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#30C9CB]">What This Framework Does</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              This framework brings a consistent methodology to uncovering root causes, defining strategic challenges, and engineering high-ROI solutions. It gives teams a shared language and mental model to move from ambiguity to action—fast, clearly, and effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworkUses.map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg hover:shadow-[7px_7px_0px_0px_#F2F2F2] transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#30C9CB] mt-1 flex-shrink-0" />
                  <p className="text-foreground">{use}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#30C9CB]">Framework Overview</h3>
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
                className="bg-[#F8F8F8] p-6 rounded-lg border hover:shadow-[7px_7px_0px_0px_#F2F2F2] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#30C9CB]/10 p-3 rounded-full mr-4">
                    <motion.div 
                      className="text-[#30C9CB]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stage.icon}
                    </motion.div>
                  </div>
                  <div className="bg-[#30C9CB] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {stage.number}
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-3 text-black">{stage.title}</h4>
                <p className="text-black mb-4 text-sm">{stage.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-medium text-sm mb-2 text-black">Key Questions:</h5>
                  <p className="text-black text-sm italic">{stage.keyQuestions}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-sm mb-2 text-black">Output:</h5>
                  <p className="text-black text-sm">{stage.output}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Root Cause Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#30C9CB]">Key Methods for Root Cause Analysis</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical techniques to move from surface-level symptoms to the real drivers underneath.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rootCauseMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg hover:shadow-[7px_7px_0px_0px_#F2F2F2] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#30C9CB]/10 p-2 rounded-lg flex-shrink-0">
                    <div className="text-[#30C9CB]">{method.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">{method.title}</h4>
                    <p className="text-black text-sm">{method.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#30C9CB]">Common Challenge Categories</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To help teams frame challenges consistently, categorize them by what's being impacted.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengeCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8F8F8] p-4 rounded-lg hover:shadow-[7px_7px_0px_0px_#F2F2F2] transition-all duration-300"
              >
                <h4 className="font-semibold text-[#30C9CB] mb-2">{category.category}</h4>
                <p className="text-black text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#30C9CB]">Apply It Across the Business</h3>
            <p className="text-lg text-muted-foreground mb-8">
              This framework is designed to work across growth, strategic, operational, and creative projects. Whether you're designing a new marketing engine, automating internal processes, or tackling a large-scale transformation, this gives you a common structure to align teams, move faster, and deliver better outcomes.
            </p>
            
            <Button size="lg" className="text-lg px-8 bg-[#30C9CB] hover:bg-[#30C9CB]/90" asChild>
              <Link to="/contact">
                Start Your Solution Design Journey
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
