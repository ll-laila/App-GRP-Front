import{a as Me,b as Ie}from"./chunk-ARJ5T63M.js";import"./chunk-LHONC3JO.js";import"./chunk-EXOHPXTY.js";import"./chunk-L6OUVYJP.js";import{a as Pe,b as Le}from"./chunk-OXVKGA5E.js";import{a as A}from"./chunk-UBDUPB6Y.js";import{a as Ee,b as Ve}from"./chunk-JJWAPVHG.js";import{a as we,b as Te}from"./chunk-URSAOOCG.js";import{a as z,b as Be}from"./chunk-ECGNXNAA.js";import"./chunk-SR3OXJX3.js";import"./chunk-J5REKJTI.js";import{a as Ce,b as he}from"./chunk-ZTDRZ7NY.js";import{b as ye}from"./chunk-A6E5FFHP.js";import{a as be,b as Se}from"./chunk-HCN6FDQI.js";import{b as le,c as se,f as me,h as de,i as ce,j as pe,k as ue,l as _e,n as xe}from"./chunk-RMR25O2K.js";import{a as ve,b as ge}from"./chunk-36NSVSE4.js";import{$ as oe,I as Y,J as Z,K as $,L as ee,P as te,T as ie,U as G,_ as ne,p as N,ta as ae,ua as re,v as J,w as K,y as X}from"./chunk-ETPUSV7N.js";import{c as W}from"./chunk-DKLNZNMU.js";import{a as fe}from"./chunk-PTMIGOEM.js";import{d as Q}from"./chunk-EVAI7AMW.js";import"./chunk-2BQUVQN4.js";import"./chunk-RTZTBWEW.js";import"./chunk-VVDYSQS6.js";import"./chunk-LUIBGOM6.js";import{Cb as m,Ib as O,Kb as V,Lb as B,Mb as M,Nb as n,Ob as o,Pb as v,Sb as U,Tb as I,Wb as x,Yb as d,ec as k,fc as l,ga as T,gb as a,gc as _,hc as H,ka as q,lc as b,mc as S,nc as y,pc as j,va as c,vc as D,wa as p,wb as P,xa as f,xb as F,ya as h,yb as R}from"./chunk-BXK32XEB.js";import"./chunk-RGL3W33T.js";var Ue=()=>[G,import("./chunk-K4L4KWTC.js").then(s=>s.NgTemplateOutlet),N,oe,ne,ae,W],ke=()=>[import("./chunk-K4L4KWTC.js").then(s=>s.NgTemplateOutlet)];function Fe(s,u){s&1&&v(0,"c-spinner",7)}function Re(s,u){s&1&&(f(),v(0,"svg",8))}function De(s,u){s&1&&U(0)}function We(s,u){s&1&&U(0)}function Ne(s,u){if(s&1){let i=I();n(0,"c-row",2)(1,"c-nav",3)(2,"c-nav-item",4)(3,"button",5),x("click",function(){c(i);let t=d();return p(t.reset())}),l(4,"Annuler"),o()(),n(5,"c-nav-item",4)(6,"button",6),x("click",function(){c(i);let t=d();return p(t.update())}),P(7,Fe,1,0,"c-spinner",7)(8,Re,1,0,":svg:svg",8),l(9,`
Modifier
`),o()()()(),P(10,De,1,0,"ng-container",9)(11,We,1,0,"ng-container",9)}if(s&2){let i=d(),e=k(7),t=k(9);a(7),O(i.sending?7:8),a(3),m("ngTemplateOutlet",e),a(),m("ngTemplateOutlet",t)}}function Ge(s,u){s&1&&U(0)}function ze(s,u){if(s&1&&P(0,Ge,1,0,"ng-container",9),s&2){d();let i=k(7);m("ngTemplateOutlet",i)}}function Ae(s,u){if(s&1&&(n(0,"option",25),l(1),o()),s&2){let i=u.$implicit;m("value",i),a(),_(i)}}function qe(s,u){if(s&1&&(n(0,"option",25),l(1),o()),s&2){let i=u.$implicit;m("value",i.id),a(),_(i.nom)}}function Oe(s,u){if(s&1&&(n(0,"option",25),l(1),o()),s&2){let i=u.$implicit;m("value",i.id),a(),_(i.nom)}}function He(s,u){if(s&1&&(n(0,"option",25),l(1),o()),s&2){let i=u.$implicit;m("value",i.id),a(),_(i.nom)}}function je(s,u){if(s&1&&(n(0,"option",25),l(1),o()),s&2){let i=u.$implicit;m("value",i.id),a(),_(i.nouvelleDevise==null?null:i.nouvelleDevise.labelle)}}function Qe(s,u){if(s&1){let i=I();n(0,"c-card",2)(1,"c-card-header")(2,"strong",10),l(3,'Veuillez remplir les informations ci-dessous pour cr\xE9er un nouveau "Bon de commande"'),o()(),n(4,"c-card-body")(5,"c-row",11)(6,"c-col",12),f(),v(7,"svg",13),h(),n(8,"label",14),l(9,"Code"),o(),n(10,"input",15),y("ngModelChange",function(t){c(i);let r=d();return S(r.item.code,t)||(r.item.code=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.code.validate())}),o(),n(11,"c-form-feedback",16),l(12),o()(),n(13,"c-col",12)(14,"label",17),l(15,"Date de Cr\xE9ation"),o(),n(16,"input",18),y("ngModelChange",function(t){c(i);let r=d();return S(r.item.dateCreation,t)||(r.item.dateCreation=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.dateCreation.validate())}),o(),n(17,"c-form-feedback",16),l(18),o()(),n(19,"c-col",12)(20,"label",19),l(21,"Date d'Expedition"),o(),n(22,"input",20),y("ngModelChange",function(t){c(i);let r=d();return S(r.item.dateExpedition,t)||(r.item.dateExpedition=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.dateExpedition.validate())}),o(),n(23,"c-form-feedback",16),l(24),o()(),n(25,"c-col",12),f(),v(26,"svg",21),h(),n(27,"label",22),l(28,"Remise"),o(),n(29,"input",23),y("ngModelChange",function(t){c(i);let r=d();return S(r.item.rabais,t)||(r.item.rabais=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.rabais.validate())}),o(),n(30,"c-form-feedback",16),l(31),o()(),n(32,"c-col",12),f(),v(33,"svg",21),h(),n(34,"label",22),l(35,"Type Rabais"),o(),n(36,"select",24),y("ngModelChange",function(t){c(i);let r=d();return S(r.item.typeRabais,t)||(r.item.typeRabais=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.typeRabais.validate())}),B(37,Ae,2,2,"option",25,V),o(),n(39,"c-form-feedback",16),l(40),o()(),n(41,"c-col",12),f(),v(42,"svg",26),h(),n(43,"label",27),l(44,"Taxe"),o(),n(45,"c-input-group")(46,"select",28),y("ngModelChange",function(t){c(i);let r=d();return S(r.taxe.id,t)||(r.taxe.id=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.taxe.validate())}),B(47,qe,2,2,"option",25,V),o(),n(49,"button",29),x("click",function(){c(i);let t=d();return p(t.navigateToTaxeCreate())}),f(),v(50,"svg",8),o(),h(),n(51,"c-form-feedback",16),l(52),o()()(),n(53,"c-col",12),f(),v(54,"svg",26),h(),n(55,"label",27),l(56,"Taxe Exp\xE9dition"),o(),n(57,"c-input-group")(58,"select",30),y("ngModelChange",function(t){c(i);let r=d();return S(r.taxeExpedition.id,t)||(r.taxeExpedition.id=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.taxeExpedition.validate())}),B(59,Oe,2,2,"option",25,V),o(),n(61,"button",29),x("click",function(){c(i);let t=d();return p(t.navigateToTaxeCreate())}),f(),v(62,"svg",8),o(),h(),n(63,"c-form-feedback",16),l(64),o()()(),n(65,"c-col",12),f(),v(66,"svg",31),h(),n(67,"label",32),l(68,"Fournisseur"),o(),n(69,"c-input-group")(70,"select",33),y("ngModelChange",function(t){c(i);let r=d();return S(r.fournisseur.id,t)||(r.fournisseur.id=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.fournisseur.validate())}),B(71,He,2,2,"option",25,V),o(),n(73,"button",29),x("click",function(){c(i);let t=d();return p(t.navigateToFournisseurCreate())}),f(),v(74,"svg",8),o(),h(),n(75,"c-form-feedback",16),l(76),o()()(),n(77,"c-col",12),f(),v(78,"svg",34),h(),n(79,"label",35),l(80,"Devise"),o(),n(81,"c-input-group")(82,"select",36),y("ngModelChange",function(t){c(i);let r=d();return S(r.devises.id,t)||(r.devises.id=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.devises.validate())}),B(83,je,2,2,"option",25,V),o(),n(85,"button",29),x("click",function(){c(i);let t=d();return p(t.navigateToDevisesCreate())}),f(),v(86,"svg",8),o(),h(),n(87,"c-form-feedback",16),l(88),o()()(),n(89,"c-col",12),f(),v(90,"svg",37),h(),n(91,"label",38),l(92,"Entreprise"),o(),n(93,"input",39),x("blur",function(){c(i);let t=d();return p(t.validator.code.validate())}),o(),n(94,"c-form-feedback",16),l(95),o()()()()()}if(s&2){let i=d();a(10),b("ngModel",i.item.code),m("valid",i.validator.code.valid),a(),m("valid",!1),a(),_(i.validator.code.message),a(4),b("ngModel",i.item.dateCreation),m("valid",i.validator.dateCreation.valid),a(),m("valid",!1),a(),_(i.validator.dateCreation.message),a(4),b("ngModel",i.item.dateExpedition),m("valid",i.validator.dateExpedition.valid),a(),m("valid",!1),a(),_(i.validator.dateExpedition.message),a(5),b("ngModel",i.item.rabais),m("valid",i.validator.rabais.valid),a(),m("valid",!1),a(),_(i.validator.rabais.message),a(5),b("ngModel",i.item.typeRabais),m("valid",i.validator.typeRabais.valid),a(),M(i.typeRabaisEnumList),a(2),m("valid",!1),a(),_(i.validator.typeRabais.message),a(6),b("ngModel",i.taxe.id),m("valid",i.validator.taxe.valid),a(),M(i.taxeList),a(4),m("valid",!1),a(),_(i.validator.taxe.message),a(6),b("ngModel",i.taxeExpedition.id),m("valid",i.validator.taxeExpedition.valid),a(),M(i.taxeList),a(4),m("valid",!1),a(),_(i.validator.taxeExpedition.message),a(6),b("ngModel",i.fournisseur.id),m("valid",i.validator.fournisseur.valid),a(),M(i.fournisseurList),a(4),m("valid",!1),a(),_(i.validator.fournisseur.message),a(6),b("ngModel",i.devises.id),m("valid",i.validator.devises.valid),a(),M(i.devisesList),a(4),m("valid",!1),a(),_(i.validator.devises.message),a(5),m("value",i.item.entreprise==null?null:i.item.entreprise.nom)("valid",i.validator.code.valid),a(),m("valid",!1),a(),_(i.validator.code.message)}}function Je(s,u){if(s&1){let i=I();n(0,"tr")(1,"td"),l(2),o(),n(3,"td"),l(4),o(),n(5,"td"),l(6),o(),n(7,"td")(8,"input",56),y("ngModelChange",function(t){let r=c(i).$implicit;return S(r.quantite,t)||(r.quantite=t),p(t)}),x("ngModelChange",function(t){let r=c(i).$implicit;return p(r.disponible=r.disponible?r.disponible-t:r.disponible)}),o()(),n(9,"td"),l(10),o(),n(11,"td"),l(12),o(),n(13,"td")(14,"input",57),y("ngModelChange",function(t){let r=c(i).$implicit;return S(r.disque,t)||(r.disque=t),p(t)}),o()(),n(15,"td",58)(16,"button",59),x("click",function(){c(i);let t=d(2);return p(t.deleteBonCmdProduit(t.bonCmdProduit))}),f(),v(17,"svg",60),o()()()}if(s&2){let i=u.$implicit,e=d(2);a(2),H(" ",i.produit!=null?i.produit.nom:"null"," "),a(2),_(i.prix),a(2),_(e.calculerTotal(i)),a(2),m("min",0),b("ngModel",i.quantite),a(2),_(i.produit==null||i.produit.taxe==null?null:i.produit.taxe.nom),a(2),_(i.disponible),a(2),b("ngModel",i.disque)}}function Ke(s,u){if(s&1&&(n(0,"option",47),l(1),o()),s&2){let i=u.$implicit;m("ngValue",i),a(),_(i.nom)}}function Xe(s,u){if(s&1){let i=I();n(0,"c-card",2)(1,"c-card-header")(2,"strong",40),l(3,"S\xE9lectionner des produits"),o()(),n(4,"c-card-body")(5,"table",41)(6,"thead",42)(7,"tr")(8,"th",43),l(9,"Produit"),o(),n(10,"th",43),l(11,"Prix"),o(),n(12,"th",43),l(13,"Total"),o(),n(14,"th",43),l(15,"Quantite"),o(),n(16,"th",43),l(17,"Taxe"),o(),n(18,"th",43),l(19,"Disponible"),o(),n(20,"th",43),l(21,"Remise"),o(),n(22,"th",44),l(23,"Actions"),o()()(),n(24,"tbody"),B(25,Je,18,8,"tr",null,V),o()(),n(27,"c-col",45)(28,"c-input-group")(29,"select",46),x("ngModelChange",function(t){c(i);let r=d();return p(r.addBonCmdProduits(t))}),B(30,Ke,2,2,"option",47,V),o()()()()(),n(32,"c-card")(33,"c-input-group")(34,"c-card-body")(35,"c-col",12)(36,"label",48),l(37,"Unit\xE9s total "),o(),v(38,"input",49),n(39,"c-form-feedback",16),l(40),o()(),n(41,"c-col",12)(42,"label",50),l(43,"Remise Global"),o(),n(44,"input",51),y("ngModelChange",function(t){c(i);let r=d();return S(r.item.remiseGlobal,t)||(r.item.remiseGlobal=t),p(t)}),x("blur",function(){c(i);let t=d();return p(t.validator.remiseGlobal.validate())}),o(),n(45,"c-form-feedback",16),l(46),o()(),n(47,"c-col",12)(48,"label",52),l(49,"Sous total"),o(),v(50,"input",53),n(51,"c-form-feedback",16),l(52),o()(),n(53,"c-col",12)(54,"label",54),l(55,"Total"),o(),v(56,"input",55),n(57,"c-form-feedback",16),l(58),o()()()()()}if(s&2){let i=d();a(5),m("hover",!0)("responsive",!0)("striped",!0),a(20),M(i.bonCmdProduits),a(5),M(i.produits),a(8),m("value",i.calculerSommeQuantite(i.bonCmdProduits)),a(),m("valid",!1),a(),_(i.validator.totalUnites.message),a(4),b("ngModel",i.item.remiseGlobal),m("valid",i.validator.remiseGlobal.valid),a(),m("valid",!1),a(),_(i.validator.remiseGlobal.message),a(4),m("value",i.calculerSommeSousTotal(i.bonCmdProduits)),a(),m("valid",!1),a(),_(i.validator.sousTotal.message),a(4),m("value",i.calculerSommeTotale(i.bonCmdProduits)),a(),m("valid",!1),a(),_(i.validator.total.message)}}var It=(()=>{let u=class u{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.TypeRabaisEnum=A,this.router=T(Q),this.service=T(he),this.taxeService=T(Be),this.fournisseurService=T(Se),this.devisesService=T(Te),this.niveauPrixService=T(Ve),this.entrepriseService=T(ge),this.produitService=T(ye),this.bonCommandeProduitService=T(Le),this.entrepriseSelectedService=T(fe),this.validator=Me.init(()=>this.item),this.typeRabaisEnumList=Object.values(A),this.statutBonCommandeEnumList=Object.values(Ie)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/inventaire/boncommande/bon-commande"]).then()}ngOnInit(){if(this.loadEntreprise(),this.service.keepData){let e=this.taxeService.createdItemAfterReturn;e.created&&(this.item.taxe=e.item,this.validator.taxe.validate());let t=this.taxeService.createdItemAfterReturn;t.created&&(this.item.taxeExpedition=t.item,this.validator.taxeExpedition.validate());let r=this.fournisseurService.createdItemAfterReturn;r.created&&(this.item.fournisseur=r.item,this.validator.fournisseur.validate());let g=this.devisesService.createdItemAfterReturn;g.created&&(this.item.devises=g.item,this.validator.devises.validate());let E=this.niveauPrixService.createdItemAfterReturn;E.created&&(this.item.niveauPrix=E.item)}else this.validator.reset();this.loadTaxeList(),this.loadFournisseurList(),this.loadDevisesList(),this.loadNiveauPrixList(),this.loadEntrepriseList(),this.loadProduitList()}loadEntreprise(){this.entrepriseService.findById(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.item.entreprise=e,console.log("entre :",this.item.entreprise)},error:e=>console.log(e)})}loadTaxeList(){this.taxeService.findAllOptimized().subscribe({next:e=>this.taxeList=e,error:e=>console.log(e)})}loadFournisseurList(){this.fournisseurService.getFournisseurs(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.fournisseurList=e},error:e=>console.log(e)})}loadDevisesList(){this.devisesService.findAllOptimized().subscribe({next:e=>this.devisesList=e,error:e=>console.log(e)})}loadNiveauPrixList(){this.niveauPrixService.findAllOptimized().subscribe({next:e=>this.niveauPrixList=e,error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAllOptimized().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/inventaire/boncommande/bon-commande"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.router.navigate(["/inventaire/boncommande/bon-commande"]).then()}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get taxe(){return this.item.taxe==null&&(this.item.taxe=new z),this.item.taxe}set taxe(e){this.item.taxe=e}get taxeExpedition(){return this.item.taxeExpedition==null&&(this.item.taxeExpedition=new z),this.item.taxeExpedition}set taxeExpedition(e){this.item.taxeExpedition=e}get fournisseur(){return this.item.fournisseur==null&&(this.item.fournisseur=new be),this.item.fournisseur}set fournisseur(e){this.item.fournisseur=e}get devises(){return this.item.devises==null&&(this.item.devises=new we),this.item.devises}set devises(e){this.item.devises=e}get niveauPrix(){return this.item.niveauPrix==null&&(this.item.niveauPrix=new Ee),this.item.niveauPrix}set niveauPrix(e){this.item.niveauPrix=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new ve),this.item.entreprise}set entreprise(e){this.item.entreprise=e}navigateToTaxeCreate(){this.taxeService.returnUrl=this.router.url,this.router.navigate(["/parametres/taxe/create"]).then()}navigateToFournisseurCreate(){this.fournisseurService.returnUrl=this.router.url,this.router.navigate(["/contacts/fournisseur/create"]).then()}navigateToDevisesCreate(){this.devisesService.returnUrl=this.router.url,this.router.navigate(["/parametres/devises/create"]).then()}navigateToNiveauPrixCreate(){this.niveauPrixService.returnUrl=this.router.url,this.router.navigate(["/parametres/niveau-prix/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new Ce}set bonCmdProduits(e){this.bonCommandeProduitService.items=e}get bonCmdProduit(){return this.bonCommandeProduitService.item}set bonCmdProduit(e){this.bonCommandeProduitService.item=e}get bonCmdProduits(){return this.item.bonCommandeProduit==null&&(this.item.bonCommandeProduit=[]),this.item.bonCommandeProduit}calculerTotal(e){if(console.log(this.item),e.produit){let t=e.prix||0;e.produit.produitNiveauPrix?.forEach(w=>{this.item.niveauPrix?.id==w.niveauPrix?.id&&(console.log("Niveau de prix trouv\xE9..."),t=w.prix)}),console.log("prixProduit",t);let r=e.quantite*t;console.log("sousTotal",r);let g=e.produit.taxe?e.produit.taxe.tauxImposition:0;console.log("taxeProduit",g);let E=this.taxeList?.find(w=>w.id==this.item.taxe?.id)?.tauxImposition||0;console.log("taxeFacture",E);let C=0;if(this.item.typeRabais!=null&&this.item.typeRabais==this.TypeRabaisEnum.POURCENTAGE){let w=r*(1+(E+g)/100);console.log("totalAvecTaxe (pourcentage)",w);let L=w*(this.item.rabais/100);console.log("disque (pourcentage)",L),C=w-L,console.log("totalFinal (pourcentage)",C)}else if(this.item.typeRabais!=null&&this.item.typeRabais==this.TypeRabaisEnum.MONTANT){let w=r*(1+(E+g)/100);console.log("totalAvecTaxe (montant)",w);let L=this.item.rabais;console.log("disque (montant)",L),C=w-L,console.log("totalFinal (montant)",C)}return C*=e.quantite||1,C-=e.disque||0,C=parseFloat(C.toFixed(2)),e.total=C,C}return console.log("Produit non trouv\xE9..."),0}deleteBonCmdProduit(e){this.item.bonCommandeProduit=this.item.bonCommandeProduit?.filter(t=>t!==e)}addBonCmdProduits(e){console.log(e),this.item.bonCommandeProduit==null&&(this.item.bonCommandeProduit=[]);let t=new Pe;t.produit=e,console.log("produit",e),t.disque=0,t.quantite=1,e.disponible=e?.niveauStockInitial-t?.quantite,console.log("disponible",e.disponible),t.disponible=e.disponible,console.log(t.disponible),t.prix=e?.produitNiveauPrix?.filter(r=>r.niveauPrix?.id==this.fournisseur?.niveauPrix?.id)[0]?.prix||e.prixGros,console.log("client",this.fournisseur),console.log("niveau prix du client",this?.fournisseur.niveauPrix),console.log(t.prix),t.total=this.calculerTotal(t),console.log(t.total),this.item.bonCommandeProduit=[...this.item.bonCommandeProduit,t],console.log(this.item.bonCommandeProduit)}calculerSommeSousTotal(e){let t=e.reduce((r,g)=>g?.quantite&&g?.prix?r+g.quantite*g.prix:r,0);return this.item.sousTotal=t,t.toFixed(2)}calculerSommeTotale(e){let t=e.reduce((g,E)=>{let C=this.calculerTotal(E);return console.log(`Total pour ${E.produit?.nom}: ${C}`),g+C},0),r=parseFloat(t.toFixed(2));return console.log(`Somme totale format\xE9e: ${r}`),this.item.total=r,r}calculerSommeQuantite(e){let t=e.reduce((r,g)=>r+(g.quantite||0),0);return this.item.totalUnites=t,t}loadProduitList(){this.produitService.findByEntrepriseId(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>this.produitList=e,error:e=>console.log(e)})}};u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=q({type:u,selectors:[["app-bon-commande-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[j],decls:10,vars:2,consts:[["createFrom",""],["cmdProduitCreate",""],[1,"mb-3"],[1,"hstack","gap","justify-content-end"],[1,"p-2"],["cButton","","color","dark",3,"click"],["cButton","","color","primary",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilPlus"],[4,"ngTemplateOutlet"],[1,"responsive-header",2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","code",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","code","type","text","placeholder","Code","disabled","true","name","code",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cLabel","","for","dateCreation",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","dateCreation","type","date","placeholder","DateCreation","name","dateCreation",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","dateExpedition",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","dateExpedition","type","date","placeholder","DateExpedition","name","dateExpedition",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-sort-descending",2,"color","blue","font-size","30px"],["cLabel","","for","rabais",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","rabais","type","number","placeholder","Rabais","name","rabais",3,"ngModelChange","blur","ngModel","valid"],["cSelect","","id","typeRabais","name","typeRabais",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cIcon","","name","cil-sort-ascending",2,"color","blue","font-size","30px"],["cLabel","","for","taxe",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","taxe","name","taxe",3,"ngModelChange","blur","ngModel","valid"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cSelect","","id","taxeExpedition","name","taxeExpedition",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cilUser",2,"color","blue","font-size","30px"],["cLabel","","for","fournisseur",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","fournisseur","name","fournisseur",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-dollar",2,"color","blue","font-size","30px"],["cLabel","","for","devises",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","devises","name","devises",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-building",2,"color","blue","font-size","30px"],["cLabel","","for","entreprise",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","entreprise","type","text","name","entreprise","disabled","true",3,"blur","value","valid"],[2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],[1,"text-nowrap","text-truncate"],[1,"bg-body-tertiary"],[1,"bg-body-tertiary",2,"display","flex","justify-content","end"],["sm","3",1,"mt-3"],["cSelect","","ngModel","",3,"ngModelChange"],[3,"ngValue"],["cLabel","","for","qte",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","qte","type","number","readonly","","name","qte",3,"value"],["cLabel","","for","remiseGlobal",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","remiseGlobal","type","number","name","remiseGlobal",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","stotal",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","stotal","type","number","readonly","","name","stotal",3,"value"],["cLabel","","for","total",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","total","type","number","readonly","","name","total",3,"value"],["type","number",3,"ngModelChange","min","ngModel"],["type","number",3,"ngModelChange","ngModel"],[2,"display","flex","justify-content","end"],["cButton","","color","",3,"click"],["cIcon","","name","cil-trash","size","lg"]],template:function(t,r){t&1&&(P(0,Ne,12,3),F(1,0,Ue),P(3,ze,1,1),F(4,3,ke),P(6,Qe,96,40,"ng-template",null,0,D)(8,Xe,59,16,"ng-template",null,1,D)),t&2&&(a(),R(r.standAlon),a(3),R(!r.standAlon))},dependencies:[$,G,ie,te,xe,pe,ue,le,de,ce,se,_e,me,ee,J,K,X,Z,N,Y,W,re]});let s=u;return s})();export{It as BonCommandeUpdateComponent};
