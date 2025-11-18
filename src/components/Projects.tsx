import React, { useState } from "react";
import { Button } from "./ui/button";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { Github, ExternalLink } from "lucide-react";
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

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <div
    className="flex-shrink-0 w-[350px] mx-3 group relative rounded-2xl bg-card/80 backdrop-blur-md border border-border p-6 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-300 cursor-pointer"
    onClick={onClick}
  >
    <h3 className="text-xl font-bold mb-2 bg-gradient-cosmic bg-clip-text text-transparent">
      {project.title}
    </h3>
    
    <p className="text-sm text-muted-foreground mb-4">
      {project.subtitle}
    </p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
        >
          {tech}
        </span>
      ))}
    </div>
    
    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
      {project.description}
    </p>
    
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
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
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

        {/* Infinite Scrolling Projects */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
            {/* First set */}
            {projects.map((project) => (
              <ProjectCard
                key={`${project.id}-1`}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {projects.map((project) => (
              <ProjectCard
                key={`${project.id}-2`}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary hover:bg-primary/10 hover:shadow-glow-blue transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>

        {/* Modal for Project Details */}
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
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">Description:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject?.description}
                </p>
              </div>
              
              <div className="pt-4">
                <Button
                  variant="default"
                  className="w-full bg-gradient-cosmic hover:shadow-glow-purple transition-all duration-300"
                  onClick={() => window.open(selectedProject?.href, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Open on GitHub
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
