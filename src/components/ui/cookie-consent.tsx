
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';
import { Button } from './button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', 'selected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl"
      >
        <div className="bg-background border border-border rounded-2xl shadow-2xl p-6 backdrop-blur-sm">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Cookie Settings
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                {' '}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  {showDetails ? 'Show less' : 'Learn more'}
                </button>
              </p>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mb-4 space-y-3 text-xs text-muted-foreground overflow-hidden"
                  >
                    <div className="bg-muted/50 rounded-lg p-3">
                      <h4 className="font-semibold text-foreground mb-1">Essential Cookies</h4>
                      <p>Required for basic website functionality. Cannot be disabled.</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <h4 className="font-semibold text-foreground mb-1">Analytics Cookies</h4>
                      <p>Help us understand how visitors interact with our website.</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <h4 className="font-semibold text-foreground mb-1">Marketing Cookies</h4>
                      <p>Used to track visitors across websites for advertising purposes.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={handleAcceptAll}
                  size="sm"
                  className="flex-1 h-9"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  size="sm"
                  className="flex-1 h-9"
                >
                  Reject All
                </Button>
                {showDetails && (
                  <Button
                    onClick={handleAcceptSelected}
                    variant="secondary"
                    size="sm"
                    className="flex-1 h-9"
                  >
                    <Settings className="w-3 h-3 mr-1" />
                    Save Settings
                  </Button>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
