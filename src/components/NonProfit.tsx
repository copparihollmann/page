
import SectionTitle from './SectionTitle';
import ExperienceCard from './ExperienceCard';

const NonProfit = () => {
  const nonprofits = [
    {
      company: "neuroTUM e.V.",
      title: "Co-Founder, Board Member, Group Lead",
      period: "October 2022 – Present",
      location: "Munich, Germany",
      description: [
        "Manage an interdisciplinary student-led non-profit research organization (~60 members), ensuring a healthy and productive work environment, and overseeing legal, financial, and bureaucratic matters.",
        "Lead the Brain-Inspired Computing group, coordinating HW and SW teams, organizing tasks, and hosting events.",
        "Founded and led the Machine Learning for BCI project (2022–2023), developing a non-invasive brain-computer-interface (BCI) system."
      ]
    },
    {
      company: "LATUM",
      title: "Co-Founder, Board Member",
      period: "March 2024 – Present",
      location: "Munich, Germany",
      description: [
        "Established LATUM (Latin American At TUM) to create an inclusive environment at TUM through cultural exchanges, social events, corporate networking, and tailored support for Latin American students."
      ]
    },
    {
      company: "TUM.ai",
      title: "Task-Force Lead, Member at R&D Team",
      period: "October 2023 – October 2024",
      location: "Munich, Germany",
      description: [
        "Task-Force Lead (May 2024 – Oct 2024): Coordinating the Alumni Network at TUM.ai to strengthen connections and foster collaboration.",
        "Member at R&D Team (Oct 2023 – May 2024): Contributed to the Terrain Segmentation project for a Martian Rover, a collaboration with the student initiative WARR."
      ]
    },
    {
      company: "TECHO",
      title: "Volunteer",
      period: "June 2017 – October 2018",
      location: "La Plata, Argentina",
      description: [
        "Construction of houses for the people in endangered settlements - Raise funds for projects - Identify the families that needed economical/social aid."
      ]
    }
  ];

  return (
    <section id="nonprofit" className="section bg-dark-green/30">
      <SectionTitle 
        title="Non-Profit / Volunteering" 
        subtitle="Making a difference in communities"
      />
      
      <div className="space-y-6">
        {nonprofits.map((nonprofit, index) => (
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
