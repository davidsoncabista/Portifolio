import { timeline } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export function TimelineSection() {
  return (
    <section id="journey" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">My Professional Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tracing my path from a computer science graduate to an infrastructure architect.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
          {timeline.map((item, index) => (
            <div key={index} className="relative mb-8">
              <div className="flex items-center">
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  {/* Invisible spacer on the other side */}
                </div>
                <div className="absolute left-1/2 top-1 w-6 h-6 rounded-full bg-primary border-4 border-background -translate-x-1/2 flex items-center justify-center">
                   <Briefcase className="w-3 h-3 text-primary-foreground"/>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                   {/* Main content here */}
                </div>
              </div>

              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto text-left'}`}>
                <Card className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/10 hover:shadow-lg">
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    <p className="text-sm font-medium text-primary">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
