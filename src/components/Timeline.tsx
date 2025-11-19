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
      image: srmUniversity,
      imageAlt: "SRM University campus with modern architecture and green spaces",
      heading: "SRM Institute of Science and Technology",
      role: "B.Tech in Computer Science Engineering (AI & ML)",
      highlight: "CGPA: 9.01",
      description: [
        "Focused on ML, DL, Data Science, and AI-driven applications with hands-on projects.",
        "Built academic and personal projects leveraging cutting-edge AI technologies.",
        "Developed strong fundamentals in algorithms, data structures, and system design."
      ]
    },
    {
      title: "Jan 2025 – Present",
      image: acmLogo,
      imageAlt: "ACM SIGKDD logo representing data science and knowledge discovery",
      heading: "SRM ACM SIGKDD",
      role: "Creatives Head",
      isLogo: true,
      description: [
        "Organized technical hackathons and DSA treasure hunts to promote competitive programming.",
        "Led the creative team to design event materials, promotional content, and social media campaigns.",
        "Enhanced the club's visual identity and brand presence across campus."
      ]
    },
    {
      title: "Dec 2025 – Jan 2026",
      image: eclLogo,
      imageAlt: "Eastern Coalfields Limited logo representing coal mining operations",
      heading: "Eastern Coalfields Limited (ECL), Coal India",
      role: "Data/Tech Intern",
      isLogo: true,
      description: [
        "Gained exposure to digital workflow automation and data analysis systems in industrial operations.",
        "Worked with government digital systems and learned enterprise-level data management.",
        "Analyzed operational data to support decision-making in coal mining operations."
      ]
    },
    {
      title: "2012 – 2023",
      image: sksSchool,
      imageAlt: "S.K.S Public School building with students and educational facilities",
      heading: "S.K.S Public School",
      role: "Class 2 – Class 12",
      highlight: "Class X: 90.8% • Class XII: 79.8%",
      description: [
        "Completed secondary education in Science stream with Computer Science specialization.",
        "Achieved distinction in Class X with strong performance across all subjects.",
        "Built foundational knowledge in mathematics, physics, chemistry, and computer science."
      ]
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
