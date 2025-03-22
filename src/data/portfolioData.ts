
export const portfolioData = {
  hero: {
    name: "Agustin N. Coppari Hollmann",
    title: "Electrical Engineering Student",
    description: "Argentinian Electrical engineering student specializing in neuromorphic computing, embedded systems, and hardware design."
  },
  
  about: {
    paragraphs: [
      "I'm an electrical engineering student with a strong interest in hardware design, neuromorphic computing, and embedded systems. My work focuses on creating practical hardware implementations inspired by biological systems, aiming to bridge theoretical innovation with real-world applications.",
      "I have experience ranging from FPGA deployments and AI compiler development to analog and digital hardware design. I enjoy collaborating in interdisciplinary teams to tackle challenging problems in innovative ways."
    ]
  },
  
  experience: {
    title: "Work Experience",
    subtitle: "My professional journey in tech and research",
    items: [
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
    ]
  },
  
  education: {
    title: "Education",
    subtitle: "Academic background and qualifications",
    items: [
      {
        institution: "TU Munich",
        degree: "M.Sc. in Electrical Engineering",
        period: "May 2024 - Present",
        location: "Munich, Germany",
        grade: "Provisional Grade: 1.5 | 58 ECTS"
      },
      {
        institution: "CDTM (TUM & LMU)",
        degree: "Honors Degree in Management Technology",
        period: "August 2024 - Present",
        location: "Munich, Germany",
        grade: "Provisional Grade: 1.1 | 8 ECTS"
      },
      {
        institution: "TU Munich",
        degree: "B.Sc. in Electrical Engineering",
        period: "October 2020 - May 2024",
        location: "Munich, Germany",
        grade: "Grade: 1.8 | 180 ECTS"
      }
    ],
    languages: [
      { language: "Spanish", level: "Mother Tongue" },
      { language: "English", level: "C1" },
      { language: "German", level: "C1" }
    ]
  },
  
  projects: {
    title: "Projects",
    subtitle: "Technical work and research initiatives",
    items: [
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
      },
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
    ]
  },
  
  nonprofit: {
    title: "Non-Profit / Volunteering",
    subtitle: "Making a difference in communities",
    items: [
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
    ]
  },
  
  events: {
    title: "Events",
    subtitle: "Organized events, speaking engagements, and volunteering",
    organized: [
      "ASIP Designer Hackathon by neuroTUM with support from Synopsys Inc. and TUM — 05/2024",
      "Neurotechnology seminar by neuroTUM with Prof. Simon Jacob — 05/2023"
    ],
    speaker: [
      "Future of Compute - Presenting neuroTUM e.V. - 05/2024"
    ],
    volunteer: [
      "Future of Computing Conference - Unternehmertum — 12/2024",
      "RISC-V Summit Europe 2024 — 05/2024"
    ]
  },
  
  recognitions: {
    title: "Recognitions",
    subtitle: "Awards and achievements",
    items: [
      "1st Place Neuromorphic Hackathon (2023)",
      "3rd Place Adveisor competition (2021)",
      "Best A-Level Maths grade in Argentina (2018)",
      "AICE Certificate with Distinction (2018)",
      "IGCSE Certificate with Distinction (2016)",
      "Silver Medal Southamerican Fencing Championship (2015)",
      "Bronze Medal Southamerican Fencing Championship (2014)"
    ]
  }
};
