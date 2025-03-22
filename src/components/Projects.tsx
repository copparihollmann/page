
import React from 'react';
import SectionTitle from './SectionTitle';
import { Code, Box } from 'lucide-react';

const ProjectCard = ({ title, role, technology, period, location, description, index }: {
  title: string;
  role: string;
  technology: string;
  period: string;
  location: string;
  description: string[];
  index: number;
}) => {
  return (
    <div 
      className="bg-dark-green/30 rounded-lg overflow-hidden border border-cream/10 hover:border-light-brown/30 transition-all duration-300 h-full animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="bg-warm-brown/20 p-2 rounded-md flex-shrink-0">
            <Code size={20} className="text-light-brown" />
          </div>
          <div>
            <h3 className="text-xl font-medium text-cream">{title}</h3>
            <p className="text-light-brown mb-1">{role}</p>
            <p className="text-silver/80 text-sm">{technology}</p>
          </div>
        </div>
        
        <div className="flex justify-between mb-4 text-sm text-silver/80">
          <span>{period}</span>
          <span>{location}</span>
        </div>
        
        <ul className="list-disc pl-6 space-y-2 text-cream/90">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Comparison Tool for RISC-V extensions",
      role: "Neo4j, React.js and Go",
      technology: "Web Development, Database",
      period: "2025 - Ongoing",
      location: "MIT CSAIL and Future Tech",
      description: [
        "Comparison of different RISC-V extensions for deep learning and together with a web app."
      ]
    },
    {
      title: "Smart Scheduling of High Energy Processes",
      role: "Go",
      technology: "Algorithm Development",
      period: "2024-2025",
      location: "Ecoplanet and CDTM",
      description: [
        "Developed algorithm for smart scheduling of constrained processes to reduce energy costs in German manufacturing companies."
      ]
    },
    {
      title: "SNN in RTL for FPGA",
      role: "C, Python, Verilog",
      technology: "Hardware Design, ML",
      period: "2024 - Ongoing",
      location: "Institute of Cognitive Systems at TUM",
      description: [
        "Implementation of a fully connected Spiking NN using Verilog in order to deploy it in an FPGA (Pynq Z1) and classify Event Based data."
      ]
    },
    {
      title: "Open-source SpikingC Library and RISC-V exploration",
      role: "C, C++, VHDL, ASIP Designer, Verilog",
      technology: "Library Development, Processor Design",
      period: "2023 - 2024",
      location: "neuroTUM e.V. and Chair of AI Processor Design at TUM",
      description: [
        "Leading the implementation of SNNs in C with quantization and pruning for Inference on custom instruction RISC-V processor using ASIP Designer for gestures recognition for the Brain Inspired Computing team at neuroTUM e.V."
      ]
    },
    {
      title: "Implementation of IDEA Algorithm on FPGA",
      role: "Vivado Design Suite, VHDL",
      technology: "Hardware Implementation",
      period: "2023-2024",
      location: "Chair of Electronics Design Automation at TUM",
      description: [
        "Resource Constrained implementation of the International Data Encryption Algorithm on ARTIX 7."
      ]
    },
    {
      title: "Analog implementation of SRAM and HDC",
      role: "H-SPICE, C++, Python",
      technology: "Analog Design, Computing",
      period: "2023-2024",
      location: "Chair of Brain Inspired Computing at TUM",
      description: [
        "Implementation of SRAM in Analog, as well as Hyper-dimensional Computing cells that were used to classify the language of different texts."
      ]
    }
  ];

  const additionalProjects = [
    {
      title: "Continual Learning Prototypes with Lava on Intel Loihi",
      role: "Matlab, Python",
      technology: "Neuromorphic Computing",
      period: "2023",
      location: "Intel and Fortiss",
      description: [
        "Detect novel patterns and learn these in a one-shot manner using Loihi for inference while also testing this implementation using newly recorded datasets."
      ]
    },
    {
      title: "Potential of CNNs, LSTMs, Transformers and SNNs for EEG",
      role: "Matlab, Python",
      technology: "Deep Learning, Signal Processing",
      period: "2022-2023",
      location: "Professorship of Neuroelectronics",
      description: [
        "Bachelor Thesis on comparison of the performance of different deep learning architectures and pre-processing methods for EEG signals classification and subject detection."
      ]
    }
  ];

  return (
    <section id="projects" className="section bg-dark-green/30">
      <SectionTitle 
        title="Latest Projects" 
        subtitle="Recent technical work and research"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            role={project.role}
            technology={project.technology}
            period={project.period}
            location={project.location}
            description={project.description}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-display text-light-brown mb-6">Additional Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              role={project.role}
              technology={project.technology}
              period={project.period}
              location={project.location}
              description={project.description}
              index={index + projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
