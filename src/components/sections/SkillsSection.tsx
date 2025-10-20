import { skills as skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function SkillsSection({ lang }: { lang: string }) {
  const skills = skillsData[lang as keyof typeof skillsData] || [];

  const title = lang === 'pt' ? 'Minhas Habilidades Técnicas' : 'My Technical Skills';
  const description = lang === 'pt' 
    ? 'Um resumo das tecnologias e ferramentas com as quais trabalho para construir aplicações web e infraestrutura modernas.'
    : 'A snapshot of the technologies and tools I work with to build modern web applications and infrastructure.';


  return (
    <section id="skills" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 py-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="h-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-2xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <skillCategory.icon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                {skillCategory.list.map((skill) => (
                  <div key={skill.name} className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {skill.logo && (
                           <Image 
                              src={skill.logo} 
                              alt={`${skill.name} logo`} 
                              width={20} 
                              height={20}
                              className="h-5 w-5 object-contain" 
                           />
                        )}
                        <h3 className="font-semibold">{skill.name}</h3>
                      </div>
                      <Badge variant="secondary">{skill.proficiency}%</Badge>
                    </div>
                    <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
