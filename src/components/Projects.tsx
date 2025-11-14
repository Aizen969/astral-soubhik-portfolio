import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import skillSyncImg from "@/assets/skillsync-dashboard.jpg";
import airCanvasImg from "@/assets/aircanvas-demo.jpg";
import getSetGreenImg from "@/assets/getsetgreen-lpr.jpg";

interface Project {
  title: string;
  description: string;
  contribution: string;
  techStack: string;
  image: string;
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "SkillSync",
      description:
        "Developer productivity dashboard syncing progress from sites like LeetCode, HackerRank, CodeChef.",
      contribution: "Built full app + UI/UX",
      techStack: "Python, Flask, MySQL, React, Tailwind",
      image: skillSyncImg,
      link: "#",
    },
    {
      title: "Air-Canvas",
      description:
        "Real-time OpenCV-based drawing using a colored marker.",
      contribution: "Developed full computer vision system",
      techStack: "Python, OpenCV, CV, ML",
      image: airCanvasImg,
      link: "#",
    },
    {
      title: "GetSetGreen",
      description:
        "Eco-friendly travel assist system with license plate recognition + emission checking.",
      contribution: "Built LPR system and backend",
      techStack: "Python, Flask, OpenCV, ML",
      image: getSetGreenImg,
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-cosmic bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-full rounded-2xl bg-gradient-glass backdrop-blur-md border border-primary/30 overflow-hidden hover:border-primary/50 hover:shadow-glow-purple transition-all duration-500 hover:scale-105">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-semibold text-primary-glow">
                        My Contribution:
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {project.contribution}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-accent-glow">
                        Tech Stack:
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {project.techStack}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    className="w-full bg-gradient-cosmic hover:shadow-glow-purple transition-all duration-300"
                    asChild
                  >
                    <a href={project.link}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            variant="outline"
            size="lg"
            className="border-primary hover:bg-primary/10 hover:shadow-glow-blue transition-all duration-300"
          >
            VIEW ALL PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
