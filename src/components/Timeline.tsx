import React from "react";
import { Timeline as TimelineUI } from "@/components/ui/timeline";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import srmUniversity from "@/assets/srm-university.png";
import sksSchool from "@/assets/sks-school.png";
import eclLogo from "@/assets/ecl-logo.png";
import acmLogo from "@/assets/acm-logo.png";

const Timeline = () => {
  const data = [
    {
      title: "2023 – Present",
      content: (
        <div className="rounded-2xl bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 hover:scale-[1.01] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-col gap-4 relative z-10">
            <div className="relative overflow-hidden rounded-xl group/image">
              <img 
                src={srmUniversity} 
                alt="SRM University" 
                className="w-full h-48 object-cover rounded-xl transition-transform duration-700 group-hover/image:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                SRM Institute of Science and Technology
              </h3>
              <p className="text-primary font-semibold mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                B.Tech in Computer Science Engineering (AI & ML)
              </p>
              <p className="text-accent font-bold mb-3 text-lg">CGPA: 9.01</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Focused on ML, DL, Data Science, and AI-driven projects.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2025 – Present",
      content: (
        <div className="rounded-2xl bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 hover:scale-[1.01] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-col gap-4 relative z-10">
            <div className="relative overflow-hidden rounded-xl group/image flex items-center justify-center h-44 bg-gradient-to-br from-primary/5 to-accent/5">
              <img 
                src={acmLogo} 
                alt="ACM SIGKDD Logo" 
                className="w-32 h-32 object-contain transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-3 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                SRM ACM SIGKDD
              </h3>
              <p className="text-primary font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                Creatives Head
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Organized hackathons and DSA treasure hunts. Led the creative team to design event materials, promotional content, and enhance the club's visual identity.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2025 – Jan 2026",
      content: (
        <div className="rounded-2xl bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 hover:scale-[1.01] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-col gap-4 relative z-10">
            <div className="relative overflow-hidden rounded-xl group/image flex items-center justify-center h-48 bg-gradient-to-br from-primary/5 to-accent/5">
              <img 
                src={eclLogo} 
                alt="Eastern Coalfields Limited Logo" 
                className="w-48 h-48 object-contain transition-all duration-700 group-hover/image:scale-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                Eastern Coalfields Limited (ECL), Coal India
              </h3>
              <p className="text-primary font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                Data/Tech Intern
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exposure to digital workflow automation, data analysis systems, industrial operations, and government digital systems.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2012 – 2023",
      content: (
        <div className="rounded-2xl bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 hover:scale-[1.01] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-col gap-4 relative z-10">
            <div className="relative overflow-hidden rounded-xl group/image">
              <img 
                src={sksSchool} 
                alt="S.K.S Public School" 
                className="w-full h-48 object-cover rounded-xl transition-transform duration-700 group-hover/image:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                S.K.S Public School
              </h3>
              <p className="text-primary font-semibold mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                Class 2 – Class 12
              </p>
              <div className="space-y-1 mb-3">
                <p className="text-accent font-semibold text-sm flex items-center gap-2">
                  <span className="text-xs">•</span> Class X: 90.8%
                </p>
                <p className="text-accent font-semibold text-sm flex items-center gap-2">
                  <span className="text-xs">•</span> Class XII: 79.8%
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Science stream with Computer Science, completed with distinction.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="relative py-20 px-4 overflow-hidden">
      {/* Space Background - Optimized */}
      <StarsBackground className="absolute inset-0" starDensity={0.0001} />
      <ShootingStars 
        className="absolute inset-0" 
        starColor="#60A5FA" 
        trailColor="#38BDF8"
        minSpeed={20}
        maxSpeed={30}
      />
      
      <div className="relative z-10">
        <TimelineUI data={data} />
      </div>
    </section>
  );
};

export default Timeline;
