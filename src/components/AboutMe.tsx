
import React from 'react';
import SectionTitle from './SectionTitle';
import { portfolioData } from '@/data/portfolioData';

const AboutMe: React.FC = () => {
  const { paragraphs } = portfolioData.about;
  
  return (
    <section id="about" className="section bg-dark-green/30">
      <SectionTitle 
        title="About Me" 
        titleSize="large"
        number="A."
      />
      
      <div className="w-full max-w-3xl mx-auto">
        <div className="prose prose-invert max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-xl text-cream leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
