/* Isolated portfolio preview. Never calls the real booking or payment backend. */
(() => {
  const slug=location.pathname.split('/')[2];
  const nativeFetch=window.fetch.bind(window);
  if(slug==='daniels-barber') {
    window.fetch=async (input,init) => {
      const url=String(input?.url || input);
      if(url.includes('/api/appointments')) return new Response(JSON.stringify(init?.method==='POST'?{ok:true,demo:true}:{busy:[],appointments:[]}),{status:200,headers:{'Content-Type':'application/json'}});
      return nativeFetch(input,init);
    };
    document.addEventListener('click',event=>{
      const link=event.target.closest?.('a[href]'); if(!link)return;
      const url=new URL(link.href,location.href);
      if(url.origin===location.origin && url.pathname.startsWith('/originais/daniels-barber') && !/\.[a-z]+$/i.test(url.pathname)) {
        event.preventDefault();event.stopImmediatePropagation();
        location.href=url.pathname.replace(/\/$/,'')+'/index.html'+url.search+url.hash;
      }
    },true);
  }
  document.addEventListener('click',event=>{
    const link=event.target.closest?.('a[href]');if(!link)return;
    if(/wa\.me|api\.whatsapp\.com/.test(link.href)) {
      event.preventDefault();event.stopImmediatePropagation();
      window.open('https://wa.me/5535984259797?text='+encodeURIComponent('Olá, Zoryon Web! Gostei da demonstração '+slug+' e quero um site assim.'),'_blank','noopener');
    }
  },true);
})();
