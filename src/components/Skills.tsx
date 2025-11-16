import SkillCardsDemo from "./skill-cards-demo";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

const Skills = () => {
  return (
    <section id="skills" className="relative py-12 px-4 bg-card/20 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Space Background */}
      <StarsBackground className="absolute inset-0" starDensity={0.0002} />
      <ShootingStars 
        className="absolute inset-0" 
        starColor="#60A5FA" 
        trailColor="#38BDF8"
        minSpeed={15}
        maxSpeed={35}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
          Skills & Abilities
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
          A constellation of technologies I work with
        </p>

        <SkillCardsDemo />
      </div>
    </section>
  );
};

export default Skills;
