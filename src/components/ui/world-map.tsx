
"use client";

import { motion } from "framer-motion";
import React from "react";

interface WorldMapProps {
  dots?: Array<{
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    },
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    },
    {
      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    },
  ],
  lineColor = "#0ea5e9",
}: WorldMapProps) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10 rounded-lg overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 500"
        className="w-full h-full"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* World Map SVG Path */}
        <path
          d="M158 206c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm-8-4c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm16 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"
          fill="currentColor"
          className="text-muted-foreground/20"
        />

        {/* Dots */}
        {dots.map((dot, i) => (
          <g key={`dot-${i}`}>
            <motion.circle
              cx={((dot.start.lng + 180) * 1000) / 360}
              cy={((90 - dot.start.lat) * 500) / 180}
              r="2"
              fill={lineColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              filter="url(#glow)"
            />
            <motion.circle
              cx={((dot.end.lng + 180) * 1000) / 360}
              cy={((90 - dot.end.lat) * 500) / 180}
              r="2"
              fill={lineColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              filter="url(#glow)"
            />
          </g>
        ))}

        {/* Lines */}
        {dots.map((dot, i) => (
          <motion.line
            key={`line-${i}`}
            x1={((dot.start.lng + 180) * 1000) / 360}
            y1={((90 - dot.start.lat) * 500) / 180}
            x2={((dot.end.lng + 180) * 1000) / 360}
            y2={((90 - dot.end.lat) * 500) / 180}
            stroke={lineColor}
            strokeWidth="1"
            strokeOpacity="0.6"
            strokeDasharray="2,2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 1, ease: "easeInOut" }}
            filter="url(#glow)"
          />
        ))}

        {/* Animated pulse circles */}
        {dots.map((dot, i) => (
          <g key={`pulse-${i}`}>
            <motion.circle
              cx={((dot.start.lng + 180) * 1000) / 360}
              cy={((90 - dot.start.lat) * 500) / 180}
              r="4"
              fill="none"
              stroke={lineColor}
              strokeWidth="1"
              strokeOpacity="0.4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{
                delay: i * 0.3,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={((dot.end.lng + 180) * 1000) / 360}
              cy={((90 - dot.end.lat) * 500) / 180}
              r="4"
              fill="none"
              stroke={lineColor}
              strokeWidth="1"
              strokeOpacity="0.4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{
                delay: i * 0.3 + 0.5,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
