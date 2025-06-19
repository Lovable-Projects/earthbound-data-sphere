
-- Create a comprehensive blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author TEXT DEFAULT 'Admin',
  category TEXT DEFAULT 'General',
  tags TEXT[], -- Array of tags
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  read_time INTEGER DEFAULT 5, -- Reading time in minutes
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for blog images/media
CREATE TABLE public.blog_media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a service inquiries table for the contact form
CREATE TABLE public.service_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service_type TEXT NOT NULL, -- 'growth', 'strategic', 'both', 'consultation'
  message TEXT NOT NULL,
  phone TEXT,
  budget_range TEXT,
  timeline TEXT,
  status TEXT DEFAULT 'new', -- 'new', 'contacted', 'in_progress', 'closed'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for blog_posts (public read, admin write)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (published = true);

CREATE POLICY "Admins can manage all blog posts" 
  ON public.blog_posts 
  FOR ALL 
  USING (true); -- You can modify this to check for admin role

-- Add RLS policies for blog_media
ALTER TABLE public.blog_media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blog media" 
  ON public.blog_media 
  FOR SELECT 
  USING (true);

CREATE POLICY "Admins can manage blog media" 
  ON public.blog_media 
  FOR ALL 
  USING (true); -- You can modify this to check for admin role

-- Add RLS policies for service_inquiries
ALTER TABLE public.service_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all service inquiries" 
  ON public.service_inquiries 
  FOR SELECT 
  USING (true); -- You can modify this to check for admin role

CREATE POLICY "Anyone can create service inquiries" 
  ON public.service_inquiries 
  FOR INSERT 
  WITH CHECK (true);

-- Insert some sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, featured_image, author, category, tags, published, featured, read_time) VALUES
(
  'The Future of AI in Business: Revolutionary Changes Ahead',
  'future-of-ai-in-business',
  'Discover how artificial intelligence is transforming business operations and what this means for your company.',
  '<h2>Introduction</h2><p>Artificial Intelligence is no longer a futuristic concept—it''s here, and it''s revolutionizing how businesses operate across every industry.</p><h2>Key Areas of AI Impact</h2><h3>1. Customer Service</h3><p>AI-powered chatbots and virtual assistants are transforming customer service by providing 24/7 support.</p><h3>2. Data Analysis</h3><p>Machine learning algorithms can process vast amounts of data in seconds.</p>',
  '/images/TheFutureofAIinBusiness.png',
  'Sarah Johnson',
  'Technology',
  ARRAY['AI', 'Business', 'Technology', 'Automation'],
  true,
  true,
  5
),
(
  'Digital Marketing Strategies That Actually Work in 2025',
  'digital-marketing-strategies-2025',
  'Learn the most effective digital marketing strategies that are driving results for businesses in 2025.',
  '<h2>The Digital Marketing Landscape in 2025</h2><p>Digital marketing continues to evolve rapidly, with new platforms, technologies, and consumer behaviors shaping the way businesses reach their audiences.</p><h2>Top Strategies for 2025</h2><h3>1. Video-First Content Strategy</h3><p>Video content is dominating social media platforms and search results.</p>',
  '/images/DigitalMarketingStrategies.png',
  'Mike Chen',
  'Marketing',
  ARRAY['Digital Marketing', 'Strategy', 'Social Media', 'SEO'],
  true,
  false,
  7
);
