
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, ArrowLeft, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  content: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business: Revolutionary Changes Ahead',
    date: 'December 15, 2024',
    author: 'Sarah Johnson',
    category: 'Technology',
    excerpt: 'Discover how artificial intelligence is transforming business operations and what this means for your company.',
    image: '/images/blog/ai-business.jpg',
    readTime: '5 min read',
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is no longer a futuristic concept—it's here, and it's revolutionizing how businesses operate across every industry. From automating routine tasks to providing deep insights through data analysis, AI is becoming an indispensable tool for companies looking to stay competitive.</p>
      
      <h2>Key Areas of AI Impact</h2>
      
      <h3>1. Customer Service</h3>
      <p>AI-powered chatbots and virtual assistants are transforming customer service by providing 24/7 support, instant responses, and personalized interactions. Companies like Amazon and Microsoft have seen significant improvements in customer satisfaction through AI implementation.</p>
      
      <h3>2. Data Analysis and Insights</h3>
      <p>Machine learning algorithms can process vast amounts of data in seconds, identifying patterns and trends that would take humans weeks to discover. This capability is invaluable for making data-driven decisions.</p>
      
      <h3>3. Automation of Routine Tasks</h3>
      <p>From invoice processing to inventory management, AI is automating repetitive tasks, freeing up human employees to focus on more strategic, creative work.</p>
      
      <h2>Getting Started with AI</h2>
      <p>If you're considering implementing AI in your business, start small. Identify one area where AI could make an immediate impact, such as customer service or data analysis. Many AI tools are now accessible to businesses of all sizes, with user-friendly interfaces that don't require extensive technical expertise.</p>
      
      <h2>Conclusion</h2>
      <p>The future of business is intertwined with AI. Companies that embrace this technology now will have a significant advantage over those that wait. The key is to start experimenting and learning how AI can specifically benefit your business model.</p>
    `,
    tags: ['AI', 'Business', 'Technology', 'Automation']
  },
  {
    id: '2',
    title: 'Digital Marketing Strategies That Actually Work in 2024',
    date: 'December 10, 2024',
    author: 'Mike Chen',
    category: 'Marketing',
    excerpt: 'Learn the most effective digital marketing strategies that are driving results for businesses in 2024.',
    image: '/images/blog/digital-marketing.jpg',
    readTime: '7 min read',
    content: `
      <h2>The Digital Marketing Landscape in 2024</h2>
      <p>Digital marketing continues to evolve rapidly, with new platforms, technologies, and consumer behaviors shaping the way businesses reach their audiences. What worked five years ago may not be effective today.</p>
      
      <h2>Top Strategies for 2024</h2>
      
      <h3>1. Video-First Content Strategy</h3>
      <p>Video content is dominating social media platforms and search results. Short-form videos on platforms like TikTok and Instagram Reels are particularly effective for engaging younger audiences.</p>
      
      <h3>2. Personalization at Scale</h3>
      <p>Consumers expect personalized experiences. Use data analytics to create targeted content and offers that speak directly to individual customer needs and preferences.</p>
      
      <h3>3. Voice Search Optimization</h3>
      <p>With the rise of smart speakers and voice assistants, optimizing for voice search is becoming crucial. Focus on natural language and question-based keywords.</p>
      
      <h2>Measuring Success</h2>
      <p>Track metrics that matter to your business goals. While vanity metrics like followers are nice, focus on conversion rates, customer acquisition costs, and lifetime value.</p>
      
      <h2>Conclusion</h2>
      <p>Success in digital marketing requires staying current with trends while maintaining a focus on your core audience. Test new strategies, measure results, and adapt quickly to changes in the digital landscape.</p>
    `,
    tags: ['Digital Marketing', 'Strategy', 'Social Media', 'SEO']
  },
  {
    id: '3',
    title: 'Building a Remote Team: Best Practices for 2024',
    date: 'December 5, 2024',
    author: 'Emily Rodriguez',
    category: 'Business',
    excerpt: 'Essential strategies for building and managing successful remote teams in the modern workplace.',
    image: '/images/blog/remote-team.jpg',
    readTime: '6 min read',
    content: `
      <h2>The Remote Work Revolution</h2>
      <p>Remote work has transformed from a temporary solution to a permanent fixture in the business world. Building effective remote teams requires new approaches to hiring, communication, and management.</p>
      
      <h2>Key Strategies for Remote Team Success</h2>
      
      <h3>1. Clear Communication Protocols</h3>
      <p>Establish clear guidelines for when and how team members should communicate. Use tools like Slack for quick messages, Zoom for meetings, and project management tools for task coordination.</p>
      
      <h3>2. Results-Oriented Management</h3>
      <p>Focus on outcomes rather than hours worked. Set clear expectations and deadlines, then trust your team to deliver results in their own way.</p>
      
      <h3>3. Virtual Team Building</h3>
      <p>Regular virtual team building activities help maintain company culture and team cohesion. Consider virtual coffee chats, online games, or collaborative projects.</p>
      
      <h2>Technology Stack Essentials</h2>
      <p>Invest in reliable technology tools that facilitate collaboration, communication, and productivity. This includes video conferencing, project management, file sharing, and time tracking tools.</p>
      
      <h2>Conclusion</h2>
      <p>Remote teams can be incredibly productive and innovative when managed effectively. The key is to embrace the unique advantages of remote work while addressing its challenges through thoughtful processes and technology.</p>
    `,
    tags: ['Remote Work', 'Team Management', 'Productivity', 'Leadership']
  }
];

const Blog: React.FC = () => {
  const { id } = useParams();
  const currentPost = blogPosts.find(post => post.id === id);

  if (id && !currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {id && currentPost ? (
          // Blog Post Detail View
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={currentPost.image}
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{currentPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{currentPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentPost.readTime}</span>
                  </div>
                  <Badge variant="secondary">{currentPost.category}</Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {currentPost.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />
              </div>
            </motion.article>
          </div>
        ) : (
          // Blog List View
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay updated with our latest insights, trends, and expert advice on business growth, technology, and digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button className="w-full group-hover:bg-primary/90 transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
