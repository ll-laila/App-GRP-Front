import './polyfills.server.mjs';
import{a as Se}from"./chunk-3CREZIUJ.mjs";import{a as ce,b as de}from"./chunk-4O54P57Y.mjs";import{a as Ce}from"./chunk-7HFGQBBK.mjs";import{a as ve,b as xe}from"./chunk-QVGIFFSU.mjs";import{a as ue,b as _e}from"./chunk-AHRJE2FH.mjs";import{a as fe,b as ge}from"./chunk-XXWZ3SQU.mjs";import{a as be}from"./chunk-TCEGLAO2.mjs";import{a as he}from"./chunk-VMQIQJK7.mjs";import{a as pe}from"./chunk-TQMIRSZL.mjs";import"./chunk-M5PYXWAU.mjs";import"./chunk-D4RJRHB5.mjs";import{a as le,b as se}from"./chunk-KUWVGZID.mjs";import{b as $,c as ee,f as te,h as ie,i as ne,j as re,k as ae,n as oe}from"./chunk-MG5ECMPI.mjs";import{B as H,C as j,D as q,E as J,I as K,M as Q,N as F,T as X,U as Y,i as D,ma as Z,o as B,p as A,r as O}from"./chunk-BJSQRMLK.mjs";import"./chunk-XR27ODAI.mjs";import{c as N}from"./chunk-TMD5LWM3.mjs";import{a as me}from"./chunk-NLO6QWTG.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{e as G,f as R}from"./chunk-AO72HDTW.mjs";import"./chunk-TX6S5BIU.mjs";import"./chunk-OCP4HJ6B.mjs";import{Ab as E,Eb as m,Kb as M,Mb as L,Nb as P,Ob as U,Pb as n,Qb as o,Rb as _,Ub as y,Vb as I,Yb as v,_b as s,ga as S,gc as T,hb as a,hc as c,ic as g,ka as W,nc as h,oc as C,pc as b,rc as z,va as d,wa as p,xa as x,xc as k,ya as f,yb as w,zb as V}from"./chunk-NYO24GET.mjs";import"./chunk-XAJIYFV3.mjs";var we=()=>[F,import("./chunk-FBVZH4FD.mjs").then(r=>r.NgTemplateOutlet),D,R,Y,X,Z,N],ye=()=>[import("./chunk-FBVZH4FD.mjs").then(r=>r.NgTemplateOutlet)];function Te(r,u){r&1&&_(0,"c-spinner",8)}function Ve(r,u){r&1&&(x(),_(0,"svg",9))}function Ee(r,u){r&1&&_(0,"c-spinner",8)}function Me(r,u){r&1&&(x(),_(0,"svg",11))}function Le(r,u){r&1&&y(0)}function Pe(r,u){r&1&&y(0)}function Ue(r,u){if(r&1){let t=I();n(0,"c-row",2)(1,"c-nav",3)(2,"c-nav-item",4)(3,"button",5),v("click",function(){d(t);let i=s();return p(i.cancel())}),c(4,"Annuler"),o()(),n(5,"c-nav-item",6)(6,"button",7),v("click",function(){d(t);let i=s();return p(i.reset())}),w(7,Te,1,0,"c-spinner",8)(8,Ve,1,0,":svg:svg",9),c(9," Actualiser "),o()(),n(10,"c-nav-item",6)(11,"button",10),v("click",function(){d(t);let i=s();return p(i.update())}),w(12,Ee,1,0,"c-spinner",8)(13,Me,1,0,":svg:svg",11),c(14," Modifier "),o()()()(),w(15,Le,1,0,"ng-container",12)(16,Pe,1,0,"ng-container",12)}if(r&2){let t=s(),e=T(7),i=T(9);a(7),M(t.resetting?7:8),a(5),M(t.sending?12:13),a(3),m("ngTemplateOutlet",e),a(),m("ngTemplateOutlet",i)}}function Ie(r,u){r&1&&y(0)}function ke(r,u){if(r&1&&w(0,Ie,1,0,"ng-container",12),r&2){s();let t=T(7);m("ngTemplateOutlet",t)}}function Ne(r,u){if(r&1&&(n(0,"option",38),c(1),o()),r&2){let t=u.$implicit;m("value",t.id),a(),g(t.nouvelleDevise==null?null:t.nouvelleDevise.labelle)}}function De(r,u){if(r&1&&(n(0,"option",38),c(1),o()),r&2){let t=u.$implicit;m("value",t.id),a(),g(t.nom)}}function Fe(r,u){if(r&1){let t=I();n(0,"c-card",2)(1,"c-card-header")(2,"strong",13),c(3,'Merci de renseigner les d\xE9tails n\xE9cessaires pour mettre \xE0 jour les informations de ce "Client"'),o()(),n(4,"c-card-body")(5,"c-row",14)(6,"c-col",15),x(),_(7,"svg",16),f(),n(8,"label",17),c(9,"Code"),o(),n(10,"input",18),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.code,i)||(l.item.code=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.code.validate())}),o(),n(11,"c-form-feedback",19),c(12),o()(),n(13,"c-col",15),x(),_(14,"svg",20),f(),n(15,"label",21),c(16,"Nom"),o(),n(17,"input",22),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.nom,i)||(l.item.nom=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.nom.validate())}),o(),n(18,"c-form-feedback",19),c(19),o()(),n(20,"c-col",15),x(),_(21,"svg",23),f(),n(22,"label",24),c(23,"Email"),o(),n(24,"input",25),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.email,i)||(l.item.email=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.email.validate())}),o(),n(25,"c-form-feedback",19),c(26),o()(),n(27,"c-col",15),x(),_(28,"svg",26),f(),n(29,"label",27),c(30,"Telephone"),o(),n(31,"input",28),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.telephone,i)||(l.item.telephone=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.telephone.validate())}),o(),n(32,"c-form-feedback",19),c(33),o()(),n(34,"c-col",15),x(),_(35,"svg",29),f(),n(36,"label",30),c(37,"ICE "),o(),n(38,"input",31),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.taxeNumero,i)||(l.item.taxeNumero=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.taxeNumero.validate())}),o(),n(39,"c-form-feedback",19),c(40),o()(),n(41,"c-col",15),x(),_(42,"svg",32),f(),n(43,"label",33),c(44,"Remise"),o(),n(45,"input",34),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.rabais,i)||(l.item.rabais=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.rabais.validate())}),o(),n(46,"c-form-feedback",19),c(47),o()(),n(48,"c-col",15),x(),_(49,"svg",35),f(),n(50,"label",36),c(51,"Devise"),o(),n(52,"c-input-group")(53,"select",37),b("ngModelChange",function(i){d(t);let l=s();return C(l.devises.id,i)||(l.devises.id=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.devises.validate())}),P(54,Ne,2,2,"option",38,L),o(),n(56,"button",39),v("click",function(){d(t);let i=s();return p(i.navigateToDevisesCreate())}),x(),_(57,"svg",40),o(),f(),n(58,"c-form-feedback",19),c(59),o()()(),n(60,"c-col",15),x(),_(61,"svg",41),f(),n(62,"label",42),c(63,"Niveau de fid\xE9lit\xE9"),o(),n(64,"c-input-group")(65,"select",43),b("ngModelChange",function(i){d(t);let l=s();return C(l.niveauPrix.id,i)||(l.niveauPrix.id=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.niveauPrix.validate())}),P(66,De,2,2,"option",38,L),o(),n(68,"button",39),v("click",function(){d(t);let i=s();return p(i.navigateToNiveauPrixCreate())}),x(),_(69,"svg",40),o(),f(),n(70,"c-form-feedback",19),c(71),o()()(),n(72,"c-col",15),x(),_(73,"svg",29),f(),n(74,"label",44),c(75,"Entreprise"),o(),n(76,"input",45),v("blur",function(){d(t);let i=s();return p(i.validator.code.validate())}),o(),n(77,"c-form-feedback",19),c(78),o()()()()()}if(r&2){let t=s();a(10),h("ngModel",t.item.code),m("valid",t.validator.code.valid),a(),m("valid",!1),a(),g(t.validator.code.message),a(5),h("ngModel",t.item.nom),m("valid",t.validator.nom.valid),a(),m("valid",!1),a(),g(t.validator.nom.message),a(5),h("ngModel",t.item.email),m("valid",t.validator.email.valid),a(),m("valid",!1),a(),g(t.validator.email.message),a(5),h("ngModel",t.item.telephone),m("valid",t.validator.telephone.valid),a(),m("valid",!1),a(),g(t.validator.telephone.message),a(5),h("ngModel",t.item.taxeNumero),m("valid",t.validator.taxeNumero.valid),a(),m("valid",!1),a(),g(t.validator.taxeNumero.message),a(5),h("ngModel",t.item.rabais),m("valid",t.validator.rabais.valid),a(),m("valid",!1),a(),g(t.validator.rabais.message),a(6),h("ngModel",t.devises.id),m("valid",t.validator.devises.valid),a(),U(t.devisesList),a(4),m("valid",!1),a(),g(t.validator.devises.message),a(6),h("ngModel",t.niveauPrix.id),m("valid",t.validator.niveauPrix.valid),a(),U(t.niveauPrixList),a(4),m("valid",!1),a(),g(t.validator.niveauPrix.message),a(5),m("value",t.item.entreprise==null?null:t.item.entreprise.nom)("valid",t.validator.code.valid),a(),m("valid",!1),a(),g(t.validator.code.message)}}function We(r,u){if(r&1&&(n(0,"c-card",2)(1,"c-card-body"),_(2,"app-adresse-update",46),o()()),r&2){let t=s();a(2),m("getter",t.adresseGetter)("setter",t.adresseSetter)("validator",t.validator.adresse)}}var ut=(()=>{let u=class u{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=S(G),this.service=S(de),this.devisesService=S(_e),this.niveauPrixService=S(xe),this.taxeService=S(ge),this.entrepriseService=S(se),this.entrepriseSelectedService=S(me),this.validator=Se.init(()=>this.item).setAdresse(he.init(()=>this.adresse)),this.adresseGetter=()=>this.adresse,this.adresseSetter=e=>this.adresse=e,this.langueEnumList=Object.values(Ce)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/contacts/client"]).then()}ngOnInit(){if(this.loadEntreprise(),this.service.keepData){let e=this.devisesService.createdItemAfterReturn;e.created&&(this.item.devises=e.item,this.validator.devises.validate());let i=this.niveauPrixService.createdItemAfterReturn;i.created&&(this.item.niveauPrix=i.item,this.validator.niveauPrix.validate());let l=this.taxeService.createdItemAfterReturn;l.created&&(this.item.taxe=l.item)}else this.validator.reset();this.loadDevisesList(),this.loadNiveauPrixList(),this.loadTaxeList(),this.loadEntrepriseList()}loadEntreprise(){this.entrepriseService.findById(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.item.entreprise=e,console.log("entrep :",this.item.entreprise)},error:e=>console.log(e)})}loadDevisesList(){this.devisesService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.devisesList=e,console.log("devises List :",e)},error:e=>console.log(e)})}loadNiveauPrixList(){this.niveauPrixService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.niveauPrixList=e,console.log("niveauPrix List:",e)},error:e=>console.log(e)})}loadTaxeList(){this.taxeService.findAll().subscribe({next:e=>this.taxeList=e,error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAll().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/contacts/client"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get adresse(){return this.item.adresse==null&&(this.item.adresse=new pe),this.item.adresse}set adresse(e){this.item.adresse=e}get devises(){return this.item.devises==null&&(this.item.devises=new ue),this.item.devises}set devises(e){this.item.devises=e}get niveauPrix(){return this.item.niveauPrix==null&&(this.item.niveauPrix=new ve),this.item.niveauPrix}set niveauPrix(e){this.item.niveauPrix=e}get taxe(){return this.item.taxe==null&&(this.item.taxe=new fe),this.item.taxe}set taxe(e){this.item.taxe=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new le),this.item.entreprise}set entreprise(e){this.item.entreprise=e}navigateToDevisesCreate(){this.devisesService.returnUrl=this.router.url,this.router.navigate(["/parametres/devises/create"]).then()}navigateToNiveauPrixCreate(){this.niveauPrixService.returnUrl=this.router.url,this.router.navigate(["/parametres/niveau-prix/create"]).then()}navigateToTaxeCreate(){this.taxeService.returnUrl=this.router.url,this.router.navigate(["/parametres/taxe/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new ce}};u.\u0275fac=function(i){return new(i||u)},u.\u0275cmp=W({type:u,selectors:[["app-client-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[z],decls:10,vars:2,consts:[["createFrom",""],["createSubEntities",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/contacts/client",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"responsive-header",2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","code",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","code","type","text","placeholder","Code","name","code",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cilUser",2,"color","blue","font-size","30px"],["cLabel","","for","nom",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","nom","type","text","placeholder","Nom","name","nom",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-envelope-closed",2,"color","blue","font-size","30px"],["cLabel","","for","email",2,"color","black","font-family","'Times New Roman'","font-size","19px","font-weight","bold"],["cFormControl","","id","email","type","text","placeholder","Email","name","email",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-phone",2,"color","blue","font-size","30px"],["cLabel","","for","telephone",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","telephone","type","text","placeholder","Telephone","name","telephone",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-building",2,"color","blue","font-size","30px"],["cLabel","","for","taxeNumero",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","taxeNumero","type","number","placeholder","TaxeNumero","name","taxeNumero",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-descending",2,"color","blue","font-size","30px"],["cLabel","","for","rabais",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","rabais","type","number","placeholder","Rabais","name","rabais",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-dollar",2,"color","blue","font-size","30px"],["cLabel","","for","devises",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","devises","name","devises",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cilPlus"],["cIcon","","name","cil-bar-chart",2,"color","blue","font-size","30px"],["cLabel","","for","niveauPrix",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","niveauPrix","name","niveauPrix",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","entreprise",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","entreprise","type","text","name","entreprise","disabled","true",3,"blur","value","valid"],[3,"getter","setter","validator"]],template:function(i,l){i&1&&(w(0,Ue,17,4),V(1,0,we),w(3,ke,1,1),V(4,3,ye),w(6,Fe,79,36,"ng-template",null,0,k)(8,We,3,3,"ng-template",null,1,k)),i&2&&(a(),E(l.standAlon),a(3),E(!l.standAlon))},dependencies:[q,F,Q,K,oe,re,ae,$,ie,ne,ee,te,J,B,A,O,j,D,H,N,be],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let r=u;return r})();export{ut as ClientUpdateComponent};
