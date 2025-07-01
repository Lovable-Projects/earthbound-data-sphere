
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
          >
            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">We use cookies</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We use cookies to enhance your browsing experience and analyze our traffic. 
                      By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button onClick={handleAcceptAll} size="sm" className="flex-1">
                      Accept All
                    </Button>
                    <Button 
                      onClick={() => setShowSettings(true)} 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Settings className="w-3 h-3" />
                      Settings
                    </Button>
                  </div>
                  <Button 
                    onClick={handleRejectAll} 
                    variant="ghost" 
                    size="sm"
                    className="text-xs"
                  >
                    Reject All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Cookie Settings</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSettings(false)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Necessary Cookies */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <Label className="font-medium">Necessary Cookies</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Required for the website to function properly.
                        </p>
                      </div>
                      <div className="opacity-50 pointer-events-none">
                        <Switch checked={true} setChecked={() => {}} />
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <Label className="font-medium">Analytics Cookies</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Help us understand how visitors interact with our website.
                        </p>
                      </div>
                      <Switch 
                        checked={preferences.analytics}
                        setChecked={() => togglePreference('analytics')}
                      />
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <Label className="font-medium">Marketing Cookies</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Used to track visitors across websites for marketing purposes.
                        </p>
                      </div>
                      <Switch 
                        checked={preferences.marketing}
                        setChecked={() => togglePreference('marketing')}
                      />
                    </div>

                    {/* Functional Cookies */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <Label className="font-medium">Functional Cookies</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Enable enhanced functionality and personalization.
                        </p>
                      </div>
                      <Switch 
                        checked={preferences.functional}
                        setChecked={() => togglePreference('functional')}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <Button onClick={handleAcceptSelected} className="flex-1">
                      Save Preferences
                    </Button>
                    <Button onClick={handleAcceptAll} variant="outline" className="flex-1">
                      Accept All
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
