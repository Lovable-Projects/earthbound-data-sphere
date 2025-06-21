
import React from 'react';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';
import CookieConsent from '@/components/CookieConsent';
import SocialMeta from '@/components/SocialMeta';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Target, CheckCircle, AlertTriangle, Award, Brain, Rocket, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
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

  const promiseItems = [
    "Measurable growth in 3 months",
    "Clear KPIs from day one", 
    "No results? We help you find someone who can deliver"
  ];

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

  const aheadItems = [
    "We're already using AI while they're still Googling what it means",
    "Our strategies work in 2025's reality, not yesterday's playbook",
    "You get the unfair advantage before it becomes fair"
  ];

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
    <div>
      <SocialMeta />
      <Hero />
      <AboutSection />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Why Choose Us?</h2>
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

      {/* Our Promise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Promise</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-black">90 Days to Growth or We Walk</h3>
            <p className="text-lg mb-8 text-black">Simple deal:</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 mb-12">
            {promiseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-[#30C9CB] flex-shrink-0" />
                <p className="text-lg text-black">{item}</p>
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
            <p className="text-lg font-semibold mb-2 text-black">Why we can promise this: We've never failed to deliver.</p>
            <p className="text-base text-black">Awards bore us. Your growth excites us.</p>
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

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">What We Do?</h2>
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
                <p className="text-black text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-black">
              Simple math: Better systems + Smart growth = More money in your pocket
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We're Ahead Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Why We're Ahead?</h2>
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
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-[#30C9CB] mt-1 flex-shrink-0" />
                <p className="text-lg text-black">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-black">
              First-mover advantage isn't luck. It's planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Unfair Advantage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">The Unfair Advantage</h2>
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

      <TimelineSection />
      <ProcessSection />
      <ContactSection />
      <CookieConsent />
    </div>
  );
};

export default Index;
