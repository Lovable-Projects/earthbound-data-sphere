
import React from 'react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { Users, MessageCircle, Camera, TrendingUp, Heart } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Social Media Strategy & Planning',
      description: 'Comprehensive social media strategies that align with your brand goals and engage your target audience across all platforms.'
    },
    {
      icon: Camera,
      title: 'Content Creation & Management',
      description: 'High-quality content creation, scheduling, and community management that builds meaningful connections with your audience.'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Advertising',
      description: 'Targeted social media ad campaigns across Facebook, Instagram, LinkedIn, and Twitter that drive engagement and conversions.'
    },
    {
      icon: Heart,
      title: 'Community Building & Engagement',
      description: 'Active community management and engagement strategies that foster brand loyalty and create lasting customer relationships.'
    }
  ];

  return (
    <SolutionTemplate
      category="Core Growth Solutions"
      title="Social Media Marketing & Brand Engagement"
      description="Build meaningful connections and drive engagement through strategic social media marketing that amplifies your brand across all platforms."
      categoryIcon={Users}
      services={services}
      ctaTitle="Ready to Build Your Social Community?"
      ctaDescription="Let's create a social media presence that engages your audience and drives meaningful business results."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
    />
  );
};

export default SocialMedia;
