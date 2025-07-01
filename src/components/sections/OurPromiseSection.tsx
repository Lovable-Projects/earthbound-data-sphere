import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurPromiseSection: React.FC = () => {
  const promiseItems = [
    "Measurable growth in 3 months",
    "Clear KPIs from day one", 
    "No results? We help you find someone who can deliver"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#30C9CB]">Our Promise</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-black">90 Days to Growth or We Walk</h3>
          <p className="text-base sm:text-lg mb-8 text-black">Simple deal:</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {promiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg hover:shadow-[7px_7px_0px_0px_#F2F2F2] transition-all duration-300"
            >
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#30C9CB] flex-shrink-0" />
                <p className="text-lg text-black">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-base sm:text-lg font-semibold mb-2 text-black">Why we can promise this: We've never failed to deliver.</p>
          <p className="text-base sm:text-lg text-black">Awards bore us. Your growth excites us.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="text-lg px-8 bg-[#30C9CB] hover:bg-[#30C9CB]/90" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPromiseSection;
