
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Cog, Zap, Target, Mail, Search, BarChart, Users, Settings, FileText, Shield, Building } from 'lucide-react';

const StickySolutionsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const activeSection = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const solutions = [
    {
      id: 'growth',
      title: 'Growth Solutions',
      subtitle: 'High-Performance Marketing',
      description: 'You need more customers, more engagement, and more momentum. If your priority is to attract the right audience, convert consistently, and expand your market reach, our Growth Solutions are built for you. We deliver high-performance marketing strategy and execution that engineers demand, amplifies brand value, and accelerates customer acquisition.',
      icon: TrendingUp,
      coreServices: [
        { name: 'Performance Marketing & Paid Media', description: 'High-ROI ads that convert.', icon: Target },
        { name: 'Social Media Marketing & Brand Engagement', description: 'Build audience, spark action.', icon: Users },
        { name: 'Email Marketing & Marketing Automation', description: 'Automate nurture, drive loyalty.', icon: Mail },
        { name: 'Creative Solutions', description: 'Visuals that get results.', icon: Zap },
        { name: 'Conversion Rate Optimization (CRO)', description: 'Test. Refine. Convert more.', icon: BarChart },
        { name: 'Search Engine Optimization (SEO) & Website Growth', description: 'Rank higher. Grow faster.', icon: Search }
      ],
      specializedServices: [
        'Deep Dive Audit & Strategic Insights',
        'Analytics and Event Tracking Setup',
        'Lead Generation & Funnel Strategy',
        'Brand Architecture & Strategy',
        'Content Strategy & Planning',
        'AI-Accelerated Content Production Pipelines',
        'Executive Personal Branding & LinkedIn Marketing'
      ]
    },
    {
      id: 'strategic',
      title: 'Strategic Solutions',
      subtitle: 'Technology-Enhanced Operational Scaling',
      description: 'You need to improve efficiency, automate intelligently, and ensure operations scale without chaos. If you\'re navigating operational bottlenecks, automation gaps, or complex scaling challenges, our Strategic Solutions offer high-ROI tailored strategy and implementations that are built for precision, scalability, and efficiency. From workflow orchestration to platform optimization, we help you execute at the next level with minimal disruption.',
      icon: Cog,
      coreServices: [
        { name: 'Process & Workflow Automation', description: 'Automate execution. Eliminate friction.', icon: Settings },
        { name: 'Digital Systems Enablement', description: 'Optimize platforms. Empower teams.', icon: Target },
        { name: 'Custom Solution Engineering', description: 'Solve complex. Deliver fast.', icon: Zap },
        { name: 'Enterprise Evolution & Strategic Transformation', description: 'Reshape. Scale. Future-proof.', icon: Building }
      ],
      functionalServices: [
        { name: 'Finance', description: 'Automate reporting. Accelerate reconciliation.' },
        { name: 'Human Resources', description: 'Streamline onboarding. Simplify compliance workflows.' },
        { name: 'Operations', description: 'Unblock execution. Speed up critical workflows.' },
        { name: 'Compliance & Governance', description: 'Reduce risk. Ensure audit-ready control.' },
        { name: 'Cross-Functional Leadership', description: 'Align departments. Orchestrate complex delivery.' }
      ]
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen">
          {/* Sticky Left Side - Navigation */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-8"
            >
              Our Solutions
            </motion.h2>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => {
                const SolutionIcon = solution.icon;
                return (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      index === 0 ? 'bg-primary/10 border-primary/30' : 'bg-muted/50 border-border'
                    }`}
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        index === 0 ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        <SolutionIcon className={`w-6 h-6 ${
                          index === 0 ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {solution.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scrolling Right Side - Content */}
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-playfair text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {solution.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {solution.description}
                </p>

                {/* Core Services */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-foreground mb-6">
                    Core {solution.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solution.coreServices.map((service, serviceIndex) => {
                      const ServiceIcon = service.icon;
                      return (
                        <div key={serviceIndex} className="bg-background rounded-xl p-4 border border-border">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                              <ServiceIcon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-foreground text-sm mb-1">
                                {service.name}
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Services */}
                {solution.specializedServices && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">
                      Specialized Growth Solutions
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {solution.specializedServices.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-2 text-sm">
                          <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {solution.functionalServices && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">
                      Solutions By Function
                    </h4>
                    <div className="space-y-3">
                      {solution.functionalServices.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="bg-background rounded-lg p-3 border border-border">
                          <div className="flex items-start space-x-3">
                            <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-semibold text-foreground text-sm">
                                {service.name}
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="pt-6 border-t border-border">
                  <Link 
                    to="/contact"
                    className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors duration-300 hover:underline"
                  >
                    Ready to {index === 0 ? 'grow faster' : 'move faster'}? Let's talk.
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickySolutionsSection;
