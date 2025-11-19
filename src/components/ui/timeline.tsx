"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  image: string;
  imageAlt: string;
  heading: string;
  role: string;
  highlight?: string;
  isLogo?: boolean;
  description: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Experience
        </motion.h2>
        <motion.p 
          className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My academic journey and professional experience in tech and AI
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative pt-10 md:pt-20 pb-16 md:pb-24"
          >
            {/* Year Badge - Centered */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1
              }}
            >
              <div className="relative">
                <motion.div 
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-primary/30 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 30px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    {item.title}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Bento Grid - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 mb-6">
              {/* LEFT: Image Tile (30-40% on desktop) */}
              <motion.div
                className="lg:col-span-2 rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.1
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`relative w-full ${item.isLogo ? 'h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5' : 'h-64 md:h-80'} overflow-hidden`}>
                  <img 
                    src={item.image} 
                    alt={item.imageAlt}
                    className={`${item.isLogo ? 'w-40 h-40 md:w-52 md:h-52 object-contain' : 'w-full h-full object-cover'} transition-all duration-700 group-hover:scale-110 ${item.isLogo ? 'group-hover:rotate-3' : ''}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      boxShadow: [
                        "inset 0 0 20px rgba(59, 130, 246, 0)",
                        "inset 0 0 40px rgba(59, 130, 246, 0.2)",
                        "inset 0 0 20px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* RIGHT: Content Tile (60-70% on desktop) */}
              <motion.div
                className="lg:col-span-3 rounded-2xl bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border border-border/50 p-6 md:p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.2
                }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    {item.heading}
                  </h3>
                  
                  <p className="text-primary font-semibold text-base md:text-lg mb-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {item.role}
                  </p>
                  
                  {item.highlight && (
                    <p className="text-accent font-bold text-lg md:text-xl mb-2">
                      {item.highlight}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Description Panel - Full Width Below Grid */}
            <motion.div
              className="rounded-2xl bg-gradient-to-br from-card/80 via-card/60 to-card/50 backdrop-blur-lg border border-border/40 p-6 md:p-8 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.3
              }}
            >
              <ul className="space-y-3 md:space-y-4">
                {item.description.map((bullet, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + 0.4 + (i * 0.1)
                    }}
                  >
                    <span className="text-primary text-xl md:text-2xl mt-0.5 flex-shrink-0">•</span>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-border/50 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] rounded-full"
          >
            <div className="w-full h-full bg-gradient-to-b from-primary via-accent to-primary animate-pulse-glow" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary/50 to-accent/50 blur-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
