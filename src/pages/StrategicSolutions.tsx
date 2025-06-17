import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Cog, Target, ArrowRight, Zap, Users, DollarSign, Shield, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const StrategicSolutions: React.FC = () => {
  const coreStrategicSolutions = [
    {
      icon: Cog,
      title: 'Process & Workflow Automation',
      description: 'Designing and implementing seamless workflows that combine Robotic Process Automation (RPA), AI, and orchestration to optimize execution across teams.',
      useCases: 'approvals streamlining, document processing, task routing, data reconciliation'
    },
    {
      icon: Settings,
      title: 'Digital Systems Enablement',
      description: 'Optimizing platform strategy and enhancing workforce effectiveness with AI-powered tools, system integration, and automation frameworks.',
      useCases: 'CRM/ERP integration, platform optimization, AI copilots, digital dashboards'
    },
    {
      icon: Target,
      title: 'Custom Solution Engineering',
      description: 'Diagnosing and designing purpose-built solutions high-complexity, high-impact challenges that require rapid scoping, structured planning, and tailored execution.',
      useCases: 'cross-functional workflows, legacy system extensions, urgent automation needs'
    },
    {
      icon: Building,
      title: 'Enterprise Evolution & Strategic Transformation',
      description: 'Supporting organizational structural shifts with business model restructuring, cross-functional collaboration optimization, and digital capability upgrades.',
      useCases: 'post-merger integration, operating model redesign, scaling functions globally'
    }
  ];

  const functionalSolutions = [
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'For teams drowning in manual reporting, reconciliation, and expense processing.',
      useCases: 'invoice ingestion and coding, monthly reconciliation workflows, automated expense approvals, real-time reporting rollups, financial data validation'
    },
    {
      icon: Users,
      title: 'Human Resources',
      description: 'For teams spending too much time on onboarding, offboarding, and compliance workflows.',
      useCases: 'new hire provisioning, offboarding checklists with access revocation, digital policy acknowledgments, compliance reporting automation, internal HR request portals'
    },
    {
      icon: Cog,
      title: 'Operations',
      description: 'For approvals, tasks, and dependencies that drag on for weeks instead of days.',
      useCases: 'multi-step task routing with escalations, operational SLA tracking, automated handoffs between teams, real-time process dashboards, audit-ready activity logs'
    },
    {
      icon: Shield,
      title: 'Compliance & Governance',
      description: 'For teams burdened by high-stakes regulatory controls and documentation.',
      useCases: 'control tracking and evidence capture, automated policy enforcement checks, sample gathering and packaging for audits, compliance workflows with digital traceability'
    },
    {
      icon: Target,
      title: 'Cross-Functional Leadership',
      description: 'For teams that need tailored solutions beyond a single department.',
      useCases: 'org-wide initiative execution, post-merger integration, process reengineering across silos, unified reporting across departments, centralized workflow orchestration'
    }
  ];

  const criteria = [
    'Proven experience delivering solutions at a similar scale and complexity',
    'Verifiable references from organizations who can speak to real outcomes',
    'Clear alignment with your objectives and operating environment',
    'Demonstrated ability to meet or exceed ROI and quality expectations'
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <Settings className="w-4 h-4 mr-2" />
              Technology-Enhanced Operational Scaling
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-foreground mb-6">
              Strategic Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              High-Impact, High-ROI Solutions for High-Stakes Challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Transform Your Operations
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/growth-solutions">
                  Growth Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Complexity Simplified
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As businesses grow, their operations get more complex—and that complexity can quietly slow everything down. 
              What once worked starts to strain under scale. We identify where execution is breaking down, then design 
              and deliver with vetted solution provider partners that eliminate friction, unlock capacity, and accelerate achievement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pt-24 pb-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Our Structured Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Perssonify works with business leaders, operators, and technology stakeholders to drive results 
              through a structured, collaborative model. We take ownership and responsibility to deliver the 
              target outcome on time and under budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Uncover</h3>
                  <p className="text-muted-foreground text-sm">
                    Root causes of bottlenecks, scalability issues, and missed opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Define</h3>
                  <p className="text-muted-foreground text-sm">
                    The solution space, validating what needs to be improved, built, or removed
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Match</h3>
                  <p className="text-muted-foreground text-sm">
                    The right solution providers, tools, and technologies to the specific challenge
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Orchestrate</h3>
                  <p className="text-muted-foreground text-sm">
                    The entire journey, from planning and proof-of-concept to implementation and ongoing refinement
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Provider Criteria */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Our Quality Standards
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Every solution provider must meet four criteria:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {criteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-left">{criterion}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Strategic Solutions */}
      <section className="pt-24 pb-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Core Strategic Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              For businesses looking to streamline execution, reduce inefficiencies, and scale smarter, 
              our Core Strategic Solutions focus on intelligent automation, digital system enablement, 
              and enterprise-ready transformation to unlock operational capacity and long-term efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreStrategicSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-background custom-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-playfair">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{solution.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Use cases:</p>
                      <p className="text-sm text-muted-foreground">{solution.useCases}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg font-semibold text-foreground mb-4">
              Looking for tighter workflows, smarter automation, and systems that won't slow you down?
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Let's Streamline Your Business
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Function */}
      <section className="pt-24 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Solutions By Function
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We offer business function focused solutions that meet the needs of specific business units, 
              where bottlenecks most often emerge and where progress matters most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {functionalSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-primary/10 to-primary/5 custom-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-playfair">{solution.title}</CardTitle>
                    <CardDescription className="text-base">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Use cases:</p>
                      <p className="text-sm text-muted-foreground">{solution.useCases}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-lg font-semibold text-foreground mb-4">
              Ready to turn high-effort functions into high-impact ones?
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Let's Make It Happen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Not listed? Not everything fits neatly into a box. If the work matters and the process is heavy, we'll help you streamline it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Ready to Scale Without Chaos?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our Strategic Solutions can help you streamline operations, 
              automate intelligently, and scale with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Transform Your Operations
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/growth-solutions">
                  View Growth Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategicSolutions;
