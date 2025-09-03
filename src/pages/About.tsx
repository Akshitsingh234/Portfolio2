import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Download, Coffee, Code, Heart } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

const About = () => {
  const experiences = [
    {
      period: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Leading frontend development for enterprise applications using React, TypeScript, and modern tools."
    },
    {
      period: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description: "Developed and maintained full-stack applications with React, Node.js, and PostgreSQL."
    },
    {
      period: "2018 - 2020",
      title: "Junior Web Developer",
      company: "StartUp Studio",
      description: "Built responsive websites and learned modern web development practices and methodologies."
    }
  ];

  const interests = [
    { icon: Code, label: "Clean Code", description: "Writing maintainable and readable code" },
    { icon: Coffee, label: "Learning", description: "Always exploring new technologies" },
    { icon: Heart, label: "UX Design", description: "Creating delightful user experiences" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* About Hero Section */}
          <section className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient-primary">About Me</span>
                </h1>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of experience 
                    creating digital solutions that make a difference. My journey began with 
                    a curiosity about how websites work, and it has evolved into a deep love 
                    for crafting elegant, efficient code.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or sharing knowledge with the 
                    developer community. I believe in continuous learning and staying 
                    up-to-date with the latest industry trends.
                  </p>
                  <p>
                    My goal is to build applications that not only look great but also 
                    provide exceptional user experiences and solve real-world problems.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-primary hover:shadow-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover-lift">
                    <Download size={16} className="mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="flex justify-center animate-slide-in-right">
                <div className="relative">
                  <img
                    src={profilePicture}
                    alt="About me"
                    className="w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-glow hover:shadow-accent transition-all duration-500 hover-lift"
                  />
                  <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur opacity-20"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-accent">Experience</span>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-1">
                      <span className="text-accent font-semibold">{exp.period}</span>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-coral font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interests Section */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient-warm">What Drives Me</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-8 text-center hover-lift hover-glow transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={32} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {interest.label}
                    </h3>
                    <p className="text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;