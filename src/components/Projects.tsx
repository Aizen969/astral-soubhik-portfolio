import { Button } from "./ui/button";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import skillSyncImg from "@/assets/skillsync-dashboard.jpg";
import airCanvasImg from "@/assets/aircanvas-demo.jpg";
import getSetGreenImg from "@/assets/getsetgreen-lpr.jpg";

const Projects = () => {
  const projectData = [
    {
      category: "Developer Productivity Dashboard",
      title: "SkillSync",
      src: skillSyncImg,
      content: (
        <div className="space-y-6">
          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              <span className="font-bold text-foreground">
                Complete developer productivity dashboard
              </span>{" "}
              that syncs your coding progress from multiple competitive programming platforms.
              Track your journey across LeetCode, HackerRank, and CodeChef all in one place.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Built the full application including UI/UX design, backend API integration,
              and data visualization components.
            </p>
          </div>
          
          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h4 className="text-primary-glow font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "Flask", "MySQL", "React", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/20 text-primary-glow text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h4 className="text-accent-glow font-semibold mb-3">My Contribution</h4>
            <p className="text-muted-foreground text-sm">
              Built the full app + UI/UX
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "Real-Time Hand-Tracking Drawing App",
      title: "Air-Canvas",
      src: airCanvasImg,
      content: (
        <div className="space-y-6">
          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              <span className="font-bold text-foreground">
                Innovative drawing application using computer vision
              </span>{" "}
              that allows users to draw in the air using a colored marker.
              Real-time hand tracking and gesture recognition powered by OpenCV.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Developed the complete computer vision system with advanced color detection,
              hand tracking algorithms, and real-time rendering.
            </p>
          </div>
          
          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h4 className="text-primary-glow font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "OpenCV", "Computer Vision", "Machine Learning"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/20 text-primary-glow text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h4 className="text-accent-glow font-semibold mb-3">My Contribution</h4>
            <p className="text-muted-foreground text-sm">
              Built the full computer vision system
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "AI-driven Eco-Travel Assist",
      title: "GetSetGreen",
      src: getSetGreenImg,
      content: (
        <div className="space-y-6">
          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              <span className="font-bold text-foreground">
                Eco-friendly travel assistance system
              </span>{" "}
              featuring license plate recognition and emission checking capabilities.
              Helps travelers make environmentally conscious transportation choices.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Developed the License Plate Recognition (LPR) system and backend infrastructure
              for emissions data processing and eco-route calculations.
            </p>
          </div>
          
          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h4 className="text-primary-glow font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "Flask", "OpenCV", "Machine Learning"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/20 text-primary-glow text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h4 className="text-accent-glow font-semibold mb-3">My Contribution</h4>
            <p className="text-muted-foreground text-sm">
              Backend + LPR system
            </p>
          </div>
        </div>
      ),
    },
  ];

  const cards = projectData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore my portfolio of AI-driven applications and innovative solutions
        </p>

        <Carousel items={cards} />

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in">
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
