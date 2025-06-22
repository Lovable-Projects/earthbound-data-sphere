
"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FileText } from "lucide-react";
import { Radar } from "./radar";

export const IconContainer = ({ icon, text, delay }: any) => {
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
        "relative z-50 flex flex-col items-center justify-center space-y-2"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 shadow-inner">
        {icon || <FileText className="h-8 w-8 text-slate-600" />}
      </div>
      <div className="hidden rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs font-bold text-slate-400">
          {text || `Web Development`}
        </div>
      </div>
    </motion.div>
  );
};

export const RadarPreview = () => {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="Growth Solutions" delay={0.2} />
          <IconContainer
            delay={0.4}
            text="Strategic Solutions"
            icon={<FileText className="h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            text="Execution Model"
            delay={0.3}
            icon={<FileText className="h-8 w-8 text-slate-600" />}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer
            text="SolvePath Framework"
            delay={0.5}
            icon={<FileText className="h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            text="Strategic Transformation"
            icon={<FileText className="h-8 w-8 text-slate-600" />}
            delay={0.8}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer
            delay={0.6}
            text="Performance Marketing"
            icon={<FileText className="h-8 w-8 text-slate-600" />}
          />
          <IconContainer
            delay={0.7}
            text="Process Automation"
            icon={<FileText className="h-8 w-8 text-slate-600" />}
          />
        </div>
      </div>

      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
};
