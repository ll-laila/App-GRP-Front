import{a as xe}from"./chunk-FT74UAXQ.js";import{a as ye}from"./chunk-SMUGICND.js";import{a as Te}from"./chunk-R2QXVSSQ.js";import{a as Ce,b as he}from"./chunk-JJWAPVHG.js";import{a as fe,b as ge}from"./chunk-URSAOOCG.js";import{a as be,b as Se}from"./chunk-ECGNXNAA.js";import{a as we}from"./chunk-AHUUM4CZ.js";import{a as z}from"./chunk-JOZTQQGW.js";import"./chunk-C3MUFMYW.js";import"./chunk-SR3OXJX3.js";import{a as ve}from"./chunk-J5REKJTI.js";import{a as k,b as _e}from"./chunk-HCN6FDQI.js";import{b as ie,c as ne,f as re,h as ae,i as oe,j as se,k as le,m as ce,n as me}from"./chunk-RMR25O2K.js";import{a as de,b as pe}from"./chunk-36NSVSE4.js";import{$ as ee,I as J,J as K,K as Q,L as X,P as Y,T as Z,U as R,_ as $,p as W,ta as te,v as U,w as j,y as q}from"./chunk-ETPUSV7N.js";import{c as N}from"./chunk-DKLNZNMU.js";import{a as ue}from"./chunk-PTMIGOEM.js";import{d as H,e as O}from"./chunk-EVAI7AMW.js";import"./chunk-2BQUVQN4.js";import"./chunk-RTZTBWEW.js";import"./chunk-VVDYSQS6.js";import"./chunk-LUIBGOM6.js";import{Cb as c,Ib as P,Kb as y,Lb as T,Mb as V,Nb as n,Ob as a,Pb as v,Sb as F,Tb as E,Wb as _,Yb as l,ec as M,fc as m,ga as S,gb as r,gc as g,ka as G,lc as C,mc as h,nc as b,pc as A,va as d,vc as D,wa as p,wb as w,xa as x,xb as L,ya as f,yb as I}from"./chunk-BXK32XEB.js";import"./chunk-RGL3W33T.js";var Ve=()=>[R,import("./chunk-K4L4KWTC.js").then(o=>o.NgTemplateOutlet),W,O,ee,$,te,N],Fe=()=>[import("./chunk-K4L4KWTC.js").then(o=>o.NgTemplateOutlet)];function Ee(o,u){if(o&1){let t=E();n(0,"c-nav-item",4)(1,"button",12),_("click",function(){d(t);let i=l(2);return p(i.retour())}),m(2,"Return"),a()()}if(o&2){let t=l(2);r(),c("routerLink",t.returnUrl)}}function Me(o,u){o&1&&v(0,"c-spinner",9)}function ke(o,u){o&1&&(x(),v(0,"svg",10))}function Le(o,u){o&1&&F(0)}function Ie(o,u){o&1&&F(0)}function Pe(o,u){if(o&1){let t=E();n(0,"c-row",2)(1,"c-nav",3),w(2,Ee,3,1,"c-nav-item",4),n(3,"c-nav-item",5)(4,"button",6),_("click",function(){d(t);let i=l();return p(i.cancel())}),m(5,"Annuler"),a()(),n(6,"c-nav-item",4)(7,"button",7),_("click",function(){d(t);let i=l();return p(i.reset())}),m(8,"R\xE9inisialisert"),a()(),n(9,"c-nav-item",4)(10,"button",8),_("click",function(){d(t);let i=l();return p(i.create())}),w(11,Me,1,0,"c-spinner",9)(12,ke,1,0,":svg:svg",10),m(13," Cr\xE9er "),a()()()(),w(14,Le,1,0,"ng-container",11)(15,Ie,1,0,"ng-container",11)}if(o&2){let t=l(),e=M(7),i=M(9);r(2),P(t.toReturn?2:-1),r(9),P(t.sending?11:12),r(3),c("ngTemplateOutlet",e),r(),c("ngTemplateOutlet",i)}}function De(o,u){o&1&&F(0)}function Ne(o,u){if(o&1&&w(0,De,1,0,"ng-container",11),o&2){l();let t=M(7);c("ngTemplateOutlet",t)}}function We(o,u){if(o&1&&(n(0,"option",41),m(1),a()),o&2){let t=u.$implicit;c("value",t.id),r(),g(t.nom)}}function Re(o,u){if(o&1&&(n(0,"option",41),m(1),a()),o&2){let t=u.$implicit;c("value",t.id),r(),g(t.nouvelleDevise==null?null:t.nouvelleDevise.labelle)}}function ze(o,u){if(o&1&&(n(0,"option",41),m(1),a()),o&2){let t=u.$implicit;c("value",t.id),r(),g(t.nom)}}function Be(o,u){if(o&1){let t=E();n(0,"c-card",2)(1,"c-card-header")(2,"strong",13),m(3,'Veuillez remplir les informations ci-dessous pour cr\xE9er un nouveau "Fournisseur"'),a()(),n(4,"c-card-body")(5,"c-row",14)(6,"c-col",15),x(),v(7,"svg",16),f(),n(8,"label",17),m(9,"Code"),a(),n(10,"input",18),b("ngModelChange",function(i){d(t);let s=l();return h(s.item.code,i)||(s.item.code=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.code.validate())}),a(),n(11,"c-form-feedback",19),m(12),a()(),n(13,"c-col",15),x(),v(14,"svg",20),f(),n(15,"label",21),m(16,"Nom complet"),a(),n(17,"input",22),b("ngModelChange",function(i){d(t);let s=l();return h(s.item.nom,i)||(s.item.nom=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.nom.validate())}),a(),n(18,"c-form-feedback",19),m(19),a()(),n(20,"c-col",15),x(),v(21,"svg",23),f(),n(22,"label",24),m(23,"Email"),a(),n(24,"input",25),b("ngModelChange",function(i){d(t);let s=l();return h(s.item.email,i)||(s.item.email=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.email.validate())}),a(),n(25,"c-form-feedback",19),m(26),a()(),n(27,"c-col",15),x(),v(28,"svg",26),f(),n(29,"label",27),m(30,"Site web"),a(),n(31,"input",28),b("ngModelChange",function(i){d(t);let s=l();return h(s.item.siteweb,i)||(s.item.siteweb=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.siteweb.validate())}),a(),n(32,"c-form-feedback",19),m(33),a()(),n(34,"c-col",15),x(),v(35,"svg",29),f(),n(36,"label",30),m(37,"T\xE9l\xE9phone"),a(),n(38,"input",31),b("ngModelChange",function(i){d(t);let s=l();return h(s.item.telephone,i)||(s.item.telephone=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.telephone.validate())}),a(),n(39,"c-form-feedback",19),m(40),a()(),n(41,"c-col",15),x(),v(42,"svg",32),f(),n(43,"label",33),m(44,"ICE "),a(),n(45,"input",34),b("ngModelChange",function(i){d(t);let s=l();return h(s.item.taxeNumero,i)||(s.item.taxeNumero=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.taxeNumero.validate())}),a(),n(46,"c-form-feedback",19),m(47),a()(),n(48,"c-col",15),x(),v(49,"svg",35),f(),n(50,"label",36),m(51,"Remise"),a(),n(52,"input",37),b("ngModelChange",function(i){d(t);let s=l();return h(s.item.rabais,i)||(s.item.rabais=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.rabais.validate())}),a(),n(53,"c-form-feedback",19),m(54),a()(),n(55,"c-col",15),x(),v(56,"svg",38),f(),n(57,"label",39),m(58,"Taxe"),a(),n(59,"c-input-group")(60,"select",40),b("ngModelChange",function(i){d(t);let s=l();return h(s.taxe.id,i)||(s.taxe.id=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.taxe.validate())}),T(61,We,2,2,"option",41,y),a(),n(63,"button",42),_("click",function(){d(t);let i=l();return p(i.navigateToTaxeCreate())}),x(),v(64,"svg",10),a(),f(),n(65,"c-form-feedback",19),m(66),a()()(),n(67,"c-col",15),x(),v(68,"svg",43),f(),n(69,"label",44),m(70,"Devise"),a(),n(71,"c-input-group")(72,"select",45),b("ngModelChange",function(i){d(t);let s=l();return h(s.devises.id,i)||(s.devises.id=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.devises.validate())}),T(73,Re,2,2,"option",41,y),a(),n(75,"button",42),_("click",function(){d(t);let i=l();return p(i.navigateToDevisesCreate())}),x(),v(76,"svg",10),a(),f(),n(77,"c-form-feedback",19),m(78),a()()(),n(79,"c-col",15),x(),v(80,"svg",46),f(),n(81,"label",47),m(82,"Niveau de prix"),a(),n(83,"c-input-group")(84,"select",48),b("ngModelChange",function(i){d(t);let s=l();return h(s.niveauPrix.id,i)||(s.niveauPrix.id=i),p(i)}),_("blur",function(){d(t);let i=l();return p(i.validator.niveauPrix.validate())}),T(85,ze,2,2,"option",41,y),a(),n(87,"button",42),_("click",function(){d(t);let i=l();return p(i.navigateToNiveauPrixCreate())}),x(),v(88,"svg",10),a(),f(),n(89,"c-form-feedback",19),m(90),a()()(),n(91,"c-col",15),x(),v(92,"svg",32),f(),n(93,"label",49),m(94,"Entreprise"),a(),n(95,"input",50),_("blur",function(){d(t);let i=l();return p(i.validator.code.validate())}),a(),n(96,"c-form-feedback",19),m(97),a()()()()()}if(o&2){let t=l();r(10),C("ngModel",t.item.code),c("valid",t.validator.code.valid),r(),c("valid",!1),r(),g(t.validator.code.message),r(5),C("ngModel",t.item.nom),c("valid",t.validator.nom.valid),r(),c("valid",!1),r(),g(t.validator.nom.message),r(5),C("ngModel",t.item.email),c("valid",t.validator.email.valid),r(),c("valid",!1),r(),g(t.validator.email.message),r(5),C("ngModel",t.item.siteweb),c("valid",t.validator.siteweb.valid),r(),c("valid",!1),r(),g(t.validator.siteweb.message),r(5),C("ngModel",t.item.telephone),c("valid",t.validator.telephone.valid),r(),c("valid",!1),r(),g(t.validator.telephone.message),r(5),C("ngModel",t.item.taxeNumero),c("valid",t.validator.taxeNumero.valid),r(),c("valid",!1),r(),g(t.validator.taxeNumero.message),r(5),C("ngModel",t.item.rabais),c("valid",t.validator.rabais.valid),r(),c("valid",!1),r(),g(t.validator.rabais.message),r(6),C("ngModel",t.taxe.id),c("valid",t.validator.taxe.valid),r(),V(t.taxeList),r(4),c("valid",!1),r(),g(t.validator.taxe.message),r(6),C("ngModel",t.devises.id),c("valid",t.validator.devises.valid),r(),V(t.devisesList),r(4),c("valid",!1),r(),g(t.validator.devises.message),r(6),C("ngModel",t.niveauPrix.id),c("valid",t.validator.niveauPrix.valid),r(),V(t.niveauPrixList),r(4),c("valid",!1),r(),g(t.validator.niveauPrix.message),r(5),c("value",t.item.entreprise==null?null:t.item.entreprise.nom)("valid",t.validator.code.valid),r(),c("valid",!1),r(),g(t.validator.code.message)}}function Ge(o,u){if(o&1&&(n(0,"c-card",2)(1,"c-card-body"),v(2,"app-adresse-create",51),a()()),o&2){let t=l();r(2),c("getter",t.adresseGetter)("setter",t.adresseSetter)("validator",t.validator.adresse)}}var ft=(()=>{let u=class u{constructor(){this.sending=!1,this.standAlon=!0,this.router=S(H),this.service=S(_e),this.devisesService=S(ge),this.niveauPrixService=S(he),this.taxeService=S(Se),this.entrepriseService=S(pe),this.formBuilder=S(ce),this.toasterService=S(ve),this.entrepriseSelectedService=S(ue),this.validator=xe.init(()=>this.item).setAdresse(we.init(()=>this.adresse)),this.currentCodeNumber=1,this.adresseGetter=()=>this.adresse,this.adresseSetter=e=>this.adresse=e,this.langueEnumList=Object.values(Te)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngOnInit(){if(this.loadEntreprise(),this.service.keepData){let e=this.devisesService.createdItemAfterReturn;e.created&&(this.item.devises=e.item,this.validator.devises.validate());let i=this.niveauPrixService.createdItemAfterReturn;i.created&&(this.item.niveauPrix=i.item,this.validator.niveauPrix.validate());let s=this.entrepriseService.createdItemAfterReturn;s.created&&(this.item.entreprise=s.item,this.validator.entreprise.validate());let B=this.taxeService.createdItemAfterReturn;B.created&&(this.item.taxe=B.item,this.validator.taxe.validate())}else this.reset(!1);this.service.keepData=!1,this.item.adresse=new z,this.loadDevisesList(),this.loadNiveauPrixList(),this.loadTaxeList(),this.loadEntrepriseList(),this.clientForm=this.formBuilder.group({code:[{value:this.generateCode(),disabled:!0}]}),this.service.getNextCode().subscribe({next:e=>this.item.code=e.code,error:e=>console.log(e)})}generateCode(){return"I"+this.currentCodeNumber.toString().padStart(7,"0")}loadEntreprise(){this.entrepriseService.findById(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.item.entreprise=e,console.log("entre :",this.item.entreprise)},error:e=>console.log(e)})}loadDevisesList(){this.devisesService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.devisesList=e,console.log("devises List :",e)},error:e=>console.log(e)})}loadNiveauPrixList(){this.niveauPrixService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.niveauPrixList=e,console.log("niveauPrix List:",e)},error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAll().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}loadTaxeList(){this.taxeService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.taxeList=e,console.log("taxe List:",e)},error:e=>console.log(e)})}create(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.create().subscribe({next:e=>{if(this.sending=!1,e!=null){if(this.toReturn){this.item=e,this.router.navigate([this.returnUrl]).then();return}this.item=new k,this.router.navigate(["/contacts/fournisseur"]).then(),this.toasterService.toast({message:"Un nouveau fournisseur a \xE9t\xE9 ajout\xE9",color:"success"})}},error:e=>{this.sending=!1,console.log(e),this.validator.import(e.error)}}))}reset(e=!0){(e||this.item==null)&&(this.item=new k),this.validator.reset()}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get adresse(){return this.item.adresse==null&&(this.item.adresse=new z),this.item.adresse}set adresse(e){this.item.adresse=e}get devises(){return this.item.devises==null&&(this.item.devises=new fe),this.item.devises}set devises(e){this.item.devises=e}get niveauPrix(){return this.item.niveauPrix==null&&(this.item.niveauPrix=new Ce),this.item.niveauPrix}set niveauPrix(e){this.item.niveauPrix=e}get taxe(){return this.item.taxe==null&&(this.item.taxe=new be),this.item.taxe}set taxe(e){this.item.taxe=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new de),this.item.entreprise}set entreprise(e){this.item.entreprise=e}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}navigateToDevisesCreate(){this.devisesService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/devises/create"]).then()}navigateToNiveauPrixCreate(){this.niveauPrixService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/niveau-prix/create"]).then()}navigateToTaxeCreate(){this.taxeService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/taxe/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new k}retour(){this.router.navigate(["/contacts/fournisseur/list"]).then()}};u.\u0275fac=function(i){return new(i||u)},u.\u0275cmp=G({type:u,selectors:[["app-fournisseur-create"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[A],decls:10,vars:2,consts:[["createFrom",""],["createSubEntities",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/contacts/fournisseur",3,"click"],["cButton","","color","dark",3,"click"],["cButton","","color","primary",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilPlus"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"click","routerLink"],[2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","code",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","code","type","text","name","code","disabled","true",2,"background-color","#ffffff",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cilUser",2,"color","blue","font-size","30px"],["cLabel","","for","nom",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","nom","type","text","name","nom",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-envelope-closed",2,"color","blue","font-size","30px"],["cLabel","","for","email",2,"color","black","font-family","'Times New Roman'","font-size","19px","font-weight","bold"],["cFormControl","","id","email","type","text","name","email",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cib-openstreetmap",2,"color","blue","font-size","30px"],["cLabel","","for","siteweb",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","siteweb","type","text","name","siteweb",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-phone",2,"color","blue","font-size","30px"],["cLabel","","for","telephone",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","telephone","type","text","name","telephone",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-building",2,"color","blue","font-size","30px"],["cLabel","","for","taxeNumero",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","taxeNumero","type","number","name","taxeNumero",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-descending",2,"color","blue","font-size","30px"],["cLabel","","for","rabais",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","rabais","type","number","name","rabais",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-ascending",2,"color","blue","font-size","30px"],["cLabel","","for","taxe",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","taxe","name","taxe",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cil-dollar",2,"color","blue","font-size","30px"],["cLabel","","for","devises",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","devises","name","devises",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-bar-chart",2,"color","blue","font-size","30px"],["cLabel","","for","niveauPrix",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","niveauPrix","name","niveauPrix",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","entreprise",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","entreprise","type","text","name","entreprise","disabled","true",3,"blur","value","valid"],[3,"getter","setter","validator"]],template:function(i,s){i&1&&(w(0,Pe,16,4),L(1,0,Ve),w(3,Ne,1,1),L(4,3,Fe),w(6,Be,98,44,"ng-template",null,0,D)(8,Ge,3,3,"ng-template",null,1,D)),i&2&&(r(),I(s.standAlon),r(3),I(!s.standAlon))},dependencies:[Q,R,Z,Y,me,se,le,ie,ae,oe,ne,re,X,U,j,q,K,W,N,J,ye],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let o=u;return o})();export{ft as FournisseurCreateComponent};
