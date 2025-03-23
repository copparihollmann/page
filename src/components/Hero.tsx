
import React from 'react';
import { ArrowDown, Linkedin, Mail, Copy } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { portfolioData } from '@/data/portfolioData';
import { useToast } from '@/hooks/use-toast';

interface HeroProps {
  name?: string;
  title?: string;
  image?: string;
}

const Hero = ({ image }: HeroProps) => {
  const { name, title, description } = portfolioData.hero;
  const { toast } = useToast();
  
  const copyEmail = () => {
    navigator.clipboard.writeText('copparihollmann@gmail.com')
      .then(() => {
        toast({
          title: "Email copied!",
          description: "Email address copied to clipboard",
        });
      })
      .catch(() => {
        toast({
          title: "Failed to copy",
          description: "Please try again or copy manually",
          variant: "destructive",
        });
      });
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-12 sm:pt-20 px-4 sm:px-6 relative overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-dark-green opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(162, 123, 92, 0.2) 0%, rgba(39, 44, 41, 1) 70%)',
        }}
      />
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="max-w-5xl mb-8 sm:mb-10 md:mb-0">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display mb-6 sm:mb-8 leading-tight animate-fade-in-slow text-cream">
              {name}
            </h1>
            
            <div className="max-w-xl">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-light-brown mb-6 sm:mb-8 animate-fade-in">
                {description}
              </p>
              
              <div className="space-y-3 sm:space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a 
                  href="https://www.linkedin.com/in/agustin-nahuel-coppari-hollmann/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-light-brown text-light-brown px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-light-brown/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
                
                <div>
                  <button 
                    onClick={copyEmail}
                    className="inline-flex items-center border border-light-brown text-light-brown px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-light-brown/10 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    <span className="mr-1">copparihollmann@gmail.com</span>
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {image && (
            <div className="w-full md:w-1/3 animate-fade-in flex justify-center md:justify-end" style={{ animationDelay: '0.6s' }}>
              <Avatar className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full border-4 border-light-brown overflow-hidden">
                <AvatarImage 
                  src={image} 
                  alt={name} 
                  className="object-cover"
                />
                <AvatarFallback className="text-5xl text-light-brown bg-warm-brown/20">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce text-cream hover:text-light-brown transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
