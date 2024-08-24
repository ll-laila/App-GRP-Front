import './polyfills.server.mjs';
import{a as ae}from"./chunk-VMQIQJK7.mjs";import{a as b,b as oe}from"./chunk-S4HJT3FM.mjs";import{a as se,b as le}from"./chunk-5OLX7UNI.mjs";import{b as Z,c as $,f as ee,i as te,j as ie,k as ne,n as re}from"./chunk-ZDJMNRIQ.mjs";import{C as U,D as j,E as q,I as J,M as K,N as F,T as Q,U as X,i as L,ma as Y,o as O,p as H}from"./chunk-NVRXDY5V.mjs";import{c as D}from"./chunk-UR2QYS3H.mjs";import{e as P,f as z}from"./chunk-GFB74FXC.mjs";import{Ab as V,Eb as v,Kb as A,Mb as E,Nb as W,Ob as R,Pb as r,Qb as a,Rb as _,Ub as M,Vb as S,Yb as g,_b as l,ga as w,gc as k,hc as d,ib as c,ic as G,ka as I,nc as h,oc as y,pc as x,rc as B,va as m,wa as p,xa as u,xc as N,ya as f,yb as C,zb as T}from"./chunk-VWPO2VC4.mjs";var ce=()=>[F,import("./chunk-GPMY24AR.mjs").then(i=>i.NgTemplateOutlet),L,z,X,Q,Y,D],me=()=>[import("./chunk-GPMY24AR.mjs").then(i=>i.NgTemplateOutlet)];function pe(i,s){if(i&1){let n=S();r(0,"c-nav-item",3)(1,"button",11),g("click",function(){m(n);let t=l(2);return p(t.retour())}),d(2,"Return"),a()()}if(i&2){let n=l(2);c(),v("routerLink",n.returnUrl)}}function de(i,s){i&1&&_(0,"c-spinner",8)}function _e(i,s){i&1&&(u(),_(0,"svg",9))}function ue(i,s){i&1&&M(0)}function Ce(i,s){if(i&1){let n=S();r(0,"c-row",1)(1,"c-nav",2),C(2,pe,3,1,"c-nav-item",3),r(3,"c-nav-item",4)(4,"button",5),g("click",function(){m(n);let t=l();return p(t.cancel())}),d(5,"Annuler"),a()(),r(6,"c-nav-item",3)(7,"button",6),g("click",function(){m(n);let t=l();return p(t.reset())}),d(8,"R\xE9initialiser"),a()(),r(9,"c-nav-item",3)(10,"button",7),g("click",function(){m(n);let t=l();return p(t.create())}),C(11,de,1,0,"c-spinner",8)(12,_e,1,0,":svg:svg",9),d(13," Cr\xE9er "),a()()()(),C(14,ue,1,0,"ng-container",10)}if(i&2){let n=l(),e=k(7);c(2),A(n.toReturn?2:-1),c(9),A(n.sending?11:12),c(3),v("ngTemplateOutlet",e)}}function fe(i,s){i&1&&M(0)}function ge(i,s){if(i&1&&C(0,fe,1,0,"ng-container",10),i&2){l();let n=k(7);v("ngTemplateOutlet",n)}}function he(i,s){if(i&1&&(r(0,"option",28),d(1),a()),i&2){let n=s.$implicit;v("value",n.id),c(),G(n.name)}}function ye(i,s){if(i&1){let n=S();r(0,"c-card",1)(1,"c-card-body")(2,"c-row",12)(3,"c-col",13),u(),_(4,"svg",14),f(),r(5,"label",15),d(6,"Adresse 1"),a(),r(7,"input",16),x("ngModelChange",function(t){m(n);let o=l();return y(o.item.address1,t)||(o.item.address1=t),p(t)}),a()(),r(8,"c-col",13),u(),_(9,"svg",14),f(),r(10,"label",17),d(11,"Adresse 2"),a(),r(12,"input",18),x("ngModelChange",function(t){m(n);let o=l();return y(o.item.address2,t)||(o.item.address2=t),p(t)}),a()(),r(13,"c-col",13),u(),_(14,"svg",19),f(),r(15,"label",20),d(16,"Code postal"),a(),r(17,"input",21),x("ngModelChange",function(t){m(n);let o=l();return y(o.item.postalCode,t)||(o.item.postalCode=t),p(t)}),a()(),r(18,"c-col",13),u(),_(19,"svg",22),f(),r(20,"label",23),d(21,"Ville"),a(),r(22,"input",24),x("ngModelChange",function(t){m(n);let o=l();return y(o.item.city,t)||(o.item.city=t),p(t)}),a()(),r(23,"c-col",13),u(),_(24,"svg",25),f(),r(25,"label",26),d(26,"Pays"),a(),r(27,"c-input-group")(28,"select",27),x("ngModelChange",function(t){m(n);let o=l();return y(o.pays.id,t)||(o.pays.id=t),p(t)}),W(29,he,2,2,"option",28,E),a(),r(31,"button",29),g("click",function(){m(n);let t=l();return p(t.navigateToPaysCreate())}),u(),_(32,"svg",9),a()()()()()()}if(i&2){let n=l();c(7),h("ngModel",n.item.address1),c(5),h("ngModel",n.item.address2),c(5),h("ngModel",n.item.postalCode),c(5),h("ngModel",n.item.city),c(6),h("ngModel",n.pays.id),c(),R(n.paysList)}}var Pe=(()=>{let s=class s{constructor(){this.sending=!1,this.standAlon=!0,this.router=w(P),this.service=w(oe),this.paysService=w(le),this.validator=ae.init(()=>this.item)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngOnInit(){if(this.service.keepData){let e=this.paysService.createdItemAfterReturn;e.created&&(this.item.pays=e.item)}else this.reset(!1);this.service.keepData=!1,this.loadPaysList()}loadPaysList(){this.paysService.findAllOptimized().subscribe({next:e=>this.paysList=e,error:e=>console.log(e)})}create(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.create().subscribe({next:e=>{if(this.sending=!1,e!=null){if(this.toReturn){this.item=e,this.router.navigate([this.returnUrl]).then();return}this.item=new b,this.router.navigate(["/adresse/adresse"]).then()}},error:e=>{this.sending=!1,console.log(e),this.validator.import(e.error)}}))}reset(e=!0){(e||this.item==null)&&(this.item=new b),this.validator.reset()}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get pays(){return this.item.pays==null&&(this.item.pays=new se),this.item.pays}set pays(e){this.item.pays=e}get returnUrl(){return this.service.returnUrl}get toReturn(){return this.service.toReturn()}navigateToPaysCreate(){this.paysService.returnUrl=this.router.url,this.service.keepData=!0,this.router.navigate(["/adresse/pays/create"]).then()}cancel(){this.item=new b}retour(){this.router.navigate(["/adresse/pays/list"]).then()}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=I({type:s,selectors:[["app-adresse-create"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[B],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/adresse/adresse",3,"click"],["cButton","","color","dark",3,"click"],["cButton","","color","primary",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilPlus"],[4,"ngTemplateOutlet"],["cButton","","color","secondary",3,"click","routerLink"],[1,"g-3"],["sm","4"],["cIcon","","name","cib-zingat",2,"color","blue","font-size","30px"],["cLabel","","for","address1",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","address1","type","text","name","address1",3,"ngModelChange","ngModel"],["cLabel","","for","address2",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","address2","type","text","name","address2",3,"ngModelChange","ngModel"],["cIcon","","name","cil-envelope-letter",2,"color","blue","font-size","30px"],["cLabel","","for","postalCode",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","postalCode","type","text","name","postalCode",3,"ngModelChange","ngModel"],["cIcon","","name","cib-periscope",2,"color","blue","font-size","30px"],["cLabel","","for","city",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","city","type","text","name","city",3,"ngModelChange","ngModel"],["cIcon","","name","cil-globe-alt",2,"color","blue","font-size","30px"],["cLabel","","for","pays",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","pays","name","pays",3,"ngModelChange","ngModel"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"]],template:function(t,o){t&1&&(C(0,Ce,15,3),T(1,0,ce),C(3,ge,1,1),T(4,3,me),C(6,ye,33,5,"ng-template",null,0,N)),t&2&&(c(),V(o.standAlon),c(3),V(!o.standAlon))},dependencies:[j,F,K,J,re,ie,ne,Z,te,$,ee,q,O,H,U,L,D]});let i=s;return i})();export{Pe as a};
