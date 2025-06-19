
'use client';

import React, { useState, useRef } from 'react';
import { motion, MotionConfigContext, LayoutGroup } from 'framer-motion';

// Types
interface Props {
  heading?: string;
  text?: string;
  image?: string;
  variant?: 'Default' | 'Hover';
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

// Transitions
const transition1 = {
  bounce: 0,
  delay: 0,
  duration: 0.4,
  type: "spring" as const
};

const transition2 = {
  delay: 0,
  duration: 0.4,
  ease: "easeInOut" as const,
  type: "tween" as const
};

// Transition wrapper component
const Transition: React.FC<{ value: unknown; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition: transition as any }), [JSON.stringify(transition)]);

  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};

const Variants = motion.create(React.Fragment);

export const IconHover3D: React.FC<Props> = ({
  heading = "Library",
  text = "A comprehensive collection of digital books and resources for learning and research. ",
  image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&q=80",
  variant = 'Default',
  className = "",
  style = {},
  width = 600,
  height = 150,
  ...restProps
}) => {
  const [currentVariant, setCurrentVariant] = useState<'Default' | 'Hover'>(variant);
  const [gestureState, setGestureState] = useState({ isHovered: false });
  const refBinding = useRef<HTMLDivElement>(null);
  const defaultLayoutId = React.useId();

  const isHoverVariant = currentVariant === 'Hover';

  const handleMouseEnter = async () => {
    setGestureState({ isHovered: true });
    setCurrentVariant('Hover');
  };

  const handleMouseLeave = async () => {
    setGestureState({ isHovered: false });
    setCurrentVariant('Default');
  };

  // Add error boundary wrapper
  const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    try {
      return <>{children}</>;
    } catch (error) {
      console.warn('IconHover3D Error:', error);
      return (
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">{heading}</h3>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      );
    }
  };

  return (
    <ErrorBoundary>
      <div style={{ width, height }}>
        <motion.div
          {...restProps}
          className={`icon-hover-3d ${className}`}
          ref={refBinding}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={currentVariant === 'Hover' ? handleMouseLeave : undefined}
          style={{
            backgroundColor: "var(--background)",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            gap: "32px",
            height: "min-content",
            justifyContent: "center",
            overflow: "visible",
            padding: "20px",
            position: "relative",
            width: "min-content",
            borderRadius: "12px",
            border: "1px solid color-mix(in srgb, var(--foreground) 10%, transparent)",
            ...style
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: isHoverVariant ? 1.02 : 1,
            backgroundColor: isHoverVariant ? "color-mix(in srgb, var(--primary) 5%, var(--background))" : "var(--background)"
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          {/* Icon Container */}
          <motion.div
            className="icon-container"
            style={{
              alignContent: "center",
              alignItems: "center",
              display: "flex",
              flex: "none",
              flexDirection: "row",
              flexWrap: "nowrap",
              gap: "10px",
              height: "100px",
              justifyContent: "center",
              overflow: "visible",
              padding: "0px",
              position: "relative",
              width: "100px",
              zIndex: 1,
              border: "1px solid color-mix(in srgb, var(--foreground) 20%, transparent)",
              borderRadius: "8px"
            }}
            animate={{
              borderColor: isHoverVariant ? "color-mix(in srgb, var(--primary) 30%, transparent)" : "color-mix(in srgb, var(--foreground) 20%, transparent)",
              scale: isHoverVariant ? 1.05 : 1
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            {/* Simple Icon Placeholder */}
            <motion.div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "var(--primary)",
                borderRadius: "8px",
                opacity: 0.8
              }}
              animate={{
                opacity: isHoverVariant ? 1 : 0.8,
                rotate: isHoverVariant ? 5 : 0
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="content"
            style={{
              alignContent: "center",
              alignItems: "center",
              display: "flex",
              flex: "none",
              flexDirection: "column",
              flexWrap: "nowrap",
              gap: "12px",
              height: "min-content",
              justifyContent: "center",
              maxWidth: "400px",
              overflow: "hidden",
              padding: "0px",
              position: "relative",
              width: "min-content"
            }}
          >
            {/* Heading */}
            <motion.div
              className="w-full text-center"
              style={{
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                fontWeight: 600,
                fontSize: "1.5rem",
                color: "hsl(var(--primary))",
                userSelect: "none",
                marginBottom: 4
              }}
              animate={{
                scale: isHoverVariant ? 1.02 : 1,
                color: isHoverVariant ? "hsl(var(--primary))" : "hsl(var(--primary))"
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              {heading}
            </motion.div>

            {/* Description Text */}
            <motion.div
              style={{
                flex: "none",
                height: "auto",
                position: "relative",
                whiteSpace: "pre-wrap",
                width: "400px",
                wordBreak: "break-word",
                wordWrap: "break-word",
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.5em",
                color: "color-mix(in srgb, var(--foreground) 70%, transparent)",
                userSelect: "none",
                textAlign: "center"
              }}
              animate={{
                opacity: isHoverVariant ? 0.9 : 0.7
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              {text}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </ErrorBoundary>
  );
};
