
-- Create the about_content table for dynamic content management
CREATE TABLE public.about_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'About Us',
  subtitle TEXT NOT NULL DEFAULT 'The right solution at the right time can change everything. We make the right solutions happen right now.',
  description TEXT NOT NULL DEFAULT 'We solve what''s really holding you back—whether it''s growth, operations or both. Born from performance marketing where speed and ROI are non-negotiable, we apply the same relentless focus to optimize entire businesses.',
  journey_title TEXT NOT NULL DEFAULT 'Our Journey So Far',
  journey_subtitle TEXT NOT NULL DEFAULT 'It started with a simple observation: the best campaigns weren''t just creative—they were surgical.',
  journey_description TEXT NOT NULL DEFAULT 'We began in performance marketing, obsessing over every conversion and ROI point. But as we drove growth for ambitious businesses, we kept hitting the same wall—great campaigns throttled by slow processes and operational bottlenecks.',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default content
INSERT INTO public.about_content (
  title, subtitle, description, journey_title, journey_subtitle, journey_description
) VALUES (
  'About Us',
  'The right solution at the right time can change everything. We make the right solutions happen right now.',
  'We solve what''s really holding you back—whether it''s growth, operations or both. Born from performance marketing where speed and ROI are non-negotiable, we apply the same relentless focus to optimize entire businesses.',
  'Our Journey So Far',
  'It started with a simple observation: the best campaigns weren''t just creative—they were surgical.',
  'We began in performance marketing, obsessing over every conversion and ROI point. But as we drove growth for ambitious businesses, we kept hitting the same wall—great campaigns throttled by slow processes and operational bottlenecks.'
);

-- Enable RLS (optional - makes it publicly readable)
ALTER TABLE public.about_content ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access on about_content" 
  ON public.about_content 
  FOR SELECT 
  USING (true);
