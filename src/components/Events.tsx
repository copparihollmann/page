
import { CalendarDays, Users, Mic } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Events = () => {
  const { organized, speaker, volunteer } = portfolioData.events;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="animate-fade-in">
        <div className="flex items-center mb-6">
          <span className="bg-warm-brown/20 p-2 rounded-md mr-3">
            <CalendarDays size={24} className="text-light-brown" />
          </span>
          <h3 className="text-xl font-medium text-cream">Organized Events</h3>
        </div>
        
        <ul className="space-y-4">
          {organized.map((event, index) => (
            <li key={index} className="bg-dark-olive/30 p-4 rounded-md border border-cream/5">
              <p className="text-cream">{event}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
        <div className="flex items-center mb-6">
          <span className="bg-warm-brown/20 p-2 rounded-md mr-3">
            <Mic size={24} className="text-light-brown" />
          </span>
          <h3 className="text-xl font-medium text-cream">Speaker At</h3>
        </div>
        
        <ul className="space-y-4">
          {speaker.map((event, index) => (
            <li key={index} className="bg-dark-olive/30 p-4 rounded-md border border-cream/5">
              <p className="text-cream">{event}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center mb-6">
          <span className="bg-warm-brown/20 p-2 rounded-md mr-3">
            <Users size={24} className="text-light-brown" />
          </span>
          <h3 className="text-xl font-medium text-cream">Volunteer</h3>
        </div>
        
        <ul className="space-y-4">
          {volunteer.map((event, index) => (
            <li key={index} className="bg-dark-olive/30 p-4 rounded-md border border-cream/5">
              <p className="text-cream">{event}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Events;
