import './polyfills.server.mjs';
import{a as F,b as T}from"./chunk-DXUEKDUO.mjs";import{b as E}from"./chunk-SRH3ZM3X.mjs";import{a as x,b as D}from"./chunk-CAPKOXWR.mjs";import{i as p,o as v,p as C,r as S,s as g,t as b}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import"./chunk-UR2QYS3H.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-32WZQ4LQ.mjs";import{e as h}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import{b as f}from"./chunk-YCIOFEEA.mjs";import{Pb as t,Qb as i,Rb as m,Yb as s,ga as a,hc as r,ka as l,rc as d}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";var H=(()=>{let n=class n{constructor(){this.factureService=a(T),this.router=a(h),this.commandeService=a(E),this.clientService=a(D),this.httpClient=a(f)}set items(e){this.factureService.items=e}get itemF(){return this.factureService.item}get item(){return this.commandeService.item}get returnUrl(){return this.commandeService.returnUrl}set item(e){this.factureService.item=e}navigateToPdfCommandeCreate(){this.factureService.returnUrl=this.router.url,this.commandeService.keepData=!0,this.router.navigate(["/ventes/commande/commande/commandePdf"]).then()}navigateToFactureCommandeCreate(){this.factureService.returnUrl=this.router.url,this.commandeService.keepData=!0,this.router.navigate(["/ventes/facture/facture/facturecommande"]).then()}ngOnInit(){if(this.commandeService.keepData){let e=this.factureService.createdItemAfterReturn;e.created&&(this.item=e.item,console.log(this.item),this.commandeService.commandeFacture(this.item.id,e.item.id).subscribe({next:()=>{this.factureService.createdItemAfterReturn.created=!1,this.factureService.createdItemAfterReturn.item=new F}}))}else this.item.client=new x,this.loadClientList(),this.fetchData();this.commandeService.keepData=!1}fetchData(){this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe(e=>{console.log(e),this.data=e})}loadClientList(){this.clientService.findAllOptimized().subscribe({next:e=>this.clientList=e,error:e=>console.log(e)})}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=l({type:n,selectors:[["app-commande-autre"]],standalone:!0,features:[d],decls:23,vars:0,consts:[["cCardTitle",""],["cCardText",""],["cButton","",3,"click"]],template:function(o,u){o&1&&(t(0,"c-card")(1,"c-card-header"),r(2,"PDF"),i(),t(3,"c-card-body")(4,"h5",0),r(5,"Voir le pdf"),i(),t(6,"p",1),r(7," Consultez votre Commande en toute simplicit\xE9 en cliquant sur le lien pour t\xE9l\xE9charger le PDF"),i(),t(8,"button",2),s("click",function(){return u.navigateToPdfCommandeCreate()}),r(9,"Voir le pdf"),i()()(),m(10,"br")(11,"br"),t(12,"c-card")(13,"c-card-header"),r(14,"Facture"),i(),t(15,"c-card-body")(16,"h5",0),r(17,"Passer une facture"),i(),t(18,"p",1),r(19," Effectuez une facture en toute simplicit\xE9 en suivant les \xE9tapes ci-dessous."),i(),t(20,"button",2),s("click",function(){return u.navigateToFactureCommandeCreate()}),r(21,"Passer une facture"),i()()(),m(22,"br"))},dependencies:[p,C,v,S,g,b]});let c=n;return c})();export{H as CommandeAutreComponent};
