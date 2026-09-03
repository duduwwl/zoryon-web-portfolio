/* Portfolio demo adapter: no payment or order is sent outside this browser. */
const key='zoryon-burger-demo-orders';const all=()=>JSON.parse(localStorage.getItem(key)||'[]');
const client={available:true,appCheckConfigured:true,user:null,onAuthStateChanged:fn=>{fn(null);return()=>{};},signIn:async()=>{},signOut:async()=>{},call:async(name,payload)=>{
 if(name==='quoteDelivery')return{fee:5,zone:'Lavras — entrega demonstrativa',available:true};
 if(name==='createOrder'){const order={...payload,code:'DEMO-'+Date.now().toString().slice(-6),status:'Recebido',createdAt:new Date().toISOString()};localStorage.setItem(key,JSON.stringify([order,...all()]));return{order};}
 if(name==='trackOrder')return{order:all().find(order=>order.code===payload.code),found:all().some(order=>order.code===payload.code)};
 if(name==='listManagerOrders')return{orders:all()};
 return{};
}};
window.naBrasaFirebasePending=false;window.naBrasaFirebase=client;window.dispatchEvent(new CustomEvent('nabrasa-firebase-ready',{detail:client}));export default client;
