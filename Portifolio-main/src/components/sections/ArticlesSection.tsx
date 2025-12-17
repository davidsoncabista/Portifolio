import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';
import Link from 'next/link';
import { Article } from '@/lib/data'; // Importa o Tipo que criamos acima

// Agora o componente aceita uma lista de artigos vinda do pai
export function ArticlesSection({ lang, articles }: { lang: string, articles: Article[] }) {
  
  const title = lang === 'pt' ? 'Artigos em Destaque' : 'Featured Articles';
  const description = lang === 'pt'
    ? 'Aqui estão alguns artigos e pensamentos que compartilhei no LinkedIn.'
    : "Here are some articles and thoughts I've shared on LinkedIn.";
  const readMoreText = lang === 'pt' ? 'Ler no LinkedIn' : 'Read on LinkedIn';

  // Se a API falhar ou não tiver artigos, não mostra a seção vazia (opcional)
  if (!articles || articles.length === 0) return null;

  return (
    <section id="articles" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/10 hover:shadow-lg overflow-hidden">
              <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 p-6">
                
                {/* Imagem ou Ícone */}
                <div className="text-primary pt-1">
                  {article.imageUrl && article.imageUrl.startsWith('http') ? (
                     <img 
                       src={article.imageUrl} 
                       alt={article.title} 
                       className="h-16 w-16 object-cover rounded-md"
                       onError={(e) => { e.currentTarget.style.display = 'none'; }} // Esconde se quebrar
                     />
                  ) : (
                    <BookText className="h-8 w-8" />
                  )}
                </div>

                <div className="flex-1">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl mb-1">{article.title}</CardTitle>
                    {/* Nota: Backend usa 'summary', antigo era 'description' */}
                    <CardDescription className="line-clamp-2">{article.summary}</CardDescription>
                  </CardHeader>
                </div>

                <Button asChild variant="outline" className="mt-1">
                  {/* Nota: Backend usa 'contentUrl', antigo era 'url' */}
                  <Link href={article.contentUrl} target="_blank" rel="noopener noreferrer">
                    {readMoreText}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}