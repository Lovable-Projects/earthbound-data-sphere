import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { motion, AnimatePresence } from 'framer-motion';
import LogoTeal from '/Logo-Teal.png';
import { AnimatedUnderline } from "@/components/ui/animated-underline";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { 
      name: 'Growth Solutions', 
      href: '/growth-solutions',
      hasDropdown: true,
      sections: [
        {
          title: 'Core Growth Solutions',
          href: '/core-growth-solutions',
          items: [
            { name: 'Performance Marketing & Paid Media', href: '/growth-solutions/performance-marketing' },
            { name: 'Social Media Marketing & Brand Engagement', href: '/growth-solutions/social-media-marketing' },
            { name: 'Email Marketing & Marketing Automation', href: '/growth-solutions/email-marketing' },
            { name: 'Creative Solutions', href: '/growth-solutions/creative-solutions' },
            { name: 'Conversion Rate Optimization (CRO)', href: '/growth-solutions/conversion-optimization' },
            { name: 'Search Engine Optimization (SEO) & Website Growth', href: '/growth-solutions/seo-website-growth' },
            { name: 'Website Solutions', href: '/growth-solutions/website-solutions' },
          ]
        },
        {
          title: 'Specialized Growth Solutions',
          href: '/specialized-growth-solutions',
          items: [
            { name: 'Deep Dive Audit & Strategic Insights', href: '/specialized-growth-solutions/audit-insights' },
            { name: 'Analytics and Event Tracking Setup', href: '/specialized-growth-solutions/analytics-tracking' },
            { name: 'Lead Generation & Funnel Strategy', href: '/specialized-growth-solutions/lead-generation' },
            { name: 'Brand Architecture & Strategy', href: '/specialized-growth-solutions/brand-strategy' },
            { name: 'Content Strategy & Planning', href: '/specialized-growth-solutions/content-strategy' },
            { name: 'AI-Accelerated Content Production Pipelines', href: '/specialized-growth-solutions/ai-content' },
            { name: 'Executive Personal Branding & LinkedIn Marketing', href: '/specialized-growth-solutions/executive-branding' },
          ]
        }
      ]
    },
    { 
      name: 'Strategic Solutions', 
      href: '/strategic-solutions',
      hasDropdown: true,
      sections: [
        {
          title: 'Core Strategic Solutions',
          href: '/strategic-solutions',
          items: [
            { name: 'Process & Workflow Automation', href: '/strategic-solutions/process-automation' },
            { name: 'Digital Systems Enablement', href: '/strategic-solutions/digital-systems-enablement' },
            { name: 'Custom Solution Engineering', href: '/strategic-solutions/custom-solution-engineering' },
            { name: 'Enterprise Evolution & Strategic Transformation', href: '/strategic-solutions/enterprise-evolution-strategic-transformation' },
          ]
        },
        {
          title: 'Solutions By Function',
          href: '/strategic-solutions/solutions-by-function',
          items: [
            { name: 'Finance', href: '/strategic-solutions/finance-operations' },
            { name: 'Human Resources', href: '/strategic-solutions/human-resources' },
            { name: 'Operations', href: '/strategic-solutions/operations' },
            { name: 'Compliance & Governance', href: '/strategic-solutions/compliance-governance' },
            { name: 'Cross-Functional Leadership', href: '/strategic-solutions/cross-functional-leadership' },
          ]
        }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  };

  // Clear timeout helper
  const clearDropdownTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Handle click to toggle dropdown
  const handleDropdownClick = (itemName: string) => {
    clearDropdownTimeout();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Handle mouse enter with delay
  const handleMouseEnter = (itemName: string) => {
    clearDropdownTimeout();
    setActiveDropdown(itemName);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    clearDropdownTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      clearDropdownTimeout();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 relative px-2 w-full max-w-6xl mx-auto">
          {/* Left: Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src={LogoTeal}
              alt="Perssonify Logo"
              className="object-contain h-8 w-24 sm:h-10 sm:w-32"
            />
          </button>

          {/* Center: Navigation (desktop only) */}
          <nav className="hidden lg:flex flex-1 items-center justify-center space-x-6" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap py-2 ${
                        isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className={`absolute mt-2 bg-background border border-border rounded-xl shadow-2xl z-[100] overflow-hidden ${
                            item.name === 'Strategic Solutions' 
                              ? 'right-(-100px) transform translate-x-80' 
                              : 'left-1/2 transform -translate-x-1/2'
                          }`}
                          style={{ width: '640px' }}
                          onMouseEnter={clearDropdownTimeout}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Header Section */}
                          <div className="bg-muted/30 px-6 py-4 border-b border-border">
                            <Link
                              to={item.href}
                              className="block hover:text-primary transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <h3 className="font-bold text-lg text-foreground">
                                {item.name}
                              </h3>
                              <p className="text-muted-foreground text-sm mt-1">
                                {item.name === 'Growth Solutions' 
                                  ? 'High-performance marketing strategy and execution'
                                  : 'Technology-enhanced operational scaling solutions'
                                }
                              </p>
                            </Link>
                          </div>
                          
                          {/* Content Grid */}
                          <div className="grid grid-cols-2 gap-0">
                            {item.sections?.map((section, index) => (
                              <div 
                                key={section.title} 
                                className={`p-6 ${index === 0 ? 'border-r border-border' : ''}`}
                              >
                                <Link
                                  to={section.href}
                                  className="block font-semibold text-sm text-foreground hover:text-primary transition-colors mb-4 pb-2 border-b border-border/30"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {section.title}
                                </Link>
                                <div className="space-y-2">
                                  {section.items?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={"py-2"}
                  >
                    <AnimatedUnderline active={isActive(item.href)}>{item.name}</AnimatedUnderline>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Dark mode toggle and Get Started button (desktop only) */}
          <div className="hidden lg:flex items-center space-x-2">
            <Switch checked={isDarkMode} setChecked={toggleDarkMode} />
            <Button asChild size="sm" className="h-8 text-xs px-3">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Hamburger menu button on mobile */}
          <div className="flex items-center lg:hidden ml-auto">
            <Switch checked={isDarkMode} setChecked={toggleDarkMode} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 p-0 ml-1"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed top-[56px] left-1/2 -translate-x-1/2 w-full max-w-sm border border-border bg-background max-h-[70vh] overflow-y-auto rounded-b-xl shadow-2xl z-[100] flex flex-col px-2"
            >
              <div className="py-4 space-y-3 flex flex-col">
                {navigation.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-3 text-sm font-semibold transition-colors hover:text-primary text-foreground bg-muted/30 rounded-lg mx-2"
                        >
                          {item.name}
                        </Link>
                        <div className="border-l-2 border-primary/10 ml-2 pl-2">
                        {item.sections?.map((section) => (
                          <div key={section.title} className="space-y-1 mt-1">
                            <Link
                              to={section.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-3 py-2 text-xs font-medium text-foreground/80 hover:text-primary transition-colors border-l-2 border-primary/20"
                            >
                              {section.title}
                            </Link>
                            <div className="flex flex-col ml-2">
                            {section.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors hover:bg-muted/30 rounded"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                            </div>
                          </div>
                        ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-sm font-medium transition-colors hover:text-primary text-foreground/80 hover:bg-muted/30 rounded-lg mx-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 py-3 border-t border-border/30 mt-4">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
