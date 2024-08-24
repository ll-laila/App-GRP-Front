import{a as ae}from"./chunk-AHUUM4CZ.js";import{a as oe,b as re}from"./chunk-JOZTQQGW.js";import{a as se,b as le}from"./chunk-C3MUFMYW.js";import{b as Y,c as Z,f as $,i as ee,j as te,k as ie,n as ne}from"./chunk-RMR25O2K.js";import{$ as Q,J as O,K as H,L as j,P as q,T as J,U as F,_ as K,p as D,ta as X,v as z,w as R}from"./chunk-ETPUSV7N.js";import{c as k}from"./chunk-DKLNZNMU.js";import{d as B,e as N}from"./chunk-EVAI7AMW.js";import{Cb as S,Ib as T,Kb as I,Lb as L,Mb as P,Nb as o,Ob as s,Pb as m,Sb as A,Tb as M,Wb as x,Yb as c,ec as V,fc as _,ga as v,gb as l,gc as W,ka as U,lc as C,mc as h,nc as y,pc as E,va as d,vc as G,wa as p,wb as f,xa as u,xb as w,ya as g,yb as b}from"./chunk-BXK32XEB.js";var ce=()=>[F,import("./chunk-K4L4KWTC.js").then(i=>i.NgTemplateOutlet),D,N,Q,K,X,k],me=()=>[import("./chunk-K4L4KWTC.js").then(i=>i.NgTemplateOutlet)];function de(i,r){i&1&&m(0,"c-spinner",7)}function pe(i,r){i&1&&(u(),m(0,"svg",8))}function _e(i,r){i&1&&m(0,"c-spinner",7)}function ue(i,r){i&1&&(u(),m(0,"svg",10))}function fe(i,r){i&1&&A(0)}function ge(i,r){if(i&1){let n=M();o(0,"c-row",1)(1,"c-nav",2)(2,"c-nav-item",3)(3,"button",4),x("click",function(){d(n);let t=c();return p(t.cancel())}),_(4,"Cancel"),s()(),o(5,"c-nav-item",5)(6,"button",6),x("click",function(){d(n);let t=c();return p(t.reset())}),f(7,de,1,0,"c-spinner",7)(8,pe,1,0,":svg:svg",8),_(9," Reset "),s()(),o(10,"c-nav-item",5)(11,"button",9),x("click",function(){d(n);let t=c();return p(t.update())}),f(12,_e,1,0,"c-spinner",7)(13,ue,1,0,":svg:svg",10),_(14," Update "),s()()()(),f(15,fe,1,0,"ng-container",11)}if(i&2){let n=c(),e=V(7);l(7),T(n.resetting?7:8),l(5),T(n.sending?12:13),l(3),S("ngTemplateOutlet",e)}}function Ce(i,r){i&1&&A(0)}function he(i,r){if(i&1&&f(0,Ce,1,0,"ng-container",11),i&2){c();let n=V(7);S("ngTemplateOutlet",n)}}function ye(i,r){if(i&1&&(o(0,"option",28),_(1),s()),i&2){let n=r.$implicit;S("value",n.id),l(),W(n.name)}}function xe(i,r){if(i&1){let n=M();o(0,"c-card",1)(1,"c-card-body")(2,"c-row",12)(3,"c-col",13),u(),m(4,"svg",14),g(),o(5,"label",15),_(6,"Adresse 1"),s(),o(7,"input",16),y("ngModelChange",function(t){d(n);let a=c();return h(a.item.address1,t)||(a.item.address1=t),p(t)}),s()(),o(8,"c-col",13),u(),m(9,"svg",14),g(),o(10,"label",17),_(11,"Adresse 2"),s(),o(12,"input",18),y("ngModelChange",function(t){d(n);let a=c();return h(a.item.address2,t)||(a.item.address2=t),p(t)}),s()(),o(13,"c-col",13),u(),m(14,"svg",19),g(),o(15,"label",20),_(16,"Code postal"),s(),o(17,"input",21),y("ngModelChange",function(t){d(n);let a=c();return h(a.item.postalCode,t)||(a.item.postalCode=t),p(t)}),s()(),o(18,"c-col",13),u(),m(19,"svg",22),g(),o(20,"label",23),_(21,"Ville"),s(),o(22,"input",24),y("ngModelChange",function(t){d(n);let a=c();return h(a.item.city,t)||(a.item.city=t),p(t)}),s()(),o(23,"c-col",13),u(),m(24,"svg",25),g(),o(25,"label",26),_(26,"Pays"),s(),o(27,"c-input-group")(28,"select",27),y("ngModelChange",function(t){d(n);let a=c();return h(a.pays.id,t)||(a.pays.id=t),p(t)}),L(29,ye,2,2,"option",28,I),s(),o(31,"button",29),x("click",function(){d(n);let t=c();return p(t.navigateToPaysCreate())}),u(),m(32,"svg",30),s()()()()()()}if(i&2){let n=c();l(7),C("ngModel",n.item.address1),l(5),C("ngModel",n.item.address2),l(5),C("ngModel",n.item.postalCode),l(5),C("ngModel",n.item.city),l(6),C("ngModel",n.pays.id),l(),P(n.paysList)}}var ze=(()=>{let r=class r{constructor(){this.isPartOfUpdateForm=!1,this.sending=!1,this.resetting=!1,this.standAlon=!0,this.router=v(B),this.service=v(re),this.paysService=v(le),this.validator=ae.init(()=>this.item)}set setItemGetter(e){this.itemGetter=e,this.standAlon=!1}set setItemSetter(e){this.itemSetter=e}set setValidator(e){this.validator=e}ngAfterContentInit(){!this.isPartOfUpdateForm&&this.item.id==null&&this.router.navigate(["/adresse/adresse"]).then()}ngOnInit(){if(this.service.keepData){let e=this.paysService.createdItemAfterReturn;e.created&&(this.item.pays=e.item)}else this.validator.reset();this.loadPaysList()}loadPaysList(){this.paysService.findAllOptimized().subscribe({next:e=>this.paysList=e,error:e=>console.log(e)})}update(){console.log(this.item),this.validator.validate()&&(this.sending=!0,this.service.update().subscribe({next:e=>{this.sending=!1,e!=null&&this.router.navigate(["/adresse/adresse"]).then()},error:e=>{this.sending=!1,console.log(e)}}))}reset(){this.resetting=!0,this.service.findById(this.item.id).subscribe({next:e=>{this.item=e,this.validator.reset(),this.resetting=!1},error:e=>{console.log(e),this.resetting=!1}})}get items(){return this.service.items}set items(e){this.service.items=e}get item(){return this.itemGetter()}set item(e){this.itemSetter(e)}itemGetter(){return this.service.item}itemSetter(e){this.service.item=e}get pays(){return this.item.pays==null&&(this.item.pays=new se),this.item.pays}set pays(e){this.item.pays=e}navigateToPaysCreate(){this.paysService.returnUrl=this.router.url,this.router.navigate(["/adresse/pays/create"]).then()}cancel(){this.item=new oe}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=U({type:r,selectors:[["app-adresse-update"]],inputs:{setItemGetter:[0,"getter","setItemGetter"],setItemSetter:[0,"setter","setItemSetter"],setValidator:[0,"validator","setValidator"]},standalone:!0,features:[E],decls:8,vars:2,consts:[["createFrom",""],[1,"mb-3"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","secondary","variant","outline","routerLink","/adresse/adresse",3,"click"],[1,"p-2"],["cButton","","color","dark",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","color","primary",3,"click"],["cIcon","","name","cilPen"],[4,"ngTemplateOutlet"],[1,"g-3"],["sm","4"],["cIcon","","name","cib-zingat",2,"color","blue","font-size","30px"],["cLabel","","for","address1",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","address1","type","text","placeholder","Address1","name","address1",3,"ngModelChange","ngModel"],["cLabel","","for","address2",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","address2","type","text","placeholder","Address2","name","address2",3,"ngModelChange","ngModel"],["cIcon","","name","cil-envelope-letter",2,"color","blue","font-size","30px"],["cLabel","","for","postalCode",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","postalCode","type","text","placeholder","PostalCode","name","postalCode",3,"ngModelChange","ngModel"],["cIcon","","name","cib-periscope",2,"color","blue","font-size","30px"],["cLabel","","for","city",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cFormControl","","id","city","type","text","placeholder","City","name","city",3,"ngModelChange","ngModel"],["cIcon","","name","cil-globe-alt",2,"color","blue","font-size","30px"],["cLabel","","for","pays",2,"color","black","font-family","'Times New Roman'","font-size","18px","font-weight","bold"],["cSelect","","id","pays","name","pays",3,"ngModelChange","ngModel"],[3,"value"],["cButton","","color","secondary","type","button","variant","outline",3,"click"],["cIcon","","name","cilPlus"]],template:function(t,a){t&1&&(f(0,ge,16,3),w(1,0,ce),f(3,he,1,1),w(4,3,me),f(6,xe,33,5,"ng-template",null,0,G)),t&2&&(l(),b(a.standAlon),l(3),b(!a.standAlon))},dependencies:[H,F,J,q,ne,te,ie,Y,ee,Z,$,j,z,R,O,D,k]});let i=r;return i})();export{ze as a};
