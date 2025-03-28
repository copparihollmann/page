
import { GraduationCap, Globe } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Education = () => {
  const { items, languages } = portfolioData.education;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-dark-green/30 rounded-lg p-6 border border-cream/10 hover:border-light-brown/30 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start mb-4">
              <div className="bg-warm-brown/20 p-2 rounded-md mr-4">
                <GraduationCap size={24} className="text-light-brown" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-cream">{item.institution}</h3>
                <p className="text-light-brown">{item.degree}</p>
              </div>
            </div>
            <div className="ml-12">
              <p className="text-silver text-sm mb-1">{item.period}</p>
              <p className="text-silver text-sm mb-3">{item.location}</p>
              <p className="text-cream/80 text-sm font-medium">{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-display text-light-brown mb-6">Languages</h3>
        
        <div className="bg-dark-green/30 rounded-lg p-6 border border-cream/10 animate-fade-in">
          <div className="flex items-center mb-4">
            <div className="bg-warm-brown/20 p-2 rounded-md mr-4">
              <Globe size={24} className="text-light-brown" />
            </div>
            <h4 className="text-xl font-medium text-cream">Language Proficiency</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className="p-4 bg-dark-olive/50 rounded-md border border-cream/5 text-center"
              >
                <h5 className="text-light-brown font-medium mb-1">{lang.language}</h5>
                <p className="text-cream/80">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
