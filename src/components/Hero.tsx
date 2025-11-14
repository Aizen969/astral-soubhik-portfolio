import { Github, Linkedin, Twitter, Instagram, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import cosmicHero from "@/assets/cosmic-hero.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${cosmicHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Stars Background & Shooting Stars */}
      <StarsBackground className="absolute inset-0" starDensity={0.0002} />
      <ShootingStars 
        className="absolute inset-0" 
        starColor="#60A5FA" 
        trailColor="#38BDF8"
        minSpeed={15}
        maxSpeed={35}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
            Hello, I'm Soubhik
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

export default Hero;
