import { Github, Code2, ServerCog, BrainCircuit, Linkedin, Instagram } from 'lucide-react';

export const projects = {
  en: [
    {
      title: "InfraCenter Manager",
      description: "A comprehensive management dashboard designed to centralize, track, and manage mission-critical data center infrastructure (O&M). The tool replaces decentralized manual control (spreadsheets, emails) with a single source of truth for all physical assets, including racks, servers, disks, and network components. Originally prototyped on a PaaS architecture (Firebase) for rapid validation, the project gained executive approval and is now being migrated to a high-availability private cloud, built and managed 100% in-house. The final infrastructure is a Proxmox virtualization cluster running on HP Gen9 servers (with over 1TB of RAM), connected to a dedicated SAN storage (HP MSA) and a 40GbE network (Cisco Nexus), ensuring enterprise-level performance and resilience for the O&M team.",
      status: "Validated Prototype / On-Premise Migration",
      technologies: ["React", "Node.js", "Proxmox", "Cisco Nexus", "Terraform"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidsoncabista/InfraCenter",
    },
    {
      title: "AI-Powered Code Assistant",
      description: "A smart code suggestion tool that integrates with VS Code. It uses machine learning models to provide context-aware code completions and bug detections, improving developer productivity.",
      status: "In Progress",
      technologies: ["Python", "TensorFlow", "Next.js", "WebSocket"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack, scalable e-commerce solution with features like product management, user authentication, and a Stripe-integrated payment gateway. Designed for high performance and security.",
      status: "Completed",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Serverless Data Pipeline",
      description: "An event-driven data processing pipeline using AWS Lambda and Kinesis. Efficiently processes and analyzes streaming data from multiple sources for business intelligence.",
      status: "Archived",
      technologies: ["AWS Lambda", "Python", "Kinesis", "S3"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website v2",
      description: "This very website. A personal space to showcase my work and skills, built with a focus on clean design, performance, and modern web technologies.",
      status: "Completed",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real-time Chat Application",
      description: "A web-based chat application supporting multiple rooms and private messaging, built with WebSockets for instant communication and a resilient backend.",
      status: "Completed",
      technologies: ["React", "Express.js", "Socket.IO", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    }
  ],
  pt: [
    {
      title: "Gerenciador InfraCenter",
      description: "Um painel de gerenciamento abrangente, projetado para centralizar, rastrear e gerenciar a infraestrutura de data center de missão crítica (O&M). A ferramenta substitui o controle manual descentralizado (planilhas, e-mails) por uma fonte única da verdade para todos os ativos físicos, incluindo racks, servidores, discos e componentes de rede. Originalmente prototipado em uma arquitetura PaaS (Firebase) para validação rápida, o projeto obteve aprovação da alta gestão e está em processo de migração para uma nuvem privada de alta disponibilidade, construída e gerenciada 100% internamente. A infraestrutura final é um cluster de virtualização Proxmox rodando em servidores HP Gen9 (com um total de 1TB+ de RAM), conectado a um storage SAN dedicado (HP MSA) e uma rede de 40GbE (Cisco Nexus), garantindo performance e resiliência de nível empresarial para a equipe de O&M.",
      status: "Protótipo Validado / Migração On-Premise",
      technologies: ["React", "Node.js", "Proxmox", "Cisco Nexus", "Terraform"],
      demoUrl: "#",
      githubUrl: "https://github.com/davidsoncabista/InfraCenter",
    },
    {
      title: "Assistente de Código com IA",
      description: "Uma ferramenta inteligente de sugestão de código que se integra ao VS Code. Ele usa modelos de aprendizado de máquina para fornecer conclusões de código com reconhecimento de contexto e detecção de bugs, melhorando a produtividade do desenvolvedor.",
      status: "Em Progresso",
      technologies: ["Python", "TensorFlow", "Next.js", "WebSocket"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Plataforma de E-commerce",
      description: "Uma solução de e-commerce escalável e full-stack com recursos como gerenciamento de produtos, autenticação de usuário e um gateway de pagamento integrado ao Stripe. Projetado para alto desempenho e segurança.",
      status: "Concluído",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Pipeline de Dados Sem Servidor",
      description: "Um pipeline de processamento de dados orientado a eventos usando AWS Lambda e Kinesis. Processa e analisa com eficiência dados de streaming de várias fontes para inteligência de negócios.",
      status: "Arquivado",
      technologies: ["AWS Lambda", "Python", "Kinesis", "S3"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Site de Portfólio v2",
      description: "Este mesmo site. Um espaço pessoal para mostrar meu trabalho e minhas habilidades, construído com foco em design limpo, desempenho e tecnologias web modernas.",
      status: "Concluído",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Aplicativo de Chat em Tempo Real",
      description: "Um aplicativo de bate-papo baseado na web que oferece suporte a várias salas e mensagens privadas, construído com WebSockets para comunicação instantânea e um backend resiliente.",
      status: "Concluído",
      technologies: ["React", "Express.js", "Socket.IO", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    }
  ]
};

export const skills = {
  en: [
    {
      category: "Infrastructure",
      icon: ServerCog,
      list: [
        { name: "AWS", proficiency: 95 },
        { name: "Docker", proficiency: 90 },
        { name: "Kubernetes", proficiency: 80 },
        { name: "Terraform", proficiency: 85 },
        { name: "CI/CD", proficiency: 90 },
      ],
    },
    {
      category: "Full-Stack Development",
      icon: Code2,
      list: [
        { name: "React / Next.js", proficiency: 95 },
        { name: "Node.js / Express", proficiency: 90 },
        { name: "Python / Django", proficiency: 80 },
        { name: "SQL & NoSQL", proficiency: 85 },
        { name: "GraphQL", proficiency: 75 },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: BrainCircuit,
      list: [
        { name: "TensorFlow / PyTorch", proficiency: 75 },
        { name: "Scikit-learn", proficiency: 85 },
        { name: "Natural Language Proc.", proficiency: 70 },
        { name: "Data Pipelines", proficiency: 80 },
        { name: "GenAI APIs", proficiency: 85 },
      ],
    },
  ],
  pt: [
    {
      category: "Infraestrutura",
      icon: ServerCog,
      list: [
        { name: "AWS", proficiency: 95 },
        { name: "Docker", proficiency: 90 },
        { name: "Kubernetes", proficiency: 80 },
        { name: "Terraform", proficiency: 85 },
        { name: "CI/CD", proficiency: 90 },
      ],
    },
    {
      category: "Desenvolvimento Full-Stack",
      icon: Code2,
      list: [
        { name: "React / Next.js", proficiency: 95 },
        { name: "Node.js / Express", proficiency: 90 },
        { name: "Python / Django", proficiency: 80 },
        { name: "SQL & NoSQL", proficiency: 85 },
        { name: "GraphQL", proficiency: 75 },
      ],
    },
    {
      category: "IA & Aprendizado de Máquina",
      icon: BrainCircuit,
      list: [
        { name: "TensorFlow / PyTorch", proficiency: 75 },
        { name: "Scikit-learn", proficiency: 85 },
        { name: "Processamento de Linguagem Natural", proficiency: 70 },
        { name: "Pipelines de Dados", proficiency: 80 },
        { name: "APIs de GenAI", proficiency: 85 },
      ],
    },
  ]
};

export const timeline = {
  en: [
    {
      date: "2021 - Present",
      title: "Lead Infrastructure Solutions Architect",
      company: "TIM Brasil (Data Center O&M Industrial Buildings)",
      description: "Data Center Management.",
    },
    {
      date: "2019 - 2021",
      title: "Senior Full-Stack Developer",
      company: "DataDriven Co.",
      description: "Developed and maintained core features for a high-traffic analytics platform. Optimized database queries, improving API response times by 50%. Mentored junior developers.",
    },
    {
      date: "2017 - 2019",
      title: "Software Engineer",
      company: "Creative Apps LLC",
      description: "Built responsive user interfaces and RESTful APIs for various client projects. Gained proficiency in agile methodologies and version control with Git.",
    },
    {
      date: "2016",
      title: "B.S. in Computer Science",
      company: "Universidade Federal Fluminense, Niterói",
      description: "Graduated with honors, focusing on distributed systems and artificial intelligence. Completed a final year project on peer-to-peer networking.",
    },
  ],
  pt: [
    {
      date: "2021 - Presente",
      title: "Arquiteto de Soluções de Infraestrutura Líder",
      company: "TIM Brasil (Data Center O&M Industrial Buildings)",
      description: "Gestão em Data Center.",
    },
    {
      date: "2019 - 2021",
      title: "Desenvolvedor Full-Stack Sênior",
      company: "DataDriven Co.",
      description: "Desenvolvi e mantive recursos principais para uma plataforma de análise de alto tráfego. Otimizei consultas de banco de dados, melhorando os tempos de resposta da API em 50%. Mentiorei desenvolvedores juniores.",
    },
    {
      date: "2017 - 2019",
      title: "Engenheiro de Software",
      company: "Creative Apps LLC",
      description: "Construí interfaces de usuário responsivas e APIs RESTful para vários projetos de clientes. Ganhei proficiência em metodologias ágeis e controle de versão com Git.",
    },
    {
      date: "2016",
      title: "Bacharel em Ciência da Computação",
      company: "Universidade Federal Fluminense, Niterói",
      description: "Formado com honras, com foco em sistemas distribuídos e inteligência artificial. Concluí um projeto de final de ano sobre redes ponto a ponto.",
    },
  ]
};


export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidsoncabista' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/davidson.dev.br' },
];
