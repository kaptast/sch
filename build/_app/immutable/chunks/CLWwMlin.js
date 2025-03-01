var te=t=>{throw TypeError(t)};var Be=(t,e,n)=>e.has(t)||te("Cannot "+n);var k=(t,e,n)=>(Be(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{n as dt,l as me,av as qe,aK as Ge,j as Me,i as Lt,am as Ke,$ as C,o as O,X as N,a0 as He}from"./DYbc449S.js";function We(t,e,n){if(t==null)return e(void 0),dt;const r=me(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const B=[];function Dt(t,e=dt){let n=null;const r=new Set;function a(o){if(qe(t,o)&&(t=o,n)){const c=!B.length;for(const l of r)l[1](),B.push(l,t);if(c){for(let l=0;l<B.length;l+=2)B[l][0](B[l+1]);B.length=0}}}function s(o){a(o(t))}function i(o,c=dt){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||dt),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function zn(t){let e;return We(t,n=>e=n)(),e}function ee(t){Lt===null&&Ge(),Ke&&Lt.l!==null?Ye(Lt).m.push(t):Me(()=>{const e=me(t);if(typeof e=="function")return e})}function Ye(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}new URL("sveltekit-internal://");function ze(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Je(t){return t.split("%25").map(decodeURI).join("%25")}function Xe(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Tt({href:t}){return t.split("#")[0]}function Ze(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}function Qe(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function tn(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const en=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete(Ft(t)),en(t,e));const Y=new Map;function nn(t,e){const n=Ft(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=tn(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function rn(t,e,n){if(Y.size>0){const r=Ft(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function Ft(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Qe(...a)}"]`}return r}const an=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function on(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${cn(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return xt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return xt(String.fromCharCode(...c.slice(2).split("-").map(d=>parseInt(d,16))));const u=an.exec(c),[,p,_,f,m]=u;return e.push({name:f,matcher:m,optional:!!p,rest:!!_,chained:_?l===1&&i[0]==="":!1}),_?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return xt(c)}).join("")}).join("")}/?$`),params:e}}function sn(t){return!/^\([^)]+\)$/.test(t)}function cn(t){return t.slice(1).split("/").filter(sn)}function ln(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const u=e[o+1],p=a[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function xt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function fn({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,u]])=>{const{pattern:p,params:_}=on(o),f={id:o,exec:m=>{const d=p.exec(m);if(d)return ln(d,_,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function _e(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function ne(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var ue;const x=((ue=globalThis.__sveltekit_osh8t0)==null?void 0:ue.base)??"";var he;const un=((he=globalThis.__sveltekit_osh8t0)==null?void 0:he.assets)??x,hn="1740823940645",ye="sveltekit:snapshot",we="sveltekit:scroll",ve="sveltekit:states",dn="sveltekit:pageurl",G="sveltekit:history",X="sveltekit:navigation",pt={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ut=location.origin;function be(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Vt(){return{x:pageXOffset,y:pageYOffset}}function q(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const re={...pt,"":pt.hover};function ke(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function Ae(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ke(t)}}function Nt(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||At(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ut&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function gt(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=q(o,"preload-code")),a===null&&(a=q(o,"preload-data")),e===null&&(e=q(o,"keepfocus")),n===null&&(n=q(o,"noscroll")),s===null&&(s=q(o,"reload")),i===null&&(i=q(o,"replacestate")),o=ke(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:re[r??"off"],preload_data:re[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function ae(t){const e=Dt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const Se={v:()=>{}};function pn(){const{set:t,subscribe:e}=Dt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${un}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==hn;return i&&(t(!0),Se.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function At(t,e,n){return t.origin!==ut||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function oe(t){const e=mn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const gn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function mn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=gn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const _n=-1,yn=-2,wn=-3,vn=-4,bn=-5,kn=-6;function An(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===_n)return;if(s===wn)return NaN;if(s===vn)return 1/0;if(s===bn)return-1/0;if(s===kn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const u=new Set;r[s]=u;for(let f=1;f<o.length;f+=1)u.add(a(o[f]));break;case"Map":const p=new Map;r[s]=p;for(let f=1;f<o.length;f+=2)p.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const _=Object.create(null);r[s]=_;for(let f=1;f<o.length;f+=2)_[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],d=oe(m),h=new f(d);r[s]=h;break}case"ArrayBuffer":{const f=o[1],m=oe(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const u=o[l];u!==yn&&(c[l]=a(u))}}else{const c={};r[s]=c;for(const l in o){const u=o[l];c[l]=a(u)}}return r[s]}return a(0)}const Ee=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ee];const Sn=new Set([...Ee]);[...Sn];function En(t){return t.filter(e=>e!=null)}class St{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Bt{constructor(e,n){this.status=e,this.location=n}}class qt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const Rn="x-sveltekit-invalidated",In="x-sveltekit-trailing-slash";function mt(t){return t instanceof St||t instanceof qt?t.status:500}function Un(t){return t instanceof qt?t.text:"Internal Error"}let I,Z,Pt;const Ln=ee.toString().includes("$$")||/function \w+\(\) \{\}/.test(ee.toString());var et,nt,rt,at,ot,st,it,ct,de,lt,pe,ft,ge;Ln?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Pt={current:!1}):(I=new(de=class{constructor(){P(this,et,C({}));P(this,nt,C(null));P(this,rt,C(null));P(this,at,C({}));P(this,ot,C({id:null}));P(this,st,C({}));P(this,it,C(-1));P(this,ct,C(new URL("https://example.com")))}get data(){return O(k(this,et))}set data(e){N(k(this,et),e)}get form(){return O(k(this,nt))}set form(e){N(k(this,nt),e)}get error(){return O(k(this,rt))}set error(e){N(k(this,rt),e)}get params(){return O(k(this,at))}set params(e){N(k(this,at),e)}get route(){return O(k(this,ot))}set route(e){N(k(this,ot),e)}get state(){return O(k(this,st))}set state(e){N(k(this,st),e)}get status(){return O(k(this,it))}set status(e){N(k(this,it),e)}get url(){return O(k(this,ct))}set url(e){N(k(this,ct),e)}},et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,de),Z=new(pe=class{constructor(){P(this,lt,C(null))}get current(){return O(k(this,lt))}set current(e){N(k(this,lt),e)}},lt=new WeakMap,pe),Pt=new(ge=class{constructor(){P(this,ft,C(!1))}get current(){return O(k(this,ft))}set current(e){N(k(this,ft),e)}},ft=new WeakMap,ge),Se.v=()=>Pt.current=!0);function Re(t){Object.assign(I,t)}const Tn="/__data.json",xn=".html__data.json";function Pn(t){return t.endsWith(".html")?t.replace(/\.html$/,xn):t.replace(/\/$/,"")+Tn}const Cn=new Set(["icon","shortcut icon","apple-touch-icon"]),V=_e(we)??{},Q=_e(ye)??{},D={url:ae({}),page:ae({}),navigating:Dt(null),updated:pn()};function Gt(t){V[t]=Vt()}function On(t,e){let n=t+1;for(;V[n];)delete V[n],n+=1;for(n=e+1;Q[n];)delete Q[n],n+=1}function K(t){return location.href=t.href,new Promise(()=>{})}async function Ie(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function se(){}let Mt,jt,_t,j,$t,A;const yt=[],wt=[];let L=null;const Ue=new Set,Nn=new Set,z=new Set;let w={branch:[],error:null,url:null},Kt=!1,vt=!1,ie=!0,tt=!1,H=!1,Le=!1,Ht=!1,Wt,R,T,$;const J=new Set;let Ct;async function Qn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),Mt=fn(t),j=document.documentElement,$t=e,jt=t.nodes[0],_t=t.nodes[1],jt(),_t(),R=(i=history.state)==null?void 0:i[G],T=(o=history.state)==null?void 0:o[X],R||(R=T=Date.now(),history.replaceState({...history.state,[G]:R,[X]:T},""));const r=V[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Kn($t,n):Gn(A.hash?Ve(new URL(location.href)):location.href,{replaceState:!0}),Mn()}async function jn(){if(await(Ct||(Ct=Promise.resolve())),!Ct)return;Ct=null;const t=$={},e=await ht(w.url,!0);L=null;const n=e&&await Jt(e);if(!(!n||t!==$)){if(n.type==="redirect")return Et(new URL(n.location,w.url).href,{},1,t);n.props.page&&Object.assign(I,n.props.page),w=n.state,Te(),Wt.$set(n.props),Re(n.props.page)}}function Te(){yt.length=0,Ht=!1}function xe(t){wt.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=wt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Pe(t){var e;(e=Q[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=wt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ce(){Gt(R),ne(we,V),xe(T),ne(ye,Q)}async function Et(t,e,n,r){return W({type:"goto",url:be(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Ht=!0),e.invalidate&&e.invalidate.forEach(je)}})}async function $n(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:Jt({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Ot(t){var n;const e=(n=await ht(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(r=>r==null?void 0:r[1]()))}function Ce(t,e,n){var s;w=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,t.props.page),Wt=new A.root({target:e,props:{...t.props,stores:D,components:wt},hydrate:n,sync:!1}),Pe(T);const a={from:null,to:{params:w.params,route:{id:((s=w.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(a)),vt=!0}function bt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=ze(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:En(n).map(f=>f.node.component),page:Xt(I)}};i!==void 0&&(c.props.form=i);let l={},u=!I,p=0;for(let f=0;f<Math.max(n.length,w.branch.length);f+=1){const m=n[f],d=w.branch[f];(m==null?void 0:m.data)!==(d==null?void 0:d.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${p}`]=l),p+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==I.form||u)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:I.data}),c}async function Yt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var u,p,_;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let f=function(...d){for(const h of d){const{href:y}=new URL(h,n);c.dependencies.add(y)}};const m={route:new Proxy(a,{get:(d,h)=>(o&&(c.route=!0),d[h])}),params:new Proxy(r,{get:(d,h)=>(o&&c.params.add(h),d[h])}),data:(s==null?void 0:s.data)??null,url:Ze(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},A.hash),async fetch(d,h){let y;d instanceof Request?(y=d.url,h={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...h}):y=d;const S=new URL(y,n);return o&&f(S.href),S.origin===n.origin&&(y=S.href.slice(n.origin.length)),vt?rn(y,S.href,h):nn(y,h)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(p=l.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((_=l.universal)==null?void 0:_.trailingSlash)??(s==null?void 0:s.slash)}}function le(t,e,n,r,a,s){if(Ht)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(yt.some(o=>o(new URL(i))))return!0;return!1}function zt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Dn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function fe({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Xt(I),constructors:[]}}}async function Jt({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=w.url?t!==kt(w.url):!1,_=w.route?a.id!==w.route.id:!1,f=Dn(w.url,n);let m=!1;const d=l.map((g,v)=>{var F;const b=w.branch[v],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||le(m,_,p,f,(F=b.server)==null?void 0:F.uses,r));return E&&(m=!0),E});if(d.some(Boolean)){try{u=await $e(n,d)}catch(g){const v=await M(g,{url:n,params:r,route:{id:t}});return J.has(s)?fe({error:v,url:n,params:r,route:a}):Rt({status:mt(g),error:v,url:n,route:a})}if(u.type==="redirect")return u}const h=u==null?void 0:u.nodes;let y=!1;const S=l.map(async(g,v)=>{var It;if(!g)return;const b=w.branch[v],E=h==null?void 0:h[v];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!le(y,_,p,f,(It=b.universal)==null?void 0:It.uses,r))return b;if(y=!0,(E==null?void 0:E.type)==="error")throw E;return Yt({loader:g[1],url:n,params:r,route:a,parent:async()=>{var Qt;const Zt={};for(let Ut=0;Ut<v;Ut+=1)Object.assign(Zt,(Qt=await S[Ut])==null?void 0:Qt.data);return Zt},server_data_node:zt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of S)g.catch(()=>{});const U=[];for(let g=0;g<l.length;g+=1)if(l[g])try{U.push(await S[g])}catch(v){if(v instanceof Bt)return{type:"redirect",location:v.location};if(J.has(s))return fe({error:await M(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=mt(v),E;if(h!=null&&h.includes(v))b=v.status??b,E=v.error;else if(v instanceof St)E=v.body;else{if(await D.updated.check())return await Ie(),await K(n);E=await M(v,{params:r,url:n,route:{id:a.id}})}const F=await Fn(g,U,i);return F?bt({url:n,params:r,branch:U.slice(0,F.idx).concat(F.node),status:b,error:E,route:a}):await Ne(n,{id:a.id},E,b)}else U.push(void 0);return bt({url:n,params:r,branch:U,status:200,error:null,route:a,form:e?void 0:null})}async function Fn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function Rt({status:t,error:e,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await $e(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ut||n.pathname!==location.pathname||Kt)&&await K(n)}try{const o=await Yt({loader:jt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:zt(s)}),c={node:await _t(),loader:_t,universal:null,server:null,data:null};return bt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Bt)return Et(new URL(o.location,location.href),{},0);throw o}}function Vn(t){let e;try{if(e=A.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);A.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function ht(t,e){if(t&&!At(t,x,A.hash)){const n=Vn(t);if(!n)return;const r=Bn(n);for(const a of Mt){const s=a.exec(r);if(s)return{id:kt(t),invalidating:e,route:a,params:Xe(s),url:t}}}}function Bn(t){return Je(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function kt(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Oe({url:t,type:e,intent:n,delta:r}){let a=!1;const s=Fe(w,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return tt||Ue.forEach(o=>o(i)),a?null:s}async function W({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=se,block:u=se}){const p=$;$=c;const _=await ht(e,!1),f=Oe({url:e,type:t,delta:n==null?void 0:n.delta,intent:_});if(!f){u(),$===c&&($=p);return}const m=R,d=T;l(),tt=!0,vt&&D.navigating.set(Z.current=f.navigation);let h=_&&await Jt(_);if(!h){if(At(e,x,A.hash))return await K(e);h=await Ne(e,{id:null},await M(new qt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(_==null?void 0:_.url)||e,$!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await Rt({status:500,error:await M(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Et(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await D.updated.check()&&(await Ie(),await K(e));if(Te(),Gt(m),xe(d),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,v={[G]:R+=g,[X]:T+=g,[ve]:i};(s?history.replaceState:history.pushState).call(history,v,"",e),s||On(R,T)}if(L=null,h.props.page.state=i,vt){w=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from(Nn,v=>v(f.navigation)))).filter(v=>typeof v=="function");if(g.length>0){let v=function(){g.forEach(b=>{z.delete(b)})};g.push(v),g.forEach(b=>{z.add(b)})}Wt.$set(h.props),Re(h.props.page),Le=!0}else Ce(h,$t,!1);const{activeElement:y}=document;await He();const S=n?n.scroll:a?Vt():null;if(ie){const g=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));S?scrollTo(S.x,S.y):g?g.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==y&&document.activeElement!==document.body;!r&&!U&&Hn(),ie=!0,h.props.page&&Object.assign(I,h.props.page),tt=!1,t==="popstate"&&Pe(T),f.fulfil(void 0),z.forEach(g=>g(f.navigation)),D.navigating.set(Z.current=null)}async function Ne(t,e,n,r){return t.origin===ut&&t.pathname===location.pathname&&!Kt?await Rt({status:r,error:n,url:t,route:e}):await K(t)}function qn(){let t,e;j.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(t),t=setTimeout(()=>{a(o,2)},20)});function n(i){i.defaultPrevented||a(i.composedPath()[0],1)}j.addEventListener("mousedown",n),j.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(Ot(new URL(o.target.href)),r.unobserve(o.target))},{threshold:0});async function a(i,o){const c=Ae(i,j);if(!c||c===e)return;e=c;const{url:l,external:u,download:p}=Nt(c,x,A.hash);if(u||p)return;const _=gt(c),f=l&&kt(w.url)===kt(l);if(!_.reload&&!f)if(o<=_.preload_data){const m=await ht(l,!1);m&&$n(m)}else o<=_.preload_code&&Ot(l)}function s(){r.disconnect();for(const i of j.querySelectorAll("a")){const{url:o,external:c,download:l}=Nt(i,x,A.hash);if(c||l)continue;const u=gt(i);u.reload||(u.preload_code===pt.viewport&&r.observe(i),u.preload_code===pt.eager&&Ot(o))}}z.add(s),s()}function M(t,e){if(t instanceof St)return t.body;const n=mt(t),r=Un(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Gn(t,e={}){return t=new URL(be(t)),t.origin!==ut?Promise.reject(new Error("goto: invalid URL")):Et(t,e,0)}function tr(t){return je(t),jn()}function je(t){if(typeof t=="function")yt.push(t);else{const{href:e}=new URL(t,location.href);yt.push(n=>n.href===e)}}function Mn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ce(),!tt){const a=Fe(w,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ue.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ce()}),(e=navigator.connection)!=null&&e.saveData||qn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Ae(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Nt(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=gt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[u,p]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),_=u===Tt(location);if(s||c.reload&&(!_||!p)){Oe({url:a,type:"link"})?tt=!0:n.preventDefault();return}if(p!==void 0&&_){const[,f]=w.url.href.split("#");if(f===p){if(n.preventDefault(),p===""||p==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(H=!0,Gt(R),t(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(At(o,x,!1))return;const c=n.target,l=gt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=a==null?void 0:a.getAttribute("name");p&&u.append(p,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),W({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if($={},a===R)return;const s=V[a],i=n.state[ve]??{},o=new URL(n.state[dn]??location.href),c=n.state[X],l=w.url?Tt(location)===Tt(w.url):!1;if(c===T&&(Le||l)){i!==I.state&&(I.state=i),t(o),V[R]=Vt(),s&&scrollTo(s.x,s.y),R=a;return}const p=a-R;await W({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{R=a,T=c},block:()=>{history.go(-p)},nav_token:$})}else if(!H){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[G]:++R,[X]:T},"",location.href)):A.hash&&w.url.hash===location.hash&&W({type:"goto",url:Ve(w.url)})});for(const n of document.querySelectorAll("link"))Cn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&D.navigating.set(Z.current=null)});function t(n){w.url=I.url=n,D.page.set(Xt(I)),D.page.notify()}}async function Kn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Kt=!0;const l=new URL(location.href);let u;({params:a={},route:s={id:null}}=await ht(l,!1)||{}),u=Mt.find(({id:f})=>f===s.id);let p,_=!0;try{const f=r.map(async(d,h)=>{const y=o[h];return y!=null&&y.uses&&(y.uses=De(y.uses)),Yt({loader:A.nodes[d],url:l,params:a,route:s,parent:async()=>{const S={};for(let U=0;U<h;U+=1)Object.assign(S,(await f[U]).data);return S},server_data_node:zt(y)})}),m=await Promise.all(f);if(u){const d=u.layouts;for(let h=0;h<d.length;h++)d[h]||m.splice(h,0,void 0)}p=bt({url:l,params:a,branch:m,status:e,error:n,form:c,route:u??null})}catch(f){if(f instanceof Bt){await K(new URL(f.location,location.href));return}p=await Rt({status:mt(f),error:await M(f,{url:l,params:a,route:s}),url:l,route:s}),t.textContent="",_=!1}p.props.page&&(p.props.page.state={}),Ce(p,t,_)}async function $e(t,e){var s;const n=new URL(t);n.pathname=Pn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(In,"1"),n.searchParams.append(Rn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new St(a.status,i)}return new Promise(async i=>{var _;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function u(f){return An(f,{...A.decoders,Promise:m=>new Promise((d,h)=>{o.set(m,{fulfil:d,reject:h})})})}let p="";for(;;){const{done:f,value:m}=await c.read();if(f&&!p)break;for(p+=!m&&p?`
`:l.decode(m,{stream:!0});;){const d=p.indexOf(`
`);if(d===-1)break;const h=JSON.parse(p.slice(0,d));if(p=p.slice(d+1),h.type==="redirect")return i(h);if(h.type==="data")(_=h.nodes)==null||_.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=De(y.uses),y.data=u(y.data))}),i(h);else if(h.type==="chunk"){const{id:y,data:S,error:U}=h,g=o.get(y);o.delete(y),U?g.reject(u(U)):g.fulfil(u(S))}}}})}function De(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Hn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Fe(t,e,n,r){var c,l;let a,s;const i=new Promise((u,p)=>{a=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Xt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Ve(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{We as a,x as b,Gn as c,Qn as d,zn as g,tr as i,ee as o,I as p,D as s};
