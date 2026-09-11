'use client';
import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import type {DemoProject} from '@/lib/demo-projects';

export default function ConceptHeader({project,active}:{project:DemoProject;active:string}) {
 const [open,setOpen]=useState(false);
 const isCompact=project.slug==='serra-alta-imoveis';
 const href=(slug:string)=>`/projetos/${project.slug}${slug==='inicio'?'':'/'+slug}`;
 return <header className={`concept-header${isCompact?' concept-header-compact':''}`}>
  <a className="concept-brand" href={href('inicio')}><img src={`/brand/${project.slug}.png`} alt={`Logo ${project.title}`} width={58} height={58}/><span>{project.title}{!isCompact&&<small>{project.category}</small>}</span></a>
  <button className="concept-menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls={`menu-${project.slug}`} aria-label={open?'Fechar navegação':'Abrir navegação'}>{open?<X/>:<Menu/>}</button>
  <nav id={`menu-${project.slug}`} className={open?'is-open':''} aria-label={`Navegação de ${project.title}`}>{project.navigation.map(item=><a key={item.slug} aria-current={active===item.slug?'page':undefined} href={href(item.slug)} onClick={()=>setOpen(false)}>{item.label}</a>)}</nav>
 </header>;
}
