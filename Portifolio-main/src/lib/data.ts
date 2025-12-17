import { Github, Code2, ServerCog, BrainCircuit, Linkedin, Instagram, Youtube, TowerControl } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

//base URL para a API self-hosted
const API_BASE_URL = 'http://api.davidson.dev.br';


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

export type Article = {
  id: number;
  title: string;
  summary: string;     // Backend: "summary"
  contentUrl: string;  // Backend: "contentUrl"
  imageUrl: string;    // Backend: "imageUrl"
};

const ICONS: { [key: string]: LucideIcon } = {
  "Critical Infrastructure & DevOps": ServerCog,
  "Full-Stack Development": Code2,
  "Telecommunications & Networks": TowerControl,
  "Infraestrutura Crítica": ServerCog,
  "Desenvolvimento Full-Stack": Code2,
  "Telecomunicações": TowerControl,
};


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
    return []; 
  }
}


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
    return []; 
  }
}


export async function getArticles(lang: string): Promise<Article[]> {
  try {
   
    const response = await fetch(`${API_BASE_URL}/articles`, { next: { revalidate: 3600 } });
    
    if (!response.ok) return [];
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidsoncabista/Portifolio' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/davidson.dev.br" },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@davidson.developer' },
];
