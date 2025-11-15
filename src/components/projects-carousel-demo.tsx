import { ProjectsCarousel } from "./ui/projects-carousel";
import skillSyncImg from "@/assets/skillsync-dashboard.jpg";
import airCanvasImg from "@/assets/aircanvas-demo.jpg";
import getSetGreenImg from "@/assets/getsetgreen-lpr.jpg";

export default function ProjectsCarouselDemo() {
  const projects = [
    {
      id: "skillsync",
      title: "SkillSync",
      subtitle: "Developer Productivity Dashboard",
      image: skillSyncImg,
      techStack: ["Python", "Flask", "MySQL", "React", "Tailwind"],
      description: "Sync coding platform progress across LeetCode, HackerRank, and CodeChef.",
      href: "https://github.com/SoubhLance",
    },
    {
      id: "air-canvas",
      title: "Air-Canvas",
      subtitle: "Real-Time Hand-Tracking Drawing App",
      image: airCanvasImg,
      techStack: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      description: "Draw in the air using a colored marker with OpenCV and real-time hand tracking.",
      href: "https://github.com/SoubhLance",
    },
    {
      id: "getsetgreen",
      title: "GetSetGreen",
      subtitle: "AI-driven Eco-Travel Assist",
      image: getSetGreenImg,
      techStack: ["Python", "Flask", "OpenCV", "Machine Learning"],
      description: "License Plate Recognition, emissions check, and eco-route calculation.",
      href: "https://github.com/SoubhLance",
    },
  ];

  return <ProjectsCarousel projects={projects} />;
}
