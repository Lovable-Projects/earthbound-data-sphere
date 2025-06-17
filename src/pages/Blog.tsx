import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, TrendingUp, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Ask the AI: How to Start a Business in 2025?',
    date: 'June 20, 2025',
    author: 'AI Assistant',
    category: 'Business',
    excerpt: 'AI answers your top questions about launching a business in the modern era.',
    image: '/images/blog/ai-business.jpg',
    content: `Starting a business in 2025 is easier than ever with AI tools. Here are the steps you should follow...`,
  },
  {
    title: 'Ask the AI: Best Coding Languages to Learn',
    date: 'June 18, 2025',
    author: 'AI Assistant',
    category: 'Technology',
    excerpt: 'Which programming languages should you focus on? AI weighs in.',
    image: '/images/blog/ai-coding.jpg',
    content: `The best languages to learn in 2025 are Python, JavaScript, and Rust. Here's why...`,
  },
  {
    title: 'Ask the AI: How to Stay Productive Remotely',
    date: 'June 15, 2025',
    author: 'AI Assistant',
    category: 'Productivity',
    excerpt: 'Remote work is here to stay. AI shares top productivity hacks.',
    image: '/images/blog/ai-remote.jpg',
    content: `To stay productive remotely, use time-blocking, regular breaks, and AI-powered task managers...`,
  },
  {
    title: 'Ask the AI: The Future of Education',
    date: 'June 13, 2025',
    author: 'AI Assistant',
    category: 'Education',
    excerpt: 'How will AI change the way we learn? Find out here.',
    image: '/images/blog/ai-education.jpg',
    content: `AI will personalize learning, automate grading, and make education more accessible...`,
  },
  {
    title: 'Ask the AI: Health & Wellness Tips',
    date: 'June 11, 2025',
    author: 'AI Assistant',
    category: 'Health',
    excerpt: 'AI answers your health and wellness questions for a better life.',
    image: '/images/blog/ai-health.jpg',
    content: `For better health, use AI apps to track your habits, get personalized advice, and stay motivated...`,
  },
  {
    title: 'Ask the AI: How to Invest Wisely',
    date: 'June 9, 2025',
    author: 'AI Assistant',
    category: 'Finance',
    excerpt: 'AI shares smart investment strategies for 2025.',
    image: '/images/blog/ai-invest.jpg',
    content: `Diversify your portfolio, use robo-advisors, and stay informed with AI-powered news feeds...`,
  },
  {
    title: 'Ask the AI: Travel in the Digital Age',
    date: 'June 7, 2025',
    author: 'AI Assistant',
    category: 'Travel',
    excerpt: 'How to travel smarter with AI tools and apps.',
    image: '/images/blog/ai-travel.jpg',
    content: `AI can help you find the best deals, plan itineraries, and translate languages on the go...`,
  },
  {
    title: 'Ask the AI: Building Your Personal Brand',
    date: 'June 5, 2025',
    author: 'AI Assistant',
    category: 'Branding',
    excerpt: 'Tips from AI on growing your influence online.',
    image: '/images/blog/ai-brand.jpg',
    content: `Create valuable content, engage with your audience, and use AI analytics to refine your strategy...`,
  },
  {
    title: 'Ask the AI: Smart Home Gadgets for 2025',
    date: 'June 3, 2025',
    author: 'AI Assistant',
    category: 'Smart Home',
    excerpt: 'AI reviews the latest smart home tech and trends.',
    image: '/images/blog/ai-smarthome.jpg',
    content: `The best smart home gadgets in 2025 include AI-powered assistants, security systems, and energy savers...`,
  },
  {
    title: 'Ask the AI: How to Learn Anything Faster',
    date: 'June 1, 2025',
    author: 'AI Assistant',
    category: 'Learning',
    excerpt: "AI 's guide to mastering new skills quickly and efficiently.",
    image: '/images/blog/ai-learn.jpg',
    content: `Use spaced repetition, active recall, and AI-driven learning platforms to accelerate your progress...`,
  },
];

const Blog: React.FC = () => {
  const { id } = useParams();
  const currentPost = blogPosts[parseInt(id || '')];

  if (id && !currentPost) {
    return <div className="container mx-auto px-4 py-8 text-center">Blog post not found</div>;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {id ? (
          // Blog Post Detail View
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{currentPost.date}</span>
                  <User className="w-4 h-4" />
                  <span>{currentPost.author}</span>
                  <Tag className="w-4 h-4" />
                  <span>{currentPost.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentPost.title}
                </h1>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
                </div>
              </div>
            </motion.div>
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
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay updated with our latest insights, trends, and expert advice on digital marketing and business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <Tag className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${index}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
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