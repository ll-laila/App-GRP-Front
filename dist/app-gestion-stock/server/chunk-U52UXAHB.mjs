import './polyfills.server.mjs';
import{a as Ee}from"./chunk-3CREZIUJ.mjs";import{a as V,b as xe}from"./chunk-CAPKOXWR.mjs";import{a as ye}from"./chunk-BXYLRQSW.mjs";import{a as Te}from"./chunk-7HFGQBBK.mjs";import{a as ge,b as he}from"./chunk-T6QZKA6D.mjs";import{a as fe,b as Ce}from"./chunk-KPXGFLZX.mjs";import{a as be,b as Se}from"./chunk-2YG2YHPD.mjs";import{a as we}from"./chunk-VMQIQJK7.mjs";import{a as z}from"./chunk-VL7DGWE6.mjs";import"./chunk-HKW24TJA.mjs";import"./chunk-D4RJRHB5.mjs";import{a as ne}from"./chunk-IJRDI6QA.mjs";import{a as ue,b as ve}from"./chunk-7YOAHTJJ.mjs";import{b as re,c as ae,f as oe,h as le,i as se,j as ce,k as me,m as de,n as pe}from"./chunk-ZDJMNRIQ.mjs";import{B as K,C as Q,D as X,E as Y,I as Z,M as $,N as W,T as ee,U as te,i as R,ma as ie,o as j,p as q,r as J}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import{c as F}from"./chunk-UR2QYS3H.mjs";import{a as _e}from"./chunk-GAHSYCFE.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-32WZQ4LQ.mjs";import{e as O,f as U}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import"./chunk-YCIOFEEA.mjs";import{Ab as k,Eb as c,Kb as L,Mb as D,Nb as P,Ob as I,Pb as n,Qb as o,Rb as _,Ub as y,Vb as T,Yb as v,_b as s,ga as g,gc as E,hc as m,ib as r,ic as C,ka as A,nc as h,oc as b,pc as S,rc as H,va as d,wa as p,xa as x,xc as N,ya as f,yb as w,zb as M}from"./chunk-VWPO2VC4.mjs";import{a as B,b as G}from"./chunk-XAJIYFV3.mjs";var Ve=()=>[W,import("./chunk-GPMY24AR.mjs").then(a=>a.NgTemplateOutlet),R,U,te,ee,ie,F],Me=()=>[import("./chunk-GPMY24AR.mjs").then(a=>a.NgTemplateOutlet)];function ke(a,u){if(a&1){let i=T();n(0,"c-nav-item",4)(1,"button",12),v("click",function(){d(i);let t=s(2);return p(t.retour())}),m(2,"Return"),o()()}if(a&2){let i=s(2);r(),c("routerLink",i.returnUrl)}}function Le(a,u){a&1&&_(0,"c-spinner",9)}function De(a,u){a&1&&(x(),_(0,"svg",10))}function Pe(a,u){a&1&&y(0)}function Ie(a,u){a&1&&y(0)}function Ne(a,u){if(a&1){let i=T();n(0,"c-row",2)(1,"c-nav",3),w(2,ke,3,1,"c-nav-item",4),n(3,"c-nav-item",5)(4,"button",6),v("click",function(){d(i);let t=s();return p(t.cancel())}),m(5,"Annuler"),o()(),n(6,"c-nav-item",4)(7,"button",7),v("click",function(){d(i);let t=s();return p(t.reset())}),m(8,"R\xE9initialiser"),o()(),n(9,"c-nav-item",4)(10,"button",8),v("click",function(){d(i);let t=s();return p(t.create())}),w(11,Le,1,0,"c-spinner",9)(12,De,1,0,":svg:svg",10),m(13," Cr\xE9er "),o()()()(),w(14,Pe,1,0,"ng-container",11)(15,Ie,1,0,"ng-container",11)}if(a&2){let i=s(),e=E(7),t=E(9);r(2),L(i.toReturn?2:-1),r(9),L(i.sending?11:12),r(3),c("ngTemplateOutlet",e),r(),c("ngTemplateOutlet",t)}}function Fe(a,u){a&1&&y(0)}function Re(a,u){if(a&1&&w(0,Fe,1,0,"ng-container",11),a&2){s();let i=E(7);c("ngTemplateOutlet",i)}}function We(a,u){if(a&1&&(n(0,"option",38),m(1),o()),a&2){let i=u.$implicit;c("value",i.id),r(),C(i.nouvelleDevise==null?null:i.nouvelleDevise.labelle)}}function ze(a,u){if(a&1&&(n(0,"option",38),m(1),o()),a&2){let i=u.$implicit;c("value",i.id),r(),C(i.nom)}}function Be(a,u){if(a&1){let i=T();n(0,"c-card",2)(1,"c-card-header")(2,"strong",13),m(3,'Veuillez remplir les informations ci-dessous pour cr\xE9er un nouveau "Client"'),o()(),n(4,"c-card-body")(5,"c-row",14)(6,"c-col",15),x(),_(7,"svg",16),f(),n(8,"label",17),m(9,"Code"),o(),n(10,"input",18),S("ngModelChange",function(t){d(i);let l=s();return b(l.item.code,t)||(l.item.code=t),p(t)}),v("blur",function(){d(i);let t=s();return p(t.validator.code.validate())}),o(),n(11,"c-form-feedback",19),m(12),o()(),n(13,"c-col",15),x(),_(14,"svg",20),f(),n(15,"label",21),m(16,"Nom complet"),o(),n(17,"input",22),S("ngModelChange",function(t){d(i);let l=s();return b(l.item.nom,t)||(l.item.nom=t),p(t)}),v("blur",function(){d(i);let t=s();return p(t.validator.nom.validate())}),o(),n(18,"c-form-feedback",19),m(19),o()(),n(20,"c-col",15),x(),_(21,"svg",23),f(),n(22,"label",24),m(23,"Email"),o(),n(24,"input",25),S("ngModelChange",function(t){d(i);let l=s();return b(l.item.email,t)||(l.item.email=t),p(t)}),v("blur",function(){d(i);let t=s();return p(t.validator.email.validate())}),o(),n(25,"c-form-feedback",19),m(26),o()(),n(27,"c-col",15),x(),_(28,"svg",26),f(),n(29,"label",27),m(30,"T\xE9l\xE9phone"),o(),n(31,"input",28),S("ngModelChange",function(t){d(i);let l=s();return b(l.item.telephone,t)||(l.item.telephone=t),p(t)}),v("blur",function(){d(i);let t=s();return p(t.validator.telephone.validate())}),o(),n(32,"c-form-feedback",19),m(33),o()(),n(34,"c-col",15),x(),_(35,"svg",29),f(),n(36,"label",30),m(37,"Taxe "),o(),n(38,"input",31),S("ngModelChange",function(t){d(i);let l=s();return b(l.item.taxeNumero,t)||(l.item.taxeNumero=t),p(t)}),v("blur",function(){d(i);let t=s();return p(t.validator.taxeNumero.validate())}),o(),n(39,"c-form-feedback",19),m(40),o()(),n(41,"c-col",15),x(),_(42,"svg",32),f(),n(43,"label",33),m(44,"Remise"),o(),n(45,"input",34),S("ngModelChange",function(t){d(i);let l=s();return b(l.item.rabais,t)||(l.item.rabais=t),p(t)}),v("blur",function(){d(i);let t=s();return p(t.validator.rabais.validate())}),o(),n(46,"c-form-feedback",19),m(47),o()(),n(48,"c-col",15),x(),_(49,"svg",35),f(),n(50,"label",36),m(51,"Devise"),o(),n(52,"c-input-group")(53,"select",37),S("ngModelChange",function(t){d(i);let l=s();return b(l.devises.id,t)||(l.devises.id=t),p(t)}),v("blur",function(){d(i);let t=s();return p(t.validator.devises.validate())}),P(54,We,2,2,"option",38,D),o(),n(56,"button",39),v("click",function(){d(i);let t=s();return p(t.navigateToDevisesCreate())}),x(),_(57,"svg",10),o(),f(),n(58,"c-form-feedback",19),m(59),o()()(),n(60,"c-col",15),x(),_(61,"svg",40),f(),n(62,"label",41),m(63,"Niveau de prix"),o(),n(64,"c-input-group")(65,"select",42),S("ngModelChange",function(t){d(i);let l=s();return b(l.niveauPrix.id,t)||(l.niveauPrix.id=t),p(t)}),v("blur",function(){d(i);let t=s();return p(t.validator.niveauPrix.validate())}),P(66,ze,2,2,"option",38,D),o(),n(68,"button",39),v("click",function(){d(i);let t=s();return p(t.navigateToNiveauPrixCreate())}),x(),_(69,"svg",10),o(),f(),n(70,"c-form-feedback",19),m(71),o()()(),n(72,"c-col",15),x(),_(73,"svg",29),f(),n(74,"label",43),m(75,"Entreprise"),o(),n(76,"input",44),v("blur",function(){d(i);let t=s();return p(t.validator.code.validate())}),o(),n(77,"c-form-feedback",19),m(78),o()()()()()}if(a&2){let i=s();r(10),h("ngModel",i.item.code),c("valid",i.validator.code.valid),r(),c("valid",!1),r(),C(i.validator.code.message),r(5),h("ngModel",i.item.nom),c("valid",i.validator.nom.valid),r(),c("valid",!1),r(),C(i.validator.nom.message),r(5),h("ngModel",i.item.email),c("valid",i.validator.email.valid),r(),c("valid",!1),r(),C(i.validator.email.message),r(5),h("ngModel",i.item.telephone),c("valid",i.validator.telephone.valid),r(),c("valid",!1),r(),C(i.validator.telephone.message),r(5),h("ngModel",i.item.taxeNumero),c("valid",i.validator.taxeNumero.valid),r(),c("valid",!1),r(),C(i.validator.taxeNumero.message),r(5),h("ngModel",i.item.rabais),c("valid",i.validator.rabais.valid),r(),c("valid",!1),r(),C(i.validator.rabais.message),r(6),h("ngModel",i.devises.id),c("valid",i.validator.devises.valid),r(),I(i.devisesList),r(4),c("valid",!1),r(),C(i.validator.devises.message),r(6),h("ngModel",i.niveauPrix.id),c("valid",i.validator.niveauPrix.valid),r(),I(i.niveauPrixList),r(4),c("valid",!1),r(),C(i.validator.niveauPrix.message),r(5),c("value",i.item.entreprise==null?null:i.item.entreprise.nom)("valid",i.validator.code.valid),r(),c("valid",!1),r(),C(i.validator.code.message)}}function Ge(a,u){if(a&1&&(n(0,"c-card",2)(1,"c-card-body"),_(2,"app-adresse-create",45),o()()),a&2){let i=s();r(2),c("getter",i.adresseGetter)("setter",i.adresseSetter)("validator",i.validator.adresse)}}var Ct=(()=>{let u=class u{constructor(){this.sending=!1,this.standAlon=!0,this.router=g(O),this.service=g(xe),this.devisesService=g(Ce),this.niveauPrixService=g(he),this.taxeService=g(Se),this.entrepriseService=g(ve),this.entrepriseSelectedService=g(_e),this.formBuilder=g(de),this.validator=Ee.init(()=>this.item).setAdresse(we.init(()=>this.adresse)),this.toasterService=g(ne),this.currentCodeNumber=1,this.adresseGetter=()=>this.adresse,this.adresseSetter=e=>this.adresse=e,this.langueEnumList=Object.values(Te)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngOnInit(){if(this.loadEntreprise(),this.service.keepData){let e=this.devisesService.createdItemAfterReturn;e.created&&(this.item.devises=e.item,this.validator.devises.validate());let t=this.niveauPrixService.createdItemAfterReturn;t.created&&(this.item.niveauPrix=t.item,this.validator.niveauPrix.validate());let l=this.taxeService.createdItemAfterReturn;l.created&&(this.item.taxe=l.item)}else this.reset(!1);this.service.keepData=!1,this.item.adresse=new z,this.loadDevisesList(),this.loadNiveauPrixList(),this.loadTaxeList(),this.loadEntrepriseList(),this.clientForm=this.formBuilder.group({code:[{value:this.generateCode(),disabled:!0}]}),this.service.getNextCode().subscribe({next:e=>this.item.code=e.code,error:e=>console.log(e)})}loadDevisesList(){this.devisesService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.devisesList=e,console.log("devises List :",e)},error:e=>console.log(e)})}loadNiveauPrixList(){this.niveauPrixService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.niveauPrixList=e,console.log("niveauPrix List:",e)},error:e=>console.log(e)})}loadTaxeList(){this.taxeService.findAll().subscribe({next:e=>this.taxeList=e,error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAll().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}loadEntreprise(){this.entrepriseService.findById(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.item.entreprise=e,console.log("entre :",this.item.entreprise)},error:e=>console.log(e)})}create(){if(this.item.idNiveauPrix=this.item.niveauPrix?.id,this.item.idEntreprise=this.entrepriseSelectedService.getEntrepriseSelected(),console.log(this.item),!this.validator.validate())return;this.sending=!0,this.service.create().subscribe({next:t=>{if(this.sending=!1,t!=null){if(this.toReturn){this.item=t,this.router.navigate([this.returnUrl]).then();return}this.item=new V,this.router.navigate(["/contacts/client"]).then(),this.toasterService.toast({message:"Un nouveau client a \xE9t\xE9 ajout\xE9",color:"success"})}},error:t=>{this.sending=!1,console.log(t),this.validator.import(t.error)}});let e=G(B({},this.clientForm.value),{code:this.generateCode()})}generateCode(){return"I"+this.currentCodeNumber.toString().padStart(7,"0")}reset(e=!0){(e||this.item==null)&&(this.item=new V),this.validator.reset()}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get adresse(){return this.item.adresse==null&&(this.item.adresse=new z),this.item.adresse}set adresse(e){this.item.adresse=e}get devises(){return this.item.devises==null&&(this.item.devises=new fe),this.item.devises}set devises(e){this.item.devises=e}get niveauPrix(){return this.item.niveauPrix==null&&(this.item.niveauPrix=new ge),this.item.niveauPrix}set niveauPrix(e){this.item.niveauPrix=e}get taxe(){return this.item.taxe==null&&(this.item.taxe=new be),this.item.taxe}set taxe(e){this.item.taxe=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new ue),this.item.entreprise}set entreprise(e){this.item.entreprise=e}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}navigateToDevisesCreate(){this.devisesService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/devises/create"]).then()}navigateToNiveauPrixCreate(){this.niveauPrixService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/niveau-prix/create"]).then()}navigateToTaxeCreate(){this.taxeService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/taxe/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new V}retour(){this.router.navigate(["/contacts/client/list"]).then()}};u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=A({type:u,selectors:[["app-client-create"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[H],decls:10,vars:2,consts:[["createFrom",""],["createSubEntities",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/contacts/client",3,"click"],["cButton","","color","dark",3,"click"],["cButton","","color","primary",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilPlus"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"click","routerLink"],[1,"responsive-header",2,"color","#1d0528","font-family",`'Times New Roman'
      font-size: 21px`,"margin-left","300px",`.responsive-header{

  font-family`,"'Times New Roman'","font-size","21px","margin-left","300px",`}

@media (max-width: 1024px) {
  /* styles pour les tablettes */
  .responsive-header {
    font-size`,"18px","margin-left","100px",`}
}

@media (max-width: 768px) {
  /* styles pour les petits \xE9crans comme les t\xE9l\xE9phones */
  .responsive-header {
    font-size`,"16px","margin-left","50px","text-align","center",`}
}

@media (max-width: 480px) {
  /* styles pour les tr\xE8s petits \xE9crans */
  .responsive-header {
    font-size`,"14px","margin-left","20px","text-align","center"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","code",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","code","type","text","name","code","disabled","true",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cilUser",2,"color","blue","font-size","30px"],["cLabel","","for","nom",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","nom","type","text","name","nom",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-envelope-closed",2,"color","blue","font-size","30px"],["cLabel","","for","email",2,"color","black","font-family","'Times New Roman'","font-size","19px","font-weight","bold"],["cFormControl","","id","email","type","text","name","email",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-phone",2,"color","blue","font-size","30px"],["cLabel","","for","telephone",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","telephone","type","text","name","telephone",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-building",2,"color","blue","font-size","30px"],["cLabel","","for","taxeNumero",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","taxeNumero","type","number","name","taxeNumero",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-descending",2,"color","blue","font-size","30px"],["cLabel","","for","rabais",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","rabais","type","number","name","rabais",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-dollar",2,"color","blue","font-size","30px"],["cLabel","","for","devises",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","devises","name","devises",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cil-bar-chart",2,"color","blue","font-size","30px"],["cLabel","","for","niveauPrix",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","niveauPrix","name","niveauPrix",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","entreprise",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","entreprise","type","text","name","entreprise","disabled","true",3,"blur","value","valid"],[3,"getter","setter","validator"]],template:function(t,l){t&1&&(w(0,Ne,16,4),M(1,0,Ve),w(3,Re,1,1),M(4,3,Me),w(6,Be,79,36,"ng-template",null,0,N)(8,Ge,3,3,"ng-template",null,1,N)),t&2&&(r(),k(l.standAlon),r(3),k(!l.standAlon))},dependencies:[X,W,$,Z,pe,ce,me,re,le,se,ae,oe,Y,j,q,J,Q,R,F,K,ye],styles:[`#code[disabled][_ngcontent-%COMP%] {
            background-color: #fff;
            color: #000;
            border: 1px solid #ccc;
          }`]});let a=u;return a})();export{Ct as ClientCreateComponent};
