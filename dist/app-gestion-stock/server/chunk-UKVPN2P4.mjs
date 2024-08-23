import './polyfills.server.mjs';
import{a as pe}from"./chunk-LSOUTZ6Z.mjs";import{a as de,b as ve}from"./chunk-REEX6EVL.mjs";import{a as ce,b as me}from"./chunk-AHRJE2FH.mjs";import"./chunk-D4RJRHB5.mjs";import{a as ae,b as le}from"./chunk-KUWVGZID.mjs";import{b as $,c as ee,f as te,h as ie,i as ne,j as re,k as oe,n as se}from"./chunk-MG5ECMPI.mjs";import{B as H,C as j,D as q,E as J,I as K,M as Q,N as F,T as X,U as Y,i as I,ma as Z,o as B,p as R,r as W}from"./chunk-BJSQRMLK.mjs";import"./chunk-XR27ODAI.mjs";import{c as U}from"./chunk-TMD5LWM3.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{e as G,f as P}from"./chunk-AO72HDTW.mjs";import"./chunk-TX6S5BIU.mjs";import"./chunk-OCP4HJ6B.mjs";import{Ab as S,Eb as u,Kb as b,Mb as N,Nb as L,Ob as O,Pb as o,Qb as a,Rb as _,Ub as w,Vb as T,Yb as f,_b as l,ga as h,gc as y,hb as s,hc as c,ic as x,ka as E,nc as V,oc as k,pc as M,rc as A,va as m,wa as p,xa as g,xc as z,ya as D,yb as v,zb as C}from"./chunk-NYO24GET.mjs";import"./chunk-XAJIYFV3.mjs";var ue=()=>[F,import("./chunk-FBVZH4FD.mjs").then(t=>t.NgTemplateOutlet),I,P,Y,X,Z,U],_e=()=>[import("./chunk-FBVZH4FD.mjs").then(t=>t.NgTemplateOutlet)];function fe(t,r){t&1&&_(0,"c-spinner",7)}function ge(t,r){t&1&&(g(),_(0,"svg",8))}function he(t,r){t&1&&_(0,"c-spinner",7)}function De(t,r){t&1&&(g(),_(0,"svg",10))}function xe(t,r){t&1&&w(0)}function Ce(t,r){if(t&1){let i=T();o(0,"c-row",1)(1,"c-nav",2)(2,"c-nav-item",3)(3,"button",4),f("click",function(){m(i);let n=l();return p(n.cancel())}),c(4,"Annuler"),a()(),o(5,"c-nav-item",5)(6,"button",6),f("click",function(){m(i);let n=l();return p(n.reset())}),v(7,fe,1,0,"c-spinner",7)(8,ge,1,0,":svg:svg",8),c(9," Actualiser "),a()(),o(10,"c-nav-item",5)(11,"button",9),f("click",function(){m(i);let n=l();return p(n.update())}),v(12,he,1,0,"c-spinner",7)(13,De,1,0,":svg:svg",10),c(14," Modifier "),a()()()(),v(15,xe,1,0,"ng-container",11)}if(t&2){let i=l(),e=y(7);s(7),b(i.resetting?7:8),s(5),b(i.sending?12:13),s(3),u("ngTemplateOutlet",e)}}function Se(t,r){t&1&&w(0)}function be(t,r){if(t&1&&v(0,Se,1,0,"ng-container",11),t&2){l();let i=y(7);u("ngTemplateOutlet",i)}}function we(t,r){if(t&1&&(o(0,"option",22),c(1),a()),t&2){let i=r.$implicit;u("value",i.id),s(),x(i.labelle)}}function Te(t,r){if(t&1){let i=T();o(0,"c-card",1)(1,"c-card-header")(2,"strong",12),c(3,'Merci de renseigner les d\xE9tails n\xE9cessaires pour mettre \xE0 jour les informations de ce "Devise"'),a()(),o(4,"c-card-body")(5,"c-row",13)(6,"c-col",14),g(),_(7,"svg",15),D(),o(8,"label",16),c(9,"Taux de change au MAD"),a(),o(10,"input",17),M("ngModelChange",function(n){m(i);let d=l();return k(d.item.tauxDeChange,n)||(d.item.tauxDeChange=n),p(n)}),f("blur",function(){m(i);let n=l();return p(n.validator.tauxDeChange.validate())}),a(),o(11,"c-form-feedback",18),c(12),a()(),o(13,"c-col",14),g(),_(14,"svg",19),D(),o(15,"label",20),c(16,"Nouvelle devise"),a(),o(17,"c-input-group")(18,"select",21),M("ngModelChange",function(n){m(i);let d=l();return k(d.nouvelleDevise.id,n)||(d.nouvelleDevise.id=n),p(n)}),f("blur",function(){m(i);let n=l();return p(n.validator.nouvelleDevise.validate())}),L(19,we,2,2,"option",22,N),a(),o(21,"button",23),f("click",function(){m(i);let n=l();return p(n.navigateToNouvelleDeviseCreate())}),g(),_(22,"svg",24),a(),D(),o(23,"c-form-feedback",18),c(24),a()()()()()()}if(t&2){let i=l();s(10),V("ngModel",i.item.tauxDeChange),u("valid",i.validator.tauxDeChange.valid),s(),u("valid",!1),s(),x(i.validator.tauxDeChange.message),s(6),V("ngModel",i.nouvelleDevise.id),u("valid",i.validator.nouvelleDevise.valid),s(),O(i.nouvelleDeviseList),s(4),u("valid",!1),s(),x(i.validator.nouvelleDevise.message)}}var qe=(()=>{let r=class r{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=h(G),this.service=h(me),this.nouvelleDeviseService=h(ve),this.entrepriseService=h(le),this.validator=pe.init(()=>this.item)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/parametres/devises"]).then()}ngOnInit(){if(this.service.keepData){let e=this.nouvelleDeviseService.createdItemAfterReturn;e.created&&(this.item.nouvelleDevise=e.item,this.validator.nouvelleDevise.validate())}else this.validator.reset();this.loadNouvelleDeviseList(),this.loadEntrepriseList()}loadNouvelleDeviseList(){this.nouvelleDeviseService.findAllOptimized().subscribe({next:e=>this.nouvelleDeviseList=e,error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAllOptimized().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/parametres/devises"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get nouvelleDevise(){return this.item.nouvelleDevise==null&&(this.item.nouvelleDevise=new de),this.item.nouvelleDevise}set nouvelleDevise(e){this.item.nouvelleDevise=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new ae),this.item.entreprise}set entreprise(e){this.item.entreprise=e}navigateToNouvelleDeviseCreate(){this.nouvelleDeviseService.returnUrl=this.router.url,this.router.navigate(["/parametres/nouvelle-devise/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new ce}retour(){this.router.navigate(["/pays/pays/list"]).then()}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=E({type:r,selectors:[["app-devises-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[A],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/parametres/devises",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"responsive-header",2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-swap-horizontal",2,"color","blue","font-size","30px"],["cLabel","",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","tauxDeChange","type","number","placeholder","TauxDeChange","name","tauxDeChange",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cilPlus",2,"color","blue","font-size","30px"],["cLabel","","for","nouvelleDevise",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","nouvelleDevise","name","nouvelleDevise",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cilPlus"]],template:function(n,d){n&1&&(v(0,Ce,16,3),C(1,0,ue),v(3,be,1,1),C(4,3,_e),v(6,Te,25,8,"ng-template",null,0,z)),n&2&&(s(),S(d.standAlon),s(3),S(!d.standAlon))},dependencies:[q,F,Q,K,se,re,oe,$,ie,ne,ee,te,J,B,R,W,j,I,H,U],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let t=r;return t})();export{qe as DevisesUpdateComponent};
