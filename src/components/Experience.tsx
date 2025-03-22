
import SectionTitle from './SectionTitle';
import ExperienceCard from './ExperienceCard';
import { portfolioData } from '@/data/portfolioData';

const Experience = () => {
  const { title, subtitle, items } = portfolioData.experience;

  return (
    <section id="experience" className="section">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
      />
      
      <div className="space-y-6">
        {items.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            title={experience.title}
            period={experience.period}
            location={experience.location}
            description={experience.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
