import './polyfills.server.mjs';
import{a as ae}from"./chunk-XG6MSYUO.mjs";import{a as oe}from"./chunk-PJMBWO5O.mjs";import{a as re}from"./chunk-VMQIQJK7.mjs";import{a as R}from"./chunk-S4HJT3FM.mjs";import"./chunk-5OLX7UNI.mjs";import"./chunk-D4RJRHB5.mjs";import{a as X}from"./chunk-IJRDI6QA.mjs";import{a as V,b as ie}from"./chunk-P5M4VVBN.mjs";import{b as Z,c as $,f as ee,n as te}from"./chunk-ZDJMNRIQ.mjs";import{B as P,E as H,I as j,M as q,N as L,T as J,U as K,i as N,ma as Q,o as B,p as U,r as O}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import{c as I}from"./chunk-UR2QYS3H.mjs";import{a as Y}from"./chunk-BA7HZXNG.mjs";import{a as ne}from"./chunk-XWMWN5XG.mjs";import"./chunk-IIYCLNRC.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{e as W,f as A}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import"./chunk-YCIOFEEA.mjs";import{Ab as M,Eb as _,Kb as D,Pb as r,Qb as a,Rb as f,Ub as E,Vb as y,Yb as u,_b as l,ga as x,gc as T,hc as c,ib as o,ic as h,ka as z,nc as w,oc as b,pc as S,rc as G,va as p,wa as d,xa as C,xc as F,ya as v,yb as g,zb as k}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";var le=()=>[L,import("./chunk-GPMY24AR.mjs").then(n=>n.NgTemplateOutlet),N,A,K,J,Q,I],se=()=>[import("./chunk-GPMY24AR.mjs").then(n=>n.NgTemplateOutlet)];function me(n,s){if(n&1){let i=y();r(0,"c-nav-item",4)(1,"button",12),u("click",function(){p(i);let e=l(2);return d(e.retour())}),c(2,"Return"),a()()}if(n&2){let i=l(2);o(),_("routerLink",i.returnUrl)}}function ce(n,s){n&1&&f(0,"c-spinner",9)}function pe(n,s){n&1&&(C(),f(0,"svg",10))}function de(n,s){n&1&&E(0)}function _e(n,s){n&1&&E(0)}function ue(n,s){if(n&1){let i=y();r(0,"c-row",2)(1,"c-nav",3),g(2,me,3,1,"c-nav-item",4),r(3,"c-nav-item",5)(4,"button",6),u("click",function(){p(i);let e=l();return d(e.cancel())}),c(5," Annuler "),a()(),r(6,"c-nav-item",4)(7,"button",7),u("click",function(){p(i);let e=l();return d(e.reset())}),c(8,"R\xE9inisialiser"),a()(),r(9,"c-nav-item",4)(10,"button",8),u("click",function(){p(i);let e=l();return d(e.create())}),g(11,ce,1,0,"c-spinner",9)(12,pe,1,0,":svg:svg",10),c(13," Cr\xE9er "),a()()()(),g(14,de,1,0,"ng-container",11)(15,_e,1,0,"ng-container",11)}if(n&2){let i=l(),t=T(7),e=T(9);o(2),D(i.toReturn?2:-1),o(9),D(i.sending?11:12),o(3),_("ngTemplateOutlet",t),o(),_("ngTemplateOutlet",e)}}function fe(n,s){n&1&&E(0)}function ge(n,s){if(n&1&&g(0,fe,1,0,"ng-container",11),n&2){l();let i=T(7);_("ngTemplateOutlet",i)}}function Ce(n,s){if(n&1){let i=y();r(0,"c-card",2)(1,"c-card-header")(2,"strong",13),c(3,'Veuillez remplir les informations ci-dessous pour cr\xE9er une nouvelle "Entreprise"'),a()(),r(4,"c-card-body")(5,"c-row",14)(6,"c-col",15),C(),f(7,"svg",16),v(),r(8,"label",17),c(9,"Nom"),a(),r(10,"input",18),S("ngModelChange",function(e){p(i);let m=l();return b(m.item.nom,e)||(m.item.nom=e),d(e)}),u("blur",function(){p(i);let e=l();return d(e.validator.nom.validate())}),a(),r(11,"c-form-feedback",19),c(12),a()(),r(13,"c-col",15),C(),f(14,"svg",20),v(),r(15,"label",21),c(16,"Email"),a(),r(17,"input",22),S("ngModelChange",function(e){p(i);let m=l();return b(m.item.email,e)||(m.item.email=e),d(e)}),u("blur",function(){p(i);let e=l();return d(e.validator.email.validate())}),a(),r(18,"c-form-feedback",19),c(19),a()(),r(20,"c-col",15),C(),f(21,"svg",23),v(),r(22,"label",24),c(23,"T\xE9l\xE9phone"),a(),r(24,"input",25),S("ngModelChange",function(e){p(i);let m=l();return b(m.item.telephone,e)||(m.item.telephone=e),d(e)}),u("blur",function(){p(i);let e=l();return d(e.validator.telephone.validate())}),a(),r(25,"c-form-feedback",19),c(26),a()(),r(27,"c-col",15),C(),f(28,"svg",26),v(),r(29,"label",27),c(30,"Site web"),a(),r(31,"input",28),S("ngModelChange",function(e){p(i);let m=l();return b(m.item.siteweb,e)||(m.item.siteweb=e),d(e)}),u("blur",function(){p(i);let e=l();return d(e.validator.siteweb.validate())}),a(),r(32,"c-form-feedback",19),c(33),a()(),r(34,"c-col",15),C(),f(35,"svg",29),v(),r(36,"label",30),c(37,"Logo"),a(),r(38,"input",31),u("change",function(e){p(i);let m=l();return d(m.onFileSelected(e))}),a()()()()()}if(n&2){let i=l();o(10),w("ngModel",i.item.nom),_("valid",i.validator.nom.valid),o(),_("valid",!1),o(),h(i.validator.nom.message),o(5),w("ngModel",i.item.email),_("valid",i.validator.email.valid),o(),_("valid",!1),o(),h(i.validator.email.message),o(5),w("ngModel",i.item.telephone),_("valid",i.validator.telephone.valid),o(),_("valid",!1),o(),h(i.validator.telephone.message),o(5),w("ngModel",i.item.siteweb),_("valid",i.validator.siteweb.valid),o(),_("valid",!1),o(),h(i.validator.siteweb.message)}}function xe(n,s){if(n&1&&(r(0,"c-card",2)(1,"c-card-body"),f(2,"app-adresse-create",32),a()()),n&2){let i=l();o(2),_("getter",i.adresseGetter)("setter",i.adresseSetter)("validator",i.validator.adresse)}}var Pe=(()=>{let s=class s{constructor(){this.sending=!1,this.standAlon=!0,this.toasterService=x(X),this.router=x(W),this.service=x(ie),this.validator=ae.init(()=>this.item).setAdresse(re.init(()=>this.adresse)),this.userInfosService=x(ne),this.appUserService=x(Y),this.adresseGetter=()=>this.adresse,this.adresseSetter=t=>this.adresse=t}set setItemGetter(t){this.itemGetter=t,this.standAlon=!1}set setItemSetter(t){this.itemSetter=t}set setValidator(t){this.validator=t}ngOnInit(){this.service.keepData||this.reset(!1),this.service.keepData=!1,this.item.adresse=new R,this.getAdminByUsername(this.userInfosService.getUsername())}getAdminByUsername(t){this.appUserService.findByUsernameWithRoles(t).subscribe(e=>{console.log(e),this.admin=e},e=>{console.log(e)})}onFileSelected(t){this.selectedFile=t.target.files[0]}create(){if(console.log(this.item),this.item.idAdmin=this.admin.id,!this.validator.validate()){console.log(this.validator);return}this.sending=!0;let t=new FormData;t.append("file",this.selectedFile),this.service.create(t).subscribe({next:e=>{this.sending=!1,e!=null&&(this.item=e,this.item=new V,this.router.navigate(["/parametres/entreprise"]).then(),this.toasterService.toast({message:"Une nouvelle entreprise a \xE9t\xE9 ajout\xE9",color:"success"}))},error:e=>{this.sending=!1,console.log(e),this.validator.import(e.error)}})}reset(t=!0){(t||this.item==null)&&(this.item=new V),this.validator.reset()}get items(){return this.service.items}set items(t){this.service.items=t}get item(){return this.itemGetter()}set item(t){this.itemSetter(t)}itemGetter(){return this.service.item}itemSetter(t){this.service.item=t}get adresse(){return this.item.adresse==null&&(this.item.adresse=new R),this.item.adresse}set adresse(t){this.item.adresse=t}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}cancel(){this.item=new V}retour(){this.router.navigate(["/pays/pays/list"]).then()}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=z({type:s,selectors:[["app-entreprise-create"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[G],decls:10,vars:2,consts:[["createFrom",""],["createSubEntities",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/parametres/entreprise",3,"click"],["cButton","","color","dark",3,"click"],["cButton","","color","primary",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilPlus"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"click","routerLink"],[1,"responsive-header",2,"color","#1d0528","font-family","'Times New Roman'","font-size","21px","margin-left","300px"],[1,"g-3"],["sm","4"],["cIcon","","name","cil-barcode",2,"color","blue","font-size","30px"],["cLabel","","for","nom",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","nom","type","text","name","nom",3,"ngModelChange","blur","ngModel","valid"],[3,"valid"],["cIcon","","name","cil-envelope-closed",2,"color","blue","font-size","30px"],["cLabel","","for","email",2,"color","black","font-family","'Times New Roman'","font-size","19px","font-weight","bold"],["cFormControl","","id","email","type","text","name","email",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-phone",2,"color","blue","font-size","30px"],["cLabel","","for","telephone",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","telephone","type","text","name","telephone",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cib-openstreetmap",2,"color","blue","font-size","30px"],["cLabel","","for","siteweb",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","siteweb","type","text","name","siteweb",3,"ngModelChange","blur","ngModel","valid"],["cIcon","","name","cil-satelite",2,"color","blue","font-size","30px"],["cLabel","","for","file",1,"form-label",2,"color","black","font-family","'Times New Roman',serif","font-size","18px","font-weight","bold"],["type","file","id","file",1,"form-control",3,"change"],[3,"getter","setter","validator"]],template:function(e,m){e&1&&(g(0,ue,16,4),k(1,0,le),g(3,ge,1,1),k(4,3,se),g(6,Ce,39,16,"ng-template",null,0,F)(8,xe,3,3,"ng-template",null,1,F)),e&2&&(o(),M(m.standAlon),o(3),M(!m.standAlon))},dependencies:[L,q,j,te,Z,$,ee,H,B,U,O,I,P,oe],styles:['@charset "UTF-8";.responsive-header[_ngcontent-%COMP%]{font-family:Times New Roman;font-size:21px;margin-left:300px}@media (max-width: 1024px){.responsive-header[_ngcontent-%COMP%]{font-size:18px;margin-left:100px}}@media (max-width: 768px){.responsive-header[_ngcontent-%COMP%]{font-size:16px;margin-left:50px;text-align:center}}@media (max-width: 480px){.responsive-header[_ngcontent-%COMP%]{font-size:14px;margin-left:20px;text-align:center}}']});let n=s;return n})();export{Pe as EntrepriseCreateComponent};
