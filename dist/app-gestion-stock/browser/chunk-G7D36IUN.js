import{a as re}from"./chunk-MZT4MD7G.js";import{a as S,b as ne}from"./chunk-NRMQ4WUC.js";import"./chunk-SR3OXJX3.js";import{a as ie}from"./chunk-J5REKJTI.js";import{a as X,b as Y,c as Z,f as $,n as ee}from"./chunk-RMR25O2K.js";import{$ as K,L as G,M as A,N as U,O as j,P as H,T as q,U as V,_ as J,p as W,ta as Q,v as z,w as O,y as B}from"./chunk-ETPUSV7N.js";import{c as T}from"./chunk-DKLNZNMU.js";import{a as te}from"./chunk-PTMIGOEM.js";import{d as R,e as N}from"./chunk-EVAI7AMW.js";import"./chunk-2BQUVQN4.js";import"./chunk-RTZTBWEW.js";import"./chunk-VVDYSQS6.js";import"./chunk-LUIBGOM6.js";import{Cb as f,Ib as k,Nb as o,Ob as a,Pb as C,Sb as y,Tb as g,Wb as _,Yb as m,ec as D,fc as l,ga as h,gb as c,ka as F,lc as x,mc as v,nc as M,pc as I,va as p,vc as L,wa as d,wb as u,xa as w,xb as P,ya as E,yb as b}from"./chunk-BXK32XEB.js";import"./chunk-RGL3W33T.js";var oe=()=>[V,import("./chunk-K4L4KWTC.js").then(t=>t.NgTemplateOutlet),W,N,K,J,Q,T],ae=()=>[import("./chunk-K4L4KWTC.js").then(t=>t.NgTemplateOutlet)];function me(t,r){if(t&1){let n=g();o(0,"c-nav-item",3)(1,"button",11),_("click",function(){p(n);let i=m(2);return d(i.retour())}),l(2,"Return"),a()()}if(t&2){let n=m(2);c(),f("routerLink",n.returnUrl)}}function se(t,r){t&1&&C(0,"c-spinner",8)}function ce(t,r){t&1&&(w(),C(0,"svg",9))}function le(t,r){t&1&&y(0)}function pe(t,r){if(t&1){let n=g();o(0,"c-row",1)(1,"c-nav",2),u(2,me,3,1,"c-nav-item",3),o(3,"c-nav-item",4)(4,"button",5),_("click",function(){p(n);let i=m();return d(i.cancel())}),l(5,"Annuler"),a()(),o(6,"c-nav-item",3)(7,"button",6),_("click",function(){p(n);let i=m();return d(i.reset())}),l(8,"R\xE9initialiser"),a()(),o(9,"c-nav-item",3)(10,"button",7),_("click",function(){p(n);let i=m();return d(i.create())}),u(11,se,1,0,"c-spinner",8)(12,ce,1,0,":svg:svg",9),l(13," Cr\xE9er "),a()()()(),u(14,le,1,0,"ng-container",10)}if(t&2){let n=m(),e=D(7);c(2),k(n.toReturn?2:-1),c(9),k(n.sending?11:12),c(3),f("ngTemplateOutlet",e)}}function de(t,r){t&1&&y(0)}function ue(t,r){if(t&1&&u(0,de,1,0,"ng-container",10),t&2){m();let n=D(7);f("ngTemplateOutlet",n)}}function he(t,r){if(t&1){let n=g();o(0,"c-card",1)(1,"c-card-header")(2,"strong",12),l(3,'Veuillez remplir les informations ci-dessous pour cr\xE9er une nouvelle "M\xE9thode de paiement"'),a()(),o(4,"c-card-body")(5,"c-row",13)(6,"c-col",14),w(),C(7,"svg",15),E(),o(8,"label",16),l(9,"Nom"),a(),o(10,"input",17),M("ngModelChange",function(i){p(n);let s=m();return v(s.item.nom,i)||(s.item.nom=i),d(i)}),a()(),o(11,"c-col",18)(12,"c-form-check")(13,"input",19),M("ngModelChange",function(i){p(n);let s=m();return v(s.item.disponiblePos,i)||(s.item.disponiblePos=i),d(i)}),a(),o(14,"label",20),l(15,"DisponiblePos"),a()(),o(16,"c-form-check")(17,"input",21),M("ngModelChange",function(i){p(n);let s=m();return v(s.item.actif,i)||(s.item.actif=i),d(i)}),a(),o(18,"label",22),l(19,"Actif"),a()()()()()()}if(t&2){let n=m();c(10),x("ngModel",n.item.nom),c(3),x("ngModel",n.item.disponiblePos),c(4),x("ngModel",n.item.actif)}}var Ie=(()=>{let r=class r{constructor(){this.sending=!1,this.standAlon=!0,this.toasterService=h(ie),this.entrepriseSelectedService=h(te),this.router=h(R),this.service=h(ne),this.validator=re.init(()=>this.item)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngOnInit(){this.service.keepData||this.reset(!1),this.service.keepData=!1}create(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.item.idEntreprise=this.entrepriseSelectedService.getEntrepriseSelected(),this.service.create(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:e=>{if(this.sending=!1,e!=null){if(this.toReturn){this.item=e,this.router.navigate([this.returnUrl]).then();return}this.item=new S,this.router.navigate(["/parametres/methode-paiement"]).then(),this.toasterService.toast({message:"Une nouvelle m\xE9thode de paiement a \xE9t\xE9 ajout\xE9",color:"success"})}},error:e=>{this.sending=!1,console.log(e),this.validator.import(e.error)}}))}reset(e=!0){(e||this.item==null)&&(this.item=new S),this.validator.reset()}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}cancel(){this.item=new S}retour(){this.router.navigate(["/pays/pays/list"]).then()}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=F({type:r,selectors:[["app-methode-paiement-create"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[I],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/parametres/methode-paiement",3,"click"],["cButton","","color","dark",3,"click"],["cButton","","color","primary",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilPlus"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"click","routerLink"],[1,"responsive-header",2,"color","#0a0a0a","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-swap-horizontal",2,"color","blue","font-size","30px"],["cLabel","","for","nom",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","nom","type","text","placeholder","Nom","name","nom",3,"ngModelChange","ngModel"],["sm","12",1,"g-3"],["cFormCheckInput","","id","disponiblePos","name","disponiblePos","type","checkbox",3,"ngModelChange","ngModel"],["cFormCheckLabel","","for","disponiblePos"],["cFormCheckInput","","id","actif","name","actif","type","checkbox",3,"ngModelChange","ngModel"],["cFormCheckLabel","","for","actif"]],template:function(i,s){i&1&&(u(0,pe,15,3),P(1,0,oe),u(3,ue,1,1),P(4,3,ae),u(6,he,20,3,"ng-template",null,0,L)),i&2&&(c(),b(s.standAlon),c(3),b(!s.standAlon))},dependencies:[V,q,H,ee,Y,X,Z,$,G,z,O,B,T,U,A,j],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let t=r;return t})();export{Ie as MethodePaiementCreateComponent};
