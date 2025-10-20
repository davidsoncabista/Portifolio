import { Github, Code2, ServerCog, BrainCircuit, Linkedin, Instagram, Youtube, TowerControl, GraduationCap, Briefcase } from 'lucide-react';

export const projects = {
  en: [
    {
      title: "InfraCenter Manager",
      description: "A management dashboard for mission-critical data center infrastructure (O&M). It replaces spreadsheets with a Single Source of Truth for all physical assets (racks, servers, network). The project evolved from a PoC (PaaS/Azure) to an HA Proxmox virtualization cluster on HP Gen9 servers (1TB+ RAM), connected to SAN Storage (HP MSA) and a 40GbE network (Cisco Nexus). It demonstrates the ability to go from front-end development to enterprise-level infrastructure architecture and implementation.",
      status: "Validated Prototype / In Production (Private Cloud)",
      technologies: ["React/Node.js (App)", "Proxmox HA", "Cisco Nexus", "HP SAN", "Terraform"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidsoncabista/Portifolio",
    },
    {
      title: "Association Management System (Dungeon App)",
      description: "A full-stack web platform for managing room reservations, members, and dynamic access control (ACL) for the Association. A high-value solution that automates administrative processes and includes payment gateway integration.",
      status: "Active / Launched",
      technologies: ["Next.js", "TypeScript", "Firebase/Firestore", "Tailwind CSS", "Payment Integration"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidsoncabista/Portifolio",
    }
  ],
  pt: [
    {
      title: "Gerenciador InfraCenter",
      description: "Um painel de gerenciamento para infraestrutura de data center de missão crítica (O&M). Substitui planilhas por uma Fonte Única da Verdade para todos os ativos físicos (racks, servidores, rede). O projeto evoluiu de um PoC (PaaS/Azure) para um cluster de virtualização Proxmox HA em servidores HP Gen9 (1TB+ RAM), conectado a Storage SAN (HP MSA) e rede 40GbE (Cisco Nexus). Demonstra a capacidade de ir do desenvolvimento front-end à arquitetura e implementação de infraestrutura de nível empresarial.",
      status: "Protótipo Validado / Em Produção (Nuvem Privada)",
      technologies: ["React/Node.js (App)", "Proxmox HA", "Cisco Nexus", "HP SAN", "Terraform"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidsoncabista/Portifolio",
    },
    {
      title: "Sistema de Gestão para Associação (Dungeon App)",
      description: "Plataforma web full-stack para gestão de reservas de salas, membros e controle de acesso dinâmico (ACL) da Associação. Solução de alto valor que automação de processos administrativos e inclui integração com gateway de pagamento.",
      status: "Ativo / Lançado",
      technologies: ["Next.js", "TypeScript", "Firebase/Firestore", "Tailwind CSS", "Integração de Pagamentos"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidsoncabista/Portifolio",
    },
  ]
};

export const skills = {
  en: [
    {
        category: "Critical Infrastructure & DevOps",
        icon: ServerCog,
        list: [
            { name: "HA Virtualization (Proxmox)", proficiency: 95, logo: "https://cdn.simpleicons.org/proxmox/E57000" },
            { name: "SAN/ZFS Storage (HP MSA)", proficiency: 90, logo: "https://cdn.simpleicons.org/truenas/0095D5" },
            { name: "Routing/Switching (Cisco Nexus)", proficiency: 85, logo: "https://cdn.simpleicons.org/cisco/1BA0D7" },
            { name: "Orchestration (Docker / Kubernetes)", proficiency: 80, logo: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "IaC (Terraform) & CI/CD", proficiency: 85, logo: "https://cdn.simpleicons.org/terraform/7B42BC" },
            { name: "Cloud Providers (AWS)", proficiency: 80, logo: "https://cdn.simpleicons.org/amazonaws/FF9900" },
            { name: "Nginx", proficiency: 90, logo: "https://cdn.simpleicons.org/nginx/009639" },
        ],
    },
    {
        category: "Full-Stack Development",
        icon: Code2,
        list: [
            { name: "React / Next.js (Frontend)", proficiency: 95, logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: "Node.js / Express (Backend APIs)", proficiency: 90, logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
            { name: "TypeScript", proficiency: 85, logo: "https://cdn.simpleicons.org/typescript/3178C6" },
            { name: "SQL (MS SQL Server / MySQL)", proficiency: 85, logo: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: "Python (Automation)", proficiency: 80, logo: "https://cdn.simpleicons.org/python/3776AB" },
        ],
    },
    {
        category: "Telecommunications & Networks",
        icon: TowerControl,
        list: [
            { name: "Routing & Switching (BGP, OSPF)", proficiency: 90, logo: "https://cdn.simpleicons.org/cisco/1BA0D7" },
            { name: "Optical Networks (DWDM)", proficiency: 85, logo: "https://img.icons8.com/ios/50/fiber-optic.png" },
            { name: "Network Monitoring", proficiency: 90, logo: "https://img.icons8.com/ios/50/network.png" },
            { name: "Network Security (Firewalls)", proficiency: 80, logo: "https://img.icons8.com/ios/50/firewall.png" },
        ],
    },
    {
        category: "Innovation & AI (Architecture)",
        icon: BrainCircuit,
        list: [
            { name: "On-Premise LLM Architecture (Ollama)", proficiency: 85, logo: "https://ollama.com/public/ollama.png" },
            { name: "Data Science (Python / Scikit-learn)", proficiency: 75, logo: "https://cdn.simpleicons.org/scikitlearn/F7931D" },
            { name: "Data Pipelines / ETL", proficiency: 80, logo: "https://img.icons8.com/ios/50/data-transfer.png" },
            { name: "GenAI APIs (Integration)", proficiency: 85, logo: "https://cdn.simpleicons.org/googlegemini/8E77F0" },
        ],
    },
  ],
  pt: [
    {
        category: "Infraestrutura Crítica & DevOps",
        icon: ServerCog,
        list: [
            { name: "Virtualização HA (Proxmox)", proficiency: 95, logo: "https://cdn.simpleicons.org/proxmox/E57000" },
            { name: "Storage SAN/ZFS (HP MSA)", proficiency: 90, logo: "https://cdn.simpleicons.org/truenas/0095D5" },
            { name: "Roteamento/Switching (Cisco Nexus)", proficiency: 85, logo: "https://cdn.simpleicons.org/cisco/1BA0D7" },
            { name: "Orquestração (Docker / Kubernetes)", proficiency: 80, logo: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "IaC (Terraform) & CI/CD", proficiency: 85, logo: "https://cdn.simpleicons.org/terraform/7B42BC" },
            { name: "Cloud Providers (AWS)", proficiency: 80, logo: "https://cdn.simpleicons.org/amazonaws/FF9900" },
            { name: "Nginx", proficiency: 90, logo: "https://cdn.simpleicons.org/nginx/009639" },
        ],
    },
    {
        category: "Desenvolvimento Full-Stack",
        icon: Code2,
        list: [
            { name: "React / Next.js (Frontend)", proficiency: 95, logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: "Node.js / Express (Backend APIs)", proficiency: 90, logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
            { name: "TypeScript", proficiency: 85, logo: "https://cdn.simpleicons.org/typescript/3178C6" },
            { name: "SQL (MS SQL Server / MySQL)", proficiency: 85, logo: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: "Python (Automação)", proficiency: 80, logo: "https://cdn.simpleicons.org/python/3776AB" },
        ],
    },
    {
        category: "Telecomunicações & Redes",
        icon: TowerControl,
        list: [
            { name: "Roteamento e Switching (BGP, OSPF)", proficiency: 90, logo: "https://cdn.simpleicons.org/cisco/1BA0D7" },
            { name: "Redes Ópticas (DWDM)", proficiency: 85, logo: "https://img.icons8.com/ios/50/fiber-optic.png" },
            { name: "Monitoramento de Rede", proficiency: 90, logo: "https://img.icons8.com/ios/50/network.png" },
            { name: "Segurança de Rede (Firewalls)", proficiency: 80, logo: "https://img.icons8.com/ios/50/firewall.png" },
        ],
    },
    {
        category: "Inovação & IA (Arquitetura)",
        icon: BrainCircuit,
        list: [
            { name: "Arquitetura LLM On-Premise (Ollama)", proficiency: 85, logo: "https://ollama.com/public/ollama.png" },
            { name: "Data Science (Python / Scikit-learn)", proficiency: 75, logo: "https://cdn.simpleicons.org/scikitlearn/F7931D" },
            { name: "Pipelines de Dados / ETL", proficiency: 80, logo: "https://img.icons8.com/ios/50/data-transfer.png" },
            { name: "APIs de GenAI (Integração)", proficiency: 85, logo: "https://cdn.simpleicons.org/googlegemini/8E77F0" },
        ],
    },
  ]
};

export const articles = {
  en: [
    {
      title: "From Code to Cable: The Evolution of a Full-Stack Architect",
      description: "An article about the journey of bridging the gap between modern software development and critical hardware infrastructure, and why this union is essential for the future of technology.",
      url: "https://www.linkedin.com/pulse/do-c%25C3%25B3digo-ao-cabo-a-evolu%25C3%25A7%25C3%25A3o-de-um-arquiteto-full-stack-conceicao-7j9pf/",
      publicationDate: "2024-07-20",
    },
  ],
  pt: [
    {
      title: "Do Código ao Cabo: A Evolução de um Arquiteto Full-Stack",
      description: "Um artigo sobre a jornada para unir o desenvolvimento de software moderno à infraestrutura de hardware crítica, e por que essa união é essencial para o futuro da tecnologia.",
      url: "https://www.linkedin.com/pulse/do-c%25C3%25B3digo-ao-cabo-a-evolu%25C3%25A7%25C3%25A3o-de-um-arquiteto-full-stack-conceicao-7j9pf/",
      publicationDate: "2024-07-20",
    }
  ]
}


export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidsoncabista/Portifolio' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/davidson.dev.br' },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@davidson.developer' },
];
