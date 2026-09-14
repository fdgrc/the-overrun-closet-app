const enc=new TextEncoder();
function b64url(buf){let s='';for(const b of new Uint8Array(buf))s+=String.fromCharCode(b);return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
async function sign(v,s){const k=await crypto.subtle.importKey('raw',enc.encode(s),{name:'HMAC',hash:'SHA-256'},false,['sign']);return b64url(await crypto.subtle.sign('HMAC',k,enc.encode(v)))}
function eq(a,b){if(typeof a!=='string'||typeof b!=='string'||a.length!==b.length)return false;let x=0;for(let i=0;i<a.length;i++)x|=a.charCodeAt(i)^b.charCodeAt(i);return x===0}
export async function makeSession(secret,maxAgeSeconds=43200){const ttl=Math.max(300,Math.min(2592000,Number(maxAgeSeconds)||43200));const p=btoa(JSON.stringify({exp:Date.now()+ttl*1000})).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');return p+'.'+await sign(p,secret)}
export async function validSession(req,secret){const m=(req.headers.get('Cookie')||'').match(/(?:^|;\s*)bk_session=([^;]+)/);if(!m)return false;const [p,s]=m[1].split('.');if(!p||!s||!eq(s,await sign(p,secret)))return false;try{const d=JSON.parse(atob(p.replace(/-/g,'+').replace(/_/g,'/')));return d.exp>Date.now()}catch{return false}}
