import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    solutionType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      solutionType: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'stefan@perssonify.com',
      action: 'Send us an email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (609) 510-2061',
      action: 'Schedule a call'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'United States',
      action: 'Get directions'
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-foreground mb-6">
              Let's Start Your{' '}
              <span className="text-primary">Growth Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to scale your business? We're here to help you identify the right solutions 
              and create a roadmap for sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="custom-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">Get Started Today</CardTitle>
                  <CardDescription>
                    Tell us about your business and challenges, and we'll show you how we can help.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="solutionType">I'm interested in</Label>
                      <Select onValueChange={(value) => setFormData({...formData, solutionType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select solution type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="growth">Growth Solutions</SelectItem>
                          <SelectItem value="strategic">Strategic Solutions</SelectItem>
                          <SelectItem value="both">Both Growth & Strategic</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your challenges *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your current challenges and what you're looking to achieve..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We typically respond within 24 hours. For urgent matters, 
                  please call us directly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 custom-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                            <p className="text-muted-foreground mb-2">{info.description}</p>
                            <button className="text-sm text-primary hover:underline">
                              {info.action}
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* What to Expect */}
              <Card className="bg-muted/50 border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Initial 30-minute discovery call within 24 hours',
                    'Custom proposal based on your specific needs',
                    'Clear timeline and pricing for your project',
                    'Dedicated team assignment and project kickoff'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
