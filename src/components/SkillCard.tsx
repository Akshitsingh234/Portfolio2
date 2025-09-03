import { useState, useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: LucideIcon;
  category: string;
  color?: string;
}

const SkillCard = ({ name, level, icon: Icon, category, color = 'accent' }: SkillCardProps) => {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(level);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [inView, level]);

  const colorClasses = {
    accent: 'text-accent',
    primary: 'text-primary',
    coral: 'text-coral',
  };

  const progressColorClasses = {
    accent: 'bg-gradient-accent',
    primary: 'bg-gradient-primary',
    coral: 'bg-gradient-warm',
  };

  return (
    <div
      ref={cardRef}
      className="glass rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 group"
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-xl bg-${color}/10 mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className={colorClasses[color as keyof typeof colorClasses] || colorClasses.accent} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="text-foreground font-semibold">{level}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ease-out ${
              progressColorClasses[color as keyof typeof progressColorClasses] || progressColorClasses.accent
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;