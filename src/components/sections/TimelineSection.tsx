
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { CheckCircle, Target, Rocket, TrendingUp } from 'lucide-react';

const TimelineSection: React.FC = () => {
  const timelineData = [
    {
      title: "Discovery",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We start by understanding your business, challenges, and goals through comprehensive analysis and strategic consultation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
              <Target className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm">Goal Analysis</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Identify key objectives</p>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm">Market Research</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Competitive landscape</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Strategy",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Based on our findings, we develop a customized growth strategy tailored to your specific needs and market position.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-2">Custom Strategy Blueprint</h4>
              <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                <li>• Growth marketing plan</li>
                <li>• Process optimization roadmap</li>
                <li>• Technology implementation strategy</li>
                <li>• Performance metrics and KPIs</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Implementation",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We execute the strategy with precision, implementing growth solutions and strategic optimizations across your business.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
              <Rocket className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm">Launch & Deploy</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Execute growth initiatives</p>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
              <TrendingUp className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-semibold text-sm">Monitor & Optimize</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Continuous improvement</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Results",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Track measurable results and scale successful initiatives for sustained growth and long-term success.
          </p>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-lg mb-4 text-green-800 dark:text-green-200">Typical Results</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-2xl text-green-600">350%</span>
                <p className="text-green-700 dark:text-green-300">Average Revenue Growth</p>
              </div>
              <div>
                <span className="font-semibold text-2xl text-blue-600">200+</span>
                <p className="text-blue-700 dark:text-blue-300">Businesses Transformed</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={timelineData} />;
};

export default TimelineSection;
