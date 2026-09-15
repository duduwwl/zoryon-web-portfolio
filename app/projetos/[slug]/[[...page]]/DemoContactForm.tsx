'use client';

import type { FormEvent } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { savePortfolioLead } from '@/lib/firebase-leads';

export default function DemoContactForm({ projectTitle }: { projectTitle: string }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const business = String(data.get('business') || '');
    const need = String(data.get('need') || 'Quero orientação');
    const message = String(data.get('message') || '');
    void savePortfolioLead({ name, business, need, message, projectTitle }).catch((error) => {
      console.warn('Não foi possível registrar o contato no Firebase.', error);
    });
    const text = `Olá, Zoryon Web! Meu nome é ${name}. Meu negócio é ${business}. Gostei do projeto ${projectTitle}. ${message}`;
    window.open(`https://wa.me/5535984259797?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }
  return <form className="showcase-contact-form" onSubmit={submit}><div><label>Seu nome<input name="name" required minLength={2} maxLength={80} placeholder="Como podemos chamar você?" /></label><label>Nome do negócio<input name="business" required minLength={2} maxLength={120} placeholder="Empresa ou projeto" /></label></div><label>O que você precisa?<select name="need" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Site institucional</option><option>Loja virtual</option><option>Cardápio ou catálogo</option><option>Quero orientação</option></select></label><label>Conte um pouco mais<textarea name="message" rows={5} maxLength={1200} placeholder="Objetivo, prazo ou referência que você gostou" /></label><label><input name="consent" type="checkbox" required /> Autorizo o registro deste contato para retorno da Zoryon Web.</label><button type="submit"><MessageCircle /> Continuar no WhatsApp <ArrowUpRight /></button><small>O contato é registrado com segurança no Firebase e a conversa continua no WhatsApp.</small></form>;
}
