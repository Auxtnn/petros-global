"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const circleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.6 } },
  };

  const logoText = "PETROS";
  const logoSubText = "GLOBAL";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ pointerEvents: loading ? "auto" : "none" }}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#dc8617]/20 via-black to-black transform scale-125"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#dc8617]/80"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Main animated element */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Pulsing circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dc8617]/30"
                  initial={{ width: 100, height: 100, opacity: 0 }}
                  animate={{
                    width: [100, 200 + i * 50],
                    height: [100, 200 + i * 50],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                />
              ))}

              {/* Center circle with logo */}
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-black flex items-center justify-center border-2 border-[#dc8617]"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(220, 134, 23, 0)",
                    "0 0 0 10px rgba(220, 134, 23, 0.2)",
                    "0 0 0 20px rgba(220, 134, 23, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, #dc8617, transparent, transparent, transparent)`,
                    maskImage: "radial-gradient(transparent 55%, black 56%)",
                    WebkitMaskImage:
                      "radial-gradient(transparent 55%, black 56%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Logo inside circle */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="text-xl md:text-2xl font-bold text-white">
                    P<span className="text-[#dc8617]">G</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Animated logo text */}
            <div className="mt-8 flex flex-col items-center">
              <div className="flex overflow-hidden h-8 md:h-10">
                {logoText.split("").map((letter, i) => (
                  <motion.div
                    key={i}
                    className="text-white text-xl md:text-3xl font-bold tracking-wider"
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>

              <div className="flex overflow-hidden h-6 md:h-8 mt-1">
                {logoSubText.split("").map((letter, i) => (
                  <motion.div
                    key={i}
                    className="text-[#dc8617] text-sm md:text-xl font-medium tracking-wider"
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.3 + i * 0.07,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Loading bar */}
            <div className="mt-10 w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#dc8617]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Loading text */}
            <motion.div
              className="mt-4 text-white/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2,
                times: [0, 0.2, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              TRANSFORMING VISIONS
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
