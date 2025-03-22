
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  image?: string;
}

const Hero = ({ name, title, image }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-dark-green opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(162, 123, 92, 0.2) 0%, rgba(39, 44, 41, 1) 70%)',
        }}
      />
      
      <div className="max-w-[1440px] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2 flex justify-center animate-fade-in-slow">
          {image ? (
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-light-brown shadow-xl relative">
              <img 
                src={image} 
                alt={name} 
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-dark-olive border-4 border-light-brown flex items-center justify-center text-9xl font-display text-cream">
              {name.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="lg:order-1 text-center lg:text-left">
          <span className="inline-block px-4 py-2 bg-dark-olive text-cream rounded-full text-sm mb-6 animate-fade-in-slow">
            Hello, I'm
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display mb-6 animate-fade-in" style={{ lineHeight: '1.1' }}>
            {name.split(' ').map((namePart, idx) => (
              <span key={idx} className="block">
                {namePart} {idx === 0 && <span className="text-light-brown">.</span>}
              </span>
            ))}
          </h1>
          <p className="text-xl sm:text-2xl text-silver mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {title}
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#experience" className="btn-primary animate-float">
              Explore my work
              <ArrowDown className="ml-2" size={18} />
            </a>
          </div>
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
