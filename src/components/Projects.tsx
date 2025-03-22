
import React from 'react';
import { Code } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const ProjectCard = ({ title, role, technology, period, location, description, index }: {
  title: string;
  role: string;
  technology: string;
  period: string;
  location: string;
  description: string[];
  index: number;
}) => {
  return (
    <div 
      className="bg-dark-green/30 rounded-lg overflow-hidden border border-cream/10 hover:border-light-brown/30 transition-all duration-300 h-full animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="bg-warm-brown/20 p-2 rounded-md flex-shrink-0">
            <Code size={20} className="text-light-brown" />
          </div>
          <div>
            <h3 className="text-xl font-medium text-cream">{title}</h3>
            <p className="text-light-brown mb-1">{role}</p>
            <p className="text-silver/80 text-sm">{technology}</p>
          </div>
        </div>
        
        <div className="flex justify-between mb-4 text-sm text-silver/80">
          <span>{period}</span>
          <span>{location}</span>
        </div>
        
        <ul className="list-disc pl-6 space-y-2 text-cream/90">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const { items } = portfolioData.projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          role={project.role}
          technology={project.technology}
          period={project.period}
          location={project.location}
          description={project.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default Projects;
