
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
  titleSize?: 'default' | 'large' | 'small';
  number?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className,
  textAlign = 'left',
  titleSize = 'default',
  number,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const titleSizeClasses = {
    default: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-7xl',
    small: 'text-3xl md:text-4xl',
  };

  return (
    <div className={cn('mb-16 relative', alignmentClasses[textAlign], className)}>
      {number && (
        <span className="text-light-brown/60 text-base md:text-xl font-medium absolute -left-8 top-4 md:top-2">
          {number}
        </span>
      )}
      <h2 
        className={cn(
          'font-display mb-2 text-light-brown animate-fade-in-slow',
          titleSizeClasses[titleSize]
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-silver mt-2 animate-fade-in">
          {subtitle}
        </p>
      )}
      <div className="w-full h-px bg-light-brown/30 mt-6 mb-8 animate-fade-in-slow" />
    </div>
  );
};

export default SectionTitle;
