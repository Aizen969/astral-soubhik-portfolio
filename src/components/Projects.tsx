import { Button } from "./ui/button";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import ProjectsCarouselDemo from "./projects-carousel-demo";

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Space Background */}
      <StarsBackground className="absolute inset-0" starDensity={0.0002} />
      <ShootingStars 
        className="absolute inset-0" 
        starColor="#60A5FA" 
        trailColor="#38BDF8"
        minSpeed={15}
        maxSpeed={35}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore my portfolio of AI-driven applications and innovative solutions
        </p>

        <ProjectsCarouselDemo />

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary hover:bg-primary/10 hover:shadow-glow-blue transition-all duration-300"
          >
            <a
              href="https://github.com/SoubhLance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              VIEW ALL PROJECTS
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
