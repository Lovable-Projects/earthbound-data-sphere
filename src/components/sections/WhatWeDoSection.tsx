import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDoSection: React.FC = () => {
  const whatWeDoItems = [
    {
      title: "Growth Track",
      description: "Get more customers, make more sales"
    },
    {
      title: "Strategic Track", 
      description: "Fix what's broken, build what works"
    },
    {
      title: "The Result",
      description: "Profit without the pain"
    }
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#30C9CB]">What We Do?</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-black">We Make You Money. Fast.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {whatWeDoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#F8F8F8] p-6 rounded-lg border hover:shadow-[7px_7px_0px_0px_#F2F2F2] transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-3 text-black text-center">{item.title}:</h4>
              <p className="text-base sm:text-lg text-black text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg font-semibold text-black">
            Simple math: Better systems + Smart growth = More money in your pocket
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
