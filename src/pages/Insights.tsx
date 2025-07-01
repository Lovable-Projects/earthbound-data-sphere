import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insights: React.FC = () => {
  const insights = [
    {
      id: 1,
      title: "The Future of Digital Marketing",
      description: "How AI and automation are reshaping the marketing landscape",
      category: "Marketing",
      icon: TrendingUp,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      id: 2,
      title: "Building High-Performance Teams",
      description: "Strategies for creating teams that deliver exceptional results",
      category: "Leadership",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      id: 3,
      title: "Strategic Business Growth",
      description: "Proven frameworks for scaling your business effectively",
      category: "Strategy",
      icon: Target,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      id: 4,
      title: "Innovation in Business",
      description: "How to foster innovation and stay ahead of competition",
      category: "Innovation",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Insights | Perssonify - Business Growth Insights</title>
        <meta name="description" content="Discover valuable insights on business growth, digital marketing, and strategic solutions." />
      </Helmet>
      
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Business <span className="text-primary">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover actionable insights and strategies to accelerate your business growth
              </p>
            </motion.div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl ${insight.bgColor} flex items-center justify-center mb-4`}>
                        <insight.icon className={`w-8 h-8 ${insight.color}`} />
                      </div>
                      <Badge variant="secondary" className="w-fit mb-2 bg-muted text-muted-foreground">
                        {insight.category}
                      </Badge>
                      <CardTitle className="text-2xl text-foreground">
                        {insight.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground">
                        {insight.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group text-primary hover:text-primary-foreground hover:bg-primary">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Apply These Insights?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how these strategies can be implemented in your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/blog">
                    Read Our Blog
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Insights;
