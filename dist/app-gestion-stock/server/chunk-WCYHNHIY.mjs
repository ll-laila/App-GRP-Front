import './polyfills.server.mjs';
import{a as de}from"./chunk-IZC3LUR2.mjs";import{a as pe}from"./chunk-K63O4ZDO.mjs";import{a as me,b as ce}from"./chunk-QVGIFFSU.mjs";import"./chunk-D4RJRHB5.mjs";import{a as te,b as ie,c as ne,f as re,i as oe,j as ae,k as le,n as se}from"./chunk-MG5ECMPI.mjs";import{B as j,D as H,E as q,F as J,G as K,H as Q,I as X,M as Y,N as D,T as Z,U as $,i as A,ma as ee,o as B,p as z,r as R}from"./chunk-BJSQRMLK.mjs";import"./chunk-XR27ODAI.mjs";import{c as M}from"./chunk-TMD5LWM3.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{e as G,f as W}from"./chunk-AO72HDTW.mjs";import"./chunk-TX6S5BIU.mjs";import"./chunk-OCP4HJ6B.mjs";import{Ab as b,Eb as _,Kb as P,Mb as I,Nb as U,Ob as E,Pb as o,Qb as l,Rb as f,Ub as T,Vb as V,Yb as x,_b as s,ga as N,gc as k,hb as a,hc as c,ic as g,ka as F,nc as C,oc as h,pc as y,rc as O,va as p,wa as d,xa as v,xc as L,ya as w,yb as u,zb as S}from"./chunk-NYO24GET.mjs";import"./chunk-XAJIYFV3.mjs";var ue=()=>[D,import("./chunk-FBVZH4FD.mjs").then(e=>e.NgTemplateOutlet),A,W,$,Z,ee,M],_e=()=>[import("./chunk-FBVZH4FD.mjs").then(e=>e.NgTemplateOutlet)];function fe(e,r){e&1&&f(0,"c-spinner",7)}function xe(e,r){e&1&&(v(),f(0,"svg",8))}function ve(e,r){e&1&&f(0,"c-spinner",7)}function ge(e,r){e&1&&(v(),f(0,"svg",10))}function Ce(e,r){e&1&&T(0)}function he(e,r){if(e&1){let i=V();o(0,"c-row",1)(1,"c-nav",2)(2,"c-nav-item",3)(3,"button",4),x("click",function(){p(i);let n=s();return d(n.cancel())}),c(4,"Cancel"),l()(),o(5,"c-nav-item",5)(6,"button",6),x("click",function(){p(i);let n=s();return d(n.reset())}),u(7,fe,1,0,"c-spinner",7)(8,xe,1,0,":svg:svg",8),c(9," Actualiser "),l()(),o(10,"c-nav-item",5)(11,"button",9),x("click",function(){p(i);let n=s();return d(n.update())}),u(12,ve,1,0,"c-spinner",7)(13,ge,1,0,":svg:svg",10),c(14," Modifier "),l()()()(),u(15,Ce,1,0,"ng-container",11)}if(e&2){let i=s(),t=k(7);a(7),P(i.resetting?7:8),a(5),P(i.sending?12:13),a(3),_("ngTemplateOutlet",t)}}function ye(e,r){e&1&&T(0)}function Ne(e,r){if(e&1&&u(0,ye,1,0,"ng-container",11),e&2){s();let i=k(7);_("ngTemplateOutlet",i)}}function we(e,r){if(e&1&&(o(0,"option",21),c(1),l()),e&2){let i=r.$implicit;_("value",i),a(),g(i)}}function Se(e,r){if(e&1){let i=V();o(0,"c-card",1)(1,"c-card-header")(2,"strong",12),c(3,'Merci de renseigner les d\xE9tails n\xE9cessaires pour mettre \xE0 jour les informations de ce "Nivequ de fid\xE9lit\xE9"'),l()(),o(4,"c-card-body")(5,"c-row",13)(6,"c-col",14),v(),f(7,"svg",15),w(),o(8,"label",16),c(9,"Nom"),l(),o(10,"input",17),y("ngModelChange",function(n){p(i);let m=s();return h(m.item.nom,n)||(m.item.nom=n),d(n)}),x("blur",function(){p(i);let n=s();return d(n.validator.nom.validate())}),l(),o(11,"c-form-feedback",18),c(12),l()(),o(13,"c-col",14),v(),f(14,"svg",19),w(),o(15,"label",16),c(16,"Type"),l(),o(17,"select",20),y("ngModelChange",function(n){p(i);let m=s();return h(m.item.type,n)||(m.item.type=n),d(n)}),x("blur",function(){p(i);let n=s();return d(n.validator.type.validate())}),U(18,we,2,2,"option",21,I),l(),o(20,"c-form-feedback",18),c(21),l()(),o(22,"c-col",22)(23,"c-form-check")(24,"input",23),y("ngModelChange",function(n){p(i);let m=s();return h(m.item.actif,n)||(m.item.actif=n),d(n)}),l(),o(25,"label",24),c(26,"Actif"),l()()()()()()}if(e&2){let i=s();a(10),C("ngModel",i.item.nom),_("valid",i.validator.nom.valid),a(),_("valid",!1),a(),g(i.validator.nom.message),a(5),C("ngModel",i.item.type),_("valid",i.validator.type.valid),a(),E(i.statutNiveauPrixEnumList),a(2),_("valid",!1),a(),g(i.validator.type.message),a(3),C("ngModel",i.item.actif)}}var Ae=(()=>{let r=class r{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=N(G),this.service=N(ce),this.validator=de.init(()=>this.item),this.statutNiveauPrixEnumList=Object.values(pe)}set setItemGetter(t){this.itemGetter=t,this.standAlon=!1}set setItemSetter(t){this.itemSetter=t}set setValidator(t){this.validator=t}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/parametres/niveau-prix"]).then()}ngOnInit(){this.service.keepData||this.validator.reset()}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:t=>{this.sending=!1,t!=null&&this.router.navigate(["/parametres/niveau-prix"]).then()},error:t=>{this.sending=!1,console.log(t)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:t=>{this.item=t,this.validator.reset(),this.resetting=!1},error:t=>{console.log(t),this.resetting=!1}})}get items(){return this.service.items}set items(t){this.service.items=t}get item(){return this.itemGetter()}set item(t){this.itemSetter(t)}itemGetter(){return this.service.item}itemSetter(t){this.service.item=t}cancel(){this.item=new me}retour(){this.router.navigate(["/pays/pays/list"]).then()}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=F({type:r,selectors:[["app-niveau-prix-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[O],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/parametres/niveau-prix",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"responsive-header",2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","nom",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","nom","type","text","placeholder","Nom","name","nom",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cil-check-alt",2,"color","blue","font-size","30px"],["cSelect","","id","type","name","type",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["sm","12",1,"g-3"],["cFormCheckInput","","id","actif","name","actif","type","checkbox",3,"ngModelChange","ngModel"],["cFormCheckLabel","","for","actif"]],template:function(n,m){n&1&&(u(0,he,16,3),S(1,0,ue),u(3,Ne,1,1),S(4,3,_e),u(6,Se,27,9,"ng-template",null,0,L)),n&2&&(a(),b(m.standAlon),a(3),b(!m.standAlon))},dependencies:[H,D,Y,X,se,ae,le,ie,te,oe,ne,re,q,B,z,R,K,J,Q,j,M],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let e=r;return e})();export{Ae as NiveauPrixUpdateComponent};
