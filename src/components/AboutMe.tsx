
import React from 'react';
import SectionTitle from './SectionTitle';

interface AboutMeProps {
  image?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ image }) => {
  return (
    <section id="about" className="section bg-dark-green/30">
      <SectionTitle 
        title="About Me" 
        titleSize="large"
        number="A."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-cream leading-relaxed mb-6">
              I'm a multidisciplinary Electrical Engineering student, passionate about the intersection of hardware design and artificial intelligence. With a focus on neuromorphic computing and embedded systems, I strive to bridge the gap between theoretical concepts and practical implementations.
            </p>
            <p className="text-xl text-cream leading-relaxed">
              My experience spans from AI compiler development to FPGA deployments, with a particular interest in brain-inspired computing paradigms. I enjoy tackling complex problems and collaborating with diverse teams to create innovative solutions.
            </p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          {image ? (
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-light-brown">
              <img 
                src={image} 
                alt="Agustin Nahuel Coppari Hollmann" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-warm-brown/20 flex items-center justify-center border-4 border-light-brown">
              <span className="text-5xl text-light-brown">A</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
