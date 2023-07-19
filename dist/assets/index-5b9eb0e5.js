(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Rr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},gt=[],_e=()=>{},Ko=()=>!1,Xo=/^on[^a-z]/,Ln=e=>Xo.test(e),Lr=e=>e.startsWith("onUpdate:"),ee=Object.assign,jr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Vo=Object.prototype.hasOwnProperty,$=(e,t)=>Vo.call(e,t),R=Array.isArray,Ft=e=>jn(e)==="[object Map]",qo=e=>jn(e)==="[object Set]",j=e=>typeof e=="function",te=e=>typeof e=="string",Dr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Oi=e=>G(e)&&j(e.then)&&j(e.catch),Jo=Object.prototype.toString,jn=e=>Jo.call(e),Go=e=>jn(e).slice(8,-1),Zo=e=>jn(e)==="[object Object]",zr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=Rr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qo=/-(\w)/g,xt=Dn(e=>e.replace(Qo,(t,n)=>n?n.toUpperCase():"")),es=/\B([A-Z])/g,At=Dn(e=>e.replace(es,"-$1").toLowerCase()),Ei=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zn=Dn(e=>e?`on${Ei(e)}`:""),Pn=(e,t)=>!Object.is(e,t),Qn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ka;const fr=()=>ka||(ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $r(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?is(r):$r(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(G(e))return e}}const ns=/;(?![^(]*\))/g,rs=/:([^]+)/,as=/\/\*[^]*?\*\//g;function is(e){const t={};return e.replace(as,"").split(ns).forEach(n=>{if(n){const r=n.split(rs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ur(e){let t="";if(te(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Ur(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const os="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ss=Rr(os);function Pi(e){return!!e||e===""}let be;class ls{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function fs(e,t=be){t&&t.active&&t.effects.push(e)}function cs(){return be}const Hr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ci=e=>(e.w&Xe)>0,Ii=e=>(e.n&Xe)>0,us=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Xe},ds=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ci(a)&&!Ii(a)?a.delete(e):t[n++]=a,a.w&=~Xe,a.n&=~Xe}t.length=n}},cr=new WeakMap;let St=0,Xe=1;const ur=30;let ye;const ot=Symbol(""),dr=Symbol("");class Br{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fs(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=We;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,We=!0,Xe=1<<++St,St<=ur?us(this):Aa(this),this.fn()}finally{St<=ur&&ds(this),Xe=1<<--St,ye=this.parent,We=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(Aa(this),this.onStop&&this.onStop(),this.active=!1)}}function Aa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let We=!0;const Ti=[];function Ot(){Ti.push(We),We=!1}function Et(){const e=Ti.pop();We=e===void 0?!0:e}function ue(e,t,n){if(We&&ye){let r=cr.get(e);r||cr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Hr()),Si(a)}}function Si(e,t){let n=!1;St<=ur?Ii(e)||(e.n|=Xe,n=!Ci(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function Le(e,t,n,r,a,i){const o=cr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?zr(n)&&s.push(o.get("length")):(s.push(o.get(ot)),Ft(e)&&s.push(o.get(dr)));break;case"delete":R(e)||(s.push(o.get(ot)),Ft(e)&&s.push(o.get(dr)));break;case"set":Ft(e)&&s.push(o.get(ot));break}if(s.length===1)s[0]&&mr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);mr(Hr(l))}}function mr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Oa(r);for(const r of n)r.computed||Oa(r)}function Oa(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ms=Rr("__proto__,__v_isRef,__isVue"),Ni=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dr)),ps=Yr(),hs=Yr(!1,!0),gs=Yr(!0),Ea=vs();function vs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ot();const r=U(this)[t].apply(this,n);return Et(),r}}),e}function bs(e){const t=U(this);return ue(t,"has",e),t.hasOwnProperty(e)}function Yr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Fs:ji:t?Li:Ri).get(r))return r;const o=R(r);if(!e){if(o&&$(Ea,a))return Reflect.get(Ea,a,i);if(a==="hasOwnProperty")return bs}const s=Reflect.get(r,a,i);return(Dr(a)?Ni.has(a):ms(a))||(e||ue(r,"get",a),t)?s:le(s)?o&&zr(a)?s:s.value:G(s)?e?Di(s):Xr(s):s}}const ys=Mi(),xs=Mi(!0);function Mi(e=!1){return function(n,r,a,i){let o=n[r];if(zt(o)&&le(o)&&!le(a))return!1;if(!e&&(!pr(a)&&!zt(a)&&(o=U(o),a=U(a)),!R(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=R(n)&&zr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Pn(a,o)&&Le(n,"set",r,a):Le(n,"add",r,a)),l}}function ws(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Le(e,"delete",t,void 0),r}function _s(e,t){const n=Reflect.has(e,t);return(!Dr(t)||!Ni.has(t))&&ue(e,"has",t),n}function ks(e){return ue(e,"iterate",R(e)?"length":ot),Reflect.ownKeys(e)}const Fi={get:ps,set:ys,deleteProperty:ws,has:_s,ownKeys:ks},As={get:gs,set(e,t){return!0},deleteProperty(e,t){return!0}},Os=ee({},Fi,{get:hs,set:xs}),Wr=e=>e,zn=e=>Reflect.getPrototypeOf(e);function rn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ue(a,"get",t),ue(a,"get",i));const{has:o}=zn(a),s=r?Wr:n?Jr:qr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function an(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function on(e,t=!1){return e=e.__v_raw,!t&&ue(U(e),"iterate",ot),Reflect.get(e,"size",e)}function Pa(e){e=U(e);const t=U(this);return zn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function Ca(e,t){t=U(t);const n=U(this),{has:r,get:a}=zn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Pn(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function Ia(e){const t=U(this),{has:n,get:r}=zn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Le(t,"delete",e,void 0),i}function Ta(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Wr:e?Jr:qr;return!e&&ue(s,"iterate",ot),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function ln(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=Ft(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Wr:t?Jr:qr;return!t&&ue(i,"iterate",l?dr:ot),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function Es(){const e={get(i){return rn(this,i)},get size(){return on(this)},has:an,add:Pa,set:Ca,delete:Ia,clear:Ta,forEach:sn(!1,!1)},t={get(i){return rn(this,i,!1,!0)},get size(){return on(this)},has:an,add:Pa,set:Ca,delete:Ia,clear:Ta,forEach:sn(!1,!0)},n={get(i){return rn(this,i,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:sn(!0,!1)},r={get(i){return rn(this,i,!0,!0)},get size(){return on(this,!0)},has(i){return an.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ln(i,!1,!1),n[i]=ln(i,!0,!1),t[i]=ln(i,!1,!0),r[i]=ln(i,!0,!0)}),[e,n,t,r]}const[Ps,Cs,Is,Ts]=Es();function Kr(e,t){const n=t?e?Ts:Is:e?Cs:Ps;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Ss={get:Kr(!1,!1)},Ns={get:Kr(!1,!0)},Ms={get:Kr(!0,!1)},Ri=new WeakMap,Li=new WeakMap,ji=new WeakMap,Fs=new WeakMap;function Rs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ls(e){return e.__v_skip||!Object.isExtensible(e)?0:Rs(Go(e))}function Xr(e){return zt(e)?e:Vr(e,!1,Fi,Ss,Ri)}function js(e){return Vr(e,!1,Os,Ns,Li)}function Di(e){return Vr(e,!0,As,Ms,ji)}function Vr(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ls(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function vt(e){return zt(e)?vt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function pr(e){return!!(e&&e.__v_isShallow)}function zi(e){return vt(e)||zt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function $i(e){return Cn(e,"__v_skip",!0),e}const qr=e=>G(e)?Xr(e):e,Jr=e=>G(e)?Di(e):e;function Ds(e){We&&ye&&(e=U(e),Si(e.dep||(e.dep=Hr())))}function zs(e,t){e=U(e);const n=e.dep;n&&mr(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function $s(e){return le(e)?e.value:e}const Us={get:(e,t,n)=>$s(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ui(e){return vt(e)?e:new Proxy(e,Us)}class Hs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Br(t,()=>{this._dirty||(this._dirty=!0,zs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Ds(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bs(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=_e):(r=e.get,a=e.set),new Hs(r,a,i||!a,n)}function Ke(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){$n(i,t,n)}return a}function ke(e,t,n,r){if(j(e)){const i=Ke(e,t,n,r);return i&&Oi(i)&&i.catch(o=>{$n(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ke(e[i],t,n,r));return a}function $n(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ke(l,null,10,[e,o,s]);return}}Ys(e,n,a,r)}function Ys(e,t,n,r=!0){console.error(e)}let $t=!1,hr=!1;const ae=[];let Ce=0;const bt=[];let Me=null,nt=0;const Hi=Promise.resolve();let Gr=null;function Ws(e){const t=Gr||Hi;return e?t.then(this?e.bind(this):e):t}function Ks(e){let t=Ce+1,n=ae.length;for(;t<n;){const r=t+n>>>1;Ut(ae[r])<e?t=r+1:n=r}return t}function Zr(e){(!ae.length||!ae.includes(e,$t&&e.allowRecurse?Ce+1:Ce))&&(e.id==null?ae.push(e):ae.splice(Ks(e.id),0,e),Bi())}function Bi(){!$t&&!hr&&(hr=!0,Gr=Hi.then(Wi))}function Xs(e){const t=ae.indexOf(e);t>Ce&&ae.splice(t,1)}function Vs(e){R(e)?bt.push(...e):(!Me||!Me.includes(e,e.allowRecurse?nt+1:nt))&&bt.push(e),Bi()}function Sa(e,t=$t?Ce+1:0){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function Yi(e){if(bt.length){const t=[...new Set(bt)];if(bt.length=0,Me){Me.push(...t);return}for(Me=t,Me.sort((n,r)=>Ut(n)-Ut(r)),nt=0;nt<Me.length;nt++)Me[nt]();Me=null,nt=0}}const Ut=e=>e.id==null?1/0:e.id,qs=(e,t)=>{const n=Ut(e)-Ut(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Wi(e){hr=!1,$t=!0,ae.sort(qs);const t=_e;try{for(Ce=0;Ce<ae.length;Ce++){const n=ae[Ce];n&&n.active!==!1&&Ke(n,null,14)}}finally{Ce=0,ae.length=0,Yi(),$t=!1,Gr=null,(ae.length||bt.length)&&Wi()}}function Js(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||V;v&&(a=n.map(_=>te(_)?_.trim():_)),m&&(a=n.map(ts))}let s,l=r[s=Zn(t)]||r[s=Zn(xt(t))];!l&&i&&(l=r[s=Zn(At(t))]),l&&ke(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ke(c,e,6,a)}}function Ki(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=Ki(c,t,!0);d&&(s=!0,ee(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ee(o,i),G(e)&&r.set(e,o),o)}function Un(e,t){return!e||!Ln(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,At(t))||$(e,t))}let Ie=null,Xi=null;function In(e){const t=Ie;return Ie=e,Xi=e&&e.type.__scopeId||null,t}function Gs(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ua(-1);const i=In(t);let o;try{o=e(...a)}finally{In(i),r._d&&Ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function er(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:_,ctx:L,inheritAttrs:N}=e;let z,k;const O=In(e);try{if(n.shapeFlag&4){const I=a||r;z=Pe(d.call(I,I,m,i,_,v,L)),k=l}else{const I=t;z=Pe(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),k=t.props?l:Zs(l)}}catch(I){Lt.length=0,$n(I,e,1),z=me(Ht)}let M=z;if(k&&N!==!1){const I=Object.keys(k),{shapeFlag:H}=M;I.length&&H&7&&(o&&I.some(Lr)&&(k=Qs(k,o)),M=wt(M,k))}return n.dirs&&(M=wt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),z=M,In(O),z}const Zs=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ln(n))&&((t||(t={}))[n]=e[n]);return t},Qs=(e,t)=>{const n={};for(const r in e)(!Lr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function el(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Na(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Un(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Na(r,o,c):!0:!!o;return!1}function Na(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Un(n,i))return!0}return!1}function tl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const nl=e=>e.__isSuspense;function rl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Vs(e)}const fn={};function xn(e,t,n){return Vi(e,t,n)}function Vi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=cs()===((s=ie)==null?void 0:s.scope)?ie:null;let c,d=!1,m=!1;if(le(e)?(c=()=>e.value,d=pr(e)):vt(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(I=>vt(I)||pr(I)),c=()=>e.map(I=>{if(le(I))return I.value;if(vt(I))return mt(I);if(j(I))return Ke(I,l,2)})):j(e)?t?c=()=>Ke(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),ke(e,l,3,[_])}:c=_e,t&&r){const I=c;c=()=>mt(I())}let v,_=I=>{v=O.onStop=()=>{Ke(I,l,4)}},L;if(Yt)if(_=_e,t?n&&ke(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const I=tf();L=I.__watcherHandles||(I.__watcherHandles=[])}else return _e;let N=m?new Array(e.length).fill(fn):fn;const z=()=>{if(O.active)if(t){const I=O.run();(r||d||(m?I.some((H,ne)=>Pn(H,N[ne])):Pn(I,N)))&&(v&&v(),ke(t,l,3,[I,N===fn?void 0:m&&N[0]===fn?[]:N,_]),N=I)}else O.run()};z.allowRecurse=!!t;let k;a==="sync"?k=z:a==="post"?k=()=>ce(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),k=()=>Zr(z));const O=new Br(c,k);t?n?z():N=O.run():a==="post"?ce(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&jr(l.scope.effects,O)};return L&&L.push(M),M}function al(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?qi(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=ie;_t(this);const s=Vi(a,i.bind(r),n);return o?_t(o):st(),s}function qi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function mt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))mt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)mt(e[n],t);else if(qo(e)||Ft(e))e.forEach(n=>{mt(n,t)});else if(Zo(e))for(const n in e)mt(e[n],t);return e}function Qe(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ot(),ke(l,n,8,[e.el,s,e,t]),Et())}}function il(e,t){return j(e)?(()=>ee({name:e.name},t,{setup:e}))():e}const wn=e=>!!e.type.__asyncLoader,Ji=e=>e.type.__isKeepAlive;function ol(e,t){Gi(e,"a",t)}function sl(e,t){Gi(e,"da",t)}function Gi(e,t,n=ie){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Hn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ji(a.parent.vnode)&&ll(r,t,n,a),a=a.parent}}function ll(e,t,n,r){const a=Hn(t,e,r,!0);Zi(()=>{jr(r[t],a)},n)}function Hn(e,t,n=ie,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ot(),_t(n);const s=ke(t,n,e,o);return st(),Et(),s});return r?a.unshift(i):a.push(i),i}}const $e=e=>(t,n=ie)=>(!Yt||e==="sp")&&Hn(e,(...r)=>t(...r),n),fl=$e("bm"),cl=$e("m"),ul=$e("bu"),dl=$e("u"),ml=$e("bum"),Zi=$e("um"),pl=$e("sp"),hl=$e("rtg"),gl=$e("rtc");function vl(e,t=ie){Hn("ec",e,t)}const bl=Symbol.for("v-ndc"),gr=e=>e?uo(e)?ra(e)||e.proxy:gr(e.parent):null,Rt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gr(e.parent),$root:e=>gr(e.root),$emit:e=>e.emit,$options:e=>Qr(e),$forceUpdate:e=>e.f||(e.f=()=>Zr(e.update)),$nextTick:e=>e.n||(e.n=Ws.bind(e.proxy)),$watch:e=>al.bind(e)}),tr=(e,t)=>e!==V&&!e.__isScriptSetup&&$(e,t),yl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(tr(r,t))return o[t]=1,r[t];if(a!==V&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==V&&$(n,t))return o[t]=4,n[t];vr&&(o[t]=0)}}const d=Rt[t];let m,v;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return tr(a,t)?(a[t]=n,!0):r!==V&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&$(e,o)||tr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Rt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ma(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let vr=!0;function xl(e){const t=Qr(e),n=e.proxy,r=e.ctx;vr=!1,t.beforeCreate&&Fa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:_,updated:L,activated:N,deactivated:z,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:I,render:H,renderTracked:ne,renderTriggered:re,errorCaptured:ge,serverPrefetch:he,expose:Se,inheritAttrs:Ct,components:Qt,directives:en,filters:qn}=t;if(c&&wl(c,r,null),o)for(const q in o){const Y=o[q];j(Y)&&(r[q]=Y.bind(n))}if(a){const q=a.call(n,n);G(q)&&(e.data=Xr(q))}if(vr=!0,i)for(const q in i){const Y=i[q],Ge=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):_e,tn=!j(Y)&&j(Y.set)?Y.set.bind(n):_e,Ze=tt({get:Ge,set:tn});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Ae=>Ze.value=Ae})}if(s)for(const q in s)Qi(s[q],r,n,q);if(l){const q=j(l)?l.call(n):l;Reflect.ownKeys(q).forEach(Y=>{Pl(Y,q[Y])})}d&&Fa(d,e,"c");function oe(q,Y){R(Y)?Y.forEach(Ge=>q(Ge.bind(n))):Y&&q(Y.bind(n))}if(oe(fl,m),oe(cl,v),oe(ul,_),oe(dl,L),oe(ol,N),oe(sl,z),oe(vl,ge),oe(gl,ne),oe(hl,re),oe(ml,O),oe(Zi,I),oe(pl,he),R(Se))if(Se.length){const q=e.exposed||(e.exposed={});Se.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:Ge=>n[Y]=Ge})})}else e.exposed||(e.exposed={});H&&e.render===_e&&(e.render=H),Ct!=null&&(e.inheritAttrs=Ct),Qt&&(e.components=Qt),en&&(e.directives=en)}function wl(e,t,n=_e){R(e)&&(e=br(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=_n(a.from||r,a.default,!0):i=_n(a.from||r):i=_n(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Fa(e,t,n){ke(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qi(e,t,n,r){const a=r.includes(".")?qi(n,r):()=>n[r];if(te(e)){const i=t[e];j(i)&&xn(a,i)}else if(j(e))xn(a,e.bind(n));else if(G(e))if(R(e))e.forEach(i=>Qi(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&xn(a,i,e)}}function Qr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Tn(l,c,o,!0)),Tn(l,t,o)),G(t)&&i.set(t,l),l}function Tn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Tn(e,i,n,!0),a&&a.forEach(o=>Tn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=_l[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const _l={data:Ra,props:La,emits:La,methods:Nt,computed:Nt,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:Nt,directives:Nt,watch:Al,provide:Ra,inject:kl};function Ra(e,t){return t?e?function(){return ee(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function kl(e,t){return Nt(br(e),br(t))}function br(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function Nt(e,t){return e?ee(Object.create(null),e,t):t}function La(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:ee(Object.create(null),Ma(e),Ma(t??{})):t}function Al(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function eo(){return{app:null,config:{isNativeTag:Ko,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ol=0;function El(e,t){return function(r,a=null){j(r)||(r=ee({},r)),a!=null&&!G(a)&&(a=null);const i=eo(),o=new Set;let s=!1;const l=i.app={_uid:Ol++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:nf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=me(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ra(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Sn=l;try{return c()}finally{Sn=null}}};return l}}let Sn=null;function Pl(e,t){if(ie){let n=ie.provides;const r=ie.parent&&ie.parent.provides;r===n&&(n=ie.provides=Object.create(r)),n[e]=t}}function _n(e,t,n=!1){const r=ie||Ie;if(r||Sn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Sn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function Cl(e,t,n,r=!1){const a={},i={};Cn(i,Yn,1),e.propsDefaults=Object.create(null),to(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:js(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Il(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Un(e.emitsOptions,v))continue;const _=t[v];if(l)if($(i,v))_!==i[v]&&(i[v]=_,c=!0);else{const L=xt(v);a[L]=yr(l,s,L,_,e,!1)}else _!==i[v]&&(i[v]=_,c=!0)}}}else{to(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=At(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=yr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&Le(e,"set","$attrs")}function to(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(yn(l))continue;const c=t[l];let d;a&&$(a,d=xt(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Un(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=yr(a,l,m,c[m],e,!$(c,m))}}return o}function yr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(_t(a),r=c[n]=l.call(null,t),st())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===At(n))&&(r=!0))}return r}function no(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[v,_]=no(m,t,!0);ee(o,v),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,gt),gt;if(R(i))for(let d=0;d<i.length;d++){const m=xt(i[d]);ja(m)&&(o[m]=V)}else if(i)for(const d in i){const m=xt(d);if(ja(m)){const v=i[d],_=o[m]=R(v)||j(v)?{type:v}:ee({},v);if(_){const L=$a(Boolean,_.type),N=$a(String,_.type);_[0]=L>-1,_[1]=N<0||L<N,(L>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function ja(e){return e[0]!=="$"}function Da(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function za(e,t){return Da(e)===Da(t)}function $a(e,t){return R(t)?t.findIndex(n=>za(n,e)):j(t)&&za(t,e)?0:-1}const ro=e=>e[0]==="_"||e==="$stable",ea=e=>R(e)?e.map(Pe):[Pe(e)],Tl=(e,t,n)=>{if(t._n)return t;const r=Gs((...a)=>ea(t(...a)),n);return r._c=!1,r},ao=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ro(a))continue;const i=e[a];if(j(i))t[a]=Tl(a,i,r);else if(i!=null){const o=ea(i);t[a]=()=>o}}},io=(e,t)=>{const n=ea(t);e.slots.default=()=>n},Sl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Cn(t,"_",n)):ao(t,e.slots={})}else e.slots={},t&&io(e,t);Cn(e.slots,Yn,1)},Nl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ee(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ao(t,a)),o=t}else t&&(io(e,t),o={default:1});if(i)for(const s in a)!ro(s)&&!(s in o)&&delete a[s]};function xr(e,t,n,r,a=!1){if(R(e)){e.forEach((v,_)=>xr(v,t&&(R(t)?t[_]:t),n,r,a));return}if(wn(r)&&!a)return;const i=r.shapeFlag&4?ra(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,$(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),j(l))Ke(l,s,12,[o,d]);else{const v=te(l),_=le(l);if(v||_){const L=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&jr(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,ce(L,n)):L()}}}const ce=rl;function Ml(e){return Fl(e)}function Fl(e,t){const n=fr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:_=_e,insertStaticContent:L}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Tt(f,u)&&(g=nn(f),Ae(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case Bn:z(f,u,p,g);break;case Ht:k(f,u,p,g);break;case kn:f==null&&O(u,p,g,A);break;case Fe:Qt(f,u,p,g,h,x,A,y,w);break;default:P&1?H(f,u,p,g,h,x,A,y,w):P&6?en(f,u,p,g,h,x,A,y,w):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,w,ct)}T!=null&&h&&xr(T,f&&f.ref,x,u||f,!u)},z=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=L(f.children,u,p,g,f.el,f.anchor)},M=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},H=(f,u,p,g,h,x,A,y,w)=>{A=A||u.type==="svg",f==null?ne(u,p,g,h,x,A,y,w):he(f,u,h,x,A,y,w)},ne=(f,u,p,g,h,x,A,y)=>{let w,b;const{type:T,props:P,shapeFlag:S,transition:F,dirs:D}=f;if(w=f.el=o(f.type,x,P&&P.is,P),S&8?d(w,f.children):S&16&&ge(f.children,w,null,g,h,x&&T!=="foreignObject",A,y),D&&Qe(f,null,g,"created"),re(w,f,f.scopeId,A,g),P){for(const B in P)B!=="value"&&!yn(B)&&i(w,B,null,P[B],x,f.children,g,h,Ne);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ee(b,g,f)}D&&Qe(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;W&&F.beforeEnter(w),r(w,u,p),((b=P&&P.onVnodeMounted)||W||D)&&ce(()=>{b&&Ee(b,g,f),W&&F.enter(w),D&&Qe(f,null,g,"mounted")},h)},re=(f,u,p,g,h)=>{if(p&&_(f,p),g)for(let x=0;x<g.length;x++)_(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;re(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ge=(f,u,p,g,h,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const T=f[b]=y?Ye(f[b]):Pe(f[b]);N(null,T,u,p,g,h,x,A,y)}},he=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=u;w|=f.patchFlag&16;const P=f.props||V,S=u.props||V;let F;p&&et(p,!1),(F=S.onVnodeBeforeUpdate)&&Ee(F,p,u,f),T&&Qe(u,f,p,"beforeUpdate"),p&&et(p,!0);const D=h&&u.type!=="foreignObject";if(b?Se(f.dynamicChildren,b,y,p,g,D,x):A||Y(f,u,y,null,p,g,D,x,!1),w>0){if(w&16)Ct(y,u,P,S,p,g,h);else if(w&2&&P.class!==S.class&&i(y,"class",null,S.class,h),w&4&&i(y,"style",P.style,S.style,h),w&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],ve=P[Z],ut=S[Z];(ut!==ve||Z==="value")&&i(y,Z,ve,ut,h,f.children,p,g,Ne)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Ct(y,u,P,S,p,g,h);((F=S.onVnodeUpdated)||T)&&ce(()=>{F&&Ee(F,p,u,f),T&&Qe(u,f,p,"updated")},g)},Se=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],T=w.el&&(w.type===Fe||!Tt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,T,null,g,h,x,A,!0)}},Ct=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==V)for(const y in p)!yn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Ne);for(const y in g){if(yn(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,h,x,Ne)}"value"in g&&i(f,"value",p.value,g.value)}},Qt=(f,u,p,g,h,x,A,y,w)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:S,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(T,p,g),ge(u.children,p,T,h,x,A,y,w)):P>0&&P&64&&S&&f.dynamicChildren?(Se(f.dynamicChildren,S,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&oo(f,u,!0)):Y(f,u,p,T,h,x,A,y,w)},en=(f,u,p,g,h,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):qn(u,p,g,h,x,A,w):va(f,u,w)},qn=(f,u,p,g,h,x,A)=>{const y=f.component=Xl(f,g,h);if(Ji(f)&&(y.ctx.renderer=ct),Vl(y),y.asyncDep){if(h&&h.registerDep(y,oe),!f.el){const w=y.subTree=me(Ht);k(null,w,u,p)}return}oe(y,f,u,p,h,x,A)},va=(f,u,p)=>{const g=u.component=f.component;if(el(f,u,p))if(g.asyncDep&&!g.asyncResolved){q(g,u,p);return}else g.next=u,Xs(g.update),g.update();else u.el=f.el,g.vnode=u},oe=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:T,bu:P,u:S,parent:F,vnode:D}=f,W=T,B;et(f,!1),T?(T.el=D.el,q(f,T,A)):T=D,P&&Qn(P),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Ee(B,F,T,D),et(f,!0);const Z=er(f),ve=f.subTree;f.subTree=Z,N(ve,Z,m(ve.el),nn(ve),f,h,x),T.el=Z.el,W===null&&tl(f,Z.el),S&&ce(S,h),(B=T.props&&T.props.onVnodeUpdated)&&ce(()=>Ee(B,F,T,D),h)}else{let T;const{el:P,props:S}=u,{bm:F,m:D,parent:W}=f,B=wn(u);if(et(f,!1),F&&Qn(F),!B&&(T=S&&S.onVnodeBeforeMount)&&Ee(T,W,u),et(f,!0),P&&Gn){const Z=()=>{f.subTree=er(f),Gn(P,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=er(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if(D&&ce(D,h),!B&&(T=S&&S.onVnodeMounted)){const Z=u;ce(()=>Ee(T,W,Z),h)}(u.shapeFlag&256||W&&wn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ce(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Br(y,()=>Zr(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,et(f,!0),b()},q=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Il(f,u.props,g,p),Nl(f,u.children,p),Ot(),Sa(),Et()},Y=(f,u,p,g,h,x,A,y,w=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:S,shapeFlag:F}=u;if(S>0){if(S&128){tn(b,P,p,g,h,x,A,y,w);return}else if(S&256){Ge(b,P,p,g,h,x,A,y,w);return}}F&8?(T&16&&Ne(b,h,x),P!==b&&d(p,P)):T&16?F&16?tn(b,P,p,g,h,x,A,y,w):Ne(b,h,x,!0):(T&8&&d(p,""),F&16&&ge(P,p,g,h,x,A,y,w))},Ge=(f,u,p,g,h,x,A,y,w)=>{f=f||gt,u=u||gt;const b=f.length,T=u.length,P=Math.min(b,T);let S;for(S=0;S<P;S++){const F=u[S]=w?Ye(u[S]):Pe(u[S]);N(f[S],F,p,null,h,x,A,y,w)}b>T?Ne(f,h,x,!0,!1,P):ge(u,p,g,h,x,A,y,w,P)},tn=(f,u,p,g,h,x,A,y,w)=>{let b=0;const T=u.length;let P=f.length-1,S=T-1;for(;b<=P&&b<=S;){const F=f[b],D=u[b]=w?Ye(u[b]):Pe(u[b]);if(Tt(F,D))N(F,D,p,null,h,x,A,y,w);else break;b++}for(;b<=P&&b<=S;){const F=f[P],D=u[S]=w?Ye(u[S]):Pe(u[S]);if(Tt(F,D))N(F,D,p,null,h,x,A,y,w);else break;P--,S--}if(b>P){if(b<=S){const F=S+1,D=F<T?u[F].el:g;for(;b<=S;)N(null,u[b]=w?Ye(u[b]):Pe(u[b]),p,D,h,x,A,y,w),b++}}else if(b>S)for(;b<=P;)Ae(f[b],h,x,!0),b++;else{const F=b,D=b,W=new Map;for(b=D;b<=S;b++){const de=u[b]=w?Ye(u[b]):Pe(u[b]);de.key!=null&&W.set(de.key,b)}let B,Z=0;const ve=S-D+1;let ut=!1,xa=0;const It=new Array(ve);for(b=0;b<ve;b++)It[b]=0;for(b=F;b<=P;b++){const de=f[b];if(Z>=ve){Ae(de,h,x,!0);continue}let Oe;if(de.key!=null)Oe=W.get(de.key);else for(B=D;B<=S;B++)if(It[B-D]===0&&Tt(de,u[B])){Oe=B;break}Oe===void 0?Ae(de,h,x,!0):(It[Oe-D]=b+1,Oe>=xa?xa=Oe:ut=!0,N(de,u[Oe],p,null,h,x,A,y,w),Z++)}const wa=ut?Rl(It):gt;for(B=wa.length-1,b=ve-1;b>=0;b--){const de=D+b,Oe=u[de],_a=de+1<T?u[de+1].el:g;It[b]===0?N(null,Oe,p,_a,h,x,A,y,w):ut&&(B<0||b!==wa[B]?Ze(Oe,p,_a,2):B--)}}},Ze=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){Ze(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,ct);return}if(A===Fe){r(x,u,p);for(let P=0;P<w.length;P++)Ze(w[P],u,p,g);r(f.anchor,u,p);return}if(A===kn){M(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ce(()=>y.enter(x),h);else{const{leave:P,delayLeave:S,afterLeave:F}=y,D=()=>r(x,u,p),W=()=>{P(x,()=>{D(),F&&F()})};S?S(x,D,W):W()}else r(x,u,p)},Ae=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:S}=f;if(y!=null&&xr(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const F=T&1&&S,D=!wn(f);let W;if(D&&(W=A&&A.onVnodeBeforeUnmount)&&Ee(W,u,f),T&6)Wo(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}F&&Qe(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,h,ct,g):b&&(x!==Fe||P>0&&P&64)?Ne(b,u,p,!1,!0):(x===Fe&&P&384||!h&&T&16)&&Ne(w,u,p),g&&ba(f)}(D&&(W=A&&A.onVnodeUnmounted)||F)&&ce(()=>{W&&Ee(W,u,f),F&&Qe(f,null,u,"unmounted")},p)},ba=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===Fe){Yo(p,g);return}if(u===kn){I(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},Yo=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},Wo=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&Qn(g),h.stop(),x&&(x.active=!1,Ae(A,f,u,p)),y&&ce(y,u),ce(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ne=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ae(f[A],u,p,g,h)},nn=f=>f.shapeFlag&6?nn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),ya=(f,u,p)=>{f==null?u._vnode&&Ae(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Sa(),Yi(),u._vnode=f},ct={p:N,um:Ae,m:Ze,r:ba,mt:qn,mc:ge,pc:Y,pbc:Se,n:nn,o:e};let Jn,Gn;return t&&([Jn,Gn]=t(ct)),{render:ya,hydrate:Jn,createApp:El(ya,Jn)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function oo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ye(a[i]),s.el=o.el),n||oo(o,s)),s.type===Bn&&(s.el=o.el)}}function Rl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ll=e=>e.__isTeleport,Fe=Symbol.for("v-fgt"),Bn=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),kn=Symbol.for("v-stc"),Lt=[];let xe=null;function so(e=!1){Lt.push(xe=e?null:[])}function jl(){Lt.pop(),xe=Lt[Lt.length-1]||null}let Bt=1;function Ua(e){Bt+=e}function lo(e){return e.dynamicChildren=Bt>0?xe||gt:null,jl(),Bt>0&&xe&&xe.push(e),e}function Dl(e,t,n,r,a,i){return lo(co(e,t,n,r,a,i,!0))}function zl(e,t,n,r,a){return lo(me(e,t,n,r,a,!0))}function wr(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const Yn="__vInternal",fo=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||le(e)||j(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function co(e,t=null,n=null,r=0,a=null,i=e===Fe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fo(t),ref:t&&An(t),scopeId:Xi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ie};return s?(ta(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Bt>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const me=$l;function $l(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===bl)&&(e=Ht),wr(e)){const s=wt(e,t,!0);return n&&ta(s,n),Bt>0&&!i&&xe&&(s.shapeFlag&6?xe[xe.indexOf(e)]=s:xe.push(s)),s.patchFlag|=-2,s}if(Zl(e)&&(e=e.__vccOpts),t){t=Ul(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=Ur(s)),G(l)&&(zi(l)&&!R(l)&&(l=ee({},l)),t.style=$r(l))}const o=te(e)?1:nl(e)?128:Ll(e)?64:G(e)?4:j(e)?2:0;return co(e,t,n,r,a,o,i,!0)}function Ul(e){return e?zi(e)||Yn in e?ee({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Yl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&fo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(An(t)):[a,An(t)]:An(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Hl(e=" ",t=0){return me(Bn,null,e,t)}function Bl(e,t){const n=me(kn,null,e);return n.staticCount=t,n}function Pe(e){return e==null||typeof e=="boolean"?me(Ht):R(e)?me(Fe,null,e.slice()):typeof e=="object"?Ye(e):me(Bn,null,String(e))}function Ye(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function ta(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ta(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Yn in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Hl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ur([t.class,r.class]));else if(a==="style")t.style=$r([t.style,r.style]);else if(Ln(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ee(e,t,n,r=null){ke(e,t,7,[n,r])}const Wl=eo();let Kl=0;function Xl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Wl,i={uid:Kl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ls(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:no(r,a),emitsOptions:Ki(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Js.bind(null,i),e.ce&&e.ce(i),i}let ie=null,na,dt,Ha="__VUE_INSTANCE_SETTERS__";(dt=fr()[Ha])||(dt=fr()[Ha]=[]),dt.push(e=>ie=e),na=e=>{dt.length>1?dt.forEach(t=>t(e)):dt[0](e)};const _t=e=>{na(e),e.scope.on()},st=()=>{ie&&ie.scope.off(),na(null)};function uo(e){return e.vnode.shapeFlag&4}let Yt=!1;function Vl(e,t=!1){Yt=t;const{props:n,children:r}=e.vnode,a=uo(e);Cl(e,n,a,t),Sl(e,r);const i=a?ql(e,t):void 0;return Yt=!1,i}function ql(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,yl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Gl(e):null;_t(e),Ot();const i=Ke(r,e,0,[e.props,a]);if(Et(),st(),Oi(i)){if(i.then(st,st),t)return i.then(o=>{Ba(e,o,t)}).catch(o=>{$n(o,e,0)});e.asyncDep=i}else Ba(e,i,t)}else mo(e,t)}function Ba(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Ui(t)),mo(e,n)}let Ya;function mo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ya&&!r.render){const a=r.template||Qr(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ee(ee({isCustomElement:i,delimiters:s},o),l);r.render=Ya(a,c)}}e.render=r.render||_e}_t(e),Ot(),xl(e),Et(),st()}function Jl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}}))}function Gl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Jl(e)},slots:e.slots,emit:e.emit,expose:t}}function ra(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ui($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rt)return Rt[n](e)},has(t,n){return n in t||n in Rt}}))}function Zl(e){return j(e)&&"__vccOpts"in e}const tt=(e,t)=>Bs(e,t,Yt);function Ql(e,t,n){const r=arguments.length;return r===2?G(t)&&!R(t)?wr(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wr(n)&&(n=[n]),me(e,t,n))}const ef=Symbol.for("v-scx"),tf=()=>_n(ef),nf="3.3.4",rf="http://www.w3.org/2000/svg",rt=typeof document<"u"?document:null,Wa=rt&&rt.createElement("template"),af={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?rt.createElementNS(rf,e):rt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Wa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Wa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function of(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function sf(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&_r(r,i,"");for(const i in n)_r(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ka=/\s*!important$/;function _r(e,t,n){if(R(n))n.forEach(r=>_r(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=lf(e,t);Ka.test(n)?e.setProperty(At(r),n.replace(Ka,""),"important"):e[r]=n}}const Xa=["Webkit","Moz","ms"],nr={};function lf(e,t){const n=nr[t];if(n)return n;let r=xt(t);if(r!=="filter"&&r in e)return nr[t]=r;r=Ei(r);for(let a=0;a<Xa.length;a++){const i=Xa[a]+r;if(i in e)return nr[t]=i}return t}const Va="http://www.w3.org/1999/xlink";function ff(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Va,t.slice(6,t.length)):e.setAttributeNS(Va,t,n);else{const i=ss(t);n==null||i&&!Pi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function cf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Pi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function uf(e,t,n,r){e.addEventListener(t,n,r)}function df(e,t,n,r){e.removeEventListener(t,n,r)}function mf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=pf(t);if(r){const c=i[t]=vf(r,a);uf(e,s,c,l)}else o&&(df(e,s,o,l),i[t]=void 0)}}const qa=/(?:Once|Passive|Capture)$/;function pf(e){let t;if(qa.test(e)){t={};let r;for(;r=e.match(qa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):At(e.slice(2)),t]}let rr=0;const hf=Promise.resolve(),gf=()=>rr||(hf.then(()=>rr=0),rr=Date.now());function vf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ke(bf(r,n.value),t,5,[r])};return n.value=e,n.attached=gf(),n}function bf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ja=/^on[a-z]/,yf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?of(e,r,a):t==="style"?sf(e,n,r):Ln(t)?Lr(t)||mf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xf(e,t,r,a))?cf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ff(e,t,r,a))};function xf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ja.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ja.test(t)&&te(n)?!1:t in e}const wf=ee({patchProp:yf},af);let Ga;function _f(){return Ga||(Ga=Ml(wf))}const kf=(...e)=>{const t=_f().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Af(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Af(e){return te(e)?document.querySelector(e):e}const Of=""+new URL("../images/icon-previous.svg",import.meta.url).href,Ef=""+new URL("../images/avatar.jpg",import.meta.url).href,Pf=""+new URL("../images/dog-image-1.jpg",import.meta.url).href,Cf=""+new URL("../images/dog-image-2.jpg",import.meta.url).href,If=""+new URL("../images/dog-image-3.jpg",import.meta.url).href,Tf=""+new URL("../images/icon-next.svg",import.meta.url).href,Sf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Nf={},Mf={class:"relative w-1/2 h-[500px] md:-left-14 bg-gradient-to-b from-lightMagenta to-lightViolet rounded-br-full md:max-h-[850px] md:w-1/3 md:rounded-br-full md:rounded-bl-full"},Ff=Bl('<div class="absolute h-[550px] right-0 translate-x-1/2 top-14 w-[280px] bg-white shadow-2xl rounded-3xl"><div class="relative flex justify-center items-center w-11/12 m-auto h-16 rounded-b-lg rounded-t-2xl mt-4 bg-gradient-to-l from-lightMagenta to-lightViolet"><div class="absolute w-3/5 h-5 -top-1 bg-white rounded-b-2xl"></div><div class="flex w-11/12 justify-between mt-2"><div class="flex items-center gap-1"><div><img class="" src="'+Of+'" alt=""></div><div class="h-5 w-5 border-2 rounded-full"><img class="rounded-full" src="'+Ef+'" alt=""></div><div><h2 class="capitalize text-xs text-white">samuel green</h2><p class="text-white text-[10px] opacity-50">Available to Walk</p></div></div><div><div class="text-white">⋮</div></div></div></div><div class="w-11/12 m-auto h-[450px] bg-appBackground rounded-t-lg rounded-b-2xl"><div class="flex flex-col gap-2 w-1/2 text-xs pt-4 ml-2 mb-2"><div class="rounded-xl p-1 bg-gray-200"><p class="text-chatLeft font-medium text-[10px] ml-1"> That sounds great. i&#39;d be happy to discuss more. </p></div><div class="rounded-xl p-1 bg-gray-200"><p class="text-chatLeft font-medium text-[10px] ml-1"> Could you send over some pictures of your dog, please? </p></div></div><div class="flex justify-center mb-2"><div class="flex gap-2 w-10"><img class="rounded-xl" src="'+Pf+'" alt=""><img class="rounded-xl" src="'+Cf+'" alt=""><img class="rounded-xl" src="'+If+'" alt=""></div></div><div class="flex flex-col mb-1"><div class="flex justify-end mb-1"><p class="w-1/2 text-[10px] mr-2 pl-3 p-1 rounded-xl bg-white text-chatLeft font-medium"> Here are a few pictures. She’s a happy girl! </p></div><div class="flex justify-end"><p class="w-1/2 text-[10px] mr-2 pl-3 p-1 rounded-xl bg-white text-chatLeft font-medium"> Can you make it? </p></div></div><div class="flex flex-col gap-2 w-1/2 text-xs ml-2 mb-2"><div class="rounded-xl p-1 bg-gray-200"><p class="text-chatLeft font-medium text-[10px] ml-1"> She looks so happy! The time we discussed works. How long shall I take her out for? </p></div></div><button class="flex items-center justify-between rounded-t-lg ml-2 mb-2 rounded-br-lg w-2/3 h-6 rounded-bl-sm p-1 bg-gradient-to-b from-lightMagenta to-lightViolet"><div class="flex"><div class="border-2 w-3 h-3 rounded-full ml-2 opacity-75"></div><div class=""><p class="text-white opacity-75 font-medium text-[10px] ml-2"> 30 min walk </p></div></div><div><p class="text-white mr-2 font-medium">$29</p></div></button><button class="flex items-center mb-4 justify-between rounded-t-lg ml-2 rounded-br-lg w-2/3 h-6 rounded-bl-sm p-1 bg-gradient-to-b from-lightMagenta to-lightViolet"><div class="flex"><div class="border-2 w-3 h-3 rounded-full ml-2 opacity-75"></div><div class=""><p class="text-white opacity-75 font-medium text-[10px] ml-2"> 1 hour walk </p></div></div><div><p class="text-white mr-2 font-medium">$49</p></div></button><div class="h-11 pb-4 m-auto"><div class="relative flex items-center"><input class="w-11/12 focus:shadow-lg m-auto pl-4 text-sm h-9 rounded-2xl outline-none" type="text" name="text" placeholder="Type a message..."><div class="absolute hover:cursor-pointer right-5 flex justify-center items-center p-2 w-6 h-6 rounded-full bg-slate-800"><img class="" src="'+Tf+'" alt=""></div></div></div></div></div>',1),Rf=[Ff];function Lf(e,t){return so(),Dl("div",Mf,Rf)}const jf=Sf(Nf,[["render",Lf]]),Df={__name:"App",setup(e){return(t,n)=>(so(),zl(jf))}};function Za(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Za(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Za(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nn(e){"@babel/helpers - typeof";return Nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nn(e)}function zf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $f(e,t,n){return t&&Qa(e.prototype,t),n&&Qa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aa(e,t){return Hf(e)||Yf(e,t)||po(e,t)||Kf()}function Jt(e){return Uf(e)||Bf(e)||po(e)||Wf()}function Uf(e){if(Array.isArray(e))return kr(e)}function Hf(e){if(Array.isArray(e))return e}function Bf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function po(e,t){if(e){if(typeof e=="string")return kr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kr(e,t)}}function kr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ei=function(){},ia={},ho={},go=null,vo={mark:ei,measure:ei};try{typeof window<"u"&&(ia=window),typeof document<"u"&&(ho=document),typeof MutationObserver<"u"&&(go=MutationObserver),typeof performance<"u"&&(vo=performance)}catch{}var Xf=ia.navigator||{},ti=Xf.userAgent,ni=ti===void 0?"":ti,Ve=ia,X=ho,ri=go,cn=vo;Ve.document;var Ue=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",bo=~ni.indexOf("MSIE")||~ni.indexOf("Trident/"),un,dn,mn,pn,hn,je="___FONT_AWESOME___",Ar=16,yo="fa",xo="svg-inline--fa",lt="data-fa-i2svg",Or="data-fa-pseudo-element",Vf="data-fa-pseudo-element-pending",oa="data-prefix",sa="data-icon",ai="fontawesome-i2svg",qf="async",Jf=["HTML","HEAD","STYLE","SCRIPT"],wo=function(){try{return!0}catch{return!1}}(),K="classic",J="sharp",la=[K,J];function Gt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Wt=Gt((un={},Q(un,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Q(un,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),un)),Kt=Gt((dn={},Q(dn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Q(dn,J,{solid:"fass",regular:"fasr",light:"fasl"}),dn)),Xt=Gt((mn={},Q(mn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Q(mn,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),mn)),Gf=Gt((pn={},Q(pn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Q(pn,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),pn)),Zf=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,_o="fa-layers-text",Qf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ec=Gt((hn={},Q(hn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Q(hn,J,{900:"fass",400:"fasr",300:"fasl"}),hn)),ko=[1,2,3,4,5,6,7,8,9,10],tc=ko.concat([11,12,13,14,15,16,17,18,19,20]),nc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vt=new Set;Object.keys(Kt[K]).map(Vt.add.bind(Vt));Object.keys(Kt[J]).map(Vt.add.bind(Vt));var rc=[].concat(la,Jt(Vt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY]).concat(ko.map(function(e){return"".concat(e,"x")})).concat(tc.map(function(e){return"w-".concat(e)})),jt=Ve.FontAwesomeConfig||{};function ac(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ic(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var oc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];oc.forEach(function(e){var t=aa(e,2),n=t[0],r=t[1],a=ic(ac(n));a!=null&&(jt[r]=a)})}var Ao={styleDefault:"solid",familyDefault:"classic",cssPrefix:yo,replacementClass:xo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jt.familyPrefix&&(jt.cssPrefix=jt.familyPrefix);var kt=E(E({},Ao),jt);kt.autoReplaceSvg||(kt.observeMutations=!1);var C={};Object.keys(Ao).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){kt[e]=n,Dt.forEach(function(r){return r(C)})},get:function(){return kt[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){kt.cssPrefix=t,Dt.forEach(function(n){return n(C)})},get:function(){return kt.cssPrefix}});Ve.FontAwesomeConfig=C;var Dt=[];function sc(e){return Dt.push(e),function(){Dt.splice(Dt.indexOf(e),1)}}var Be=Ar,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lc(e){if(!(!e||!Ue)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var fc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qt(){for(var e=12,t="";e-- >0;)t+=fc[Math.random()*62|0];return t}function Pt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function fa(e){return e.classList?Pt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Oo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Oo(e[n]),'" ')},"").trim()}function Wn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ca(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function uc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function dc(e){var t=e.transform,n=e.width,r=n===void 0?Ar:n,a=e.height,i=a===void 0?Ar:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&bo?l+="translate(".concat(t.x/Be-r/2,"em, ").concat(t.y/Be-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Be,"em), calc(-50% + ").concat(t.y/Be,"em)) "):l+="translate(".concat(t.x/Be,"em, ").concat(t.y/Be,"em) "),l+="scale(".concat(t.size/Be*(t.flipX?-1:1),", ").concat(t.size/Be*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var mc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Eo(){var e=yo,t=xo,n=C.cssPrefix,r=C.replacementClass,a=mc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ii=!1;function ar(){C.autoAddCss&&!ii&&(lc(Eo()),ii=!0)}var pc={mixout:function(){return{dom:{css:Eo,insertCss:ar}}},hooks:function(){return{beforeDOMElementCreation:function(){ar()},beforeI2svg:function(){ar()}}}},De=Ve||{};De[je]||(De[je]={});De[je].styles||(De[je].styles={});De[je].hooks||(De[je].hooks={});De[je].shims||(De[je].shims=[]);var we=De[je],Po=[],hc=function e(){X.removeEventListener("DOMContentLoaded",e),Mn=1,Po.map(function(t){return t()})},Mn=!1;Ue&&(Mn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Mn||X.addEventListener("DOMContentLoaded",hc));function gc(e){Ue&&(Mn?setTimeout(e,0):Po.push(e))}function Zt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Oo(e):"<".concat(t," ").concat(cc(r),">").concat(i.map(Zt).join(""),"</").concat(t,">")}function oi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var vc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ir=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?vc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function bc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Er(e){var t=bc(e);return t.length===1?t[0].toString(16):null}function yc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function si(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=si(t);typeof we.hooks.addPack=="function"&&!a?we.hooks.addPack(e,si(t)):we.styles[e]=E(E({},we.styles[e]||{}),i),e==="fas"&&Pr("fa",t)}var gn,vn,bn,pt=we.styles,xc=we.shims,wc=(gn={},Q(gn,K,Object.values(Xt[K])),Q(gn,J,Object.values(Xt[J])),gn),ua=null,Co={},Io={},To={},So={},No={},_c=(vn={},Q(vn,K,Object.keys(Wt[K])),Q(vn,J,Object.keys(Wt[J])),vn);function kc(e){return~rc.indexOf(e)}function Ac(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!kc(a)?a:null}var Mo=function(){var t=function(i){return ir(pt,function(o,s,l){return o[l]=ir(s,i,{}),o},{})};Co=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Io=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),No=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in pt||C.autoFetchSvg,r=ir(xc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});To=r.names,So=r.unicodes,ua=Kn(C.styleDefault,{family:C.familyDefault})};sc(function(e){ua=Kn(e.styleDefault,{family:C.familyDefault})});Mo();function da(e,t){return(Co[e]||{})[t]}function Oc(e,t){return(Io[e]||{})[t]}function it(e,t){return(No[e]||{})[t]}function Fo(e){return To[e]||{prefix:null,iconName:null}}function Ec(e){var t=So[e],n=da("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qe(){return ua}var ma=function(){return{prefix:null,iconName:null,rest:[]}};function Kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Wt[r][e],i=Kt[r][e]||Kt[r][a],o=e in we.styles?e:null;return i||o||null}var li=(bn={},Q(bn,K,Object.keys(Xt[K])),Q(bn,J,Object.keys(Xt[J])),bn);function Xn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Q(t,K,"".concat(C.cssPrefix,"-").concat(K)),Q(t,J,"".concat(C.cssPrefix,"-").concat(J)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return li[K].includes(c)}))&&(s=K),(e.includes(i[J])||e.some(function(c){return li[J].includes(c)}))&&(s=J);var l=e.reduce(function(c,d){var m=Ac(C.cssPrefix,d);if(pt[d]?(d=wc[s].includes(d)?Gf[s][d]:d,o=d,c.prefix=d):_c[s].indexOf(d)>-1?(o=d,c.prefix=Kn(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[K]&&d!==i[J]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Fo(c.iconName):{},_=it(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||_||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!pt.far&&pt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},ma());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(pt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=it(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=qe()||"fas"),l}var Pc=function(){function e(){zf(this,e),this.definitions={}}return $f(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Pr(s,o[s]);var l=Xt[K][s];l&&Pr(l,o[s]),Mo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),fi=[],ht={},yt={},Cc=Object.keys(yt);function Ic(e,t){var n=t.mixoutsTo;return fi=e,ht={},Object.keys(yt).forEach(function(r){Cc.indexOf(r)===-1&&delete yt[r]}),fi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Nn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ht[o]||(ht[o]=[]),ht[o].push(i[o])})}r.provides&&r.provides(yt)}),n}function Cr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ft(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return yt[e]?yt[e].apply(null,t):void 0}function Ir(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||qe();if(t)return t=it(n,t)||t,oi(Ro.definitions,n,t)||oi(we.styles,n,t)}var Ro=new Pc,Tc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ft("noAuto")},Sc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(ft("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,gc(function(){Mc({autoReplaceSvgRoot:n}),ft("watch",t)})}},Nc={icon:function(t){if(t===null)return null;if(Nn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:it(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Kn(t[0]);return{prefix:r,iconName:it(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(Zf))){var a=Xn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||qe(),iconName:it(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=qe();return{prefix:i,iconName:it(i,t)||t}}}},pe={noAuto:Tc,config:C,dom:Sc,parse:Nc,library:Ro,findIconDefinition:Ir,toHtml:Zt},Mc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(we.styles).length>0||C.autoFetchSvg)&&Ue&&C.autoReplaceSvg&&pe.dom.i2svg({node:r})};function Vn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Zt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ue){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Fc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ca(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Wn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Rc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function pa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,_=v===void 0?!1:v,L=r.found?r:n,N=L.width,z=L.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(he){return m.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};_&&(M.attributes[lt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||qt())},children:[l]}),delete M.attributes.title);var H=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},I),m.styles)}),ne=r.found&&n.found?ze("generateAbstractMask",H)||{children:[],attributes:{}}:ze("generateAbstractIcon",H)||{children:[],attributes:{}},re=ne.children,ge=ne.attributes;return H.children=re,H.attributes=ge,s?Rc(H):Fc(H)}function ci(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[lt]="");var d=E({},o.styles);ca(a)&&(d.transform=dc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Wn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Lc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Wn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var or=we.styles;function Tr(e){var t=e[0],n=e[1],r=e.slice(4),a=aa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(at.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(at.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(at.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var jc={found:!1,width:512,height:512};function Dc(e,t){!wo&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Sr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=qe()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=Fo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&or[t]&&or[t][e]){var o=or[t][e];return r(Tr(o))}Dc(e,t),r(E(E({},jc),{},{icon:C.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var ui=function(){},Nr=C.measurePerformance&&cn&&cn.mark&&cn.measure?cn:{mark:ui,measure:ui},Mt='FA "6.4.0"',zc=function(t){return Nr.mark("".concat(Mt," ").concat(t," begins")),function(){return Lo(t)}},Lo=function(t){Nr.mark("".concat(Mt," ").concat(t," ends")),Nr.measure("".concat(Mt," ").concat(t),"".concat(Mt," ").concat(t," begins"),"".concat(Mt," ").concat(t," ends"))},ha={begin:zc,end:Lo},On=function(){};function di(e){var t=e.getAttribute?e.getAttribute(lt):null;return typeof t=="string"}function $c(e){var t=e.getAttribute?e.getAttribute(oa):null,n=e.getAttribute?e.getAttribute(sa):null;return t&&n}function Uc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function Hc(){if(C.autoReplaceSvg===!0)return En.replace;var e=En[C.autoReplaceSvg];return e||En.replace}function Bc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Yc(e){return X.createElement(e)}function jo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Bc:Yc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(jo(o,{ceFn:r}))}),a}function Wc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var En={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(jo(a),n)}),n.getAttribute(lt)===null&&C.keepOriginalSource){var r=X.createComment(Wc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~fa(n).indexOf(C.replacementClass))return En.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Zt(s)}).join(`
`);n.setAttribute(lt,""),n.innerHTML=o}};function mi(e){e()}function Do(e,t){var n=typeof t=="function"?t:On;if(e.length===0)n();else{var r=mi;C.mutateApproach===qf&&(r=Ve.requestAnimationFrame||mi),r(function(){var a=Hc(),i=ha.begin("mutate");e.map(a),i(),n()})}}var ga=!1;function zo(){ga=!0}function Mr(){ga=!1}var Fn=null;function pi(e){if(ri&&C.observeMutations){var t=e.treeCallback,n=t===void 0?On:t,r=e.nodeCallback,a=r===void 0?On:r,i=e.pseudoElementsCallback,o=i===void 0?On:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Fn=new ri(function(c){if(!ga){var d=qe();Pt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!di(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&di(m.target)&&~nc.indexOf(m.attributeName))if(m.attributeName==="class"&&$c(m.target)){var v=Xn(fa(m.target)),_=v.prefix,L=v.iconName;m.target.setAttribute(oa,_||d),L&&m.target.setAttribute(sa,L)}else Uc(m.target)&&a(m.target)})}}),Ue&&Fn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kc(){Fn&&Fn.disconnect()}function Xc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Vc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Xn(fa(e));return a.prefix||(a.prefix=qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Oc(a.prefix,e.innerText)||da(a.prefix,Er(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function qc(e){var t=Pt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Jc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Vc(e),r=n.iconName,a=n.prefix,i=n.rest,o=qc(e),s=Cr("parseNodeAttributes",{},e),l=t.styleParser?Xc(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Gc=we.styles;function $o(e){var t=C.autoReplaceSvg==="nest"?hi(e,{styleParser:!1}):hi(e);return~t.extra.classes.indexOf(_o)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}var Je=new Set;la.map(function(e){Je.add("fa-".concat(e))});Object.keys(Wt[K]).map(Je.add.bind(Je));Object.keys(Wt[J]).map(Je.add.bind(Je));Je=Jt(Je);function gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ai,"-").concat(m))},a=function(m){return n.remove("".concat(ai,"-").concat(m))},i=C.autoFetchSvg?Je:la.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Gc));i.includes("fa")||i.push("fa");var o=[".".concat(_o,":not([").concat(lt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(lt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Pt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ha.begin("onTree"),c=s.reduce(function(d,m){try{var v=$o(m);v&&d.push(v)}catch(_){wo||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Do(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Zc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$o(e).then(function(n){n&&Do([n],t)})}function Qc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ir(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ir(a||{})),e(r,E(E({},n),{},{mask:a}))}}var eu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,_=n.titleId,L=_===void 0?null:_,N=n.classes,z=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,M=n.styles,I=M===void 0?{}:M;if(t){var H=t.prefix,ne=t.iconName,re=t.icon;return Vn(E({type:"icon"},t),function(){return ft("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(L||qt()):(O["aria-hidden"]="true",O.focusable="false")),pa({icons:{main:Tr(re),mask:l?Tr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ne,transform:E(E({},Te),a),symbol:o,title:v,maskId:d,titleId:L,extra:{attributes:O,styles:I,classes:z}})})}},tu={mixout:function(){return{icon:Qc(eu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=gi,n.nodeCallback=Zc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return gi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(_,L){Promise.all([Sr(a,s),d.iconName?Sr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=aa(N,2),k=z[0],O=z[1];_([n,pa({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Wn(s);l.length>0&&(a.style=l);var c;return ca(o)&&(c=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},nu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Vn({type:"layer"},function(){ft("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Jt(i)).join(" ")},children:o}]})}}}},ru={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Vn({type:"counter",content:n},function(){return ft("beforeDOMElementCreation",{content:n,params:r}),Lc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Jt(s))}})})}}}},au={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,_=v===void 0?{}:v;return Vn({type:"text",content:n},function(){return ft("beforeDOMElementCreation",{content:n,params:r}),ci({content:n,transform:E(E({},Te),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Jt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(bo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ci({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},iu=new RegExp('"',"ug"),vi=[1105920,1112319];function ou(e){var t=e.replace(iu,""),n=yc(t,0),r=n>=vi[0]&&n<=vi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Er(a?t[0]:t),isSecondary:r||a}}function bi(e,t){var n="".concat(Vf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Pt(e.children),o=i.filter(function(re){return re.getAttribute(Or)===t})[0],s=Ve.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Qf),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?J:K,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Kt[v][l[2].toLowerCase()]:ec[v][c],L=ou(m),N=L.value,z=L.isSecondary,k=l[0].startsWith("FontAwesome"),O=da(_,N),M=O;if(k){var I=Ec(N);I.iconName&&I.prefix&&(O=I.iconName,_=I.prefix)}if(O&&!z&&(!o||o.getAttribute(oa)!==_||o.getAttribute(sa)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var H=Jc(),ne=H.extra;ne.attributes[Or]=t,Sr(O,_).then(function(re){var ge=pa(E(E({},H),{},{icons:{main:re,mask:ma()},prefix:_,iconName:M,extra:ne,watchable:!0})),he=X.createElement("svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=ge.map(function(Se){return Zt(Se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function su(e){return Promise.all([bi(e,"::before"),bi(e,"::after")])}function lu(e){return e.parentNode!==document.head&&!~Jf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Or)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function yi(e){if(Ue)return new Promise(function(t,n){var r=Pt(e.querySelectorAll("*")).filter(lu).map(su),a=ha.begin("searchPseudoElements");zo(),Promise.all(r).then(function(){a(),Mr(),t()}).catch(function(){a(),Mr(),n()})})}var fu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&yi(a)}}},xi=!1,cu={mixout:function(){return{dom:{unwatch:function(){zo(),xi=!0}}}},hooks:function(){return{bootstrap:function(){pi(Cr("mutationObserverCallbacks",{}))},noAuto:function(){Kc()},watch:function(n){var r=n.observeMutationsRoot;xi?Mr():pi(Cr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},uu={mixout:function(){return{parse:{transform:function(n){return wi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=wi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},sr={x:0,y:0,width:"100%",height:"100%"};function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function du(e){return e.tag==="g"?e.children:[e]}var mu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Xn(a.split(" ").map(function(o){return o.trim()})):ma();return i.prefix||(i.prefix=qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,_=uc({transform:l,containerWidth:m,iconWidth:c}),L={tag:"rect",attributes:E(E({},sr),{},{fill:"white"})},N=d.children?{children:d.children.map(_i)}:{},z={tag:"g",attributes:E({},_.inner),children:[_i(E({tag:d.tag,attributes:E(E({},d.attributes),_.path)},N))]},k={tag:"g",attributes:E({},_.outer),children:[z]},O="mask-".concat(s||qt()),M="clip-".concat(s||qt()),I={tag:"mask",attributes:E(E({},sr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:du(v)},I]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},sr)}),{children:r,attributes:a}}}},pu={provides:function(t){var n=!1;Ve.matchMedia&&(n=Ve.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},gu=[pc,tu,nu,ru,au,fu,cu,uu,mu,pu,hu];Ic(gu,{mixoutsTo:pe});pe.noAuto;pe.config;var vu=pe.library;pe.dom;var Fr=pe.parse;pe.findIconDefinition;pe.toHtml;var bu=pe.icon;pe.layer;pe.text;pe.counter;function ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ki(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ki(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rn(e){"@babel/helpers - typeof";return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rn(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function xu(e,t){if(e==null)return{};var n=yu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Uo={exports:{}};(function(e){(function(t){var n=function(k,O,M){if(!c(O)||m(O)||v(O)||_(O)||l(O))return O;var I,H=0,ne=0;if(d(O))for(I=[],ne=O.length;H<ne;H++)I.push(n(k,O[H],M));else{I={};for(var re in O)Object.prototype.hasOwnProperty.call(O,re)&&(I[k(re,M)]=n(k,O[re],M))}return I},r=function(k,O){O=O||{};var M=O.separator||"_",I=O.split||/(?=[A-Z])/;return k.split(I).join(M)},a=function(k){return L(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},L=function(k){return k=k-0,k===k},N=function(k,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?k:function(I,H){return M(I,k,H)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(wu)})(Uo);var _u=Uo.exports,ku=["class","style"];function Au(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=_u.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ou(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ho(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Ou(d);break;case"style":l.style=Au(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=xu(n,ku);return Ql(e.tag,Re(Re(Re({},t),{},{class:a.class,style:Re(Re({},a.style),o)},a.attrs),s),r)}var Bo=!1;try{Bo=!0}catch{}function Eu(){if(!Bo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function lr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function Pu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ai(e){if(e&&Rn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fr.icon)return Fr.icon(e);if(e===null)return null;if(Rn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Cu=il({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=tt(function(){return Ai(t.icon)}),i=tt(function(){return lr("classes",Pu(t))}),o=tt(function(){return lr("transform",typeof t.transform=="string"?Fr.transform(t.transform):t.transform)}),s=tt(function(){return lr("mask",Ai(t.mask))}),l=tt(function(){return bu(a.value,Re(Re(Re(Re({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});xn(l,function(d){if(!d)return Eu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=tt(function(){return l.value?Ho(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Iu={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};vu.add(Iu);kf(Df).component("font-awesome-icon",Cu).mount("#app");
