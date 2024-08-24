import './polyfills.server.mjs';
import{a as P}from"./chunk-RROELKOH.mjs";import{a as A,b as M}from"./chunk-JLVHC6GN.mjs";import{a as B,b as R}from"./chunk-P5M4VVBN.mjs";import{n as O}from"./chunk-ZDJMNRIQ.mjs";import{N as y,T as E,U as V,i as U,ma as G,na as L,p as w}from"./chunk-NVRXDY5V.mjs";import{e as T,f as I}from"./chunk-GFB74FXC.mjs";import{Ab as k,Eb as _,Kb as C,Pb as o,Qb as r,Rb as l,Ub as x,Vb as b,Yb as h,_b as p,ga as d,gc as D,hc as s,ib as c,ka as g,rc as F,va as u,wa as v,xa as f,xc as N,yb as m,zb as S}from"./chunk-VWPO2VC4.mjs";var j=()=>[y,import("./chunk-GPMY24AR.mjs").then(t=>t.NgTemplateOutlet),U,I,V,E,G,import("./chunk-U7YKNDBO.mjs").then(t=>t.IconDirective)];function H(t,i){t&1&&l(0,"c-spinner",7)}function K(t,i){t&1&&(f(),l(0,"svg",8))}function W(t,i){t&1&&l(0,"c-spinner",7)}function q(t,i){t&1&&(f(),l(0,"svg",10))}function J(t,i){t&1&&x(0)}function Q(t,i){if(t&1){let a=b();o(0,"c-row",1)(1,"c-nav",2)(2,"c-nav-item",3)(3,"button",4),h("click",function(){u(a);let n=p();return v(n.cancel())}),s(4,"Cancel"),r()(),o(5,"c-nav-item",5)(6,"button",6),h("click",function(){u(a);let n=p();return v(n.reset())}),m(7,H,1,0,"c-spinner",7)(8,K,1,0,":svg:svg",8),s(9," Reset "),r()(),o(10,"c-nav-item",5)(11,"button",9),h("click",function(){u(a);let n=p();return v(n.update())}),m(12,W,1,0,"c-spinner",7)(13,q,1,0,":svg:svg",10),s(14," Update "),r()()()(),m(15,J,1,0,"ng-container",11)}if(t&2){let a=p(),e=D(4);c(7),C(a.resetting?7:8),c(5),C(a.sending?12:13),c(3),_("ngTemplateOutlet",e)}}function X(t,i){t&1&&(o(0,"c-card-body")(1,"table",12)(2,"thead",13)(3,"tr")(4,"th",14),s(5,"Nom"),r(),o(6,"th",14),s(7,"SKU"),r(),o(8,"th",14),s(9,"Disponible"),r()()(),l(10,"tbody"),r()()),t&2&&(c(),_("hover",!0)("responsive",!0)("striped",!0))}var ke=(()=>{let i=class i{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=d(T),this.service=d(M),this.entrepriseService=d(R),this.validator=P.init(()=>this.item)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/inventaire/niveau-stock"]).then()}ngOnInit(){this.service.keepData||this.validator.reset(),this.loadEntrepriseList()}loadEntrepriseList(){this.entrepriseService.findAllOptimized().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/inventaire/niveau-stock"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new B),this.item.entreprise}set entreprise(e){this.item.entreprise=e}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new A}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=g({type:i,selectors:[["app-niveau-stock-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[F],decls:5,vars:1,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/inventaire/niveau-stock",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],[1,"text-nowrap","text-truncate"],[1,"bg-body-tertiary"]],template:function(n,z){n&1&&(m(0,Q,16,3),S(1,0,j),m(3,X,11,3,"ng-template",null,0,N)),n&2&&(c(),k(z.standAlon))},dependencies:[O,w,L]});let t=i;return t})();export{ke as a};
