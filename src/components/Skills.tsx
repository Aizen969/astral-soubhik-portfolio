import SkillCardsDemo from "./skill-cards-demo";

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 bg-card/20 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
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
