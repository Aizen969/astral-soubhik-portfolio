import { SkillCards } from "./ui/skill-cards";
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
import { IconBrandCSharp } from "@tabler/icons-react";

// Wrapper for Tabler icon to match react-icons interface
const CSharpIcon = ({ className, size }: { className?: string; size?: number }) => (
  <IconBrandCSharp className={className} size={size} stroke={1.5} />
);

export default function SkillCardsDemo() {
  const skills = [
    {
      id: "python",
      name: "Python",
      icon: SiPython,
      level: 90,
      description: "Used for ML, OpenCV projects and backend",
    },
    {
      id: "java",
      name: "Java",
      icon: FaJava,
      level: 85,
      description: "Object-oriented programming and Android development",
    },
    {
      id: "kotlin",
      name: "Kotlin",
      icon: SiKotlin,
      level: 80,
      description: "Modern Android app development",
    },
    {
      id: "c",
      name: "C",
      icon: SiC,
      level: 75,
      description: "System programming and algorithms",
    },
    {
      id: "cpp",
      name: "C++",
      icon: SiCplusplus,
      level: 80,
      description: "Performance-critical applications",
    },
    {
      id: "csharp",
      name: "C#",
      icon: CSharpIcon,
      level: 78,
      description: "Game development and .NET applications",
    },
    {
      id: "html",
      name: "HTML",
      icon: SiHtml5,
      level: 95,
      description: "Semantic markup and accessibility",
    },
    {
      id: "css",
      name: "CSS",
      icon: SiCss3,
      level: 90,
      description: "Modern styling and animations",
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: SiJavascript,
      level: 88,
      description: "Full-stack web development",
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: SiMysql,
      level: 85,
      description: "Relational database design",
    },
    {
      id: "react",
      name: "React",
      icon: SiReact,
      level: 90,
      description: "Component-based UI development",
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: SiNodedotjs,
      level: 82,
      description: "Server-side JavaScript runtime",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: SiMongodb,
      level: 80,
      description: "NoSQL database solutions",
    },
    {
      id: "docker",
      name: "Docker",
      icon: SiDocker,
      level: 75,
      description: "Containerization and deployment",
    },
    {
      id: "opencv",
      name: "OpenCV",
      icon: SiOpencv,
      level: 85,
      description: "Computer vision and image processing",
    },
    {
      id: "git",
      name: "Git",
      icon: SiGit,
      level: 88,
      description: "Version control and collaboration",
    },
    {
      id: "vscode",
      name: "VS Code",
      icon: VscCode,
      level: 92,
      description: "Primary development environment",
    },
    {
      id: "unreal",
      name: "Unreal Engine",
      icon: SiUnrealengine,
      level: 70,
      description: "Game development with UE5",
    },
    {
      id: "godot",
      name: "Godot",
      icon: SiGodotengine,
      level: 65,
      description: "Indie game development",
    },
    {
      id: "blender",
      name: "Blender",
      icon: SiBlender,
      level: 75,
      description: "3D modeling and animation",
    },
    {
      id: "photoshop",
      name: "Photoshop",
      icon: SiAdobephotoshop,
      level: 80,
      description: "Photo editing and graphic design",
    },
    {
      id: "aftereffects",
      name: "After Effects",
      icon: SiAdobeaftereffects,
      level: 72,
      description: "Motion graphics and VFX",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 92,
      description: "Utility-first CSS framework",
    },
  ];

  return (
    <SkillCards 
      skills={skills} 
      className="py-4"
    />
  );
}
