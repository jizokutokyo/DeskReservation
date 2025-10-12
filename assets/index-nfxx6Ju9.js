(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ka(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const vt={},fr=[],ke=()=>{},Th=()=>!1,Ki=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),La=e=>e.startsWith("onUpdate:"),ie=Object.assign,Fa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Up=Object.prototype.hasOwnProperty,gt=(e,t)=>Up.call(e,t),et=Array.isArray,dr=e=>Ms(e)==="[object Map]",Gi=e=>Ms(e)==="[object Set]",Cc=e=>Ms(e)==="[object Date]",it=e=>typeof e=="function",Ot=e=>typeof e=="string",$e=e=>typeof e=="symbol",At=e=>e!==null&&typeof e=="object",vh=e=>(At(e)||it(e))&&it(e.then)&&it(e.catch),Ih=Object.prototype.toString,Ms=e=>Ih.call(e),Bp=e=>Ms(e).slice(8,-1),wh=e=>Ms(e)==="[object Object]",Ua=e=>Ot(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ls=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},jp=/-\w/g,we=Wi(e=>e.replace(jp,t=>t.slice(1).toUpperCase())),$p=/\B([A-Z])/g,Wn=Wi(e=>e.replace($p,"-$1").toLowerCase()),Qi=Wi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Oo=Wi(e=>e?`on${Qi(e)}`:""),dn=(e,t)=>!Object.is(e,t),li=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ah=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Pc;const Xi=()=>Pc||(Pc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ba(e){if(et(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ot(r)?Kp(r):Ba(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ot(e)||At(e))return e}const qp=/;(?![^(]*\))/g,Hp=/:([^]+)/,zp=/\/\*[^]*?\*\//g;function Kp(e){const t={};return e.replace(zp,"").split(qp).forEach(n=>{if(n){const r=n.split(Hp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function pr(e){let t="";if(Ot(e))t=e;else if(et(e))for(let n=0;n<e.length;n++){const r=pr(e[n]);r&&(t+=r+" ")}else if(At(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Gp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wp=ka(Gp);function bh(e){return!!e||e===""}function Qp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Yi(e[r],t[r]);return n}function Yi(e,t){if(e===t)return!0;let n=Cc(e),r=Cc(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=$e(e),r=$e(t),n||r)return e===t;if(n=et(e),r=et(t),n||r)return n&&r?Qp(e,t):!1;if(n=At(e),r=At(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),u=t.hasOwnProperty(a);if(l&&!u||!l&&u||!Yi(e[a],t[a]))return!1}}return String(e)===String(t)}function Xp(e,t){return e.findIndex(n=>Yi(n,t))}const Rh=e=>!!(e&&e.__v_isRef===!0),Un=e=>Ot(e)?e:e==null?"":et(e)||At(e)&&(e.toString===Ih||!it(e.toString))?Rh(e)?Un(e.value):JSON.stringify(e,Sh,2):String(e),Sh=(e,t)=>Rh(t)?Sh(e,t.value):dr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Mo(r,i)+" =>"]=s,n),{})}:Gi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Mo(n))}:$e(t)?Mo(t):At(t)&&!et(t)&&!wh(t)?String(t):t,Mo=(e,t="")=>{var n;return $e(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oe;class Ch{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=oe,!t&&oe&&(this.index=(oe.scopes||(oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=oe;try{return oe=this,t()}finally{oe=n}}}on(){++this._on===1&&(this.prevScope=oe,oe=this)}off(){this._on>0&&--this._on===0&&(oe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yp(e){return new Ch(e)}function Jp(){return oe}let It;const ko=new WeakSet;class Ph{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,oe&&oe.active&&oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ko.has(this)&&(ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vc(this),xh(this);const t=It,n=Re;It=this,Re=!0;try{return this.fn()}finally{Nh(this),It=t,Re=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)qa(t);this.deps=this.depsTail=void 0,Vc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ta(this)&&this.run()}get dirty(){return ta(this)}}let Vh=0,cs,us;function Dh(e,t=!1){if(e.flags|=8,t){e.next=us,us=e;return}e.next=cs,cs=e}function ja(){Vh++}function $a(){if(--Vh>0)return;if(us){let t=us;for(us=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;cs;){let t=cs;for(cs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function xh(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Nh(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qa(r),Zp(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ta(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Oh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Oh(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===vs)||(e.globalVersion=vs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ta(e))))return;e.flags|=2;const t=e.dep,n=It,r=Re;It=e,Re=!0;try{xh(e);const s=e.fn(e._value);(t.version===0||dn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{It=n,Re=r,Nh(e),e.flags&=-3}}function qa(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qa(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Re=!0;const Mh=[];function Xe(){Mh.push(Re),Re=!1}function Ye(){const e=Mh.pop();Re=e===void 0?!0:e}function Vc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=It;It=void 0;try{t()}finally{It=n}}}let vs=0;class tm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ha{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!It||!Re||It===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==It)n=this.activeLink=new tm(It,this),It.deps?(n.prevDep=It.depsTail,It.depsTail.nextDep=n,It.depsTail=n):It.deps=It.depsTail=n,kh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=It.depsTail,n.nextDep=void 0,It.depsTail.nextDep=n,It.depsTail=n,It.deps===n&&(It.deps=r)}return n}trigger(t){this.version++,vs++,this.notify(t)}notify(t){ja();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$a()}}}function kh(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)kh(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ea=new WeakMap,$n=Symbol(""),na=Symbol(""),Is=Symbol("");function Jt(e,t,n){if(Re&&It){let r=ea.get(e);r||ea.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ha),s.map=r,s.key=n),s.track()}}function We(e,t,n,r,s,i){const a=ea.get(e);if(!a){vs++;return}const l=u=>{u&&u.trigger()};if(ja(),t==="clear")a.forEach(l);else{const u=et(e),f=u&&Ua(n);if(u&&n==="length"){const d=Number(r);a.forEach((m,E)=>{(E==="length"||E===Is||!$e(E)&&E>=d)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(Is)),t){case"add":u?f&&l(a.get("length")):(l(a.get($n)),dr(e)&&l(a.get(na)));break;case"delete":u||(l(a.get($n)),dr(e)&&l(a.get(na)));break;case"set":dr(e)&&l(a.get($n));break}}$a()}function or(e){const t=mt(e);return t===e?t:(Jt(t,"iterate",Is),ve(e)?t:t.map(zt))}function Ji(e){return Jt(e=mt(e),"iterate",Is),e}const em={__proto__:null,[Symbol.iterator](){return Lo(this,Symbol.iterator,zt)},concat(...e){return or(this).concat(...e.map(t=>et(t)?or(t):t))},entries(){return Lo(this,"entries",e=>(e[1]=zt(e[1]),e))},every(e,t){return Ke(this,"every",e,t,void 0,arguments)},filter(e,t){return Ke(this,"filter",e,t,n=>n.map(zt),arguments)},find(e,t){return Ke(this,"find",e,t,zt,arguments)},findIndex(e,t){return Ke(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ke(this,"findLast",e,t,zt,arguments)},findLastIndex(e,t){return Ke(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ke(this,"forEach",e,t,void 0,arguments)},includes(...e){return Fo(this,"includes",e)},indexOf(...e){return Fo(this,"indexOf",e)},join(e){return or(this).join(e)},lastIndexOf(...e){return Fo(this,"lastIndexOf",e)},map(e,t){return Ke(this,"map",e,t,void 0,arguments)},pop(){return Jr(this,"pop")},push(...e){return Jr(this,"push",e)},reduce(e,...t){return Dc(this,"reduce",e,t)},reduceRight(e,...t){return Dc(this,"reduceRight",e,t)},shift(){return Jr(this,"shift")},some(e,t){return Ke(this,"some",e,t,void 0,arguments)},splice(...e){return Jr(this,"splice",e)},toReversed(){return or(this).toReversed()},toSorted(e){return or(this).toSorted(e)},toSpliced(...e){return or(this).toSpliced(...e)},unshift(...e){return Jr(this,"unshift",e)},values(){return Lo(this,"values",zt)}};function Lo(e,t,n){const r=Ji(e),s=r[t]();return r!==e&&!ve(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const nm=Array.prototype;function Ke(e,t,n,r,s,i){const a=Ji(e),l=a!==e&&!ve(e),u=a[t];if(u!==nm[t]){const m=u.apply(e,i);return l?zt(m):m}let f=n;a!==e&&(l?f=function(m,E){return n.call(this,zt(m),E,e)}:n.length>2&&(f=function(m,E){return n.call(this,m,E,e)}));const d=u.call(a,f,r);return l&&s?s(d):d}function Dc(e,t,n,r){const s=Ji(e);let i=n;return s!==e&&(ve(e)?n.length>3&&(i=function(a,l,u){return n.call(this,a,l,u,e)}):i=function(a,l,u){return n.call(this,a,zt(l),u,e)}),s[t](i,...r)}function Fo(e,t,n){const r=mt(e);Jt(r,"iterate",Is);const s=r[t](...n);return(s===-1||s===!1)&&Wa(n[0])?(n[0]=mt(n[0]),r[t](...n)):s}function Jr(e,t,n=[]){Xe(),ja();const r=mt(e)[t].apply(e,n);return $a(),Ye(),r}const rm=ka("__proto__,__v_isRef,__isVue"),Lh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($e));function sm(e){$e(e)||(e=String(e));const t=mt(this);return Jt(t,"has",e),t.hasOwnProperty(e)}class Fh{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?pm:$h:i?jh:Bh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=et(t);if(!s){let u;if(a&&(u=em[n]))return u;if(n==="hasOwnProperty")return sm}const l=Reflect.get(t,n,ee(t)?t:r);if(($e(n)?Lh.has(n):rm(n))||(s||Jt(t,"get",n),i))return l;if(ee(l)){const u=a&&Ua(n)?l:l.value;return s&&At(u)?sa(u):u}return At(l)?s?sa(l):Ka(l):l}}class Uh extends Fh{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const u=Tn(i);if(!ve(r)&&!Tn(r)&&(i=mt(i),r=mt(r)),!et(t)&&ee(i)&&!ee(r))return u||(i.value=r),!0}const a=et(t)&&Ua(n)?Number(n)<t.length:gt(t,n),l=Reflect.set(t,n,r,ee(t)?t:s);return t===mt(s)&&(a?dn(r,i)&&We(t,"set",n,r):We(t,"add",n,r)),l}deleteProperty(t,n){const r=gt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&We(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!$e(n)||!Lh.has(n))&&Jt(t,"has",n),r}ownKeys(t){return Jt(t,"iterate",et(t)?"length":$n),Reflect.ownKeys(t)}}class im extends Fh{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const om=new Uh,am=new im,lm=new Uh(!0);const ra=e=>e,ti=e=>Reflect.getPrototypeOf(e);function cm(e,t,n){return function(...r){const s=this.__v_raw,i=mt(s),a=dr(i),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...r),d=n?ra:t?Ii:zt;return!t&&Jt(i,"iterate",u?na:$n),{next(){const{value:m,done:E}=f.next();return E?{value:m,done:E}:{value:l?[d(m[0]),d(m[1])]:d(m),done:E}},[Symbol.iterator](){return this}}}}function ei(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function um(e,t){const n={get(s){const i=this.__v_raw,a=mt(i),l=mt(s);e||(dn(s,l)&&Jt(a,"get",s),Jt(a,"get",l));const{has:u}=ti(a),f=t?ra:e?Ii:zt;if(u.call(a,s))return f(i.get(s));if(u.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Jt(mt(s),"iterate",$n),s.size},has(s){const i=this.__v_raw,a=mt(i),l=mt(s);return e||(dn(s,l)&&Jt(a,"has",s),Jt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=mt(l),f=t?ra:e?Ii:zt;return!e&&Jt(u,"iterate",$n),l.forEach((d,m)=>s.call(i,f(d),f(m),a))}};return ie(n,e?{add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear")}:{add(s){!t&&!ve(s)&&!Tn(s)&&(s=mt(s));const i=mt(this);return ti(i).has.call(i,s)||(i.add(s),We(i,"add",s,s)),this},set(s,i){!t&&!ve(i)&&!Tn(i)&&(i=mt(i));const a=mt(this),{has:l,get:u}=ti(a);let f=l.call(a,s);f||(s=mt(s),f=l.call(a,s));const d=u.call(a,s);return a.set(s,i),f?dn(i,d)&&We(a,"set",s,i):We(a,"add",s,i),this},delete(s){const i=mt(this),{has:a,get:l}=ti(i);let u=a.call(i,s);u||(s=mt(s),u=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return u&&We(i,"delete",s,void 0),f},clear(){const s=mt(this),i=s.size!==0,a=s.clear();return i&&We(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cm(s,e,t)}),n}function za(e,t){const n=um(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(gt(n,s)&&s in r?n:r,s,i)}const hm={get:za(!1,!1)},fm={get:za(!1,!0)},dm={get:za(!0,!1)};const Bh=new WeakMap,jh=new WeakMap,$h=new WeakMap,pm=new WeakMap;function mm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gm(e){return e.__v_skip||!Object.isExtensible(e)?0:mm(Bp(e))}function Ka(e){return Tn(e)?e:Ga(e,!1,om,hm,Bh)}function _m(e){return Ga(e,!1,lm,fm,jh)}function sa(e){return Ga(e,!0,am,dm,$h)}function Ga(e,t,n,r,s){if(!At(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=gm(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function mr(e){return Tn(e)?mr(e.__v_raw):!!(e&&e.__v_isReactive)}function Tn(e){return!!(e&&e.__v_isReadonly)}function ve(e){return!!(e&&e.__v_isShallow)}function Wa(e){return e?!!e.__v_raw:!1}function mt(e){const t=e&&e.__v_raw;return t?mt(t):e}function qh(e){return!gt(e,"__v_skip")&&Object.isExtensible(e)&&Ah(e,"__v_skip",!0),e}const zt=e=>At(e)?Ka(e):e,Ii=e=>At(e)?sa(e):e;function ee(e){return e?e.__v_isRef===!0:!1}function ts(e){return ym(e,!1)}function ym(e,t){return ee(e)?e:new Em(e,t)}class Em{constructor(t,n){this.dep=new Ha,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:mt(t),this._value=n?t:zt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||ve(t)||Tn(t);t=r?t:mt(t),dn(t,n)&&(this._rawValue=t,this._value=r?t:zt(t),this.dep.trigger())}}function Tm(e){return ee(e)?e.value:e}const vm={get:(e,t,n)=>t==="__v_raw"?e:Tm(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ee(s)&&!ee(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Hh(e){return mr(e)?e:new Proxy(e,vm)}class Im{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ha(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&It!==this)return Dh(this,!0),!0}get value(){const t=this.dep.track();return Oh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function wm(e,t,n=!1){let r,s;return it(e)?r=e:(r=e.get,s=e.set),new Im(r,s,n)}const ni={},wi=new WeakMap;let Ln;function Am(e,t=!1,n=Ln){if(n){let r=wi.get(n);r||wi.set(n,r=[]),r.push(e)}}function bm(e,t,n=vt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=n,f=G=>s?G:ve(G)||s===!1||s===0?Qe(G,1):Qe(G);let d,m,E,b,x=!1,M=!1;if(ee(e)?(m=()=>e.value,x=ve(e)):mr(e)?(m=()=>f(e),x=!0):et(e)?(M=!0,x=e.some(G=>mr(G)||ve(G)),m=()=>e.map(G=>{if(ee(G))return G.value;if(mr(G))return f(G);if(it(G))return u?u(G,2):G()})):it(e)?t?m=u?()=>u(e,2):e:m=()=>{if(E){Xe();try{E()}finally{Ye()}}const G=Ln;Ln=d;try{return u?u(e,3,[b]):e(b)}finally{Ln=G}}:m=ke,t&&s){const G=m,ut=s===!0?1/0:s;m=()=>Qe(G(),ut)}const F=Jp(),K=()=>{d.stop(),F&&F.active&&Fa(F.effects,d)};if(i&&t){const G=t;t=(...ut)=>{G(...ut),K()}}let W=M?new Array(e.length).fill(ni):ni;const Y=G=>{if(!(!(d.flags&1)||!d.dirty&&!G))if(t){const ut=d.run();if(s||x||(M?ut.some((Et,I)=>dn(Et,W[I])):dn(ut,W))){E&&E();const Et=Ln;Ln=d;try{const I=[ut,W===ni?void 0:M&&W[0]===ni?[]:W,b];W=ut,u?u(t,3,I):t(...I)}finally{Ln=Et}}}else d.run()};return l&&l(Y),d=new Ph(m),d.scheduler=a?()=>a(Y,!1):Y,b=G=>Am(G,!1,d),E=d.onStop=()=>{const G=wi.get(d);if(G){if(u)u(G,4);else for(const ut of G)ut();wi.delete(d)}},t?r?Y(!0):W=d.run():a?a(Y.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function Qe(e,t=1/0,n){if(t<=0||!At(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ee(e))Qe(e.value,t,n);else if(et(e))for(let r=0;r<e.length;r++)Qe(e[r],t,n);else if(Gi(e)||dr(e))e.forEach(r=>{Qe(r,t,n)});else if(wh(e)){for(const r in e)Qe(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Qe(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ks(e,t,n,r){try{return r?e(...r):e()}catch(s){Zi(s,t,n)}}function qe(e,t,n,r){if(it(e)){const s=ks(e,t,n,r);return s&&vh(s)&&s.catch(i=>{Zi(i,t,n)}),s}if(et(e)){const s=[];for(let i=0;i<e.length;i++)s.push(qe(e[i],t,n,r));return s}}function Zi(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||vt;if(t){let l=t.parent;const u=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,u,f)===!1)return}l=l.parent}if(i){Xe(),ks(i,null,10,[e,u,f]),Ye();return}}Rm(e,n,s,r,a)}function Rm(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const se=[];let Ne=-1;const gr=[];let un=null,ar=0;const zh=Promise.resolve();let Ai=null;function Kh(e){const t=Ai||zh;return e?t.then(this?e.bind(this):e):t}function Sm(e){let t=Ne+1,n=se.length;for(;t<n;){const r=t+n>>>1,s=se[r],i=ws(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Qa(e){if(!(e.flags&1)){const t=ws(e),n=se[se.length-1];!n||!(e.flags&2)&&t>=ws(n)?se.push(e):se.splice(Sm(t),0,e),e.flags|=1,Gh()}}function Gh(){Ai||(Ai=zh.then(Qh))}function Cm(e){et(e)?gr.push(...e):un&&e.id===-1?un.splice(ar+1,0,e):e.flags&1||(gr.push(e),e.flags|=1),Gh()}function xc(e,t,n=Ne+1){for(;n<se.length;n++){const r=se[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;se.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wh(e){if(gr.length){const t=[...new Set(gr)].sort((n,r)=>ws(n)-ws(r));if(gr.length=0,un){un.push(...t);return}for(un=t,ar=0;ar<un.length;ar++){const n=un[ar];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}un=null,ar=0}}const ws=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Qh(e){try{for(Ne=0;Ne<se.length;Ne++){const t=se[Ne];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ks(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ne<se.length;Ne++){const t=se[Ne];t&&(t.flags&=-2)}Ne=-1,se.length=0,Wh(),Ai=null,(se.length||gr.length)&&Qh()}}let me=null,Xh=null;function bi(e){const t=me;return me=e,Xh=e&&e.type.__scopeId||null,t}function Pm(e,t=me,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&qc(-1);const i=bi(t);let a;try{a=e(...s)}finally{bi(i),r._d&&qc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function es(e,t){if(me===null)return e;const n=ro(me),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=vt]=t[s];i&&(it(i)&&(i={mounted:i,updated:i}),i.deep&&Qe(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function Mn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(Xe(),qe(u,n,8,[e.el,l,e,t]),Ye())}}const Vm=Symbol("_vte"),Dm=e=>e.__isTeleport,xm=Symbol("_leaveCb");function Xa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Xa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Yh(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ri=new WeakMap;function hs(e,t,n,r,s=!1){if(et(e)){e.forEach((x,M)=>hs(x,t&&(et(t)?t[M]:t),n,r,s));return}if(fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&hs(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ro(r.component):r.el,a=s?null:i,{i:l,r:u}=e,f=t&&t.r,d=l.refs===vt?l.refs={}:l.refs,m=l.setupState,E=mt(m),b=m===vt?Th:x=>gt(E,x);if(f!=null&&f!==u){if(Nc(t),Ot(f))d[f]=null,b(f)&&(m[f]=null);else if(ee(f)){f.value=null;const x=t;x.k&&(d[x.k]=null)}}if(it(u))ks(u,l,12,[a,d]);else{const x=Ot(u),M=ee(u);if(x||M){const F=()=>{if(e.f){const K=x?b(u)?m[u]:d[u]:u.value;if(s)et(K)&&Fa(K,i);else if(et(K))K.includes(i)||K.push(i);else if(x)d[u]=[i],b(u)&&(m[u]=d[u]);else{const W=[i];u.value=W,e.k&&(d[e.k]=W)}}else x?(d[u]=a,b(u)&&(m[u]=a)):M&&(u.value=a,e.k&&(d[e.k]=a))};if(a){const K=()=>{F(),Ri.delete(e)};K.id=-1,Ri.set(e,K),fe(K,n)}else Nc(e),F()}}}function Nc(e){const t=Ri.get(e);t&&(t.flags|=8,Ri.delete(e))}Xi().requestIdleCallback;Xi().cancelIdleCallback;const fs=e=>!!e.type.__asyncLoader,Jh=e=>e.type.__isKeepAlive;function Nm(e,t){Zh(e,"a",t)}function Om(e,t){Zh(e,"da",t)}function Zh(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(to(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Jh(s.parent.vnode)&&Mm(r,t,n,s),s=s.parent}}function Mm(e,t,n,r){const s=to(t,e,r,!0);ef(()=>{Fa(r[t],s)},n)}function to(e,t,n=te,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Xe();const l=Ls(n),u=qe(t,n,e,a);return l(),Ye(),u});return r?s.unshift(i):s.push(i),i}}const en=e=>(t,n=te)=>{(!bs||e==="sp")&&to(e,(...r)=>t(...r),n)},km=en("bm"),tf=en("m"),Lm=en("bu"),Fm=en("u"),Um=en("bum"),ef=en("um"),Bm=en("sp"),jm=en("rtg"),$m=en("rtc");function qm(e,t=te){to("ec",e,t)}const Hm="components";function ia(e,t){return Km(Hm,e,!0,t)||e}const zm=Symbol.for("v-ndc");function Km(e,t,n=!0,r=!1){const s=me||te;if(s){const i=s.type;{const l=Lg(i,!1);if(l&&(l===t||l===we(t)||l===Qi(we(t))))return i}const a=Oc(s[e]||i[e],t)||Oc(s.appContext[e],t);return!a&&r?i:a}}function Oc(e,t){return e&&(e[t]||e[we(t)]||e[Qi(we(t))])}function ci(e,t,n,r){let s;const i=n,a=et(e);if(a||Ot(e)){const l=a&&mr(e);let u=!1,f=!1;l&&(u=!ve(e),f=Tn(e),e=Ji(e)),s=new Array(e.length);for(let d=0,m=e.length;d<m;d++)s[d]=t(u?f?Ii(zt(e[d])):zt(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(At(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];s[u]=t(e[d],d,u,i)}}else s=[];return s}const oa=e=>e?wf(e)?ro(e):oa(e.parent):null,ds=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>oa(e.parent),$root:e=>oa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>rf(e),$forceUpdate:e=>e.f||(e.f=()=>{Qa(e.update)}),$nextTick:e=>e.n||(e.n=Kh.bind(e.proxy)),$watch:e=>pg.bind(e)}),Uo=(e,t)=>e!==vt&&!e.__isScriptSetup&&gt(e,t),Gm={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=e;let f;if(t[0]!=="$"){const b=a[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Uo(r,t))return a[t]=1,r[t];if(s!==vt&&gt(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&gt(f,t))return a[t]=3,i[t];if(n!==vt&&gt(n,t))return a[t]=4,n[t];aa&&(a[t]=0)}}const d=ds[t];let m,E;if(d)return t==="$attrs"&&Jt(e.attrs,"get",""),d(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==vt&&gt(n,t))return a[t]=4,n[t];if(E=u.config.globalProperties,gt(E,t))return E[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Uo(s,t)?(s[t]=n,!0):r!==vt&&gt(r,t)?(r[t]=n,!0):gt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},l){let u,f;return!!(n[l]||e!==vt&&l[0]!=="$"&&gt(e,l)||Uo(t,l)||(u=i[0])&&gt(u,l)||gt(r,l)||gt(ds,l)||gt(s.config.globalProperties,l)||(f=a.__cssModules)&&f[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:gt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Mc(e){return et(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let aa=!0;function Wm(e){const t=rf(e),n=e.proxy,r=e.ctx;aa=!1,t.beforeCreate&&kc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:m,mounted:E,beforeUpdate:b,updated:x,activated:M,deactivated:F,beforeDestroy:K,beforeUnmount:W,destroyed:Y,unmounted:G,render:ut,renderTracked:Et,renderTriggered:I,errorCaptured:g,serverPrefetch:T,expose:A,inheritAttrs:v,components:R,directives:_,filters:Ft}=t;if(f&&Qm(f,r,null),a)for(const bt in a){const pt=a[bt];it(pt)&&(r[bt]=pt.bind(n))}if(s){const bt=s.call(n,n);At(bt)&&(e.data=Ka(bt))}if(aa=!0,i)for(const bt in i){const pt=i[bt],_e=it(pt)?pt.bind(n,n):it(pt.get)?pt.get.bind(n,n):ke,tr=!it(pt)&&it(pt.set)?pt.set.bind(n):ke,Pe=Ug({get:_e,set:tr});Object.defineProperty(r,bt,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:le=>Pe.value=le})}if(l)for(const bt in l)nf(l[bt],r,n,bt);if(u){const bt=it(u)?u.call(n):u;Reflect.ownKeys(bt).forEach(pt=>{eg(pt,bt[pt])})}d&&kc(d,e,"c");function $t(bt,pt){et(pt)?pt.forEach(_e=>bt(_e.bind(n))):pt&&bt(pt.bind(n))}if($t(km,m),$t(tf,E),$t(Lm,b),$t(Fm,x),$t(Nm,M),$t(Om,F),$t(qm,g),$t($m,Et),$t(jm,I),$t(Um,W),$t(ef,G),$t(Bm,T),et(A))if(A.length){const bt=e.exposed||(e.exposed={});A.forEach(pt=>{Object.defineProperty(bt,pt,{get:()=>n[pt],set:_e=>n[pt]=_e,enumerable:!0})})}else e.exposed||(e.exposed={});ut&&e.render===ke&&(e.render=ut),v!=null&&(e.inheritAttrs=v),R&&(e.components=R),_&&(e.directives=_),T&&Yh(e)}function Qm(e,t,n=ke){et(e)&&(e=la(e));for(const r in e){const s=e[r];let i;At(s)?"default"in s?i=ui(s.from||r,s.default,!0):i=ui(s.from||r):i=ui(s),ee(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function kc(e,t,n){qe(et(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function nf(e,t,n,r){let s=r.includes(".")?_f(n,r):()=>n[r];if(Ot(e)){const i=t[e];it(i)&&hi(s,i)}else if(it(e))hi(s,e.bind(n));else if(At(e))if(et(e))e.forEach(i=>nf(i,t,n,r));else{const i=it(e.handler)?e.handler.bind(n):t[e.handler];it(i)&&hi(s,i,e)}}function rf(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>Si(u,f,a,!0)),Si(u,t,a)),At(t)&&i.set(t,u),u}function Si(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Si(e,i,n,!0),s&&s.forEach(a=>Si(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=Xm[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const Xm={data:Lc,props:Fc,emits:Fc,methods:ns,computed:ns,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:ns,directives:ns,watch:Jm,provide:Lc,inject:Ym};function Lc(e,t){return t?e?function(){return ie(it(e)?e.call(this,this):e,it(t)?t.call(this,this):t)}:t:e}function Ym(e,t){return ns(la(e),la(t))}function la(e){if(et(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function ns(e,t){return e?ie(Object.create(null),e,t):t}function Fc(e,t){return e?et(e)&&et(t)?[...new Set([...e,...t])]:ie(Object.create(null),Mc(e),Mc(t??{})):t}function Jm(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function sf(){return{app:null,config:{isNativeTag:Th,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zm=0;function tg(e,t){return function(r,s=null){it(r)||(r=ie({},r)),s!=null&&!At(s)&&(s=null);const i=sf(),a=new WeakSet,l=[];let u=!1;const f=i.app={_uid:Zm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Bg,get config(){return i.config},set config(d){},use(d,...m){return a.has(d)||(d&&it(d.install)?(a.add(d),d.install(f,...m)):it(d)&&(a.add(d),d(f,...m))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,m){return m?(i.components[d]=m,f):i.components[d]},directive(d,m){return m?(i.directives[d]=m,f):i.directives[d]},mount(d,m,E){if(!u){const b=f._ceVNode||Ie(r,s);return b.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),e(b,d,E),u=!0,f._container=d,d.__vue_app__=f,ro(b.component)}},onUnmount(d){l.push(d)},unmount(){u&&(qe(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,m){return i.provides[d]=m,f},runWithContext(d){const m=_r;_r=f;try{return d()}finally{_r=m}}};return f}}let _r=null;function eg(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function ui(e,t,n=!1){const r=xg();if(r||_r){let s=_r?_r._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&it(t)?t.call(r&&r.proxy):t}}const of={},af=()=>Object.create(of),lf=e=>Object.getPrototypeOf(e)===of;function ng(e,t,n,r=!1){const s={},i=af();e.propsDefaults=Object.create(null),cf(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:_m(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function rg(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=mt(s),[u]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let E=d[m];if(eo(e.emitsOptions,E))continue;const b=t[E];if(u)if(gt(i,E))b!==i[E]&&(i[E]=b,f=!0);else{const x=we(E);s[x]=ca(u,l,x,b,e,!1)}else b!==i[E]&&(i[E]=b,f=!0)}}}else{cf(e,t,s,i)&&(f=!0);let d;for(const m in l)(!t||!gt(t,m)&&((d=Wn(m))===m||!gt(t,d)))&&(u?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=ca(u,l,m,void 0,e,!0)):delete s[m]);if(i!==l)for(const m in i)(!t||!gt(t,m))&&(delete i[m],f=!0)}f&&We(e.attrs,"set","")}function cf(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(ls(u))continue;const f=t[u];let d;s&&gt(s,d=we(u))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:eo(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=mt(n),f=l||vt;for(let d=0;d<i.length;d++){const m=i[d];n[m]=ca(s,u,m,f[m],e,!gt(f,m))}}return a}function ca(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=gt(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&it(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=Ls(s);r=f[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Wn(n))&&(r=!0))}return r}const sg=new WeakMap;function uf(e,t,n=!1){const r=n?sg:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let u=!1;if(!it(e)){const d=m=>{u=!0;const[E,b]=uf(m,t,!0);ie(a,E),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return At(e)&&r.set(e,fr),fr;if(et(i))for(let d=0;d<i.length;d++){const m=we(i[d]);Uc(m)&&(a[m]=vt)}else if(i)for(const d in i){const m=we(d);if(Uc(m)){const E=i[d],b=a[m]=et(E)||it(E)?{type:E}:ie({},E),x=b.type;let M=!1,F=!0;if(et(x))for(let K=0;K<x.length;++K){const W=x[K],Y=it(W)&&W.name;if(Y==="Boolean"){M=!0;break}else Y==="String"&&(F=!1)}else M=it(x)&&x.name==="Boolean";b[0]=M,b[1]=F,(M||gt(b,"default"))&&l.push(m)}}const f=[a,l];return At(e)&&r.set(e,f),f}function Uc(e){return e[0]!=="$"&&!ls(e)}const Ya=e=>e==="_"||e==="_ctx"||e==="$stable",Ja=e=>et(e)?e.map(Me):[Me(e)],ig=(e,t,n)=>{if(t._n)return t;const r=Pm((...s)=>Ja(t(...s)),n);return r._c=!1,r},hf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ya(s))continue;const i=e[s];if(it(i))t[s]=ig(s,i,r);else if(i!=null){const a=Ja(i);t[s]=()=>a}}},ff=(e,t)=>{const n=Ja(t);e.slots.default=()=>n},df=(e,t,n)=>{for(const r in t)(n||!Ya(r))&&(e[r]=t[r])},og=(e,t,n)=>{const r=e.slots=af();if(e.vnode.shapeFlag&32){const s=t._;s?(df(r,t,n),n&&Ah(r,"_",s,!0)):hf(t,r)}else t&&ff(e,t)},ag=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=vt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:df(s,t,n):(i=!t.$stable,hf(t,s)),a=t}else t&&(ff(e,t),a={default:1});if(i)for(const l in s)!Ya(l)&&a[l]==null&&delete s[l]},fe=Ig;function lg(e){return cg(e)}function cg(e,t){const n=Xi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:m,nextSibling:E,setScopeId:b=ke,insertStaticContent:x}=e,M=(y,w,P,B=null,N=null,O=null,$=void 0,U=null,k=!!w.dynamicChildren)=>{if(y===w)return;y&&!Zr(y,w)&&(B=nn(y),le(y,N,O,!0),y=null),w.patchFlag===-2&&(k=!1,w.dynamicChildren=null);const{type:L,ref:J,shapeFlag:q}=w;switch(L){case no:F(y,w,P,B);break;case vn:K(y,w,P,B);break;case jo:y==null&&W(w,P,B,$);break;case pe:R(y,w,P,B,N,O,$,U,k);break;default:q&1?ut(y,w,P,B,N,O,$,U,k):q&6?_(y,w,P,B,N,O,$,U,k):(q&64||q&128)&&L.process(y,w,P,B,N,O,$,U,k,Pn)}J!=null&&N?hs(J,y&&y.ref,O,w||y,!w):J==null&&y&&y.ref!=null&&hs(y.ref,null,O,y,!0)},F=(y,w,P,B)=>{if(y==null)r(w.el=l(w.children),P,B);else{const N=w.el=y.el;w.children!==y.children&&f(N,w.children)}},K=(y,w,P,B)=>{y==null?r(w.el=u(w.children||""),P,B):w.el=y.el},W=(y,w,P,B)=>{[y.el,y.anchor]=x(y.children,w,P,B,y.el,y.anchor)},Y=({el:y,anchor:w},P,B)=>{let N;for(;y&&y!==w;)N=E(y),r(y,P,B),y=N;r(w,P,B)},G=({el:y,anchor:w})=>{let P;for(;y&&y!==w;)P=E(y),s(y),y=P;s(w)},ut=(y,w,P,B,N,O,$,U,k)=>{w.type==="svg"?$="svg":w.type==="math"&&($="mathml"),y==null?Et(w,P,B,N,O,$,U,k):T(y,w,N,O,$,U,k)},Et=(y,w,P,B,N,O,$,U)=>{let k,L;const{props:J,shapeFlag:q,transition:X,dirs:Z}=y;if(k=y.el=a(y.type,O,J&&J.is,J),q&8?d(k,y.children):q&16&&g(y.children,k,null,B,N,Bo(y,O),$,U),Z&&Mn(y,null,B,"created"),I(k,y,y.scopeId,$,B),J){for(const yt in J)yt!=="value"&&!ls(yt)&&i(k,yt,null,J[yt],O,B);"value"in J&&i(k,"value",null,J.value,O),(L=J.onVnodeBeforeMount)&&xe(L,B,y)}Z&&Mn(y,null,B,"beforeMount");const at=ug(N,X);at&&X.beforeEnter(k),r(k,w,P),((L=J&&J.onVnodeMounted)||at||Z)&&fe(()=>{L&&xe(L,B,y),at&&X.enter(k),Z&&Mn(y,null,B,"mounted")},N)},I=(y,w,P,B,N)=>{if(P&&b(y,P),B)for(let O=0;O<B.length;O++)b(y,B[O]);if(N){let O=N.subTree;if(w===O||Ef(O.type)&&(O.ssContent===w||O.ssFallback===w)){const $=N.vnode;I(y,$,$.scopeId,$.slotScopeIds,N.parent)}}},g=(y,w,P,B,N,O,$,U,k=0)=>{for(let L=k;L<y.length;L++){const J=y[L]=U?hn(y[L]):Me(y[L]);M(null,J,w,P,B,N,O,$,U)}},T=(y,w,P,B,N,O,$)=>{const U=w.el=y.el;let{patchFlag:k,dynamicChildren:L,dirs:J}=w;k|=y.patchFlag&16;const q=y.props||vt,X=w.props||vt;let Z;if(P&&kn(P,!1),(Z=X.onVnodeBeforeUpdate)&&xe(Z,P,w,y),J&&Mn(w,y,P,"beforeUpdate"),P&&kn(P,!0),(q.innerHTML&&X.innerHTML==null||q.textContent&&X.textContent==null)&&d(U,""),L?A(y.dynamicChildren,L,U,P,B,Bo(w,N),O):$||pt(y,w,U,null,P,B,Bo(w,N),O,!1),k>0){if(k&16)v(U,q,X,P,N);else if(k&2&&q.class!==X.class&&i(U,"class",null,X.class,N),k&4&&i(U,"style",q.style,X.style,N),k&8){const at=w.dynamicProps;for(let yt=0;yt<at.length;yt++){const dt=at[yt],Wt=q[dt],Qt=X[dt];(Qt!==Wt||dt==="value")&&i(U,dt,Wt,Qt,N,P)}}k&1&&y.children!==w.children&&d(U,w.children)}else!$&&L==null&&v(U,q,X,P,N);((Z=X.onVnodeUpdated)||J)&&fe(()=>{Z&&xe(Z,P,w,y),J&&Mn(w,y,P,"updated")},B)},A=(y,w,P,B,N,O,$)=>{for(let U=0;U<w.length;U++){const k=y[U],L=w[U],J=k.el&&(k.type===pe||!Zr(k,L)||k.shapeFlag&198)?m(k.el):P;M(k,L,J,null,B,N,O,$,!0)}},v=(y,w,P,B,N)=>{if(w!==P){if(w!==vt)for(const O in w)!ls(O)&&!(O in P)&&i(y,O,w[O],null,N,B);for(const O in P){if(ls(O))continue;const $=P[O],U=w[O];$!==U&&O!=="value"&&i(y,O,U,$,N,B)}"value"in P&&i(y,"value",w.value,P.value,N)}},R=(y,w,P,B,N,O,$,U,k)=>{const L=w.el=y?y.el:l(""),J=w.anchor=y?y.anchor:l("");let{patchFlag:q,dynamicChildren:X,slotScopeIds:Z}=w;Z&&(U=U?U.concat(Z):Z),y==null?(r(L,P,B),r(J,P,B),g(w.children||[],P,J,N,O,$,U,k)):q>0&&q&64&&X&&y.dynamicChildren?(A(y.dynamicChildren,X,P,N,O,$,U),(w.key!=null||N&&w===N.subTree)&&pf(y,w,!0)):pt(y,w,P,J,N,O,$,U,k)},_=(y,w,P,B,N,O,$,U,k)=>{w.slotScopeIds=U,y==null?w.shapeFlag&512?N.ctx.activate(w,P,B,$,k):Ft(w,P,B,N,O,$,k):Ce(y,w,k)},Ft=(y,w,P,B,N,O,$)=>{const U=y.component=Dg(y,B,N);if(Jh(y)&&(U.ctx.renderer=Pn),Ng(U,!1,$),U.asyncDep){if(N&&N.registerDep(U,$t,$),!y.el){const k=U.subTree=Ie(vn);K(null,k,w,P),y.placeholder=k.el}}else $t(U,y,w,P,N,O,$)},Ce=(y,w,P)=>{const B=w.component=y.component;if(Tg(y,w,P))if(B.asyncDep&&!B.asyncResolved){bt(B,w,P);return}else B.next=w,B.update();else w.el=y.el,B.vnode=w},$t=(y,w,P,B,N,O,$)=>{const U=()=>{if(y.isMounted){let{next:q,bu:X,u:Z,parent:at,vnode:yt}=y;{const ue=mf(y);if(ue){q&&(q.el=yt.el,bt(y,q,$)),ue.asyncDep.then(()=>{y.isUnmounted||U()});return}}let dt=q,Wt;kn(y,!1),q?(q.el=yt.el,bt(y,q,$)):q=yt,X&&li(X),(Wt=q.props&&q.props.onVnodeBeforeUpdate)&&xe(Wt,at,q,yt),kn(y,!0);const Qt=jc(y),ce=y.subTree;y.subTree=Qt,M(ce,Qt,m(ce.el),nn(ce),y,N,O),q.el=Qt.el,dt===null&&vg(y,Qt.el),Z&&fe(Z,N),(Wt=q.props&&q.props.onVnodeUpdated)&&fe(()=>xe(Wt,at,q,yt),N)}else{let q;const{el:X,props:Z}=w,{bm:at,m:yt,parent:dt,root:Wt,type:Qt}=y,ce=fs(w);kn(y,!1),at&&li(at),!ce&&(q=Z&&Z.onVnodeBeforeMount)&&xe(q,dt,w),kn(y,!0);{Wt.ce&&Wt.ce._def.shadowRoot!==!1&&Wt.ce._injectChildStyle(Qt);const ue=y.subTree=jc(y);M(null,ue,P,B,y,N,O),w.el=ue.el}if(yt&&fe(yt,N),!ce&&(q=Z&&Z.onVnodeMounted)){const ue=w;fe(()=>xe(q,dt,ue),N)}(w.shapeFlag&256||dt&&fs(dt.vnode)&&dt.vnode.shapeFlag&256)&&y.a&&fe(y.a,N),y.isMounted=!0,w=P=B=null}};y.scope.on();const k=y.effect=new Ph(U);y.scope.off();const L=y.update=k.run.bind(k),J=y.job=k.runIfDirty.bind(k);J.i=y,J.id=y.uid,k.scheduler=()=>Qa(J),kn(y,!0),L()},bt=(y,w,P)=>{w.component=y;const B=y.vnode.props;y.vnode=w,y.next=null,rg(y,w.props,B,P),ag(y,w.children,P),Xe(),xc(y),Ye()},pt=(y,w,P,B,N,O,$,U,k=!1)=>{const L=y&&y.children,J=y?y.shapeFlag:0,q=w.children,{patchFlag:X,shapeFlag:Z}=w;if(X>0){if(X&128){tr(L,q,P,B,N,O,$,U,k);return}else if(X&256){_e(L,q,P,B,N,O,$,U,k);return}}Z&8?(J&16&&ze(L,N,O),q!==L&&d(P,q)):J&16?Z&16?tr(L,q,P,B,N,O,$,U,k):ze(L,N,O,!0):(J&8&&d(P,""),Z&16&&g(q,P,B,N,O,$,U,k))},_e=(y,w,P,B,N,O,$,U,k)=>{y=y||fr,w=w||fr;const L=y.length,J=w.length,q=Math.min(L,J);let X;for(X=0;X<q;X++){const Z=w[X]=k?hn(w[X]):Me(w[X]);M(y[X],Z,P,null,N,O,$,U,k)}L>J?ze(y,N,O,!0,!1,q):g(w,P,B,N,O,$,U,k,q)},tr=(y,w,P,B,N,O,$,U,k)=>{let L=0;const J=w.length;let q=y.length-1,X=J-1;for(;L<=q&&L<=X;){const Z=y[L],at=w[L]=k?hn(w[L]):Me(w[L]);if(Zr(Z,at))M(Z,at,P,null,N,O,$,U,k);else break;L++}for(;L<=q&&L<=X;){const Z=y[q],at=w[X]=k?hn(w[X]):Me(w[X]);if(Zr(Z,at))M(Z,at,P,null,N,O,$,U,k);else break;q--,X--}if(L>q){if(L<=X){const Z=X+1,at=Z<J?w[Z].el:B;for(;L<=X;)M(null,w[L]=k?hn(w[L]):Me(w[L]),P,at,N,O,$,U,k),L++}}else if(L>X)for(;L<=q;)le(y[L],N,O,!0),L++;else{const Z=L,at=L,yt=new Map;for(L=at;L<=X;L++){const qt=w[L]=k?hn(w[L]):Me(w[L]);qt.key!=null&&yt.set(qt.key,L)}let dt,Wt=0;const Qt=X-at+1;let ce=!1,ue=0;const Ae=new Array(Qt);for(L=0;L<Qt;L++)Ae[L]=0;for(L=Z;L<=q;L++){const qt=y[L];if(Wt>=Qt){le(qt,N,O,!0);continue}let Ut;if(qt.key!=null)Ut=yt.get(qt.key);else for(dt=at;dt<=X;dt++)if(Ae[dt-at]===0&&Zr(qt,w[dt])){Ut=dt;break}Ut===void 0?le(qt,N,O,!0):(Ae[Ut-at]=L+1,Ut>=ue?ue=Ut:ce=!0,M(qt,w[Ut],P,null,N,O,$,U,k),Wt++)}const nr=ce?hg(Ae):fr;for(dt=nr.length-1,L=Qt-1;L>=0;L--){const qt=at+L,Ut=w[qt],Lr=w[qt+1],Vn=qt+1<J?Lr.el||Lr.placeholder:B;Ae[L]===0?M(null,Ut,P,Vn,N,O,$,U,k):ce&&(dt<0||L!==nr[dt]?Pe(Ut,P,Vn,2):dt--)}}},Pe=(y,w,P,B,N=null)=>{const{el:O,type:$,transition:U,children:k,shapeFlag:L}=y;if(L&6){Pe(y.component.subTree,w,P,B);return}if(L&128){y.suspense.move(w,P,B);return}if(L&64){$.move(y,w,P,Pn);return}if($===pe){r(O,w,P);for(let q=0;q<k.length;q++)Pe(k[q],w,P,B);r(y.anchor,w,P);return}if($===jo){Y(y,w,P);return}if(B!==2&&L&1&&U)if(B===0)U.beforeEnter(O),r(O,w,P),fe(()=>U.enter(O),N);else{const{leave:q,delayLeave:X,afterLeave:Z}=U,at=()=>{y.ctx.isUnmounted?s(O):r(O,w,P)},yt=()=>{O._isLeaving&&O[xm](!0),q(O,()=>{at(),Z&&Z()})};X?X(O,at,yt):yt()}else r(O,w,P)},le=(y,w,P,B=!1,N=!1)=>{const{type:O,props:$,ref:U,children:k,dynamicChildren:L,shapeFlag:J,patchFlag:q,dirs:X,cacheIndex:Z}=y;if(q===-2&&(N=!1),U!=null&&(Xe(),hs(U,null,P,y,!0),Ye()),Z!=null&&(w.renderCache[Z]=void 0),J&256){w.ctx.deactivate(y);return}const at=J&1&&X,yt=!fs(y);let dt;if(yt&&(dt=$&&$.onVnodeBeforeUnmount)&&xe(dt,w,y),J&6)Mr(y.component,P,B);else{if(J&128){y.suspense.unmount(P,B);return}at&&Mn(y,null,w,"beforeUnmount"),J&64?y.type.remove(y,w,P,Pn,B):L&&!L.hasOnce&&(O!==pe||q>0&&q&64)?ze(L,w,P,!1,!0):(O===pe&&q&384||!N&&J&16)&&ze(k,w,P),B&&Or(y)}(yt&&(dt=$&&$.onVnodeUnmounted)||at)&&fe(()=>{dt&&xe(dt,w,y),at&&Mn(y,null,w,"unmounted")},P)},Or=y=>{const{type:w,el:P,anchor:B,transition:N}=y;if(w===pe){er(P,B);return}if(w===jo){G(y);return}const O=()=>{s(P),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:$,delayLeave:U}=N,k=()=>$(P,O);U?U(y.el,O,k):k()}else O()},er=(y,w)=>{let P;for(;y!==w;)P=E(y),s(y),y=P;s(w)},Mr=(y,w,P)=>{const{bum:B,scope:N,job:O,subTree:$,um:U,m:k,a:L}=y;Bc(k),Bc(L),B&&li(B),N.stop(),O&&(O.flags|=8,le($,y,w,P)),U&&fe(U,w),fe(()=>{y.isUnmounted=!0},w)},ze=(y,w,P,B=!1,N=!1,O=0)=>{for(let $=O;$<y.length;$++)le(y[$],w,P,B,N)},nn=y=>{if(y.shapeFlag&6)return nn(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=E(y.anchor||y.el),P=w&&w[Vm];return P?E(P):w};let Cn=!1;const kr=(y,w,P)=>{y==null?w._vnode&&le(w._vnode,null,null,!0):M(w._vnode||null,y,w,null,null,null,P),w._vnode=y,Cn||(Cn=!0,xc(),Wh(),Cn=!1)},Pn={p:M,um:le,m:Pe,r:Or,mt:Ft,mc:g,pc:pt,pbc:A,n:nn,o:e};return{render:kr,hydrate:void 0,createApp:tg(kr)}}function Bo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function kn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ug(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pf(e,t,n=!1){const r=e.children,s=t.children;if(et(r)&&et(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=hn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&pf(a,l)),l.type===no&&l.patchFlag!==-1&&(l.el=a.el),l.type===vn&&!l.el&&(l.el=a.el)}}function hg(e){const t=e.slice(),n=[0];let r,s,i,a,l;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<f?i=l+1:a=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function mf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:mf(t)}function Bc(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const fg=Symbol.for("v-scx"),dg=()=>ui(fg);function hi(e,t,n){return gf(e,t,n)}function gf(e,t,n=vt){const{immediate:r,deep:s,flush:i,once:a}=n,l=ie({},n),u=t&&r||!t&&i!=="post";let f;if(bs){if(i==="sync"){const b=dg();f=b.__watcherHandles||(b.__watcherHandles=[])}else if(!u){const b=()=>{};return b.stop=ke,b.resume=ke,b.pause=ke,b}}const d=te;l.call=(b,x,M)=>qe(b,d,x,M);let m=!1;i==="post"?l.scheduler=b=>{fe(b,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(b,x)=>{x?b():Qa(b)}),l.augmentJob=b=>{t&&(b.flags|=4),m&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const E=bm(e,t,l);return bs&&(f?f.push(E):u&&E()),E}function pg(e,t,n){const r=this.proxy,s=Ot(e)?e.includes(".")?_f(r,e):()=>r[e]:e.bind(r,r);let i;it(t)?i=t:(i=t.handler,n=t);const a=Ls(this),l=gf(s,i.bind(r),n);return a(),l}function _f(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const mg=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${we(t)}Modifiers`]||e[`${Wn(t)}Modifiers`];function gg(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||vt;let s=n;const i=t.startsWith("update:"),a=i&&mg(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ot(d)?d.trim():d)),a.number&&(s=n.map(vi)));let l,u=r[l=Oo(t)]||r[l=Oo(we(t))];!u&&i&&(u=r[l=Oo(Wn(t))]),u&&qe(u,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,qe(f,e,6,s)}}const _g=new WeakMap;function yf(e,t,n=!1){const r=n?_g:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!it(e)){const u=f=>{const d=yf(f,t,!0);d&&(l=!0,ie(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(At(e)&&r.set(e,null),null):(et(i)?i.forEach(u=>a[u]=null):ie(a,i),At(e)&&r.set(e,a),a)}function eo(e,t){return!e||!Ki(t)?!1:(t=t.slice(2).replace(/Once$/,""),gt(e,t[0].toLowerCase()+t.slice(1))||gt(e,Wn(t))||gt(e,t))}function jc(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:m,data:E,setupState:b,ctx:x,inheritAttrs:M}=e,F=bi(e);let K,W;try{if(n.shapeFlag&4){const G=s||r,ut=G;K=Me(f.call(ut,G,d,m,b,E,x)),W=l}else{const G=t;K=Me(G.length>1?G(m,{attrs:l,slots:a,emit:u}):G(m,null)),W=t.props?l:yg(l)}}catch(G){ps.length=0,Zi(G,e,1),K=Ie(vn)}let Y=K;if(W&&M!==!1){const G=Object.keys(W),{shapeFlag:ut}=Y;G.length&&ut&7&&(i&&G.some(La)&&(W=Eg(W,i)),Y=vr(Y,W,!1,!0))}return n.dirs&&(Y=vr(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&Xa(Y,n.transition),K=Y,bi(F),K}const yg=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ki(n))&&((t||(t={}))[n]=e[n]);return t},Eg=(e,t)=>{const n={};for(const r in e)(!La(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tg(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?$c(r,a,f):!!a;if(u&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const E=d[m];if(a[E]!==r[E]&&!eo(f,E))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?$c(r,a,f):!0:!!a;return!1}function $c(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!eo(n,i))return!0}return!1}function vg({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ef=e=>e.__isSuspense;function Ig(e,t){t&&t.pendingBranch?et(e)?t.effects.push(...e):t.effects.push(e):Cm(e)}const pe=Symbol.for("v-fgt"),no=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),ps=[];let ge=null;function de(e=!1){ps.push(ge=e?null:[])}function wg(){ps.pop(),ge=ps[ps.length-1]||null}let As=1;function qc(e,t=!1){As+=e,e<0&&ge&&t&&(ge.hasOnce=!0)}function Tf(e){return e.dynamicChildren=As>0?ge||fr:null,wg(),As>0&&ge&&ge.push(e),e}function ye(e,t,n,r,s,i){return Tf(st(e,t,n,r,s,i,!0))}function Ag(e,t,n,r,s){return Tf(Ie(e,t,n,r,s,!0))}function vf(e){return e?e.__v_isVNode===!0:!1}function Zr(e,t){return e.type===t.type&&e.key===t.key}const If=({key:e})=>e??null,fi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ot(e)||ee(e)||it(e)?{i:me,r:e,k:t,f:!!n}:e:null);function st(e,t=null,n=null,r=0,s=null,i=e===pe?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&If(t),ref:t&&fi(t),scopeId:Xh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:me};return l?(Za(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Ot(n)?8:16),As>0&&!a&&ge&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&ge.push(u),u}const Ie=bg;function bg(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===zm)&&(e=vn),vf(e)){const l=vr(e,t,!0);return n&&Za(l,n),As>0&&!i&&ge&&(l.shapeFlag&6?ge[ge.indexOf(e)]=l:ge.push(l)),l.patchFlag=-2,l}if(Fg(e)&&(e=e.__vccOpts),t){t=Rg(t);let{class:l,style:u}=t;l&&!Ot(l)&&(t.class=pr(l)),At(u)&&(Wa(u)&&!et(u)&&(u=ie({},u)),t.style=Ba(u))}const a=Ot(e)?1:Ef(e)?128:Dm(e)?64:At(e)?4:it(e)?2:0;return st(e,t,n,r,s,a,i,!0)}function Rg(e){return e?Wa(e)||lf(e)?ie({},e):e:null}function vr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=e,f=t?Cg(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&If(f),ref:t&&t.ref?n&&i?et(i)?i.concat(fi(t)):[i,fi(t)]:fi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vr(e.ssContent),ssFallback:e.ssFallback&&vr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&Xa(d,u.clone(d)),d}function rs(e=" ",t=0){return Ie(no,null,e,t)}function Sg(e="",t=!1){return t?(de(),Ag(vn,null,e)):Ie(vn,null,e)}function Me(e){return e==null||typeof e=="boolean"?Ie(vn):et(e)?Ie(pe,null,e.slice()):vf(e)?hn(e):Ie(no,null,String(e))}function hn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vr(e)}function Za(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(et(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Za(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!lf(t)?t._ctx=me:s===3&&me&&(me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else it(t)?(t={default:t,_ctx:me},n=32):(t=String(t),r&64?(n=16,t=[rs(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cg(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=pr([t.class,r.class]));else if(s==="style")t.style=Ba([t.style,r.style]);else if(Ki(s)){const i=t[s],a=r[s];a&&i!==a&&!(et(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function xe(e,t,n,r=null){qe(e,t,7,[n,r])}const Pg=sf();let Vg=0;function Dg(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Pg,i={uid:Vg++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uf(r,s),emitsOptions:yf(r,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:r.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=gg.bind(null,i),e.ce&&e.ce(i),i}let te=null;const xg=()=>te||me;let Ci,ua;{const e=Xi(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ci=t("__VUE_INSTANCE_SETTERS__",n=>te=n),ua=t("__VUE_SSR_SETTERS__",n=>bs=n)}const Ls=e=>{const t=te;return Ci(e),e.scope.on(),()=>{e.scope.off(),Ci(t)}},Hc=()=>{te&&te.scope.off(),Ci(null)};function wf(e){return e.vnode.shapeFlag&4}let bs=!1;function Ng(e,t=!1,n=!1){t&&ua(t);const{props:r,children:s}=e.vnode,i=wf(e);ng(e,r,i,t),og(e,s,n||t);const a=i?Og(e,t):void 0;return t&&ua(!1),a}function Og(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Gm);const{setup:r}=n;if(r){Xe();const s=e.setupContext=r.length>1?kg(e):null,i=Ls(e),a=ks(r,e,0,[e.props,s]),l=vh(a);if(Ye(),i(),(l||e.sp)&&!fs(e)&&Yh(e),l){if(a.then(Hc,Hc),t)return a.then(u=>{zc(e,u)}).catch(u=>{Zi(u,e,0)});e.asyncDep=a}else zc(e,a)}else Af(e)}function zc(e,t,n){it(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:At(t)&&(e.setupState=Hh(t)),Af(e)}function Af(e,t,n){const r=e.type;e.render||(e.render=r.render||ke);{const s=Ls(e);Xe();try{Wm(e)}finally{Ye(),s()}}}const Mg={get(e,t){return Jt(e,"get",""),e[t]}};function kg(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Mg),slots:e.slots,emit:e.emit,expose:t}}function ro(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Hh(qh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ds)return ds[n](e)},has(t,n){return n in t||n in ds}})):e.proxy}function Lg(e,t=!0){return it(e)?e.displayName||e.name:e.name||t&&e.__name}function Fg(e){return it(e)&&"__vccOpts"in e}const Ug=(e,t)=>wm(e,t,bs),Bg="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ha;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{ha=Kc.createPolicy("vue",{createHTML:e=>e})}catch{}const bf=ha?e=>ha.createHTML(e):e=>e,jg="http://www.w3.org/2000/svg",$g="http://www.w3.org/1998/Math/MathML",Ge=typeof document<"u"?document:null,Gc=Ge&&Ge.createElement("template"),qg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Ge.createElementNS(jg,e):t==="mathml"?Ge.createElementNS($g,e):n?Ge.createElement(e,{is:n}):Ge.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ge.createTextNode(e),createComment:e=>Ge.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ge.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gc.innerHTML=bf(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Gc.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Hg=Symbol("_vtc");function zg(e,t,n){const r=e[Hg];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Wc=Symbol("_vod"),Kg=Symbol("_vsh"),Gg=Symbol(""),Wg=/(?:^|;)\s*display\s*:/;function Qg(e,t,n){const r=e.style,s=Ot(n);let i=!1;if(n&&!s){if(t)if(Ot(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&di(r,l,"")}else for(const a in t)n[a]==null&&di(r,a,"");for(const a in n)a==="display"&&(i=!0),di(r,a,n[a])}else if(s){if(t!==n){const a=r[Gg];a&&(n+=";"+a),r.cssText=n,i=Wg.test(n)}}else t&&e.removeAttribute("style");Wc in e&&(e[Wc]=i?r.display:"",e[Kg]&&(r.display="none"))}const Qc=/\s*!important$/;function di(e,t,n){if(et(n))n.forEach(r=>di(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Xg(e,t);Qc.test(n)?e.setProperty(Wn(r),n.replace(Qc,""),"important"):e[r]=n}}const Xc=["Webkit","Moz","ms"],$o={};function Xg(e,t){const n=$o[t];if(n)return n;let r=we(t);if(r!=="filter"&&r in e)return $o[t]=r;r=Qi(r);for(let s=0;s<Xc.length;s++){const i=Xc[s]+r;if(i in e)return $o[t]=i}return t}const Yc="http://www.w3.org/1999/xlink";function Jc(e,t,n,r,s,i=Wp(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Yc,t.slice(6,t.length)):e.setAttributeNS(Yc,t,n):n==null||i&&!bh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":$e(n)?String(n):n)}function Zc(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?bf(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=bh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Bn(e,t,n,r){e.addEventListener(t,n,r)}function Yg(e,t,n,r){e.removeEventListener(t,n,r)}const tu=Symbol("_vei");function Jg(e,t,n,r,s=null){const i=e[tu]||(e[tu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,u]=Zg(t);if(r){const f=i[t]=n_(r,s);Bn(e,l,f,u)}else a&&(Yg(e,l,a,u),i[t]=void 0)}}const eu=/(?:Once|Passive|Capture)$/;function Zg(e){let t;if(eu.test(e)){t={};let r;for(;r=e.match(eu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wn(e.slice(2)),t]}let qo=0;const t_=Promise.resolve(),e_=()=>qo||(t_.then(()=>qo=0),qo=Date.now());function n_(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(r_(r,n.value),t,5,[r])};return n.value=e,n.attached=e_(),n}function r_(e,t){if(et(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const nu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,s_=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?zg(e,r,a):t==="style"?Qg(e,n,r):Ki(t)?La(t)||Jg(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):i_(e,t,r,a))?(Zc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Jc(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ot(r))?Zc(e,we(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Jc(e,t,r,a))};function i_(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&nu(t)&&it(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return nu(t)&&Ot(n)?!1:t in e}const Pi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return et(t)?n=>li(t,n):t};function o_(e){e.target.composing=!0}function ru(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const yr=Symbol("_assign"),fa={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[yr]=Pi(s);const i=r||s.props&&s.props.type==="number";Bn(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=vi(l)),e[yr](l)}),n&&Bn(e,"change",()=>{e.value=e.value.trim()}),t||(Bn(e,"compositionstart",o_),Bn(e,"compositionend",ru),Bn(e,"change",ru))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(e[yr]=Pi(a),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?vi(e.value):e.value,u=t??"";l!==u&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===u)||(e.value=u))}},su={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Gi(t);Bn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?vi(Vi(a)):Vi(a));e[yr](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,Kh(()=>{e._assigning=!1})}),e[yr]=Pi(r)},mounted(e,{value:t}){iu(e,t)},beforeUpdate(e,t,n){e[yr]=Pi(n)},updated(e,{value:t}){e._assigning||iu(e,t)}};function iu(e,t){const n=e.multiple,r=et(t);if(!(n&&!r&&!Gi(t))){for(let s=0,i=e.options.length;s<i;s++){const a=e.options[s],l=Vi(a);if(n)if(r){const u=typeof l;u==="string"||u==="number"?a.selected=t.some(f=>String(f)===String(l)):a.selected=Xp(t,l)>-1}else a.selected=t.has(l);else if(Yi(Vi(a),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Vi(e){return"_value"in e?e._value:e.value}const a_=["ctrl","shift","alt","meta"],l_={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>a_.some(n=>e[`${n}Key`]&&!t.includes(n))},c_=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...i)=>{for(let a=0;a<t.length;a++){const l=l_[t[a]];if(l&&l(s,t))return}return e(s,...i)}))},u_=ie({patchProp:s_},qg);let ou;function h_(){return ou||(ou=lg(u_))}const f_=((...e)=>{const t=h_().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=p_(r);if(!s)return;const i=t._component;!it(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,d_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function d_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function p_(e){return Ot(e)?document.querySelector(e):e}const m_=()=>{};var au={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},g_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,f=u?e[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let E=(l&15)<<2|f>>6,b=f&63;u||(b=64,a||(E=64)),r.push(n[d],n[m],n[E],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):g_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||f==null||m==null)throw new __;const E=i<<2|l>>4;if(r.push(E),f!==64){const b=l<<4&240|f>>2;if(r.push(b),m!==64){const x=f<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class __ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y_=function(e){const t=Rf(e);return Sf.encodeByteArray(t,!0)},Di=function(e){return y_(e).replace(/\./g,"")},E_=function(e){try{return Sf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=()=>T_().__FIREBASE_DEFAULTS__,I_=()=>{if(typeof process>"u"||typeof au>"u")return;const e=au.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},w_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&E_(e[1]);return t&&JSON.parse(t)},tl=()=>{try{return m_()||v_()||I_()||w_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},A_=e=>tl()?.emulatorHosts?.[e],b_=e=>{const t=A_(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Cf=()=>tl()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function S_(e){return(await fetch(e,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Di(JSON.stringify(n)),Di(JSON.stringify(a)),""].join(".")}const ms={};function P_(){const e={prod:[],emulator:[]};for(const t of Object.keys(ms))ms[t]?e.emulator.push(t):e.prod.push(t);return e}function V_(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let lu=!1;function D_(e,t){if(typeof window>"u"||typeof document>"u"||!el(window.location.host)||ms[e]===t||ms[e]||lu)return;ms[e]=t;function n(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=P_().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,b){E.setAttribute("width","24"),E.setAttribute("id",b),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function f(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{lu=!0,a()},E}function d(E,b){E.setAttribute("id",b),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function m(){const E=V_(r),b=n("text"),x=document.getElementById(b)||document.createElement("span"),M=n("learnmore"),F=document.getElementById(M)||document.createElement("a"),K=n("preprendIcon"),W=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const Y=E.element;l(Y),d(F,M);const G=f();u(W,K),Y.append(W,x,F,G),document.body.appendChild(Y)}i?(x.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N_(){const e=tl()?.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function O_(){return!N_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function M_(){try{return typeof indexedDB=="object"}catch{return!1}}function k_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="FirebaseError";class Pr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=L_,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pf.prototype.create)}}class Pf{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?F_(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Pr(s,l,r)}}function F_(e,t){return e.replace(U_,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const U_=/\{\$([^}]+)}/g;function xi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(cu(i)&&cu(a)){if(!xi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e){return e&&e._delegate?e._delegate:e}class Rs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new R_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($_(t))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Fn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Fn){return this.instances.has(t)}getOptions(t=Fn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Fn){return this.component?this.component.multipleInstances?t:Fn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j_(e){return e===Fn?void 0:e}function $_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new B_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ft||(ft={}));const H_={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},z_=ft.INFO,K_={[ft.DEBUG]:"log",[ft.VERBOSE]:"log",[ft.INFO]:"info",[ft.WARN]:"warn",[ft.ERROR]:"error"},G_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=K_[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vf{constructor(t){this.name=t,this._logLevel=z_,this._logHandler=G_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ft))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?H_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ft.DEBUG,...t),this._logHandler(this,ft.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ft.VERBOSE,...t),this._logHandler(this,ft.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ft.INFO,...t),this._logHandler(this,ft.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ft.WARN,...t),this._logHandler(this,ft.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ft.ERROR,...t),this._logHandler(this,ft.ERROR,...t)}}const W_=(e,t)=>t.some(n=>e instanceof n);let uu,hu;function Q_(){return uu||(uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X_(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Df=new WeakMap,da=new WeakMap,xf=new WeakMap,Ho=new WeakMap,nl=new WeakMap;function Y_(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(pn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Df.set(n,e)}).catch(()=>{}),nl.set(t,e),t}function J_(e){if(da.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});da.set(e,t)}let pa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return da.get(e);if(t==="objectStoreNames")return e.objectStoreNames||xf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Z_(e){pa=e(pa)}function ty(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(zo(this),t,...n);return xf.set(r,t.sort?t.sort():[t]),pn(r)}:X_().includes(e)?function(...t){return e.apply(zo(this),t),pn(Df.get(this))}:function(...t){return pn(e.apply(zo(this),t))}}function ey(e){return typeof e=="function"?ty(e):(e instanceof IDBTransaction&&J_(e),W_(e,Q_())?new Proxy(e,pa):e)}function pn(e){if(e instanceof IDBRequest)return Y_(e);if(Ho.has(e))return Ho.get(e);const t=ey(e);return t!==e&&(Ho.set(e,t),nl.set(t,e)),t}const zo=e=>nl.get(e);function ny(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=pn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(pn(a.result),u.oldVersion,u.newVersion,pn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const ry=["get","getKey","getAll","getAllKeys","count"],sy=["put","add","delete","clear"],Ko=new Map;function fu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ko.get(t))return Ko.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=sy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ry.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&u.done]))[0]};return Ko.set(t,i),i}Z_(e=>({...e,get:(t,n,r)=>fu(t,n)||e.get(t,n,r),has:(t,n)=>!!fu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oy(e){return e.getComponent()?.type==="VERSION"}const ma="@firebase/app",du="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Vf("@firebase/app"),ay="@firebase/app-compat",ly="@firebase/analytics-compat",cy="@firebase/analytics",uy="@firebase/app-check-compat",hy="@firebase/app-check",fy="@firebase/auth",dy="@firebase/auth-compat",py="@firebase/database",my="@firebase/data-connect",gy="@firebase/database-compat",_y="@firebase/functions",yy="@firebase/functions-compat",Ey="@firebase/installations",Ty="@firebase/installations-compat",vy="@firebase/messaging",Iy="@firebase/messaging-compat",wy="@firebase/performance",Ay="@firebase/performance-compat",by="@firebase/remote-config",Ry="@firebase/remote-config-compat",Sy="@firebase/storage",Cy="@firebase/storage-compat",Py="@firebase/firestore",Vy="@firebase/ai",Dy="@firebase/firestore-compat",xy="firebase",Ny="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="[DEFAULT]",Oy={[ma]:"fire-core",[ay]:"fire-core-compat",[cy]:"fire-analytics",[ly]:"fire-analytics-compat",[hy]:"fire-app-check",[uy]:"fire-app-check-compat",[fy]:"fire-auth",[dy]:"fire-auth-compat",[py]:"fire-rtdb",[my]:"fire-data-connect",[gy]:"fire-rtdb-compat",[_y]:"fire-fn",[yy]:"fire-fn-compat",[Ey]:"fire-iid",[Ty]:"fire-iid-compat",[vy]:"fire-fcm",[Iy]:"fire-fcm-compat",[wy]:"fire-perf",[Ay]:"fire-perf-compat",[by]:"fire-rc",[Ry]:"fire-rc-compat",[Sy]:"fire-gcs",[Cy]:"fire-gcs-compat",[Py]:"fire-fst",[Dy]:"fire-fst-compat",[Vy]:"fire-vertex","fire-js":"fire-js",[xy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Map,My=new Map,_a=new Map;function pu(e,t){try{e.container.addComponent(t)}catch(n){Je.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Oi(e){const t=e.name;if(_a.has(t))return Je.debug(`There were multiple attempts to register component ${t}.`),!1;_a.set(t,e);for(const n of Ni.values())pu(n,e);for(const n of My.values())pu(n,e);return!0}function ky(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ly(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Pf("app","Firebase",Fy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=Ny;function Nf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:ga,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw mn.create("bad-app-name",{appName:String(s)});if(n||(n=Cf()),!n)throw mn.create("no-options");const i=Ni.get(s);if(i){if(xi(n,i.options)&&xi(r,i.config))return i;throw mn.create("duplicate-app",{appName:s})}const a=new q_(s);for(const u of _a.values())a.addComponent(u);const l=new Uy(n,r,a);return Ni.set(s,l),l}function jy(e=ga){const t=Ni.get(e);if(!t&&e===ga&&Cf())return Nf();if(!t)throw mn.create("no-app",{appName:e});return t}function Er(e,t,n){let r=Oy[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Je.warn(a.join(" "));return}Oi(new Rs(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="firebase-heartbeat-database",qy=1,Ss="firebase-heartbeat-store";let Go=null;function Of(){return Go||(Go=ny($y,qy,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ss)}catch(n){console.warn(n)}}}}).catch(e=>{throw mn.create("idb-open",{originalErrorMessage:e.message})})),Go}async function Hy(e){try{const n=(await Of()).transaction(Ss),r=await n.objectStore(Ss).get(Mf(e));return await n.done,r}catch(t){if(t instanceof Pr)Je.warn(t.message);else{const n=mn.create("idb-get",{originalErrorMessage:t?.message});Je.warn(n.message)}}}async function mu(e,t){try{const r=(await Of()).transaction(Ss,"readwrite");await r.objectStore(Ss).put(t,Mf(e)),await r.done}catch(n){if(n instanceof Pr)Je.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n?.message});Je.warn(r.message)}}}function Mf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=1024,Ky=30;class Gy{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Ky){const s=Xy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Je.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gu(),{heartbeatsToSend:n,unsentEntries:r}=Wy(this._heartbeatsCache.heartbeats),s=Di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Je.warn(t),""}}}function gu(){return new Date().toISOString().substring(0,10)}function Wy(e,t=zy){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),_u(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_u(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qy{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return M_()?k_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hy(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return mu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return mu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function _u(e){return Di(JSON.stringify({version:2,heartbeats:e})).length}function Xy(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(e){Oi(new Rs("platform-logger",t=>new iy(t),"PRIVATE")),Oi(new Rs("heartbeat",t=>new Gy(t),"PRIVATE")),Er(ma,du,e),Er(ma,du,"esm2020"),Er("fire-js","")}Yy("");var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gn,kf;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function T(){}T.prototype=g.prototype,I.F=g.prototype,I.prototype=new T,I.prototype.constructor=I,I.D=function(A,v,R){for(var _=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)_[Ft-2]=arguments[Ft];return g.prototype[v].apply(A,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,T){T||(T=0);const A=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)A[v]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(v=0;v<16;++v)A[v]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=I.g[0],T=I.g[1],v=I.g[2];let R=I.g[3],_;_=g+(R^T&(v^R))+A[0]+3614090360&4294967295,g=T+(_<<7&4294967295|_>>>25),_=R+(v^g&(T^v))+A[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(T^R&(g^T))+A[2]+606105819&4294967295,v=R+(_<<17&4294967295|_>>>15),_=T+(g^v&(R^g))+A[3]+3250441966&4294967295,T=v+(_<<22&4294967295|_>>>10),_=g+(R^T&(v^R))+A[4]+4118548399&4294967295,g=T+(_<<7&4294967295|_>>>25),_=R+(v^g&(T^v))+A[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(T^R&(g^T))+A[6]+2821735955&4294967295,v=R+(_<<17&4294967295|_>>>15),_=T+(g^v&(R^g))+A[7]+4249261313&4294967295,T=v+(_<<22&4294967295|_>>>10),_=g+(R^T&(v^R))+A[8]+1770035416&4294967295,g=T+(_<<7&4294967295|_>>>25),_=R+(v^g&(T^v))+A[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(T^R&(g^T))+A[10]+4294925233&4294967295,v=R+(_<<17&4294967295|_>>>15),_=T+(g^v&(R^g))+A[11]+2304563134&4294967295,T=v+(_<<22&4294967295|_>>>10),_=g+(R^T&(v^R))+A[12]+1804603682&4294967295,g=T+(_<<7&4294967295|_>>>25),_=R+(v^g&(T^v))+A[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(T^R&(g^T))+A[14]+2792965006&4294967295,v=R+(_<<17&4294967295|_>>>15),_=T+(g^v&(R^g))+A[15]+1236535329&4294967295,T=v+(_<<22&4294967295|_>>>10),_=g+(v^R&(T^v))+A[1]+4129170786&4294967295,g=T+(_<<5&4294967295|_>>>27),_=R+(T^v&(g^T))+A[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^T&(R^g))+A[11]+643717713&4294967295,v=R+(_<<14&4294967295|_>>>18),_=T+(R^g&(v^R))+A[0]+3921069994&4294967295,T=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(T^v))+A[5]+3593408605&4294967295,g=T+(_<<5&4294967295|_>>>27),_=R+(T^v&(g^T))+A[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^T&(R^g))+A[15]+3634488961&4294967295,v=R+(_<<14&4294967295|_>>>18),_=T+(R^g&(v^R))+A[4]+3889429448&4294967295,T=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(T^v))+A[9]+568446438&4294967295,g=T+(_<<5&4294967295|_>>>27),_=R+(T^v&(g^T))+A[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^T&(R^g))+A[3]+4107603335&4294967295,v=R+(_<<14&4294967295|_>>>18),_=T+(R^g&(v^R))+A[8]+1163531501&4294967295,T=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(T^v))+A[13]+2850285829&4294967295,g=T+(_<<5&4294967295|_>>>27),_=R+(T^v&(g^T))+A[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^T&(R^g))+A[7]+1735328473&4294967295,v=R+(_<<14&4294967295|_>>>18),_=T+(R^g&(v^R))+A[12]+2368359562&4294967295,T=v+(_<<20&4294967295|_>>>12),_=g+(T^v^R)+A[5]+4294588738&4294967295,g=T+(_<<4&4294967295|_>>>28),_=R+(g^T^v)+A[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^T)+A[11]+1839030562&4294967295,v=R+(_<<16&4294967295|_>>>16),_=T+(v^R^g)+A[14]+4259657740&4294967295,T=v+(_<<23&4294967295|_>>>9),_=g+(T^v^R)+A[1]+2763975236&4294967295,g=T+(_<<4&4294967295|_>>>28),_=R+(g^T^v)+A[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^T)+A[7]+4139469664&4294967295,v=R+(_<<16&4294967295|_>>>16),_=T+(v^R^g)+A[10]+3200236656&4294967295,T=v+(_<<23&4294967295|_>>>9),_=g+(T^v^R)+A[13]+681279174&4294967295,g=T+(_<<4&4294967295|_>>>28),_=R+(g^T^v)+A[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^T)+A[3]+3572445317&4294967295,v=R+(_<<16&4294967295|_>>>16),_=T+(v^R^g)+A[6]+76029189&4294967295,T=v+(_<<23&4294967295|_>>>9),_=g+(T^v^R)+A[9]+3654602809&4294967295,g=T+(_<<4&4294967295|_>>>28),_=R+(g^T^v)+A[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^T)+A[15]+530742520&4294967295,v=R+(_<<16&4294967295|_>>>16),_=T+(v^R^g)+A[2]+3299628645&4294967295,T=v+(_<<23&4294967295|_>>>9),_=g+(v^(T|~R))+A[0]+4096336452&4294967295,g=T+(_<<6&4294967295|_>>>26),_=R+(T^(g|~v))+A[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~T))+A[14]+2878612391&4294967295,v=R+(_<<15&4294967295|_>>>17),_=T+(R^(v|~g))+A[5]+4237533241&4294967295,T=v+(_<<21&4294967295|_>>>11),_=g+(v^(T|~R))+A[12]+1700485571&4294967295,g=T+(_<<6&4294967295|_>>>26),_=R+(T^(g|~v))+A[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~T))+A[10]+4293915773&4294967295,v=R+(_<<15&4294967295|_>>>17),_=T+(R^(v|~g))+A[1]+2240044497&4294967295,T=v+(_<<21&4294967295|_>>>11),_=g+(v^(T|~R))+A[8]+1873313359&4294967295,g=T+(_<<6&4294967295|_>>>26),_=R+(T^(g|~v))+A[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~T))+A[6]+2734768916&4294967295,v=R+(_<<15&4294967295|_>>>17),_=T+(R^(v|~g))+A[13]+1309151649&4294967295,T=v+(_<<21&4294967295|_>>>11),_=g+(v^(T|~R))+A[4]+4149444226&4294967295,g=T+(_<<6&4294967295|_>>>26),_=R+(T^(g|~v))+A[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~T))+A[2]+718787259&4294967295,v=R+(_<<15&4294967295|_>>>17),_=T+(R^(v|~g))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const T=g-this.blockSize,A=this.C;let v=this.h,R=0;for(;R<g;){if(v==0)for(;R<=T;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<g;)if(A[v++]=I.charCodeAt(R++),v==this.blockSize){s(this,A),v=0;break}}else for(;R<g;)if(A[v++]=I[R++],v==this.blockSize){s(this,A),v=0;break}}this.h=v,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var T=I.length-8;T<I.length;++T)I[T]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)I[g++]=this.g[T]>>>A&255;return I};function i(I,g){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=g(I)}function a(I,g){this.h=g;const T=[];let A=!0;for(let v=I.length-1;v>=0;v--){const R=I[v]|0;A&&R==g||(T[v]=R,A=!1)}this.g=T}var l={};function u(I){return-128<=I&&I<128?i(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return F(f(-I));const g=[];let T=1;for(let A=0;I>=T;A++)g[A]=I/T|0,T*=4294967296;return new a(g,0)}function d(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return F(d(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=f(Math.pow(g,8));let A=m;for(let R=0;R<I.length;R+=8){var v=Math.min(8,I.length-R);const _=parseInt(I.substring(R,R+v),g);v<8?(v=f(Math.pow(g,v)),A=A.j(v).add(f(_))):(A=A.j(T),A=A.add(f(_)))}return A}var m=u(0),E=u(1),b=u(16777216);e=a.prototype,e.m=function(){if(M(this))return-F(this).m();let I=0,g=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);I+=(A>=0?A:4294967296+A)*g,g*=4294967296}return I},e.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(M(this))return"-"+F(this).toString(I);const g=f(Math.pow(I,6));var T=this;let A="";for(;;){const v=G(T,g).g;T=K(T,v.j(g));let R=((T.g.length>0?T.g[0]:T.h)>>>0).toString(I);if(T=v,x(T))return R+A;for(;R.length<6;)R="0"+R;A=R+A}},e.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function M(I){return I.h==-1}e.l=function(I){return I=K(this,I),M(I)?-1:x(I)?0:1};function F(I){const g=I.g.length,T=[];for(let A=0;A<g;A++)T[A]=~I.g[A];return new a(T,~I.h).add(E)}e.abs=function(){return M(this)?F(this):this},e.add=function(I){const g=Math.max(this.g.length,I.g.length),T=[];let A=0;for(let v=0;v<=g;v++){let R=A+(this.i(v)&65535)+(I.i(v)&65535),_=(R>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);A=_>>>16,R&=65535,_&=65535,T[v]=_<<16|R}return new a(T,T[T.length-1]&-2147483648?-1:0)};function K(I,g){return I.add(F(g))}e.j=function(I){if(x(this)||x(I))return m;if(M(this))return M(I)?F(this).j(F(I)):F(F(this).j(I));if(M(I))return F(this.j(F(I)));if(this.l(b)<0&&I.l(b)<0)return f(this.m()*I.m());const g=this.g.length+I.g.length,T=[];for(var A=0;A<2*g;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let v=0;v<I.g.length;v++){const R=this.i(A)>>>16,_=this.i(A)&65535,Ft=I.i(v)>>>16,Ce=I.i(v)&65535;T[2*A+2*v]+=_*Ce,W(T,2*A+2*v),T[2*A+2*v+1]+=R*Ce,W(T,2*A+2*v+1),T[2*A+2*v+1]+=_*Ft,W(T,2*A+2*v+1),T[2*A+2*v+2]+=R*Ft,W(T,2*A+2*v+2)}for(I=0;I<g;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=g;I<2*g;I++)T[I]=0;return new a(T,0)};function W(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function Y(I,g){this.g=I,this.h=g}function G(I,g){if(x(g))throw Error("division by zero");if(x(I))return new Y(m,m);if(M(I))return g=G(F(I),g),new Y(F(g.g),F(g.h));if(M(g))return g=G(I,F(g)),new Y(F(g.g),g.h);if(I.g.length>30){if(M(I)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var T=E,A=g;A.l(I)<=0;)T=ut(T),A=ut(A);var v=Et(T,1),R=Et(A,1);for(A=Et(A,2),T=Et(T,2);!x(A);){var _=R.add(A);_.l(I)<=0&&(v=v.add(T),R=_),A=Et(A,1),T=Et(T,1)}return g=K(I,v.j(g)),new Y(v,g)}for(v=m;I.l(g)>=0;){for(T=Math.max(1,Math.floor(I.m()/g.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),R=f(T),_=R.j(g);M(_)||_.l(I)>0;)T-=A,R=f(T),_=R.j(g);x(R)&&(R=E),v=v.add(R),I=K(I,_)}return new Y(v,I)}e.B=function(I){return G(this,I).h},e.and=function(I){const g=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<g;A++)T[A]=this.i(A)&I.i(A);return new a(T,this.h&I.h)},e.or=function(I){const g=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<g;A++)T[A]=this.i(A)|I.i(A);return new a(T,this.h|I.h)},e.xor=function(I){const g=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<g;A++)T[A]=this.i(A)^I.i(A);return new a(T,this.h^I.h)};function ut(I){const g=I.g.length+1,T=[];for(let A=0;A<g;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(T,I.h)}function Et(I,g){const T=g>>5;g%=32;const A=I.g.length-T,v=[];for(let R=0;R<A;R++)v[R]=g>0?I.i(R+T)>>>g|I.i(R+T+1)<<32-g:I.i(R+T);return new a(v,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,kf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,gn=a}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lf,ss,Ff,pi,ya,Uf,Bf,jf;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ri=="object"&&ri];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in h))break t;h=h[S]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&h.push([p,c[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function f(o,c,h){return f=u,f.apply(null,arguments)}function d(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,S,C){for(var j=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)j[ot-2]=arguments[ot];return c.prototype[S].apply(p,j)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const c=o.length;if(c>0){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function x(o,c){for(let p=1;p<arguments.length;p++){const S=arguments[p];var h=typeof S;if(h=h!="object"?h:S?Array.isArray(S)?"array":h:"null",h=="array"||h=="object"&&typeof S.length=="number"){h=o.length||0;const C=S.length||0;o.length=h+C;for(let j=0;j<C;j++)o[h+j]=S[j]}else o.push(S)}}class M{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function F(o){a.setTimeout(()=>{throw o},0)}function K(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class W{constructor(){this.h=this.g=null}add(c,h){const p=Y.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Y=new M(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,Et=!1,I=new W,g=()=>{const o=Promise.resolve(void 0);ut=()=>{o.then(T)}};function T(){for(var o;o=K();){try{o.h.call(o.g)}catch(h){F(h)}var c=Y;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}Et=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function Ft(o,c){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(Ft,v),Ft.prototype.init=function(o,c){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ft.Z.h.call(this)},Ft.prototype.h=function(){Ft.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ce="closure_listenable_"+(Math.random()*1e6|0),$t=0;function bt(o,c,h,p,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=S,this.key=++$t,this.da=this.fa=!1}function pt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _e(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function tr(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function Pe(o){const c={};for(const h in o)c[h]=o[h];return c}const le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(o,c){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)o[h]=p[h];for(let C=0;C<le.length;C++)h=le[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function er(o){this.src=o,this.g={},this.h=0}er.prototype.add=function(o,c,h,p,S){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const j=ze(o,c,p,S);return j>-1?(c=o[j],h||(c.fa=!1)):(c=new bt(c,this.src,C,!!p,S),c.fa=h,o.push(c)),c};function Mr(o,c){const h=c.type;if(h in o.g){var p=o.g[h],S=Array.prototype.indexOf.call(p,c,void 0),C;(C=S>=0)&&Array.prototype.splice.call(p,S,1),C&&(pt(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ze(o,c,h,p){for(let S=0;S<o.length;++S){const C=o[S];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return S}return-1}var nn="closure_lm_"+(Math.random()*1e6|0),Cn={};function kr(o,c,h,p,S){if(Array.isArray(c)){for(let C=0;C<c.length;C++)kr(o,c[C],h,p,S);return null}return h=$(h),o&&o[Ce]?o.J(c,h,l(p)?!!p.capture:!1,S):Pn(o,c,h,!1,p,S)}function Pn(o,c,h,p,S,C){if(!c)throw Error("Invalid event type");const j=l(S)?!!S.capture:!!S;let ot=N(o);if(ot||(o[nn]=ot=new er(o)),h=ot.add(c,h,p,j,C),h.proxy)return h;if(p=Ul(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)R||(S=j),S===void 0&&(S=!1),o.addEventListener(c.toString(),p,S);else if(o.attachEvent)o.attachEvent(P(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ul(){function o(h){return c.call(o.src,o.listener,h)}const c=B;return o}function y(o,c,h,p,S){if(Array.isArray(c))for(var C=0;C<c.length;C++)y(o,c[C],h,p,S);else p=l(p)?!!p.capture:!!p,h=$(h),o&&o[Ce]?(o=o.i,C=String(c).toString(),C in o.g&&(c=o.g[C],h=ze(c,h,p,S),h>-1&&(pt(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[C],o.h--)))):o&&(o=N(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ze(c,h,p,S)),(h=o>-1?c[o]:null)&&w(h))}function w(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ce])Mr(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(P(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=N(c))?(Mr(h,o),h.h==0&&(h.src=null,c[nn]=null)):pt(o)}}}function P(o){return o in Cn?Cn[o]:Cn[o]="on"+o}function B(o,c){if(o.da)o=!0;else{c=new Ft(c,this);const h=o.listener,p=o.ha||o.src;o.fa&&w(o),o=h.call(p,c)}return o}function N(o){return o=o[nn],o instanceof er?o:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function $(o){return typeof o=="function"?o:(o[O]||(o[O]=function(c){return o.handleEvent(c)}),o[O])}function U(){A.call(this),this.i=new er(this),this.M=this,this.G=null}m(U,A),U.prototype[Ce]=!0,U.prototype.removeEventListener=function(o,c,h,p){y(this,o,c,h,p)};function k(o,c){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new v(c,o);else if(c instanceof v)c.target=c.target||o;else{var S=c;c=new v(p,o),Or(c,S)}S=!0;let C,j;if(h)for(j=h.length-1;j>=0;j--)C=c.g=h[j],S=L(C,p,!0,c)&&S;if(C=c.g=o,S=L(C,p,!0,c)&&S,S=L(C,p,!1,c)&&S,h)for(j=0;j<h.length;j++)C=c.g=h[j],S=L(C,p,!1,c)&&S}U.prototype.N=function(){if(U.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let p=0;p<h.length;p++)pt(h[p]);delete o.g[c],o.h--}}this.G=null},U.prototype.J=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},U.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function L(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let S=!0;for(let C=0;C<c.length;++C){const j=c[C];if(j&&!j.da&&j.capture==h){const ot=j.listener,Mt=j.ha||j.src;j.fa&&Mr(o.i,j),S=ot.call(Mt,p)!==!1&&S}}return S&&!p.defaultPrevented}function J(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function q(o){o.g=J(()=>{o.g=null,o.i&&(o.i=!1,q(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class X extends A{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){A.call(this),this.h=o,this.g={}}m(Z,A);var at=[];function yt(o){_e(o.g,function(c,h){this.g.hasOwnProperty(h)&&w(c)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),yt(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=a.JSON.stringify,Wt=a.JSON.parse,Qt=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ce(){}function ue(){}var Ae={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function nr(){v.call(this,"d")}m(nr,v);function qt(){v.call(this,"c")}m(qt,v);var Ut={},Lr=null;function Vn(){return Lr=Lr||new U}Ut.Ia="serverreachability";function Bl(o){v.call(this,Ut.Ia,o)}m(Bl,v);function Fr(o){const c=Vn();k(c,new Bl(c))}Ut.STAT_EVENT="statevent";function jl(o,c){v.call(this,Ut.STAT_EVENT,o),this.stat=c}m(jl,v);function ne(o){const c=Vn();k(c,new jl(c,o))}Ut.Ja="timingevent";function $l(o,c){v.call(this,Ut.Ja,o),this.size=c}m($l,v);function Ur(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Br(){this.g=!0}Br.prototype.ua=function(){this.g=!1};function _p(o,c,h,p,S,C){o.info(function(){if(o.g)if(C){var j="",ot=C.split("&");for(let Tt=0;Tt<ot.length;Tt++){var Mt=ot[Tt].split("=");if(Mt.length>1){const Bt=Mt[0];Mt=Mt[1];const De=Bt.split("_");j=De.length>=2&&De[1]=="type"?j+(Bt+"="+Mt+"&"):j+(Bt+"=redacted&")}}}else j=null;else j=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+c+`
`+h+`
`+j})}function yp(o,c,h,p,S,C,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+c+`
`+h+`
`+C+" "+j})}function rr(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Tp(o,h)+(p?" "+p:"")})}function Ep(o,c){o.info(function(){return"TIMEOUT: "+c})}Br.prototype.info=function(){};function Tp(o,c){if(!o.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var h=C[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var S=p[0];if(S!="noop"&&S!="stop"&&S!="close")for(let j=1;j<p.length;j++)p[j]=""}}}}return dt(C)}catch{return c}}var Hs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ql={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hl;function To(){}m(To,ce),To.prototype.g=function(){return new XMLHttpRequest},Hl=new To;function jr(o){return encodeURIComponent(String(o))}function vp(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function rn(o,c,h,p){this.j=o,this.i=c,this.l=h,this.S=p||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zl}function zl(){this.i=null,this.g="",this.h=!1}var Kl={},vo={};function Io(o,c,h){o.M=1,o.A=Ks(Ve(c)),o.u=h,o.R=!0,Gl(o,null)}function Gl(o,c){o.F=Date.now(),zs(o),o.B=Ve(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),oc(h.i,"t",p),o.C=0,h=o.j.L,o.h=new zl,o.g=Ac(o.j,h?c:null,!o.u),o.P>0&&(o.O=new X(f(o.Y,o,o.g),o.P)),c=o.V,h=o.g,p=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(at[0]=S.toString()),S=at);for(let C=0;C<S.length;C++){const j=kr(h,S[C],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.J?Pe(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Fr(),_p(o.i,o.v,o.B,o.l,o.S,o.u)}rn.prototype.ba=function(o){o=o.target;const c=this.O;c&&an(o)==3?c.j():this.Y(o)},rn.prototype.Y=function(o){try{if(o==this.g)t:{const ot=an(this.g),Mt=this.g.ya(),Tt=this.g.ca();if(!(ot<3)&&(ot!=3||this.g&&(this.h.h||this.g.la()||dc(this.g)))){this.K||ot!=4||Mt==7||(Mt==8||Tt<=0?Fr(3):Fr(2)),wo(this);var c=this.g.ca();this.X=c;var h=Ip(this);if(this.o=c==200,yp(this.i,this.v,this.B,this.l,this.S,ot,c),this.o){if(this.U&&!this.L){e:{if(this.g){var p,S=this.g;if((p=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var C=p;break e}}C=null}if(o=C)rr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ao(this,o);else{this.o=!1,this.m=3,ne(12),Dn(this),$r(this);break t}}if(this.R){o=!0;let Bt;for(;!this.K&&this.C<h.length;)if(Bt=wp(this,h),Bt==vo){ot==4&&(this.m=4,ne(14),o=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Kl){this.m=4,ne(15),rr(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else rr(this.i,this.l,Bt,null),Ao(this,Bt);if(Wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||h.length!=0||this.h.h||(this.m=1,ne(16),o=!1),this.o=this.o&&o,!o)rr(this.i,this.l,h,"[Invalid Chunked Response]"),Dn(this),$r(this);else if(h.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),xo(j),j.P=!0,ne(11))}}else rr(this.i,this.l,h,null),Ao(this,h);ot==4&&Dn(this),this.o&&!this.K&&(ot==4?Tc(this.j,this):(this.o=!1,zs(this)))}else Lp(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,ne(12)):(this.m=0,ne(13)),Dn(this),$r(this)}}}catch{}finally{}};function Ip(o){if(!Wl(o))return o.g.la();const c=dc(o.g);if(c==="")return"";let h="";const p=c.length,S=an(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Dn(o),$r(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,h+=o.h.i.decode(c[C],{stream:!(S&&C==p-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Wl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function wp(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?vo:(h=Number(c.substring(h,p)),isNaN(h)?Kl:(p+=1,p+h>c.length?vo:(c=c.slice(p,p+h),o.C=p+h,c)))}rn.prototype.cancel=function(){this.K=!0,Dn(this)};function zs(o){o.T=Date.now()+o.H,Ql(o,o.H)}function Ql(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Ur(f(o.aa,o),c)}function wo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}rn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Ep(this.i,this.B),this.M!=2&&(Fr(),ne(17)),Dn(this),this.m=2,$r(this)):Ql(this,this.T-o)};function $r(o){o.j.I==0||o.K||Tc(o.j,o)}function Dn(o){wo(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,yt(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Ao(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||bo(h.h,o))){if(!o.L&&bo(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Ys(h),Qs(h);else break t;Do(h),ne(18)}}else h.xa=S[1],0<h.xa-h.K&&S[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Ur(f(h.Va,h),6e3));Jl(h.h)<=1&&h.ta&&(h.ta=void 0)}else Nn(h,11)}else if((o.L||h.g==o)&&Ys(h),!_(c))for(S=h.Ba.g.parse(c),c=0;c<S.length;c++){let Tt=S[c];const Bt=Tt[0];if(!(Bt<=h.K))if(h.K=Bt,Tt=Tt[1],h.I==2)if(Tt[0]=="c"){h.M=Tt[1],h.ba=Tt[2];const De=Tt[3];De!=null&&(h.ka=De,h.j.info("VER="+h.ka));const On=Tt[4];On!=null&&(h.za=On,h.j.info("SVER="+h.za));const ln=Tt[5];ln!=null&&typeof ln=="number"&&ln>0&&(p=1.5*ln,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const cn=o.g;if(cn){const Zs=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zs){var C=p.h;C.g||Zs.indexOf("spdy")==-1&&Zs.indexOf("quic")==-1&&Zs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ro(C,C.h),C.h=null))}if(p.G){const No=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(p.wa=No,Rt(p.J,p.G,No))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var j=o;if(p.na=wc(p,p.L?p.ba:null,p.W),j.L){Zl(p.h,j);var ot=j,Mt=p.O;Mt&&(ot.H=Mt),ot.D&&(wo(ot),zs(ot)),p.g=j}else yc(p);h.i.length>0&&Xs(h)}else Tt[0]!="stop"&&Tt[0]!="close"||Nn(h,7);else h.I==3&&(Tt[0]=="stop"||Tt[0]=="close"?Tt[0]=="stop"?Nn(h,7):Vo(h):Tt[0]!="noop"&&h.l&&h.l.qa(Tt),h.A=0)}}Fr(4)}catch{}}var Ap=class{constructor(o,c){this.g=o,this.map=c}};function Xl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Yl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Jl(o){return o.h?1:o.g?o.g.size:0}function bo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ro(o,c){o.g?o.g.add(c):o.h=c}function Zl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Xl.prototype.cancel=function(){if(this.i=tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function tc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return b(o.i)}var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bp(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let S,C=null;p>=0?(S=o[h].substring(0,p),C=o[h].substring(p+1)):S=o[h],c(S,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function sn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof sn?(this.l=o.l,qr(this,o.j),this.o=o.o,this.g=o.g,Hr(this,o.u),this.h=o.h,So(this,ac(o.i)),this.m=o.m):o&&(c=String(o).match(ec))?(this.l=!1,qr(this,c[1]||"",!0),this.o=zr(c[2]||""),this.g=zr(c[3]||"",!0),Hr(this,c[4]),this.h=zr(c[5]||"",!0),So(this,c[6]||"",!0),this.m=zr(c[7]||"")):(this.l=!1,this.i=new Gr(null,this.l))}sn.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Kr(c,nc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Kr(c,nc,!0),"@"),o.push(jr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Kr(h,h.charAt(0)=="/"?Cp:Sp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Kr(h,Vp)),o.join("")},sn.prototype.resolve=function(o){const c=Ve(this);let h=!!o.j;h?qr(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var p=o.h;if(h)Hr(c,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var S=c.h.lastIndexOf("/");S!=-1&&(p=c.h.slice(0,S+1)+p)}if(S=p,S==".."||S==".")p="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){p=S.lastIndexOf("/",0)==0,S=S.split("/");const C=[];for(let j=0;j<S.length;){const ot=S[j++];ot=="."?p&&j==S.length&&C.push(""):ot==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&j==S.length&&C.push("")):(C.push(ot),p=!0)}p=C.join("/")}else p=S}return h?c.h=p:h=o.i.toString()!=="",h?So(c,ac(o.i)):h=!!o.m,h&&(c.m=o.m),c};function Ve(o){return new sn(o)}function qr(o,c,h){o.j=h?zr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Hr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function So(o,c,h){c instanceof Gr?(o.i=c,Dp(o.i,o.l)):(h||(c=Kr(c,Pp)),o.i=new Gr(c,o.l))}function Rt(o,c,h){o.i.set(c,h)}function Ks(o){return Rt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function zr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Kr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Rp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Rp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nc=/[#\/\?@]/g,Sp=/[#\?:]/g,Cp=/[#\?]/g,Pp=/[#\?@]/g,Vp=/#/g;function Gr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function xn(o){o.g||(o.g=new Map,o.h=0,o.i&&bp(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}e=Gr.prototype,e.add=function(o,c){xn(this),this.i=null,o=sr(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function rc(o,c){xn(o),c=sr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function sc(o,c){return xn(o),c=sr(o,c),o.g.has(c)}e.forEach=function(o,c){xn(this),this.g.forEach(function(h,p){h.forEach(function(S){o.call(c,S,p,this)},this)},this)};function ic(o,c){xn(o);let h=[];if(typeof c=="string")sc(o,c)&&(h=h.concat(o.g.get(sr(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}e.set=function(o,c){return xn(this),this.i=null,o=sr(this,o),sc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=ic(this,o),o.length>0?String(o[0]):c):c};function oc(o,c,h){rc(o,c),h.length>0&&(o.i=null,o.g.set(sr(o,c),b(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var h=c[p];const S=jr(h);h=ic(this,h);for(let C=0;C<h.length;C++){let j=S;h[C]!==""&&(j+="="+jr(h[C])),o.push(j)}}return this.i=o.join("&")};function ac(o){const c=new Gr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function sr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Dp(o,c){c&&!o.j&&(xn(o),o.i=null,o.g.forEach(function(h,p){const S=p.toLowerCase();p!=S&&(rc(this,p),oc(this,S,h))},o)),o.j=c}function xp(o,c){const h=new Br;if(a.Image){const p=new Image;p.onload=d(on,h,"TestLoadImage: loaded",!0,c,p),p.onerror=d(on,h,"TestLoadImage: error",!1,c,p),p.onabort=d(on,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=d(on,h,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Np(o,c){const h=new Br,p=new AbortController,S=setTimeout(()=>{p.abort(),on(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?on(h,"TestPingServer: ok",!0,c):on(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),on(h,"TestPingServer: error",!1,c)})}function on(o,c,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function Op(){this.g=new Qt}function Co(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Co,ce),Co.prototype.g=function(){return new Gs(this.i,this.h)};function Gs(o,c){U.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Gs,U),e=Gs.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Qr(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Wr(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function lc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Wr(this):Qr(this),this.readyState==3&&lc(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,Wr(this))},e.Na=function(o){this.g&&(this.response=o,Wr(this))},e.ga=function(){this.g&&Wr(this)};function Wr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Qr(o)}e.setRequestHeader=function(o,c){this.A.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Qr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function cc(o){let c="";return _e(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Po(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=cc(h),typeof o=="string"?h!=null&&jr(h):Rt(o,c,h))}function Pt(o){U.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Pt,U);var Mp=/^https?$/i,kp=["POST","PUT"];e=Pt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hl.g(),this.g.onreadystatechange=E(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){uc(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(kp,c,void 0)>=0)||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of h)this.g.setRequestHeader(C,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){uc(this,C)}};function uc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,hc(o),Ws(o)}function hc(o){o.A||(o.A=!0,k(o,"complete"),k(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,k(this,"complete"),k(this,"abort"),Ws(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ws(this,!0)),Pt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?fc(this):this.Xa())},e.Xa=function(){fc(this)};function fc(o){if(o.h&&typeof i<"u"){if(o.v&&an(o)==4)setTimeout(o.Ca.bind(o),0);else if(k(o,"readystatechange"),an(o)==4){o.h=!1;try{const C=o.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=C===0){let j=String(o.D).match(ec)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),p=!Mp.test(j?j.toLowerCase():"")}h=p}if(h)k(o,"complete"),k(o,"success");else{o.o=6;try{var S=an(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",hc(o)}}finally{Ws(o)}}}}function Ws(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||k(o,"ready");try{h.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function an(o){return o.g?o.g.readyState:0}e.ca=function(){try{return an(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Wt(c)}};function dc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Lp(o){const c={};o=(o.g&&an(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var h=vp(o[p]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[S]||[];c[S]=C,C.push(h)}tr(c,function(p){return p.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function pc(o){this.za=0,this.i=[],this.j=new Br,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xr("baseRetryDelayMs",5e3,o),this.Za=Xr("retryDelaySeedMs",1e4,o),this.Ta=Xr("forwardChannelMaxRetries",2,o),this.va=Xr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Xl(o&&o.concurrentRequestLimit),this.Ba=new Op,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=pc.prototype,e.ka=8,e.I=1,e.connect=function(o,c,h,p){ne(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=wc(this,null,this.W),Xs(this)};function Vo(o){if(mc(o),o.I==3){var c=o.V++,h=Ve(o.J);if(Rt(h,"SID",o.M),Rt(h,"RID",c),Rt(h,"TYPE","terminate"),Yr(o,h),c=new rn(o,o.j,c),c.M=2,c.A=Ks(Ve(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Ac(c.j,null),c.g.ea(c.A)),c.F=Date.now(),zs(c)}Ic(o)}function Qs(o){o.g&&(xo(o),o.g.cancel(),o.g=null)}function mc(o){Qs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ys(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Xs(o){if(!Yl(o.h)&&!o.m){o.m=!0;var c=o.Ea;ut||g(),Et||(ut(),Et=!0),I.add(c,o),o.D=0}}function Fp(o,c){return Jl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Ur(f(o.Ea,o,c),vc(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new rn(this,this.j,o);let C=this.o;if(this.U&&(C?(C=Pe(C),Or(C,this.U)):C=this.U),this.u!==null||this.R||(S.J=C,C=null),this.S)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=_c(this,S,c),h=Ve(this.J),Rt(h,"RID",o),Rt(h,"CVER",22),this.G&&Rt(h,"X-HTTP-Session-Id",this.G),Yr(this,h),C&&(this.R?c="headers="+jr(cc(C))+"&"+c:this.u&&Po(h,this.u,C)),Ro(this.h,S),this.Ra&&Rt(h,"TYPE","init"),this.S?(Rt(h,"$req",c),Rt(h,"SID","null"),S.U=!0,Io(S,h,null)):Io(S,h,c),this.I=2}}else this.I==3&&(o?gc(this,o):this.i.length==0||Yl(this.h)||gc(this))};function gc(o,c){var h;c?h=c.l:h=o.V++;const p=Ve(o.J);Rt(p,"SID",o.M),Rt(p,"RID",h),Rt(p,"AID",o.K),Yr(o,p),o.u&&o.o&&Po(p,o.u,o.o),h=new rn(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=_c(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ro(o.h,h),Io(h,p,c)}function Yr(o,c){o.H&&_e(o.H,function(h,p){Rt(c,p,h)}),o.l&&_e({},function(h,p){Rt(c,p,h)})}function _c(o,c,h){h=Math.min(o.i.length,h);const p=o.l?f(o.l.Ka,o.l,o):null;t:{var S=o.i;let ot=-1;for(;;){const Mt=["count="+h];ot==-1?h>0?(ot=S[0].g,Mt.push("ofs="+ot)):ot=0:Mt.push("ofs="+ot);let Tt=!0;for(let Bt=0;Bt<h;Bt++){var C=S[Bt].g;const De=S[Bt].map;if(C-=ot,C<0)ot=Math.max(0,S[Bt].g-100),Tt=!1;else try{C="req"+C+"_"||"";try{var j=De instanceof Map?De:Object.entries(De);for(const[On,ln]of j){let cn=ln;l(ln)&&(cn=dt(ln)),Mt.push(C+On+"="+encodeURIComponent(cn))}}catch(On){throw Mt.push(C+"type="+encodeURIComponent("_badmap")),On}}catch{p&&p(De)}}if(Tt){j=Mt.join("&");break t}}j=void 0}return o=o.i.splice(0,h),c.G=o,j}function yc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;ut||g(),Et||(ut(),Et=!0),I.add(c,o),o.A=0}}function Do(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Ur(f(o.Da,o),vc(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,Ec(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Ur(f(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ne(10),Qs(this),Ec(this))};function xo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ec(o){o.g=new rn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Ve(o.na);Rt(c,"RID","rpc"),Rt(c,"SID",o.M),Rt(c,"AID",o.K),Rt(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Rt(c,"TO",o.ia),Rt(c,"TYPE","xmlhttp"),Yr(o,c),o.u&&o.o&&Po(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ks(Ve(c)),h.u=null,h.R=!0,Gl(h,o)}e.Va=function(){this.C!=null&&(this.C=null,Qs(this),Do(this),ne(19))};function Ys(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Tc(o,c){var h=null;if(o.g==c){Ys(o),xo(o),o.g=null;var p=2}else if(bo(o.h,c))h=c.G,Zl(o.h,c),p=1;else return;if(o.I!=0){if(c.o)if(p==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var S=o.D;p=Vn(),k(p,new $l(p,h)),Xs(o)}else yc(o);else if(S=c.m,S==3||S==0&&c.X>0||!(p==1&&Fp(o,c)||p==2&&Do(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),S){case 1:Nn(o,5);break;case 4:Nn(o,10);break;case 3:Nn(o,6);break;default:Nn(o,2)}}}function vc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Nn(o,c){if(o.j.info("Error code "+c),c==2){var h=f(o.bb,o),p=o.Ua;const S=!p;p=new sn(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||qr(p,"https"),Ks(p),S?xp(p.toString(),h):Np(p.toString(),h)}else ne(2);o.I=0,o.l&&o.l.pa(c),Ic(o),mc(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function Ic(o){if(o.I=0,o.ja=[],o.l){const c=tc(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ja,c),x(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function wc(o,c,h){var p=h instanceof sn?Ve(h):new sn(h);if(p.g!="")c&&(p.g=c+"."+p.g),Hr(p,p.u);else{var S=a.location;p=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;const C=new sn(null);p&&qr(C,p),c&&(C.g=c),S&&Hr(C,S),h&&(C.h=h),p=C}return h=o.G,c=o.wa,h&&c&&Rt(p,h,c),Rt(p,"VER",o.ka),Yr(o,p),p}function Ac(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Pt(new Co({ab:h})):new Pt(o.ma),c.Fa(o.L),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function bc(){}e=bc.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function Js(){}Js.prototype.g=function(o,c){return new he(o,c)};function he(o,c){U.call(this),this.g=new pc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new ir(this)}m(he,U),he.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},he.prototype.close=function(){Vo(this.g)},he.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=dt(o),o=h);c.i.push(new Ap(c.Ya++,o)),c.I==3&&Xs(c)},he.prototype.N=function(){this.g.l=null,delete this.j,Vo(this.g),delete this.g,he.Z.N.call(this)};function Rc(o){nr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Rc,nr);function Sc(){qt.call(this),this.status=1}m(Sc,qt);function ir(o){this.g=o}m(ir,bc),ir.prototype.ra=function(){k(this.g,"a")},ir.prototype.qa=function(o){k(this.g,new Rc(o))},ir.prototype.pa=function(o){k(this.g,new Sc)},ir.prototype.oa=function(){k(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,he.prototype.send=he.prototype.o,he.prototype.open=he.prototype.m,he.prototype.close=he.prototype.close,jf=function(){return new Js},Bf=function(){return Vn()},Uf=Ut,ya={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Hs.NO_ERROR=0,Hs.TIMEOUT=8,Hs.HTTP_ERROR=6,pi=Hs,ql.COMPLETE="complete",Ff=ql,ue.EventType=Ae,Ae.OPEN="a",Ae.CLOSE="b",Ae.ERROR="c",Ae.MESSAGE="d",U.prototype.listen=U.prototype.J,ss=ue,Pt.prototype.listenOnce=Pt.prototype.K,Pt.prototype.getLastError=Pt.prototype.Ha,Pt.prototype.getLastErrorCode=Pt.prototype.ya,Pt.prototype.getStatus=Pt.prototype.ca,Pt.prototype.getResponseJson=Pt.prototype.La,Pt.prototype.getResponseText=Pt.prototype.la,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Fa,Lf=Pt}).apply(typeof ri<"u"?ri:typeof self<"u"?self:typeof window<"u"?window:{});const Eu="@firebase/firestore",Tu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Vf("@firebase/firestore");function lr(){return Kn.logLevel}function H(e,...t){if(Kn.logLevel<=ft.DEBUG){const n=t.map(rl);Kn.debug(`Firestore (${Vr}): ${e}`,...n)}}function Ze(e,...t){if(Kn.logLevel<=ft.ERROR){const n=t.map(rl);Kn.error(`Firestore (${Vr}): ${e}`,...n)}}function Ir(e,...t){if(Kn.logLevel<=ft.WARN){const n=t.map(rl);Kn.warn(`Firestore (${Vr}): ${e}`,...n)}}function rl(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,$f(e,r,n)}function $f(e,t,n){let r=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ze(r),new Error(r)}function _t(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||$f(t,s,r)}function rt(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Pr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Yt.UNAUTHENTICATED)))}shutdown(){}}class Zy{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class tE{constructor(t){this.t=t,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){_t(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;t.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}}),0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_t(typeof r.accessToken=="string",31837,{l:r}),new qf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return _t(t===null||typeof t=="string",2055,{h:t}),new Yt(t)}}class eE{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nE{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new eE(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rE{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ly(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){_t(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(_t(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vu(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function lt(e,t){return e<t?-1:e>t?1:0}function Ea(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=e.charAt(r),i=t.charAt(r);if(s!==i)return Wo(s)===Wo(i)?lt(s,i):Wo(s)?1:-1}return lt(e.length,t.length)}const iE=55296,oE=57343;function Wo(e){const t=e.charCodeAt(0);return t>=iE&&t<=oE}function wr(e,t,n){return e.length===t.length&&e.every(((r,s)=>n(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="__name__";class Oe{constructor(t,n,r){n===void 0?n=0:n>t.length&&tt(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&tt(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Oe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach((r=>{n.push(r)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=Oe.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return lt(t.length,n.length)}static compareSegments(t,n){const r=Oe.isNumericId(t),s=Oe.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Oe.extractNumericId(t).compare(Oe.extractNumericId(n)):Ea(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return gn.fromString(t.substring(4,t.length-2))}}class wt extends Oe{construct(t,n,r){return new wt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new wt(n)}static emptyPath(){return new wt([])}}const aE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends Oe{construct(t,n,r){return new Kt(t,n,r)}static isValidIdentifier(t){return aE.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iu}static keyField(){return new Kt([Iu])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.path=t}static fromPath(t){return new Q(wt.fromString(t))}static fromName(t){return new Q(wt.fromString(t).popFirst(5))}static empty(){return new Q(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&wt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return wt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Q(new wt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(e,t,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lE(e,t,n,r){if(t===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function wu(e){if(!Q.isDocumentKey(e))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Au(e){if(Q.isDocumentKey(e))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function zf(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function so(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":tt(12329,{type:typeof e})}function yn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=so(e);throw new z(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t){const n={typeString:e};return t&&(n.value=t),n}function Fs(e,t){if(!zf(e))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=-62135596800,Ru=1e6;class St{static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Ru);return new St(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<bu)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ru}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:St._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Fs(t,St._jsonSchema))return new St(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-bu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}St._jsonSchemaVersion="firestore/timestamp/1.0",St._jsonSchema={type:Nt("string",St._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static fromTimestamp(t){return new nt(t)}static min(){return new nt(new St(0,0))}static max(){return new nt(new St(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=-1;function cE(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=nt.fromTimestamp(r===1e9?new St(n+1,0):new St(n,r));return new In(s,Q.empty(),t)}function uE(e){return new In(e.readTime,e.key,Cs)}class In{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new In(nt.min(),Q.empty(),Cs)}static max(){return new In(nt.max(),Q.empty(),Cs)}}function hE(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Q.comparator(e.documentKey,t.documentKey),n!==0?n:lt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(e){if(e.code!==V.FAILED_PRECONDITION||e.message!==fE)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):D.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):D.reject(n)}static resolve(t){return new D(((n,r)=>{n(t)}))}static reject(t){return new D(((n,r)=>{r(t)}))}static waitFor(t){return new D(((n,r)=>{let s=0,i=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&n()}),(u=>r(u)))})),a=!0,i===s&&n()}))}static or(t){let n=D.resolve(!1);for(const r of t)n=n.next((s=>s?D.resolve(s):r()));return n}static forEach(t,n){const r=[];return t.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(t,n){return new D(((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;n(t[f]).next((d=>{a[f]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(t,n){return new D(((r,s)=>{const i=()=>{t()===!0?n().next((()=>{i()}),s):r()};i()}))}}function pE(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}io.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=-1;function oo(e){return e==null}function Mi(e){return e===0&&1/e==-1/0}function mE(e){return typeof e=="number"&&Number.isInteger(e)&&!Mi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="";function gE(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Su(t)),t=_E(e.get(n),t);return Su(t)}function _E(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case Kf:n+="";break;default:n+=i}}return n}function Su(e){return e+Kf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Qn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,n){this.comparator=t,this.root=n||Ht.EMPTY}insert(t,n){return new Ct(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(t){return new Ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,r)=>(t(n,r),!1)))}toString(){const t=[];return this.inorderTraversal(((n,r)=>(t.push(`${n}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new si(this.root,t,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new si(this.root,t,this.comparator,!0)}}class si{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ht{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Ht.RED,this.left=s??Ht.EMPTY,this.right=i??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Ht(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw tt(27949);return t+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw tt(57766)}get value(){throw tt(16141)}get color(){throw tt(16727)}get left(){throw tt(29726)}get right(){throw tt(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new Ht(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.comparator=t,this.data=new Ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,r)=>(t(n),!1)))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pu(this.data.getIterator())}getIteratorFrom(t){return new Pu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((r=>{n=n.add(r)})),n}isEqual(t){if(!(t instanceof Lt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Lt(this.comparator);return n.data=t,n}}class Pu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.fields=t,t.sort(Kt.comparator)}static empty(){return new be([])}unionWith(t){let n=new Lt(Kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new be(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return wr(this.fields,t.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wf("Invalid base64 string: "+i):i}})(t);return new Gt(n)}static fromUint8Array(t){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new Gt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const yE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wn(e){if(_t(!!e,39018),typeof e=="string"){let t=0;const n=yE.exec(e);if(_t(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Vt(e.seconds),nanos:Vt(e.nanos)}}function Vt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function An(e){return typeof e=="string"?Gt.fromBase64String(e):Gt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="server_timestamp",Xf="__type__",Yf="__previous_value__",Jf="__local_write_time__";function ol(e){return(e?.mapValue?.fields||{})[Xf]?.stringValue===Qf}function ao(e){const t=e.mapValue.fields[Yf];return ol(t)?ao(t):t}function Ps(e){const t=wn(e.mapValue.fields[Jf].timestampValue);return new St(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t,n,r,s,i,a,l,u,f,d){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=d}}const ki="(default)";class Vs{constructor(t,n){this.projectId=t,this.database=n||ki}static empty(){return new Vs("","")}get isDefaultDatabase(){return this.database===ki}isEqual(t){return t instanceof Vs&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="__type__",TE="__max__",ii={mapValue:{}},td="__vector__",Li="value";function bn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ol(e)?4:IE(e)?9007199254740991:vE(e)?10:11:tt(28295,{value:e})}function He(e,t){if(e===t)return!0;const n=bn(e);if(n!==bn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ps(e).isEqual(Ps(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=wn(s.timestampValue),l=wn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(e,t);case 5:return e.stringValue===t.stringValue;case 6:return(function(s,i){return An(s.bytesValue).isEqual(An(i.bytesValue))})(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return(function(s,i){return Vt(s.geoPointValue.latitude)===Vt(i.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(i.geoPointValue.longitude)})(e,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Vt(s.integerValue)===Vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Vt(s.doubleValue),l=Vt(i.doubleValue);return a===l?Mi(a)===Mi(l):isNaN(a)&&isNaN(l)}return!1})(e,t);case 9:return wr(e.arrayValue.values||[],t.arrayValue.values||[],He);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Cu(a)!==Cu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!He(a[u],l[u])))return!1;return!0})(e,t);default:return tt(52216,{left:e})}}function Ds(e,t){return(e.values||[]).find((n=>He(n,t)))!==void 0}function Ar(e,t){if(e===t)return 0;const n=bn(e),r=bn(t);if(n!==r)return lt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return lt(e.booleanValue,t.booleanValue);case 2:return(function(i,a){const l=Vt(i.integerValue||i.doubleValue),u=Vt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(e,t);case 3:return Vu(e.timestampValue,t.timestampValue);case 4:return Vu(Ps(e),Ps(t));case 5:return Ea(e.stringValue,t.stringValue);case 6:return(function(i,a){const l=An(i),u=An(a);return l.compareTo(u)})(e.bytesValue,t.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const d=lt(l[f],u[f]);if(d!==0)return d}return lt(l.length,u.length)})(e.referenceValue,t.referenceValue);case 8:return(function(i,a){const l=lt(Vt(i.latitude),Vt(a.latitude));return l!==0?l:lt(Vt(i.longitude),Vt(a.longitude))})(e.geoPointValue,t.geoPointValue);case 9:return Du(e.arrayValue,t.arrayValue);case 10:return(function(i,a){const l=i.fields||{},u=a.fields||{},f=l[Li]?.arrayValue,d=u[Li]?.arrayValue,m=lt(f?.values?.length||0,d?.values?.length||0);return m!==0?m:Du(f,d)})(e.mapValue,t.mapValue);case 11:return(function(i,a){if(i===ii.mapValue&&a===ii.mapValue)return 0;if(i===ii.mapValue)return 1;if(a===ii.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const E=Ea(u[m],d[m]);if(E!==0)return E;const b=Ar(l[u[m]],f[d[m]]);if(b!==0)return b}return lt(u.length,d.length)})(e.mapValue,t.mapValue);default:throw tt(23264,{he:n})}}function Vu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return lt(e,t);const n=wn(e),r=wn(t),s=lt(n.seconds,r.seconds);return s!==0?s:lt(n.nanos,r.nanos)}function Du(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ar(n[s],r[s]);if(i)return i}return lt(n.length,r.length)}function br(e){return Ta(e)}function Ta(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(function(n){const r=wn(n);return`time(${r.seconds},${r.nanos})`})(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?(function(n){return An(n).toBase64()})(e.bytesValue):"referenceValue"in e?(function(n){return Q.fromName(n).toString()})(e.referenceValue):"geoPointValue"in e?(function(n){return`geo(${n.latitude},${n.longitude})`})(e.geoPointValue):"arrayValue"in e?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ta(i);return r+"]"})(e.arrayValue):"mapValue"in e?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ta(n.fields[a])}`;return s+"}"})(e.mapValue):tt(61005,{value:e})}function mi(e){switch(bn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ao(e);return t?16+mi(t):16;case 5:return 2*e.stringValue.length;case 6:return An(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+mi(i)),0)})(e.arrayValue);case 10:case 11:return(function(r){let s=0;return Qn(r.fields,((i,a)=>{s+=i.length+mi(a)})),s})(e.mapValue);default:throw tt(13486,{value:e})}}function xu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function va(e){return!!e&&"integerValue"in e}function al(e){return!!e&&"arrayValue"in e}function Nu(e){return!!e&&"nullValue"in e}function Ou(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function gi(e){return!!e&&"mapValue"in e}function vE(e){return(e?.mapValue?.fields||{})[Zf]?.stringValue===td}function gs(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Qn(e.mapValue.fields,((n,r)=>t.mapValue.fields[n]=gs(r))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gs(e.arrayValue.values[n]);return t}return{...e}}function IE(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===TE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.value=t}static empty(){return new Ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!gi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=gs(n)}setAll(t){let n=Kt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=gs(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return He(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Qn(n,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Ee(gs(this.value))}}function ed(e){const t=[];return Qn(e.fields,((n,r)=>{const s=new Kt([n]);if(gi(r)){const i=ed(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new be(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Zt(t,0,nt.min(),nt.min(),nt.min(),Ee.empty(),0)}static newFoundDocument(t,n,r,s){return new Zt(t,1,n,nt.min(),r,s,0)}static newNoDocument(t,n){return new Zt(t,2,n,nt.min(),nt.min(),Ee.empty(),0)}static newUnknownDocument(t,n){return new Zt(t,3,n,nt.min(),nt.min(),Ee.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(nt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Zt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,n){this.position=t,this.inclusive=n}}function Mu(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),n.key):r=Ar(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ku(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!He(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n="asc"){this.field=t,this.dir=n}}function wE(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{}class xt extends nd{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new bE(t,n,r):n==="array-contains"?new CE(t,r):n==="in"?new PE(t,r):n==="not-in"?new VE(t,r):n==="array-contains-any"?new DE(t,r):new xt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new RE(t,r):new SE(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ar(n,this.value)):n!==null&&bn(this.value)===bn(n)&&this.matchesComparison(Ar(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Se extends nd{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Se(t,n)}matches(t){return rd(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rd(e){return e.op==="and"}function sd(e){return AE(e)&&rd(e)}function AE(e){for(const t of e.filters)if(t instanceof Se)return!1;return!0}function Ia(e){if(e instanceof xt)return e.field.canonicalString()+e.op.toString()+br(e.value);if(sd(e))return e.filters.map((t=>Ia(t))).join(",");{const t=e.filters.map((n=>Ia(n))).join(",");return`${e.op}(${t})`}}function id(e,t){return e instanceof xt?(function(r,s){return s instanceof xt&&r.op===s.op&&r.field.isEqual(s.field)&&He(r.value,s.value)})(e,t):e instanceof Se?(function(r,s){return s instanceof Se&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&id(a,s.filters[l])),!0):!1})(e,t):void tt(19439)}function od(e){return e instanceof xt?(function(n){return`${n.field.canonicalString()} ${n.op} ${br(n.value)}`})(e):e instanceof Se?(function(n){return n.op.toString()+" {"+n.getFilters().map(od).join(" ,")+"}"})(e):"Filter"}class bE extends xt{constructor(t,n,r){super(t,n,r),this.key=Q.fromName(r.referenceValue)}matches(t){const n=Q.comparator(t.key,this.key);return this.matchesComparison(n)}}class RE extends xt{constructor(t,n){super(t,"in",n),this.keys=ad("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class SE extends xt{constructor(t,n){super(t,"not-in",n),this.keys=ad("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function ad(e,t){return(t.arrayValue?.values||[]).map((n=>Q.fromName(n.referenceValue)))}class CE extends xt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return al(n)&&Ds(n.arrayValue,this.value)}}class PE extends xt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ds(this.value.arrayValue,n)}}class VE extends xt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ds(this.value.arrayValue,n)}}class DE extends xt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!al(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ds(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Lu(e,t=null,n=[],r=[],s=null,i=null,a=null){return new xE(e,t,n,r,s,i,a)}function ll(e){const t=rt(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((r=>Ia(r))).join(","),n+="|ob:",n+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),oo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>br(r))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>br(r))).join(",")),t.Te=n}return t.Te}function cl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!wE(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!id(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ku(e.startAt,t.startAt)&&ku(e.endAt,t.endAt)}function wa(e){return Q.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function NE(e,t,n,r,s,i,a,l){return new Us(e,t,n,r,s,i,a,l)}function ul(e){return new Us(e)}function Fu(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ld(e){return e.collectionGroup!==null}function _s(e){const t=rt(e);if(t.Ie===null){t.Ie=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Lt(Kt.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(t).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Ui(i,r))})),n.has(Kt.keyField().canonicalString())||t.Ie.push(new Ui(Kt.keyField(),r))}return t.Ie}function Le(e){const t=rt(e);return t.Ee||(t.Ee=OE(t,_s(e))),t.Ee}function OE(e,t){if(e.limitType==="F")return Lu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ui(s.field,i)}));const n=e.endAt?new Fi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fi(e.startAt.position,e.startAt.inclusive):null;return Lu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Aa(e,t){const n=e.filters.concat([t]);return new Us(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ba(e,t,n){return new Us(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function lo(e,t){return cl(Le(e),Le(t))&&e.limitType===t.limitType}function cd(e){return`${ll(Le(e))}|lt:${e.limitType}`}function cr(e){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>od(s))).join(", ")}]`),oo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>br(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>br(s))).join(",")),`Target(${r})`})(Le(e))}; limitType=${e.limitType})`}function co(e,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(e,t)&&(function(r,s){for(const i of _s(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(e,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(e,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const f=Mu(a,l,u);return a.inclusive?f<=0:f<0})(r.startAt,_s(r),s)||r.endAt&&!(function(a,l,u){const f=Mu(a,l,u);return a.inclusive?f>=0:f>0})(r.endAt,_s(r),s))})(e,t)}function ME(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ud(e){return(t,n)=>{let r=!1;for(const s of _s(e)){const i=kE(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kE(e,t,n){const r=e.field.isKeyField()?Q.comparator(t.key,n.key):(function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?Ar(u,f):tt(42886)})(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return tt(19790,{direction:e.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Qn(this.inner,((n,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return Gf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=new Ct(Q.comparator);function tn(){return LE}const hd=new Ct(Q.comparator);function is(...e){let t=hd;for(const n of e)t=t.insert(n.key,n);return t}function fd(e){let t=hd;return e.forEach(((n,r)=>t=t.insert(n,r.overlayedDocument))),t}function jn(){return ys()}function dd(){return ys()}function ys(){return new Xn((e=>e.toString()),((e,t)=>e.isEqual(t)))}const FE=new Ct(Q.comparator),UE=new Lt(Q.comparator);function ct(...e){let t=UE;for(const n of e)t=t.add(n);return t}const BE=new Lt(lt);function jE(){return BE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(t)?"-0":t}}function pd(e){return{integerValue:""+e}}function $E(e,t){return mE(t)?pd(t):hl(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this._=void 0}}function qE(e,t,n){return e instanceof xs?(function(s,i){const a={fields:{[Xf]:{stringValue:Qf},[Jf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ol(i)&&(i=ao(i)),i&&(a.fields[Yf]=i),{mapValue:a}})(n,t):e instanceof Ns?gd(e,t):e instanceof Os?_d(e,t):(function(s,i){const a=md(s,i),l=Uu(a)+Uu(s.Ae);return va(a)&&va(s.Ae)?pd(l):hl(s.serializer,l)})(e,t)}function HE(e,t,n){return e instanceof Ns?gd(e,t):e instanceof Os?_d(e,t):n}function md(e,t){return e instanceof Bi?(function(r){return va(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class xs extends uo{}class Ns extends uo{constructor(t){super(),this.elements=t}}function gd(e,t){const n=yd(t);for(const r of e.elements)n.some((s=>He(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Os extends uo{constructor(t){super(),this.elements=t}}function _d(e,t){let n=yd(t);for(const r of e.elements)n=n.filter((s=>!He(s,r)));return{arrayValue:{values:n}}}class Bi extends uo{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Uu(e){return Vt(e.integerValue||e.doubleValue)}function yd(e){return al(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(t,n){this.field=t,this.transform=n}}function KE(e,t){return e.field.isEqual(t.field)&&(function(r,s){return r instanceof Ns&&s instanceof Ns||r instanceof Os&&s instanceof Os?wr(r.elements,s.elements,He):r instanceof Bi&&s instanceof Bi?He(r.Ae,s.Ae):r instanceof xs&&s instanceof xs})(e.transform,t.transform)}class GE{constructor(t,n){this.version=t,this.transformResults=n}}class Fe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Fe}static exists(t){return new Fe(void 0,t)}static updateTime(t){return new Fe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _i(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ho{}function Ed(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new fl(e.key,Fe.none()):new Bs(e.key,e.data,Fe.none());{const n=e.data,r=Ee.empty();let s=new Lt(Kt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Yn(e.key,r,new be(s.toArray()),Fe.none())}}function WE(e,t,n){e instanceof Bs?(function(s,i,a){const l=s.value.clone(),u=ju(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(e,t,n):e instanceof Yn?(function(s,i,a){if(!_i(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ju(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Td(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(e,t,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,n)}function Es(e,t,n,r){return e instanceof Bs?(function(i,a,l,u){if(!_i(i.precondition,a))return l;const f=i.value.clone(),d=$u(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(e,t,n,r):e instanceof Yn?(function(i,a,l,u){if(!_i(i.precondition,a))return l;const f=$u(i.fieldTransforms,u,a),d=a.data;return d.setAll(Td(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(e,t,n,r):(function(i,a,l){return _i(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(e,t,n)}function QE(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=md(r.transform,s||null);i!=null&&(n===null&&(n=Ee.empty()),n.set(r.field,i))}return n||null}function Bu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wr(r,s,((i,a)=>KE(i,a)))})(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Bs extends ho{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yn extends ho{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Td(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ju(e,t,n){const r=new Map;_t(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,HE(a,l,n[s]))}return r}function $u(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,qE(i,a,t))}return r}class fl extends ho{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XE extends ho{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&WE(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Es(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Es(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=dd();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=Ed(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(nt.min())})),r}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),ct())}isEqual(t){return this.batchId===t.batchId&&wr(this.mutations,t.mutations,((n,r)=>Bu(n,r)))&&wr(this.baseMutations,t.baseMutations,((n,r)=>Bu(n,r)))}}class dl{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){_t(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return FE})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new dl(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,ht;function tT(e){switch(e){case V.OK:return tt(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return tt(15467,{code:e})}}function vd(e){if(e===void 0)return Ze("GRPC error has no .code"),V.UNKNOWN;switch(e){case Dt.OK:return V.OK;case Dt.CANCELLED:return V.CANCELLED;case Dt.UNKNOWN:return V.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return V.INTERNAL;case Dt.UNAVAILABLE:return V.UNAVAILABLE;case Dt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Dt.NOT_FOUND:return V.NOT_FOUND;case Dt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Dt.ABORTED:return V.ABORTED;case Dt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Dt.DATA_LOSS:return V.DATA_LOSS;default:return tt(39323,{code:e})}}(ht=Dt||(Dt={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=new gn([4294967295,4294967295],0);function qu(e){const t=eT().encode(e),n=new kf;return n.update(t),new Uint8Array(n.digest())}function Hu(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new gn([n,r],0),new gn([s,i],0)]}class pl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new os(`Invalid padding: ${n}`);if(r<0)throw new os(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new os(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new os(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=gn.fromNumber(this.ge)}ye(t,n,r){let s=t.add(n.multiply(gn.fromNumber(r)));return s.compare(nT)===1&&(s=new gn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=qu(t),[r,s]=Hu(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new pl(i,s,n);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const n=qu(t),[r,s]=Hu(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,js.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new fo(nt.min(),s,new Ct(lt),tn(),ct())}}class js{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new js(r,n,ct(),ct(),ct())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n,r,s){this.be=t,this.removedTargetIds=n,this.key=r,this.De=s}}class Id{constructor(t,n){this.targetId=t,this.Ce=n}}class wd{constructor(t,n,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zu{constructor(){this.ve=0,this.Fe=Ku(),this.Me=Gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ct(),n=ct(),r=ct();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:tt(38017,{changeType:i})}})),new js(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=Ku()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,_t(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class rT{constructor(t){this.Ge=t,this.ze=new Map,this.je=tn(),this.Je=oi(),this.He=oi(),this.Ye=new Ct(lt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:tt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(t){const n=t.targetId,r=t.Ce.count,s=this.ot(n);if(s){const i=s.target;if(wa(i))if(r===0){const a=new Q(i.path);this.et(n,a,Zt.newNoDocument(a,nt.min()))}else _t(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(t),u=l?this.ct(l,t,a):1;if(u!==0){this.it(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,f)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=An(r).toUint8Array()}catch(u){if(u instanceof Wf)return Ir("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new pl(a,s,i)}catch(u){return Ir(u instanceof os?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(t){const n=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&wa(l.target)){const u=new Q(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Zt.newNoDocument(u,t))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=ct();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const f=this.ot(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new fo(t,n,this.Ye,this.je,r);return this.je=tn(),this.Je=oi(),this.He=oi(),this.Ye=new Ct(lt),s}Xe(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new zu,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Lt(lt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Lt(lt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||H("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new zu),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function oi(){return new Ct(Q.comparator)}function Ku(){return new Ct(Q.comparator)}const sT={asc:"ASCENDING",desc:"DESCENDING"},iT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oT={and:"AND",or:"OR"};class aT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ra(e,t){return e.useProto3Json||oo(t)?t:{value:t}}function ji(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ad(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function lT(e,t){return ji(e,t.toTimestamp())}function Ue(e){return _t(!!e,49232),nt.fromTimestamp((function(n){const r=wn(n);return new St(r.seconds,r.nanos)})(e))}function ml(e,t){return Sa(e,t).canonicalString()}function Sa(e,t){const n=(function(s){return new wt(["projects",s.projectId,"databases",s.database])})(e).child("documents");return t===void 0?n:n.child(t)}function bd(e){const t=wt.fromString(e);return _t(Vd(t),10190,{key:t.toString()}),t}function Ca(e,t){return ml(e.databaseId,t.path)}function Qo(e,t){const n=bd(t);if(n.get(1)!==e.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Q(Sd(n))}function Rd(e,t){return ml(e.databaseId,t)}function cT(e){const t=bd(e);return t.length===4?wt.emptyPath():Sd(t)}function Pa(e){return new wt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Sd(e){return _t(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function Gu(e,t,n){return{name:Ca(e,t),fields:n.value.mapValue.fields}}function uT(e,t){let n;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:tt(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(f,d){return f.useProto3Json?(_t(d===void 0||typeof d=="string",58123),Gt.fromBase64String(d||"")):(_t(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Gt.fromUint8Array(d||new Uint8Array))})(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(f){const d=f.code===void 0?V.UNKNOWN:vd(f.code);return new z(d,f.message||"")})(a);n=new wd(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qo(e,r.document.name),i=Ue(r.document.updateTime),a=r.document.createTime?Ue(r.document.createTime):nt.min(),l=new Ee({mapValue:{fields:r.document.fields}}),u=Zt.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new yi(f,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Qo(e,r.document),i=r.readTime?Ue(r.readTime):nt.min(),a=Zt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new yi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Qo(e,r.document),i=r.removedTargetIds||[];n=new yi([],i,s,null)}else{if(!("filter"in t))return tt(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ZE(s,i),l=r.targetId;n=new Id(l,a)}}return n}function hT(e,t){let n;if(t instanceof Bs)n={update:Gu(e,t.key,t.value)};else if(t instanceof fl)n={delete:Ca(e,t.key)};else if(t instanceof Yn)n={update:Gu(e,t.key,t.data),updateMask:TT(t.fieldMask)};else{if(!(t instanceof XE))return tt(16599,{Vt:t.type});n={verify:Ca(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof xs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ns)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Os)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bi)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw tt(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:lT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:tt(27497)})(e,t.precondition)),n}function fT(e,t){return e&&e.length>0?(_t(t!==void 0,14353),e.map((n=>(function(s,i){let a=s.updateTime?Ue(s.updateTime):Ue(i);return a.isEqual(nt.min())&&(a=Ue(i)),new GE(a,s.transformResults||[])})(n,t)))):[]}function dT(e,t){return{documents:[Rd(e,t.path)]}}function pT(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rd(e,s);const i=(function(f){if(f.length!==0)return Pd(Se.create(f,"and"))})(t.filters);i&&(n.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((d=>(function(E){return{field:ur(E.field),direction:_T(E.dir)}})(d)))})(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ra(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:n,parent:s}}function mT(e){let t=cT(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_t(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=(function(m){const E=Cd(m);return E instanceof Se&&sd(E)?E.getFilters():[E]})(n.where));let a=[];n.orderBy&&(a=(function(m){return m.map((E=>(function(x){return new Ui(hr(x.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(E)))})(n.orderBy));let l=null;n.limit&&(l=(function(m){let E;return E=typeof m=="object"?m.value:m,oo(E)?null:E})(n.limit));let u=null;n.startAt&&(u=(function(m){const E=!!m.before,b=m.values||[];return new Fi(b,E)})(n.startAt));let f=null;return n.endAt&&(f=(function(m){const E=!m.before,b=m.values||[];return new Fi(b,E)})(n.endAt)),NE(t,s,a,i,l,"F",u,f)}function gT(e,t){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tt(28987,{purpose:s})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Cd(e){return e.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hr(n.unaryFilter.field);return xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hr(n.unaryFilter.field);return xt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hr(n.unaryFilter.field);return xt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=hr(n.unaryFilter.field);return xt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return tt(61313);default:return tt(60726)}})(e):e.fieldFilter!==void 0?(function(n){return xt.create(hr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return tt(58110);default:return tt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(e):e.compositeFilter!==void 0?(function(n){return Se.create(n.compositeFilter.filters.map((r=>Cd(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return tt(1026)}})(n.compositeFilter.op))})(e):tt(30097,{filter:e})}function _T(e){return sT[e]}function yT(e){return iT[e]}function ET(e){return oT[e]}function ur(e){return{fieldPath:e.canonicalString()}}function hr(e){return Kt.fromServerFormat(e.fieldPath)}function Pd(e){return e instanceof xt?(function(n){if(n.op==="=="){if(Ou(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NAN"}};if(Nu(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ou(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NOT_NAN"}};if(Nu(n.value))return{unaryFilter:{field:ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ur(n.field),op:yT(n.op),value:n.value}}})(e):e instanceof Se?(function(n){const r=n.getFilters().map((s=>Pd(s)));return r.length===1?r[0]:{compositeFilter:{op:ET(n.op),filters:r}}})(e):tt(54877,{filter:e})}function TT(e){const t=[];return e.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function Vd(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,n,r,s,i=nt.min(),a=nt.min(),l=Gt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new fn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(t){this.yt=t}}function IT(e){const t=mT({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ba(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(){this.Cn=new AT}addToCollectionParentIndex(t,n){return this.Cn.add(n),D.resolve()}getCollectionParents(t,n){return D.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return D.resolve()}deleteFieldIndex(t,n){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,n){return D.resolve()}getDocumentsMatchingTarget(t,n){return D.resolve(null)}getIndexType(t,n){return D.resolve(0)}getFieldIndexes(t,n){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,n){return D.resolve(In.min())}getMinOffsetFromCollectionGroup(t,n){return D.resolve(In.min())}updateCollectionGroup(t,n,r){return D.resolve()}updateIndexEntries(t,n){return D.resolve()}}class AT{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Lt(wt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Lt(wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dd=41943040;class ae{static withCacheSize(t){return new ae(t,ae.DEFAULT_COLLECTION_PERCENTILE,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ae.DEFAULT_COLLECTION_PERCENTILE=10,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ae.DEFAULT=new ae(Dd,ae.DEFAULT_COLLECTION_PERCENTILE,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ae.DISABLED=new ae(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Rr(0)}static cr(){return new Rr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="LruGarbageCollector",bT=1048576;function Xu([e,t],[n,r]){const s=lt(e,n);return s===0?lt(t,r):s}class RT{constructor(t){this.Ir=t,this.buffer=new Lt(Xu),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xu(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ST{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){H(Qu,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xr(n)?H(Qu,"Ignoring IndexedDB error during garbage collection: ",n):await Dr(n)}await this.Vr(3e5)}))}}class CT{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(t,n){if(n===0)return D.resolve(io.ce);const r=new RT(n);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,n,r){return this.mr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Wu)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wu):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let r,s,i,a,l,u,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s)))).next((m=>(r=m,l=Date.now(),this.removeTargets(t,r,n)))).next((m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(t,r)))).next((m=>(f=Date.now(),lr()<=ft.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function PT(e,t){return new CT(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(){this.changes=new Xn((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Zt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,n)))).next((s=>(r!==null&&Es(r.mutation,s,be.empty(),St.now()),s)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.getLocalViewOfDocuments(t,r,ct()).next((()=>r))))}getLocalViewOfDocuments(t,n,r=ct()){const s=jn();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,r).next((i=>{let a=is();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(t,n){const r=jn();return this.populateOverlays(t,r,n).next((()=>this.computeViews(t,n,r,ct())))}populateOverlays(t,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,l)=>{n.set(a,l)}))}))}computeViews(t,n,r,s){let i=tn();const a=ys(),l=(function(){return ys()})();return n.forEach(((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Yn)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Es(d.mutation,f,d.mutation.getFieldMask(),St.now())):a.set(f.key,be.empty())})),this.recalculateAndSaveOverlays(t,i).next((u=>(u.forEach(((f,d)=>a.set(f,d))),n.forEach(((f,d)=>l.set(f,new DT(d,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(t,n){const r=ys();let s=new Ct(((a,l)=>a-l)),i=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((a=>{for(const l of a)l.keys().forEach((u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||be.empty();d=l.applyToLocalView(f,d),r.set(u,d);const m=(s.get(l.batchId)||ct()).add(u);s=s.insert(l.batchId,m)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,d=u.value,m=dd();d.forEach((E=>{if(!i.has(E)){const b=Ed(n.get(E),r.get(E));b!==null&&m.set(E,b),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,m))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,n,r,s){return(function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ld(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):D.resolve(jn());let l=Cs,u=i;return a.next((f=>D.forEach(f,((d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(t,d).next((E=>{u=u.insert(d,E)}))))).next((()=>this.populateOverlays(t,f,i))).next((()=>this.computeViews(t,u,f,ct()))).next((d=>({batchId:l,changes:fd(d)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Q(n)).next((r=>{let s=is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=is();return this.indexManager.getCollectionParents(t,i).next((l=>D.forEach(l,(u=>{const f=(function(m,E){return new Us(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next((d=>{d.forEach(((m,E)=>{a=a.insert(m,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s)))).next((a=>{i.forEach(((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Zt.newInvalidDocument(d)))}));let l=is();return a.forEach(((u,f)=>{const d=i.get(u);d!==void 0&&Es(d.mutation,f,be.empty(),St.now()),co(n,f)&&(l=l.insert(u,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return D.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Ue(s.createTime)}})(n)),D.resolve()}getNamedQuery(t,n){return D.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:IT(s.bundledQuery),readTime:Ue(s.readTime)}})(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.overlays=new Ct(Q.comparator),this.qr=new Map}getOverlay(t,n){return D.resolve(this.overlays.get(n))}getOverlays(t,n){const r=jn();return D.forEach(n,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,n,r){return r.forEach(((s,i)=>{this.St(t,n,i)})),D.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),D.resolve()}getOverlaysForCollection(t,n,r){const s=jn(),i=n.length+1,a=new Q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return D.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Ct(((f,d)=>f-d));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=jn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=jn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((f,d)=>l.set(f,d))),!(l.size()>=s)););return D.resolve(l)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new JE(n,r));let i=this.qr.get(n);i===void 0&&(i=ct(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.Qr=new Lt(jt.$r),this.Ur=new Lt(jt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const r=new jt(t,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,n){t.forEach((r=>this.addReference(r,n)))}removeReference(t,n){this.Gr(new jt(t,n))}zr(t,n){t.forEach((r=>this.removeReference(r,n)))}jr(t){const n=new Q(new wt([])),r=new jt(n,t),s=new jt(n,t+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new Q(new wt([])),r=new jt(n,t),s=new jt(n,t+1);let i=ct();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const n=new jt(t,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class jt{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return Q.comparator(t.key,n.key)||lt(t.Yr,n.Yr)}static Kr(t,n){return lt(t.Yr,n.Yr)||Q.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Lt(jt.$r)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new YE(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new jt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,n){return D.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?il:this.tr-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new jt(n,0),s=new jt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Lt(lt);return n.forEach((s=>{const i=new jt(s,0),a=new jt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),D.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const a=new jt(new Q(i),0);let l=new Lt(lt);return this.Zr.forEachWhile((u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.Yr)),!0)}),a),D.resolve(this.ti(l))}ti(t){const n=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(t,n){_t(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return D.forEach(n.mutations,(s=>{const i=new jt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,n){const r=new jt(n,0),s=this.Zr.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(t){this.ri=t,this.docs=(function(){return new Ct(Q.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(t,n){let r=tn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Zt.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=tn();const a=n.path,l=new Q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||hE(uE(d),r)<=0||(s.has(d.key)||co(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(t,n,r,s){tt(9500)}ii(t,n){return D.forEach(this.docs,(r=>n(r)))}newChangeBuffer(t){return new FT(this)}getSize(t){return D.resolve(this.size)}}class FT extends VT{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),D.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(t){this.persistence=t,this.si=new Xn((n=>ll(n)),cl),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.oi=0,this._i=new gl,this.targetCount=0,this.ai=Rr.ur()}forEachTarget(t,n){return this.si.forEach(((r,s)=>n(s))),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),D.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new Rr(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,D.resolve()}updateTargetData(t,n){return this.Pr(n),D.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,n){const r=this.si.get(n)||null;return D.resolve(r)}addMatchingKeys(t,n,r){return this._i.Wr(n,r),D.resolve()}removeMatchingKeys(t,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),D.resolve()}getMatchingKeysForTargetId(t,n){const r=this._i.Hr(n);return D.resolve(r)}containsKey(t,n){return D.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,n){this.ui={},this.overlays={},this.ci=new io(0),this.li=!1,this.li=!0,this.hi=new MT,this.referenceDelegate=t(this),this.Pi=new UT(this),this.indexManager=new wT,this.remoteDocumentCache=(function(s){return new LT(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new vT(n),this.Ii=new NT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new OT,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ui[t.toKey()];return r||(r=new kT(n,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,r){H("MemoryPersistence","Starting transaction:",t);const s=new BT(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,n){return D.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,n))))}}class BT extends dE{constructor(t){super(),this.currentSequenceNumber=t}}class _l{constructor(t){this.persistence=t,this.Ri=new gl,this.Vi=null}static mi(t){return new _l(t)}get fi(){if(this.Vi)return this.Vi;throw tt(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),D.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),D.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.fi,(r=>{const s=Q.fromPath(r);return this.gi(t,s).next((i=>{i||n.removeEntry(s,nt.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return D.or([()=>D.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class $i{constructor(t,n){this.persistence=t,this.pi=new Xn((r=>gE(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=PT(this,n)}static mi(t,n){return new $i(t,n)}Ei(){}di(t){return D.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>n.next((s=>r+s))))}wr(t){let n=0;return this.pr(t,(r=>{n++})).next((()=>n))}pr(t,n){return D.forEach(this.pi,((r,s)=>this.br(t,r,s).next((i=>i?D.resolve():n(s)))))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,n).next((l=>{l||(r++,i.removeEntry(a,nt.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),D.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),D.resolve()}removeReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),D.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),D.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=mi(t.data.value)),n}br(t,n,r){return D.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.pi.get(n);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Es=r,this.ds=s}static As(t,n){let r=ct(),s=ct();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yl(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return O_()?8:pE(x_())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ys(t,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(t,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new jT;return this.Ss(t,n,a).next((l=>{if(i.result=l,this.Vs)return this.bs(t,n,a,l.size)}))})).next((()=>i.result))}bs(t,n,r,s){return r.documentReadCount<this.fs?(lr()<=ft.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),D.resolve()):(lr()<=ft.DEBUG&&H("QueryEngine","Query:",cr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(lr()<=ft.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Le(n))):D.resolve())}ys(t,n){if(Fu(n))return D.resolve(null);let r=Le(n);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=ba(n,null,"F"),r=Le(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const a=ct(...i);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((u=>{const f=this.Ds(n,l);return this.Cs(n,f,a,u.readTime)?this.ys(t,ba(n,null,"F")):this.vs(t,f,n,u)}))))})))))}ws(t,n,r,s){return Fu(n)||s.isEqual(nt.min())?D.resolve(null):this.ps.getDocuments(t,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?D.resolve(null):(lr()<=ft.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cr(n)),this.vs(t,a,n,cE(s,Cs)).next((l=>l)))}))}Ds(t,n){let r=new Lt(ud(t));return n.forEach(((s,i)=>{co(t,i)&&(r=r.add(i))})),r}Cs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,n,r){return lr()<=ft.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",cr(n)),this.ps.getDocumentsMatchingQuery(t,n,In.min(),r)}vs(t,n,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="LocalStore",qT=3e8;class HT{constructor(t,n,r,s){this.persistence=t,this.Fs=n,this.serializer=s,this.Ms=new Ct(lt),this.xs=new Xn((i=>ll(i)),cl),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xT(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function zT(e,t,n,r){return new HT(e,t,n,r)}async function Nd(e,t){const n=rt(e);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let u=ct();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function KT(e,t){const n=rt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,u,f,d){const m=f.batch,E=m.keys();let b=D.resolve();return E.forEach((x=>{b=b.next((()=>d.getEntry(u,x))).next((M=>{const F=f.docVersions.get(x);_t(F!==null,48541),M.version.compareTo(F)<0&&(m.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),d.addEntry(M)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(u,m)))})(n,r,t,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=ct();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u})(t)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Od(e){const t=rt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function GT(e,t){const n=rt(e),r=t.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];t.targetChanges.forEach(((d,m)=>{const E=s.get(m);if(!E)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,m).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,m))));let b=E.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(m)!==null?b=b.withResumeToken(Gt.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(m,b),(function(M,F,K){return M.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=qT?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(E,b,d)&&l.push(n.Pi.updateTargetData(i,b))}));let u=tn(),f=ct();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(WT(i,a,t.documentUpdates).next((d=>{u=d.ks,f=d.qs}))),!r.isEqual(nt.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return D.waitFor(l).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,u,f))).next((()=>u))})).then((i=>(n.Ms=s,i)))}function WT(e,t,n){let r=ct(),s=ct();return n.forEach((i=>r=r.add(i))),t.getEntries(e,r).next((i=>{let a=tn();return n.forEach(((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(nt.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):H(El,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function QT(e,t){const n=rt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=il),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function XT(e,t){const n=rt(e);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,t).next((i=>i?(s=i,D.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new fn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(t,r.targetId)),r}))}async function Va(e,t,n){const r=rt(e),s=r.Ms.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!xr(a))throw a;H(El,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Yu(e,t,n){const r=rt(e);let s=nt.min(),i=ct();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,f,d){const m=rt(u),E=m.xs.get(d);return E!==void 0?D.resolve(m.Ms.get(E)):m.Pi.getTargetData(f,d)})(r,a,Le(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,n?s:nt.min(),n?i:ct()))).next((l=>(YT(r,ME(t),l),{documents:l,Qs:i})))))}function YT(e,t,n){let r=e.Os.get(t)||nt.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),e.Os.set(t,r)}class Ju{constructor(){this.activeTargetIds=jE()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class JT{constructor(){this.Mo=new Ju,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,r){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Ju,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="ConnectivityMonitor";class th{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(Zu,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){H(Zu,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai=null;function Da(){return ai===null?ai=(function(){return 268435456+Math.round(2147483648*Math.random())})():ai++,"0x"+ai.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="RestConnection",tv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ev{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ki?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,n,r,s,i){const a=Da(),l=this.zo(t,n.toUriEncodedString());H(Xo,`Sending RPC '${t}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:f}=new URL(l),d=el(f);return this.Jo(t,l,u,r,d).then((m=>(H(Xo,`Received RPC '${t}' ${a}: `,m),m)),(m=>{throw Ir(Xo,`RPC '${t}' ${a} failed with error: `,m,"url: ",l,"request:",r),m}))}Ho(t,n,r,s,i,a){return this.Go(t,n,r,s,i)}jo(t,n,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}zo(t,n){const r=tv[t];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class rv extends ev{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,s,i){const a=Da();return new Promise(((l,u)=>{const f=new Lf;f.setWithCredentials(!0),f.listenOnce(Ff.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case pi.NO_ERROR:const m=f.getResponseJson();H(Xt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),l(m);break;case pi.TIMEOUT:H(Xt,`RPC '${t}' ${a} timed out`),u(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:const E=f.getStatus();if(H(Xt,`RPC '${t}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let b=f.getResponseJson();Array.isArray(b)&&(b=b[0]);const x=b?.error;if(x&&x.status&&x.message){const M=(function(K){const W=K.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(W)>=0?W:V.UNKNOWN})(x.status);u(new z(M,x.message))}else u(new z(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new z(V.UNAVAILABLE,"Connection failed."));break;default:tt(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{H(Xt,`RPC '${t}' ${a} completed.`)}}));const d=JSON.stringify(s);H(Xt,`RPC '${t}' ${a} sending request:`,s),f.send(n,"POST",d,r,15)}))}T_(t,n,r){const s=Da(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=jf(),l=Bf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");H(Xt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const m=a.createWebChannel(d,u);this.I_(m);let E=!1,b=!1;const x=new nv({Yo:F=>{b?H(Xt,`Not sending because RPC '${t}' stream ${s} is closed:`,F):(E||(H(Xt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),E=!0),H(Xt,`RPC '${t}' stream ${s} sending:`,F),m.send(F))},Zo:()=>m.close()}),M=(F,K,W)=>{F.listen(K,(Y=>{try{W(Y)}catch(G){setTimeout((()=>{throw G}),0)}}))};return M(m,ss.EventType.OPEN,(()=>{b||(H(Xt,`RPC '${t}' stream ${s} transport opened.`),x.o_())})),M(m,ss.EventType.CLOSE,(()=>{b||(b=!0,H(Xt,`RPC '${t}' stream ${s} transport closed`),x.a_(),this.E_(m))})),M(m,ss.EventType.ERROR,(F=>{b||(b=!0,Ir(Xt,`RPC '${t}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),x.a_(new z(V.UNAVAILABLE,"The operation could not be completed")))})),M(m,ss.EventType.MESSAGE,(F=>{if(!b){const K=F.data[0];_t(!!K,16349);const W=K,Y=W?.error||W[0]?.error;if(Y){H(Xt,`RPC '${t}' stream ${s} received error:`,Y);const G=Y.status;let ut=(function(g){const T=Dt[g];if(T!==void 0)return vd(T)})(G),Et=Y.message;ut===void 0&&(ut=V.INTERNAL,Et="Unknown error status: "+G+" with message "+Y.message),b=!0,x.a_(new z(ut,Et)),m.close()}else H(Xt,`RPC '${t}' stream ${s} received:`,K),x.u_(K)}})),M(l,Uf.STAT_EVENT,(F=>{F.stat===ya.PROXY?H(Xt,`RPC '${t}' stream ${s} detected buffering proxy`):F.stat===ya.NOPROXY&&H(Xt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{x.__()}),0),x}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function Yo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e){return new aT(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="PersistentStream";class kd{constructor(t,n,r,s,i,a,l,u){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Md(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Ze(n.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{t((()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,n){const r=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return H(eh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(H(eh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sv extends kd{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=uT(this.serializer,t),r=(function(i){if(!("targetChange"in i))return nt.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?nt.min():a.readTime?Ue(a.readTime):nt.min()})(t);return this.listener.H_(n,r)}Y_(t){const n={};n.database=Pa(this.serializer),n.addTarget=(function(i,a){let l;const u=a.target;if(l=wa(u)?{documents:dT(i,u)}:{query:pT(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ad(i,a.resumeToken);const f=Ra(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(nt.min())>0){l.readTime=ji(i,a.snapshotVersion.toTimestamp());const f=Ra(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,t);const r=gT(this.serializer,t);r&&(n.labels=r),this.q_(n)}Z_(t){const n={};n.database=Pa(this.serializer),n.removeTarget=t,this.q_(n)}}class iv extends kd{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return _t(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,_t(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){_t(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=fT(t.writeResults,t.commitTime),r=Ue(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=Pa(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((r=>hT(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{}class av extends ov{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(t,Sa(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(V.UNKNOWN,i.toString())}))}Ho(t,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,Sa(n,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(V.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class lv{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ze(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="RemoteStore";class cv{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Jn(this)&&(H(Gn,"Restarting streams for network reachability change."),await(async function(u){const f=rt(u);f.Ea.add(4),await $s(f),f.Ra.set("Unknown"),f.Ea.delete(4),await mo(f)})(this))}))})),this.Ra=new lv(r,s)}}async function mo(e){if(Jn(e))for(const t of e.da)await t(!0)}async function $s(e){for(const t of e.da)await t(!1)}function Ld(e,t){const n=rt(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),wl(n)?Il(n):Nr(n).O_()&&vl(n,t))}function Tl(e,t){const n=rt(e),r=Nr(n);n.Ia.delete(t),r.O_()&&Fd(n,t),n.Ia.size===0&&(r.O_()?r.L_():Jn(n)&&n.Ra.set("Unknown"))}function vl(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Nr(e).Y_(t)}function Fd(e,t){e.Va.Ue(t),Nr(e).Z_(t)}function Il(e){e.Va=new rT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Nr(e).start(),e.Ra.ua()}function wl(e){return Jn(e)&&!Nr(e).x_()&&e.Ia.size>0}function Jn(e){return rt(e).Ea.size===0}function Ud(e){e.Va=void 0}async function uv(e){e.Ra.set("Online")}async function hv(e){e.Ia.forEach(((t,n)=>{vl(e,t)}))}async function fv(e,t){Ud(e),wl(e)?(e.Ra.ha(t),Il(e)):e.Ra.set("Unknown")}async function dv(e,t,n){if(e.Ra.set("Online"),t instanceof wd&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(e,t)}catch(r){H(Gn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await qi(e,r)}else if(t instanceof yi?e.Va.Ze(t):t instanceof Id?e.Va.st(t):e.Va.tt(t),!n.isEqual(nt.min()))try{const r=await Od(e.localStore);n.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(f);d&&i.Ia.set(f,d.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,f)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Gt.EMPTY_BYTE_STRING,d.snapshotVersion)),Fd(i,u);const m=new fn(d.target,u,f,d.sequenceNumber);vl(i,m)})),i.remoteSyncer.applyRemoteEvent(l)})(e,n)}catch(r){H(Gn,"Failed to raise snapshot:",r),await qi(e,r)}}async function qi(e,t,n){if(!xr(t))throw t;e.Ea.add(1),await $s(e),e.Ra.set("Offline"),n||(n=()=>Od(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{H(Gn,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await mo(e)}))}function Bd(e,t){return t().catch((n=>qi(e,n,t)))}async function go(e){const t=rt(e),n=Rn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:il;for(;pv(t);)try{const s=await QT(t.localStore,r);if(s===null){t.Ta.length===0&&n.L_();break}r=s.batchId,mv(t,s)}catch(s){await qi(t,s)}jd(t)&&$d(t)}function pv(e){return Jn(e)&&e.Ta.length<10}function mv(e,t){e.Ta.push(t);const n=Rn(e);n.O_()&&n.X_&&n.ea(t.mutations)}function jd(e){return Jn(e)&&!Rn(e).x_()&&e.Ta.length>0}function $d(e){Rn(e).start()}async function gv(e){Rn(e).ra()}async function _v(e){const t=Rn(e);for(const n of e.Ta)t.ea(n.mutations)}async function yv(e,t,n){const r=e.Ta.shift(),s=dl.from(r,t,n);await Bd(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await go(e)}async function Ev(e,t){t&&Rn(e).X_&&await(async function(r,s){if((function(a){return tT(a)&&a!==V.ABORTED})(s.code)){const i=r.Ta.shift();Rn(r).B_(),await Bd(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await go(r)}})(e,t),jd(e)&&$d(e)}async function nh(e,t){const n=rt(e);n.asyncQueue.verifyOperationInProgress(),H(Gn,"RemoteStore received new credentials");const r=Jn(n);n.Ea.add(3),await $s(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await mo(n)}async function Tv(e,t){const n=rt(e);t?(n.Ea.delete(2),await mo(n)):t||(n.Ea.add(2),await $s(n),n.Ra.set("Unknown"))}function Nr(e){return e.ma||(e.ma=(function(n,r,s){const i=rt(n);return i.sa(),new sv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(e.datastore,e.asyncQueue,{Xo:uv.bind(null,e),t_:hv.bind(null,e),r_:fv.bind(null,e),H_:dv.bind(null,e)}),e.da.push((async t=>{t?(e.ma.B_(),wl(e)?Il(e):e.Ra.set("Unknown")):(await e.ma.stop(),Ud(e))}))),e.ma}function Rn(e){return e.fa||(e.fa=(function(n,r,s){const i=rt(n);return i.sa(),new iv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:gv.bind(null,e),r_:Ev.bind(null,e),ta:_v.bind(null,e),na:yv.bind(null,e)}),e.da.push((async t=>{t?(e.fa.B_(),await go(e)):(await e.fa.stop(),e.Ta.length>0&&(H(Gn,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))}))),e.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Al(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bl(e,t){if(Ze("AsyncQueue",`${t}: ${e}`),xr(e))return new z(V.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{static emptySet(t){return new Tr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=is(),this.sortedSet=new Ct(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,r)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Tr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Tr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.ga=new Ct(Q.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):tt(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,r)=>{t.push(r)})),t}}class Sr{constructor(t,n,r,s,i,a,l,u,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach((l=>{a.push({type:0,doc:l})})),new Sr(t,n,Tr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Iv{constructor(){this.queries=sh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=rt(n),i=s.queries;s.queries=sh(),i.forEach(((a,l)=>{for(const u of l.Sa)u.onError(r)}))})(this,new z(V.ABORTED,"Firestore shutting down"))}}function sh(){return new Xn((e=>cd(e)),lo)}async function qd(e,t){const n=rt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new vv,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=bl(a,`Initialization of query '${cr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.Sa.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&Rl(n)}async function Hd(e,t){const n=rt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wv(e,t){const n=rt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Rl(n)}function Av(e,t,n){const r=rt(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function Rl(e){e.Ca.forEach((t=>{t.next()}))}var xa,ih;(ih=xa||(xa={})).Ma="default",ih.Cache="cache";class zd{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Sr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Sr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==xa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.key=t}}class Gd{constructor(t){this.key=t}}class bv{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ct(),this.mutatedKeys=ct(),this.eu=ud(t),this.tu=new Tr(this.eu)}get nu(){return this.Ya}ru(t,n){const r=n?n.iu:new rh,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,m)=>{const E=s.get(d),b=co(this.query,m)?m:null,x=!!E&&this.mutatedKeys.has(E.key),M=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let F=!1;E&&b?E.data.isEqual(b.data)?x!==M&&(r.track({type:3,doc:b}),F=!0):this.su(E,b)||(r.track({type:2,doc:b}),F=!0,(u&&this.eu(b,u)>0||f&&this.eu(b,f)<0)&&(l=!0)):!E&&b?(r.track({type:0,doc:b}),F=!0):E&&!b&&(r.track({type:1,doc:E}),F=!0,(u||f)&&(l=!0)),F&&(b?(a=a.add(b),i=M?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((d,m)=>(function(b,x){const M=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tt(20277,{Rt:F})}};return M(b)-M(x)})(d.type,m.type)||this.eu(d.doc,m.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,f=u!==this.Za;return this.Za=u,a.length!==0||f?{snapshot:new Sr(this.query,t.tu,i,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new rh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=ct(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return t.forEach((r=>{this.Xa.has(r)||n.push(new Gd(r))})),this.Xa.forEach((r=>{t.has(r)||n.push(new Kd(r))})),n}cu(t){this.Ya=t.Qs,this.Xa=ct();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Sr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Sl="SyncEngine";class Rv{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Sv{constructor(t){this.key=t,this.hu=!1}}class Cv{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Xn((l=>cd(l)),lo),this.Iu=new Map,this.Eu=new Set,this.du=new Ct(Q.comparator),this.Au=new Map,this.Ru=new gl,this.Vu={},this.mu=new Map,this.fu=Rr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Pv(e,t,n=!0){const r=Zd(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Wd(r,t,n,!0),s}async function Vv(e,t){const n=Zd(e);await Wd(n,t,!0,!1)}async function Wd(e,t,n,r){const s=await XT(e.localStore,Le(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Dv(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&Ld(e.remoteStore,s),l}async function Dv(e,t,n,r,s){e.pu=(m,E,b)=>(async function(M,F,K,W){let Y=F.view.ru(K);Y.Cs&&(Y=await Yu(M.localStore,F.query,!1).then((({documents:I})=>F.view.ru(I,Y))));const G=W&&W.targetChanges.get(F.targetId),ut=W&&W.targetMismatches.get(F.targetId)!=null,Et=F.view.applyChanges(Y,M.isPrimaryClient,G,ut);return ah(M,F.targetId,Et.au),Et.snapshot})(e,m,E,b);const i=await Yu(e.localStore,t,!0),a=new bv(t,i.Qs),l=a.ru(i.documents),u=js.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(l,e.isPrimaryClient,u);ah(e,n,f.au);const d=new Rv(t,n,a);return e.Tu.set(t,d),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),f.snapshot}async function xv(e,t,n){const r=rt(e),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!lo(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Va(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Tl(r.remoteStore,s.targetId),Na(r,s.targetId)})).catch(Dr)):(Na(r,s.targetId),await Va(r.localStore,s.targetId,!0))}async function Nv(e,t){const n=rt(e),r=n.Tu.get(t),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tl(n.remoteStore,r.targetId))}async function Ov(e,t,n){const r=jv(e);try{const s=await(function(a,l){const u=rt(a),f=St.now(),d=l.reduce(((b,x)=>b.add(x.key)),ct());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let x=tn(),M=ct();return u.Ns.getEntries(b,d).next((F=>{x=F,x.forEach(((K,W)=>{W.isValidDocument()||(M=M.add(K))}))})).next((()=>u.localDocuments.getOverlayedDocuments(b,x))).next((F=>{m=F;const K=[];for(const W of l){const Y=QE(W,m.get(W.key).overlayedDocument);Y!=null&&K.push(new Yn(W.key,Y,ed(Y.value.mapValue),Fe.exists(!0)))}return u.mutationQueue.addMutationBatch(b,f,K,l)})).next((F=>{E=F;const K=F.applyToLocalDocumentSet(m,M);return u.documentOverlayCache.saveOverlays(b,F.batchId,K)}))})).then((()=>({batchId:E.batchId,changes:fd(m)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let f=a.Vu[a.currentUser.toKey()];f||(f=new Ct(lt)),f=f.insert(l,u),a.Vu[a.currentUser.toKey()]=f})(r,s.batchId,n),await qs(r,s.changes),await go(r.remoteStore)}catch(s){const i=bl(s,"Failed to persist write");n.reject(i)}}async function Qd(e,t){const n=rt(e);try{const r=await GT(n.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(_t(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?_t(a.hu,14607):s.removedDocuments.size>0&&(_t(a.hu,42227),a.hu=!1))})),await qs(n,r,t)}catch(r){await Dr(r)}}function oh(e,t,n){const r=rt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=rt(a);u.onlineState=l;let f=!1;u.queries.forEach(((d,m)=>{for(const E of m.Sa)E.va(l)&&(f=!0)})),f&&Rl(u)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Mv(e,t,n){const r=rt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new Ct(Q.comparator);a=a.insert(i,Zt.newNoDocument(i,nt.min()));const l=ct().add(i),u=new fo(nt.min(),new Map,new Ct(lt),a,l);await Qd(r,u),r.du=r.du.remove(i),r.Au.delete(t),Cl(r)}else await Va(r.localStore,t,!1).then((()=>Na(r,t,n))).catch(Dr)}async function kv(e,t){const n=rt(e),r=t.batch.batchId;try{const s=await KT(n.localStore,t);Yd(n,r,null),Xd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qs(n,s)}catch(s){await Dr(s)}}async function Lv(e,t,n){const r=rt(e);try{const s=await(function(a,l){const u=rt(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let d;return u.mutationQueue.lookupMutationBatch(f,l).next((m=>(_t(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(f,m)))).next((()=>u.mutationQueue.performConsistencyCheck(f))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d))).next((()=>u.localDocuments.getDocuments(f,d)))}))})(r.localStore,t);Yd(r,t,n),Xd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await qs(r,s)}catch(s){await Dr(s)}}function Xd(e,t){(e.mu.get(t)||[]).forEach((n=>{n.resolve()})),e.mu.delete(t)}function Yd(e,t,n){const r=rt(e);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Na(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach((r=>{e.Ru.containsKey(r)||Jd(e,r)}))}function Jd(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);n!==null&&(Tl(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),Cl(e))}function ah(e,t,n){for(const r of n)r instanceof Kd?(e.Ru.addReference(r.key,t),Fv(e,r)):r instanceof Gd?(H(Sl,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||Jd(e,r.key)):tt(19791,{wu:r})}function Fv(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(H(Sl,"New document in limbo: "+n),e.Eu.add(r),Cl(e))}function Cl(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new Q(wt.fromString(t)),r=e.fu.next();e.Au.set(r,new Sv(n)),e.du=e.du.insert(n,r),Ld(e.remoteStore,new fn(Le(ul(n.path)),r,"TargetPurposeLimboResolution",io.ce))}}async function qs(e,t,n){const r=rt(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,u)=>{a.push(r.pu(u,t,n).then((f=>{if((f||n)&&r.isPrimaryClient){const d=f?!f.fromCache:n?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(f){s.push(f);const d=yl.As(u.targetId,f);i.push(d)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,f){const d=rt(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>D.forEach(f,(E=>D.forEach(E.Es,(b=>d.persistence.referenceDelegate.addReference(m,E.targetId,b))).next((()=>D.forEach(E.ds,(b=>d.persistence.referenceDelegate.removeReference(m,E.targetId,b)))))))))}catch(m){if(!xr(m))throw m;H(El,"Failed to update sequence numbers: "+m)}for(const m of f){const E=m.targetId;if(!m.fromCache){const b=d.Ms.get(E),x=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(x);d.Ms=d.Ms.insert(E,M)}}})(r.localStore,i))}async function Uv(e,t){const n=rt(e);if(!n.currentUser.isEqual(t)){H(Sl,"User change. New user:",t.toKey());const r=await Nd(n.localStore,t);n.currentUser=t,(function(i,a){i.mu.forEach((l=>{l.forEach((u=>{u.reject(new z(V.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await qs(n,r.Ls)}}function Bv(e,t){const n=rt(e),r=n.Au.get(t);if(r&&r.hu)return ct().add(r.key);{let s=ct();const i=n.Iu.get(t);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Zd(e){const t=rt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Qd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Mv.bind(null,t),t.Pu.H_=wv.bind(null,t.eventManager),t.Pu.yu=Av.bind(null,t.eventManager),t}function jv(e){const t=rt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lv.bind(null,t),t}class Hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=po(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return zT(this.persistence,new $T,t.initialUser,this.serializer)}Cu(t){return new xd(_l.mi,this.serializer)}Du(t){return new JT}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hi.provider={build:()=>new Hi};class $v extends Hi{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){_t(this.persistence.referenceDelegate instanceof $i,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ST(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?ae.withCacheSize(this.cacheSizeBytes):ae.DEFAULT;return new xd((r=>$i.mi(r,n)),this.serializer)}}class Oa{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uv.bind(null,this.syncEngine),await Tv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Iv})()}createDatastore(t){const n=po(t.databaseInfo.databaseId),r=(function(i){return new rv(i)})(t.databaseInfo);return(function(i,a,l,u){return new av(i,a,l,u)})(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return(function(r,s,i,a,l){return new cv(r,s,i,a,l)})(this.localStore,this.datastore,t.asyncQueue,(n=>oh(this.syncEngine,n,0)),(function(){return th.v()?new th:new ZT})())}createSyncEngine(t,n){return(function(s,i,a,l,u,f,d){const m=new Cv(s,i,a,l,u,f);return d&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=rt(n);H(Gn,"RemoteStore shutting down."),r.Ea.add(5),await $s(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Oa.provider={build:()=>new Oa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ze("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="FirestoreClient";class qv{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Yt.UNAUTHENTICATED,this.clientId=sl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{H(Sn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(H(Sn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=bl(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Jo(e,t){e.asyncQueue.verifyOperationInProgress(),H(Sn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Nd(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function lh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Hv(e);H(Sn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((r=>nh(t.remoteStore,r))),e.setAppCheckTokenChangeListener(((r,s)=>nh(t.remoteStore,s))),e._onlineComponents=t}async function Hv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H(Sn,"Using user provided OfflineComponentProvider");try{await Jo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ir("Error using user provided cache. Falling back to memory cache: "+n),await Jo(e,new Hi)}}else H(Sn,"Using default OfflineComponentProvider"),await Jo(e,new $v(void 0));return e._offlineComponents}async function ep(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H(Sn,"Using user provided OnlineComponentProvider"),await lh(e,e._uninitializedComponentsProvider._online)):(H(Sn,"Using default OnlineComponentProvider"),await lh(e,new Oa))),e._onlineComponents}function zv(e){return ep(e).then((t=>t.syncEngine))}async function Ma(e){const t=await ep(e),n=t.eventManager;return n.onListen=Pv.bind(null,t.syncEngine),n.onUnlisten=xv.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Vv.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Nv.bind(null,t.syncEngine),n}function Kv(e,t,n={}){const r=new _n;return e.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,f){const d=new tp({next:E=>{d.Nu(),a.enqueueAndForget((()=>Hd(i,m))),E.fromCache&&u.source==="server"?f.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(E)},error:E=>f.reject(E)}),m=new zd(l,d,{includeMetadataChanges:!0,qa:!0});return qd(i,m)})(await Ma(e),e.asyncQueue,t,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="firestore.googleapis.com",uh=!0;class hh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rp,this.ssl=uh}else this.host=t.host,this.ssl=t.ssl??uh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Dd;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<bT)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=np(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _o{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Jy;switch(r.type){case"firstParty":return new nE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=ch.get(n);r&&(H("ComponentProvider","Removing Datastore"),ch.delete(n),r.terminate())})(this),Promise.resolve()}}function Gv(e,t,n,r={}){e=yn(e,_o);const s=el(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&(S_(`https://${l}`),D_("Firestore",!0)),i.host!==rp&&i.host!==l&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!xi(u,a)&&(e._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=Yt.MOCK_USER;else{f=C_(r.mockUserToken,e._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Yt(m)}e._authCredentials=new Zy(new qf(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Zn(this.firestore,t,this._query)}}class kt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}toJSON(){return{type:kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Fs(n,kt._jsonSchema))return new kt(t,r||null,new Q(wt.fromString(n.referencePath)))}}kt._jsonSchemaVersion="firestore/documentReference/1.0",kt._jsonSchema={type:Nt("string",kt._jsonSchemaVersion),referencePath:Nt("string")};class En extends Zn{constructor(t,n,r){super(t,n,ul(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new Q(t))}withConverter(t){return new En(this.firestore,t,this._path)}}function Ei(e,t,...n){if(e=zn(e),Hf("collection","path",t),e instanceof _o){const r=wt.fromString(t,...n);return Au(r),new En(e,null,r)}{if(!(e instanceof kt||e instanceof En))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(wt.fromString(t,...n));return Au(r),new En(e.firestore,null,r)}}function sp(e,t,...n){if(e=zn(e),arguments.length===1&&(t=sl.newId()),Hf("doc","path",t),e instanceof _o){const r=wt.fromString(t,...n);return wu(r),new kt(e,null,new Q(r))}{if(!(e instanceof kt||e instanceof En))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(wt.fromString(t,...n));return wu(r),new kt(e.firestore,e instanceof En?e.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="AsyncQueue";class dh{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Md(this,"async_queue_retry"),this._c=()=>{const r=Yo();r&&H(fh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=Yo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Yo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new _n;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!xr(t))throw t;H(fh,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ze("INTERNAL UNHANDLED ERROR: ",ph(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=Al.createAndSchedule(this,t,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&tt(47125,{Pc:ph(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function ph(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(e){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(e,["next","error","complete"])}class Cr extends _o{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new dh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new dh(t),this._firestoreClient=void 0,await t}}}function Wv(e,t){const n=typeof e=="object"?e:jy(),r=typeof e=="string"?e:ki,s=ky(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=b_("firestore");i&&Gv(s,...i)}return s}function Pl(e){if(e._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||Qv(e),e._firestoreClient}function Qv(e){const t=e._freezeSettings(),n=(function(s,i,a,l){return new EE(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,np(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(e._databaseId,e._app?.options.appId||"",e._persistenceKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new qv(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Te(Gt.fromBase64String(t))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Te(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Te._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Fs(t,Te._jsonSchema))return Te.fromBase64String(t.bytes)}}Te._jsonSchemaVersion="firestore/bytes/1.0",Te._jsonSchema={type:Nt("string",Te._jsonSchemaVersion),bytes:Nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(t){if(Fs(t,Be._jsonSchema))return new Be(t.latitude,t.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:Nt("string",Be._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:je._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Fs(t,je._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new je(t.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}je._jsonSchemaVersion="firestore/vectorValue/1.0",je._jsonSchema={type:Nt("string",je._jsonSchemaVersion),vectorValues:Nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=/^__.*__$/;class Yv{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Yn(t,this.data,this.fieldMask,n,this.fieldTransforms):new Bs(t,this.data,n,this.fieldTransforms)}}function ip(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tt(40011,{Ac:e})}}class xl{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new xl({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){const n=this.path?.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return zi(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(ip(this.Ac)&&Xv.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Jv{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||po(t)}Cc(t,n,r,s=!1){return new xl({Ac:t,methodName:n,Dc:r,path:Kt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function op(e){const t=e._freezeSettings(),n=po(e._databaseId);return new Jv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Zv(e,t,n,r,s,i={}){const a=e.Cc(i.merge||i.mergeFields?2:0,t,n,s);cp("Data must be an object, but it was:",a,r);const l=ap(r,a);let u,f;if(i.merge)u=new be(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const E=eI(t,m,n);if(!a.contains(E))throw new z(V.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);rI(d,E)||d.push(E)}u=new be(d),f=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,f=a.fieldTransforms;return new Yv(new Ee(l),u,f)}class Nl extends Dl{_toFieldTransform(t){return new zE(t.path,new xs)}isEqual(t){return t instanceof Nl}}function tI(e,t,n,r=!1){return Ol(n,e.Cc(r?4:3,t))}function Ol(e,t){if(lp(e=zn(e)))return cp("Unsupported field value:",t,e),ap(e,t);if(e instanceof Dl)return(function(r,s){if(!ip(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let u=Ol(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(e,t)}return(function(r,s){if((r=zn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $E(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=St.fromDate(r);return{timestampValue:ji(s.serializer,i)}}if(r instanceof St){const i=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ji(s.serializer,i)}}if(r instanceof Be)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Te)return{bytesValue:Ad(s.serializer,r._byteString)};if(r instanceof kt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ml(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof je)return(function(a,l){return{mapValue:{fields:{[Zf]:{stringValue:td},[Li]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return hl(l.serializer,f)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${so(r)}`)})(e,t)}function ap(e,t){const n={};return Gf(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qn(e,((r,s)=>{const i=Ol(s,t.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function lp(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof St||e instanceof Be||e instanceof Te||e instanceof kt||e instanceof Dl||e instanceof je)}function cp(e,t,n){if(!lp(n)||!zf(n)){const r=so(n);throw r==="an object"?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function eI(e,t,n){if((t=zn(t))instanceof Vl)return t._internalPath;if(typeof t=="string")return up(e,t);throw zi("Field path arguments must be of type string or ",e,!1,void 0,n)}const nI=new RegExp("[~\\*/\\[\\]]");function up(e,t,n){if(t.search(nI)>=0)throw zi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vl(...t.split("."))._internalPath}catch{throw zi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zi(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new z(V.INVALID_ARGUMENT,l+e+u)}function rI(e,t){return e.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new sI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ml("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sI extends hp{data(){return super.data()}}function Ml(e,t){return typeof t=="string"?up(e,t):t instanceof Vl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kl{}class iI extends kl{}function dp(e,t,...n){let r=[];t instanceof kl&&r.push(t),r=r.concat(n),(function(i){const a=i.filter((u=>u instanceof Ll)).length,l=i.filter((u=>u instanceof yo)).length;if(a>1||a>0&&l>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)e=s._apply(e);return e}class yo extends iI{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new yo(t,n,r)}_apply(t){const n=this._parse(t);return pp(t._query,n),new Zn(t.firestore,t.converter,Aa(t._query,n))}_parse(t){const n=op(t.firestore);return(function(i,a,l,u,f,d,m){let E;if(f.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){_h(m,d);const x=[];for(const M of m)x.push(gh(u,i,M));E={arrayValue:{values:x}}}else E=gh(u,i,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||_h(m,d),E=tI(l,a,m,d==="in"||d==="not-in");return xt.create(f,d,E)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Zo(e,t,n){const r=t,s=Ml("where",e);return yo._create(s,r,n)}class Ll extends kl{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ll(t,n)}_parse(t){const n=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Se.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)pp(a,u),a=Aa(a,u)})(t._query,n),new Zn(t.firestore,t.converter,Aa(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gh(e,t,n){if(typeof(n=zn(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ld(t)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(wt.fromString(n));if(!Q.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xu(e,new Q(r))}if(n instanceof kt)return xu(e,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${so(n)}.`)}function _h(e,t){if(!Array.isArray(e)||e.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function pp(e,t){const n=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(e.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class oI{convertValue(t,n="none"){switch(bn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(An(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw tt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Qn(t,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(t){const n=t.fields?.[Li].arrayValue?.values?.map((r=>Vt(r.doubleValue)));return new je(n)}convertGeoPoint(t){return new Be(Vt(t.latitude),Vt(t.longitude))}convertArray(t,n){return(t.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ao(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ps(t));default:return null}}convertTimestamp(t){const n=wn(t);return new St(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=wt.fromString(t);_t(Vd(r),9688,{name:t});const s=new Vs(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||Ze(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(e,t,n){let r;return r=e?e.toFirestore(t):t,r}class as{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qn extends hp{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Ml("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=qn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qn._jsonSchemaVersion="firestore/documentSnapshot/1.0",qn._jsonSchema={type:Nt("string",qn._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Ti extends qn{data(t={}){return super.data(t)}}class Hn{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new as(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((r=>{t.call(n,new Ti(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new Ti(s._firestore,s._userDataWriter,l.doc.key,l.doc,new as(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new Ti(s._firestore,s._userDataWriter,l.doc.key,l.doc,new as(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:lI(l.type),doc:u,oldIndex:f,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Hn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=sl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function lI(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tt(61501,{type:e})}}Hn._jsonSchemaVersion="firestore/querySnapshot/1.0",Hn._jsonSchema={type:Nt("string",Hn._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Fl extends oI{constructor(t){super(),this.firestore=t}convertBytes(t){return new Te(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function cI(e){e=yn(e,Zn);const t=yn(e.firestore,Cr),n=Pl(t),r=new Fl(t);return fp(e._query),Kv(n,e._query).then((s=>new Hn(t,r,e,s)))}function uI(e){return mp(yn(e.firestore,Cr),[new fl(e._key,Fe.none())])}function yh(e,t){const n=yn(e.firestore,Cr),r=sp(e),s=aI(e.converter,t);return mp(n,[Zv(op(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Fe.exists(!1))]).then((()=>r))}function hI(e,...t){e=zn(e);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||mh(t[r])||(n=t[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(mh(t[r])){const u=t[r];t[r]=u.next?.bind(u),t[r+1]=u.error?.bind(u),t[r+2]=u.complete?.bind(u)}let i,a,l;if(e instanceof kt)a=yn(e.firestore,Cr),l=ul(e._key.path),i={next:u=>{t[r]&&t[r](fI(a,e,u))},error:t[r+1],complete:t[r+2]};else{const u=yn(e,Zn);a=yn(u.firestore,Cr),l=u._query;const f=new Fl(a);i={next:d=>{t[r]&&t[r](new Hn(a,f,u,d))},error:t[r+1],complete:t[r+2]},fp(e._query)}return(function(f,d,m,E){const b=new tp(E),x=new zd(d,b,m);return f.asyncQueue.enqueueAndForget((async()=>qd(await Ma(f),x))),()=>{b.Nu(),f.asyncQueue.enqueueAndForget((async()=>Hd(await Ma(f),x)))}})(Pl(a),l,s,i)}function mp(e,t){return(function(r,s){const i=new _n;return r.asyncQueue.enqueueAndForget((async()=>Ov(await zv(r),s,i))),i.promise})(Pl(e),t)}function fI(e,t,n){const r=n.docs.get(t._key),s=new Fl(e);return new qn(e,s,t._key,r,new as(n.hasPendingWrites,n.fromCache),t.converter)}function dI(){return new Nl("serverTimestamp")}(function(t,n=!0){(function(s){Vr=s})(By),Oi(new Rs("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Cr(new tE(r.getProvider("auth-internal")),new rE(a,r.getProvider("app-check-internal")),(function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(f.options.projectId,d)})(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Er(Eu,Tu,t),Er(Eu,Tu,"esm2020")})();var pI="firebase",mI="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er(pI,mI,"app");const gI={apiKey:"AIzaSyDwgp7zucOqwH46QmmYeHecPx2yJZzturA",authDomain:"desk-res-64ef1.firebaseapp.com",projectId:"desk-res-64ef1",storageBucket:"desk-res-64ef1.firebasestorage.app",messagingSenderId:"1062582306383",appId:"1:1062582306383:web:52ac19ea820ab689194c3a",measurementId:"G-RJFH1ZTTND"},_I=Nf(gI),Ts=Wv(_I),Eo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},yI={data(){return{userName:"",deskId:1,date:"",period:""}},methods:{async submitReservation(){if(!this.userName||!this.date||!this.period){alert("Please fill in all fields.");return}localStorage.setItem("userName",this.userName);const e=dp(Ei(Ts,"reservations"),Zo("deskId","==",this.deskId),Zo("date","==",this.date),Zo("period","==",this.period));if(!(await cI(e)).empty){alert("This slot is already reserved. Please choose another period.");return}await yh(Ei(Ts,"reservations"),{deskId:this.deskId,userName:this.userName,date:this.date,period:this.period}),await yh(Ei(Ts,"logs"),{action:"created",userName:this.userName,deskId:this.deskId,date:this.date,period:this.period,timestamp:dI()}),this.userName="",this.deskId=1,this.date="",this.period="",this.$emit("reservation-added")}}},EI={class:"reservation-form"},TI={class:"form-row"},vI={class:"form-field"},II={class:"form-field"},wI=["value"],AI={class:"form-field"},bI={class:"form-field"};function RI(e,t,n,r,s,i){return de(),ye("div",EI,[st("form",{onSubmit:t[4]||(t[4]=c_((...a)=>i.submitReservation&&i.submitReservation(...a),["prevent"]))},[st("div",TI,[st("div",vI,[t[5]||(t[5]=st("label",null,"Name:",-1)),es(st("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s.userName=a),placeholder:"Enter your name",required:""},null,512),[[fa,s.userName]])]),st("div",II,[t[6]||(t[6]=st("label",null,"Desk:",-1)),es(st("select",{"onUpdate:modelValue":t[1]||(t[1]=a=>s.deskId=a),required:""},[(de(),ye(pe,null,ci(10,a=>st("option",{key:a,value:a},"Desk "+Un(a),9,wI)),64))],512),[[su,s.deskId]])]),st("div",AI,[t[7]||(t[7]=st("label",null,"Date:",-1)),es(st("input",{type:"date","onUpdate:modelValue":t[2]||(t[2]=a=>s.date=a),required:""},null,512),[[fa,s.date]])]),st("div",bI,[t[9]||(t[9]=st("label",null,"Period:",-1)),es(st("select",{"onUpdate:modelValue":t[3]||(t[3]=a=>s.period=a),required:""},[...t[8]||(t[8]=[st("option",{disabled:"",value:""},"Select period",-1),st("option",{value:"before"},"Before 1 PM",-1),st("option",{value:"after"},"After 1 PM",-1)])],512),[[su,s.period]])]),t[10]||(t[10]=st("button",{type:"submit",class:"submit-btn"},"Reserve",-1))])],32)])}const SI=Eo(yI,[["render",RI],["__scopeId","data-v-0d60189d"]]),CI={setup(){const e=Array.from({length:10},(E,b)=>b+1),t=ts(new Date().toISOString().slice(0,10)),n=ts([]),r=ts(null),s=E=>{const b=new Date(E),x=[];for(let M=0;M<7;M++){const F=new Date(b);F.setDate(b.getDate()+M),x.push(F.toISOString().slice(0,10))}return x},i=ts(s(t.value));let a=null;const l=()=>{a&&a();const E=dp(Ei(Ts,"reservations"));a=hI(E,b=>{n.value=b.docs.map(x=>({id:x.id,...x.data()}))})};return tf(l),hi(t,E=>{i.value=s(E),l()}),{desks:e,weekStart:t,weekDays:i,reservations:n,isReserved:(E,b,x)=>!!n.value.find(M=>M.deskId===E&&M.date===b&&M.period===x),getReservationName:(E,b,x)=>{const M=n.value.find(F=>F.deskId===E&&F.date===b&&F.period===x);return M?M.userName:""},openConfirmPopover:(E,b,x)=>{const M=n.value.find(F=>F.deskId===E&&F.date===b&&F.period===x);M&&(r.value={deskId:E,day:b,period:x,reservation:M})},confirmPopover:r,confirmDelete:async()=>{r.value&&(await uI(sp(Ts,"reservations",r.value.reservation.id)),r.value=null)}}}},PI={class:"week-view"},VI={class:"date-picker"},DI={class:"table-wrapper"},xI={class:"period-container"},NI=["onClick"],OI={class:"reservation-name"},MI=["onClick"],kI={class:"reservation-name"},LI={key:0,class:"confirm-popover"},FI={class:"buttons"};function UI(e,t,n,r,s,i){return de(),ye("div",PI,[t[9]||(t[9]=st("h3",null,"Weekly Desk Reservations",-1)),st("div",VI,[t[3]||(t[3]=st("label",null,"Select week (start date):",-1)),es(st("input",{type:"date","onUpdate:modelValue":t[0]||(t[0]=a=>r.weekStart=a)},null,512),[[fa,r.weekStart]])]),st("div",DI,[st("table",null,[st("thead",null,[st("tr",null,[t[4]||(t[4]=st("th",null,"Desk",-1)),(de(!0),ye(pe,null,ci(r.weekDays,a=>(de(),ye("th",{key:a},Un(a),1))),128))])]),st("tbody",null,[(de(!0),ye(pe,null,ci(r.desks,(a,l)=>(de(),ye("tr",{key:a,class:pr(`desk-row desk-color-${l}`)},[st("td",null,"Desk "+Un(a),1),(de(!0),ye(pe,null,ci(r.weekDays,u=>(de(),ye("td",{key:u,class:"day-cell"},[st("div",xI,[st("div",{class:pr(["slot",{reserved:r.isReserved(a,u,"before")}]),onClick:f=>r.openConfirmPopover(a,u,"before")},[t[5]||(t[5]=rs(" Before 1 PM ",-1)),st("span",OI,Un(r.getReservationName(a,u,"before")),1)],10,NI),st("div",{class:pr(["slot",{reserved:r.isReserved(a,u,"after")}]),onClick:f=>r.openConfirmPopover(a,u,"after")},[t[6]||(t[6]=rs(" After 1 PM ",-1)),st("span",kI,Un(r.getReservationName(a,u,"after")),1)],10,MI)])]))),128))],2))),128))])])]),r.confirmPopover?(de(),ye("div",LI,[st("p",null,[t[7]||(t[7]=rs(" Delete this reservation for ",-1)),st("strong",null,Un(r.confirmPopover.reservation.userName),1),t[8]||(t[8]=rs("? ",-1))]),st("div",FI,[st("button",{onClick:t[1]||(t[1]=(...a)=>r.confirmDelete&&r.confirmDelete(...a)),class:"delete"},"Yes"),st("button",{onClick:t[2]||(t[2]=a=>r.confirmPopover=null),class:"cancel"},"No")])])):Sg("",!0)])}const BI=Eo(CI,[["render",UI],["__scopeId","data-v-d020d3f2"]]),jI={components:{ReservationForm:SI,DayView:BI},methods:{refreshDayView(){this.$refs.dayView&&this.$refs.dayView.fetchReservations&&this.$refs.dayView.fetchReservations()}}},$I={class:"home"};function qI(e,t,n,r,s,i){const a=ia("ReservationForm"),l=ia("DayView");return de(),ye("div",$I,[t[0]||(t[0]=st("h1",null,"Jizoku: Nihonbashi desk reservation",-1)),Ie(a,{onReservationAdded:i.refreshDayView},null,8,["onReservationAdded"]),Ie(l,{ref:"dayView"},null,512)])}const HI=Eo(jI,[["render",qI]]),zI={components:{Home:HI}},KI={id:"app"};function GI(e,t,n,r,s,i){const a=ia("Home");return de(),ye("div",KI,[Ie(a)])}const WI=Eo(zI,[["render",GI]]);/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const QI=Symbol();var Eh;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Eh||(Eh={}));function XI(){const e=Yp(!0),t=e.run(()=>ts({}));let n=[],r=[];const s=qh({install(i){s._a=i,i.provide(QI,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const gp=f_(WI);gp.use(XI());gp.mount("#app");
