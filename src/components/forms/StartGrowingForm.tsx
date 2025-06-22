
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Zap, Send } from 'lucide-react';

interface StartGrowingFormProps {
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  buttonText?: string;
}

const StartGrowingForm: React.FC<StartGrowingFormProps> = ({
  trigger,
  title = "Start Growing Today",
  description = "Tell us about your business goals and we'll create a custom strategy for you.",
  buttonText = "Start Growing Today"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goals: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    setIsOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      goals: '',
      budget: '',
      timeline: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg">
            {buttonText}
            <Zap className="w-4 h-4 ml-2" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="goals">What are your main goals? *</Label>
            <Textarea
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleInputChange}
              placeholder="Tell us about your growth objectives, challenges, and what you'd like to achieve..."
              className="min-h-[80px]"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Monthly Budget Range</Label>
              <Input
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="e.g., $5,000 - $10,000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline</Label>
              <Input
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                placeholder="e.g., 3-6 months"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StartGrowingForm;
