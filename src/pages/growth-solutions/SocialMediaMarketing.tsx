
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  Camera, 
  TrendingUp, 
  Megaphone, 
  Star,
  ArrowLeft 
} from 'lucide-react';

const SocialMediaMarketing: React.FC = () => {
  const keyDeliverables = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Content Strategy & Planning",
      description: "Defining and implementing your brand's voice, visual identity, and engagement roadmap"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Content Creation & Distribution",
      description: "High-impact creatives including image-based posts, GIFs, carousels, and videos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Platform Management",
      description: "Facebook, Instagram, LinkedIn, YouTube, X (Formerly Twitter), TikTok and Google My Business"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Engagement & Community Building",
      description: "Active response management, audience interaction, and social listening"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Paid Social Advertising / Boosting",
      description: "Targeted campaigns that drive awareness, engagement and audience growth that converts"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Influencer & UGC Management (Add-on)",
      description: "Partnerships with relevant influencers for credibility and reach"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Social Media Marketing & Brand Engagement | Perssonify</title>
        <meta 
          name="description" 
          content="Building conversations, communities & conversions through data-driven social media strategies and authentic brand engagement." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/growth-solutions" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Growth Solutions
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Social Media Marketing & Brand Engagement
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Building Conversations, Communities & Conversions
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Social media is more than just content—it's about building authentic relationships and driving audience engagement that leads to action. Our social media strategies are data-driven, creative, and results-focused, ensuring your brand connects with the right audience in meaningful ways.
          </p>
          
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Key Deliverables Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Deliverables</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDeliverables.map((deliverable, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">
                    {deliverable.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{deliverable.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {deliverable.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-8">Outcome Focus</h3>
          <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
            <p className="text-lg text-foreground leading-relaxed">
              <strong>Increased engagement, audience growth, and a stronger brand presence that translates into business success.</strong>
            </p>
          </div>
          
          <div className="mt-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">Ready to Build Your Community?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
