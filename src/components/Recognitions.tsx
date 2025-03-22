
import SectionTitle from './SectionTitle';
import { Award } from 'lucide-react';

const Recognitions = () => {
  const recognitions = [
    "1st Place Neuromorphic Hackathon (2023)",
    "3rd Place Adveisor competition (2021)",
    "Best A-Level Maths grade in Argentina (2018)",
    "AICE Certificate with Distinction (2018)",
    "IGCSE Certificate with Distinction (2016)",
    "Silver Medal Southamerican Fencing Championship (2015)",
    "Bronze Medal Southamerican Fencing Championship (2014)"
  ];

  return (
    <section id="recognitions" className="section">
      <SectionTitle 
        title="Recognitions" 
        subtitle="Awards and achievements"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recognitions.map((recognition, index) => (
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
    </section>
  );
};

export default Recognitions;
