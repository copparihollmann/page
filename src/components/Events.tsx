
import SectionTitle from './SectionTitle';
import { CalendarDays, Users, Mic, Calendar } from 'lucide-react';

const Events = () => {
  const organizedEvents = [
    "ASIP Designer Hackathon by neuroTUM with support from Synopsys Inc. and TUM — 05/2024",
    "Neurotechnology seminar by neuroTUM with Prof. Simon Jacob — 05/2023"
  ];

  const speakerEvents = [
    "Future of Compute - Presenting neuroTUM e.V. - 05/2024"
  ];

  const volunteerEvents = [
    "Future of Computing Conference - Unternehmertum — 12/2024",
    "RISC-V Summit Europe 2024 — 05/2024"
  ];

  return (
    <section id="events" className="section bg-dark-green/30">
      <SectionTitle 
        title="Events" 
        subtitle="Organized events, speaking engagements, and volunteering"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="animate-fade-in">
          <div className="flex items-center mb-6">
            <span className="bg-warm-brown/20 p-2 rounded-md mr-3">
              <CalendarDays size={24} className="text-light-brown" />
            </span>
            <h3 className="text-xl font-medium text-cream">Organized Events</h3>
          </div>
          
          <ul className="space-y-4">
            {organizedEvents.map((event, index) => (
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
            {speakerEvents.map((event, index) => (
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
            {volunteerEvents.map((event, index) => (
              <li key={index} className="bg-dark-olive/30 p-4 rounded-md border border-cream/5">
                <p className="text-cream">{event}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Events;
