import{f as fe}from"./chunk-H2QFYA5F.js";import{Ca as L,Ec as oe,Fc as se,Gc as ie,Ja as Y,Jd as ue,Ka as P,La as q,Ma as S,Oa as H,Oc as k,Pc as ae,Qc as ce,Ra as g,Sa as v,Sc as f,Ta as W,Ua as X,Va as J,Wa as Q,Xa as ee,Ya as te,Za as ne,_ as y,_a as m,aa as l,da as N,eb as w,fa as c,ga as z,ja as E,jb as re,le as de,mb as M,oa as G,oe as _,qa as K,se as le}from"./chunk-4HLAVBW4.js";import{a as I,b as Z}from"./chunk-RGL3W33T.js";var U=class extends ce{constructor(){super(...arguments),this.supportsDOMEvents=!0}},F=class r extends U{static makeCurrent(){ae(new r)}onAndCancel(e,o,t){return e.addEventListener(o,t),()=>{e.removeEventListener(o,t)}}dispatchEvent(e,o){e.dispatchEvent(o)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,o){return o=o||this.getDefaultDocument(),o.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,o){return o==="window"?window:o==="document"?e:o==="body"?e.body:null}getBaseHref(e){let o=we();return o==null?null:Me(o)}resetBaseElement(){T=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return ue(document.cookie,e)}},T=null;function we(){return T=T||document.querySelector("base"),T?T.getAttribute("href"):null}function Me(r){return new URL(r,document.baseURI).pathname}var Te=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=l({token:e,factory:e.\u0275fac});let r=e;return r})(),A=new N(""),ye=(()=>{let e=class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(s=>{s.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,s){return this._findPluginFor(n).addEventListener(t,n,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new y(5101,!1);return this._eventNameToPlugin.set(t,n),n}};e.\u0275fac=function(n){return new(n||e)(c(A),c(M))},e.\u0275prov=l({token:e,factory:e.\u0275fac});let r=e;return r})(),R=class{constructor(e){this._doc=e}},j="ng-app-id",ge=(()=>{let e=class e{constructor(t,n,s,i={}){this.doc=t,this.appId=n,this.nonce=s,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=_(i),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(s=>s.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${j}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(s=>{s.textContent!=null&&n.set(s.textContent,s)}),n}return null}changeUsageCount(t,n){let s=this.styleRef;if(s.has(t)){let i=s.get(t);return i.usage+=n,i.usage}return s.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let s=this.styleNodesInDOM,i=s?.get(n);if(i?.parentNode===t)return s.delete(n),i.removeAttribute(j),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=n,this.platformIsServer&&a.setAttribute(j,this.appId),t.appendChild(a),a}}addStyleToHost(t,n){let s=this.getStyleElement(t,n),i=this.styleRef,a=i.get(n)?.elements;a?a.push(s):i.set(n,{elements:[s],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(n){return new(n||e)(c(f),c(P),c(H,8),c(S))},e.\u0275prov=l({token:e,factory:e.\u0275fac});let r=e;return r})(),x={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},$=/%COMP%/g,ve="%COMP%",Re=`_nghost-${ve}`,De=`_ngcontent-${ve}`,Ce=!0,Ae=new N("",{providedIn:"root",factory:()=>Ce});function be(r){return De.replace($,r)}function Oe(r){return Re.replace($,r)}function Ee(r,e){return e.map(o=>o.replace($,r))}var he=(()=>{let e=class e{constructor(t,n,s,i,a,u,d,h=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=s,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=u,this.ngZone=d,this.nonce=h,this.rendererByCompId=new Map,this.platformIsServer=_(u),this.defaultRenderer=new D(t,a,d,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===E.ShadowDom&&(n=Z(I({},n),{encapsulation:E.Emulated}));let s=this.getOrCreateRenderer(t,n);return s instanceof b?s.applyToHost(t):s instanceof C&&s.applyStyles(),s}getOrCreateRenderer(t,n){let s=this.rendererByCompId,i=s.get(n.id);if(!i){let a=this.doc,u=this.ngZone,d=this.eventManager,h=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,O=this.platformIsServer;switch(n.encapsulation){case E.Emulated:i=new b(d,h,n,this.appId,p,a,u,O);break;case E.ShadowDom:return new B(d,h,t,n,a,u,this.nonce,O);default:i=new C(d,h,n,p,a,u,O);break}s.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(n){return new(n||e)(c(ye),c(ge),c(P),c(Ae),c(f),c(S),c(M),c(H))},e.\u0275prov=l({token:e,factory:e.\u0275fac});let r=e;return r})(),D=class{constructor(e,o,t,n){this.eventManager=e,this.doc=o,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,o){return o?this.doc.createElementNS(x[o]||o,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,o){(pe(e)?e.content:e).appendChild(o)}insertBefore(e,o,t){e&&(pe(e)?e.content:e).insertBefore(o,t)}removeChild(e,o){e&&e.removeChild(o)}selectRootElement(e,o){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new y(-5104,!1);return o||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,o,t,n){if(n){o=n+":"+o;let s=x[n];s?e.setAttributeNS(s,o,t):e.setAttribute(o,t)}else e.setAttribute(o,t)}removeAttribute(e,o,t){if(t){let n=x[t];n?e.removeAttributeNS(n,o):e.removeAttribute(`${t}:${o}`)}else e.removeAttribute(o)}addClass(e,o){e.classList.add(o)}removeClass(e,o){e.classList.remove(o)}setStyle(e,o,t,n){n&(w.DashCase|w.Important)?e.style.setProperty(o,t,n&w.Important?"important":""):e.style[o]=t}removeStyle(e,o,t){t&w.DashCase?e.style.removeProperty(o):e.style[o]=""}setProperty(e,o,t){e!=null&&(e[o]=t)}setValue(e,o){e.nodeValue=o}listen(e,o,t){if(typeof e=="string"&&(e=k().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${o}`);return this.eventManager.addEventListener(e,o,this.decoratePreventDefault(t))}decoratePreventDefault(e){return o=>{if(o==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(o)):e(o))===!1&&o.preventDefault()}}};function pe(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var B=class extends D{constructor(e,o,t,n,s,i,a,u){super(e,s,i,u),this.sharedStylesHost=o,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=Ee(n.id,n.styles);for(let h of d){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=h,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,o){return super.appendChild(this.nodeOrShadowRoot(e),o)}insertBefore(e,o,t){return super.insertBefore(this.nodeOrShadowRoot(e),o,t)}removeChild(e,o){return super.removeChild(this.nodeOrShadowRoot(e),o)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},C=class extends D{constructor(e,o,t,n,s,i,a,u){super(e,s,i,a),this.sharedStylesHost=o,this.removeStylesOnCompDestroy=n,this.styles=u?Ee(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},b=class extends C{constructor(e,o,t,n,s,i,a,u){let d=n+"-"+t.id;super(e,o,t,s,i,a,u,d),this.contentAttr=be(d),this.hostAttr=Oe(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,o){let t=super.createElement(e,o);return super.setAttribute(t,this.contentAttr,""),t}},Ie=(()=>{let e=class e extends R{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,s){return t.addEventListener(n,s,!1),()=>this.removeEventListener(t,n,s)}removeEventListener(t,n,s){return t.removeEventListener(n,s)}};e.\u0275fac=function(n){return new(n||e)(c(f))},e.\u0275prov=l({token:e,factory:e.\u0275fac});let r=e;return r})(),Ne=(()=>{let e=class e extends R{constructor(t){super(t),this.delegate=z(se,{optional:!0})}supports(t){return this.delegate?this.delegate.supports(t):!1}addEventListener(t,n,s){return this.delegate.addEventListener(t,n,s)}removeEventListener(t,n,s){return this.delegate.removeEventListener(t,n,s)}};e.\u0275fac=function(n){return new(n||e)(c(f))},e.\u0275prov=l({token:e,factory:e.\u0275fac});let r=e;return r})(),me=["alt","control","meta","shift"],Le={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Pe={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},He=(()=>{let e=class e extends R{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,s){let i=e.parseEventName(n),a=e.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>k().onAndCancel(t,i.domEventName,a))}static parseEventName(t){let n=t.toLowerCase().split("."),s=n.shift();if(n.length===0||!(s==="keydown"||s==="keyup"))return null;let i=e._normalizeKey(n.pop()),a="",u=n.indexOf("code");if(u>-1&&(n.splice(u,1),a="code."),me.forEach(h=>{let p=n.indexOf(h);p>-1&&(n.splice(p,1),a+=h+".")}),a+=i,n.length!=0||i.length===0)return null;let d={};return d.domEventName=s,d.fullKey=a,d}static matchEventFullKeyCode(t,n){let s=Le[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(s=t.code,i="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),me.forEach(a=>{if(a!==s){let u=Pe[a];u(t)&&(i+=a+".")}}),i+=s,i===n)}static eventCallback(t,n,s){return i=>{e.matchEventFullKeyCode(i,t)&&s.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(n){return new(n||e)(c(f))},e.\u0275prov=l({token:e,factory:e.\u0275fac});let r=e;return r})();function gt(r,e){return oe(I({rootComponent:r},ke(e)))}function ke(r){return{appProviders:[...Fe,...r?.providers??[]],platformProviders:Ue}}function _e(){F.makeCurrent()}function je(){return new L}function xe(){return Y(document),document}var Ue=[{provide:S,useValue:de},{provide:q,useValue:_e,multi:!0},{provide:f,useFactory:xe,deps:[]}];var Fe=[{provide:K,useValue:"root"},{provide:L,useFactory:je,deps:[]},{provide:A,useClass:Ie,multi:!0,deps:[f,M,S]},{provide:A,useClass:He,multi:!0,deps:[f]},{provide:A,useClass:Ne,multi:!0},he,ge,ye,{provide:re,useExisting:he},{provide:le,useClass:Te,deps:[]},[]];var vt=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(n){return new(n||e)(c(f))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var Be=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=l({token:e,factory:function(n){let s=null;return n?s=new(n||e):s=c(Ve),s},providedIn:"root"});let r=e;return r})(),Ve=(()=>{let e=class e extends Be{constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case m.NONE:return n;case m.HTML:return v(n,"HTML")?g(n):ne(this._doc,String(n)).toString();case m.STYLE:return v(n,"Style")?g(n):n;case m.SCRIPT:if(v(n,"Script"))return g(n);throw new y(5200,!1);case m.URL:return v(n,"URL")?g(n):te(String(n));case m.RESOURCE_URL:if(v(n,"ResourceURL"))return g(n);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(t){return W(t)}bypassSecurityTrustStyle(t){return X(t)}bypassSecurityTrustScript(t){return J(t)}bypassSecurityTrustUrl(t){return Q(t)}bypassSecurityTrustResourceUrl(t){return ee(t)}};e.\u0275fac=function(n){return new(n||e)(c(f))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),V=function(r){return r[r.NoHttpTransferCache=0]="NoHttpTransferCache",r[r.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",r[r.I18nSupport=2]="I18nSupport",r[r.EventReplay=3]="EventReplay",r}(V||{});function Et(...r){let e=[],o=new Set,t=o.has(V.HttpTransferCacheOptions);for(let{\u0275providers:n,\u0275kind:s}of r)o.add(s),n.length&&e.push(n);return G([[],ie(),o.has(V.NoHttpTransferCache)||t?[]:fe({}),e])}export{he as a,gt as b,vt as c,Be as d,Et as e};
