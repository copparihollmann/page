import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  description,
  index,
}) => {
  return (
    <div 
      className="bg-dark-green/30 rounded-lg overflow-hidden border border-cream/10 hover:border-light-brown/30 transition-all duration-300 h-full animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="bg-warm-brown/20 p-2 rounded-md flex-shrink-0">
            <Briefcase size={20} className="text-light-brown" />
          </div>
          <div>
            <h3 className="text-xl font-medium text-cream">{title}</h3>
            <p className="text-light-brown mb-1">{company}</p>
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

export default ExperienceCard;
