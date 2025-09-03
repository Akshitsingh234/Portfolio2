import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const textOptions = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textOptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-coral/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient-primary">Alex</span>
              </h1>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent transition-all duration-500">
                  {textOptions[currentText]}
                </h2>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate about creating beautiful, functional web applications 
              with modern technologies and clean code practices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-primary hover:shadow-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover-lift">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="glass hover:bg-accent/10 border-accent/20 text-foreground font-semibold px-8 py-3 rounded-full hover-lift">
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10 rounded-full hover-lift">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10 rounded-full hover-lift">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10 rounded-full hover-lift">
                <Mail size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10 rounded-full hover-lift">
                <Download size={20} />
              </Button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow hover:shadow-accent transition-all duration-500 hover-lift">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-pulse-glow"></div>
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow" style={{ animation: 'spin 20s linear infinite' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;