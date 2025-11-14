import { Button } from "./ui/button";
import { Download, Briefcase } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const About = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-cosmic bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo Card */}
          <div
            className="group relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 shadow-glow-purple transition-all duration-500 hover:shadow-glow-pink hover:scale-105 hover:rotate-1">
              {/* Nebula overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img
                src={profileImage}
                alt="Soubhik Sadhu"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - About Text */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                Hello, I'm Soubhik
              </h3>
              <p className="text-xl text-primary-glow font-semibold">
                AI & ML Enthusiast
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate tech enthusiast and a 2nd-year Computer Science
                Engineering student at SRM University (KTR) with a specialization in
                Artificial Intelligence and Machine Learning.
              </p>
              <p>
                I love exploring new technologies, building innovative projects, and
                contributing to the tech community.
              </p>
              <p>
                When I'm not coding, you can find me playing guitar or drawing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="default"
                className="bg-gradient-cosmic hover:shadow-glow-purple transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                onClick={scrollToProjects}
                className="border-primary hover:bg-primary/10 hover:shadow-glow-blue transition-all duration-300"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
