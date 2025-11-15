import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  techStack: string[];
  description: string;
  href?: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
  className?: string;
  infinite?: boolean;
}

export const ProjectsCarousel = ({ projects, className, infinite = false }: ProjectsCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // For infinite scroll, triple the projects array
  const displayProjects = infinite ? [...projects, ...projects, ...projects] : projects;

  // Auto-scroll for infinite carousel
  useEffect(() => {
    if (!infinite || !carouselRef.current) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.querySelector(".carousel-card")?.clientWidth || 384;
        carouselRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [infinite]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".carousel-card")?.clientWidth || 384;
      carouselRef.current.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".carousel-card")?.clientWidth || 384;
      carouselRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    }
  };

  // Track current index with IntersectionObserver
  useEffect(() => {
    if (!carouselRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setCurrentIndex(index);
          }
        });
      },
      { root: carouselRef.current, threshold: 0.6 }
    );

    const cards = carouselRef.current.querySelectorAll(".carousel-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("relative w-full", className)}>
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        onScroll={checkScrollability}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-8"
        role="region"
        aria-label="Projects carousel"
      >
        {displayProjects.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Navigation Arrows - Desktop & Tablet */}
      <div className="hidden md:block">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Previous project"
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10",
            "h-12 w-12 rounded-full",
            "bg-card/80 backdrop-blur-md border border-primary/30",
            "flex items-center justify-center",
            "transition-all duration-300",
            "hover:bg-primary/20 hover:shadow-glow-blue hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          )}
        >
          <ChevronLeft className="w-6 h-6 text-primary-glow" />
        </button>

        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Next project"
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 z-10",
            "h-12 w-12 rounded-full",
            "bg-card/80 backdrop-blur-md border border-primary/30",
            "flex items-center justify-center",
            "transition-all duration-300",
            "hover:bg-primary/20 hover:shadow-glow-blue hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          )}
        >
          <ChevronRight className="w-6 h-6 text-primary-glow" />
        </button>
      </div>

      {/* Pagination Dots - Mobile */}
      <div className="flex justify-center gap-2 mt-4 md:hidden" role="tablist" aria-label="Project pages">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const card = carouselRef.current?.querySelector(`[data-index="${index}"]`);
              card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }}
            aria-label={`Go to project ${index + 1}`}
            aria-current={currentIndex === index ? "true" : "false"}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentIndex === index
                ? "w-8 bg-primary shadow-glow-blue"
                : "w-2 bg-primary/30 hover:bg-primary/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      data-index={index}
      className={cn(
        "carousel-card group relative flex-shrink-0 snap-center",
        "w-[280px] sm:w-[320px] md:w-96",
        "rounded-2xl overflow-hidden",
        "bg-gradient-to-b from-card/50 to-card/30 backdrop-blur-md",
        "border border-primary/20",
        "shadow-lg hover:shadow-glow-blue",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:border-primary/40",
        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background"
      )}
      aria-label={`${project.title} — ${project.subtitle}`}
    >
      {/* Image Header - ~45% height */}
      <div className="relative h-48 overflow-hidden bg-muted/20">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover",
            "transition-all duration-500",
            imageLoaded ? "opacity-100" : "opacity-0",
            "group-hover:scale-105"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col gap-3">
        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/80 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 text-xs">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-primary-glow font-medium"
            >
              {tech}
            </span>
          )).reduce((prev, curr, i) => [
            prev,
            <span key={`sep-${i}`} className="text-muted-foreground">•</span>,
            curr
          ] as any)}
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          size="sm"
          className="mt-2 w-full border-primary/30 hover:bg-primary/10 hover:shadow-glow-blue transition-all"
          asChild
        >
          <a
            href={project.href || "#"}
            target={project.href ? "_blank" : undefined}
            rel={project.href ? "noopener noreferrer" : undefined}
            aria-label={`View ${project.title} project details`}
          >
            View Project
          </a>
        </Button>
      </div>
    </article>
  );
};
