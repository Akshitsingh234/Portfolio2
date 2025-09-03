import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Clock,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.developer@email.com",
      description: "Send me an email anytime",
      color: "accent"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST",
      color: "primary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY",
      description: "Available for remote work worldwide",
      color: "coral"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I typically respond quickly",
      color: "accent"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com", color: "hover:text-accent" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-primary" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com", color: "hover:text-coral" },
    { icon: Globe, label: "Website", url: "https://example.com", color: "hover:text-accent" }
  ];

  const colorClasses = {
    accent: 'text-accent bg-accent/10',
    primary: 'text-primary bg-primary/10',
    coral: 'text-coral bg-coral/10',
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contact Hero Section */}
          <section className="py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient-primary">Get In Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Have a project in mind or just want to chat about technology? 
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-6 text-gradient-accent">
                  Send Me a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glass border-accent/20 focus:border-accent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="glass border-accent/20 focus:border-accent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass border-accent/20 focus:border-accent"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass border-accent/20 focus:border-accent resize-none"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-primary text-primary-foreground font-semibold py-3 rounded-full hover-lift"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send size={16} className="mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              
              {/* Contact Information Cards */}
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass p-6 hover-lift hover-glow transition-all duration-300 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${colorClasses[info.color as keyof typeof colorClasses]}`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-accent font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Social Links */}
              <Card className="glass p-6 hover-glow">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className={`rounded-full hover-lift ${social.color} hover:bg-accent/10`}
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <IconComponent size={20} />
                      </Button>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow me on social media for updates and tech insights
                </p>
              </Card>

              {/* Availability Status */}
              <Card className="glass p-6 hover-glow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Available for Work
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm currently accepting new projects and collaborations. 
                  Let's discuss how we can work together!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;