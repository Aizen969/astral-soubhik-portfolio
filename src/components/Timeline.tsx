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
        <div className="rounded-2xl bg-card/80 backdrop-blur-md border border-border p-6 hover:border-primary/50 hover:shadow-glow-purple transition-all">
          <div className="flex flex-col gap-4">
            <img 
              src={srmUniversity} 
              alt="SRM University" 
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                SRM Institute of Science and Technology
              </h3>
              <p className="text-primary font-semibold mb-2">
                B.Tech in Computer Science Engineering (AI & ML)
              </p>
              <p className="text-accent font-semibold mb-3">CGPA: 9.01</p>
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
        <div className="rounded-2xl bg-card/80 backdrop-blur-md border border-border p-6 hover:border-primary/50 hover:shadow-glow-purple transition-all">
          <div className="flex flex-col gap-4">
            <img 
              src={acmLogo} 
              alt="ACM SIGKDD Logo" 
              className="w-32 h-32 object-contain bg-white rounded-lg p-4 mx-auto"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                SRM ACM SIGKDD
              </h3>
              <p className="text-primary font-semibold mb-3">
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
        <div className="rounded-2xl bg-card/80 backdrop-blur-md border border-border p-6 hover:border-primary/50 hover:shadow-glow-purple transition-all">
          <div className="flex flex-col gap-4">
            <img 
              src={eclLogo} 
              alt="Eastern Coalfields Limited Logo" 
              className="w-48 h-48 object-contain bg-white rounded-lg p-4 mx-auto"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Eastern Coalfields Limited (ECL), Coal India
              </h3>
              <p className="text-primary font-semibold mb-3">
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
        <div className="rounded-2xl bg-card/80 backdrop-blur-md border border-border p-6 hover:border-primary/50 hover:shadow-glow-purple transition-all">
          <div className="flex flex-col gap-4">
            <img 
              src={sksSchool} 
              alt="S.K.S Public School" 
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                S.K.S Public School
              </h3>
              <p className="text-primary font-semibold mb-2">
                Class 2 – Class 12
              </p>
              <div className="space-y-1 mb-3">
                <p className="text-accent font-semibold text-sm">• Class X: 90.8%</p>
                <p className="text-accent font-semibold text-sm">• Class XII: 79.8%</p>
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
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
          Education & Experience
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My journey through academics and professional experiences
        </p>
        <TimelineUI data={data} />
      </div>
    </section>
  );
};

export default Timeline;
