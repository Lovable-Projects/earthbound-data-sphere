import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { motion, AnimatePresence } from 'framer-motion';
import LogoBlack from '/Logo-Black.png';
import LogoWhite from '/Logo-White.png';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Growth Solutions', 
      href: '/growth-solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Digital Marketing', href: '/growth-solutions/digital-marketing' },
        { name: 'SEO Services', href: '/growth-solutions/seo' },
        { name: 'Social Media Management', href: '/growth-solutions/social-media' },
        { name: 'Content Marketing', href: '/growth-solutions/content' },
        { name: 'Email Marketing', href: '/growth-solutions/email' },
      ]
    },
    { 
      name: 'Strategic Solutions', 
      href: '/strategic-solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Business Consulting', href: '/strategic-solutions/consulting' },
        { name: 'Market Research', href: '/strategic-solutions/research' },
        { name: 'Brand Strategy', href: '/strategic-solutions/branding' },
        { name: 'Analytics & Insights', href: '/strategic-solutions/analytics' },
        { name: 'Process Optimization', href: '/strategic-solutions/optimization' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      // If on different page, navigate to home
      navigate('/');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border h-16 w-full"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer"
            aria-label="Go to homepage"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={isDarkMode ? LogoWhite : LogoBlack}
              alt="Perssonify Logo"
              className="h-6 w-auto sm:h-7 object-contain transition-all duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
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
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg overflow-hidden"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-2">
                            {item.dropdownItems?.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4 text-muted-foreground" />
              <Switch
                id="desktop-dark-mode"
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                aria-label="Toggle dark mode"
              />
              <Moon className="w-4 h-4 text-muted-foreground" />
            </div>
            <Button asChild size="sm" className="h-8">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4 text-muted-foreground" />
              <Switch
                id="mobile-dark-mode"
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                aria-label="Toggle dark mode"
              />
              <Moon className="w-4 h-4 text-muted-foreground" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 p-0"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border bg-background"
            >
              <div className="py-2 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === `mobile-${item.name}` ? null : `mobile-${item.name}`
                            )
                          }
                          className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                            isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            className={`w-3 h-3 transition-transform duration-200 ${
                              activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === `mobile-${item.name}` && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-muted/30"
                            >
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="block px-8 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                          isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 py-2">
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
    </motion.header>
  );
};

export default Header;
