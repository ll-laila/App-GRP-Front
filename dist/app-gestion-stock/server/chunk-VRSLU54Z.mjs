import './polyfills.server.mjs';
import{a as pe}from"./chunk-D4TB5CJ3.mjs";import{a as be}from"./chunk-7HFGQBBK.mjs";import{a as xe,b as fe}from"./chunk-L3UL3GFY.mjs";import{a as _e,b as ve}from"./chunk-GFZE56YU.mjs";import{a as ge,b as he}from"./chunk-FXLB5UGM.mjs";import{a as ce,b as de}from"./chunk-JL3MSXD2.mjs";import{a as Se}from"./chunk-FJ3VEEHF.mjs";import{a as Ce}from"./chunk-VMQIQJK7.mjs";import{a as ue}from"./chunk-S4HJT3FM.mjs";import"./chunk-5OLX7UNI.mjs";import"./chunk-D4RJRHB5.mjs";import{a as le,b as se}from"./chunk-P5M4VVBN.mjs";import{b as $,c as ee,f as te,h as ie,i as ne,j as re,k as ae,n as oe}from"./chunk-ZDJMNRIQ.mjs";import{B as H,C as j,D as q,E as J,I as K,M as Q,N as D,T as X,U as Y,i as N,ma as Z,o as B,p as A,r as O}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import{c as P}from"./chunk-UR2QYS3H.mjs";import{a as me}from"./chunk-GAHSYCFE.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{e as G,f as R}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import"./chunk-YCIOFEEA.mjs";import{Ab as L,Eb as m,Kb as U,Mb as y,Nb as T,Ob as V,Pb as n,Qb as a,Rb as _,Ub as F,Vb as I,Yb as v,_b as s,ga as S,gc as M,hc as c,ib as r,ic as g,ka as W,nc as h,oc as C,pc as b,rc as z,va as d,wa as p,xa as x,xc as k,ya as f,yb as w,zb as E}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";var we=()=>[D,import("./chunk-GPMY24AR.mjs").then(o=>o.NgTemplateOutlet),N,R,Y,X,Z,P],ye=()=>[import("./chunk-GPMY24AR.mjs").then(o=>o.NgTemplateOutlet)];function Te(o,u){o&1&&_(0,"c-spinner",8)}function Ve(o,u){o&1&&(x(),_(0,"svg",9))}function Fe(o,u){o&1&&_(0,"c-spinner",8)}function Me(o,u){o&1&&(x(),_(0,"svg",11))}function Ee(o,u){o&1&&F(0)}function Le(o,u){o&1&&F(0)}function Ue(o,u){if(o&1){let t=I();n(0,"c-row",2)(1,"c-nav",3)(2,"c-nav-item",4)(3,"button",5),v("click",function(){d(t);let i=s();return p(i.cancel())}),c(4,"Annuler"),a()(),n(5,"c-nav-item",6)(6,"button",7),v("click",function(){d(t);let i=s();return p(i.reset())}),w(7,Te,1,0,"c-spinner",8)(8,Ve,1,0,":svg:svg",9),c(9," Actualiser "),a()(),n(10,"c-nav-item",6)(11,"button",10),v("click",function(){d(t);let i=s();return p(i.update())}),w(12,Fe,1,0,"c-spinner",8)(13,Me,1,0,":svg:svg",11),c(14," Modifier "),a()()()(),w(15,Ee,1,0,"ng-container",12)(16,Le,1,0,"ng-container",12)}if(o&2){let t=s(),e=M(7),i=M(9);r(7),U(t.resetting?7:8),r(5),U(t.sending?12:13),r(3),m("ngTemplateOutlet",e),r(),m("ngTemplateOutlet",i)}}function Ie(o,u){o&1&&F(0)}function ke(o,u){if(o&1&&w(0,Ie,1,0,"ng-container",12),o&2){s();let t=M(7);m("ngTemplateOutlet",t)}}function Pe(o,u){if(o&1&&(n(0,"option",41),c(1),a()),o&2){let t=u.$implicit;m("value",t.id),r(),g(t.nom)}}function Ne(o,u){if(o&1&&(n(0,"option",41),c(1),a()),o&2){let t=u.$implicit;m("value",t.id),r(),g(t.nouvelleDevise==null?null:t.nouvelleDevise.labelle)}}function De(o,u){if(o&1&&(n(0,"option",41),c(1),a()),o&2){let t=u.$implicit;m("value",t.id),r(),g(t.nom)}}function We(o,u){if(o&1){let t=I();n(0,"c-card",2)(1,"c-card-header")(2,"strong",13),c(3,'Merci de renseigner les d\xE9tails n\xE9cessaires pour mettre \xE0 jour les informations de ce "Fournisseur"'),a()(),n(4,"c-card-body")(5,"c-row",14)(6,"c-col",15),x(),_(7,"svg",16),f(),n(8,"label",17),c(9,"Nom complet"),a(),n(10,"input",18),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.nom,i)||(l.item.nom=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.nom.validate())}),a(),n(11,"c-form-feedback",19),c(12),a()(),n(13,"c-col",15),x(),_(14,"svg",20),f(),n(15,"label",21),c(16,"Code"),a(),n(17,"input",22),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.code,i)||(l.item.code=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.code.validate())}),a(),n(18,"c-form-feedback",19),c(19),a()(),n(20,"c-col",15),x(),_(21,"svg",23),f(),n(22,"label",24),c(23,"Email"),a(),n(24,"input",25),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.email,i)||(l.item.email=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.email.validate())}),a(),n(25,"c-form-feedback",19),c(26),a()(),n(27,"c-col",15),x(),_(28,"svg",26),f(),n(29,"label",27),c(30,"Site web"),a(),n(31,"input",28),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.siteweb,i)||(l.item.siteweb=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.siteweb.validate())}),a(),n(32,"c-form-feedback",19),c(33),a()(),n(34,"c-col",15),x(),_(35,"svg",29),f(),n(36,"label",30),c(37,"T\xE9l\xE9phone"),a(),n(38,"input",31),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.telephone,i)||(l.item.telephone=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.telephone.validate())}),a(),n(39,"c-form-feedback",19),c(40),a()(),n(41,"c-col",15),x(),_(42,"svg",32),f(),n(43,"label",33),c(44,"ICE "),a(),n(45,"input",34),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.taxeNumero,i)||(l.item.taxeNumero=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.taxeNumero.validate())}),a(),n(46,"c-form-feedback",19),c(47),a()(),n(48,"c-col",15),x(),_(49,"svg",35),f(),n(50,"label",36),c(51,"Remise"),a(),n(52,"input",37),b("ngModelChange",function(i){d(t);let l=s();return C(l.item.rabais,i)||(l.item.rabais=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.rabais.validate())}),a(),n(53,"c-form-feedback",19),c(54),a()(),n(55,"c-col",15),x(),_(56,"svg",38),f(),n(57,"label",39),c(58,"Taxe"),a(),n(59,"c-input-group")(60,"select",40),b("ngModelChange",function(i){d(t);let l=s();return C(l.taxe.id,i)||(l.taxe.id=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.taxe.validate())}),T(61,Pe,2,2,"option",41,y),a(),n(63,"button",42),v("click",function(){d(t);let i=s();return p(i.navigateToTaxeCreate())}),x(),_(64,"svg",43),a(),f(),n(65,"c-form-feedback",19),c(66),a()()(),n(67,"c-col",15),x(),_(68,"svg",44),f(),n(69,"label",45),c(70,"Devise"),a(),n(71,"c-input-group")(72,"select",46),b("ngModelChange",function(i){d(t);let l=s();return C(l.devises.id,i)||(l.devises.id=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.devises.validate())}),T(73,Ne,2,2,"option",41,y),a(),n(75,"button",42),v("click",function(){d(t);let i=s();return p(i.navigateToDevisesCreate())}),x(),_(76,"svg",43),a(),f(),n(77,"c-form-feedback",19),c(78),a()()(),n(79,"c-col",15),x(),_(80,"svg",47),f(),n(81,"label",48),c(82,"Niveau de fid\xE9lit\xE9"),a(),n(83,"c-input-group")(84,"select",49),b("ngModelChange",function(i){d(t);let l=s();return C(l.niveauPrix.id,i)||(l.niveauPrix.id=i),p(i)}),v("blur",function(){d(t);let i=s();return p(i.validator.niveauPrix.validate())}),T(85,De,2,2,"option",41,y),a(),n(87,"button",42),v("click",function(){d(t);let i=s();return p(i.navigateToNiveauPrixCreate())}),x(),_(88,"svg",43),a(),f(),n(89,"c-form-feedback",19),c(90),a()()(),n(91,"c-col",15),x(),_(92,"svg",32),f(),n(93,"label",50),c(94,"Entreprise"),a(),n(95,"input",51),v("blur",function(){d(t);let i=s();return p(i.validator.code.validate())}),a(),n(96,"c-form-feedback",19),c(97),a()()()()()}if(o&2){let t=s();r(10),h("ngModel",t.item.nom),m("valid",t.validator.nom.valid),r(),m("valid",!1),r(),g(t.validator.nom.message),r(5),h("ngModel",t.item.code),m("valid",t.validator.code.valid),r(),m("valid",!1),r(),g(t.validator.code.message),r(5),h("ngModel",t.item.email),m("valid",t.validator.email.valid),r(),m("valid",!1),r(),g(t.validator.email.message),r(5),h("ngModel",t.item.siteweb),m("valid",t.validator.siteweb.valid),r(),m("valid",!1),r(),g(t.validator.siteweb.message),r(5),h("ngModel",t.item.telephone),m("valid",t.validator.telephone.valid),r(),m("valid",!1),r(),g(t.validator.telephone.message),r(5),h("ngModel",t.item.taxeNumero),m("valid",t.validator.taxeNumero.valid),r(),m("valid",!1),r(),g(t.validator.taxeNumero.message),r(5),h("ngModel",t.item.rabais),m("valid",t.validator.rabais.valid),r(),m("valid",!1),r(),g(t.validator.rabais.message),r(6),h("ngModel",t.taxe.id),m("valid",t.validator.taxe.valid),r(),V(t.taxeList),r(4),m("valid",!1),r(),g(t.validator.taxe.message),r(6),h("ngModel",t.devises.id),m("valid",t.validator.devises.valid),r(),V(t.devisesList),r(4),m("valid",!1),r(),g(t.validator.devises.message),r(6),h("ngModel",t.niveauPrix.id),m("valid",t.validator.niveauPrix.valid),r(),V(t.niveauPrixList),r(4),m("valid",!1),r(),g(t.validator.niveauPrix.message),r(5),m("value",t.item.entreprise==null?null:t.item.entreprise.nom)("valid",t.validator.code.valid),r(),m("valid",!1),r(),g(t.validator.code.message)}}function ze(o,u){if(o&1&&(n(0,"c-card",2)(1,"c-card-body"),_(2,"app-adresse-update",52),a()()),o&2){let t=s();r(2),m("getter",t.adresseGetter)("setter",t.adresseSetter)("validator",t.validator.adresse)}}var _t=(()=>{let u=class u{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=S(G),this.service=S(de),this.devisesService=S(ve),this.niveauPrixService=S(fe),this.taxeService=S(he),this.entrepriseService=S(se),this.entrepriseSelectedService=S(me),this.validator=pe.init(()=>this.item).setAdresse(Ce.init(()=>this.adresse)),this.adresseGetter=()=>this.adresse,this.adresseSetter=e=>this.adresse=e,this.langueEnumList=Object.values(be)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/contacts/fournisseur"]).then()}ngOnInit(){if(this.loadEntreprise(),this.service.keepData){let e=this.devisesService.createdItemAfterReturn;e.created&&(this.item.devises=e.item,this.validator.devises.validate());let i=this.niveauPrixService.createdItemAfterReturn;i.created&&(this.item.niveauPrix=i.item,this.validator.niveauPrix.validate());let l=this.taxeService.createdItemAfterReturn;l.created&&(this.item.taxe=l.item,this.validator.taxe.validate())}else this.validator.reset();this.loadDevisesList(),this.loadNiveauPrixList(),this.loadTaxeList(),this.loadEntrepriseList()}loadEntreprise(){this.entrepriseService.findById(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.item.entreprise=e,console.log("entre :",this.item.entreprise)},error:e=>console.log(e)})}loadDevisesList(){this.devisesService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.devisesList=e,console.log("devises List :",e)},error:e=>console.log(e)})}loadNiveauPrixList(){this.niveauPrixService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.niveauPrixList=e,console.log("niveauPrix List:",e)},error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAll().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}loadTaxeList(){this.taxeService.findAllOptimized().subscribe({next:e=>this.taxeList=e,error:e=>console.log(e)})}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/contacts/fournisseur"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get adresse(){return this.item.adresse==null&&(this.item.adresse=new ue),this.item.adresse}set adresse(e){this.item.adresse=e}get devises(){return this.item.devises==null&&(this.item.devises=new _e),this.item.devises}set devises(e){this.item.devises=e}get niveauPrix(){return this.item.niveauPrix==null&&(this.item.niveauPrix=new xe),this.item.niveauPrix}set niveauPrix(e){this.item.niveauPrix=e}get taxe(){return this.item.taxe==null&&(this.item.taxe=new ge),this.item.taxe}set taxe(e){this.item.taxe=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new le),this.item.entreprise}set entreprise(e){this.item.entreprise=e}navigateToDevisesCreate(){this.devisesService.returnUrl=this.router.url,this.router.navigate(["/parametres/devises/create"]).then()}navigateToNiveauPrixCreate(){this.niveauPrixService.returnUrl=this.router.url,this.router.navigate(["/parametres/niveau-prix/create"]).then()}navigateToTaxeCreate(){this.taxeService.returnUrl=this.router.url,this.router.navigate(["/parametres/taxe/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new ce}};u.\u0275fac=function(i){return new(i||u)},u.\u0275cmp=W({type:u,selectors:[["app-fournisseur-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[z],decls:10,vars:2,consts:[["createFrom",""],["createSubEntities",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/contacts/fournisseur",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"responsive-header",2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cilUser",2,"color","blue","font-size","30px"],["cLabel","","for","nom",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","nom","type","text","placeholder","Nom","name","nom",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","code",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","code","type","text","placeholder","Code","name","code",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-envelope-closed",2,"color","blue","font-size","30px"],["cLabel","","for","email",2,"color","black","font-family","'Times New Roman'","font-size","19px","font-weight","bold"],["cFormControl","","id","email","type","text","placeholder","Email","name","email",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cib-openstreetmap",2,"color","blue","font-size","30px"],["cLabel","","for","siteweb",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","siteweb","type","text","placeholder","Siteweb","name","siteweb",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-phone",2,"color","blue","font-size","30px"],["cLabel","","for","telephone",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","telephone","type","text","placeholder","Telephone","name","telephone",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-building",2,"color","blue","font-size","30px"],["cLabel","","for","taxeNumero",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","taxeNumero","type","number","placeholder","TaxeNumero","name","taxeNumero",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-descending",2,"color","blue","font-size","30px"],["cLabel","","for","rabais",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","rabais","type","number","placeholder","Rabais","name","rabais",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-ascending",2,"color","blue","font-size","30px"],["cLabel","","for","taxe",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","taxe","name","taxe",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cilPlus"],["cIcon","","name","cil-dollar",2,"color","blue","font-size","30px"],["cLabel","","for","devises",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","devises","name","devises",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-bar-chart",2,"color","blue","font-size","30px"],["cLabel","","for","niveauPrix",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","niveauPrix","name","niveauPrix",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","entreprise",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","entreprise","type","text","name","entreprise","disabled","true",3,"blur","value","valid"],[3,"getter","setter","validator"]],template:function(i,l){i&1&&(w(0,Ue,17,4),E(1,0,we),w(3,ke,1,1),E(4,3,ye),w(6,We,98,44,"ng-template",null,0,k)(8,ze,3,3,"ng-template",null,1,k)),i&2&&(r(),L(l.standAlon),r(3),L(!l.standAlon))},dependencies:[q,D,Q,K,oe,re,ae,$,ie,ne,ee,te,J,B,A,O,j,N,H,P,Se],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let o=u;return o})();export{_t as FournisseurUpdateComponent};
