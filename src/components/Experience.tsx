
import SectionTitle from './SectionTitle';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      company: "NXP Semiconductors",
      title: "AI Compiler Engineer",
      period: "October 2024 – Current",
      location: "Munich, Germany",
      description: [
        "Use TVM, MLIR and IREE to match ML workloads to NPUs.",
        "Working with the System Architect team in Hamburg to adapt NPU to new architectures."
      ]
    },
    {
      company: "Chair of AI Processor Design - TUM",
      title: "Research Assistant",
      period: "May 2024 – September 2024",
      location: "Munich, Germany",
      description: [
        "Wrapping and deployment of RISC-V cores on FPGA.",
        "Deployment and test on FPGAs of RISC-V cores for ML using ASIP Designer."
      ]
    },
    {
      company: "Infineon Technologies GmbH",
      title: "Embedded ML Engineer",
      period: "May 2023 – April 2024",
      location: "Munich, Germany",
      description: [
        "Implemented Radar-Based application with Spiking Neural Networks, processing pipeline for real-time systems and deployed on ad-hoc hardware."
      ]
    },
    {
      company: "Mentalab GmbH",
      title: "Working Student at Start-Up",
      period: "October 2022 – April 2023",
      location: "Munich, Germany",
      description: [
        "Implemented real-time pipeline for EEG recordings and classification.",
        "Scheduling materials and hardware supply (coordination between sales and tech team)."
      ]
    },
    {
      company: "Informatics Department - TUM",
      title: "GPU System Administrator",
      period: "April 2022 – October 2022",
      location: "Munich, Germany",
      description: [
        "Facilitated the deployment of training jobs for research personnel focussed on federated learning by using the NVIDIA CUDA framework and OpenStack."
      ]
    },
    {
      company: "Leibniz-Institute for Systembiology - TUM",
      title: "IT Support at research institute",
      period: "Marz 2021 – April 2022",
      location: "Munich, Germany",
      description: [
        "Provide technical assistance to researchers while designing and maintaining technological services: Cloud, Broker and Data Banks."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <SectionTitle 
        title="Work Experience" 
        subtitle="My professional journey in tech and research"
      />
      
      <div className="space-y-0">
        {experiences.map((experience, index) => (
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
