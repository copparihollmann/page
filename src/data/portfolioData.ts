export const portfolioData = {
  hero: {
    name: "Agustin N. Coppari Hollmann",
    title: "ML Compiler Engineer & Researcher",
    description: "Electrical Engineering student specializing in ML Compiler Infrastructure, HW/SW Co-Design, RISC-V Architecture, and AI Acceleration."
  },
  
  about: {
    paragraphs: [
      "I'm an ML Compiler Engineer and Electrical Engineering student with a strong focus on hardware design, neuromorphic computing, robotics co-optimization, and embedded systems. My work bridges theoretical innovation with real-world applications by creating end-to-end compiler pipelines and practical hardware implementations.",
      "My technical stack includes MLIR Dialects, IREE, TVM, LLVM IR, Cuda Tile IR, Tiling & Fusion, RTOS (Zephyr), XNNPACK, Torch Dynamo, Graph Optimization and Quantization, Triton, and cuTile. I am highly proficient in C/C++ (Modern C++ 17/20), Python (PyTorch 2.0), Go, C, Verilog, VHDL, SystemVerilog, MATLAB, and LaTeX.",
      "I have extensive experience deploying RISC-V cores (RVV, Custom Extensions), mapping machine learning workloads to AI accelerators and proprietary NPUs, and utilizing tools like Vivado Design Suite, Synopsys ASIP Designer, Fusion Compiler, Docker, OpenStack, Chipyard, FireSim, CMake, Neo4j, and H-SPICE."
    ]
  },
  
  experience: {
    title: "Engineering & Research Experience",
    subtitle: "My professional journey in engineering, research, and teaching",
    items: [
      {
        company: "UC Berkeley - SLICE Lab",
        title: "Visiting Researcher -- ML Compiler Infrastructure",
        period: "August 2025 – Present",
        location: "Berkeley, USA",
        description: [
          "Compiler Stack for UCB-BAR: Developing an IREE compiler plugin to enable MLIR infrastructure and optimizations for custom kernels and targets within the Berkeley Architecture Research (BAR) ecosystem.",
          "Merlin Infrastructure: Building the 'Merlin' lowering pipeline using IREE and MLIR to bridge high-level frontends (PyTorch) with Chipyard. Enables direct code generation for RISC-V RVV targets and microkernels for the Saturn Outer Product Unit.",
          "RoboIR Dialect: Designing a robotics-specific MLIR dialect to represent ROS graphs, enabling domain-specific optimizations for temporal and data dependencies before lowering to LLVM IR.",
          "Exploring E2XPU to create a framework enabling code generation for multiple 'X Product Units' to support diverse commercial or research hardware."
        ]
      },
      {
        company: "NXP Semiconductors",
        title: "AI Compiler Engineer (Working Student)",
        period: "October 2024 – July 2025",
        location: "Munich, Germany",
        description: [
          "NPU Workload Mapping: Utilized XNNPACK, MLIR, and IREE to map complex Machine Learning workloads onto NXP's proprietary Neural Processing Units (NPUs).",
          "Architecture Feedback: Collaborated with the System Architect team to identify compiler-hardware bottlenecks. Feedback on instruction set limitations informed the adaptation of the NPU architecture."
        ]
      },
      {
        company: "Chair of Electronic Design Automation - TUM",
        title: "Research Lead -- HW/SW Co-Design",
        period: "May 2025 – August 2025",
        location: "Munich, Germany",
        description: [
          "AMD Competition Winner: Led the team that won the AMD Open Hardware Competition 2025.",
          "ViT Acceleration: Defined the compiler strategy for Vision Transformer acceleration. Leveraged MLIR and IREE to offload attention-mechanism operations to an Integer Transformer Accelerator (ITA) designed by PULP and synthesized on a Kria FPGA."
        ]
      },
      {
        company: "Infineon Technologies GmbH",
        title: "Embedded ML Engineer (Working Student)",
        period: "May 2023 – April 2024",
        location: "Munich, Germany",
        description: [
          "ML Compiler for Neuromorphic Accelerator: Implemented real-time Radar-based applications using Spiking Neural Networks (SNNs) on the Innatera accelerator and applied SNN specific optimizations through PyTorch compiler.",
          "Benchmarked SNN frameworks against ad-hoc hardware deployments."
        ]
      },
      {
        company: "Chair of AI Processor Design - TUM",
        title: "Research Assistant",
        period: "April 2024 – September 2024",
        location: "Munich, Germany",
        description: [
          "RISC-V Deployment: Deployed ML-optimized RISC-V cores generated via Synopsys Application Specific Instruction-set Processor (ASIP) Designer on FPGAs.",
          "Validated the flow from no-dependency ML network in C compiled to RTL execution."
        ]
      },
      {
        company: "Mentalab GmbH",
        title: "R&D Engineer (Working Student)",
        period: "October 2022 – April 2023",
        location: "Munich, Germany",
        description: [
          "Implemented real-time biosignal processing pipelines for mobile EEG recording and classification.",
          "Coordinated the supply chain and material scheduling, liaising between sales and technical teams."
        ]
      },
      {
        company: "Chair of Neuroelectronics - TUM",
        title: "Research Assistant",
        period: "April 2022 – October 2022",
        location: "Munich, Germany",
        description: [
          "Developed a pipeline for processing EEG experimental data and feature extraction.",
          "Implemented and compared Deep Learning architectures (Transformers, LSTM, CNNs) using PyTorch and TensorFlow for multi-label classification of Event Related Potentials (ERPs)."
        ]
      },
      {
        company: "Informatics Department - TUM",
        title: "GPU System Administrator",
        period: "May 2022 – October 2022",
        location: "Munich, Germany",
        description: [
          "Managed HPC training jobs for federated learning research using NVIDIA CUDA and OpenStack."
        ]
      },
      {
        company: "Leibniz-Institute for Food Systems Biology",
        title: "IT Specialist (Research Support)",
        period: "March 2021 – April 2022",
        location: "Freising, Germany",
        description: [
          "Designed and maintained technological services including Cloud, Broker, and Data Banks. Provided technical assistance to researchers to facilitate their use of the computational environment."
        ]
      },
      {
        company: "Self-Employed",
        title: "Private Tutor",
        period: "March 2017 – February 2020",
        location: "La Plata, Argentina",
        description: [
          "Taught Mathematics, Physics, and Chemistry to students aged 6-20. Prepared students for University entrance exams (UNLP) and National Science Olympiads.",
          "Provided low-cost classes to ensure access for students with limited income."
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
        degree: "M.Sc. in Electrical Engineering and Information Systems",
        period: "April 2024 - July 2026",
        location: "Munich, Germany",
        grade: "Current Grade: 1.6"
      },
      {
        institution: "CDTM (TUM & LMU)",
        degree: "Honors Degree in Technology Management",
        period: "August 2024 - July 2026",
        location: "Munich, Germany",
        grade: "Current Grade: 1.0"
      },
      {
        institution: "TU Munich",
        degree: "B.Sc. in Electrical Engineering and Information Technology",
        period: "October 2020 - March 2024",
        location: "Munich, Germany",
        grade: "Final Grade: 1.8 | 180 ECTS | Thesis: 'Exploring the Potential of CNNs, LSTMs, Transformers and SNNs for EEG Signal Analysis and Offline Classification'"
      },
      {
        institution: "School Patris",
        degree: "AICE & IGCSE Cambridge Certificates",
        period: "2016 - 2018",
        location: "Buenos Aires, Argentina",
        grade: "Awarded with Distinction. Best grade in Mathematics in Argentina at A-levels (AICE). Total 380 points."
      }
    ],
    languages: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "C2" },
      { language: "German", level: "C1" },
      { language: "Portuguese", level: "Basic" }
    ]
  },
  
  projects: {
    title: "Technical Projects",
    subtitle: "Hardware architecture, compiler infrastructure, and ML initiatives",
    items: [
      {
        title: "Merlin (MLIR-in) Compiler Infrastructure",
        role: "IREE, MLIR, RISC-V",
        technology: "Compiler Infrastructure",
        period: "Aug 2025 - Present",
        location: "UC Berkeley",
        description: [
          "Developed an end-to-end lowering funnel connecting PyTorch/ONNX to custom RISC-V silicon (Saturn OPU). Implemented custom IREE dispatch logic to map microkernels to hardware accelerators.",
          "Extended Merlin to support the SpacemiT K-60 NPU by exposing custom LLVM intrinsics for fp8/int8 MLIR codegen and tiling.",
          "Prototyped new TPU hardware flows by quantizing and lowering a Vision-Language-Action (smolVLA) model.",
          "[GitHub: https://github.com/copparihollmann/merlin]"
        ]
      },
      {
        title: "mlirEvolve: Agentic Compiler Framework",
        role: "Python, Neo4j, LLMs, MLIR, OpenEvolve",
        technology: "AI & Compiler Automation",
        period: "Dec 2025 - Present",
        location: "Independent Research",
        description: [
          "Created a framework (MCP) to automate MLIR development.",
          "Implemented a mining engine to extract 'gold standard' code/test recipes from LLVM history and a semantic code graph ingestor using SCIP.",
          "[GitHub: https://github.com/copparihollmann/mlirEvolve/tree/main]"
        ]
      },
      {
        title: "AI Compiler ViT on FPGA for Drone Simulation",
        role: "MLIR, IREE, Kria FPGA",
        technology: "HW/SW Co-Design",
        period: "May 2025 - Aug 2025",
        location: "Chair of EDA at TUM",
        description: [
          "Developed a HW/SW co-design compiler stack for Vision Transformer acceleration, using MLIR and IREE to offload attention mechanisms to a PULP-based core.",
          "Drafting a research paper detailing the MLIR and IREE methodologies used in the winning AMD Open Hardware Competition project.",
          "[GitHub: https://github.com/openhardware-initiative/drone-oa-iree-vit-accelerator] | [Demo: https://www.youtube.com/watch?v=RXjw670piBA]"
        ]
      },
      {
        title: "RISC-V Ecosystem Survey",
        role: "Neo4j and Go",
        technology: "Web Development, Database",
        period: "Aug 2025 - Present",
        location: "MIT CSAIL (Collab: Dr. Neil Thompson, Dr. Emanuele Del Sozzo)",
        description: [
          "Collaborating on a technical and economic analysis of the RISC-V ecosystem. Creating a database of hardware and software stack relationships using Neo4j."
        ]
      },
      {
        title: "Smart Scheduling of High Energy Processes",
        role: "Go, Algorithms",
        technology: "Algorithm Development",
        period: "Oct 2024 - Jan 2025",
        location: "Ecoplanet / CDTM",
        description: [
          "Developed a constraint-aware algorithm in Go to optimize industrial resource allocation based on fluctuating energy prices (Ecoplanet/CDTM project)."
        ]
      },
      {
        title: "SNN in RTL for FPGA",
        role: "Verilog, Python",
        technology: "Hardware Design, Neuromorphic",
        period: "Oct 2024 - Feb 2025",
        location: "Institute of Cognitive Systems at TUM",
        description: [
          "Implemented a fully connected Spiking Neural Network in Verilog. Deployed on Pynq Z1 FPGA to classify event-based data.",
          "[GitHub: https://github.com/neuroTUM/DenseSpikingRTL]"
        ]
      },
      {
        title: "SpikingC Library",
        role: "C, ASIP Designer",
        technology: "Library Development",
        period: "Oct 2023 - Feb 2024",
        location: "neuroTUM e.V.",
        description: [
          "Developed an open-source C library for SNN Inference. Optimized memory layout for efficient lowering to custom RISC-V vector extensions.",
          "[GitHub: https://github.com/neuroTUM/SpikingC]"
        ]
      },
      {
        title: "IDEA Algorithm on FPGA",
        role: "VHDL, Vivado",
        technology: "Hardware Implementation",
        period: "Oct 2023 - Feb 2024",
        location: "Chair of EDA at TUM",
        description: [
          "Implemented a resource-constrained International Data Encryption Algorithm (IDEA) on an ARTIX 7 FPGA."
        ]
      },
      {
        title: "Analog Implementation of SRAM & HDC",
        role: "H-SPICE",
        technology: "Analog Design, Computing",
        period: "Oct 2023 - Feb 2024",
        location: "Chair of AI Processor Design at TUM",
        description: [
          "Simulated Analog SRAM and Hyper-dimensional Computing (HDC) cells for language classification tasks."
        ]
      },
      {
        title: "Continual Learning Prototypes",
        role: "Lava Framework, Intel Loihi",
        technology: "Neuromorphic Computing",
        period: "May 2023 - Aug 2023",
        location: "Intel / Fortiss",
        description: [
          "Deployed Continual Learning prototypes using the Lava framework on Intel Loihi neuromorphic chips, demonstrating one-shot learning capabilities.",
          "[GitHub: https://github.com/neuroTUM/fortissHackathon2023-gestures]"
        ]
      }
    ]
  },
  
  nonprofit: {
    title: "Leadership & Volunteering",
    subtitle: "Making a difference in communities and fostering research",
    items: [
      {
        company: "OpenHardware Initiative",
        title: "Co-Founder, Co-Director, Advisor",
        period: "April 2025 – Present",
        location: "Munich, Germany",
        description: [
          "Founded the first student-led research organization for HW/SW Co-design in Germany to promote research in end-to-end hardware acceleration and fund our own projects.",
          "Coordinated projects spanning chip design, AI processors, EDA tools, and robotics."
        ]
      },
      {
        company: "neuroTUM e.V.",
        title: "Co-Founder, Board Member, Group Lead",
        period: "October 2022 – August 2025",
        location: "Munich, Germany",
        description: [
          "Co-founded and scaled the organization from 4 to ~60 members, managing legal and financial operations.",
          "Led the Brain-Inspired Computing group and a non-invasive BCI project that competed in the Cybathlon 2024.",
          "Organized the first 'ASIP Designer Hackathon' with Synopsys."
        ]
      },
      {
        company: "LATUM (Latin Americans At TUM)",
        title: "Co-Founder, Board Member",
        period: "March 2024 – August 2025",
        location: "Munich, Germany",
        description: [
          "Established an initiative to foster inclusion, providing cultural exchange and corporate networking for Latin Americans and people interested in the Latin American culture."
        ]
      },
      {
        company: "TUM.ai",
        title: "Task-Force Lead, R&D Team Member",
        period: "October 2023 – October 2024",
        location: "Munich, Germany",
        description: [
          "Task-Force Lead: Led the Alumni Network task-force focusing on alumni relations.",
          "R&D: Contributed to a Mars Rover terrain segmentation project in collaboration with WARR."
        ]
      },
      {
        company: "Adveisor Program (TUM)",
        title: "Student Mentor",
        period: "October 2021 – August 2022",
        location: "Munich, Germany",
        description: [
          "Mentored electrical engineering students on soft skills and resilience. Guided the design of autonomous irrigation stations using Arduino."
        ]
      },
      {
        company: "School Patris Student Center",
        title: "President",
        period: "March 2017 – October 2018",
        location: "City Bell, Argentina",
        description: [
          "Elected president by the student body. Managed student funds, organized events, and mediated between students and administration."
        ]
      },
      {
        company: "TECHO",
        title: "Volunteer",
        period: "June 2017 – October 2018",
        location: "La Plata, Argentina",
        description: [
          "Participated in the construction of transitional housing in endangered settlements. Assisted in fundraising and identifying families in need of support."
        ]
      }
    ]
  },
  
  events: {
    title: "Talks, Publications & Events",
    subtitle: "Publications, speaking engagements, and organized events",
    organized: [
      "ASIP Designer Hackathon by neuroTUM with Synopsys Inc. — 05/2024",
      "Neuromorphic Hackathon by neuroTUM with Fortiss — 2023",
      "Neurotechnology seminar by neuroTUM with Prof. Simon Jacob — 05/2023"
    ],
    speaker: [
      "Presented 'RoboRT: Fidelity-Aware DSE' and 'Software Stack for RVV' at Berkeley ATHLETE (2025).",
      "Presented 'Heterogeneous Compute Acceleration' (Poster) at Design Automation Conference (DAC) 2025.",
      "Eger, V., et al. including Coppari-Hollmann, A. (2024). 'The Future of Software Engineering and IT Operations' (Publication)",
      "Coppari Hollmann, A., et al. (2024). 'Presenting the Brain-Inspired Computing group at neuroTUM' (Invited Talk) - Future of Compute"
    ],
    volunteer: [
      "Future of Computing Conference - Unternehmertum — 12/2024",
      "RISC-V Summit Europe 2024 — 05/2024"
    ]
  },
  
  recognitions: {
    title: "Honors, Awards & Scholarships",
    subtitle: "Academic and professional achievements",
    items: [
      "Winner AMD Open Hardware Competition (2025)",
      "P.O. Pistilli DAC Ambassador Award (2025)",
      "1st Place ICLAD GenAI Chip Hackathon (2025)",
      "DAC Young Fellow (2025)",
      "Scholarships (2025): Deutschlandstipendium, Rohde & Schwarz, Muehlfenzl Stiftung, Erich Mueller-Stiftung, Network Engagement, Hans-Rudolf-Stiftung, Foerderverein K.Fordan",
      "1st Place Neuromorphic Hackathon (2023)",
      "3rd Place Adveisor Competition (2021)",
      "Best A-Level Maths grade in Argentina (2018)",
      "AICE Certificate with Distinction (2018)",
      "IGCSE Certificate with Distinction (2016)",
      "Silver Medal South American Fencing Championship (2015)",
      "Bronze Medal South American Fencing Championship (2014)",
      "National Champion in Argentina for Sable in Fencing (2012-2014)"
    ]
  }
};
