
import React from 'react';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  className?: string;
  index?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  description,
  className,
  index = 0,
}) => {
  return (
    <div 
      className={cn(
        'border-b border-cream/10 pb-10 mb-10 last:border-b-0 last:mb-0 last:pb-0',
        'hover:bg-dark-green/20 transition-all duration-300 p-6 rounded-lg -mx-6',
        className
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
        opacity: 0,
        animation: 'fade-in 0.5s ease-out forwards',
        animationDelay: `${index * 100}ms` 
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-medium text-cream mb-1">{company}</h3>
          <h4 className="text-xl text-light-brown">{title}</h4>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <span className="text-silver block">{period}</span>
          <span className="text-silver/80 text-sm">{location}</span>
        </div>
      </div>
      
      <ul className="list-disc pl-6 space-y-2">
        {description.map((item, idx) => (
          <li key={idx} className="text-cream/90">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
