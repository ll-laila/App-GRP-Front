import{d as O}from"./chunk-3HUUSNPM.js";import{$a as M,Bb as C,Cb as S,Fa as v,Gb as $,Ib as V,Jc as f,Kd as W,Nb as Q,Ob as k,Pb as B,Ub as U,Yb as D,aa as _,ba as x,bc as G,cc as L,dc as q,fa as R,fb as j,ga as u,gb as H,ka as N,kb as y,la as A,ma as E,nb as T,pc as K,qb as w,tb as b,wb as F,xa as I}from"./chunk-4HLAVBW4.js";import{e as n,f as m,g as d}from"./chunk-RGL3W33T.js";var X=["svgElement"];function Y(s,t){if(s&1&&(I(),B(0,"svg",1,0)),s&2){let o=D();S("innerHtml",o.innerHtml(),M)("ngClass",o.computedClasses)("cHtmlAttr",o.attributes),C("width",o.width)("height",o.height||o.width)("viewBox",o.viewBox)}}function Z(s,t){if(s&1&&(I(),Q(0,"svg",2,0),B(2,"use"),k()),s&2){let o=D();S("ngClass",o.computedClasses)("cHtmlAttr",o.attributes),C("width",o.width)("height",o.height||o.width),j(2),C("href",o.use)}}var z=(()=>{let t=class t{constructor(){this._iconNames={},this._icons={}}get iconNames(){return this._iconNames}get icons(){return this._icons}set icons(i){for(let e in i)this._iconNames[e]=e;this._icons=i}getIcon(i){return this.icons[i]||console.warn(`CoreUI WARN: Icon ${i} is not registered in IconService`),this.icons[i]}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),ft=(()=>{let t=class t{constructor(i){if(i)throw new Error("CoreUI IconSetModule is already loaded. Import it in the AppModule only")}static forRoot(){return{ngModule:t,providers:[{provide:z}]}}};t.\u0275fac=function(e){return new(e||t)(R(t,12))},t.\u0275mod=A({type:t}),t.\u0275inj=x({providers:[z]});let s=t;return s})();function tt(s){return s.replace(/([-_][a-z0-9])/ig,t=>t.toUpperCase().replace("-",""))}function J(s){return s&&s.includes("-")?tt(s):s}var pt=(()=>{var t,o,i,e,r;let h=class h{constructor(){m(this,t);m(this,o);m(this,i);m(this,e);m(this,r);d(this,t,u(v)),d(this,o,u(O)),d(this,i,u(z)),d(this,e,w("")),this.size="",d(this,r,w("")),this.ariaHidden=!0,this.xmlns="http://www.w3.org/2000/svg",this.pointerEvents="none",this.role="img",this.innerHtml=f(()=>{let l=Array.isArray(this.code())?this.code()[1]??this.code()[0]??"":this.code()||"";return n(this,o).bypassSecurityTrustHtml(this.titleCode+l||"")}),this.code=f(()=>n(this,e).call(this)?n(this,e).call(this):n(this,i)&&n(this,r).call(this)?n(this,i).getIcon(n(this,r).call(this)):(n(this,r).call(this)&&!n(this,i)?.icons[n(this,r).call(this)]&&console.warn(`c-icon component: icon name '${n(this,r).call(this)}' does not exist for IconSet service. To use icon by 'name' prop you need to add it to IconSet service. 
`,n(this,r).call(this)),"")),this.scale=f(()=>Array.isArray(this.code())&&this.code().length>1?`0 0 ${this.code()[0]}`:"0 0 64 64"),T({write:()=>{n(this,t).nativeElement.innerHTML=this.innerHtml()}})}set content(l){n(this,e).set(l)}set name(l){n(this,r).set(l)}get name(){return n(this,r).call(this)}set viewBox(l){this._viewBox=l}get viewBox(){return this._viewBox??this.scale()}get hostClasses(){return this.computedClasses}get bindInnerHtml(){return this.innerHtml()}get titleCode(){return this.title?`<title>${this.title}</title>`:""}get computedSize(){let l=!this.size&&(this.width||this.height);return this.size==="custom"||l?"custom-size":this.size}get computedClasses(){let l={icon:!0,[`icon-${this.computedSize}`]:!!this.computedSize};return this.customClasses??l}};t=new WeakMap,o=new WeakMap,i=new WeakMap,e=new WeakMap,r=new WeakMap,h.\u0275fac=function(c){return new(c||h)},h.\u0275dir=E({type:h,selectors:[["svg","cIcon",""]],hostVars:8,hostBindings:function(c,a){c&2&&(U("innerHtml",a.bindInnerHtml,M),C("viewBox",a.viewBox)("aria-hidden",a.ariaHidden)("xmlns",a.xmlns)("pointer-events",a.pointerEvents)("role",a.role),$(a.hostClasses))},inputs:{content:[0,"cIcon","content"],customClasses:"customClasses",size:"size",title:"title",height:"height",width:"width",name:[2,"name","name",J],viewBox:"viewBox",xmlns:"xmlns",pointerEvents:[0,"pointer-events","pointerEvents"],role:"role"},exportAs:["cIcon"],standalone:!0,features:[b]});let s=h;return s})(),et=(()=>{let t=class t{constructor(i,e){this.renderer=i,this.el=e}ngOnInit(){let i=this.cHtmlAttr;for(let e in i)e==="style"&&typeof i[e]=="object"?this.setStyle(i[e]):e==="class"?this.addClass(i[e]):this.setAttrib(e,i[e])}setStyle(i){for(let e in i)e&&this.renderer.setStyle(this.el.nativeElement,e,i[e])}addClass(i){(Array.isArray(i)?i:i.split(" ")).filter(r=>r.length>0).forEach(r=>{this.renderer.addClass(this.el.nativeElement,r)})}setAttrib(i,e){e!==null?this.renderer.setAttribute(this.el.nativeElement,i,e):this.renderer.removeAttribute(this.el.nativeElement,i)}};t.\u0275fac=function(e){return new(e||t)(H(y),H(v))},t.\u0275dir=E({type:t,selectors:[["","cHtmlAttr",""]],inputs:{cHtmlAttr:"cHtmlAttr"},exportAs:["cHtmlAttr"],standalone:!0});let s=t;return s})(),vt=(()=>{var t,o,i,e,r,h;let p=class p{constructor(){m(this,t);m(this,o);m(this,i);m(this,e);m(this,r);m(this,h);d(this,t,u(y)),d(this,o,u(v)),d(this,i,u(O)),d(this,e,u(z)),d(this,r,w("")),this.attributes={role:"img"},this.size="",this.use="",d(this,h,w("")),this.innerHtml=f(()=>{let c=Array.isArray(this.code())?this.code()[1]??this.code()[0]??"":this.code()||"";return n(this,i).bypassSecurityTrustHtml(this.titleCode+c||"")}),this.code=f(()=>n(this,r).call(this)?n(this,r).call(this):n(this,e)&&n(this,h).call(this)?n(this,e).getIcon(n(this,h).call(this)):(n(this,h).call(this)&&!n(this,e)?.icons[n(this,h).call(this)]&&console.warn(`c-icon component: icon name '${n(this,h).call(this)}' does not exist for IconSet service. To use icon by 'name' prop you need to add it to IconSet service. 
`,n(this,h).call(this)),"")),this.scale=f(()=>Array.isArray(this.code())&&this.code().length>1?`0 0 ${this.code()[0]}`:"0 0 64 64"),n(this,t).setStyle(n(this,o).nativeElement,"display","none")}set content(c){n(this,r).set(c)}set name(c){n(this,h).set(c)}get name(){return n(this,h).call(this)}set viewBox(c){this._viewBox=c}get viewBox(){return this._viewBox??this.scale()}ngAfterViewInit(){n(this,o).nativeElement.classList.forEach(g=>{n(this,t).addClass(this.svgElementRef.nativeElement,g)});let c=n(this,t).parentNode(n(this,o).nativeElement),a=this.svgElementRef.nativeElement;n(this,t).insertBefore(c,a,n(this,o).nativeElement),n(this,t).removeChild(c,n(this,o).nativeElement)}get titleCode(){return this.title?`<title>${this.title}</title>`:""}get computedSize(){let c=!this.size&&(this.width||this.height);return this.size==="custom"||c?"custom-size":this.size}get computedClasses(){let c={icon:!0,[`icon-${this.computedSize}`]:!!this.computedSize};return this.customClasses??c}};t=new WeakMap,o=new WeakMap,i=new WeakMap,e=new WeakMap,r=new WeakMap,h=new WeakMap,p.\u0275fac=function(a){return new(a||p)},p.\u0275cmp=N({type:p,selectors:[["c-icon"]],viewQuery:function(a,g){if(a&1&&G(X,5,v),a&2){let P;L(P=q())&&(g.svgElementRef=P.first)}},hostAttrs:["ngSkipHydration","true"],inputs:{content:"content",attributes:"attributes",customClasses:"customClasses",size:"size",title:"title",use:"use",height:"height",width:"width",name:[2,"name","name",J],viewBox:"viewBox"},exportAs:["cIconComponent"],standalone:!0,features:[b,K],decls:2,vars:1,consts:[["svgElement",""],["xmlns","http://www.w3.org/2000/svg","aria-hidden","true","pointer-events","none","role","img",3,"innerHtml","ngClass","cHtmlAttr"],["xmlns","http://www.w3.org/2000/svg","aria-hidden","true","pointer-events","none","role","img",3,"ngClass","cHtmlAttr"]],template:function(a,g){a&1&&F(0,Y,2,6,":svg:svg",1)(1,Z,3,5,":svg:svg",2),a&2&&V(!g.use&&g.code?0:g.use?1:-1)},dependencies:[W,et],styles:[".icon[_ngcontent-%COMP%]{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}"]});let s=p;return s})(),wt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=A({type:t}),t.\u0275inj=x({});let s=t;return s})();export{z as a,ft as b,pt as c,vt as d,wt as e};
