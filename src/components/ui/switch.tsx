
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const Switch = ({
  checked,
  setChecked,
}: {
  checked: boolean,
  setChecked: (checked: boolean) => void,
}) => {
  return (
    <form className="flex space-x-4 antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "h-7 px-1 flex items-center relative cursor-pointer transition-all duration-500 rounded-full w-[52px]",
          // Deep inset shadow for depth + outer elevation
          "shadow-[inset_0_3px_6px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.25)]",
          // Gradient background for depth
          checked 
            ? "bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-700" 
            : "bg-gradient-to-b from-slate-500 via-slate-600 to-slate-800 border border-slate-400/30"
        )}
      >
        {/* Deep track groove */}
        <div className="absolute inset-1 rounded-full bg-black/20" />
        
        {/* Main button with liquid movement */}
        <motion.div
          initial={false}
          animate={{
            x: checked ? 24 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
            mass: 1.2
          }}
          className="relative z-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className={twMerge(
              "h-[20px] w-[20px] rounded-full relative",
              // Pure white button - no shadows that cause brown
              "bg-white",
              "border border-gray-200"
            )}
          >
            {/* Inner clean ring */}
            <div className="absolute inset-[1px] rounded-full bg-white" />
            
            {/* Simple icon glow */}
            <div className="absolute inset-[2px] rounded-full bg-white" />
            
            {/* Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                {checked ? (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center text-slate-700"
                  >
                    <Moon className="w-2.5 h-2.5 text-primary" strokeWidth={2} fill="currentColor" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center text-slate-700"
                  >
                    <Sun className="w-2.5 h-2.5 text-primary" strokeWidth={2} fill="currentColor" />
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
        
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};
