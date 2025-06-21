
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Target } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const whyChooseUsItems = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed Without Shortcuts",
      description: "Problems solved in days, not months. No endless meetings. Just results."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Results That Stick", 
      description: "We don't just fix—we are future-proof. Every solution gets better over time."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lean But Lethal",
      description: "Fortune 500 power. Startup speed. Zero bloat."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#30C9CB]">Why Choose Us?</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">We Move While Others Meet</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#F8F8F8] p-8 rounded-lg border hover:shadow-[7px_7px_0px_0px_#F2F2F2] transition-all duration-300"
            >
              <div className="text-[#30C9CB] mb-4 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-black text-center">{item.title}</h4>
              <p className="text-black text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg font-semibold text-black">
            Bottom line: We deliver growth while competitors are still planning.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
