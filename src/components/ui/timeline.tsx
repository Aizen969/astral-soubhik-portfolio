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
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Experience
        </motion.h2>
        <motion.p 
          className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My academic journey and professional experience
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-16 px-4 md:px-8">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <motion.div
              key={index}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* Grid Container for Alternating Layout */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${!isLeft ? 'md:grid-flow-dense' : ''}`}>
                {/* Left Side (Card or Empty Space) */}
                <div className={`${isLeft ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  {/* Year Badge */}
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                      <span className="text-sm md:text-base font-semibold text-primary">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* Card Container */}
                  <motion.div
                    className="flex flex-col rounded-lg overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                    whileHover={{ y: -3 }}
                  >
                    {/* Image Section */}
                    <div className="relative overflow-hidden group">
                      <div className={`relative w-full ${item.isLogo ? 'h-48 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5' : 'h-48'} overflow-hidden`}>
                        <img 
                          src={item.image} 
                          alt={item.imageAlt}
                          className={`${item.isLogo ? 'w-24 h-24 md:w-32 md:h-32 object-contain' : 'w-full h-full object-cover object-center'} transition-transform duration-500 group-hover:scale-105`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 md:p-6 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.heading}
                      </h3>
                      
                      <p className="text-primary font-medium text-sm md:text-base mb-2 flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                        {item.role}
                      </p>
                      
                      {item.highlight && (
                        <p className="text-accent font-semibold text-sm md:text-base mb-3">
                          {item.highlight}
                        </p>
                      )}

                      {/* Description Bullets */}
                      <ul className="space-y-1.5 mt-2">
                        {item.description.map((bullet, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm leading-relaxed"
                          >
                            <span className="text-primary text-sm mt-0.5 flex-shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side (Empty Space or Card) - Hidden on mobile */}
                <div className="hidden md:block" />
              </div>

              {/* Center Timeline Dot */}
              <motion.div 
                className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              />

              {/* Connector Line from Card to Center */}
              <motion.div
                className={`hidden md:block absolute top-8 left-1/2 w-12 h-[2px] bg-gradient-to-${isLeft ? 'r' : 'l'} from-primary/50 to-transparent ${isLeft ? '-translate-x-full' : ''}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                style={{ originX: isLeft ? 1 : 0 }}
              />
            </motion.div>
          );
        })}

        {/* Centered Vertical Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-border/30 to-transparent -z-10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 rounded-full"
          />
        </div>

        {/* Mobile Timeline Line (Left-aligned) */}
        <div
          style={{
            height: height + "px",
          }}
          className="md:hidden absolute left-4 top-0 w-[2px] bg-gradient-to-b from-transparent via-border/30 to-transparent -z-10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
