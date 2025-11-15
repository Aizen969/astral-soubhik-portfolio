import { ProjectsCarousel } from "./ui/projects-carousel";
import skillSyncImg from "@/assets/skillsync-dashboard.jpg";
import airCanvasImg from "@/assets/aircanvas-demo.jpg";
import getSetGreenImg from "@/assets/getsetgreen-lpr.jpg";

export default function ProjectsCarouselDemo() {
  const projects = [
    {
      id: "skillsync",
      title: "Skill-Sync",
      subtitle: "Developer Productivity Dashboard",
      image: skillSyncImg,
      techStack: ["Python", "Flask", "MySQL", "React", "Tailwind"],
      description: "Sync coding platform progress across LeetCode, HackerRank, and CodeChef.",
      href: "https://github.com/SoubhLance/Skill-sync",
    },
    {
      id: "air-canvas",
      title: "Air Canvas",
      subtitle: "Real-Time Hand-Tracking Drawing App",
      image: airCanvasImg,
      techStack: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      description: "Draw in the air using a colored marker with OpenCV and real-time hand tracking.",
      href: "https://github.com/SoubhLance/Air-Canvas",
    },
    {
      id: "getsetgreen",
      title: "Get Set Green",
      subtitle: "AI-driven Eco-Travel Assist",
      image: getSetGreenImg,
      techStack: ["Python", "Flask", "OpenCV", "Machine Learning"],
      description: "License Plate Recognition, emissions check, and eco-route calculation.",
      href: "https://github.com/SoubhLance/GetSetGreen",
    },
    {
      id: "recipe-recommendation",
      title: "Recipe Recommendation System",
      subtitle: "AI-Powered Recipe Suggestions",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop",
      techStack: ["Python", "Machine Learning", "Data Science", "NLP"],
      description: "Intelligent recipe recommendation system using ML algorithms and user preferences.",
      href: "https://github.com/SoubhLance/Recipe-Recommendation",
    },
    {
      id: "sms-bomber",
      title: "SMS Bomber",
      subtitle: "Educational Security Tool",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop",
      techStack: ["Python", "API Integration", "Automation"],
      description: "Educational tool demonstrating SMS API concepts and rate limiting (ethical use only).",
      href: "https://github.com/SoubhLance/SMS-Bomber",
    },
    {
      id: "hindkshetra",
      title: "HindKshetra",
      subtitle: "Unity Game Development",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop",
      techStack: ["Unity", "C#", "Game Development", "3D Modeling"],
      description: "Immersive 3D game experience built with Unity engine showcasing Indian culture.",
      href: "https://github.com/SoubhLance/HindKshetra",
    },
  ];

  return <ProjectsCarousel projects={projects} infinite />;
}
