
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesLogoProps {
  className?: string;
}

export const SparklesLogo = ({ className }: SparklesLogoProps) => {
  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <div className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="relative z-10"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg p-4 border border-primary/20 backdrop-blur-sm">
          <div className="flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">✨ Perssonify</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
