
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
  titleSize?: 'default' | 'large' | 'small';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className,
  textAlign = 'left',
  titleSize = 'default',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const titleSizeClasses = {
    default: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-6xl',
    small: 'text-3xl md:text-4xl',
  };

  return (
    <div className={cn('mb-12', alignmentClasses[textAlign], className)}>
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
      <div className="w-16 h-1 bg-light-brown mt-4 mb-8 animate-fade-in-slow" 
        style={{ 
          marginLeft: textAlign === 'center' ? 'auto' : undefined, 
          marginRight: textAlign === 'center' || textAlign === 'right' ? 'auto' : undefined 
        }} 
      />
    </div>
  );
};

export default SectionTitle;
