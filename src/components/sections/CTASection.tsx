import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a strategic session to discuss your growth challenges",
      action: "Book Now"
    },
    {
      icon: MessageSquare,
      title: "Get Free Audit",
      description: "Receive a comprehensive analysis of your current systems",
      action: "Start Audit"
    },
    {
      icon: Phone,
      title: "Speak with Expert",
      description: "Connect directly with our growth specialists",
      action: "Call Now"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join the 200+ businesses that have accelerated their growth with Perssonify. 
            Let's discuss how we can help you achieve your goals.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button asChild size="lg" variant="secondary" className="group mb-12">
              <Link to="/contact">
                Start Your Transformation Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-white mb-4">
                  {option.title}
                </h3>
                <p className="text-white/80 mb-6">
                  {option.description}
                </p>
              </div>
              <div className="mt-auto">
                <Button
                  variant="secondary"
                  className="w-full min-h-12 flex items-center justify-center whitespace-nowrap"
                >
                  {option.action}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
