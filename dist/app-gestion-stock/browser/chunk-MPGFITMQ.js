import{a as Te,b as Le}from"./chunk-JGLRKKTT.js";import"./chunk-SJA227LF.js";import"./chunk-KJP3LYGT.js";import"./chunk-OXVG375S.js";import{a as Fe}from"./chunk-UBDUPB6Y.js";import"./chunk-N7366OEV.js";import"./chunk-JPRJCQ7A.js";import"./chunk-7ZH456HS.js";import"./chunk-ME4MDGRJ.js";import"./chunk-L4RF7HMY.js";import"./chunk-TJJAYEN3.js";import{a as Ue}from"./chunk-GPEA52X7.js";import"./chunk-YAFLJAWF.js";import{a as Ee,b as we}from"./chunk-E3QTV3JX.js";import{a as Se,b as be}from"./chunk-TCO3KLXK.js";import{a as A,b as ye}from"./chunk-XYVWMYTK.js";import"./chunk-AHUUM4CZ.js";import{a as k}from"./chunk-LAERE26A.js";import"./chunk-KQQNHP2G.js";import"./chunk-SR3OXJX3.js";import"./chunk-OLAU7RUP.js";import{a as ge,b as Ce}from"./chunk-544CEG4N.js";import{a as _e,b as xe}from"./chunk-PDLWEXXK.js";import{b as re,c as se,f as oe,h as ae,i as le,j as me,k as ce,n as de}from"./chunk-C5NPBRNY.js";import{a as pe,b as ue}from"./chunk-E4IVXHC4.js";import{$ as te,I as K,J as Q,K as X,L as Y,P as Z,T as $,U as P,_ as ee,p as M,ta as ie,v as q,w as J}from"./chunk-EEWOCATZ.js";import{c as D}from"./chunk-4DTSML7Z.js";import{a as ne}from"./chunk-AREPOXMW.js";import{b as fe}from"./chunk-RM6HUJIE.js";import{a as he}from"./chunk-4FWJZSCC.js";import{a as ve}from"./chunk-WSA7JG33.js";import"./chunk-KBKVWUMZ.js";import{d as j,e as H}from"./chunk-7D4QPVHB.js";import"./chunk-2BQUVQN4.js";import"./chunk-RTZTBWEW.js";import"./chunk-3HUUSNPM.js";import"./chunk-H2QFYA5F.js";import{Cb as h,Ib as L,Kb as N,Lb as R,Mb as B,Nb as a,Ob as o,Pb as _,Sb as V,Tb as U,Wb as C,Yb as u,ec as I,fb as s,fc as m,ga as c,gc as x,ka as G,lc as b,mc as E,nc as w,pc as W,va as d,vc as z,wa as p,wb as g,xa as y,xb as T,ya as O,yb as F}from"./chunk-4HLAVBW4.js";import"./chunk-RGL3W33T.js";var Ve=()=>[P,import("./chunk-CYWVAYB3.js").then(i=>i.NgTemplateOutlet),M,H,te,ee,ie,D],Ie=()=>[import("./chunk-CYWVAYB3.js").then(i=>i.NgTemplateOutlet)];function De(i,l){i&1&&_(0,"c-spinner",13)}function Me(i,l){i&1&&(y(),_(0,"svg",14))}function Pe(i,l){i&1&&_(0,"c-spinner",13)}function ke(i,l){i&1&&(y(),_(0,"svg",16))}function Ae(i,l){i&1&&V(0)}function Ge(i,l){if(i&1){let r=U();a(0,"c-row",7)(1,"c-nav",8)(2,"c-nav-item",9)(3,"button",10),C("click",function(){d(r);let t=u();return p(t.cancel())}),m(4,"Cancel"),o()(),a(5,"c-nav-item",11)(6,"button",12),C("click",function(){d(r);let t=u();return p(t.reset())}),g(7,De,1,0,"c-spinner",13)(8,Me,1,0,":svg:svg",14),m(9," Reset "),o()(),a(10,"c-nav-item",11)(11,"button",15),C("click",function(){d(r);let t=u();return p(t.update())}),g(12,Pe,1,0,"c-spinner",13)(13,ke,1,0,":svg:svg",16),m(14," Modifier "),o()()()(),g(15,Ae,1,0,"ng-container",17)}if(i&2){let r=u(),e=I(7);s(7),L(r.resetting?7:8),s(5),L(r.sending?12:13),s(3),h("ngTemplateOutlet",e)}}function Oe(i,l){i&1&&V(0)}function Ne(i,l){if(i&1&&g(0,Oe,1,0,"ng-container",17),i&2){u();let r=I(7);h("ngTemplateOutlet",r)}}function Re(i,l){if(i&1&&(a(0,"option",23),m(1),o()),i&2){let r=l.$implicit;h("value",r.id),s(),x(r.nom)}}function Be(i,l){if(i&1){let r=U();a(0,"c-card",7)(1,"c-card-body")(2,"c-row",18)(3,"c-col",1)(4,"label",19),m(5,"Code"),o(),a(6,"input",20),w("ngModelChange",function(t){d(r);let n=u();return E(n.item.code,t)||(n.item.code=t),p(t)}),C("blur",function(){d(r);let t=u();return p(t.validator.code.validate())}),o(),a(7,"c-form-feedback",4),m(8),o()(),a(9,"c-col",1)(10,"label",21),m(11,"Client"),o(),a(12,"c-input-group")(13,"select",22),w("ngModelChange",function(t){d(r);let n=u();return E(n.client.id,t)||(n.client.id=t),p(t)}),C("blur",function(){d(r);let t=u();return p(t.validator.client.validate())}),R(14,Re,2,2,"option",23,N),o(),a(16,"button",24),C("click",function(){d(r);let t=u();return p(t.navigateToClientCreate())}),y(),_(17,"svg",25),o(),O(),a(18,"c-form-feedback",4),m(19),o()()()()()()}if(i&2){let r=u();s(6),b("ngModel",r.item.code),h("valid",r.validator.code.valid),s(),h("valid",!1),s(),x(r.validator.code.message),s(5),b("ngModel",r.client.id),h("valid",r.validator.client.valid),s(),B(r.filteredClientList),s(4),h("valid",!1),s(),x(r.validator.client.message)}}var Tt=(()=>{let l=class l{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.filteredClientList=[],this.router=c(j),this.service=c(Ce),this.taxeService=c(ye),this.clientService=c(xe),this.devisesService=c(be),this.niveauPrixService=c(we),this.entrepriseService=c(ue),this.entrepriseSelectedService=c(he),this.employeService=c(fe),this.userInfosService=c(ve),this.tokenService=c(ne),this.validator=Te.init(()=>this.item),this.factureGetter=()=>this.facture,this.factureSetter=e=>this.facture=e,this.addressFacturationGetter=()=>this.addressFacturation,this.addressFacturationSetter=e=>this.addressFacturation=e,this.addressExpeditionGetter=()=>this.addressExpedition,this.addressExpeditionSetter=e=>this.addressExpedition=e,this.typeRabaisEnumList=Object.values(Fe),this.statutCommandeEnumList=Object.values(Le)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/ventes/commande/commande"]).then()}ngOnInit(){if(this.service.keepData){let t=this.taxeService.createdItemAfterReturn;t.created&&(this.item.taxe=t.item);let n=this.taxeService.createdItemAfterReturn;n.created&&(this.item.taxeExpedition=n.item);let f=this.clientService.createdItemAfterReturn;f.created&&(this.item.client=f.item,this.validator.client.validate());let S=this.devisesService.createdItemAfterReturn;S.created&&(this.item.devises=S.item);let v=this.niveauPrixService.createdItemAfterReturn;v.created&&(this.item.niveauPrix=v.item)}else this.validator.reset();this.loadTaxeList(),this.loadDevisesList(),this.loadNiveauPrixList(),this.loadEntrepriseList(),(this.tokenService.getRole()?.some(t=>t=="ADMIN")?1:0)==1?this.getClientsForAdmin():this.getClientsForEmploye()}loadTaxeList(){this.taxeService.findAllOptimized().subscribe({next:e=>this.taxeList=e,error:e=>console.log(e)})}getClientsForAdmin(){this.entrepriseSelectedService.getEntrepriseSelected()!=0?this.clientService.getClients(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.filteredClientList=e.filter(t=>t.id!==this.item.client?.id),this.clientList=e,console.log("Clients :",e)},error:e=>console.log(e)}):this.entrepriseService.findByAdmin(this.userInfosService.getUsername()).subscribe(e=>{this.entreprises=e,console.log("Entreprises: ",this.entreprises),this.entreprises&&this.entreprises.length>0?this.clientService.getClients(this.entreprises[0].id).subscribe({next:t=>{this.filteredClientList=t.filter(n=>n.id!==this.item.client?.id),this.clientList=t,console.log("Clients :",t)},error:t=>console.log(t)}):console.log("Aucune entreprise trouv\xE9e.")},e=>{console.log(e)})}getClientsForEmploye(){this.entrepriseSelectedService.getEntrepriseSelected()!=0?this.clientService.getClients(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{this.filteredClientList=e.filter(t=>t.id!==this.item.client?.id),this.clientList=e,console.log("Clients :",e)},error:e=>console.log(e)}):this.employeService.findByUserName(this.userInfosService.getUsername()).subscribe(e=>{console.log("empId: ",e.id),this.entrepriseService.findEntreprisesAdroitAcces(e.id).subscribe(t=>{this.entreprises=t,console.log("Entreprises\xC0droit: ",this.entreprises),this.entreprises&&this.entreprises.length>0&&this.clientService.getClients(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:n=>{this.filteredClientList=n.filter(f=>f.id!==this.item.client?.id),this.clientList=n,console.log("Clients :",n)},error:n=>console.log(n)})},t=>{console.log(t)})},e=>{console.log(e)})}loadDevisesList(){this.devisesService.findAllOptimized().subscribe({next:e=>this.devisesList=e,error:e=>console.log(e)})}loadNiveauPrixList(){this.niveauPrixService.findAllOptimized().subscribe({next:e=>this.niveauPrixList=e,error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAllOptimized().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/ventes/commande/commande"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get facture(){return this.item.facture==null&&(this.item.facture=new Ue),this.item.facture}set facture(e){this.item.facture=e}get addressFacturation(){return this.item.addressFacturation==null&&(this.item.addressFacturation=new k),this.item.addressFacturation}set addressFacturation(e){this.item.addressFacturation=e}get addressExpedition(){return this.item.addressExpedition==null&&(this.item.addressExpedition=new k),this.item.addressExpedition}set addressExpedition(e){this.item.addressExpedition=e}get taxe(){return this.item.taxe==null&&(this.item.taxe=new A),this.item.taxe}set taxe(e){this.item.taxe=e}get taxeExpedition(){return this.item.taxeExpedition==null&&(this.item.taxeExpedition=new A),this.item.taxeExpedition}set taxeExpedition(e){this.item.taxeExpedition=e}get client(){return this.item.client==null&&(this.item.client=new _e),this.item.client}set client(e){this.item.client=e}get devises(){return this.item.devises==null&&(this.item.devises=new Se),this.item.devises}set devises(e){this.item.devises=e}get niveauPrix(){return this.item.niveauPrix==null&&(this.item.niveauPrix=new Ee),this.item.niveauPrix}set niveauPrix(e){this.item.niveauPrix=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new pe),this.item.entreprise}set entreprise(e){this.item.entreprise=e}navigateToTaxeCreate(){this.taxeService.returnUrl=this.router.url,this.router.navigate(["/parametres/taxe/create"]).then()}navigateToClientCreate(){this.clientService.returnUrl=this.router.url,this.router.navigate(["/contacts/client/create"]).then()}navigateToDevisesCreate(){this.devisesService.returnUrl=this.router.url,this.router.navigate(["/parametres/devises/create"]).then()}navigateToNiveauPrixCreate(){this.niveauPrixService.returnUrl=this.router.url,this.router.navigate(["/parametres/niveau-prix/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new ge}retour(){this.router.navigate(["/pays/pays/list"]).then()}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=G({type:l,selectors:[["app-commande-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[W],decls:22,vars:9,consts:[["createFrom",""],["sm","4"],["cLabel","","for","remiseGlobal"],["cFormControl","","id","remiseGlobal","type","number","name","remiseGlobal",3,"ngModelChange","ngModel"],[3,"valid"],["cLabel","","for","totalUnites"],["cFormControl","","id","totalUnites","type","number","name","totalUnites",3,"ngModelChange","blur","ngModel","valid"],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/ventes/commande/commande",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"g-3"],["cLabel","","for","code"],["cFormControl","","id","code","type","text","placeholder","Code","name","code",3,"ngModelChange","blur","ngModel","valid"],["cLabel","","for","client"],["cSelect","","id","client","name","client",3,"ngModelChange","blur","ngModel","valid"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cilPlus"]],template:function(t,n){if(t&1){let f=U();g(0,Ge,16,3),T(1,0,Ve),g(3,Ne,1,1),T(4,3,Ie),g(6,Be,20,8,"ng-template",null,0,z),a(8,"c-card-body")(9,"c-col",1)(10,"label",2),m(11,"Remise Global"),o(),a(12,"input",3),w("ngModelChange",function(v){return d(f),E(n.item.remiseGlobal,v)||(n.item.remiseGlobal=v),p(v)}),o(),a(13,"c-form-feedback",4),m(14),o()(),a(15,"c-col",1)(16,"label",5),m(17,"Total Unites"),o(),a(18,"input",6),w("ngModelChange",function(v){return d(f),E(n.item.totalUnites,v)||(n.item.totalUnites=v),p(v)}),C("blur",function(){return d(f),p(n.validator.totalUnites.validate())}),o(),a(19,"c-form-feedback",4),m(20),o()(),_(21,"c-col",1),o()}t&2&&(s(),F(n.standAlon),s(3),F(!n.standAlon),s(8),b("ngModel",n.item.remiseGlobal),s(),h("valid",!1),s(),x(n.item.remiseGlobal),s(4),b("ngModel",n.item.totalUnites),h("valid",n.validator.totalUnites.valid),s(),h("valid",!1),s(),x(n.validator.totalUnites.message))},dependencies:[X,P,$,Z,de,me,ce,re,ae,le,se,oe,Y,q,J,Q,M,K,D],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let i=l;return i})();export{Tt as CommandeUpdateComponent};
