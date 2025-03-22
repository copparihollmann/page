
import React from 'react';
import SectionTitle from './SectionTitle';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section bg-dark-green/30">
      <SectionTitle 
        title="About Me" 
        titleSize="large"
        number="A."
      />
      
      <div className="w-full max-w-3xl mx-auto">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-cream leading-relaxed mb-6">
            I'm a multidisciplinary Electrical Engineering student, passionate about the intersection of hardware design and artificial intelligence. With a focus on neuromorphic computing and embedded systems, I strive to bridge the gap between theoretical concepts and practical implementations.
          </p>
          <p className="text-xl text-cream leading-relaxed">
            My experience spans from AI compiler development to FPGA deployments, with a particular interest in brain-inspired computing paradigms. I enjoy tackling complex problems and collaborating with diverse teams to create innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
