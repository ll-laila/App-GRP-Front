import './polyfills.server.mjs';
import{a as ie}from"./chunk-4MOZSLDU.mjs";import{a as g,b as te}from"./chunk-GYVFEGK4.mjs";import"./chunk-D4RJRHB5.mjs";import{a as Z,b as $}from"./chunk-P5M4VVBN.mjs";import{b as K,c as Q,f as X,n as Y}from"./chunk-ZDJMNRIQ.mjs";import{B as W,E as z,I as H,M as P,N as T,T as j,U as q,i as A,ma as J,o as O,p as U}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import{c as N}from"./chunk-UR2QYS3H.mjs";import{a as ee}from"./chunk-GAHSYCFE.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{e as G,f as B}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import"./chunk-YCIOFEEA.mjs";import{Ab as b,Eb as v,Kb as S,Pb as a,Qb as c,Rb as C,Ub as w,Vb as h,Yb as _,_b as o,ga as f,gc as k,hc as u,ib as l,ic as F,ka as V,nc as E,oc as I,pc as L,rc as R,va as m,wa as p,xa as x,xc as M,ya as y,yb as s,zb as D}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";var ne=()=>[T,import("./chunk-GPMY24AR.mjs").then(t=>t.NgTemplateOutlet),A,B,q,j,J,N],re=()=>[import("./chunk-GPMY24AR.mjs").then(t=>t.NgTemplateOutlet)];function oe(t,r){if(t&1){let i=h();a(0,"c-nav-item",3)(1,"button",11),_("click",function(){m(i);let n=o(2);return p(n.retour())}),u(2,"Return"),c()()}if(t&2){let i=o(2);l(),v("routerLink",i.returnUrl)}}function le(t,r){t&1&&C(0,"c-spinner",8)}function ae(t,r){t&1&&(x(),C(0,"svg",9))}function se(t,r){t&1&&w(0)}function ce(t,r){if(t&1){let i=h();a(0,"c-row",1)(1,"c-nav",2),s(2,oe,3,1,"c-nav-item",3),a(3,"c-nav-item",4)(4,"button",5),_("click",function(){m(i);let n=o();return p(n.cancel())}),u(5,"Annuler"),c()(),a(6,"c-nav-item",3)(7,"button",6),_("click",function(){m(i);let n=o();return p(n.reset())}),u(8,"R\xE9initialiser"),c()(),a(9,"c-nav-item",3)(10,"button",7),_("click",function(){m(i);let n=o();return p(n.create())}),s(11,le,1,0,"c-spinner",8)(12,ae,1,0,":svg:svg",9),u(13," Cr\xE9er "),c()()()(),s(14,se,1,0,"ng-container",10)}if(t&2){let i=o(),e=k(7);l(2),S(i.toReturn?2:-1),l(9),S(i.sending?11:12),l(3),v("ngTemplateOutlet",e)}}function me(t,r){t&1&&w(0)}function pe(t,r){if(t&1&&s(0,me,1,0,"ng-container",10),t&2){o();let i=k(7);v("ngTemplateOutlet",i)}}function ue(t,r){if(t&1){let i=h();a(0,"c-card",1)(1,"c-card-body")(2,"c-row",12)(3,"c-col",13),x(),C(4,"svg",14),y(),a(5,"label",15),u(6,"Labelle"),c(),a(7,"input",16),L("ngModelChange",function(n){m(i);let d=o();return I(d.item.labelle,n)||(d.item.labelle=n),p(n)}),_("blur",function(){m(i);let n=o();return p(n.validator.labelle.validate())}),c(),a(8,"c-form-feedback",17),u(9),c()()()()()}if(t&2){let i=o();l(7),E("ngModel",i.item.labelle),v("valid",i.validator.labelle.valid),l(),v("valid",!1),l(),F(i.validator.labelle.message)}}var Me=(()=>{let r=class r{constructor(){this.sending=!1,this.standAlon=!0,this.router=f(G),this.service=f(te),this.entrepriseService=f($),this.validator=ie.init(()=>this.item),this.entrepriseSelectedService=f(ee)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngOnInit(){this.service.keepData||this.reset(!1),this.service.keepData=!1}create(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.item.idEntreprise=this.entrepriseSelectedService.getEntrepriseSelected(),this.service.create().subscribe({next:e=>{if(this.sending=!1,e!=null){if(this.toReturn){this.item=e,this.router.navigate([this.returnUrl]).then();return}this.item=new g,this.router.navigate(["/parametres/nouvelle-devise"]).then()}},error:e=>{this.sending=!1,console.log(e),this.validator.import(e.error)}}))}reset(e=!0){(e||this.item==null)&&(this.item=new g),this.validator.reset()}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new Z),this.item.entreprise}set entreprise(e){this.item.entreprise=e}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new g}retour(){this.router.navigate(["/pays/pays/list"]).then()}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=V({type:r,selectors:[["app-nouvelle-devise-create"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[R],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/parametres/nouvelle-devise",3,"click"],["cButton","","color","dark",3,"click"],["cButton","","color","primary",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilPlus"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"click","routerLink"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","labelle","type","text","placeholder","Labelle","name","labelle",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"]],template:function(n,d){n&1&&(s(0,ce,15,3),D(1,0,ne),s(3,pe,1,1),D(4,3,re),s(6,ue,10,4,"ng-template",null,0,M)),n&2&&(l(),b(d.standAlon),l(3),b(!d.standAlon))},dependencies:[T,P,H,Y,K,Q,X,z,O,U,N,W]});let t=r;return t})();export{Me as NouvelleDeviseCreateComponent};
