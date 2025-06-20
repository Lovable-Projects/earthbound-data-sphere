
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends and Predictions for 2024',
    slug: 'future-ai-business-2024',
    excerpt: 'Explore how artificial intelligence is reshaping business operations and what to expect in the coming year.',
    content: `
      <p>Artificial Intelligence continues to revolutionize how businesses operate, from customer service automation to predictive analytics. In 2024, we're seeing unprecedented adoption rates across industries.</p>
      
      <h2>Key AI Trends to Watch</h2>
      <p>The integration of AI into everyday business processes is no longer a luxury—it's becoming a necessity for competitive advantage.</p>
      
      <h3>1. Generative AI in Content Creation</h3>
      <p>Businesses are leveraging generative AI for content marketing, product descriptions, and customer communications.</p>
      
      <h3>2. Predictive Analytics for Decision Making</h3>
      <p>AI-powered analytics are helping businesses make data-driven decisions faster than ever before.</p>
      
      <h3>3. Automated Customer Service</h3>
      <p>Chatbots and virtual assistants are becoming more sophisticated, providing better customer experiences.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Success with AI requires a strategic approach, proper training, and gradual implementation.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    image: '/images/TheFutureofAIinBusiness.png',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Digital Marketing Strategies That Actually Work in 2024',
    slug: 'digital-marketing-strategies-2024',
    excerpt: 'Discover proven digital marketing tactics that are driving real results for businesses today.',
    content: `
      <p>Digital marketing has evolved significantly, and what worked yesterday might not work today. Here's what's actually driving results in 2024.</p>
      
      <h2>The New Digital Marketing Landscape</h2>
      <p>Consumer behavior has shifted, and successful businesses are adapting their strategies accordingly.</p>
      
      <h3>1. Personalization at Scale</h3>
      <p>Using data to create personalized experiences for thousands of customers simultaneously.</p>
      
      <h3>2. Video-First Content Strategy</h3>
      <p>Short-form video content is dominating social media and driving engagement.</p>
      
      <h3>3. Community Building</h3>
      <p>Creating genuine communities around your brand leads to higher customer lifetime value.</p>
      
      <h2>Measuring Success</h2>
      <p>Focus on metrics that matter: customer acquisition cost, lifetime value, and retention rates.</p>
    `,
    author: 'Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    image: '/images/DigitalMarketingStrategies.png',
    category: 'Marketing'
  },
  {
    id: 3,
    title: 'Building Remote Teams That Actually Perform',
    slug: 'building-remote-teams-performance',
    excerpt: 'Learn the secrets to creating high-performing remote teams that deliver exceptional results.',
    content: `
      <p>Remote work is here to stay, but building truly effective remote teams requires intentional strategies and tools.</p>
      
      <h2>The Remote Work Revolution</h2>
      <p>Companies that master remote team management gain access to global talent and increased productivity.</p>
      
      <h3>1. Clear Communication Protocols</h3>
      <p>Establishing clear communication channels and expectations is crucial for remote team success.</p>
      
      <h3>2. Trust-Based Management</h3>
      <p>Moving from time-based to results-based performance evaluation.</p>
      
      <h3>3. Virtual Team Building</h3>
      <p>Creating meaningful connections between team members who may never meet in person.</p>
      
      <h2>Tools and Technologies</h2>
      <p>The right tools can make or break remote team productivity and collaboration.</p>
    `,
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    readTime: '7 min read',
    image: '/images/RemoteTeam.png',
    category: 'Management'
  },
  {
    id: 4,
    title: 'Data Analytics: Turning Numbers into Actionable Insights',
    slug: 'data-analytics-actionable-insights',
    excerpt: 'Transform your business data into strategic advantages with proven analytics methodologies.',
    content: `
      <p>Data is everywhere, but turning that data into actionable insights that drive business growth requires the right approach and tools.</p>
      
      <h2>The Data-Driven Business</h2>
      <p>Companies that effectively use data analytics see 5-6% higher productivity and profitability.</p>
      
      <h3>1. Data Collection Strategy</h3>
      <p>Identifying which data points actually matter for your business objectives.</p>
      
      <h3>2. Visualization and Reporting</h3>
      <p>Creating dashboards that tell a story and drive action.</p>
      
      <h3>3. Predictive Modeling</h3>
      <p>Using historical data to predict future trends and behaviors.</p>
      
      <h2>Implementation Best Practices</h2>
      <p>Start small, focus on specific use cases, and gradually expand your analytics capabilities.</p>
    `,
    author: 'David Wilson',
    date: '2023-12-28',
    readTime: '9 min read',
    image: '/images/DataAnalytics.png',
    category: 'Analytics'
  },
  {
    id: 5,
    title: 'E-commerce Growth Hacks for Modern Businesses',
    slug: 'ecommerce-growth-hacks',
    excerpt: 'Proven strategies to accelerate your e-commerce growth and increase online revenue.',
    content: `
      <p>E-commerce continues to grow, but competition is fierce. These growth hacks can give you the edge you need.</p>
      
      <h2>The E-commerce Opportunity</h2>
      <p>Online retail sales are projected to reach $8 trillion by 2026, creating massive opportunities.</p>
      
      <h3>1. Conversion Rate Optimization</h3>
      <p>Small improvements in conversion rates can lead to significant revenue increases.</p>
      
      <h3>2. Customer Journey Mapping</h3>
      <p>Understanding every touchpoint in your customer's journey to purchase.</p>
      
      <h3>3. Retention Marketing</h3>
      <p>It's 5x cheaper to retain customers than acquire new ones.</p>
      
      <h2>Technology Stack</h2>
      <p>Choosing the right tools and platforms can automate growth and improve efficiency.</p>
    `,
    author: 'Lisa Thompson',
    date: '2023-12-20',
    readTime: '5 min read',
    image: '/images/E-commerce.png',
    category: 'E-commerce'
  },
  {
    id: 6,
    title: 'Cybersecurity Essentials for Growing Businesses',
    slug: 'cybersecurity-essentials-growing-businesses',
    excerpt: 'Protect your business from cyber threats with these essential security measures and best practices.',
    content: `
      <p>As businesses grow and digitize, cybersecurity becomes increasingly critical. Here's how to protect your business.</p>
      
      <h2>The Cybersecurity Landscape</h2>
      <p>Cyber attacks on small and medium businesses have increased by 300% in the past year.</p>
      
      <h3>1. Multi-Factor Authentication</h3>
      <p>Adding extra layers of security to prevent unauthorized access.</p>
      
      <h3>2. Employee Training</h3>
      <p>Your employees are your first line of defense against cyber threats.</p>
      
      <h3>3. Regular Security Audits</h3>
      <p>Identifying vulnerabilities before attackers do.</p>
      
      <h2>Incident Response Planning</h2>
      <p>Having a plan for when things go wrong can minimize damage and recovery time.</p>
    `,
    author: 'Robert Martinez',
    date: '2023-12-15',
    readTime: '6 min read',
    image: '/images/Cyber.png',
    category: 'Security'
  }
];

const Blog: React.FC = () => {
  const { slug } = useParams();
  
  // If slug is provided, show individual blog post
  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    
    if (!post) {
      return (
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <>
        <Helmet>
          <title>{post.title} | Perssonify Blog</title>
          <meta name="description" content={post.excerpt} />
        </Helmet>
        
        <article className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </>
    );
  }

  // Show blog listing
  return (
    <>
      <Helmet>
        <title>Blog | Perssonify - Growth & Strategic Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on business growth, digital marketing, and strategic solutions from Perssonify." />
      </Helmet>
      
      <div className="bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Latest Insights & <span className="text-primary">Strategies</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay ahead with expert insights on business growth, digital marketing, and strategic solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="mt-4 block">
                        <Button variant="outline" className="w-full">
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
