import './polyfills.server.mjs';
import{a as Pe,b as Ne}from"./chunk-OL7EAZQZ.mjs";import"./chunk-4SJIGL2P.mjs";import{a as Fe,b as De}from"./chunk-4NMNYPUZ.mjs";import"./chunk-ASFBEEYC.mjs";import{a as H}from"./chunk-JNCCIPDP.mjs";import{a as U}from"./chunk-HXC2Y4JH.mjs";import{a as A,b as Te}from"./chunk-FO7M7KBJ.mjs";import{b as Ve}from"./chunk-AESOZVZY.mjs";import{a as Le,b as Re}from"./chunk-T6QZKA6D.mjs";import{a as Me,b as ke}from"./chunk-KPXGFLZX.mjs";import{a as O,b as Ie}from"./chunk-2YG2YHPD.mjs";import{a as Ee,b as Be}from"./chunk-MCOBI4ZZ.mjs";import"./chunk-D4RJRHB5.mjs";import{a as ce}from"./chunk-IJRDI6QA.mjs";import{a as Se,b as ye}from"./chunk-7YOAHTJJ.mjs";import{b as pe,c as ue,f as _e,h as xe,i as ve,j as Ce,k as fe,l as ge,m as he,n as be}from"./chunk-ZDJMNRIQ.mjs";import{B as te,C as ie,D as ne,E as re,I as ae,M as oe,N as q,T as le,U as se,i as G,ma as me,na as de,o as Z,p as $,r as ee}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import{c as z}from"./chunk-UR2QYS3H.mjs";import{a as we}from"./chunk-GAHSYCFE.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-32WZQ4LQ.mjs";import{e as X,f as Y}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import"./chunk-YCIOFEEA.mjs";import{Ab as D,Eb as m,Kb as N,Mb as V,Nb as M,Ob as k,Pb as n,Qb as r,Rb as v,Ub as I,Vb as R,Yb as x,_b as d,ga as h,gc as P,hc as s,ib as a,ic as _,jc as J,ka as Q,nc as y,oc as w,pc as T,rc as K,va as c,wa as p,xa as g,xc as W,ya as b,yb as B,zb as F}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";var We=()=>[q,import("./chunk-GPMY24AR.mjs").then(l=>l.NgTemplateOutlet),G,Y,se,le,me,z],ze=()=>[import("./chunk-GPMY24AR.mjs").then(l=>l.NgTemplateOutlet)];function Ge(l,u){if(l&1){let t=R();n(0,"c-nav-item",4)(1,"button",12),x("click",function(){c(t);let i=d(2);return p(i.retour())}),s(2,"Return"),r()()}if(l&2){let t=d(2);a(),m("routerLink",t.returnUrl)}}function qe(l,u){l&1&&v(0,"c-spinner",9)}function Ae(l,u){l&1&&(g(),v(0,"svg",10))}function Oe(l,u){l&1&&I(0)}function Ue(l,u){l&1&&I(0)}function He(l,u){if(l&1){let t=R();n(0,"c-row",2)(1,"c-nav",3),B(2,Ge,3,1,"c-nav-item",4),n(3,"c-nav-item",5)(4,"button",6),x("click",function(){c(t);let i=d();return p(i.cancel())}),s(5,"Cancel"),r()(),n(6,"c-nav-item",4)(7,"button",7),x("click",function(){c(t);let i=d();return p(i.reset())}),s(8,"R\xE9initialiser"),r()(),n(9,"c-nav-item",4)(10,"button",8),x("click",function(){c(t);let i=d();return p(i.create())}),B(11,qe,1,0,"c-spinner",9)(12,Ae,1,0,":svg:svg",10),s(13," Cr\xE9er "),r()()()(),B(14,Oe,1,0,"ng-container",11)(15,Ue,1,0,"ng-container",11)}if(l&2){let t=d(),e=P(7),i=P(9);a(2),N(t.toReturn?2:-1),a(9),N(t.sending?11:12),a(3),m("ngTemplateOutlet",e),a(),m("ngTemplateOutlet",i)}}function je(l,u){l&1&&I(0)}function Qe(l,u){if(l&1&&B(0,je,1,0,"ng-container",11),l&2){d();let t=P(7);m("ngTemplateOutlet",t)}}function Je(l,u){if(l&1&&(n(0,"option",28),s(1),r()),l&2){let t=u.$implicit;m("value",t),a(),_(t)}}function Ke(l,u){if(l&1&&(n(0,"option",28),s(1),r()),l&2){let t=u.$implicit;m("value",t.id),a(),_(t.nom)}}function Xe(l,u){if(l&1&&(n(0,"option",28),s(1),r()),l&2){let t=u.$implicit;m("value",t.id),a(),_(t.nom)}}function Ye(l,u){if(l&1&&(n(0,"option",28),s(1),r()),l&2){let t=u.$implicit;m("value",t.id),a(),_(t.nom)}}function Ze(l,u){if(l&1&&(n(0,"option",28),s(1),r()),l&2){let t=u.$implicit;m("value",t.id),a(),_(t.nouvelleDevise==null?null:t.nouvelleDevise.labelle)}}function $e(l,u){if(l&1){let t=R();n(0,"c-card",2)(1,"c-card-header")(2,"strong",13),s(3,'Veuillez remplir les informations ci-dessous pour cr\xE9er un nouveau "Bon de commande"'),r()(),n(4,"c-card-body")(5,"c-row",14)(6,"c-col",15),g(),v(7,"svg",16),b(),n(8,"label",17),s(9,"Code"),r(),n(10,"input",18),T("ngModelChange",function(i){c(t);let o=d();return w(o.item.code,i)||(o.item.code=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.code.validate())}),r(),n(11,"c-form-feedback",19),s(12),r()(),n(13,"c-col",15)(14,"label",20),s(15,"Date de Cr\xE9ation"),r(),n(16,"input",21),T("ngModelChange",function(i){c(t);let o=d();return w(o.item.dateCreation,i)||(o.item.dateCreation=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.dateCreation.validate())}),r(),n(17,"c-form-feedback",19),s(18),r()(),n(19,"c-col",15)(20,"label",22),s(21,"Date d'Expedition"),r(),n(22,"input",23),T("ngModelChange",function(i){c(t);let o=d();return w(o.item.dateExpedition,i)||(o.item.dateExpedition=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.dateExpedition.validate())}),r(),n(23,"c-form-feedback",19),s(24),r()(),n(25,"c-col",15),g(),v(26,"svg",24),b(),n(27,"label",25),s(28,"Remise"),r(),n(29,"input",26),T("ngModelChange",function(i){c(t);let o=d();return w(o.item.rabais,i)||(o.item.rabais=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.rabais.validate())}),r(),n(30,"c-form-feedback",19),s(31),r()(),n(32,"c-col",15),g(),v(33,"svg",24),b(),n(34,"label",25),s(35,"Type Rabais"),r(),n(36,"select",27),T("ngModelChange",function(i){c(t);let o=d();return w(o.item.typeRabais,i)||(o.item.typeRabais=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.typeRabais.validate())}),M(37,Je,2,2,"option",28,V),r(),n(39,"c-form-feedback",19),s(40),r()(),n(41,"c-col",15),g(),v(42,"svg",29),b(),n(43,"label",30),s(44,"Taxe"),r(),n(45,"c-input-group")(46,"select",31),T("ngModelChange",function(i){c(t);let o=d();return w(o.taxe.id,i)||(o.taxe.id=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.taxe.validate())}),M(47,Ke,2,2,"option",28,V),r(),n(49,"button",32),x("click",function(){c(t);let i=d();return p(i.navigateToTaxeCreate())}),g(),v(50,"svg",10),r(),b(),n(51,"c-form-feedback",19),s(52),r()()(),n(53,"c-col",15),g(),v(54,"svg",29),b(),n(55,"label",30),s(56,"Taxe Exp\xE9dition"),r(),n(57,"c-input-group")(58,"select",33),T("ngModelChange",function(i){c(t);let o=d();return w(o.taxeExpedition.id,i)||(o.taxeExpedition.id=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.taxeExpedition.validate())}),M(59,Xe,2,2,"option",28,V),r(),n(61,"button",32),x("click",function(){c(t);let i=d();return p(i.navigateToTaxeCreate())}),g(),v(62,"svg",10),r(),b(),n(63,"c-form-feedback",19),s(64),r()()(),n(65,"c-col",15),g(),v(66,"svg",34),b(),n(67,"label",35),s(68,"Fournisseur"),r(),n(69,"c-input-group")(70,"select",36),T("ngModelChange",function(i){c(t);let o=d();return w(o.fournisseur.id,i)||(o.fournisseur.id=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.fournisseur.validate())}),M(71,Ye,2,2,"option",28,V),r(),n(73,"button",32),x("click",function(){c(t);let i=d();return p(i.navigateToFournisseurCreate())}),g(),v(74,"svg",10),r(),b(),n(75,"c-form-feedback",19),s(76),r()()(),n(77,"c-col",15),g(),v(78,"svg",37),b(),n(79,"label",38),s(80,"Devise"),r(),n(81,"c-input-group")(82,"select",39),T("ngModelChange",function(i){c(t);let o=d();return w(o.devises.id,i)||(o.devises.id=i),p(i)}),x("blur",function(){c(t);let i=d();return p(i.validator.devises.validate())}),M(83,Ze,2,2,"option",28,V),r(),n(85,"button",32),x("click",function(){c(t);let i=d();return p(i.navigateToDevisesCreate())}),g(),v(86,"svg",10),r(),b(),n(87,"c-form-feedback",19),s(88),r()()(),n(89,"c-col",15),g(),v(90,"svg",40),b(),n(91,"label",41),s(92,"Entreprise"),r(),n(93,"input",42),x("blur",function(){c(t);let i=d();return p(i.validator.code.validate())}),r(),n(94,"c-form-feedback",19),s(95),r()()()()()}if(l&2){let t=d();a(10),y("ngModel",t.item.code),m("valid",t.validator.code.valid),a(),m("valid",!1),a(),_(t.validator.code.message),a(4),y("ngModel",t.item.dateCreation),m("valid",t.validator.dateCreation.valid),a(),m("valid",!1),a(),_(t.validator.dateCreation.message),a(4),y("ngModel",t.item.dateExpedition),m("valid",t.validator.dateExpedition.valid),a(),m("valid",!1),a(),_(t.validator.dateExpedition.message),a(5),y("ngModel",t.item.rabais),m("valid",t.validator.rabais.valid),a(),m("valid",!1),a(),_(t.validator.rabais.message),a(5),y("ngModel",t.item.typeRabais),m("valid",t.validator.typeRabais.valid),a(),k(t.typeRabaisEnumList),a(2),m("valid",!1),a(),_(t.validator.typeRabais.message),a(6),y("ngModel",t.taxe.id),m("valid",t.validator.taxe.valid),a(),k(t.taxeList),a(4),m("valid",!1),a(),_(t.validator.taxe.message),a(6),y("ngModel",t.taxeExpedition.id),m("valid",t.validator.taxeExpedition.valid),a(),k(t.taxeList),a(4),m("valid",!1),a(),_(t.validator.taxeExpedition.message),a(6),y("ngModel",t.fournisseur.id),m("valid",t.validator.fournisseur.valid),a(),k(t.fournisseurList),a(4),m("valid",!1),a(),_(t.validator.fournisseur.message),a(6),y("ngModel",t.devises.id),m("valid",t.validator.devises.valid),a(),k(t.devisesList),a(4),m("valid",!1),a(),_(t.validator.devises.message),a(5),m("value",t.item.entreprise==null?null:t.item.entreprise.nom)("valid",t.validator.code.valid),a(),m("valid",!1),a(),_(t.validator.code.message)}}function et(l,u){if(l&1){let t=R();n(0,"tr")(1,"td"),s(2),r(),n(3,"td"),s(4),r(),n(5,"td"),s(6),r(),n(7,"td")(8,"input",59),T("ngModelChange",function(i){let o=c(t).$implicit;return w(o.quantite,i)||(o.quantite=i),p(i)}),x("ngModelChange",function(i){let o=c(t).$implicit;return p(o.disponible=o.disponible?o.disponible-i:o.disponible)}),r()(),n(9,"td"),s(10),r(),n(11,"td"),s(12),r(),n(13,"td")(14,"input",60),T("ngModelChange",function(i){let o=c(t).$implicit;return w(o.disque,i)||(o.disque=i),p(i)}),r()(),n(15,"td",61)(16,"button",62),x("click",function(){let i=c(t).$implicit,o=d(2);return p(o.deleteBonCmdProduit(i))}),g(),v(17,"svg",63),r()()()}if(l&2){let t=u.$implicit,e=d(2);a(2),J(" ",t.produit!=null?t.produit.nom:"null"," "),a(2),_(t.prix),a(2),_(e.calculerTotal(t)),a(2),m("min",0),y("ngModel",t.quantite),a(2),_(t.produit==null||t.produit.taxe==null?null:t.produit.taxe.nom),a(2),_(t.disponible),a(2),y("ngModel",t.disque)}}function tt(l,u){if(l&1&&(n(0,"option",50),s(1),r()),l&2){let t=u.$implicit;m("ngValue",t),a(),_(t.nom)}}function it(l,u){if(l&1){let t=R();n(0,"c-card",2)(1,"c-card-header")(2,"strong",43),s(3,"S\xE9lectionner des produits"),r()(),n(4,"c-card-body")(5,"table",44)(6,"thead",45)(7,"tr")(8,"th",46),s(9,"Produit"),r(),n(10,"th",46),s(11,"Prix"),r(),n(12,"th",46),s(13,"Total"),r(),n(14,"th",46),s(15,"Quantite"),r(),n(16,"th",46),s(17,"Taxe"),r(),n(18,"th",46),s(19,"Disponible"),r(),n(20,"th",46),s(21,"Remise"),r(),n(22,"th",47),s(23,"Actions"),r()()(),n(24,"tbody"),M(25,et,18,8,"tr",null,V),r()(),n(27,"c-col",48)(28,"c-input-group")(29,"select",49),x("ngModelChange",function(i){c(t);let o=d();return p(o.addBonCmdProduits(i))}),M(30,tt,2,2,"option",50,V),r()()()()(),n(32,"c-card")(33,"c-input-group")(34,"c-card-body")(35,"c-col",15)(36,"label",51),s(37,"Unit\xE9s total "),r(),v(38,"input",52),n(39,"c-form-feedback",19),s(40),r()(),n(41,"c-col",15)(42,"label",53),s(43,"Remise Global"),r(),v(44,"input",54),r(),n(45,"c-col",15)(46,"label",55),s(47,"Sous total"),r(),v(48,"input",56),n(49,"c-form-feedback",19),s(50),r()(),n(51,"c-col",15)(52,"label",57),s(53,"Total"),r(),v(54,"input",58),n(55,"c-form-feedback",19),s(56),r()()()()()}if(l&2){let t=d();a(5),m("hover",!0)("responsive",!0)("striped",!0),a(20),k(t.bonCmdProduits),a(5),k(t.produitList),a(8),m("value",t.calculerSommeQuantite(t.bonCmdProduits)),a(),m("valid",!1),a(),_(t.validator.totalUnites.message),a(4),m("value",t.calculeRemiseGlobal(t.bonCmdProduits)),a(4),m("value",t.calculerSommeSousTotal(t.bonCmdProduits)),a(),m("valid",!1),a(),_(t.validator.sousTotal.message),a(4),m("value",t.calculerSommeTotale(t.bonCmdProduits)),a(),m("valid",!1),a(),_(t.validator.total.message)}}var zt=(()=>{let u=class u{constructor(){this.sending=!1,this.standAlon=!0,this.router=h(X),this.service=h(Te),this.taxeService=h(Ie),this.fournisseurService=h(Be),this.devisesService=h(ke),this.niveauPrixService=h(Re),this.entrepriseService=h(ye),this.bonCommandeProduitService=h(De),this.produitService=h(Ve),this.formBuilder=h(he),this.toasterService=h(ce),this.entrepriseSelectedService=h(we),this.validator=Pe.init(()=>this.item),this.livraisonGetter=()=>this.livraison,this.livraisonSetter=e=>this.livraison=e,this.typeRabaisEnumList=Object.values(U),this.statutBonCommandeEnumList=Object.values(Ne),this.TypeRabaisEnum=U}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngOnInit(){if(this.loadEntreprise(),this.service.keepData){let e=this.taxeService.createdItemAfterReturn;e.created&&(this.item.taxe=e.item,this.validator.taxe.validate());let i=this.taxeService.createdItemAfterReturn;i.created&&(this.item.taxeExpedition=i.item,this.validator.taxeExpedition.validate());let o=this.fournisseurService.createdItemAfterReturn;o.created&&(this.item.fournisseur=o.item,this.validator.fournisseur.validate());let C=this.devisesService.createdItemAfterReturn;C.created&&(this.item.devises=C.item,this.validator.devises.validate());let f=this.niveauPrixService.createdItemAfterReturn;f.created&&(this.item.niveauPrix=f.item)}else this.reset(!1);this.service.keepData=!1,this.item.livraison=new H,this.loadTaxeList(),this.loadFournisseurList(),this.loadDevisesList(),this.loadNiveauPrixList(),this.loadProduitList(),this.generateCode()}generateCode(){let e=Math.floor(Math.random()*1e6);this.item.code="B"+e.toString().padStart(6,"0")}loadEntreprise(){this.entrepriseService.findById(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.item.entreprise=e,console.log("entre :",this.item.entreprise)},error:e=>console.log(e)})}loadTaxeList(){this.taxeService.findAllOptimized().subscribe({next:e=>this.taxeList=e,error:e=>console.log(e)})}loadFournisseurList(){this.fournisseurService.getFournisseurs(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.fournisseurList=e},error:e=>console.log(e)})}loadDevisesList(){this.devisesService.findAllOptimized().subscribe({next:e=>this.devisesList=e,error:e=>console.log(e)})}loadNiveauPrixList(){this.niveauPrixService.findAllOptimized().subscribe({next:e=>this.niveauPrixList=e,error:e=>console.log(e)})}create(){if(console.log(this.item),!this.validator.validate()){console.log(this.validator);return}this.sending=!0,this.service.create().subscribe({next:e=>{if(this.sending=!1,e!=null){if(this.item=e,this.toReturn){this.router.navigate([this.returnUrl]).then();return}this.router.navigate(["/inventaire/boncommande/bon-commande/boncmdpdf"]).then(),this.toasterService.toast({message:"Un nouveau bon de commande a \xE9t\xE9 ajout\xE9",color:"success"})}},error:e=>{this.sending=!1,console.log(e),this.validator.import(e.error)}})}reset(e=!0){(e||this.item==null)&&(this.item=new A),this.validator.reset()}calculerTotal(e){if(console.log(this.item),e.produit){let i=e.prix||0;e.produit.produitNiveauPrix?.forEach(E=>{this.item.niveauPrix?.id==E.niveauPrix?.id&&(console.log("Niveau de prix trouv\xE9..."),i=E.prix)}),console.log("prixProduit",i);let o=e.quantite*i,C=e.produit.taxe?e.produit.taxe.tauxImposition:0,f=0;if(this.item.typeRabais!=null&&this.item.typeRabais==this.TypeRabaisEnum.POURCENTAGE){let E=o*(1+C/100),S=E*(e.disque/100);f=E-S}else if(this.item.typeRabais!=null&&this.item.typeRabais==this.TypeRabaisEnum.MONTANT){let E=o*(1+C/100),S=e.disque;f=E-S}return f*=e.quantite||1,f-=e.disque||0,f=parseFloat(f.toFixed(2)),e.total=f,f}return 0}deleteBonCmdProduit(e){e.produit&&(e.produit.disponible=e.produit.disponible+e.quantite),this.item.bonCommandeProduit=this.item.bonCommandeProduit?.filter(i=>i!==e)}addBonCmdProduits(e){console.log(e),this.item.bonCommandeProduit==null&&(this.item.bonCommandeProduit=[]);let i=new Fe;i.produit=e,i.disque=0,i.quantite=1,e.disponible=e?.niveauStockInitial-i?.quantite,i.disponible=e.disponible,i.prix=e?.produitNiveauPrix?.filter(o=>o.niveauPrix?.id==this.fournisseur?.niveauPrix?.id)[0]?.prix||e.prixGros,i.total=this.calculerTotal(i),console.log(i.total),this.item.bonCommandeProduit=[...this.item.bonCommandeProduit,i],console.log(this.item.bonCommandeProduit)}calculerSommeSousTotal(e){let i=e.reduce((o,C)=>C?.quantite&&C?.prix?o+C.quantite*C.prix:o,0);return this.item.sousTotal=i,i.toFixed(2)}calculerSommeTotale(e){let i=e.reduce((S,L)=>{let j=this.calculerTotal(L);return console.log(`Total pour ${L.produit?.nom}: ${j}`),S+j},0),o=this.taxeList?.find(S=>S.id==this.item.taxe?.id)?.tauxImposition||0,C=this.item.taxeExpedition?.tauxImposition!=null?this.item.taxeExpedition.tauxImposition:0,f=0;if(this.item.typeRabais!=null&&this.item.typeRabais==this.TypeRabaisEnum.POURCENTAGE){let S=i*(1+(o+C)/100),L=S*(this.item.rabais/100);f=S-L}if(this.item?.typeRabais!=null&&this.item?.typeRabais==this.TypeRabaisEnum.MONTANT){let S=i*(1+(o+C)/100),L=this.item.rabais;f=S-L}let E=parseFloat(f.toFixed(2));return console.log(`Somme totale format\xE9e: ${E}`),this.item.total=E,E}calculerSommeQuantite(e){let i=e.reduce((o,C)=>o+(C.quantite||0),0);return this.item.totalUnites=i,i}calculeRemiseGlobal(e){let i=e.reduce((o,C)=>o+(C.disque||0),0);return this.item.remiseGlobal=i+this.item.rabais,this.item.remiseGlobal}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get livraison(){return this.item.livraison==null&&(this.item.livraison=new H),this.item.livraison}set livraison(e){this.item.livraison=e}get taxe(){return this.item.taxe==null&&(this.item.taxe=new O),this.item.taxe}set taxe(e){this.item.taxe=e}get taxeExpedition(){return this.item.taxeExpedition==null&&(this.item.taxeExpedition=new O),this.item.taxeExpedition}set taxeExpedition(e){this.item.taxeExpedition=e}get fournisseur(){return this.item.fournisseur==null&&(this.item.fournisseur=new Ee),this.item.fournisseur}set fournisseur(e){this.item.fournisseur=e}get devises(){return this.item.devises==null&&(this.item.devises=new Me),this.item.devises}set devises(e){this.item.devises=e}get niveauPrix(){return this.item.niveauPrix==null&&(this.item.niveauPrix=new Le),this.item.niveauPrix}set niveauPrix(e){this.item.niveauPrix=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new Se),this.item.entreprise}set entreprise(e){this.item.entreprise=e}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}navigateToTaxeCreate(){this.taxeService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/taxe/create"]).then()}navigateToFournisseurCreate(){this.fournisseurService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/contacts/fournisseur/create"]).then()}navigateToDevisesCreate(){this.devisesService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/devises/create"]).then()}navigateToNiveauPrixCreate(){this.niveauPrixService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/niveau-prix/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new A}retour(){this.router.navigate(["/inventaire/boncommande/bon-commande//list"]).then()}set bonCmdProduits(e){this.bonCommandeProduitService.items=e}get bonCmdProduit(){return this.bonCommandeProduitService.item}set bonCmdProduit(e){this.bonCommandeProduitService.item=e}get bonCmdProduits(){return this.item.bonCommandeProduit==null&&(this.item.bonCommandeProduit=[]),this.item.bonCommandeProduit}loadProduitList(){this.produitService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>this.produitList=e,error:e=>console.log(e)})}};u.\u0275fac=function(i){return new(i||u)},u.\u0275cmp=Q({type:u,selectors:[["app-bon-commande-create"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[K],decls:10,vars:2,consts:[["createFrom",""],["cmdProduitCreate",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/inventaire/boncommande/bon-commande",3,"click"],["cButton","","color","dark",3,"click"],["cButton","","color","primary",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilPlus"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"click","routerLink"],[1,"responsive-header",2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","code",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","code","type","text","placeholder","Code","disabled","true","name","code",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cLabel","","for","dateCreation",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","dateCreation","type","date","placeholder","DateCreation","name","dateCreation",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","dateExpedition",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","dateExpedition","type","date","placeholder","DateExpedition","name","dateExpedition",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-descending",2,"color","blue","font-size","30px"],["cLabel","","for","rabais",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","rabais","type","number","placeholder","Rabais","name","rabais",3,"ngModelChange","blur","ngModel","valid"],["cSelect","","id","typeRabais","name","typeRabais",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cIcon","","name","cil-sort-ascending",2,"color","blue","font-size","30px"],["cLabel","","for","taxe",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","taxe","name","taxe",3,"ngModelChange","blur","ngModel","valid"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cSelect","","id","taxeExpedition","name","taxeExpedition",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cilUser",2,"color","blue","font-size","30px"],["cLabel","","for","fournisseur",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","fournisseur","name","fournisseur",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-dollar",2,"color","blue","font-size","30px"],["cLabel","","for","devises",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","devises","name","devises",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-building",2,"color","blue","font-size","30px"],["cLabel","","for","entreprise",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","entreprise","type","text","name","entreprise","disabled","true",3,"blur","value","valid"],[2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],[1,"text-nowrap","text-truncate"],[1,"bg-body-tertiary"],[1,"bg-body-tertiary",2,"display","flex","justify-content","end"],["sm","3",1,"mt-3"],["cSelect","","ngModel","",3,"ngModelChange"],[3,"ngValue"],["cLabel","","for","qte",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","qte","type","number","readonly","","name","qte",3,"value"],["cLabel","","for","sommeRemise",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","sommeRemise","type","number","readonly","","name","sommeRemise",3,"value"],["cLabel","","for","stotal",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","stotal","type","number","readonly","","name","stotal",3,"value"],["cLabel","","for","total",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","total","type","number","readonly","","name","total",3,"value"],["type","number",3,"ngModelChange","min","ngModel"],["type","number",3,"ngModelChange","ngModel"],[2,"display","flex","justify-content","end"],["cButton","","color","",3,"click"],["cIcon","","name","cil-trash","size","lg"]],template:function(i,o){i&1&&(B(0,He,16,4),F(1,0,We),B(3,Qe,1,1),F(4,3,ze),B(6,$e,96,40,"ng-template",null,0,W)(8,it,57,13,"ng-template",null,1,W)),i&2&&(a(),D(o.standAlon),a(3),D(!o.standAlon))},dependencies:[ne,q,oe,ae,be,Ce,fe,pe,xe,ve,ue,ge,_e,re,Z,$,ee,ie,G,z,te,de],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let l=u;return l})();export{zt as BonCommandeCreateComponent};
