
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Mail, 
  Palette, 
  Target, 
  Search, 
  Globe, 
  SquareArrowOutUpRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const CoreGrowthSolutions: React.FC = () => {
  const solutions = [
    {
      title: "Performance Marketing & Paid Media",
      description: "High-ROI ads that convert. Strategic campaign management across platforms to maximize your advertising spend and drive measurable results.",
      icon: TrendingUp,
      link: "/growth-solutions/performance-marketing"
    },
    {
      title: "Social Media Marketing & Brand Engagement",
      description: "Build audience, spark action. Comprehensive social media strategies that create meaningful connections and drive engagement across all platforms.",
      icon: Users,
      link: "/growth-solutions/social-media"
    },
    {
      title: "Email Marketing & Marketing Automation",
      description: "Automate nurture, drive loyalty. Sophisticated email campaigns and automation workflows that convert prospects into loyal customers.",
      icon: Mail,
      link: "/growth-solutions/email-marketing"
    },
    {
      title: "Creative Solutions",
      description: "Visuals that get results. Eye-catching designs and compelling creative assets that capture attention and drive conversions.",
      icon: Palette,
      link: "/growth-solutions/creative-solutions"
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "Test. Refine. Convert more. Data-driven optimization strategies that turn more visitors into customers through systematic testing and improvement.",
      icon: Target,
      link: "/growth-solutions/conversion-optimization"
    },
    {
      title: "Search Engine Optimization (SEO) & Website Growth",
      description: "Rank higher. Grow faster. Comprehensive SEO strategies that improve your search visibility and drive organic traffic growth.",
      icon: Search,
      link: "/growth-solutions/seo"
    },
    {
      title: "Website Solutions",
      description: "Seamless, scalable, conversion-ready. Professional websites built for performance, user experience, and business growth.",
      icon: Globe,
      link: "/growth-solutions/website-solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ThemeBreadcrumb />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-[60vh] py-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Core Growth Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-performance marketing strategy and execution that engineers demand, 
              amplifies brand value, and accelerates customer acquisition.
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
              >
                <Card className="h-full group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <Button asChild className="w-full flex items-center justify-center gap-2">
                      <Link to={solution.link} className="flex items-center justify-center w-full">
                        Learn More
                        <SquareArrowOutUpRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
              Ready to grow faster?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our core growth solutions can transform your business.
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

export default CoreGrowthSolutions;
