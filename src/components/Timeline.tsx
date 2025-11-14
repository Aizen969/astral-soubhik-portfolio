import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineEntry {
  type: "education" | "experience";
  title: string;
  subtitle: string;
  duration: string;
  description: string;
}

const Timeline = () => {
  const entries: TimelineEntry[] = [
    {
      type: "education",
      title: "SRM Institute of Science and Technology (KTR)",
      subtitle: "B.Tech in Computer Science Engineering (AI & ML)",
      duration: "2023 – Present",
      description: "Focused on ML, DL, Data Science, and AI-driven projects",
    },
    {
      type: "experience",
      title: "Eastern Coalfields Limited (ECL), Coal India",
      subtitle: "Intern — Data/Tech Intern",
      duration: "June 2024 – July 2024",
      description:
        "Assisted in digital workflow, data analysis tasks, and basic system automation. Exposure to large-scale industrial operations & government digital systems",
    },
    {
      type: "education",
      title: "S.K.S Public School",
      subtitle: "Class 1–12",
      duration: "2011 – 2023",
      description:
        "Science Stream with Computer Science in XI–XII. Completed schooling with distinction",
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-cosmic bg-clip-text text-transparent">
          Education & Experience
        </h2>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary" />

          {/* Timeline Entries */}
          <div className="space-y-12">
            {entries.map((entry, index) => {
              const isLeft = index % 2 === 0;
              const Icon = entry.type === "education" ? GraduationCap : Briefcase;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="relative p-6 rounded-xl bg-gradient-glass backdrop-blur-md border border-primary/30 hover:border-primary/50 hover:shadow-glow-purple transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <Icon className="w-6 h-6 text-primary-glow" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{entry.title}</h3>
                          <p className="text-primary-glow font-semibold mb-2">
                            {entry.subtitle}
                          </p>
                          <p className="text-sm text-accent mb-3">{entry.duration}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {entry.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-glow-purple group-hover:scale-125 transition-transform duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
