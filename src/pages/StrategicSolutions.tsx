import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Cog, Settings, Database, Shield, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WavyBackground } from '@/components/ui/wavy-background';
import StartGrowingForm from '@/components/forms/StartGrowingForm';
import { motion } from 'framer-motion';

const StrategicSolutions: React.FC = () => {
  const coreServices = [
    {
      icon: Cog,
      title: 'Process & Workflow Automation',
      description: 'Streamline operations with intelligent automation that reduces manual work and increases efficiency across your organization.',
      link: '/strategic-solutions/process-automation'
    },
    {
      icon: Database,
      title: 'Digital Systems Enablement',
      description: 'Integrate and optimize your digital infrastructure to create seamless workflows and better data visibility.',
      link: '/strategic-solutions/digital-systems'
    },
    {
      icon: Settings,
      title: 'Custom Solution Engineering',
      description: 'Tailored technology solutions built specifically for your unique business requirements and challenges.',
      link: '/strategic-solutions/custom-solutions'
    },
    {
      icon: Target,
      title: 'Enterprise Evolution & Strategic Transformation',
      description: 'Guide your organization through strategic changes with comprehensive transformation planning and execution.',
      link: '/strategic-solutions/enterprise-evolution'
    },
    {
      icon: Zap,
      title: 'Cross-Functional Solutions',
      description: 'Bridge gaps between departments with integrated solutions that improve collaboration and efficiency.',
      link: '/strategic-solutions/cross-functional'
    },
    {
      icon: Shield,
      title: 'Compliance & Governance',
      description: 'Ensure your operations meet industry standards with robust compliance frameworks and governance structures.',
      link: '/strategic-solutions/compliance'
    }
  ];

  const benefits = [
    'Operational efficiency improvements',
    'Scalable process frameworks',
    'Technology-driven solutions',
    'Change management expertise',
    'Risk mitigation strategies',
    'Performance measurement systems'
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <WavyBackground className="py-16 md:py-24 mt-8 md:mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
              Strategic Solutions
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
              Technology-enhanced operational scaling that streamlines processes, automates intelligently, 
              and ensures your operations scale without chaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StartGrowingForm 
                title="Ready to Scale Operations?"
                description="Tell us about your operational challenges and we'll design solutions that drive efficiency and growth."
                buttonText="Start Growing Today"
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/growth-solutions">View Growth Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </WavyBackground>

      {/* Core Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Strategic Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to optimize your operations and scale your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/10 to-accent/5 border-0 custom-shadow group cursor-pointer">
                    <CardHeader>
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Strategic Solutions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't just implement technology—we architect operational excellence. 
                Every solution is designed to scale with your business and adapt to changing needs.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-0 custom-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-center text-2xl font-bold text-foreground">
                    Ready to Optimize?
                  </CardTitle>
                  <CardDescription className="text-center text-lg">
                    Let's streamline your operations together
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Schedule a consultation to discuss your operational challenges and opportunities. 
                    We'll design solutions that fit your business perfectly.
                  </p>
                  <StartGrowingForm 
                    title="Let's Optimize Your Operations"
                    description="Tell us about your operational challenges and goals. We'll design strategic solutions tailored to your business needs."
                    buttonText="Schedule Consultation"
                    trigger={
                      <Button size="lg" className="w-full">
                        Get Started Today
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's build operational systems that scale with your ambitions and adapt to changing market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StartGrowingForm 
                title="Let's Build Your Strategic Solutions"
                description="Share your operational challenges with us and we'll create comprehensive solutions designed for your business."
                buttonText="Start Growing Today"
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/growth-solutions">Explore Growth Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategicSolutions;
