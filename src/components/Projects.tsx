import { Button } from "./ui/button";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  techStack: string[];
  description: string;
  href: string;
}

const projects: Project[] = [
  {
    id: "skillsync",
    title: "Skill-Sync",
    subtitle: "Developer Productivity Dashboard",
    techStack: ["Python", "Flask", "MySQL", "React", "Tailwind"],
    description: "Sync coding platform progress across LeetCode, HackerRank, and CodeChef.",
    href: "https://github.com/SoubhLance/Skill-sync",
  },
  {
    id: "air-canvas",
    title: "Air Canvas",
    subtitle: "Real-Time Hand-Tracking Drawing App",
    techStack: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
    description: "Draw in the air using a colored marker with OpenCV and real-time hand tracking.",
    href: "https://github.com/SoubhLance/Air-Canvas",
  },
  {
    id: "getsetgreen",
    title: "Get Set Green",
    subtitle: "AI-driven Eco-Travel Assist",
    techStack: ["Python", "Flask", "OpenCV", "Machine Learning"],
    description: "License Plate Recognition, emissions check, and eco-route calculation.",
    href: "https://github.com/SoubhLance/GetSetGreen",
  },
  {
    id: "recipe-recommendation",
    title: "Recipe Recommendation System",
    subtitle: "AI-Powered Recipe Suggestions",
    techStack: ["Python", "Machine Learning", "Data Science", "NLP"],
    description: "Intelligent recipe recommendation system using ML algorithms and user preferences.",
    href: "https://github.com/SoubhLance/Recipe-Recommendation",
  },
  {
    id: "sms-bomber",
    title: "SMS Bomber",
    subtitle: "Educational Security Tool",
    techStack: ["Python", "API Integration", "Automation"],
    description: "Educational tool demonstrating SMS API concepts and rate limiting (ethical use only).",
    href: "https://github.com/SoubhLance/SMS-Bomber",
  },
  {
    id: "hindkshetra",
    title: "HindKshetra",
    subtitle: "Unity Game Development",
    techStack: ["Unity", "C#", "Game Development", "3D Modeling"],
    description: "Immersive 3D game experience built with Unity engine showcasing Indian culture.",
    href: "https://github.com/SoubhLance/HindKshetra",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Space Background - Optimized */}
      <StarsBackground className="absolute inset-0" starDensity={0.0001} />
      <ShootingStars 
        className="absolute inset-0" 
        starColor="#60A5FA" 
        trailColor="#38BDF8"
        minSpeed={20}
        maxSpeed={30}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore my portfolio of AI-driven applications and innovative solutions
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-card/80 backdrop-blur-md border border-border p-6 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold mb-2 bg-gradient-cosmic bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* GitHub Link */}
              <div className="flex items-center gap-2">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
                <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in">
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

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-cosmic bg-clip-text text-transparent">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedProject?.subtitle}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground">About the Project</h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject?.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="default"
                asChild
                className="flex-1 bg-gradient-cosmic hover:shadow-glow-purple transition-all duration-300"
              >
                <a
                  href={selectedProject?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
