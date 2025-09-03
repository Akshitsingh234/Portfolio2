import Navigation from '@/components/Navigation';
import SkillCard from '@/components/SkillCard';
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Globe,
  GitBranch,
  Layout,
  Zap,
  Shield,
  Cloud,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating beautiful and responsive user interfaces",
      skills: [
        { name: "React", level: 95, icon: Code, category: "Framework", color: "accent" },
        { name: "TypeScript", level: 90, icon: Code, category: "Language", color: "primary" },
        { name: "Next.js", level: 85, icon: Globe, category: "Framework", color: "coral" },
        { name: "Tailwind CSS", level: 92, icon: Palette, category: "Styling", color: "accent" },
        { name: "JavaScript", level: 93, icon: Code, category: "Language", color: "primary" },
        { name: "HTML/CSS", level: 95, icon: Layout, category: "Markup", color: "coral" }
      ]
    },
    {
      title: "Backend Development", 
      description: "Building robust and scalable server-side applications",
      skills: [
        { name: "Spring-Boot", level: 100, icon: Server, category: "Runtime", color: "primary" },
        { name: "Java Core", level: 100, icon: Server, category: "Framework", color: "accent" },
        { name: "MYSQL", level: 100, icon: Database, category: "Database", color: "coral" },
        { name: "MongoDB", level: 100, icon: Database, category: "Database", color: "primary" },
        { name: "GraphQL", level: 100, icon: Zap, category: "API", color: "accent" },
        { name: "REST APIs", level: 100, icon: Cloud, category: "API", color: "coral" }
      ]
    },
    {
      title: "Tools & Technologies",
      description: "Development tools and deployment technologies",
      skills: [
        { name: "Git", level: 92, icon: GitBranch, category: "Version Control", color: "accent" },
        { name: "Docker", level: 80, icon: Cpu, category: "DevOps", color: "primary" },
        { name: "AWS", level: 75, icon: Cloud, category: "Cloud", color: "coral" },
        { name: "Figma", level: 85, icon: Palette, category: "Design", color: "accent" },
        { name: "Testing", level: 87, icon: Shield, category: "Quality", color: "primary" },
        { name: "Mobile Dev", level: 70, icon: Smartphone, category: "Development", color: "coral" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Skills Hero Section */}
          <section className="py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient-primary">My Skills</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              A comprehensive overview of my technical expertise and proficiency levels 
              across various technologies and tools I use to build amazing digital experiences.
              
                         I  am  a Competitive Programmer
            </p>
          </section>

          {/* Skills Categories */}
          {skillCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gradient-accent">{category.title}</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    category={skill.category}
                    color={skill.color}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Skills Summary */}
          <section className="py-16">
            <div className="glass rounded-2xl p-8 md:p-12 text-center hover-glow">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient-warm">Always Learning</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
                Technology is constantly evolving, and so am I. I'm always exploring new tools, 
                frameworks, and methodologies to stay at the forefront of web development. 
                Currently diving deeper into AI/ML integration, Web3 technologies, and advanced 
                performance optimization techniques.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral mb-2">20+</div>
                  <div className="text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Skills;