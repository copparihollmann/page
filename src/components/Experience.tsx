
import ExperienceCard from './ExperienceCard';
import { portfolioData } from '@/data/portfolioData';

const Experience = () => {
  const { items } = portfolioData.experience;

  return (
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
  );
};

export default Experience;
