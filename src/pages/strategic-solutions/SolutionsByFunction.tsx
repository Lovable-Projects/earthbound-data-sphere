import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Users, Settings, Shield, Target, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const SolutionsByFunction: React.FC = () => {
  const functions = [
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'For teams drowning in manual reporting, reconciliation, and expense processing.',
      useCases: 'Invoice ingestion and coding, monthly reconciliation workflows, automated expense approvals, real-time reporting rollups, financial data validation.',
      link: '/strategic-solutions/finance-operations'
    },
    {
      icon: Users,
      title: 'Human Resources',
      description: 'For teams spending too much time on onboarding, offboarding, and compliance workflows.',
      useCases: 'New hire provisioning, offboarding checklists with access revocation, digital policy acknowledgments, compliance reporting automation, internal HR request portals.',
      link: '/strategic-solutions/human-resources'
    },
    {
      icon: Settings,
      title: 'Operations',
      description: 'For approvals, tasks, and dependencies that drag on for weeks instead of days.',
      useCases: 'Multi-step task routing with escalations, operational SLA tracking, automated handoffs between teams, real-time process dashboards, audit-ready activity logs.',
      link: '/strategic-solutions/operations'
    },
    {
      icon: Shield,
      title: 'Compliance & Governance',
      description: 'For teams burdened by high-stakes regulatory controls and documentation.',
      useCases: 'Control tracking and evidence capture, automated policy enforcement checks, sample gathering and packaging for audits, compliance workflows with digital traceability.',
      link: '/strategic-solutions/compliance-governance'
    },
    {
      icon: Target,
      title: 'Cross-Functional Leadership',
      description: 'For teams that need tailored solutions beyond a single department.',
      useCases: 'Org-wide initiative execution, post-merger integration, process reengineering across silos, unified reporting across departments, centralized workflow orchestration.',
      link: '/strategic-solutions/cross-functional-leadership'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ThemeBreadcrumb />
        
        {/* Hero Section */}
        <motion.section 
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center min-h-[60vh] py-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Solutions By Function
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We offer business function focused solutions that meet the needs of specific business units, where bottlenecks most often emerge and where progress matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button asChild size="lg">
                <Link to="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/strategic-solutions" className="flex items-center">
                  View All Strategic Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.section>

        {/* Functions Grid */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {functions.map((func, index) => (
              <motion.div
                key={func.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={func.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/10 to-accent/5 border-0 custom-shadow group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <func.icon className="w-8 h-8 text-accent" />
                        </div>
                        <SquareArrowOutUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {func.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {func.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        <span className="font-semibold text-foreground">Use cases:</span> {func.useCases}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 text-center bg-muted/30 rounded-2xl"
        >
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to turn high-effort functions into high-impact ones?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's make it happen.
            </p>
            <p className="text-muted-foreground mb-8">
              <span className="font-semibold text-foreground">Not listed?</span> Not everything fits neatly into a box. If the work matters and the process is heavy, we'll help you streamline it.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SolutionsByFunction;
