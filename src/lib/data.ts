import { Github, Code2, ServerCog, BrainCircuit, Bot, Database, ExternalLink, Linkedin, Twitter } from 'lucide-react';

export const projects = [
  {
    title: "InfraCenter Manager",
    description: "A comprehensive dashboard for managing and monitoring cloud infrastructure, providing real-time analytics and automated scaling solutions. Built to handle enterprise-level workloads on AWS.",
    status: "Completed",
    technologies: ["React", "Node.js", "Docker", "AWS", "Terraform"],
    demoUrl: "#",
    githubUrl: "#",
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
];

export const skills = [
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
];

export const timeline = [
  {
    date: "2021 - Present",
    title: "Lead Infrastructure Architect",
    company: "Innovatech Solutions",
    description: "Architected and led the development of 'InfraCenter Manager', reducing cloud costs by 30%. Managed a team of 5 engineers and spearheaded the migration to a microservices architecture.",
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
    company: "University of Technology",
    description: "Graduated with honors, focusing on distributed systems and artificial intelligence. Completed a final year project on peer-to-peer networking.",
  },
];


export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
];
