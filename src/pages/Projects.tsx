import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ui', label: 'UI/UX' },
    { id: 'backend', label: 'Backend' }
  ];

  const projects = [
     {
      id: 6,
      title: "OrnaVault",
      description: "specially for Jwellery  shops, A site which manages  the shops and customers in a single place .",
      image: "https://imgs.search.brave.com/Dbmq-Ys4WG1NQ61elq6WrL7p9uQhVXm_ryX5BKpKM5I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM5/Nzc3NDg4L3Bob3Rv/L2RpYW1vbmQtb24t/dGhlLXdhdGVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz00/Tm52eTd6czhXNW1u/YnRKdWJlVFdSUzJL/Z3VvT2I0dVRaSkNE/YjVCM1lFPQ",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL", "Chart.js"],
      category: "web",
      liveUrl: "https://ornavault.netlify.app/",
      githubUrl: "https://github.com/Akshitsingh234/Jwellery-Shop.git"
    },
    // {
    //   id: 1,
    //   title: "E-Commerce Platform",
    //   description: "A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payment processing, and responsive design.",
    //   image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    //   technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    //   category: "web",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   featured: true
    // },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    //   technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
    //   category: "web",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com"
    // },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      category: "ui",
      liveUrl: "https://akshitfolio.netlify.app/",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Panchkarma-care",
      description: "A fully working , Hospital Management system, it is designed to make the less use of physical records.",
      image: "https://imgs.search.brave.com/eKLuL8se1CqqVRkwa4lvRSS2SQRkTOdlxvWsEknsXRA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8x/Mi8zMS8wNi80Ny9k/b2N0b3ItOTMwMTY2/M182NDAuanBn",
      technologies: ["React Native", "OpenWeatherAPI", "Maps", "Redux"],
      category: "mobile",
      liveUrl: "panchkarmahospital.netlify.app",
      githubUrl: "https://github.com"
    },
    
    // {
    //   id: 5,
    //   title: "Blog API",
    //   description: "RESTful API for a blogging platform with authentication, CRUD operations, and advanced search functionality.",
    //   image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
    //   technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    //   category: "backend",
    //   githubUrl: "https://github.com"
    // },
   
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Projects Hero Section */}
          <section className="py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient-primary">My Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              A showcase of my recent work, featuring web applications, mobile apps, 
              and various development projects that demonstrate my skills and creativity.
            </p>
          </section>

          {/* Filter Categories */}
          <section className="py-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 transition-all duration-300 hover-lift ${
                    filter === category.id
                      ? 'bg-gradient-primary text-primary-foreground shadow-primary'
                      : 'glass border-accent/20 hover:bg-accent/10 hover:text-accent'
                  }`}
                  onClick={() => setFilter(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    // featured={project.featured}
                  />
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="glass rounded-2xl p-12 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No Projects Found
                  </h3>
                  <p className="text-muted-foreground">
                    Try selecting a different category to see more projects.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="glass rounded-2xl p-8 md:p-12 text-center hover-glow">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient-accent">Let's Work Together</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Interested in collaborating on a project? I'm always excited to work 
                on new challenges and create something amazing together.
              </p>
              <Button className="bg-gradient-primary hover:shadow-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover-lift">
                Start a Project
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;