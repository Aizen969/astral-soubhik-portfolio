import React from 'react';
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
        <div className="rounded-2xl bg-gradient-to-br from-purple-900/30 via-card/50 to-blue-900/30 backdrop-blur-xl border border-purple-500/30 p-6 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500 transform hover:scale-[1.02]">
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-xl group h-44">
              <img 
                src={srmUniversity} 
                alt="SRM University" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-2 px-2">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SRM Institute of Science and Technology
              </h3>
              <p className="text-cyan-400 font-semibold">
                B.Tech in Computer Science Engineering (AI & ML)
              </p>
              <p className="text-yellow-400 font-bold">CGPA: 9.01</p>
              <p className="text-gray-300 text-sm leading-relaxed">
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
        <div className="rounded-2xl bg-gradient-to-br from-indigo-900/30 via-card/50 to-purple-900/30 backdrop-blur-xl border border-indigo-500/30 p-6 hover:border-indigo-400/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-500 transform hover:scale-[1.02]">
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-xl group flex items-center justify-center h-44 bg-white/5">
              <img 
                src={acmLogo} 
                alt="ACM SIGKDD Logo" 
                className="w-32 h-32 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 px-2">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                SRM ACM SIGKDD
              </h3>
              <p className="text-pink-400 font-semibold">
                Creatives Head
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
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
        <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 via-card/50 to-cyan-900/30 backdrop-blur-xl border border-blue-500/30 p-6 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 transform hover:scale-[1.02]">
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-xl group flex items-center justify-center h-44 bg-white/5">
              <img 
                src={eclLogo} 
                alt="Eastern Coalfields Limited Logo" 
                className="w-40 h-40 object-contain transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 px-2">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Eastern Coalfields Limited (ECL), Coal India
              </h3>
              <p className="text-emerald-400 font-semibold">
                Data/Tech Intern
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
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
        <div className="rounded-2xl bg-gradient-to-br from-violet-900/30 via-card/50 to-purple-900/30 backdrop-blur-xl border border-violet-500/30 p-6 hover:border-violet-400/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-500 transform hover:scale-[1.02]">
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-xl group h-44">
              <img 
                src={sksSchool} 
                alt="S.K.S Public School" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-2 px-2">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                S.K.S Public School
              </h3>
              <p className="text-pink-400 font-semibold">
                Class 2 – Class 12
              </p>
              <div className="space-y-1">
                <p className="text-yellow-400 font-semibold text-sm">• Class X: 90.8%</p>
                <p className="text-yellow-400 font-semibold text-sm">• Class XII: 79.8%</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Science stream with Computer Science, completed with distinction.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Enhanced Space Background */}
      <StarsBackground className="absolute inset-0" starDensity={0.00015} />
      <ShootingStars 
        className="absolute inset-0" 
        starColor="#8B5CF6" 
        trailColor="#A78BFA"
        minSpeed={25}
        maxSpeed={35}
      />
      
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
          Education
        </h2>
        <p className="text-gray-400 text-lg">My academic journey that shaped my knowledge and skills.</p>
      </div>
      
      {/* Timeline */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-cyan-500/50 rounded-full" />
        
        <div className="space-y-20">
          {data.map((item, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-pulse z-20" />
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                <div className="inline-block mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {item.title}
                  </span>
                </div>
              </div>
              
              <div className={`w-5/12 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}>
                <div className="animate-fadeIn">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Timeline;
