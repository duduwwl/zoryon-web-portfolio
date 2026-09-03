/* Portfolio sandbox: local orders and demo identities only. Passwords are never stored. */
const key='zoryon-pizza-demo-orders';let session=null;const listeners=[];
export const ADMIN_EMAIL='demonstracao@zoryonweb.local';export const ORDER_STATUSES=['new','confirmed','preparing','out_for_delivery','delivered','cancelled'];
const all=()=>JSON.parse(localStorage.getItem(key)||'[]');
const publish=()=>listeners.forEach(fn=>fn(session));
export const getCurrentSession=()=>session;
export const waitForSession=async()=>session;
export const onSessionChange=fn=>{listeners.push(fn);fn(session);return()=>{};};
export const getCurrentUser=()=>session;
export const onAuthStateChanged=onSessionChange;
export const ensureOrderSession=async()=>({uid:'portfolio-demo'});
export async function signInWithEmail(email){session={uid:'portfolio-demo',email,displayName:'Demonstração',isAuthenticated:true,emailVerified:true,isAdmin:false};publish();return session;}
export const signUpWithEmail=signInWithEmail;
export const signInWithGoogle=()=>signInWithEmail('visitante@demonstracao.local');
export const sendVerificationEmail=async()=>{};export const sendVerification=sendVerificationEmail;
export const refreshSession=async()=>session;
export async function signOutUser(){session=null;publish();}
export const signOut=signOutUser;
export const isAdminEmail=()=>false;
export async function saveOrder(payload){const order={...payload,id:'DEMO-'+Date.now().toString().slice(-6),status:'new',createdAt:new Date().toISOString()};localStorage.setItem(key,JSON.stringify([order,...all()]));return order;}
export const saveOrderRequest=saveOrder;
export const getMyOrder=async id=>all().find(order=>order.id===id);
export const getAdminOrders=async()=>all();export const listAdminOrders=getAdminOrders;
export const subscribeToAdminOrders=async fn=>{fn(all());return()=>{};};
export async function updateOrderStatus(id,status){const orders=all().map(order=>order.id===id?{...order,status}:order);localStorage.setItem(key,JSON.stringify(orders));}
export const auth=null;export const db=null;
