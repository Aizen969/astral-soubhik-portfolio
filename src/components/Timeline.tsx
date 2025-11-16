import { GraduationCap, Briefcase } from "lucide-react";
import { Timeline as TimelineUI } from "@/components/ui/timeline";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

const Timeline = () => {
  const data = [
    {
      title: "2023 – Present",
      content: (
        <div className="rounded-2xl bg-gradient-glass backdrop-blur-md border border-primary/30 p-6 hover:border-primary/50 hover:shadow-glow-purple transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <GraduationCap className="w-6 h-6 text-primary-glow" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                SRM Institute of Science and Technology (KTR)
              </h3>
              <p className="text-primary-glow font-semibold mb-2">
                B.Tech in Computer Science Engineering (AI & ML)
              </p>
              <p className="text-accent font-semibold mb-3">CGPA: 9.01</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Focused on ML, DL, Data Science, and AI-driven projects.
          </p>
        </div>
      ),
    },
    {
      title: "Dec 2025 – Jan 2026",
      content: (
        <div className="rounded-2xl bg-gradient-glass backdrop-blur-md border border-primary/30 p-6 hover:border-primary/50 hover:shadow-glow-purple transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <Briefcase className="w-6 h-6 text-primary-glow" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                Eastern Coalfields Limited (ECL), Coal India
              </h3>
              <p className="text-primary-glow font-semibold mb-2">
                Intern — Data/Tech Intern
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Exposure to digital workflow automation, data analysis systems, industrial operations, and government digital systems.
          </p>
        </div>
      ),
    },
    {
      title: "2012 – 2023",
      content: (
        <div className="rounded-2xl bg-gradient-glass backdrop-blur-md border border-primary/30 p-6 hover:border-primary/50 hover:shadow-glow-purple transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <GraduationCap className="w-6 h-6 text-primary-glow" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                S.K.S Public School
              </h3>
              <p className="text-primary-glow font-semibold mb-2">
                Class 2 – Class 12
              </p>
              <div className="space-y-1 mb-3">
                <p className="text-accent font-semibold text-sm">• Class X: 90.8%</p>
                <p className="text-accent font-semibold text-sm">• Class XII: 79.8%</p>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Science stream with Computer Science, completed with distinction.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="relative py-20 px-4 overflow-hidden">
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
        <TimelineUI data={data} />
      </div>
    </section>
  );
};

export default Timeline;
