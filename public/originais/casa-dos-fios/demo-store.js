/* Local demonstration only: no Firebase connection and no real orders. */
(() => {
 let user=null;const listeners=[];
 window.MundixCloud={configured:false,currentUser:()=>user,onAuth:fn=>{listeners.push(fn);fn(user);return()=>{};},customerAccess:async(email)=>{user={email,displayName:'Visitante da demonstração'};listeners.forEach(fn=>fn(user));return user;},signOut:async()=>{user=null;listeners.forEach(fn=>fn(user));},createOrder:async(payload)=>Mundix.createOrder(payload),subscribeInventory:()=>()=>{}};
})();
