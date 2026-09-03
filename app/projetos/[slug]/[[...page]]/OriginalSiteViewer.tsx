'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Monitor, Smartphone } from 'lucide-react';

type Page = { label: string; path: string };
const originals: Record<string, Page[]> = {
  'daniels-barber': [{label:'Início',path:'index.html'},{label:'Agendamento',path:'agendar/index.html'},{label:'Gerência (demo)',path:'gerencia/index.html'}],
  'casa-dos-fios': [{label:'Início',path:'index.html'},{label:'Catálogo completo',path:'produtos.html'},{label:'Carrinho e checkout',path:'checkout.html'}],
  'pizza-lavras': [{label:'Início',path:'index.html'},{label:'Cardápio completo',path:'pizzas.html'},{label:'Gerência (demo)',path:'admin.html?demo=1'}],
  aurele: [{label:'Loja completa',path:'index.html'}],
  'hamburgueria-do-gordao': [{label:'Início',path:'index.html'},{label:'Cardápio completo',path:'cardapio.html'}],
};

export default function OriginalSiteViewer({slug,title,initialPage}:{slug:string;title:string;initialPage?:string}) {
  const pages=originals[slug];
  const inner=initialPage && initialPage!=='inicio';
  const isCheckout=['carrinho','checkout','contato'].includes(initialPage || '');
  const initial=slug==='casa-dos-fios' && isCheckout ? pages[2].path : initialPage==='contato' ? 'index.html#contato' : inner && pages[1] ? pages[1].path : pages[0].path;
  const [page,setPage]=useState(initial);
  const [mobile,setMobile]=useState(false);
  const src=`/originais/${slug}/${page}`;
  const [currentUrl,setCurrentUrl]=useState(src);
  return <main className="original-viewer">
    <header className="original-viewer-toolbar">
      <a className="original-viewer-back" href="/#projetos"><ArrowLeft size={16}/><span>Portfólio</span></a>
      <div className="original-viewer-title"><strong>{title}</strong><small>Versão original · demonstração</small></div>
      <label className="original-viewer-pages"><span className="sr-only">Página do projeto</span><select value={page} onChange={event=>setPage(event.target.value)}>{pages.map(item=><option value={item.path} key={item.path}>{item.label}</option>)}</select></label>
      <button className="original-viewer-device" onClick={()=>setMobile(!mobile)} aria-label={mobile?'Ver em tela de computador':'Ver em tela de celular'} title={mobile?'Computador':'Celular'}>{mobile?<Monitor size={18}/>:<Smartphone size={18}/>}</button>
      <a className="original-viewer-open" href={currentUrl} target="_blank" rel="noreferrer">Sem moldura <ArrowUpRight size={16}/></a>
    </header>
    <div className="original-viewer-notice">Explore todas as páginas e interações. Pedidos, pagamentos e agendamentos são apenas demonstrações; não use dados reais.</div>
    <div className={`original-viewer-stage${mobile?' is-mobile':''}`}><iframe key={src} src={src} title={`Site completo: ${title}`} onLoad={event=>{try{setCurrentUrl(event.currentTarget.contentWindow?.location.href || src);}catch{setCurrentUrl(src);}}} sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads" /></div>
  </main>;
}
