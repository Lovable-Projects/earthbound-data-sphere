<<<<<<< HEAD
=======

>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
'use client';

import React, { useState, useRef } from 'react';
import { motion, MotionConfigContext, LayoutGroup } from 'framer-motion';

// Types
interface Props {
  heading?: string;
  text?: string;
<<<<<<< HEAD
  image?: string;
=======
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
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
<<<<<<< HEAD
  ease: [0.44, 0, 0.56, 1] as [number, number, number, number],
  type: "tween" as const
};

const transformTemplate1 = (_: unknown, t: string) => `translate(-50%, -50%) ${t}`;

// Transition wrapper component
const Transition: React.FC<{ value: unknown; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition: transition as unknown as typeof config.transition }), [JSON.stringify(transition)]);
=======
  ease: "easeInOut" as const,
  type: "tween" as const
};

const transformTemplate1 = (_: any, t: string) => `translate(-50%, -50%) ${t}`;

// Transition wrapper component
const Transition: React.FC<{ value: any; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111

  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};

const Variants = motion.create(React.Fragment);

export const IconHover3D: React.FC<Props> = ({
  heading = "Library",
<<<<<<< HEAD
  text = "A comprehensive collection of digital books and resources for learning and research. ",
  image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&q=80",
=======
  text = "A comprehensive collection of digital books and resources for learning and research.",
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
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
<<<<<<< HEAD
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
=======

  const titleTransition = {
    duration: 0.3,
    ease: "easeInOut" as const,
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
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

<<<<<<< HEAD
  const bgFillVariants = {
    zEwHlJ7zp: {
      opacity: 1
    }
  };

=======
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
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
<<<<<<< HEAD
                gap: "32px",
=======
                gap: "40px",
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
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
<<<<<<< HEAD
                    {/* ...cube faces... */}
                  </motion.div>
                  {/* ...corner elements... */}
                </motion.div>
              </motion.div>
=======
                    {/* Slice 1 */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-1"
                        data-framer-name="Slice 1"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        <motion.div
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px",
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>

                    {/* Slice 2 */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-2"
                        data-framer-name="Slice 2"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        <motion.div
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px",
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>

                    {/* Slice 3 */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-3"
                        data-framer-name="Slice 3"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        <motion.div
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px",
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>
                  </motion.div>

                  {/* Corner elements */}
                  <motion.div
                    style={{
                      flex: "none",
                      height: "24px",
                      left: isHoverVariant ? "-6px" : "14px",
                      overflow: "hidden",
                      position: "absolute",
                      top: isHoverVariant ? "-6px" : "14px",
                      width: "24px",
                      zIndex: 2,
                      borderLeft: "4px solid var(--foreground)",
                      borderTop: "4px solid var(--foreground)",
                      scale: 1
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                    style={{
                      flex: "none",
                      height: "24px",
                      left: isHoverVariant ? "-6px" : "14px",
                      overflow: "hidden",
                      position: "absolute",
                      top: isHoverVariant ? "330px" : "310px",
                      width: "24px",
                      zIndex: 2,
                      borderLeft: "4px solid var(--foreground)",
                      borderBottom: "4px solid var(--foreground)",
                      scale: 1
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                    style={{
                      bottom: isHoverVariant ? "-6px" : "14px",
                      flex: "none",
                      height: "24px",
                      overflow: "hidden",
                      position: "absolute",
                      right: isHoverVariant ? "-6px" : "14px",
                      width: "24px",
                      zIndex: 2,
                      borderRight: "4px solid var(--foreground)",
                      borderBottom: "4px solid var(--foreground)",
                      scale: 1
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                    style={{
                      flex: "none",
                      height: "24px",
                      overflow: "hidden",
                      position: "absolute",
                      right: isHoverVariant ? "-6px" : "14px",
                      top: isHoverVariant ? "-6px" : "14px",
                      width: "24px",
                      zIndex: 2,
                      borderRight: "4px solid var(--foreground)",
                      borderTop: "4px solid var(--foreground)",
                      scale: 1
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                </motion.div>
              </motion.div>

>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
              {/* Content */}
              <motion.div
                className="content"
                data-framer-name="Content"
                style={{
<<<<<<< HEAD
                  alignContent: "center",
                  alignItems: "center",
=======
                  alignContent: "flex-start",
                  alignItems: "flex-start",
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
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
<<<<<<< HEAD
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
=======
                {/* Text Container */}
                <motion.div
                  className="text-container"
                  data-framer-name="Text"
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flex: "none",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: "10px",
                    height: "32px",
                    justifyContent: "center",
                    overflow: "visible",
                    padding: "0px",
                    position: "relative",
                  }}
                >
                  {/* Heading Text with hover effect */}
                  <motion.div
                    style={{
                      flex: "none",
                      height: "32px",
                      position: "relative",
                      whiteSpace: "pre",
                      width: "auto",
                      fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "var(--foreground)",
                      userSelect: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden"
                    }}
                  >
                    {/* Background text */}
                    <span className='mx-1 text-center' style={{ position: "relative", zIndex: 1 }}>
                      {heading}
                    </span>

                    {/* Animated overlay text */}
                    <motion.span
                      className='mx-1 mt-0.5 text-center'
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        color: "var(--background)",
                        clipPath: `inset(0 ${isHoverVariant ? '0%' : '100%'} 0 0)`,
                        zIndex: 2
                      }}
                      animate={{
                        clipPath: `inset(0 ${isHoverVariant ? '0%' : '100%'} 0 0)`
                      }}
                      transition={titleTransition}
                    >
                      {heading}
                    </motion.span>

                    {/* Background fill */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--foreground)",
                        transformOrigin: "left center",
                        scaleX: 0,
                        zIndex: 1
                      }}
                      animate={{
                        scaleX: isHoverVariant ? 1 : 0
                      }}
                      transition={titleTransition}
                    />
                  </motion.div>
                </motion.div>

>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
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
<<<<<<< HEAD
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5em",
                    color: "color-mix(in srgb, var(--foreground) 70%, transparent)",
                    userSelect: "none",
                    textAlign: "center"
=======
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "1.5em",
                    color: "color-mix(in srgb, var(--foreground) 70%, transparent)",
                    userSelect: "none"
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
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
<<<<<<< HEAD
}; 
=======
};
>>>>>>> 728e0066ded679a99f5dc7296a29165b25e98111
