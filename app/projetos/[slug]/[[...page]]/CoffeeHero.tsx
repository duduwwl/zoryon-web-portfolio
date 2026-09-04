import {ArrowRight} from 'lucide-react';

export default function CoffeeHero(){
 return <section className="coffee-hero">
  <div className="coffee-hero-photo"><img src="/demos/raiz-cafe.webp" alt="Café sendo servido em xícara de cerâmica, diante de uma plantação"/><span>Cafés de origem · cozinha mineira</span></div>
  <div className="coffee-hero-editorial"><div><span>Raiz Café / Lavras</span><h1>Seu tempo.<br/><em>Um bom café.</em></h1></div><div><p>Da primeira xícara ao pão de queijo quentinho: um convite para sentar, conversar e deixar a pressa lá fora.</p><a href="/projetos/raiz-cafe/menu">Descubra nosso menu <ArrowRight size={18}/></a></div></div>
 </section>;
}
