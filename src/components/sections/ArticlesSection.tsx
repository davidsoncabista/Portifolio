import { getArticles } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';
import Link from 'next/link';

export async function ArticlesSection({ lang }: { lang: string }) {
  const articles = await getArticles(lang); 
  
  const title = lang === 'pt' ? 'Artigos em Destaque' : 'Featured Articles';
  const description = lang === 'pt'
    ? 'Aqui estão alguns artigos e pensamentos que compartilhei.'
    : "Here are some articles and thoughts I've shared.";
  const readMoreText = lang === 'pt' ? 'Ler Artigo' : 'Read Article';

  if (!articles || articles.length === 0) return null;

  return (
    <section id="articles" className="w-full py-12 md:py-24">
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
          {articles.map((article, index) => (
            <Card key={index} className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/10 hover:shadow-lg">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-6">
                <div className="text-primary">
                  {/* Se tiver imagem, mostra ela. Se não, mostra o ícone padrão */}
                  {article.imageUrl ? (
                    <img src={article.imageUrl} alt={article.title} className="h-16 w-16 object-cover rounded" />
                  ) : (
                    <BookText className="h-8 w-8" />
                  )}
                </div>
                <div className="flex-1">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl mb-1">{article.title}</CardTitle>
                    {/* Alterado de description para summary */}
                    <CardDescription>{article.summary}</CardDescription> 
                  </CardHeader>
                </div>
                {/* Alterado de url para contentUrl */}
                {article.contentUrl ? (
                  <Button asChild variant="outline">
                    <Link href={article.contentUrl} target="_blank" rel="noopener noreferrer">
                      {readMoreText}
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" disabled>
                    {readMoreText}
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}