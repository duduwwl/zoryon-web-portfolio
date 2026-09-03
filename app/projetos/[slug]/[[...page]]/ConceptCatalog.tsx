'use client';
import { useState } from 'react';
import type { DemoProject } from '@/lib/demo-projects';

export default function ConceptCatalog({project,hero}:{project:DemoProject;hero:string}) {
 const [query,setQuery]=useState('');
 const matches=project.offers.filter(item=>(item.title+' '+item.description).toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR')));
 return <section className="showcase-catalog"><label className="concept-search">Buscar nesta seleção<input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Digite o que procura" /></label><p className="concept-result" aria-live="polite">{matches.length} opções encontradas · projeto fictício editável</p><div className="showcase-catalog-grid">{matches.map((offer,index)=><article key={offer.title}><img src={offer.image||hero} alt={offer.title} style={{objectPosition:`${20+index*20}% center`}}/><div><small>{project.category}</small><h2>{offer.title}</h2><p>{offer.description}</p><strong>{offer.price}</strong><a className="concept-card-link" href={`/projetos/${project.slug}/contato`}>Saber mais sobre esta opção ↗</a></div></article>)}</div>{!matches.length&&<p>Nenhuma opção corresponde à busca. Experimente outro termo.</p>}</section>;
}
