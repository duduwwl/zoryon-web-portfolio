'use client';
import {useState} from 'react';
import {ArrowLeft,ArrowRight,Images,X} from 'lucide-react';
import {Dialog,DialogContent,DialogTitle,DialogDescription,DialogClose} from '@/components/ui/dialog';
import type {DemoProject} from '@/lib/demo-projects';

export default function ConceptCatalog({project,hero}:{project:DemoProject;hero:string}) {
 const [query,setQuery]=useState('');
 const [selected,setSelected]=useState<DemoProject['offers'][number]|null>(null);
 const [photo,setPhoto]=useState(0);
 const [touchStart,setTouchStart]=useState<number|null>(null);
 const matches=project.offers.filter(item=>(item.title+' '+item.description).toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR')));
 const gallery=selected?.gallery??[];
 const move=(direction:number)=>{if(gallery.length)setPhoto(current=>(current+direction+gallery.length)%gallery.length);};
 const openGallery=(offer:DemoProject['offers'][number])=>{setPhoto(0);setSelected(offer);};
 return <section className="showcase-catalog">
  <label className="concept-search">Buscar nesta seleção<input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Digite o que procura"/></label>
  <p className="concept-result" aria-live="polite">{matches.length} opções encontradas · projeto fictício editável</p>
  {project.slug==='serra-alta-imoveis'&&<p className="photo-disclaimer">Anúncios demonstrativos. As galerias reúnem fotos ilustrativas de diferentes locais, não dos imóveis anunciados.</p>}
  <div className="showcase-catalog-grid">{matches.map(offer=><article key={offer.title}>
   {offer.gallery?<button className="property-photo-button" onClick={()=>openGallery(offer)} aria-label={`Ver ${offer.gallery.length} fotos de ${offer.title}`}><img src={offer.image} alt={offer.title} loading="lazy"/><span><Images size={16}/>{offer.gallery.length} fotos · abrir galeria</span></button>:<img src={offer.image||hero} alt={offer.title} loading="lazy"/>}
   <div><small>{project.category}</small><h2>{offer.title}</h2><p>{offer.description}</p><strong>{offer.price}</strong>{offer.gallery&&<button className="concept-gallery-link" onClick={()=>openGallery(offer)}>Explorar fotos <ArrowRight size={16}/></button>}<a className="concept-card-link" href={`/projetos/${project.slug}/contato`}>Saber mais sobre esta opção ↗</a></div>
  </article>)}</div>
  {!matches.length&&<p>Nenhuma opção corresponde à busca. Experimente outro termo.</p>}
  <Dialog open={!!selected} onOpenChange={open=>{if(!open)setSelected(null);}}>
   <DialogContent className="property-gallery" showCloseButton={false} onKeyDown={event=>{if(event.key==='ArrowRight')move(1);if(event.key==='ArrowLeft')move(-1);}}>
    <div className="gallery-heading"><div><DialogTitle>{selected?.title}</DialogTitle><DialogDescription>Anúncio demonstrativo · fotos ilustrativas de diferentes locais.</DialogDescription></div><DialogClose className="gallery-close" aria-label="Fechar galeria"><X/></DialogClose></div>
    {gallery.length>0&&<><div className="gallery-stage" onTouchStart={event=>setTouchStart(event.touches[0].clientX)} onTouchEnd={event=>{if(touchStart!==null){const delta=event.changedTouches[0].clientX-touchStart;if(Math.abs(delta)>45)move(delta<0?1:-1);}setTouchStart(null);}}><img src={gallery[photo].src} alt={gallery[photo].alt}/><button className="gallery-prev" onClick={()=>move(-1)} aria-label="Foto anterior"><ArrowLeft/></button><button className="gallery-next" onClick={()=>move(1)} aria-label="Próxima foto"><ArrowRight/></button><span aria-live="polite">{photo+1} / {gallery.length}</span></div><div className="gallery-thumbnails">{gallery.map((item,index)=><button key={item.src} onClick={()=>setPhoto(index)} aria-label={`Ver foto ${index+1}`} aria-pressed={photo===index}><img src={item.src} alt={item.alt}/></button>)}</div><p className="gallery-source"><span>{gallery[photo].alt}</span><a href="/photo-credits.html" target="_blank" rel="noreferrer">Créditos das fotos ↗</a></p></>}
   </DialogContent>
  </Dialog>
 </section>;
}
