
"use client";
import React from "react";
import { FileText, Target, Users, Zap, Search, Settings, TrendingUp } from "lucide-react";
import { IconContainer } from "./icon-container";
import { Radar } from "./radar";

export const RadarPreview = () => {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-visible px-4">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer 
            text="Growth Solutions" 
            delay={0.2} 
            icon={<TrendingUp className="h-8 w-8 text-primary" />}
          />
          <IconContainer
            delay={0.4}
            text="Strategic Solutions"
            icon={<Target className="h-8 w-8 text-accent" />}
          />
          <IconContainer
            text="Execution Model"
            delay={0.3}
            icon={<Settings className="h-8 w-8 text-muted-foreground" />}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer
            text="SolvePath Framework"
            delay={0.5}
            icon={<Zap className="h-8 w-8 text-primary" />}
          />
          <IconContainer
            text="Strategic Transformation"
            icon={<Users className="h-8 w-8 text-accent" />}
            delay={0.8}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer
            delay={0.6}
            text="Performance Marketing"
            icon={<Search className="h-8 w-8 text-primary" />}
          />
          <IconContainer
            delay={0.7}
            text="Process Automation"
            icon={<FileText className="h-8 w-8 text-accent" />}
          />
        </div>
      </div>

      <Radar className="absolute -bottom-12 z-50" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
};
