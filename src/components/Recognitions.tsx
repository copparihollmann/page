
import { Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Recognitions = () => {
  const { items } = portfolioData.recognitions;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((recognition, index) => (
        <div 
          key={index}
          className="bg-dark-green/30 rounded-lg p-6 border border-cream/10 hover:border-light-brown/30 transition-all duration-300 animate-fade-in flex items-start"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <span className="bg-warm-brown/20 p-2 rounded-md mr-4 flex-shrink-0">
            <Award size={20} className="text-light-brown" />
          </span>
          <p className="text-cream">{recognition}</p>
        </div>
      ))}
    </div>
  );
};

export default Recognitions;
