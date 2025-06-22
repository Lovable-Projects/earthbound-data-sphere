
"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FileText } from "lucide-react";

export interface IconContainerProps {
  icon?: React.ReactNode;
  text?: string;
  delay?: number;
  className?: string;
}

export const IconContainer = ({ icon, text, delay, className }: IconContainerProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        delay: delay ? delay : 0,
      }}
      className={twMerge(
        "relative z-50 flex flex-col items-center justify-center space-y-2",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card shadow-inner">
        {icon || <FileText className="h-8 w-8 text-muted-foreground" />}
      </div>
      <div className="hidden rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs font-bold text-muted-foreground">
          {text || `Web Development`}
        </div>
      </div>
    </motion.div>
  );
};
