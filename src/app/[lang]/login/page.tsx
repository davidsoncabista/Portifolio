
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'pt';
  const [loading, setLoading] = useState(false);

  const title = lang === 'pt' ? 'Acesso Restrito' : 'Restricted Access';
  const description = lang === 'pt' ? 'Faça login para acessar o painel administrativo.' : 'Log in to access the admin panel.';
  const emailLabel = lang === 'pt' ? 'Email' : 'Email';
  const passwordLabel = lang === 'pt' ? 'Senha' : 'Password';
  const buttonText = lang === 'pt' ? 'Entrar' : 'Sign In';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement authentication logic
    console.log('Login attempt');
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-14rem)] py-12">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{emailLabel}</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">{passwordLabel}</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {buttonText}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
