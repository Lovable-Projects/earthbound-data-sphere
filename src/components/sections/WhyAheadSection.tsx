import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhyAheadSection: React.FC = () => {
  const aheadItems = [
    "We're already using AI while they're still Googling what it means",
    "Our strategies work in 2025's reality, not yesterday's playbook",
    "You get the unfair advantage before it becomes fair"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#30C9CB]">Why We're Ahead?</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-black">Everyone Else is Playing Catch-Up</h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {aheadItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg hover:shadow-[7px_7px_0px_0px_#F2F2F2] transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#30C9CB] mt-1 flex-shrink-0" />
                <p className="text-base sm:text-lg text-black">{item}</p>
              </div>
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
            First-mover advantage isn't luck. It's planning.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAheadSection;
