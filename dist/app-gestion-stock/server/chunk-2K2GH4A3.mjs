import './polyfills.server.mjs';
import{a as Ue}from"./chunk-M25OBH6Z.mjs";import{a as Fe}from"./chunk-3GJOX54U.mjs";import{a as Me}from"./chunk-HXC2Y4JH.mjs";import{a as ye}from"./chunk-QXCLAHMT.mjs";import{a as Ee,b as Te}from"./chunk-DXUEKDUO.mjs";import{a as Ve}from"./chunk-P7B7MN2F.mjs";import{a as fe,b as xe}from"./chunk-4OUAPDUA.mjs";import{a as ve,b as ge}from"./chunk-CAPKOXWR.mjs";import{a as be,b as Se}from"./chunk-T6QZKA6D.mjs";import{a as he,b as Ce}from"./chunk-KPXGFLZX.mjs";import{a as G,b as we}from"./chunk-2YG2YHPD.mjs";import{a as W}from"./chunk-VL7DGWE6.mjs";import{a as de,b as me}from"./chunk-7YOAHTJJ.mjs";import{b as ie,c as ne,f as re,h as ae,i as oe,j as le,k as se,n as ce}from"./chunk-ZDJMNRIQ.mjs";import{B as q,C as J,D as K,E as Q,I as X,M as Y,N as D,T as Z,U as $,i as R,ma as ee,o as H,p as j}from"./chunk-NVRXDY5V.mjs";import{c as P}from"./chunk-UR2QYS3H.mjs";import{a as te}from"./chunk-YN4AEEQH.mjs";import{b as _e}from"./chunk-RYNWZ5IW.mjs";import{a as pe}from"./chunk-GAHSYCFE.mjs";import{a as ue}from"./chunk-XWMWN5XG.mjs";import{e as z,f as O}from"./chunk-GFB74FXC.mjs";import{Ab as M,Eb as p,Kb as U,Mb as y,Nb as E,Ob as T,Pb as n,Qb as o,Rb as g,Ub as L,Vb as k,Yb as _,_b as s,ga as f,gc as I,hc as c,ib as r,ic as v,ka as N,nc as h,oc as C,pc as b,rc as A,va as d,wa as m,xa as x,xc as B,ya as S,yb as w,zb as V}from"./chunk-VWPO2VC4.mjs";var Le=()=>[D,import("./chunk-GPMY24AR.mjs").then(l=>l.NgTemplateOutlet),R,O,$,Z,ee,P],ke=()=>[import("./chunk-GPMY24AR.mjs").then(l=>l.NgTemplateOutlet)];function Ie(l,u){l&1&&g(0,"c-spinner",7)}function Pe(l,u){l&1&&(x(),g(0,"svg",8))}function Re(l,u){l&1&&g(0,"c-spinner",7)}function De(l,u){l&1&&(x(),g(0,"svg",10))}function We(l,u){l&1&&L(0)}function Ge(l,u){if(l&1){let i=k();n(0,"c-row",1)(1,"c-nav",2)(2,"c-nav-item",3)(3,"button",4),_("click",function(){d(i);let t=s();return m(t.cancel())}),c(4,"Annuler"),o()(),n(5,"c-nav-item",5)(6,"button",6),_("click",function(){d(i);let t=s();return m(t.reset())}),w(7,Ie,1,0,"c-spinner",7)(8,Pe,1,0,":svg:svg",8),c(9," Reset "),o()(),n(10,"c-nav-item",5)(11,"button",9),_("click",function(){d(i);let t=s();return m(t.update())}),w(12,Re,1,0,"c-spinner",7)(13,De,1,0,":svg:svg",10),c(14," Modifier "),o()()()(),w(15,We,1,0,"ng-container",11)}if(l&2){let i=s(),e=I(7);r(7),U(i.resetting?7:8),r(5),U(i.sending?12:13),r(3),p("ngTemplateOutlet",e)}}function Ne(l,u){l&1&&L(0)}function Ae(l,u){if(l&1&&w(0,Ne,1,0,"ng-container",11),l&2){s();let i=I(7);p("ngTemplateOutlet",i)}}function Be(l,u){if(l&1&&(n(0,"option",37),c(1),o()),l&2){let i=u.$implicit;p("value",i),r(),v(i)}}function ze(l,u){if(l&1&&(n(0,"option",37),c(1),o()),l&2){let i=u.$implicit;p("value",i.id),r(),v(i.id)}}function Oe(l,u){if(l&1&&(n(0,"option",37),c(1),o()),l&2){let i=u.$implicit;p("value",i.id),r(),v(i.nom)}}function He(l,u){if(l&1&&(n(0,"option",37),c(1),o()),l&2){let i=u.$implicit;p("value",i.id),r(),v(i.id)}}function je(l,u){if(l&1){let i=k();n(0,"c-card",1)(1,"c-card-body")(2,"c-row",12)(3,"c-col",13),x(),g(4,"svg",14),S(),n(5,"label",15),c(6,"Code"),o(),n(7,"input",16),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.code,t)||(a.item.code=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.code.validate())}),o(),n(8,"c-form-feedback",17),c(9),o()(),n(10,"c-col",13),x(),g(11,"svg",18),S(),n(12,"label",19),c(13,"Date d'\xE9xperation"),o(),n(14,"input",20),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.dateExperation,t)||(a.item.dateExperation=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.dateExperation.validate())}),o(),n(15,"c-form-feedback",17),c(16),o()(),n(17,"c-col",13),x(),g(18,"svg",18),S(),n(19,"label",21),c(20,"Date d'\xE9xpedition"),o(),n(21,"input",22),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.dateExpedition,t)||(a.item.dateExpedition=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.dateExpedition.validate())}),o(),n(22,"c-form-feedback",17),c(23),o()(),n(24,"c-col",13),x(),g(25,"svg",23),S(),n(26,"label",24),c(27,"Remise"),o(),n(28,"input",25),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.rabais,t)||(a.item.rabais=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.rabais.validate())}),o(),n(29,"c-form-feedback",17),c(30),o()(),n(31,"c-col",13)(32,"label",26),c(33,"TotalUnites"),o(),n(34,"input",27),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.totalUnites,t)||(a.item.totalUnites=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.totalUnites.validate())}),o(),n(35,"c-form-feedback",17),c(36),o()(),n(37,"c-col",13)(38,"label",28),c(39,"RemiseGlobal"),o(),n(40,"input",29),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.remiseGlobal,t)||(a.item.remiseGlobal=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.remiseGlobal.validate())}),o(),n(41,"c-form-feedback",17),c(42),o()(),n(43,"c-col",13)(44,"label",30),c(45,"SousTotal"),o(),n(46,"input",31),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.sousTotal,t)||(a.item.sousTotal=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.sousTotal.validate())}),o(),n(47,"c-form-feedback",17),c(48),o()(),n(49,"c-col",13)(50,"label",32),c(51,"Total"),o(),n(52,"input",33),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.total,t)||(a.item.total=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.total.validate())}),o(),n(53,"c-form-feedback",17),c(54),o()(),n(55,"c-col",13),x(),g(56,"svg",34),S(),n(57,"label",35),c(58,"Type de Remise "),o(),n(59,"select",36),b("ngModelChange",function(t){d(i);let a=s();return C(a.item.typeRabais,t)||(a.item.typeRabais=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.typeRabais.validate())}),E(60,Be,2,2,"option",37,y),o(),n(62,"c-form-feedback",17),c(63),o()(),n(64,"c-col",13),x(),g(65,"svg",38),S(),n(66,"label",39),c(67,"Taxe"),o(),n(68,"c-input-group")(69,"select",40),b("ngModelChange",function(t){d(i);let a=s();return C(a.taxe.id,t)||(a.taxe.id=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.taxe.validate())}),E(70,ze,2,2,"option",37,y),o(),n(72,"button",41),_("click",function(){d(i);let t=s();return m(t.navigateToTaxeCreate())}),x(),g(73,"svg",42),o(),S(),n(74,"c-form-feedback",17),c(75),o()()(),n(76,"c-col",13)(77,"label",43),c(78,"Client"),o(),n(79,"c-input-group")(80,"select",44),b("ngModelChange",function(t){d(i);let a=s();return C(a.client.id,t)||(a.client.id=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.client.validate())}),E(81,Oe,2,2,"option",37,y),o(),n(83,"button",41),_("click",function(){d(i);let t=s();return m(t.navigateToClientCreate())}),x(),g(84,"svg",42),o(),S(),n(85,"c-form-feedback",17),c(86),o()()(),n(87,"c-col",13),x(),g(88,"svg",45),S(),n(89,"label",46),c(90,"Devise"),o(),n(91,"c-input-group")(92,"select",47),b("ngModelChange",function(t){d(i);let a=s();return C(a.devises.id,t)||(a.devises.id=t),m(t)}),_("blur",function(){d(i);let t=s();return m(t.validator.devises.validate())}),E(93,He,2,2,"option",37,y),o(),n(95,"button",41),_("click",function(){d(i);let t=s();return m(t.navigateToDevisesCreate())}),x(),g(96,"svg",42),o(),S(),n(97,"c-form-feedback",17),c(98),o()()()()()()}if(l&2){let i=s();r(7),h("ngModel",i.item.code),p("valid",i.validator.code.valid),r(),p("valid",!1),r(),v(i.validator.code.message),r(5),h("ngModel",i.item.dateExperation),p("valid",i.validator.dateExperation.valid),r(),p("valid",!1),r(),v(i.validator.dateExperation.message),r(5),h("ngModel",i.item.dateExpedition),p("valid",i.validator.dateExpedition.valid),r(),p("valid",!1),r(),v(i.validator.dateExpedition.message),r(5),h("ngModel",i.item.rabais),p("valid",i.validator.rabais.valid),r(),p("valid",!1),r(),v(i.validator.rabais.message),r(4),h("ngModel",i.item.totalUnites),p("valid",i.validator.totalUnites.valid),r(),p("valid",!1),r(),v(i.validator.totalUnites.message),r(4),h("ngModel",i.item.remiseGlobal),p("valid",i.validator.remiseGlobal.valid),r(),p("valid",!1),r(),v(i.validator.remiseGlobal.message),r(4),h("ngModel",i.item.sousTotal),p("valid",i.validator.sousTotal.valid),r(),p("valid",!1),r(),v(i.validator.sousTotal.message),r(4),h("ngModel",i.item.total),p("valid",i.validator.total.valid),r(),p("valid",!1),r(),v(i.validator.total.message),r(5),h("ngModel",i.item.typeRabais),p("valid",i.validator.typeRabais.valid),r(),T(i.typeRabaisEnumList),r(2),p("valid",!1),r(),v(i.validator.typeRabais.message),r(6),h("ngModel",i.taxe.id),p("valid",i.validator.taxe.valid),r(),T(i.taxeList),r(4),p("valid",!1),r(),v(i.validator.taxe.message),r(5),h("ngModel",i.client.id),p("valid",i.validator.client.valid),r(),T(i.filteredClientList),r(4),p("valid",!1),r(),v(i.validator.client.message),r(6),h("ngModel",i.devises.id),p("valid",i.validator.devises.valid),r(),T(i.devisesList),r(4),p("valid",!1),r(),v(i.validator.devises.message)}}var Dt=(()=>{let u=class u{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=f(z),this.service=f(Te),this.taxeService=f(we),this.clientService=f(ge),this.devisesService=f(Ce),this.niveauPrixService=f(Se),this.entrepriseService=f(me),this.employeService=f(_e),this.paiemeentService=f(xe),this.tokenService=f(te),this.userInfosService=f(ue),this.entrepriseSelectedService=f(pe),this.validator=Fe.init(()=>this.item).setPaiement(ye.init(()=>this.paiement)),this.filteredClientList=[],this.paiementGetter=()=>this.paiement,this.paiementSetter=e=>this.paiement=e,this.retourProduitGetter=()=>this.retourProduit,this.retourProduitSetter=e=>this.retourProduit=e,this.addressFacturationGetter=()=>this.addressFacturation,this.addressFacturationSetter=e=>this.addressFacturation=e,this.addressExpeditionGetter=()=>this.addressExpedition,this.addressExpeditionSetter=e=>this.addressExpedition=e,this.typeRabaisEnumList=Object.values(Me),this.statutFactureEnumList=Object.values(Ue)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/ventes/facture/facture"]).then()}ngOnInit(){if(this.service.keepData){let t=this.taxeService.createdItemAfterReturn;t.created&&(this.item.taxe=t.item,this.validator.taxe.validate());let a=this.clientService.createdItemAfterReturn;a.created&&(this.item.client=a.item,this.validator.client.validate());let F=this.devisesService.createdItemAfterReturn;F.created&&(this.item.devises=F.item,this.validator.devises.validate())}else this.validator.reset();this.loadTaxeList(),this.loadDevisesList(),this.loadNiveauPrixList(),this.loadEntrepriseList(),(this.tokenService.getRole()?.some(t=>t=="ADMIN")?1:0)==1?this.getClientsForAdmin():this.getClientsForEmploye()}loadTaxeList(){this.taxeService.findAllOptimized().subscribe({next:e=>this.taxeList=e,error:e=>console.log(e)})}loadClientList(){this.clientService.findAllOptimized().subscribe({next:e=>{this.filteredClientList=e.filter(t=>t.id!==this.item.client?.id),this.clientList=e},error:e=>console.log(e)})}getClientsForAdmin(){this.entrepriseSelectedService.getEntrepriseSelected()!=0?this.clientService.getClients(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.filteredClientList=e.filter(t=>t.id!==this.item.client?.id),this.clientList=e,console.log("Clients :",e)},error:e=>console.log(e)}):this.entrepriseService.findByAdmin(this.userInfosService.getUsername()).subscribe(e=>{this.entreprises=e,console.log("Entreprises: ",this.entreprises),this.entreprises&&this.entreprises.length>0?this.clientService.getClients(this.entreprises[0].id).subscribe({next:t=>{this.filteredClientList=t.filter(a=>a.id!==this.item.client?.id),this.clientList=t,console.log("Clients :",t)},error:t=>console.log(t)}):console.log("Aucune entreprise trouv\xE9e.")},e=>{console.log(e)})}getClientsForEmploye(){this.entrepriseSelectedService.getEntrepriseSelected()!=0?this.clientService.getClients(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.filteredClientList=e.filter(t=>t.id!==this.item.client?.id),this.clientList=e,console.log("Clients :",e)},error:e=>console.log(e)}):this.employeService.findByUserName(this.userInfosService.getUsername()).subscribe(e=>{console.log("empId: ",e.id),this.entrepriseService.findEntreprisesAdroitAcces(e.id).subscribe(t=>{this.entreprises=t,console.log("Entreprises\xC0droit: ",this.entreprises),this.entreprises&&this.entreprises.length>0&&this.clientService.getClients(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:a=>{this.filteredClientList=a.filter(F=>F.id!==this.item.client?.id),this.clientList=a,console.log("Clients :",a)},error:a=>console.log(a)})},t=>{console.log(t)})},e=>{console.log(e)})}loadDevisesList(){this.devisesService.findAllOptimized().subscribe({next:e=>this.devisesList=e,error:e=>console.log(e)})}loadNiveauPrixList(){this.niveauPrixService.findAllOptimized().subscribe({next:e=>this.niveauPrixList=e,error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAllOptimized().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}update(){if(console.log("Facture avant mise \xE0 jour:",this.item),!this.validator.validate()){console.log("Validation \xE9chou\xE9e");return}this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&(console.log("Facture mise \xE0 jour:",e),this.router.navigate(["/ventes/facture/facture"]).then())},error:e=>{this.sending=!1,console.log(e)}})}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get paiement(){return this.item.paiement==null&&(this.item.paiement=new fe),this.item.paiement}set paiement(e){this.item.paiement=e}get retourProduit(){return this.item.retourProduit==null&&(this.item.retourProduit=new Ve),this.item.retourProduit}set retourProduit(e){this.item.retourProduit=e}get addressFacturation(){return this.item.addressFacturation==null&&(this.item.addressFacturation=new W),this.item.addressFacturation}set addressFacturation(e){this.item.addressFacturation=e}get addressExpedition(){return this.item.addressExpedition==null&&(this.item.addressExpedition=new W),this.item.addressExpedition}set addressExpedition(e){this.item.addressExpedition=e}get taxe(){return this.item.taxe==null&&(this.item.taxe=new G),this.item.taxe}set taxe(e){this.item.taxe=e}get taxeExpedition(){return this.item.taxeExpedition==null&&(this.item.taxeExpedition=new G),this.item.taxeExpedition}set taxeExpedition(e){this.item.taxeExpedition=e}get client(){return this.item.client==null&&(this.item.client=new ve),this.item.client}set client(e){this.item.client=e}get devises(){return this.item.devises==null&&(this.item.devises=new he),this.item.devises}set devises(e){this.item.devises=e}get niveauPrix(){return this.item.niveauPrix==null&&(this.item.niveauPrix=new be),this.item.niveauPrix}set niveauPrix(e){this.item.niveauPrix=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new de),this.item.entreprise}set entreprise(e){this.item.entreprise=e}navigateToTaxeCreate(){this.taxeService.returnUrl=this.router.url,this.router.navigate(["/parametres/taxe/create"]).then()}navigateToClientCreate(){this.clientService.returnUrl=this.router.url,this.router.navigate(["/contacts/client/create"]).then()}navigateToDevisesCreate(){this.devisesService.returnUrl=this.router.url,this.router.navigate(["/parametres/devises/create"]).then()}navigateToNiveauPrixCreate(){this.niveauPrixService.returnUrl=this.router.url,this.router.navigate(["/parametres/niveau-prix/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new Ee}retour(){this.router.navigate(["/pays/pays/list"]).then()}};u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=N({type:u,selectors:[["app-facture-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[A],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/ventes/facture/facture",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","code",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","code","type","text","placeholder","Code","name","code",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cil-calendar",2,"color","blue","font-size","30px"],["cLabel","","for","dateExperation",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","dateExperation","type","date","placeholder","DateExperation","name","dateExperation",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","dateExpedition",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","dateExpedition","type","date","placeholder","DateExpedition","name","dateExpedition",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-descending",2,"color","blue","font-size","30px"],["cLabel","","for","rabais",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","rabais","type","number","placeholder","Rabais","name","rabais",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","totalUnites",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","totalUnites","type","number","placeholder","TotalUnites","name","totalUnites",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","remiseGlobal",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","remiseGlobal","type","number","placeholder","RemiseGlobal","name","remiseGlobal",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","sousTotal",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","sousTotal","type","number","placeholder","SousTotal","name","sousTotal",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","total",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","total","type","number","placeholder","Total","name","total",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-tags",2,"color","blue","font-size","30px"],["cLabel","","for","typeRabais",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","typeRabais","name","typeRabais",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cIcon","","name","cil-sort-ascending",2,"color","blue","font-size","30px"],["cLabel","","for","taxe",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","taxe","name","taxe",3,"ngModelChange","blur","ngModel","valid"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cilPlus"],["cLabel","","for","client"],["cSelect","","id","client","name","client",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-dollar",2,"color","blue","font-size","30px"],["cLabel","","for","devises",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","devises","name","devises",3,"ngModelChange","blur","ngModel","valid"]],template:function(t,a){t&1&&(w(0,Ge,16,3),V(1,0,Le),w(3,Ae,1,1),V(4,3,ke),w(6,je,99,48,"ng-template",null,0,B)),t&2&&(r(),M(a.standAlon),r(3),M(!a.standAlon))},dependencies:[K,D,Y,X,ce,le,se,ie,ae,oe,ne,re,Q,H,j,J,R,q,P]});let l=u;return l})();export{Dt as a};
