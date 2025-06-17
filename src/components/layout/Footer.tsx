import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Sun, Twitter } from "lucide-react"

interface FooterProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [email, setEmail] = React.useState("");
  const [isSubscribing, setIsSubscribing] = React.useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    // Here you would typically make an API call to your newsletter service
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Thanks for subscribing! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutions = {
    growth: [
      { name: 'Digital Marketing', href: '/growth-solutions/digital-marketing' },
      { name: 'SEO Services', href: '/growth-solutions/seo' },
      { name: 'Social Media Management', href: '/growth-solutions/social-media' },
      { name: 'Content Marketing', href: '/growth-solutions/content' },
      { name: 'Email Marketing', href: '/growth-solutions/email' },
    ],
    strategic: [
      { name: 'Business Consulting', href: '/strategic-solutions/consulting' },
      { name: 'Market Research', href: '/strategic-solutions/research' },
      { name: 'Brand Strategy', href: '/strategic-solutions/branding' },
      { name: 'Analytics & Insights', href: '/strategic-solutions/analytics' },
      { name: 'Process Optimization', href: '/strategic-solutions/optimization' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/perssonify', tooltip: 'Follow us on Facebook' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/perssonify', tooltip: 'Follow us on Twitter' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/perssonify', tooltip: 'Follow us on Instagram' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/perssonify', tooltip: 'Connect with us on LinkedIn' },
  ];

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Newsletter Section */}
          <div className="relative md:col-span-3">
            <h2 className="mb-1 text-3xl font-bold tracking-tight">Perssonify</h2>
            <p className="mb-3 text-xs text-muted-foreground">Empowering businesses with growth and strategic solutions worldwide.</p>
            <p className="mb-6 text-sm text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background pr-12 placeholder:text-muted-foreground/50"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 h-7 w-7 rounded-full bg-primary p-0 hover:bg-primary/90"
                  disabled={isSubscribing}
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe to newsletter</span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link to="/privacy" className="underline hover:text-primary">
                  Privacy Policy
                </Link>
              </p>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="block transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions - Side by Side */}
          <div className="md:col-span-5">
            <h3 className="mb-4 text-lg font-semibold">Our Solutions</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Growth Solutions</h4>
                <nav className="space-y-2 text-sm">
                  {solutions.growth.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.href} 
                      className="block transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Strategic Solutions</h4>
                <nav className="space-y-2 text-sm">
                  {solutions.strategic.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.href} 
                      className="block transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Social Links and Theme Toggle */}
          <div className="relative md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <TooltipProvider key={social.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <social.icon className="h-4 w-4" />
                          <span className="sr-only">{social.name}</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <Switch
                id="footer-dark-mode"
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                aria-label="Toggle dark mode"
              />
              <Moon className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="footer-dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Perssonify. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link to="/cookies" className="transition-colors hover:text-primary">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 