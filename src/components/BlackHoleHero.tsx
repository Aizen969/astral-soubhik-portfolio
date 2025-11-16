import { useEffect, useRef, useState, useCallback } from "react";
import { Github, Linkedin, Twitter, Instagram, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  distance: number;
  speed: number;
  size: number;
  opacity: number;
  hue: number;
}

const BlackHoleHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const [isLowEnd, setIsLowEnd] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const resizeTimeoutRef = useRef<number>();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/SoubhLance", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  // Detect low-end devices
  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const cores = navigator.hardwareConcurrency || 2;
      const isSlowDevice = isMobile && cores <= 4;
      setIsLowEnd(isSlowDevice);
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    checkPerformance();

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Initialize particles
  const initParticles = useCallback((width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const particleCount = isLowEnd ? 40 : prefersReducedMotion ? 30 : 80;
    
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.max(width, height) * 0.8 + 100;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      particles.push({
        x,
        y,
        vx: 0,
        vy: 0,
        angle,
        distance,
        speed: Math.random() * 0.3 + 0.1,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        hue: 200 + Math.random() * 40, // Blue-cyan range
      });
    }
    
    particlesRef.current = particles;
  }, [isLowEnd, prefersReducedMotion]);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Clear with fade effect
    ctx.fillStyle = "rgba(12, 14, 22, 0.12)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw black hole glow
    if (!prefersReducedMotion) {
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 120
      );
      gradient.addColorStop(0, "rgba(96, 165, 250, 0.15)");
      gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.08)");
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // Update and draw particles
    particlesRef.current.forEach((particle) => {
      // Calculate distance to center
      const dx = centerX - particle.x;
      const dy = centerY - particle.y;
      const distToCenter = Math.sqrt(dx * dx + dy * dy);
      
      // Gravitational pull
      const pullStrength = 0.15;
      const ax = (dx / distToCenter) * pullStrength;
      const ay = (dy / distToCenter) * pullStrength;
      
      // Add subtle orbital motion (disabled on low-end)
      if (!isLowEnd && !prefersReducedMotion) {
        const orbitalForce = 0.03;
        particle.vx += -dy / distToCenter * orbitalForce;
        particle.vy += dx / distToCenter * orbitalForce;
      }
      
      // Apply acceleration
      particle.vx += ax;
      particle.vy += ay;
      
      // Apply velocity
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Damping
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Reset if too close to center or out of bounds
      if (distToCenter < 20 || 
          particle.x < -100 || particle.x > canvas.width + 100 ||
          particle.y < -100 || particle.y > canvas.height + 100) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.max(canvas.width, canvas.height) * 0.8;
        particle.x = centerX + Math.cos(angle) * distance;
        particle.y = centerY + Math.sin(angle) * distance;
        particle.vx = 0;
        particle.vy = 0;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${particle.hue}, 85%, 65%, ${particle.opacity})`;
      ctx.fill();
      
      // Draw trail (disabled on low-end)
      if (!isLowEnd && !prefersReducedMotion && Math.random() > 0.7) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 3, particle.y - particle.vy * 3);
        ctx.strokeStyle = `hsla(${particle.hue}, 85%, 65%, ${particle.opacity * 0.3})`;
        ctx.lineWidth = particle.size * 0.5;
        ctx.stroke();
      }
    });
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isLowEnd, prefersReducedMotion]);

  // Setup canvas and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      initParticles(canvas.width / dpr, canvas.height / dpr);
    };

    updateSize();
    
    // Throttled resize handler
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = window.setTimeout(updateSize, 150);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [animate, initParticles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0c0e16] to-[#0f1218]"
    >
      {/* Black Hole Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-black mb-4 gradient-text-cosmic drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]">
            Hello — I'm Soubhik
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary-glow mb-4">
            AI & ML Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the cosmos of artificial intelligence and building innovative solutions
          </p>
        </div>

        <Button
          onClick={scrollToProjects}
          size="lg"
          className="bg-gradient-cosmic hover:shadow-glow-purple transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
        >
          View My Work
        </Button>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:shadow-glow-purple transition-all duration-300 hover:scale-110"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default BlackHoleHero;
