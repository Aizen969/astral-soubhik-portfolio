import SkillCardsDemo from "./skill-cards-demo";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-cosmic bg-clip-text text-transparent">
          Skills & Abilities
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A constellation of technologies I work with
        </p>

        <SkillCardsDemo />
      </div>
    </section>
  );
};

export default Skills;
