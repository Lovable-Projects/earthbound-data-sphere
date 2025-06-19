import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Target, 
  Calendar, 
  Code, 
  Play, 
  Eye, 
  BarChart3, 
  Brain, 
  Zap, 
  Lightbulb,
  ArrowRight,
  RefreshCw
} from 'lucide-react'

interface ExecutionStep {
  id: string
  title: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description: string
  color: string
  bgColor: string
}

interface ExecutionModelProps {
  autoPlay?: boolean
  animationSpeed?: number
}

const steps: ExecutionStep[] = [
  {
    id: 'strategize',
    title: 'Strategize',
    icon: Target,
    description: 'Define clear objectives and strategic direction with precision and focus',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'plan',
    title: 'Plan',
    icon: Calendar,
    description: 'Create detailed roadmaps and timelines that align with strategic goals',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'implement',
    title: 'Implement',
    icon: Code,
    description: 'Build and develop solutions systematically with best practices',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'execute',
    title: 'Execute',
    icon: Play,
    description: 'Launch and deploy solutions with precision and careful coordination',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'oversee',
    title: 'Oversee',
    icon: Eye,
    description: 'Monitor performance continuously and maintain quality standards',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 'analyze',
    title: 'Analyze',
    icon: BarChart3,
    description: 'Measure results comprehensively and gather actionable insights',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'understand',
    title: 'Understand',
    icon: Brain,
    description: 'Process learnings deeply and identify meaningful patterns',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'optimize',
    title: 'Optimize',
    icon: Zap,
    description: 'Enhance performance systematically and improve efficiency',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 'innovate',
    title: 'Innovate',
    icon: Lightbulb,
    description: 'Evolve solutions continuously and create new opportunities',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  }
]

const ResultsSection: React.FC<ExecutionModelProps> = ({ autoPlay = true, animationSpeed = 3000 }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, animationSpeed)
    return () => clearInterval(interval)
  }, [isPlaying, animationSpeed])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setIsPlaying(false)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  // Responsive circle radius
  const [radius, setRadius] = useState(300)
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(160)
      else if (window.innerWidth < 768) setRadius(200)
      else if (window.innerWidth < 1024) setRadius(240)
      else setRadius(300)
    }
    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-home-gradient min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="mb-4 px-4 py-2 text-sm font-medium border border-border rounded-full inline-block bg-card">
            Perssonify Execution Model
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Proven Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to delivering results that matter, built on years of experience and hundreds of successful transformations.
          </p>
        </motion.div>

        {/* Control Panel */}
        <div className="flex justify-center mb-8">
          <button
            onClick={togglePlayback}
            className={`flex items-center gap-2 text-sm md:text-base px-6 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              ${isPlaying 
                ? 'bg-primary text-primary-foreground border-primary shadow-lg' 
                : 'bg-card text-foreground border-border hover:bg-muted hover:border-primary/40'}
            `}
          >
            {isPlaying ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Auto Playing' : 'Start Auto Play'}</span>
          </button>
        </div>

        {/* Execution Model Visualization */}
        <div className="relative flex items-center justify-center mx-auto mb-8" 
             style={{ 
               height: `${radius * 2 + 180}px`, 
               minHeight: '600px',
               maxWidth: `${radius * 2 + 200}px`
             }}>
          
          {/* Background Circle */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-border opacity-30"
            style={{ 
              width: `${radius * 2}px`, 
              height: `${radius * 2}px` 
            }}
          />

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ 
                duration: animationSpeed / 1000 * steps.length, 
                repeat: isPlaying ? Infinity : 0, 
                ease: "linear" 
              }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-xl"
            >
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-primary">PM</div>
                <div className="text-xs md:text-sm text-primary font-medium">Model</div>
              </div>
            </motion.div>
          </div>

          {/* Steps Circle */}
          {steps.map((step, index) => {
            // Calculate angle starting from top (12 o'clock position)
            const angle = (index * 360) / steps.length - 90
            const radian = (angle * Math.PI) / 180
            const x = Math.cos(radian) * radius
            const y = Math.sin(radian) * radius
            const IconComponent = step.icon
            const isActive = index === activeStep

            return (
              <motion.div
                key={step.id}
                className="absolute z-10"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: isActive ? 1.1 : 1, 
                  opacity: 1 
                }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5,
                  scale: { duration: 0.3 }
                }}
              >
                <div
                  className={`relative cursor-pointer transition-all duration-300 p-3 md:p-4 w-28 md:w-36 bg-card rounded-xl border-2 shadow-lg hover:shadow-xl hover:scale-105 ${
                    isActive 
                      ? 'ring-4 ring-primary/50 border-primary shadow-2xl scale-110' 
                      : 'border-border hover:border-primary/40'
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      animate={isActive ? { 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      } : { scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        repeat: isActive ? Infinity : 0, 
                        repeatDelay: 2 
                      }}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2 transition-colors duration-300 ${
                        isActive ? step.bgColor : 'bg-muted'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                        isActive ? step.color : 'text-muted-foreground'
                      }`} />
                    </motion.div>
                    <h3 className={`font-semibold text-xs md:text-sm transition-colors duration-300 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Step Number */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 text-xs rounded-full font-bold flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-110' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Connection Line to Center */}
                {isActive && (
                  <motion.div
                    className="absolute top-1/2 left-1/2 origin-left"
                    style={{
                      width: `${radius - 60}px`,
                      height: '3px',
                      background: 'linear-gradient(to right, var(--tw-gradient-from, hsl(var(--primary))), transparent)',
                      transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                      transformOrigin: 'left center'
                    }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ 
                      opacity: [0.3, 1, 0.3], 
                      scaleX: [0, 1, 1] 
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      scaleX: { duration: 0.5, repeat: 0 }
                    }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Active Step Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-8"
          >
            <div className="max-w-3xl mx-auto p-6 md:p-8 bg-card border border-border rounded-2xl shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${steps[activeStep].bgColor}`}>
                  {React.createElement(steps[activeStep].icon, {
                    className: `w-8 h-8 md:w-10 md:h-10 ${steps[activeStep].color}`
                  })}
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                {steps[activeStep].title}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center">
                {steps[activeStep].description}
              </p>
              
              {/* Progress Indicator */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeStep 
                          ? 'bg-primary w-8' 
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 md:mt-16 text-center px-4"
        >
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
            Whether it's a campaign, a transformation, or an ecosystem rollout, this model ensures everything we implement works in context, adapts in real time, and gets better over time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ResultsSection
