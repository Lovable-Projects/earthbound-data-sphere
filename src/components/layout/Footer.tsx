import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import LogoTeal from '/Logo-Teal.png';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
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
    { name: 'Insights', href: '/insights' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutions = {
    coreGrowth: [
      { name: 'Performance Marketing & Paid Media', href: '/growth-solutions/performance-marketing' },
      { name: 'Social Media Marketing & Brand Engagement', href: '/growth-solutions/social-media-marketing' },
      { name: 'Email Marketing & Marketing Automation', href: '/growth-solutions/email-marketing' },
      { name: 'Creative Solutions', href: '/growth-solutions/creative-solutions' },
      { name: 'Conversion Rate Optimization (CRO)', href: '/growth-solutions/conversion-optimization' },
      { name: 'SEO & Website Growth', href: '/growth-solutions/seo-website-growth' },
      { name: 'Website Solutions', href: '/growth-solutions/website-solutions' },
    ],
    specializedGrowth: [
      { name: 'Deep Dive Audit & Strategic Insights', href: '/specialized-growth-solutions/audit-insights' },
      { name: 'Analytics and Event Tracking Setup', href: '/specialized-growth-solutions/analytics-tracking' },
      { name: 'Lead Generation & Funnel Strategy', href: '/specialized-growth-solutions/lead-generation' },
      { name: 'Brand Architecture & Strategy', href: '/specialized-growth-solutions/brand-strategy' },
      { name: 'Content Strategy & Planning', href: '/specialized-growth-solutions/content-strategy' },
      { name: 'AI-Accelerated Content Production', href: '/specialized-growth-solutions/ai-content' },
      { name: 'Executive Personal Branding', href: '/specialized-growth-solutions/executive-branding' },
    ],
    coreStrategic: [
      { name: 'Process & Workflow Automation', href: '/strategic-solutions/process-automation' },
      { name: 'Digital Systems Enablement', href: '/strategic-solutions/digital-systems-enablement' },
      { name: 'Custom Solution Engineering', href: '/strategic-solutions/custom-solution-engineering' },
      { name: 'Enterprise Evolution & Strategic Transformation', href: '/strategic-solutions/enterprise-evolution' },
    ],
    strategicByFunction: [
      { name: 'Finance Operations', href: '/strategic-solutions/finance-operations' },
      { name: 'Operations', href: '/strategic-solutions/operations' },
      { name: 'Human Resources', href: '/strategic-solutions/human-resources' },
      { name: 'Compliance & Governance', href: '/strategic-solutions/compliance-governance' },
      { name: 'Cross-Functional Leadership', href: '/strategic-solutions/cross-functional-leadership' },
      { name: 'Market Research', href: '/strategic-solutions/market-research' },
      { name: 'Process Optimization', href: '/strategic-solutions/process-optimization' },
    ],
  };

  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-6">
        {/* Main Footer Content */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto pl-2 sm:pl-4">
          {/* Brand & Newsletter - Single column on large screens */}
          <div className="space-y-3">
            <button 
              onClick={handleLogoClick}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Go to homepage"
            >
              <img
                src={LogoTeal}
                alt="Perssonify Logo"
                className="h-8 w-auto"
              />
            </button>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Empowering businesses with growth and strategic solutions worldwide.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-medium">Join our newsletter</p>
              <form onSubmit={handleSubscribe} className="flex">
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-8 text-xs rounded-r-none"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="h-8 px-3 rounded-l-none"
                  disabled={isSubscribing}
                >
                  <Send className="h-3 w-3" />
                </Button>
              </form>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Growth Solutions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider">Growth</h3>
            <ul className="space-y-1">
              {solutions.coreGrowth.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Growth Solutions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider">Specialized</h3>
            <ul className="space-y-1">
              {solutions.specializedGrowth.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Solutions Combined */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider">Strategic</h3>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium text-foreground/80 mb-1">Core</p>
                <ul className="space-y-1">
                  {solutions.coreStrategic.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-tight"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium text-foreground/80 mb-1">By Function</p>
                <ul className="space-y-1">
                  {solutions.strategicByFunction.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-tight"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-muted-foreground">
            <span>contact@perssonify.com</span>
            <span className="hidden sm:inline">•</span>
            <span>+1 (555) 123-4567</span>
            <span className="hidden sm:inline">•</span>
            <span>123 Business Ave, Suite 100, City, State 12345</span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Perssonify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;