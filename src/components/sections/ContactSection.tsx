'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, MessageSquare } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ContactSection({ lang }: { lang: string }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, userResult: '' });
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      setCaptcha({
        a: Math.floor(Math.random() * 10),
        b: Math.floor(Math.random() * 10),
        userResult: ''
      });
    }
  }, [open]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    //agora para cicd
    // Honeypot: Se este campo estiver preenchido, é um bot
    if (formData.get('website_url')) return;

    // Validação do Captcha
    if (parseInt(captcha.userResult) !== (captcha.a + captcha.b)) {
      toast({
        variant: "destructive",
        title: lang === 'pt' ? "Captcha Incorreto" : "Incorrect Captcha",
        description: lang === 'pt' ? "Resolva a soma corretamente." : "Please solve the sum correctly.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        toast({
          title: lang === 'pt' ? "Sucesso!" : "Success!",
          description: lang === 'pt' ? "Mensagem enviada ao Telegram." : "Message sent to Telegram.",
        });
        setOpen(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Falha ao enviar mensagem.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="font-semibold transition-all hover:bg-primary hover:text-white">
          <MessageSquare className="mr-2 h-5 w-5" />
          {lang === 'pt' ? 'Entrar em contato' : 'Get in Touch'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle>{lang === 'pt' ? 'Fale Comigo' : 'Contact Me'}</DialogTitle>
          <DialogDescription>
            {lang === 'pt' ? 'Sua mensagem irá direto para o meu Telegram.' : 'Your message goes straight to my Telegram.'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Honeypot Invisível */}
          <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />
          
          <Input name="name" placeholder={lang === 'pt' ? 'Nome' : 'Name'} required />
          <Input name="email" type="email" placeholder="E-mail" required />
          <Textarea name="message" placeholder={lang === 'pt' ? 'Mensagem' : 'Message'} className="min-h-[100px]" required />
          
          <div className="flex items-center gap-3 bg-muted p-3 rounded-md">
            <span className="text-sm font-medium">Segurança: {captcha.a} + {captcha.b} =</span>
            <Input 
              className="w-20 h-8" 
              type="number" 
              value={captcha.userResult} 
              onChange={(e) => setCaptcha({...captcha, userResult: e.target.value})} 
              required 
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Enviando...' : (lang === 'pt' ? 'Enviar Mensagem' : 'Send Message')}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}