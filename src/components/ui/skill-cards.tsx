import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface Skill {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level?: number;
  description?: string;
}

interface SkillCardsProps {
  skills: Skill[];
  className?: string;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  showLevel?: boolean;
}

export const SkillCards = ({ 
  skills, 
  className,
  columns = { mobile: 2, tablet: 3, desktop: 5 },
  showLevel = false
}: SkillCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <div className={cn("mx-auto max-w-7xl px-4 py-4", className)}>
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={cn(
          "rounded-xl backdrop-blur-md",
          "bg-[rgba(14,18,28,0.45)] border border-[rgba(255,255,255,0.04)]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
          "p-4 md:p-6"
        )}
      >
        <div
          className={cn(
            "grid gap-3",
            `grid-cols-${columns.mobile}`,
            `sm:grid-cols-${columns.tablet}`,
            `lg:grid-cols-${columns.desktop}`
          )}
          style={{
            gridTemplateColumns: `repeat(${columns.mobile}, minmax(0, 1fr))`,
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
              showLevel={showLevel}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface SkillCardProps {
  skill: Skill;
  index: number;
  showLevel?: boolean;
  prefersReducedMotion: boolean;
}

const SkillCard = ({ skill, index, showLevel, prefersReducedMotion }: SkillCardProps) => {
  const [showShimmer, setShowShimmer] = useState(false);
  const Icon = skill.icon;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const triggerShimmer = () => {
      setShowShimmer(true);
      setTimeout(() => setShowShimmer(false), 1100);
      
      // Schedule next shimmer
      const delay = Math.random() * 6000 + 6000; // 6-12s
      setTimeout(triggerShimmer, delay);
    };

    const initialDelay = Math.random() * 8000 + 4000; // 4-12s initial
    const timer = setTimeout(triggerShimmer, initialDelay);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 10,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.5,
        ease: "easeOut",
      },
    },
  };

  // Random float animation delay for visual variety
  const floatDelay = prefersReducedMotion ? 0 : (index % 5) * 1.2;

  return (
    <motion.button
      variants={cardVariants}
      className={cn(
        "group relative flex flex-col items-center gap-2 p-4",
        "rounded-xl",
        "bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.01)]",
        "border border-[rgba(255,255,255,0.04)]",
        "shadow-sm",
        "transform-gpu",
        "transition-all duration-300 ease-out",
        "hover:scale-105 hover:-translate-y-1 hover:shadow-glow-blue hover:border-primary/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        !prefersReducedMotion && "animate-float-idle"
      )}
      style={{
        animationDelay: `${floatDelay}s`,
      }}
      aria-label={`${skill.name}${skill.level ? ` — ${skill.level}% proficiency` : ""}`}
      title={skill.description || skill.name}
    >
      {/* Icon Container */}
      <div className="relative h-12 w-12 flex items-center justify-center">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        
        {/* Icon Circle */}
        <div
          className={cn(
            "relative h-full w-full flex items-center justify-center rounded-full",
            "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]",
            "border border-[rgba(255,255,255,0.03)]",
            "overflow-hidden"
          )}
        >
          <Icon className="w-6 h-6 text-primary-glow relative z-10 group-hover:text-accent-glow transition-colors duration-300" />
          
          {/* Shimmer Effect */}
          {showShimmer && (
            <div
              className={cn(
                "absolute inset-0 pointer-events-none",
                "bg-gradient-to-r from-transparent via-white/10 to-transparent",
                "animate-shimmer-effect"
              )}
            />
          )}
        </div>
      </div>

      {/* Skill Name */}
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
        {skill.name}
      </span>

      {/* Optional Proficiency Level */}
      {showLevel && skill.level && (
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1 h-1 rounded-full",
                i < Math.round(skill.level! / 20)
                  ? "bg-primary-glow"
                  : "bg-muted/30"
              )}
            />
          ))}
        </div>
      )}
    </motion.button>
  );
};
