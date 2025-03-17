"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { value: 15, label: "Years of experience", suffix: "+" },
    { value: 98, label: "Client retention", suffix: "%" },
    { value: 500, label: "Projects completed", suffix: "+" },
    { value: 3, label: "Specialized divisions" },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-end mb-2">
                <span className="text-5xl md:text-6xl font-bold text-primary">
                  {isVisible ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      useEasing={true}
                    />
                  ) : (
                    "0"
                  )}
                </span>
                {stat.suffix && (
                  <span className="text-5xl md:text-6xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <h3 className="text-gray-800 font-medium text-lg mt-1">
                {stat.label}
              </h3>
              <div className="h-1 w-16 bg-[#dc8617]/20 rounded-full mt-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
