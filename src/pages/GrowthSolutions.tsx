import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Mail, Palette, Target, Search, Globe, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WavyBackground } from '@/components/ui/wavy-background';
import StartGrowingForm from '@/components/forms/StartGrowingForm';
import { motion } from 'framer-motion';

const GrowthSolutions: React.FC = () => {
  const coreServices = [
    {
      icon: TrendingUp,
      title: 'Performance Marketing & Paid Media',
      description: 'High-ROI ads that convert. Strategic campaign management across platforms to maximize your advertising spend and drive measurable results.',
      link: '/growth-solutions/performance-marketing'
    },
    {
      icon: Users,
      title: 'Social Media Marketing & Brand Engagement',
      description: 'Build audience, spark action. Comprehensive social media strategies that create meaningful connections and drive engagement across all platforms.',
      link: '/growth-solutions/social-media-marketing'
    },
    {
      icon: Mail,
      title: 'Email Marketing & Marketing Automation',
      description: 'Automate nurture, drive loyalty. Sophisticated email campaigns and automation workflows that convert prospects into loyal customers.',
      link: '/growth-solutions/email-marketing'
    },
    {
      icon: Palette,
      title: 'Creative Solutions',
      description: 'Visuals that get results. Eye-catching designs and compelling creative assets that capture attention and drive conversions.',
      link: '/growth-solutions/creative-solutions'
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Test. Refine. Convert more. Data-driven optimization strategies that turn more visitors into customers through systematic testing and improvement.',
      link: '/growth-solutions/conversion-optimization'
    },
    {
      icon: Search,
      title: 'SEO & Website Growth',
      description: 'Rank higher. Grow faster. Comprehensive SEO strategies that improve your search visibility and drive organic traffic growth.',
      link: '/growth-solutions/seo-website-growth'
    },
    {
      icon: Globe,
      title: 'Website Solutions',
      description: 'Seamless, scalable, conversion-ready. Professional websites built for performance, user experience, and business growth.',
      link: '/growth-solutions/website-solutions'
    }
  ];

  const benefits = [
    'Measurable ROI on every campaign',
    'Data-driven decision making',
    'Scalable growth strategies',
    'Multi-channel integration',
    'Continuous optimization',
    'Transparent reporting'
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
              Growth Solutions
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
              High-performance marketing strategy and execution that engineers demand, 
              amplifies brand value, and accelerates customer acquisition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StartGrowingForm 
                title="Ready to Accelerate Growth?"
                description="Tell us about your growth goals and we'll create a custom strategy for your business."
                buttonText="Start Growing Today"
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/strategic-solutions">View Strategic Solutions</Link>
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
              Our Core Growth Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive marketing solutions designed to drive measurable growth
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
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-primary/5 border-0 custom-shadow group cursor-pointer">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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
                Why Choose Our Growth Solutions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't just create campaigns—we engineer growth systems that scale with your business. 
                Every strategy is built on data, optimized for results, and designed to deliver sustainable growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
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
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-0 custom-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-center text-2xl font-bold text-foreground">
                    Ready to Scale?
                  </CardTitle>
                  <CardDescription className="text-center text-lg">
                    Let's build your growth engine together
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Schedule a consultation to discuss your specific growth goals and challenges. 
                    We'll create a custom strategy that fits your business perfectly.
                  </p>
                  <StartGrowingForm 
                    title="Let's Discuss Your Growth Goals"
                    description="Tell us about your business and growth objectives. We'll create a custom strategy designed specifically for your needs."
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
              Ready to Transform Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's build a growth strategy that delivers measurable results and scales with your ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StartGrowingForm 
                title="Let's Build Your Growth Strategy"
                description="Share your growth goals with us and we'll create a comprehensive strategy tailored to your business needs."
                buttonText="Start Growing Today"
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/strategic-solutions">Explore Strategic Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GrowthSolutions;
