import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        >
          <StarsBackground className="absolute inset-0" starDensity={0.0003} />
          <ShootingStars
            className="absolute inset-0"
            starColor="#60A5FA"
            trailColor="#38BDF8"
            minSpeed={20}
            maxSpeed={40}
          />

          {/* Floating geometric shapes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            >
              <div
                className={`w-${4 + (i % 3) * 2} h-${4 + (i % 3) * 2} ${
                  i % 3 === 0
                    ? "border-2 border-primary/30"
                    : i % 3 === 1
                    ? "bg-primary/20"
                    : "border-2 border-primary/30 rotate-45"
                }`}
                style={{
                  width: `${20 + (i % 3) * 15}px`,
                  height: `${20 + (i % 3) * 15}px`,
                }}
              />
            </motion.div>
          ))}

          {/* Animated grid lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{ top: `${20 * (i + 1)}%` }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                style={{ left: `${20 * (i + 1)}%` }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scaleY: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Digital rain effect */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`rain-${i}`}
              className="absolute w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
              style={{
                left: `${10 + i * 12}%`,
                height: `${100 + Math.random() * 200}px`,
              }}
              initial={{ y: -200, opacity: 0 }}
              animate={{
                y: window.innerHeight + 200,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ 
                scale: glitchActive ? [1, 1.02, 0.98, 1] : 1, 
                opacity: 1,
                y: 0,
                x: glitchActive ? [0, -2, 2, 0] : 0
              }}
              transition={{ duration: 0.5 }}
              className="text-center relative"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-4 relative"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(96, 165, 250, 0.5)",
                    "0 0 30px rgba(96, 165, 250, 0.8)",
                    "0 0 20px rgba(96, 165, 250, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Welcome
                {glitchActive && (
                  <span className="absolute inset-0 text-red-500 opacity-50 mix-blend-difference">
                    Welcome
                  </span>
                )}
              </motion.h1>
              <motion.p 
                className="text-primary-glow text-lg tracking-wider"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading the cosmos...
              </motion.p>
            </motion.div>

            {/* Hexagonal progress container */}
            <div className="relative w-72 md:w-96">
              {/* Progress bar with neon glow */}
              <div className="h-3 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20 relative">
                <motion.div
                  className="h-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: "linear-gradient(90deg, #60A5FA, #38BDF8, #60A5FA)",
                    backgroundSize: "200% 100%"
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      backgroundPosition: ["0% 0%", "200% 0%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                    }}
                  />
                </motion.div>
                
                {/* Trailing particles */}
                {progress > 10 && (
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-lg shadow-primary"
                    animate={{ left: `${progress}%` }}
                    transition={{ duration: 0.2 }}
                    style={{ marginLeft: '-4px' }}
                  />
                )}
              </div>

              {/* Percentage with cyberpunk styling */}
              <motion.div
                className="flex justify-between items-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-xs text-muted-foreground font-mono">
                  INITIALIZING
                </span>
                <motion.span
                  className="text-sm font-mono text-primary font-bold"
                  key={Math.round(progress)}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </motion.div>
            </div>

            {/* Enhanced loading dots with orbital motion */}
            <motion.div
              className="relative w-20 h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3"
                  style={{ originX: 0.5, originY: 0.5 }}
                  animate={{
                    rotate: 360,
                    x: [0, Math.cos((i * 120 * Math.PI) / 180) * 30, 0],
                    y: [0, Math.sin((i * 120 * Math.PI) / 180) * 30, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-full bg-primary shadow-lg shadow-primary/50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Status text with typing effect simulation */}
            <motion.div
              className="text-xs text-muted-foreground font-mono flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>System Status:</span>
              <motion.span
                className="text-primary"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                ▮
              </motion.span>
            </motion.div>
          </div>

          {/* Corner accents */}
          {[
            "top-0 left-0",
            "top-0 right-0 rotate-90",
            "bottom-0 right-0 rotate-180",
            "bottom-0 left-0 -rotate-90"
          ].map((position, i) => (
            <motion.div
              key={i}
              className={`absolute ${position} w-20 h-20 border-l-2 border-t-2 border-primary/30`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: 1 
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                scale: { duration: 0.5, delay: i * 0.1 }
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
