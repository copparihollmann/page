
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface ExpandableSectionProps {
  title: string;
  number?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  number,
  children,
  defaultOpen = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const sectionId = title.toLowerCase();

  // Listen for expand section events
  useEffect(() => {
    const handleExpandSection = (event: CustomEvent) => {
      if (event.detail.sectionId === sectionId) {
        setIsOpen(true);
      }
    };

    // Add event listener with type assertion
    document.addEventListener('expandSection', handleExpandSection as EventListener);
    
    return () => {
      // Remove event listener with type assertion
      document.removeEventListener('expandSection', handleExpandSection as EventListener);
    };
  }, [sectionId]);

  return (
    <div id={sectionId} className={cn("border-b border-light-brown/30 py-8", className)}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex w-full items-start justify-between text-left">
          <div className="flex items-baseline">
            {number && (
              <span className="text-light-brown/60 text-xl mr-4">{number}</span>
            )}
            <h2 className="font-display text-5xl md:text-7xl text-light-brown">
              {title}
            </h2>
          </div>
          <ChevronDown 
            className={cn(
              "h-8 w-8 text-light-brown transition-transform duration-300 flex-shrink-0 mt-3", 
              isOpen && "transform rotate-180"
            )} 
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-10 md:pt-12 pl-0 md:pl-12">
          {children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ExpandableSection;
