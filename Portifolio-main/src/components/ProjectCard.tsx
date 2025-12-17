import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  status: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
};

interface ProjectCardProps {
  project: Project;
}

const statusVariant: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
  'Completed': 'default',
  'In Progress': 'secondary',
  'Archived': 'outline'
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-2xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
          <Badge variant={statusVariant[project.status] || 'default'}>{project.status}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="border-accent text-accent">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github className="mr-2 h-4 w-4" /> Code
          </a>
        </Button>
        <Button variant="default" size="sm" asChild>
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
