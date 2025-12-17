
import { articles as articlesData } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';

export function ArticlesSection({ lang }: { lang: string }) {
  const articles = articlesData[lang as keyof typeof articlesData] || [];
  const locale = lang === 'pt' ? ptBR : enUS;

  const title = lang === 'pt' ? 'Artigos em Destaque' : 'Featured Articles';
  const description = lang === 'pt'
    ? 'Aqui estão alguns artigos e pensamentos que compartilhei no LinkedIn.'
    : "Here are some articles and thoughts I've shared on LinkedIn.";
  const readMoreText = lang === 'pt' ? 'Ler no LinkedIn' : 'Read on LinkedIn';

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
              <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 p-6">
                <div className="text-primary pt-1">
                  <BookText className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl mb-1">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-4">
                     <p className="text-sm text-muted-foreground">
                      {format(new Date(article.publicationDate), "PPP", { locale })}
                    </p>
                  </CardContent>
                </div>
                <Button asChild variant="outline">
                  <Link href={article.url} target="_blank" rel="noopener noreferrer">
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
