"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const orbitRef = useRef(null);

  // Custom animation for the orbital elements
  useEffect(() => {
    if (!orbitRef.current) return;

    const orbitElements = orbitRef.current.querySelectorAll(".orbit-element");

    orbitElements.forEach((element, index) => {
      // Different speeds for each orbit element
      const duration = 20 + index * 5;
      const delay = index * 2;
      const direction = index % 2 === 0 ? 1 : -1;

      element.animate(
        [
          { transform: "rotate(0deg)" },
          { transform: `rotate(${360 * direction}deg)` },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          easing: "linear",
          delay: delay * 1000,
        }
      );
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="mx-auto lg:w-11/12">
        {/* Background overlay with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/80 z-10" />

        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#dc8617]/20 blur-3xl animate-pulse"></div>
          <div
            className="absolute top-3/4 left-2/3 w-64 h-64 rounded-full bg-[#dc8617]/10 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Background image with subtle parallax effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/hero.png"
            alt="Business professionals collaborating"
            fill
            className="object-cover opacity-40"
            priority
          />
        </motion.div>

        {/* Content container */}
        <div className="container mx-auto px-4 pt-32 pb-16 min-h-screen relative z-20 flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column: Text Content with staggered animations */}
            <div className="lg:order-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-[#dc8617] font-semibold text-base sm:text-lg uppercase tracking-wider mb-3">
                    Welcome to Petros Global
                  </h2>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Transform Your{" "}
                    <span className="text-[#dc8617] relative">
                      Business
                      <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-[#dc8617]/40 rounded-full"></span>
                    </span>{" "}
                    Vision
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-white/80 text-base sm:text-lg max-w-lg"
                >
                  With innovative strategies and integrated solutions across
                  creative services, management consulting, and real estate,
                  Petros Global transforms your aspirations into tangible
                  results.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="#"
                    className="inline-flex items-center bg-[#dc8617] hover:bg-[#dc8617]/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-[#dc8617]/20 text-sm sm:text-base"
                  >
                    Start your journey
                    <ArrowRight size={16} className="ml-2" />
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex items-center border border-white/20 text-white hover:bg-white/5 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all text-sm sm:text-base"
                  >
                    Explore services
                  </Link>
                </motion.div>

                {/* Client success metrics with counter animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="pt-8 border-t border-white/10"
                >
                  <h3 className="text-[#dc8617] font-semibold text-sm sm:text-base mb-4 sm:mb-6">
                    Delivering Excellence Since 2010
                  </h3>
                </motion.div>
              </motion.div>
            </div>

            {/* Right column: Animated orbital image system */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex justify-center items-center relative mt-8 lg:mt-0"
                ref={orbitRef}
              >
                {/* Animated orbital rings */}
                <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto">
                  {/* Outer decorative elements that float independently */}
                  <div className="absolute w-full h-full">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#dc8617] rounded-full blur-sm"></div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#dc8617] rounded-full blur-sm"></div>
                    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-4 h-4 bg-[#dc8617] rounded-full blur-sm"></div>
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-4 h-4 bg-[#dc8617] rounded-full blur-sm"></div>
                  </div>

                  {/* First orbit - outer ring */}
                  <div className="orbit-element absolute inset-0 border-2 border-dashed border-[#dc8617]/20 rounded-full">
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-[#dc8617]/60 rounded-full"></div>
                  </div>

                  {/* Second orbit */}
                  <div className="orbit-element absolute inset-8 border border-[#dc8617]/30 rounded-full">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#dc8617]/60 rounded-full"></div>
                  </div>

                  {/* Third orbit */}
                  <div className="orbit-element absolute inset-16 border border-[#dc8617]/40 rounded-full">
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#dc8617]/60 rounded-full"></div>
                  </div>

                  {/* Inner circle with pulsing border and image */}
                  <div className="absolute inset-10 sm:inset-16 md:inset-20 lg:inset-24 overflow-hidden rounded-full">
                    <div className="absolute inset-0 border-4 border-[#dc8617] rounded-full animate-pulse"></div>

                    <div className="absolute inset-2 overflow-hidden rounded-full shadow-2xl">
                      <Image
                        src="/assets/hero.png"
                        alt="Creative image"
                        fill
                        className="object-cover"
                      />

                      {/* Gradient overlay on the image */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}

          {/* Optional decorative diagonal element at the bottom to transition to the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
