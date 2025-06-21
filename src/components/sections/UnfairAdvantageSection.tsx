
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UnfairAdvantageSection: React.FC = () => {
  const unfairAdvantageItems = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "We Think Different",
      description: "Performance marketing brains solving business problems"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "We Move Different", 
      description: "Execution speed that breaks industry standards"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "We Deliver Different",
      description: "Solutions that work today and improve tomorrow"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#30C9CB]">The Unfair Advantage</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {unfairAdvantageItems.map((item, index) => (
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
          <p className="text-lg font-semibold text-black mb-8">
            Fair warning: Your competition won't see this coming
          </p>
          <Button size="lg" className="text-lg px-8 bg-[#30C9CB] hover:bg-[#30C9CB]/90" asChild>
            <Link to="/contact">Get Your Unfair Advantage</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UnfairAdvantageSection;
