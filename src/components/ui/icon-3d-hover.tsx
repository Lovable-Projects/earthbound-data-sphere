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
  ease: [0.44, 0, 0.56, 1] as [number, number, number, number],
  type: "tween" as const
};

const transformTemplate1 = (_: unknown, t: string) => `translate(-50%, -50%) ${t}`;

// Transition wrapper component
const Transition: React.FC<{ value: unknown; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition: transition as unknown as typeof config.transition }), [JSON.stringify(transition)]);

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
  const variants = [currentVariant === 'Default' ? 'GPnJri30y' : 'zEwHlJ7zp'];

  const handleMouseEnter = async () => {
    setGestureState({ isHovered: true });
    setCurrentVariant('Hover');
  };

  const handleMouseLeave = async () => {
    setGestureState({ isHovered: false });
    setCurrentVariant('Default');
  };

  const cubeSliceVariants = {
    zEwHlJ7zp: {
      "--border-color": "rgb(139, 47, 250)"
    }
  };
  const titleVariants = {
    default: {
      "--fill-width": "0%"
    },
    hovered: {
      "--fill-width": "100%"
    }
  };

  // Add this new transition for the title
  const titleTransition = {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94], // Smoother easing curve
    type: "tween" as const
  };

  const sliceCubeVariants = {
    zEwHlJ7zp: {
      rotateX: -28,
      rotateY: -43,
      scale: 1.1
    }
  };

  const cornerScaleVariants = {
    zEwHlJ7zp: {
      scale: 2.2
    }
  };

  const bgFillVariants = {
    zEwHlJ7zp: {
      opacity: 1
    }
  };

  return (
    <div style={{ width, height }}>
      <LayoutGroup id={defaultLayoutId}>
        <Variants animate={variants} initial={false}>
          <Transition value={transition1}>
            <motion.div
              {...restProps}
              className={`icon-hover-3d ${className}`}
              data-framer-name="Default"
              data-highlight={true}
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
            >
              {/* Icon Container */}
              <motion.div
                className="icon-container"
                data-framer-name="Icon"
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
                  border: "1px solid color-mix(in srgb, var(--foreground) 20%, transparent)"
                }}
              >
                {/* BG Container */}
                <motion.div
                  className="bg-container"
                  data-framer-name="BG"
                  style={{
                    flex: "none",
                    height: "348px",
                    overflow: "visible",
                    position: "relative",
                    width: "348px",
                    zIndex: 2,
                    scale: 0.3
                  }}
                >
                  {/* Slice Cube */}
                  <motion.div
                    className="slice-cube"
                    data-framer-name="Slice Cube"
                    style={{
                      alignContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flex: "none",
                      flexDirection: "column",
                      flexWrap: "nowrap",
                      gap: "28px",
                      height: "min-content",
                      justifyContent: "center",
                      left: "50%",
                      overflow: "visible",
                      padding: "0px",
                      position: "absolute",
                      top: "50%",
                      transformStyle: "preserve-3d",
                      width: "min-content",
                      zIndex: 3,
                      rotate: 49,
                      rotateX: 23,
                      rotateY: 33,
                      scale: 0.7,
                      transformPerspective: 1200
                    }}
                    transformTemplate={transformTemplate1}
                    variants={sliceCubeVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  >
                    {/* ...cube faces... */}
                  </motion.div>
                  {/* ...corner elements... */}
                </motion.div>
              </motion.div>
              {/* Content */}
              <motion.div
                className="content"
                data-framer-name="Content"
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
                {/* Heading centered and in theme color */}
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
                >
                  {text}
                </motion.div>
              </motion.div>
            </motion.div>
          </Transition>
        </Variants>
      </LayoutGroup>
    </div>
  );
}; 