import './polyfills.server.mjs';
import{b as T}from"./chunk-GQ7BGXIS.mjs";import{b as k}from"./chunk-OR4ZYGNA.mjs";import{a as F,b as x}from"./chunk-NXGTTB3I.mjs";import{a as l,b}from"./chunk-4O54P57Y.mjs";import{n as E}from"./chunk-MG5ECMPI.mjs";import{i as f,o as C,p as g,r as D,s as S,t as P}from"./chunk-BJSQRMLK.mjs";import"./chunk-XR27ODAI.mjs";import"./chunk-TMD5LWM3.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{e as v}from"./chunk-AO72HDTW.mjs";import"./chunk-TX6S5BIU.mjs";import"./chunk-OCP4HJ6B.mjs";import{Pb as t,Qb as i,Rb as m,Yb as a,ga as o,hc as r,ka as p,rc as h}from"./chunk-NYO24GET.mjs";import"./chunk-XAJIYFV3.mjs";var oe=(()=>{let n=class n{get items(){return this.service.items}ngOnInit(){if(this.service.keepData){let e=this.paiement.createdItemAfterReturn;e.created&&(this.item.paiement=e.item,console.log(this.item),this.service.facturePaiement(this.item.id,e.item.id).subscribe({next:()=>{this.paiement.createdItemAfterReturn.created=!1,this.paiement.createdItemAfterReturn.item=new F}}))}else this.item.client=new l;this.service.keepData=!1,this.loadClientList()}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}get client(){return this.item.client==null&&(this.item.client=new l),this.item.client}set items(e){this.service.items=e}get item(){return this.service.item}set item(e){this.service.item=e}navigateToPaiementCreate(){this.paiement.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/ventes/paiement/create"]).then()}navigateToPdfFacture(){this.paiement.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/ventes/facture/facture/facturepdf"]).then()}constructor(){this.loading=!1,this.paginating=!1,this.currentIndex=0,this.deleteModel=!1,this.router=o(v),this.service=o(T),this.paiement=o(x),this.retourProduitService=o(k),this.clientService=o(b),this.standAlon=!0,this.paiementGetter=()=>this.paiement,this.currentDate=new Date}navigateToRetourProduitCreate(){this.retourProduitService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/ventes/retourproduit/retour-produit/retourfacture"]).then(),this.loadData()}loadClientList(){this.clientService.findAllOptimized().subscribe({next:e=>this.clientList=e,error:e=>console.log(e)})}loadData(){this.retourProduitService.facture=this.item}printReport(){window.print()}};n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=p({type:n,selectors:[["app-facture-autre"]],standalone:!0,features:[h],decls:34,vars:0,consts:[["cCardTitle",""],["cCardText",""],["cButton","",3,"click"]],template:function(c,u){c&1&&(t(0,"c-card")(1,"c-card-header"),r(2,"PDF"),i(),t(3,"c-card-body")(4,"h5",0),r(5,"Voir le pdf"),i(),t(6,"p",1),r(7," Consultez votre Facture en toute simplicit\xE9 en cliquant sur le lien pour t\xE9l\xE9charger le PDF"),i(),t(8,"button",2),a("click",function(){return u.navigateToPdfFacture()}),r(9,"Voir le pdf"),i()()(),m(10,"br")(11,"br"),t(12,"c-card")(13,"c-card-header"),r(14,"Paiement"),i(),t(15,"c-card-body")(16,"h5",0),r(17,"Passer un paiement"),i(),t(18,"p",1),r(19," Effectuez un paiement en toute simplicit\xE9 en suivant les \xE9tapes ci-dessous."),i(),t(20,"button",2),a("click",function(){return u.navigateToPaiementCreate()}),r(21,"Passer un paiement"),i()()(),m(22,"br")(23,"br"),t(24,"c-card")(25,"c-card-header"),r(26,"Retour de produit"),i(),t(27,"c-card-body")(28,"h5",0),r(29,"Passer un retour de produits"),i(),t(30,"p",1),r(31," Effectuez un retour de produits en suivant les \xE9tapes ci-dessous."),i(),t(32,"button",2),a("click",function(){return u.navigateToRetourProduitCreate()}),r(33,"Passer un retour de produits"),i()()())},dependencies:[E,f,D,g,C,S,P]});let s=n;return s})();export{oe as FactureAutreComponent};
