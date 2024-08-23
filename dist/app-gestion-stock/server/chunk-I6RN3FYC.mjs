import './polyfills.server.mjs';
import{a as X}from"./chunk-RROELKOH.mjs";import{a as S,b as Q}from"./chunk-HBKDDB4C.mjs";import{a as J,b as K}from"./chunk-KUWVGZID.mjs";import{b as j,c as z,f as H,n as q}from"./chunk-MG5ECMPI.mjs";import{B,E as A,I as G,M as O,N,T as U,U as P,i as L,o as W,p as R}from"./chunk-BJSQRMLK.mjs";import{e as E,f as I}from"./chunk-AO72HDTW.mjs";import{Ab as w,Eb as u,Kb as T,Pb as o,Qb as l,Ub as y,Vb as f,Yb as v,_b as a,ga as C,gc as D,hb as r,hc as d,ic as g,ka as V,nc as h,oc as x,pc as k,rc as F,va as m,wa as p,xc as M,yb as _,zb as b}from"./chunk-NYO24GET.mjs";var Y=()=>[N,import("./chunk-FBVZH4FD.mjs").then(n=>n.NgTemplateOutlet),L,I,P,U],Z=()=>[import("./chunk-FBVZH4FD.mjs").then(n=>n.NgTemplateOutlet)];function $(n,s){if(n&1){let i=f();o(0,"c-nav-item",3)(1,"button",8),v("click",function(){m(i);let t=a(2);return p(t.retour())}),d(2,"Return"),l()()}if(n&2){let i=a(2);r(),u("routerLink",i.returnUrl)}}function ee(n,s){n&1&&y(0)}function te(n,s){if(n&1){let i=f();o(0,"c-row",1)(1,"c-nav",2),_(2,$,3,1,"c-nav-item",3),o(3,"c-nav-item",4)(4,"button",5),v("click",function(){m(i);let t=a();return p(t.cancel())}),d(5,"Annuler"),l()(),o(6,"c-nav-item",3)(7,"button",6),v("click",function(){m(i);let t=a();return p(t.reset())}),d(8,"Reset"),l()()()(),_(9,ee,1,0,"ng-container",7)}if(n&2){let i=a(),e=D(7);r(2),T(i.toReturn?2:-1),r(7),u("ngTemplateOutlet",e)}}function ie(n,s){n&1&&y(0)}function ne(n,s){if(n&1&&_(0,ie,1,0,"ng-container",7),n&2){a();let i=D(7);u("ngTemplateOutlet",i)}}function re(n,s){if(n&1){let i=f();o(0,"c-card",1)(1,"c-card-body")(2,"c-row",9)(3,"c-col",10)(4,"label",11),d(5,"Nom"),l(),o(6,"input",12),k("ngModelChange",function(t){m(i);let c=a();return x(c.item.nom,t)||(c.item.nom=t),p(t)}),v("blur",function(){m(i);let t=a();return p(t.validator.nom.validate())}),l(),o(7,"c-form-feedback",13),d(8),l()(),o(9,"c-col",10)(10,"label",14),d(11,"Sku"),l(),o(12,"input",15),k("ngModelChange",function(t){m(i);let c=a();return x(c.item.sku,t)||(c.item.sku=t),p(t)}),v("blur",function(){m(i);let t=a();return p(t.validator.sku.validate())}),l(),o(13,"c-form-feedback",13),d(14),l()(),o(15,"c-col",10)(16,"label",16),d(17,"Disponible"),l(),o(18,"input",17),k("ngModelChange",function(t){m(i);let c=a();return x(c.item.disponible,t)||(c.item.disponible=t),p(t)}),v("blur",function(){m(i);let t=a();return p(t.validator.disponible.validate())}),l(),o(19,"c-form-feedback",13),d(20),l()()()()()}if(n&2){let i=a();r(6),h("ngModel",i.item.nom),u("valid",i.validator.nom.valid),r(),u("valid",!1),r(),g(i.validator.nom.message),r(4),h("ngModel",i.item.sku),u("valid",i.validator.sku.valid),r(),u("valid",!1),r(),g(i.validator.sku.message),r(4),h("ngModel",i.item.disponible),u("valid",i.validator.disponible.valid),r(),u("valid",!1),r(),g(i.validator.disponible.message)}}var Ne=(()=>{let s=class s{constructor(){this.sending=!1,this.standAlon=!0,this.router=C(E),this.service=C(Q),this.entrepriseService=C(K),this.validator=X.init(()=>this.item)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngOnInit(){this.service.keepData||this.reset(!1),this.service.keepData=!1,this.loadEntrepriseList()}loadEntrepriseList(){this.entrepriseService.findAllOptimized().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}create(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.create().subscribe({next:e=>{if(this.sending=!1,e!=null){if(this.toReturn){this.item=e,this.router.navigate([this.returnUrl]).then();return}this.item=new S,this.router.navigate(["/inventaire/niveau-stock"]).then()}},error:e=>{this.sending=!1,console.log(e)}}))}reset(e=!0){(e||this.item==null)&&(this.item=new S),this.validator.reset()}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new J),this.item.entreprise}set entreprise(e){this.item.entreprise=e}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new S}retour(){this.router.navigate(["/pays/pays/list"]).then()}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=V({type:s,selectors:[["app-niveau-stock-create"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[F],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/inventaire/boncommande/bon-commande",3,"click"],["cButton","","color","dark",3,"click"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"click","routerLink"],[1,"g-3"],["sm","4"],["cLabel","","for","nom"],["cFormControl","","id","nom","type","text","placeholder","Nom","name","nom",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cLabel","","for","sku"],["cFormControl","","id","sku","type","text","placeholder","Sku","name","sku",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","disponible"],["cFormControl","","id","disponible","type","text","placeholder","Disponible","name","disponible",3,"ngModelChange","blur","ngModel","valid"]],template:function(t,c){t&1&&(_(0,te,10,2),b(1,0,Y),_(3,ne,1,1),b(4,3,Z),_(6,re,21,12,"ng-template",null,0,M)),t&2&&(r(),w(c.standAlon),r(3),w(!c.standAlon))},dependencies:[N,O,G,q,j,z,H,A,W,R,B]});let n=s;return n})();export{Ne as a};
