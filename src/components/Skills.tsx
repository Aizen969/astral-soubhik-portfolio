import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiOpencv,
  SiBlender,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiKotlin,
  SiCplusplus,
  SiC,
  SiUnrealengine,
  SiGodotengine,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    { icon: SiPython, name: "Python", delay: 0 },
    { icon: FaJava, name: "Java", delay: 0.1 },
    { icon: SiKotlin, name: "Kotlin", delay: 0.2 },
    { icon: SiC, name: "C", delay: 0.3 },
    { icon: SiCplusplus, name: "C++", delay: 0.4 },
    { icon: SiHtml5, name: "HTML", delay: 0.5 },
    { icon: SiCss3, name: "CSS", delay: 0.6 },
    { icon: SiJavascript, name: "JavaScript", delay: 0.7 },
    { icon: SiMysql, name: "MySQL", delay: 0.8 },
    { icon: SiReact, name: "React", delay: 0.9 },
    { icon: SiNodedotjs, name: "Node.js", delay: 1.0 },
    { icon: SiMongodb, name: "MongoDB", delay: 1.1 },
    { icon: SiDocker, name: "Docker", delay: 1.2 },
    { icon: SiOpencv, name: "OpenCV", delay: 1.3 },
    { icon: SiGit, name: "Git", delay: 1.4 },
    { icon: VscCode, name: "VS Code", delay: 1.5 },
    { icon: SiUnrealengine, name: "Unreal Engine", delay: 1.6 },
    { icon: SiGodotengine, name: "Godot", delay: 1.7 },
    { icon: SiBlender, name: "Blender", delay: 1.8 },
    { icon: SiAdobephotoshop, name: "Photoshop", delay: 1.9 },
    { icon: SiAdobeaftereffects, name: "After Effects", delay: 2.0 },
    { icon: SiTailwindcss, name: "Tailwind", delay: 2.1 },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-cosmic bg-clip-text text-transparent">
          Skills & Abilities
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A constellation of technologies I work with
        </p>

        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-glass backdrop-blur-md border border-primary/30">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-3 opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${skill.delay}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow" />
                  <skill.icon className="w-12 h-12 md:w-16 md:h-16 text-primary-glow transition-all duration-300 group-hover:scale-125 group-hover:text-accent-glow animate-float relative z-10" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
