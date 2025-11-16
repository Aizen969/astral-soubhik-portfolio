import { cn } from "@/lib/utils";

interface Skill {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  level?: number;
  description?: string;
}

interface SkillCardsProps {
  skills: Skill[];
  className?: string;
}

export const SkillCards = ({ 
  skills, 
  className
}: SkillCardsProps) => {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 px-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = skill.icon;

  return (
    <div
      className="group relative flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110 duration-200"
      aria-label={skill.name}
      title={skill.name}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-border/30 transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-lg">
        <Icon className="w-6 h-6 md:w-8 md:h-8" />
      </div>
    </div>
  );
}
