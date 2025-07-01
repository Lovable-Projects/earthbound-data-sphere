
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface TimelineItem {
  title: string;
  description: string;
  details: string[];
}

interface TimelineSectionProps {
  items: TimelineItem[];
  title: string;
  subtitle?: string;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  items,
  title,
  subtitle
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Smooth progress animation without shifting
  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const timelineElements = document.querySelectorAll('.timeline-item');
      
      timelineElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-full" />
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-8 w-0.5 bg-border h-full" />

          <div className="space-y-12 md:space-y-16">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-1 md:-translate-y-0">
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    activeIndex >= index 
                      ? 'bg-primary border-primary shadow-lg' 
                      : 'bg-background border-border'
                  }`}>
                    {activeIndex >= index && (
                      <CheckCircle className="w-3 h-3 text-white absolute -translate-x-0.5 -translate-y-0.5" />
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:pr-8 md:text-right md:mr-8' 
                    : 'md:pl-8 md:text-left md:ml-8'
                } max-w-md md:max-w-lg`}>
                  <motion.div
                    className={`bg-card border border-border rounded-2xl p-6 sm:p-8 custom-shadow hover:shadow-xl transition-all duration-300 ${
                      activeIndex >= index ? 'scale-105 border-primary/20' : 'hover:scale-102'
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm sm:text-base">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
