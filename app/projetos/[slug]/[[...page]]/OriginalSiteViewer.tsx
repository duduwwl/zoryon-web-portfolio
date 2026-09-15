'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Monitor, Smartphone, Tablet } from 'lucide-react';

type Page = { label: string; path: string; slug?: string };
const originals: Record<string, Page[]> = {
  'daniels-barber': [{label:'Início',path:'index.html'},{label:'Agendamento',path:'agendar/index.html'},{label:'Gerência (demo)',path:'gerencia/index.html'}],
  'wl-streetwear': [
    {label:'Início',path:'index.html',slug:'inicio'},
    {label:'Coleção completa',path:'colecao.html',slug:'colecao'},
    {label:'Página de produto',path:'produtos/basic-black.html',slug:'produtos'},
    {label:'Checkout',path:'pagamento.html',slug:'checkout'},
    {label:'Gerência (demo)',path:'gerencia.html',slug:'gerencia'},
    {label:'Administração (demo)',path:'admin.html',slug:'admin'},
  ],
  'casa-dos-fios': [{label:'Início',path:'index.html'},{label:'Catálogo completo',path:'produtos.html'},{label:'Carrinho e checkout',path:'checkout.html'}],
  'pizza-lavras': [{label:'Início',path:'index.html'},{label:'Cardápio completo',path:'pizzas.html'},{label:'Gerência (demo)',path:'admin.html?demo=1'}],
  aurele: [
    {label:'Início',path:'index.html'},
    {label:'Coleção completa',path:'index.html#colecao'},
    {label:'Sacola',path:'index.html#sacola'},
    {label:'Checkout',path:'index.html#checkout'},
    {label:'Minha conta',path:'index.html#conta'},
    {label:'Gerência (demo)',path:'index.html#admin'},
  ],
  'hamburgueria-do-gordao': [{label:'Início',path:'index.html'},{label:'Cardápio completo',path:'cardapio.html'}],
};

export default function OriginalSiteViewer({slug,title,initialPage,pageOptions,native=false}:{slug:string;title:string;initialPage?:string;pageOptions?:Page[];native?:boolean}) {
  const pages=pageOptions ?? originals[slug];
  const inner=initialPage && initialPage!=='inicio';
  const isCheckout=['carrinho','checkout','contato'].includes(initialPage || '');
  const requested=initialPage ? pages.find(item=>item.slug===initialPage) : undefined;
  const initial=requested?.path ?? (native ? pages[0].path : slug==='casa-dos-fios' && isCheckout ? pages[2].path : initialPage==='contato' ? 'index.html#contato' : inner && pages[1] ? pages[1].path : pages[0].path);
  const [page,setPage]=useState(initial);
  const [device,setDevice]=useState<'desktop'|'tablet'|'mobile'>('desktop');
  const src=native ? `/projetos/${slug}/_embed/${page}` : `/originais/${slug}/${page}`;
  const [currentUrl,setCurrentUrl]=useState(src);
  return <main className="original-viewer">
    <header className="original-viewer-toolbar">
      <a className="original-viewer-back" href="/#projetos"><ArrowLeft size={16}/><span>Portfólio</span></a>
      <div className="original-viewer-title"><strong>{title}</strong><small>{native ? 'Projeto completo · demonstração' : 'Versão original · demonstração'}</small></div>
      <label className="original-viewer-pages"><span className="sr-only">Página do projeto</span><select value={page} onChange={event=>setPage(event.target.value)}>{pages.map(item=><option value={item.path} key={item.path}>{item.label}</option>)}</select></label>
      <div className="original-viewer-devices" role="group" aria-label="Visualizar em outro dispositivo">
        <button className={device==='desktop'?'active':''} onClick={()=>setDevice('desktop')} aria-label="Ver em tela de computador" title="Computador"><Monitor size={18}/></button>
        <button className={device==='tablet'?'active':''} onClick={()=>setDevice('tablet')} aria-label="Ver em tela de tablet" title="Tablet"><Tablet size={18}/></button>
        <button className={device==='mobile'?'active':''} onClick={()=>setDevice('mobile')} aria-label="Ver em tela de celular" title="Celular"><Smartphone size={18}/></button>
      </div>
      <a className="original-viewer-open" href={currentUrl} target="_blank" rel="noreferrer">Sem moldura <ArrowUpRight size={16}/></a>
    </header>
    <div className="original-viewer-notice">Explore todas as páginas e interações. Pedidos, pagamentos e agendamentos são apenas demonstrações; não use dados reais.</div>
    <div className={`original-viewer-stage is-${device}`}><iframe key={src} src={src} title={`Site completo: ${title}`} onLoad={event=>{try{setCurrentUrl(event.currentTarget.contentWindow?.location.href || src);}catch{setCurrentUrl(src);}}} sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads" /></div>
  </main>;
}
