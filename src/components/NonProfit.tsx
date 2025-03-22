
import SectionTitle from './SectionTitle';
import ExperienceCard from './ExperienceCard';
import { portfolioData } from '@/data/portfolioData';

const NonProfit = () => {
  const { title, subtitle, items } = portfolioData.nonprofit;

  return (
    <section id="nonprofit" className="section bg-dark-green/30">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
      />
      
      <div className="space-y-6">
        {items.map((nonprofit, index) => (
          <ExperienceCard
            key={index}
            company={nonprofit.company}
            title={nonprofit.title}
            period={nonprofit.period}
            location={nonprofit.location}
            description={nonprofit.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default NonProfit;
