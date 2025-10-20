

import { Github, Code2, ServerCog, BrainCircuit, Linkedin, Instagram, Youtube, TowerControl, GraduationCap } from 'lucide-react';

export const projects = {
  en: [
    {
      title: "InfraCenter Manager",
      description: "A management dashboard for mission-critical data center infrastructure (O&M). It replaces spreadsheets with a Single Source of Truth for all physical assets (racks, servers, network). The project evolved from a PoC (PaaS/Azure) to an HA Proxmox virtualization cluster on HP Gen9 servers (1TB+ RAM), connected to SAN Storage (HP MSA) and a 40GbE network (Cisco Nexus). It demonstrates the ability to go from front-end development to enterprise-level infrastructure architecture and implementation.",
      status: "Validated Prototype / In Production (Private Cloud)",
      technologies: ["React/Node.js (App)", "Proxmox HA", "Cisco Nexus", "HP SAN", "Terraform"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidson-dev-br/InfraCenter",
    },
    {
      title: "Association Management System (Dungeon App)",
      description: "A full-stack web platform for managing room reservations, members, and dynamic access control (ACL) for the Association. A high-value solution that automates administrative processes and includes payment gateway integration.",
      status: "Active / Launched",
      technologies: ["Next.js", "TypeScript", "Firebase/Firestore", "Tailwind CSS", "Payment Integration"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidson-dev-br/Dungeon-App/",
    }
  ],
  pt: [
    {
      title: "Gerenciador InfraCenter",
      description: "Um painel de gerenciamento para infraestrutura de data center de missão crítica (O&M). Substitui planilhas por uma Fonte Única da Verdade para todos os ativos físicos (racks, servidores, rede). O projeto evoluiu de um PoC (PaaS/Azure) para um cluster de virtualização Proxmox HA em servidores HP Gen9 (1TB+ RAM), conectado a Storage SAN (HP MSA) e rede 40GbE (Cisco Nexus). Demonstra a capacidade de ir do desenvolvimento front-end à arquitetura e implementação de infraestrutura de nível empresarial.",
      status: "Protótipo Validado / Em Produção (Nuvem Privada)",
      technologies: ["React/Node.js (App)", "Proxmox HA", "Cisco Nexus", "HP SAN", "Terraform"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidson-dev-br/InfraCenter",
    },
    {
      title: "Sistema de Gestão para Associação (Dungeon App)",
      description: "Plataforma web full-stack para gestão de reservas de salas, membros e controle de acesso dinâmico (ACL) da Associação. Solução de alto valor que automação de processos administrativos e inclui integração com gateway de pagamento.",
      status: "Ativo / Lançado",
      technologies: ["Next.js", "TypeScript", "Firebase/Firestore", "Tailwind CSS", "Integração de Pagamentos"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidson-dev-br/Dungeon-App/",
    },
  ]
};

export const skills = {
  en: [
    {
        category: "Critical Infrastructure & DevOps",
        icon: ServerCog,
        list: [
            { name: "HA Virtualization (Proxmox)", proficiency: 95 },
            { name: "SAN/ZFS Storage (HP MSA)", proficiency: 90 },
            { name: "Routing/Switching (Cisco Nexus)", proficiency: 85 },
            { name: "Orchestration (Docker / Kubernetes)", proficiency: 80 },
            { name: "IaC (Terraform) & CI/CD", proficiency: 85 },
            { name: "Cloud Providers (AWS)", proficiency: 80 },
            { name: "Nginx", proficiency: 90 },
            { name: "Ngrok", proficiency: 85 },
        ],
    },
    {
        category: "Full-Stack Development",
        icon: Code2,
        list: [
            { name: "React / Next.js (Frontend)", proficiency: 95 },
            { name: "Node.js / Express (Backend APIs)", proficiency: 90 },
            { name: "TypeScript", proficiency: 85 },
            { name: "SQL (MS SQL Server / MySQL)", proficiency: 85 },
            { name: "Python (Automation)", proficiency: 80 },
        ],
    },
    {
        category: "Telecommunications & Networks",
        icon: TowerControl,
        list: [
            { name: "Routing & Switching (BGP, OSPF)", proficiency: 90 },
            { name: "Optical Networks (DWDM)", proficiency: 85 },
            { name: "Network Monitoring", proficiency: 90 },
            { name: "Network Security (Firewalls)", proficiency: 80 },
        ],
    },
    {
        category: "Innovation & AI (Architecture)",
        icon: BrainCircuit,
        list: [
            { name: "On-Premise LLM Architecture (Ollama)", proficiency: 85 },
            { name: "Data Science (Python / Scikit-learn)", proficiency: 75 },
            { name: "Data Pipelines / ETL", proficiency: 80 },
            { name: "GenAI APIs (Integration)", proficiency: 85 },
        ],
    },
  ],
  pt: [
    {
        category: "Infraestrutura Crítica & DevOps",
        icon: ServerCog,
        list: [
            { name: "Virtualização HA (Proxmox)", proficiency: 95 },
            { name: "Storage SAN/ZFS (HP MSA)", proficiency: 90 },
            { name: "Roteamento/Switching (Cisco Nexus)", proficiency: 85 },
            { name: "Orquestração (Docker / Kubernetes)", proficiency: 80 },
            { name: "IaC (Terraform) & CI/CD", proficiency: 85 },
            { name: "Cloud Providers (AWS)", proficiency: 80 },
            { name: "Nginx", proficiency: 90 },
            { name: "Ngrok", proficiency: 85 },
        ],
    },
    {
        category: "Desenvolvimento Full-Stack",
        icon: Code2,
        list: [
            { name: "React / Next.js (Frontend)", proficiency: 95 },
            { name: "Node.js / Express (Backend APIs)", proficiency: 90 },
            { name: "TypeScript", proficiency: 85 },
            { name: "SQL (MS SQL Server / MySQL)", proficiency: 85 },
            { name: "Python (Automação)", proficiency: 80 },
        ],
    },
    {
        category: "Telecomunicações & Redes",
        icon: TowerControl,
        list: [
            { name: "Roteamento e Switching (BGP, OSPF)", proficiency: 90 },
            { name: "Redes Ópticas (DWDM)", proficiency: 85 },
            { name: "Monitoramento de Rede", proficiency: 90 },
            { name: "Segurança de Rede (Firewalls)", proficiency: 80 },
        ],
    },
    {
        category: "Inovação & IA (Arquitetura)",
        icon: BrainCircuit,
        list: [
            { name: "Arquitetura LLM On-Premise (Ollama)", proficiency: 85 },
            { name: "Data Science (Python / Scikit-learn)", proficiency: 75 },
            { name: "Pipelines de Dados / ETL", proficiency: 80 },
            { name: "APIs de GenAI (Integração)", proficiency: 85 },
        ],
    },
  ]
};

export const timeline = {
  en: [
    {
      date: "2021 - Present",
      title: "Lead Infrastructure Solutions Architect",
      company: "TIM Brasil (Data Center O&M)",
      description: "Leading the architecture and implementation of a high-availability private cloud for mission-critical O&M systems, migrating from a PaaS prototype to an on-premise Proxmox cluster.",
      icon: Briefcase,
    },
    {
      date: "2019 - 2021",
      title: "Senior Full-Stack Developer",
      company: "DataDriven Co.",
      description: "Developed and maintained core features for a high-traffic analytics platform. Optimized database queries, improving API response times by 50%. Mentored junior developers.",
      icon: Briefcase,
    },
    {
      date: "2017 - 2019",
      title: "Software Engineer",
      company: "Creative Apps LLC",
      description: "Built responsive user interfaces and RESTful APIs for various client projects. Gained proficiency in agile methodologies and version control with Git.",
      icon: Briefcase,
    },
    {
      date: "2017 - 2018",
      title: "Post-Graduate in Network Engineering",
      company: "Universidade Estácio de Sá",
      description: "Specialization focused on advanced network design, security, and management, providing a solid foundation for complex infrastructure projects.",
      icon: GraduationCap,
    },
    {
      date: "2016",
      title: "B.S. in Computer Science",
      company: "Universidade Federal Fluminense, Niterói",
      description: "Graduated with honors, focusing on distributed systems and artificial intelligence. Completed a final year project on peer-to-peer networking.",
      icon: GraduationCap,
    },
  ],
  pt: [
    {
      date: "2021 - Presente",
      title: "Arquiteto de Soluções de Infraestrutura Líder",
      company: "TIM Brasil (Data Center O&M)",
      description: "Liderando a arquitetura e implementação de uma nuvem privada de alta disponibilidade para sistemas críticos de O&M, migrando de um protótipo PaaS para um cluster Proxmox on-premise.",
      icon: Briefcase,
    },
    {
      date: "2019 - 2021",
      title: "Desenvolvedor Full-Stack Sênior",
      company: "DataDriven Co.",
      description: "Desenvolvi e mantive recursos principais para uma plataforma de análise de alto tráfego. Otimizei consultas de banco de dados, melhorando os tempos de resposta da API em 50%. Mentiorei desenvolvedores juniores.",
      icon: Briefcase,
    },
    {
      date: "2017 - 2019",
      title: "Engenheiro de Software",
      company: "Creative Apps LLC",
      description: "Construí interfaces de usuário responsivas e APIs RESTful para vários projetos de clientes. Ganhei proficiência em metodologias ágeis e controle de versão com Git.",
      icon: Briefcase,
    },
    {
      date: "2017 - 2018",
      title: "Pós-Graduação em Engenharia de Redes",
      company: "Universidade Estácio de Sá",
      description: "Especialização com foco em projeto, segurança e gerenciamento avançado de redes, fornecendo uma base sólida para projetos de infraestrutura complexa.",
      icon: GraduationCap,
    },
    {
      date: "2016",
      title: "Bacharel em Ciência da Computação",
      company: "Universidade Federal Fluminense, Niterói",
      description: "Formado com honras, com foco em sistemas distribuídos e inteligência artificial. Concluí um projeto de final de ano sobre redes ponto a ponto.",
      icon: GraduationCap,
    },
  ]
};


export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidson-dev-br' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/davidson.dev.br' },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@davidson.developer' },
];

    




    

    