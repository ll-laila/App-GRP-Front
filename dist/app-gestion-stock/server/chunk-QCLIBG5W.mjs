import './polyfills.server.mjs';
import{a as ce,b as se}from"./chunk-S4HJT3FM.mjs";import{$ as ee,L as H,M as O,N as q,T as J,U as K,V as Q,W as U,X as W,Y as X,Z as Y,_ as Z,aa as te,ba as ie,ca as ne,i as M,j as z,ma as oe,na as ae,o as F,p as N,v as $,w as R,x as j,y as G}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import{c as B}from"./chunk-UR2QYS3H.mjs";import{b as re,c as le}from"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{f as V}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import"./chunk-YCIOFEEA.mjs";import{Eb as x,Kb as v,Mb as S,Nb as w,Ob as y,Pb as t,Qb as i,Rb as u,Vb as f,Yb as m,_b as d,ga as A,hc as a,ib as r,ic as p,jc as E,ka as I,kc as L,rc as P,va as _,wa as g,xa as b,ya as D,yb as C}from"./chunk-VWPO2VC4.mjs";import{l as T}from"./chunk-XAJIYFV3.mjs";function de(n,c){n&1&&u(0,"c-spinner",15)}function me(n,c){n&1&&(b(),u(0,"svg",16))}function pe(n,c){if(n&1){let e=f();t(0,"button",14),m("click",function(){_(e);let o=d();return g(o.paginate())}),C(1,de,1,0,"c-spinner",15)(2,me,1,0,":svg:svg",16),a(3," ReFresh "),i()}if(n&2){let e=d();r(),v(e.paginating?1:2)}}function _e(n,c){n&1&&(t(0,"p",4),u(1,"button",17),i())}function ge(n,c){n&1&&(t(0,"button",6),a(1,"Add New"),i())}function ue(n,c){n&1&&(t(0,"p",4),u(1,"button",18),i())}function Ce(n,c){n&1&&(t(0,"p",4),u(1,"span",19)(2,"span",19)(3,"span",19)(4,"span",19)(5,"span",19)(6,"span",19)(7,"span",19),i())}function xe(n,c){if(n&1){let e=f();t(0,"tr")(1,"td"),a(2),i(),t(3,"td"),a(4),i(),t(5,"td"),a(6),i(),t(7,"td"),a(8),i(),t(9,"td"),a(10),i(),t(11,"td"),a(12),i(),t(13,"td",30)(14,"button",31),m("click",function(){let o=_(e).$implicit,s=d(2);return g(s.item=o)}),b(),u(15,"svg",32),i(),D(),t(16,"button",33),m("click",function(){let o=_(e),s=o.$implicit,h=o.$index,k=d(2);return k.item=s,k.currentIndex=h,g(k.deleteModel=!0)}),b(),u(17,"svg",34),i()()()}if(n&2){let e=c.$implicit;r(2),p(e.id),r(2),p(e.address1),r(2),p(e.address2),r(2),p(e.postalCode),r(2),p(e.city),r(2),p(e.pays!=null?e.pays.name:"null")}}function ve(n,c){if(n&1){let e=f();t(0,"li")(1,"a",35),m("click",function(){let o=_(e).$implicit,s=d(2);return g(s.paginate(0,o))}),a(2),i()()}if(n&2){let e=c.$implicit;r(2),p(e)}}function fe(n,c){if(n&1){let e=f();t(0,"li",39),m("click",function(){let o=_(e).$implicit,s=d(3);return g(o===s.pagination.page+1||s.paginate(o-1))}),t(1,"a",37),a(2),i()()}if(n&2){let e=c.$implicit,l=d(3);x("disabled",l.paginating)("active",e===l.pagination.page+1),r(2),p(e)}}function he(n,c){if(n&1){let e=f();t(0,"c-pagination",29)(1,"li",36),m("click",function(){_(e);let o=d(2);return g(o.loading||o.pagination.first||o.paginate(o.pagination.page-1))}),t(2,"a",37),a(3,"Previous"),i()(),w(4,fe,3,3,"li",38,S),t(6,"li",36),m("click",function(){_(e);let o=d(2);return g(o.loading||o.pagination.last||o.paginate(o.pagination.page+1))}),t(7,"a",37),a(8,"Next"),i()()()}if(n&2){let e=d(2);r(),x("disabled",e.paginating||e.pagination.first),r(3),y(e.generatePageNumbers),r(2),x("disabled",e.paginating||e.pagination.last)}}function be(n,c){if(n&1&&(t(0,"c-card",8)(1,"c-card-body")(2,"table",20)(3,"thead",21)(4,"tr")(5,"th",22),a(6,"No."),i(),t(7,"th",22),a(8,"Address1"),i(),t(9,"th",22),a(10,"Address2"),i(),t(11,"th",22),a(12,"Postal Code"),i(),t(13,"th",22),a(14,"City"),i(),t(15,"th",22),a(16," Pays"),i(),t(17,"th",23),a(18,"Actions"),i()()(),t(19,"tbody"),w(20,xe,18,6,"tr",null,S),i()(),t(22,"div",24)(23,"button",25),a(24),i(),t(25,"c-dropdown",26)(26,"button",27),a(27),i(),t(28,"ul",28),w(29,ve,3,1,"li",null,S),i()(),C(31,he,9,2,"c-pagination",29),i()()()),n&2){let e=d();r(2),x("hover",!0)("responsive",!0)("striped",!0),r(18),y(e.pagination.data),r(4),L(" ",e.pagination.data.length," / ",e.pagination.totalElements," "),r(3),E(" ",e.pagination.size," "),r(2),y(e.paginationSizes),r(2),v(e.pagination.totalPages>1&&e.pagination.data.length>0?31:-1)}}var Me=(()=>{let c=class c{constructor(){this.loading=!1,this.paginating=!1,this.currentIndex=0,this.deleteModel=!1,this.service=A(se),this.paginationSizes=re}ngOnInit(){this.findAll()}findAll(){this.loading=!0,this.paginate().then(()=>this.loading=!1)}paginate(){return T(this,arguments,function*(l=this.pagination.page,o=this.pagination.size){this.paginating=!0,this.service.findPaginated(l,o).subscribe({next:s=>{this.pagination=s,this.paginating=!1},error:s=>{console.log(s),this.paginating=!1}})})}delete(){this.service.deleteById(this.item.id).subscribe({next:l=>{this.pagination.data.splice(this.currentIndex,1),this.pagination.totalElements--,this.item=new ce,this.currentIndex=-1,this.deleteModel=!1},error:l=>{console.log(l)}})}get items(){return this.service.items}set items(l){this.service.items=l}get pagination(){return this.service.pagination}set pagination(l){this.service.pagination=l}get item(){return this.service.item}set item(l){this.service.item=l}get generatePageNumbers(){return le(this.pagination)}};c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=I({type:c,selectors:[["app-adresse-list"]],standalone:!0,features:[P],decls:24,vars:5,consts:[[1,"mb-2"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","info"],["cPlaceholderAnimation","glow"],[1,"p-2"],["cButton","","color","primary","routerLink","create"],["xs",""],[1,"mb-4"],["alignment","center","backdrop","static",3,"visible"],["cModalTitle",""],["cButtonClose","",3,"click"],["cButton","","color","secondary","variant","ghost",3,"click"],["cButton","","color","danger",3,"click"],["cButton","","color","info",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","cCol","7","cPlaceholder","","color","info","disabled","",2,"width","100px"],["cButton","","cCol","7","cPlaceholder","","color","primary","disabled","",2,"width","100px"],["cCol","12","size","lg","cPlaceholder",""],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],[1,"text-nowrap","text-truncate"],[1,"bg-body-tertiary"],[1,"bg-body-tertiary",2,"display","flex","justify-content","end"],[1,"mt-2","hstack","gap"],["cButton","","disabled","","color","secondary","variant","outline",2,"width","fit-content"],[1,"p-2","ms-auto",2,"width","fit-content"],["cButton","","cDropdownToggle","","color","secondary","variant","outline"],["cDropdownMenu",""],["align","end",1,"p-2",2,"width","fit-content"],[2,"display","flex","justify-content","end"],["cButton","","color","","routerLink","update",3,"click"],["cIcon","","name","cil-pen","size","lg"],["cButton","","color","",3,"click"],["cIcon","","name","cil-trash","size","lg"],["cDropdownItem","",3,"click"],["cPageItem","",3,"click","disabled"],["cPageLink",""],["cPageItem","",3,"disabled","active"],["cPageItem","",3,"click","disabled","active"]],template:function(o,s){o&1&&(t(0,"c-row",0)(1,"c-nav",1)(2,"c-nav-item",2),C(3,pe,4,1,"button",3)(4,_e,2,0,"p",4),i(),t(5,"c-nav-item",5),C(6,ge,2,0,"button",6)(7,ue,2,0,"p",4),i()()(),t(8,"c-row")(9,"c-col",7),C(10,Ce,8,0,"p",4)(11,be,32,7,"c-card",8),i()(),t(12,"c-modal",9)(13,"c-modal-header")(14,"h5",10),a(15,"Delete Confirm"),i(),t(16,"button",11),m("click",function(){return s.deleteModel=!1}),i()(),t(17,"c-modal-body"),a(18),i(),t(19,"c-modal-footer")(20,"button",12),m("click",function(){return s.deleteModel=!1}),a(21,"Close"),i(),t(22,"button",13),m("click",function(){return s.delete()}),a(23,"Delete"),i()()()),o&2&&(r(3),v(s.loading?4:3),r(3),v(s.loading?7:6),r(4),v(s.loading?10:11),r(2),x("visible",s.deleteModel),r(6),E(" Are you sure you want to delete this item (No. ",s.item.id,")? "))},dependencies:[q,O,F,N,ae,M,V,B,K,J,oe,ne,ie,H,ee,Z,te,j,R,$,G,Y,W,Q,U,X,z]});let n=c;return n})();export{Me as AdresseListComponent};
