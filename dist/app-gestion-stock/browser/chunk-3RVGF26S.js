import{a as ae}from"./chunk-C36JIVOX.js";import{a as ne,b as oe}from"./chunk-LDMW65QK.js";import"./chunk-SR3OXJX3.js";import{a as Y,b as Z,c as $,f as ee,h as te,n as ie}from"./chunk-RMR25O2K.js";import{$ as Q,I as P,L as R,M as B,N as H,O as j,P as q,T as J,U as F,_ as K,p as z,ta as X,v as G,w as W,y as A}from"./chunk-ETPUSV7N.js";import{c as M}from"./chunk-DKLNZNMU.js";import{d as L,e as O}from"./chunk-EVAI7AMW.js";import"./chunk-2BQUVQN4.js";import"./chunk-ROZ2NHZE.js";import"./chunk-VVDYSQS6.js";import"./chunk-LUIBGOM6.js";import{Cb as _,Ib as S,Nb as a,Ob as s,Pb as f,Sb as I,Tb as V,Wb as x,Yb as l,ec as k,fc as c,ga as T,gb as r,gc as D,ka as U,lc as h,mc as C,nc as v,pc as E,va as p,vc as N,wa as d,wb as u,xa as g,xb as b,ya as w,yb as y}from"./chunk-BXK32XEB.js";import"./chunk-RGL3W33T.js";var re=()=>[F,import("./chunk-K4L4KWTC.js").then(t=>t.NgTemplateOutlet),z,O,Q,K,X,M],se=()=>[import("./chunk-K4L4KWTC.js").then(t=>t.NgTemplateOutlet)];function le(t,o){t&1&&f(0,"c-spinner",7)}function me(t,o){t&1&&(g(),f(0,"svg",8))}function ce(t,o){t&1&&f(0,"c-spinner",7)}function pe(t,o){t&1&&(g(),f(0,"svg",10))}function de(t,o){t&1&&I(0)}function ue(t,o){if(t&1){let n=V();a(0,"c-row",1)(1,"c-nav",2)(2,"c-nav-item",3)(3,"button",4),x("click",function(){p(n);let i=l();return d(i.cancel())}),c(4,"Annuler"),s()(),a(5,"c-nav-item",5)(6,"button",6),x("click",function(){p(n);let i=l();return d(i.reset())}),u(7,le,1,0,"c-spinner",7)(8,me,1,0,":svg:svg",8),c(9," Reset "),s()(),a(10,"c-nav-item",5)(11,"button",9),x("click",function(){p(n);let i=l();return d(i.update())}),u(12,ce,1,0,"c-spinner",7)(13,pe,1,0,":svg:svg",10),c(14," Modifier "),s()()()(),u(15,de,1,0,"ng-container",11)}if(t&2){let n=l(),e=k(7);r(7),S(n.resetting?7:8),r(5),S(n.sending?12:13),r(3),_("ngTemplateOutlet",e)}}function _e(t,o){t&1&&I(0)}function fe(t,o){if(t&1&&u(0,_e,1,0,"ng-container",11),t&2){l();let n=k(7);_("ngTemplateOutlet",n)}}function xe(t,o){if(t&1){let n=V();a(0,"c-card",1)(1,"c-card-header")(2,"strong",12),c(3,'Merci de renseigner les d\xE9tails n\xE9cessaires pour mettre \xE0 jour les informations de ce "Taxe"'),s()(),a(4,"c-card-body")(5,"c-row",13)(6,"c-col",14),g(),f(7,"svg",15),w(),a(8,"label",16),c(9,"Nom"),s(),a(10,"input",17),v("ngModelChange",function(i){p(n);let m=l();return C(m.item.nom,i)||(m.item.nom=i),d(i)}),x("blur",function(){p(n);let i=l();return d(i.validator.nom.validate())}),s(),a(11,"c-form-feedback",18),c(12),s()(),a(13,"c-col",14),g(),f(14,"svg",19),w(),a(15,"label",20),c(16,"Taux de taxe"),s(),a(17,"input",21),v("ngModelChange",function(i){p(n);let m=l();return C(m.item.tauxImposition,i)||(m.item.tauxImposition=i),d(i)}),x("blur",function(){p(n);let i=l();return d(i.validator.tauxImposition.validate())}),s(),a(18,"c-form-feedback",18),c(19),s()(),a(20,"c-col",22)(21,"c-form-check")(22,"input",23),v("ngModelChange",function(i){p(n);let m=l();return C(m.item.actif,i)||(m.item.actif=i),d(i)}),s(),a(23,"label",24),c(24,"Actif"),s()()()()()()}if(t&2){let n=l();r(10),h("ngModel",n.item.nom),_("valid",n.validator.nom.valid),r(),_("valid",!1),r(),D(n.validator.nom.message),r(5),h("ngModel",n.item.tauxImposition),_("valid",n.validator.tauxImposition.valid),r(),_("valid",!1),r(),D(n.validator.tauxImposition.message),r(3),h("ngModel",n.item.actif)}}var Ue=(()=>{let o=class o{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=T(L),this.service=T(oe),this.validator=ae.init(()=>this.item)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/parametres/taxe"]).then()}ngOnInit(){this.service.keepData||this.validator.reset()}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/parametres/taxe"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}cancel(){this.item=new ne}retour(){this.router.navigate(["/pays/pays/list"]).then()}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=U({type:o,selectors:[["app-taxe-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[E],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/parametres/taxe",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"responsive-header",2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-swap-horizontal",2,"color","blue","font-size","30px"],["cLabel","","for","nom",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","nom","type","text","placeholder","Nom","name","nom",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","tauxImposition",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","tauxImposition","type","number","placeholder","TauxImposition","name","tauxImposition",3,"ngModelChange","blur","ngModel","valid"],["sm","12",1,"g-3"],["cFormCheckInput","","id","actif","name","actif","type","checkbox",3,"ngModelChange","ngModel"],["cFormCheckLabel","","for","actif"]],template:function(i,m){i&1&&(u(0,ue,16,3),b(1,0,re),u(3,fe,1,1),b(4,3,se),u(6,xe,25,9,"ng-template",null,0,N)),i&2&&(r(),y(m.standAlon),r(3),y(!m.standAlon))},dependencies:[F,J,q,ie,Z,te,Y,$,ee,R,G,W,A,H,B,j,P,M],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let t=o;return t})();export{Ue as TaxeUpdateComponent};
