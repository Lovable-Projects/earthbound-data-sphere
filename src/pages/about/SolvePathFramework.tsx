
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Search, Users, Zap, CheckCircle, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SolvePathFramework: React.FC = () => {
  const stages = [
    {
      stage: "Stage 1: Identify Problems & Opportunities",
      purpose: "Identify pain points, inefficiencies, and areas of untapped value",
      questions: "What's slowing us down? Where are we wasting time or resources? Where could we be doing more with what we already have?",
      output: "Clear list of business-relevant problems and opportunities",
      icon: Search
    },
    {
      stage: "Stage 2: Investigate Root Causes & Dependencies",
      purpose: "Surface the true drivers and systemic factors behind what's happening",
      questions: "What's underneath this issue? Who or what is involved in making change possible? Where are the real points of failure?",
      output: "Root cause map with relevant people, tools, and processes",
      icon: Target
    },
    {
      stage: "Stage 3: Group & Prioritize",
      purpose: "Organize insights into focus areas and determine what matters most",
      questions: "What's related? What rises to the top in terms of value, urgency, and feasibility? Are we aligned on what to solve first?",
      output: "Grouped themes, impact/effort map, or scored list",
      icon: BarChart3
    },
    {
      stage: "Stage 4: Translate Into Challenges",
      purpose: "Frame the right problems to solve in a way that guides thinking and action",
      questions: "Is this challenge framed around outcomes? Does it reflect real constraints? Is it broad enough for innovation, but focused enough to act on?",
      output: "Well-formed challenge statements",
      icon: Zap
    },
    {
      stage: "Stage 5: Develop Approaches",
      purpose: "Generate viable, creative paths to address the challenge",
      questions: "What are the possible ways forward? Which ones fit the context, capabilities, and goals?",
      output: "Prioritized list of strategic approaches",
      icon: Users
    },
    {
      stage: "Stage 6: Define Solutions",
      purpose: "Build implementable, validated solutions designed for near-term and long-term ROI",
      questions: "What does success look like? How do we validate early and scale later? Are we designing for flexibility, speed, and sustainability?",
      output: "De-risked, staged solution plans with clear criteria",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            The Solution Design Framework
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Clarity, Structure, and Momentum for Solving What Matters Most
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Solution Design Framework is a structured thinking and execution framework for translating complex business problems and opportunities into actionable, scalable solutions. It's designed for situations where the path forward isn't obvious, where surface-level fixes fall short, and where deeper insight, structured alignment, and rigorous execution are required.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This framework brings a consistent methodology to uncovering root causes, defining strategic challenges, and engineering high-ROI solutions. It gives teams a shared language and mental model to move from ambiguity to action—fast, clearly, and effectively.
            </p>
          </div>
        </motion.section>

        {/* Framework Purpose Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">The Solution Design Framework is used to:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Diagnose and untangle complex, interdependent issues",
                "Identify meaningful opportunities hidden within operations, systems, or customer journeys",
                "Convert loosely defined pain points into structured, high-value solution spaces",
                "Develop and deliver scalable solutions through concept design, validation, and execution"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Framework Overview */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Solution Design Framework Overview</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At its core, the Solution Design Framework answers a simple but essential question: "What's the smartest, clearest way to move from challenge to solution—without wasting time, resources, or momentum?"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-card custom-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold mb-2">{stage.stage}</CardTitle>
                        <p className="text-muted-foreground mb-4">{stage.purpose}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Questions:</h4>
                        <p className="text-muted-foreground text-sm">{stage.questions}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Output:</h4>
                        <p className="text-muted-foreground text-sm">{stage.output}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-muted/30 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Stage 1: Identify Problems & Opportunities</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Pinpoint what's holding the business back—or what could propel it forward.
              </p>
              <p className="text-muted-foreground mb-6">
                The first step in the Solution Design Framework is to define what's worth solving. This means identifying the problems that create measurable friction or risk, and surfacing the opportunities that represent untapped value or strategic upside.
              </p>
              <p className="text-muted-foreground">
                This stage requires moving beyond vague complaints or open-ended goals. It's about surfacing the right inputs to work on—those with enough significance, urgency, or potential return to justify structured attention and resource investment.
              </p>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why It Matters</h2>
              <div className="space-y-4">
                {[
                  "Businesses that fail to evolve become slow, reactive, and strategically irrelevant.",
                  "Clear transformation strategies ensure that change efforts are aligned, resourced, and measurable.",
                  "Perssonify helps reduce the risk of transformation by combining big-picture thinking with execution-focused support.",
                  "We ensure organizations don't just plan to change—they actually move forward with confidence and clarity."
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Apply the Solution Design Framework?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's work together to solve your most complex business challenges with clarity and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/about">
                Back to About
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SolvePathFramework;
