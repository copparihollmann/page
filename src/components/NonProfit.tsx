
import ExperienceCard from './ExperienceCard';
import { portfolioData } from '@/data/portfolioData';

const NonProfit = () => {
  const { items } = portfolioData.nonprofit;

  return (
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
  );
};

export default NonProfit;
