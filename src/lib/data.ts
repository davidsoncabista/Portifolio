import { Github, Code2, ServerCog, BrainCircuit, Linkedin, Instagram, Youtube, TowerControl } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const API_BASE_URL = 'https://davidson-portfolio-api.onrender.com';

// Types to match the API response
export type Project = {
  title: string;
  description: string;
  status: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
};

export type Skill = {
  name: string;
  proficiency: number;
  logo: string;
  category: string;
}

export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  list: Skill[];
}

const ICONS: { [key: string]: LucideIcon } = {
  "Critical Infrastructure & DevOps": ServerCog,
  "Full-Stack Development": Code2,
  "Telecommunications & Networks": TowerControl,
  "Infraestrutura Crítica & DevOps": ServerCog,
  "Desenvolvimento Full-Stack": Code2,
  "Telecomunicações & Redes": TowerControl,
};

// Fetch Projects from the API
export async function getProjects(lang: string): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects?lang=${lang}`, { next: { revalidate: 3600 } });
    if (!response.ok) {
      console.error("Failed to fetch projects:", response.statusText);
      return [];
    }
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return empty array as fallback
  }
}

// Fetch Skills from the API
export async function getSkills(lang: string): Promise<SkillCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/skills?lang=${lang}`, { next: { revalidate: 3600 } });
     if (!response.ok) {
      console.error("Failed to fetch skills:", response.statusText);
      return [];
    }
    const skills: Skill[] = await response.json();
    
    const skillsByCategory = skills.reduce((acc, skill) => {
      const { category } = skill;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {} as { [key: string]: Skill[] });

    return Object.entries(skillsByCategory).map(([category, list]) => ({
      category,
      icon: ICONS[category] || ServerCog,
      list,
    }));
  } catch (error) {
    console.error("Error fetching skills:", error);
    return []; // Return empty array as fallback
  }
}


// Static data that is not in the API
export const articles = {
  en: [
    {
      title: "The Silent Guardians",
      description: "A reflection on the infrastructure components and professionals who silently ensure the stability and operation of modern technology.",
      url: "https://www.linkedin.com/pulse/os-guardi%25C3%25B5es-silenciosos-davidson-s-concei%25C3%25A7%25C3%25A3o-nqdvf/",
      publicationDate: "2024-07-28",
    },
    {
      title: "Stable Infrastructure: The Secret Foundation of Agile AI",
      description: "An analysis of how a robust and well-planned IT infrastructure is crucial for the success and agility of Artificial Intelligence projects.",
      url: "https://www.linkedin.com/pulse/infraestrutura-est%25C3%25A1vel-o-alicerce-secreto-da-%25C3%25A1gil-e-s-concei%25C3%25A7%25C3%25A3o-libdf",
      publicationDate: "2024-07-25",
    },
    {
      title: "From Code to Cable: A Journey of Rediscovery",
      description: "An article about the journey of bridging the gap between modern software development and critical hardware infrastructure, and why this union is essential for the future of technology.",
      url: "https://www.linkedin.com/pulse/do-c%25C3%25B3digo-ao-cabo-uma-jornada-de-redescoberta-da-davidson-s-concei%25C3%25A7%25C3%25A3o-yo1mf/",
      publicationDate: "2024-07-20",
    },
    {
      title: "My First Bug: How a R$50 Workaround Taught Me About Problem-Solving",
      description: "A story about a creative solution from early in my career and the lesson it taught me about thinking outside the box to solve complex problems.",
      url: "https://www.linkedin.com/pulse/meu-primeiro-bug-como-uma-gambiarra-de-r50-me-ensinou-s-concei%25C3%25A7%25C3%25A3o-3ewaf/",
      publicationDate: "2024-07-15",
    }
  ],
  pt: [
    {
      title: "Os Guardiões Silenciosos",
      description: "Uma reflexão sobre os componentes e profissionais de infraestrutura que, silenciosamente, garantem a estabilidade e o funcionamento da tecnologia moderna.",
      url: "https://www.linkedin.com/pulse/os-guardi%25C3%25B5es-silenciosos-davidson-s-concei%25C3%25A7%25C3%25A3o-nqdvf/",
      publicationDate: "2024-07-28",
    },
    {
      title: "Infraestrutura Estável: O Alicerce Secreto da IA Ágil",
      description: "Uma análise sobre como uma infraestrutura de TI robusta e bem planejada é crucial para o sucesso e a agilidade de projetos de Inteligência Artificial.",
      url: "https://www.linkedin.com/pulse/infraestrutura-est%25C3%25A1vel-o-alicerce-secreto-da-%25C3%25A1gil-e-s-concei%25C3%25A7%25C3%25A3o-libdf",
      publicationDate: "2024-07-25",
    },
    {
      title: "Do Código ao Cabo: Uma Jornada de Redescoberta",
      description: "Um artigo sobre a jornada para unir o desenvolvimento de software moderno à infraestrutura de hardware crítica, e por que essa união é essencial para o futuro da tecnologia.",
      url: "https://www.linkedin.com/pulse/do-c%25C3%25B3digo-ao-cabo-uma-jornada-de-redescoberta-da-davidson-s-concei%25C3%25A7%25C3%25A3o-yo1mf/",
      publicationDate: "2024-07-20",
    },
    {
      title: "Meu Primeiro Bug: Como uma 'Gambiarra' de R$50 me Ensinou Sobre Resolução de Problemas",
      description: "Uma história sobre uma solução criativa do início da minha carreira e a lição que ela me ensinou sobre pensar fora da caixa para resolver problemas complexos.",
      url: "https://www.linkedin.com/pulse/meu-primeiro-bug-como-uma-gambiarra-de-r50-me-ensinou-s-concei%25C3%25A7%25C3%25A3o-3ewaf/",
      publicationDate: "2024-07-15",
    }
  ]
};


export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidsoncabista/Portifolio' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/davidson.dev.br" },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@davidson.developer' },
];
