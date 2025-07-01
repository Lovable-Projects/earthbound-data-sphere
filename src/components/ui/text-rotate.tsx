
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextRotateProps {
  words?: string[];
  duration?: number;
  className?: string;
}

export default function TextRotate({
  words = ["Growth", "Scale"],
  duration = 2500,
  className = ""
}: TextRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="absolute inset-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible">{words[0]}</span>
    </div>
  );
}
