
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Zap, 
  Target, 
  BarChart3,
  CheckCircle,
  ArrowLeft,
  ArrowRight 
} from 'lucide-react';

const ProcessAutomation: React.FC = () => {
  const approaches = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Automation Readiness Assessment",
      description: "Evaluate current processes to identify repetitive, error-prone, or high-cost tasks suitable for automation."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Modular Workflow Design",
      description: "Build scalable, logic-driven workflows that align with business rules and are easy to adapt over time."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "RPA & AI Integration",
      description: "Automate repetitive steps using bots and intelligent decisioning systems that route tasks based on data inputs."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Seamless Orchestration",
      description: "Coordinate automated and human-in-the-loop steps to ensure end-to-end process flow across platforms, departments, or tools."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Continuous Optimization",
      description: "Monitor automation performance, identify failure points, and iterate to improve throughput and ROI."
    }
  ];

  const whenToApply = [
    "When teams are overwhelmed by manual, repetitive work that increases cost and delays.",
    "When approval workflows or document processing bottlenecks are impacting responsiveness.",
    "When operational complexity is slowing down critical functions like finance, customer service, or compliance.",
    "When organizations need to scale without adding headcount or increasing error rates."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Process & Workflow Automation | Perssonify</title>
        <meta 
          name="description" 
          content="Streamline execution across teams with intelligent automation. Expert process and workflow automation services." 
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
              to="/strategic-solutions" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Strategic Solutions
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Process & Workflow Automation
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
          >
            Streamlining Execution Across Teams with Intelligent Automation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Process & Workflow Automation focuses on reducing operational friction by designing end-to-end workflows that integrate Robotic Process Automation (RPA), AI, and orchestration tools. The goal is to eliminate manual work, accelerate execution, and improve reliability—without requiring full system overhauls.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Automate Your Processes
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Approach
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
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
                    {approach.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold">{approach.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Apply Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            When to Apply
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whenToApply.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg border bg-card"
              >
                <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Ready to Automate?
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProcessAutomation;
