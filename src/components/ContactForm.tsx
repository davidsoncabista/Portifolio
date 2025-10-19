'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useFirestore, useAppCheck } from '@/firebase/provider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lang: string;
}

export function ContactForm({ open, onOpenChange, lang }: ContactFormProps) {
  const firestore = useFirestore();
  const appCheck = useAppCheck();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (!firestore) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Firebase is not initialized correctly. Please try again later.'
        });
        return;
    };
    setIsSubmitting(true);
    try {
      await addDoc(collection(firestore, 'messages'), {
        ...values,
        createdAt: serverTimestamp(),
      });
      toast({
        title: lang === 'pt' ? 'Mensagem enviada!' : 'Message Sent!',
        description: lang === 'pt' ? 'Obrigado por entrar em contato. Retornarei em breve.' : "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        variant: 'destructive',
        title: lang === 'pt' ? 'Erro' : 'Error',
        description: lang === 'pt' ? 'Não foi possível enviar sua mensagem. Tente novamente mais tarde.' : 'Could not send your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const title = lang === 'pt' ? 'Entrar em Contato' : 'Get in Touch';
  const description = lang === 'pt' ? 'Preencha o formulário abaixo e retornarei o mais breve possível.' : 'Fill out the form below and I will get back to you as soon as possible.';
  const nameLabel = lang === 'pt' ? 'Nome' : 'Name';
  const emailLabel = lang === 'pt' ? 'Email' : 'Email';
  const messageLabel = lang === 'pt' ? 'Mensagem' : 'Message';
  const submitButton = lang === 'pt' ? 'Enviar Mensagem' : 'Send Message';
  const submittingButton = lang === 'pt' ? 'Enviando...' : 'Sending...';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{nameLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{emailLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={lang === 'pt' ? 'Sua mensagem aqui...' : 'Your message here...'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? submittingButton : submitButton}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
