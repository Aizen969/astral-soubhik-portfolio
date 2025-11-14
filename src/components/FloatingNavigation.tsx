import { FloatingDock } from "./ui/floating-dock";
import { Home, User, Briefcase, Code, Mail, GraduationCap } from "lucide-react";

const FloatingNavigation = () => {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-foreground" />,
      href: "#hero",
    },
    {
      title: "About",
      icon: <User className="h-full w-full text-foreground" />,
      href: "#about",
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-full w-full text-foreground" />,
      href: "#timeline",
    },
    {
      title: "Projects",
      icon: <Briefcase className="h-full w-full text-foreground" />,
      href: "#projects",
    },
    {
      title: "Skills",
      icon: <Code className="h-full w-full text-foreground" />,
      href: "#skills",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full text-foreground" />,
      href: "#contact",
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
};

export default FloatingNavigation;
