import SkillCardsDemo from "./skill-cards-demo";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 px-4 overflow-hidden">
      {/* Space Background - Optimized */}
      <StarsBackground className="absolute inset-0" starDensity={0.0001} />
      <ShootingStars 
        className="absolute inset-0" 
        starColor="#60A5FA" 
        trailColor="#38BDF8"
        minSpeed={20}
        maxSpeed={30}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-cosmic bg-clip-text text-transparent">
          Skills & Abilities
        </h2>

        <SkillCardsDemo />
      </div>
    </section>
  );
};

export default Skills;
