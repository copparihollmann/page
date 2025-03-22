
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  image?: string;
}

const Hero = ({ name, title, image }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-dark-green opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(162, 123, 92, 0.2) 0%, rgba(39, 44, 41, 1) 70%)',
        }}
      />
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="max-w-5xl mb-10 md:mb-0">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-display mb-8 leading-tight animate-fade-in-slow text-cream">
              Agustin <br /> Nahuel <br /> Coppari <br /> Hollmann
            </h1>
            
            <div className="max-w-xl">
              <p className="text-xl sm:text-2xl md:text-3xl text-light-brown mb-8 animate-fade-in">
                A multidisciplinary Electrical Engineering Student passionate about hardware, neuromorphic computing, and innovation.
              </p>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a href="#experience" className="inline-flex items-center border border-light-brown text-light-brown px-8 py-3 rounded-full hover:bg-light-brown/10 transition-colors">
                  Explore my work
                </a>
              </div>
            </div>
          </div>
          
          {image && (
            <div className="w-full md:w-1/3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img 
                  src={image} 
                  alt="Agustin Nahuel Coppari Hollmann" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 to-transparent"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#experience" 
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
