import{a as ce}from"./chunk-L4RF7HMY.js";import{a as pe,b as de}from"./chunk-NRMQ4WUC.js";import{b as ue}from"./chunk-CJTN6TSS.js";import{a as se,b as le}from"./chunk-EAROEH6U.js";import{b as Z,c as $,f as ee,h as te,i as ie,j as ne,k as re,n as oe}from"./chunk-RMR25O2K.js";import{a as ae,b as me}from"./chunk-36NSVSE4.js";import{$ as X,J as H,K as j,L as q,P as J,T as K,U as I,_ as Q,p as k,ta as Y,v as W,w as z}from"./chunk-ETPUSV7N.js";import{c as V}from"./chunk-DKLNZNMU.js";import{b as B,d as N,e as O}from"./chunk-EVAI7AMW.js";import{Cb as v,Ib as w,Kb as L,Lb as U,Mb as E,Nb as a,Ob as m,Pb as c,Sb as M,Tb as T,Wb as g,Yb as l,ec as D,fc as h,ga as _,gb as s,gc as G,ka as F,lc as P,mc as x,nc as S,pc as R,va as p,vc as A,wa as d,wb as u,xa as f,xb as y,ya as C,yb as b}from"./chunk-BXK32XEB.js";var he=()=>[I,import("./chunk-K4L4KWTC.js").then(t=>t.NgTemplateOutlet),k,O,X,Q,Y,V],_e=()=>[import("./chunk-K4L4KWTC.js").then(t=>t.NgTemplateOutlet)];function fe(t,r){t&1&&c(0,"c-spinner",7)}function ge(t,r){t&1&&(f(),c(0,"svg",8))}function Ce(t,r){t&1&&c(0,"c-spinner",7)}function ve(t,r){t&1&&(f(),c(0,"svg",10))}function Pe(t,r){t&1&&M(0)}function xe(t,r){if(t&1){let n=T();a(0,"c-row",1)(1,"c-nav",2)(2,"c-nav-item",3)(3,"button",4),g("click",function(){p(n);let i=l();return d(i.cancel())}),h(4,"Annuler"),m()(),a(5,"c-nav-item",5)(6,"button",6),g("click",function(){p(n);let i=l();return d(i.reset())}),u(7,fe,1,0,"c-spinner",7)(8,ge,1,0,":svg:svg",8),h(9," Reset "),m()(),a(10,"c-nav-item",5)(11,"button",9),g("click",function(){p(n);let i=l();return d(i.update())}),u(12,Ce,1,0,"c-spinner",7)(13,ve,1,0,":svg:svg",10),h(14," Modifier "),m()()()(),u(15,Pe,1,0,"ng-container",11)}if(t&2){let n=l(),e=D(7);s(7),w(n.resetting?7:8),s(5),w(n.sending?12:13),s(3),v("ngTemplateOutlet",e)}}function Se(t,r){t&1&&M(0)}function ye(t,r){if(t&1&&u(0,Se,1,0,"ng-container",11),t&2){l();let n=D(7);v("ngTemplateOutlet",n)}}function be(t,r){if(t&1&&(a(0,"option",23),h(1),m()),t&2){let n=r.$implicit;v("value",n.id),s(),G(n.nom)}}function we(t,r){if(t&1){let n=T();a(0,"c-card",1)(1,"c-card-body")(2,"c-row",12)(3,"c-col",13),f(),c(4,"svg",14),C(),a(5,"label",15),h(6,"Date de paiement"),m(),a(7,"input",16),S("ngModelChange",function(i){p(n);let o=l();return x(o.item.datePaiement,i)||(o.item.datePaiement=i),d(i)}),m()(),a(8,"c-col",13),f(),c(9,"svg",17),C(),a(10,"label",18),h(11,"Montant pay\xE9"),m(),a(12,"input",19),S("ngModelChange",function(i){p(n);let o=l();return x(o.item.montantPaye,i)||(o.item.montantPaye=i),d(i)}),m()(),a(13,"c-col",13),f(),c(14,"svg",20),C(),a(15,"label",21),h(16,"M\xE9thode de paiement"),m(),a(17,"c-input-group")(18,"select",22),S("ngModelChange",function(i){p(n);let o=l();return x(o.methodePaiement.id,i)||(o.methodePaiement.id=i),d(i)}),U(19,be,2,2,"option",23,L),m(),a(21,"button",24),g("click",function(){p(n);let i=l();return d(i.navigateToMethodePaiementCreate())}),f(),c(22,"svg",25),m()()()()()()}if(t&2){let n=l();s(7),P("ngModel",n.item.datePaiement),s(5),P("ngModel",n.item.montantPaye),s(6),P("ngModel",n.methodePaiement.id),s(),E(n.methodePaiementList)}}var Qe=(()=>{let r=class r{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=_(N),this.service=_(le),this.methodePaiementService=_(de),this.entrepriseService=_(me),this.factureService=_(ue),this.validator=ce.init(()=>this.item),this.route=_(B)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngOnInit(){if(this.route.queryParams.subscribe(e=>{let i=e.idPaiement;i&&this.service.findById(i).subscribe({next:o=>{this.item=o,this.loadMethodePaiementList(),this.loadEntrepriseList()},error:o=>console.error(o)})}),this.service.keepData){let e=this.methodePaiementService.createdItemAfterReturn;e.created&&(this.item.methodePaiement=e.item)}else this.validator.reset();this.loadMethodePaiementList(),this.loadEntrepriseList()}loadMethodePaiementList(){this.methodePaiementService.findAllOptimized().subscribe({next:e=>this.methodePaiementList=e,error:e=>console.log(e)})}loadEntrepriseList(){this.entrepriseService.findAllOptimized().subscribe({next:e=>this.entrepriseList=e,error:e=>console.log(e)})}calculPrixImpaye(){return this.item.montantRest-this.item.montantPaye}update(){this.item.montantRest=this.calculPrixImpaye(),console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/ventes/paiement"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get itemF(){return this.factureService.item}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get methodePaiement(){return this.item.methodePaiement==null&&(this.item.methodePaiement=new pe),this.item.methodePaiement}set methodePaiement(e){this.item.methodePaiement=e}get entreprise(){return this.item.entreprise==null&&(this.item.entreprise=new ae),this.item.entreprise}set entreprise(e){this.item.entreprise=e}navigateToMethodePaiementCreate(){this.methodePaiementService.returnUrl=this.router.url,this.router.navigate(["/parametres/methode-paiement/create"]).then()}navigateToEntrepriseCreate(){this.entrepriseService.returnUrl=this.router.url,this.router.navigate(["/parametres/entreprise/create"]).then()}cancel(){this.item=new se}retour(){this.router.navigate(["/pays/pays/list"]).then()}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=F({type:r,selectors:[["app-paiement-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[R],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/ventes/paiement",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-calendar",2,"color","blue","font-size","30px"],["cLabel","","for","datePaiement",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","datePaiement","type","date","placeholder","DatePaiement","name","datePaiement",3,"ngModelChange","ngModel"],["cIcon","","name","cil-ruble",2,"color","blue","font-size","30px"],["cLabel","","for","montantPaye",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","montantPaye","type","number","placeholder","MontantPaye","name","montantPaye",3,"ngModelChange","ngModel"],["cIcon","","name","cil-credit-card",2,"color","blue","font-size","30px"],["cLabel","","for","methodePaiement",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","methodePaiement","name","methodePaiement",3,"ngModelChange","ngModel"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cilPlus"]],template:function(i,o){i&1&&(u(0,xe,16,3),y(1,0,he),u(3,ye,1,1),y(4,3,_e),u(6,we,23,3,"ng-template",null,0,A)),i&2&&(s(),b(o.standAlon),s(3),b(!o.standAlon))},dependencies:[j,I,K,J,oe,ne,re,Z,te,ie,$,ee,q,W,z,H,k,V]});let t=r;return t})();export{Qe as a};
