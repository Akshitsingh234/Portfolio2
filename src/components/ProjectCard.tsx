import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl, 
  featured = false 
}: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`glass rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-300 group ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <div className={`absolute inset-0 bg-gradient-secondary ${!imageLoaded ? 'animate-pulse' : ''}`} />
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {liveUrl && (
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full hover-lift"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink size={18} />
            </Button>
          )}
          {githubUrl && (
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full hover-lift"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github size={18} />
            </Button>
          )}
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full hover-lift"
          >
            <Eye size={18} />
          </Button>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-primary text-primary-foreground shadow-primary">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-secondary/50 hover:bg-accent/20 transition-colors duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {liveUrl && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-primary hover:shadow-primary text-primary-foreground"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 glass border-accent/20 hover:bg-accent/10"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github size={16} className="mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;