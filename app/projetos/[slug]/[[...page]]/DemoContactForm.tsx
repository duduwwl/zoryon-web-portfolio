'use client';

import type { FormEvent } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function DemoContactForm({ projectTitle }: { projectTitle: string }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const business = String(data.get('business') || '');
    const message = String(data.get('message') || '');
    const text = `Olá, Zoryon Web! Meu nome é ${name}. Meu negócio é ${business}. Gostei do projeto ${projectTitle}. ${message}`;
    window.open(`https://wa.me/5535984259797?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }
  return <form className="showcase-contact-form" onSubmit={submit}><div><label>Seu nome<input name="name" required placeholder="Como podemos chamar você?" /></label><label>Nome do negócio<input name="business" required placeholder="Empresa ou projeto" /></label></div><label>O que você precisa?<select name="need" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Site institucional</option><option>Loja virtual</option><option>Cardápio ou catálogo</option><option>Quero orientação</option></select></label><label>Conte um pouco mais<textarea name="message" rows={5} placeholder="Objetivo, prazo ou referência que você gostou" /></label><button type="submit"><MessageCircle /> Continuar no WhatsApp <ArrowUpRight /></button><small>Ao continuar, seus dados serão usados apenas para montar a mensagem no WhatsApp.</small></form>;
}
