import{a as ce,b as se}from"./chunk-KQQNHP2G.js";import{$ as K,C as N,D as j,E as G,F as H,S as R,T as O,U as q,_ as J,aa as Q,ba as U,ca as W,da as X,ea as Y,fa as Z,ga as ee,ha as te,ia as ie,ja as ne,p as z,q as F,ta as oe,ua as ae,v as A,w as $}from"./chunk-EEWOCATZ.js";import{c as M}from"./chunk-4DTSML7Z.js";import{e as V}from"./chunk-7D4QPVHB.js";import{b as re,c as le}from"./chunk-2BQUVQN4.js";import"./chunk-RTZTBWEW.js";import"./chunk-3HUUSNPM.js";import"./chunk-H2QFYA5F.js";import{Cb as C,Ib as f,Kb as b,Lb as P,Mb as k,Nb as i,Ob as n,Pb as u,Tb as x,Wb as d,Yb as p,fb as c,fc as s,ga as T,gc as v,hc as D,ic as I,ka as E,pc as B,va as m,wa as _,wb as g,xa as h,ya as L}from"./chunk-4HLAVBW4.js";import{i as w}from"./chunk-RGL3W33T.js";function pe(t,r){t&1&&u(0,"c-spinner",16)}function de(t,r){t&1&&(h(),u(0,"svg",17))}function me(t,r){if(t&1){let e=x();i(0,"button",15),d("click",function(){m(e);let o=p();return _(o.paginate())}),g(1,pe,1,0,"c-spinner",16)(2,de,1,0,":svg:svg",17),s(3," Actualiser "),n()}if(t&2){let e=p();c(),f(e.paginating?1:2)}}function _e(t,r){t&1&&(i(0,"p",4),u(1,"button",18),n())}function ue(t,r){t&1&&(i(0,"button",6),s(1,"Ajouter un nouveau pays"),n())}function ge(t,r){t&1&&(i(0,"p",4),u(1,"button",19),n())}function Ce(t,r){t&1&&(i(0,"p",4),u(1,"span",20)(2,"span",20)(3,"span",20)(4,"span",20)(5,"span",20)(6,"span",20)(7,"span",20),n())}function fe(t,r){if(t&1){let e=x();i(0,"tr")(1,"td"),s(2),n(),i(3,"td"),s(4),n(),i(5,"td",31)(6,"button",32),d("click",function(){let o=m(e).$implicit,l=p(2);return _(l.item=o)}),h(),u(7,"svg",33),n(),L(),i(8,"button",34),d("click",function(){let o=m(e),l=o.$implicit,y=o.$index,S=p(2);return S.item=l,S.currentIndex=y,_(S.deleteModel=!0)}),h(),u(9,"svg",35),n()()()}if(t&2){let e=r.$implicit;c(2),v(e.id),c(2),v(e.name)}}function xe(t,r){if(t&1){let e=x();i(0,"li")(1,"a",36),d("click",function(){let o=m(e).$implicit,l=p(2);return _(l.paginate(0,o))}),s(2),n()()}if(t&2){let e=r.$implicit;c(2),v(e)}}function ve(t,r){if(t&1){let e=x();i(0,"li",40),d("click",function(){let o=m(e).$implicit,l=p(3);return _(o===l.pagination.page+1||l.paginate(o-1))}),i(1,"a",38),s(2),n()()}if(t&2){let e=r.$implicit,a=p(3);C("disabled",a.paginating)("active",e===a.pagination.page+1),c(2),v(e)}}function ye(t,r){if(t&1){let e=x();i(0,"c-pagination",30)(1,"li",37),d("click",function(){m(e);let o=p(2);return _(o.loading||o.pagination.first||o.paginate(o.pagination.page-1))}),i(2,"a",38),s(3,"Previous"),n()(),P(4,ve,3,3,"li",39,b),i(6,"li",37),d("click",function(){m(e);let o=p(2);return _(o.loading||o.pagination.last||o.paginate(o.pagination.page+1))}),i(7,"a",38),s(8,"Next"),n()()()}if(t&2){let e=p(2);c(),C("disabled",e.paginating||e.pagination.first),c(3),k(e.generatePageNumbers),c(2),C("disabled",e.paginating||e.pagination.last)}}function he(t,r){if(t&1&&(i(0,"c-card",8)(1,"c-card-body")(2,"table",21)(3,"thead",22)(4,"tr")(5,"th",23),s(6,"No"),n(),i(7,"th",23),s(8,"Nom "),n(),i(9,"th",24),s(10,"Actions"),n()()(),i(11,"tbody"),P(12,fe,10,2,"tr",null,b),n()(),i(14,"div",25)(15,"button",26),s(16),n(),i(17,"c-dropdown",27)(18,"button",28),s(19),n(),i(20,"ul",29),P(21,xe,3,1,"li",null,b),n()(),g(23,ye,9,2,"c-pagination",30),n()()()),t&2){let e=p();c(2),C("hover",!0)("responsive",!0)("striped",!0),c(10),k(e.pagination.data),c(4),I(" ",e.pagination.data.length," / ",e.pagination.totalElements," "),c(3),D(" ",e.pagination.size," "),c(2),k(e.paginationSizes),c(2),f(e.pagination.totalPages>1&&e.pagination.data.length>0?23:-1)}}var ze=(()=>{let r=class r{constructor(){this.loading=!1,this.paginating=!1,this.currentIndex=0,this.deleteModel=!1,this.service=T(se),this.paginationSizes=re}ngOnInit(){this.findAll()}findAll(){this.loading=!0,this.paginate().then(()=>this.loading=!1)}paginate(){return w(this,arguments,function*(a=this.pagination.page,o=this.pagination.size){this.paginating=!0,this.service.findPaginated(a,o).subscribe({next:l=>{this.pagination=l,this.paginating=!1},error:l=>{console.log(l),this.paginating=!1}})})}delete(){this.service.deleteById(this.item.id).subscribe({next:a=>{this.pagination.data.splice(this.currentIndex,1),this.pagination.totalElements--,this.item=new ce,this.currentIndex=-1,this.deleteModel=!1},error:a=>{console.log(a)}})}get items(){return this.service.items}set items(a){this.service.items=a}get pagination(){return this.service.pagination}set pagination(a){this.service.pagination=a}get item(){return this.service.item}set item(a){this.service.item=a}get generatePageNumbers(){return le(this.pagination)}};r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=E({type:r,selectors:[["app-pays-list"]],standalone:!0,features:[B],decls:24,vars:4,consts:[[1,"mb-2"],[1,"hstack","gap"],[1,"p-2","ms-auto"],["cButton","","color","info"],["cPlaceholderAnimation","glow"],[1,"p-2"],["cButton","","color","primary","routerLink","create"],["xs",""],[1,"mb-4"],["alignment","center","backdrop","static",3,"visible"],["cModalTitle","",2,"color","black","font-size","20px","font-family","'Arial Black'"],["cButtonClose","",3,"click"],[2,"color","#ef0a34","font-size","18px"],["cButton","","color","secondary","variant","ghost",2,"color","black",3,"click"],["cButton","","color","danger",3,"click"],["cButton","","color","info",3,"click"],["aria-hidden","true","size","sm"],["cIcon","","name","cilReload"],["cButton","","cCol","7","cPlaceholder","","color","info","disabled","",2,"width","100px"],["cButton","","cCol","7","cPlaceholder","","color","primary","disabled","",2,"width","100px"],["cCol","12","size","lg","cPlaceholder",""],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],[1,"text-nowrap","text-truncate"],[1,"bg-body-tertiary"],[1,"bg-body-tertiary",2,"display","flex","justify-content","end"],[1,"mt-2","hstack","gap"],["cButton","","disabled","","color","secondary","variant","outline",2,"width","fit-content"],[1,"p-2","ms-auto",2,"width","fit-content"],["cButton","","cDropdownToggle","","color","secondary","variant","outline"],["cDropdownMenu",""],["align","end",1,"p-2",2,"width","fit-content"],[2,"display","flex","justify-content","end"],["cButton","","color","","routerLink","update",3,"click"],["cIcon","","name","cil-pen","size","xl",2,"color","#61be04"],["cButton","","color","",3,"click"],["cIcon","","name","cil-trash","size","xl",2,"color","#ef0a34"],["cDropdownItem","",3,"click"],["cPageItem","",3,"click","disabled"],["cPageLink",""],["cPageItem","",3,"disabled","active"],["cPageItem","",3,"click","disabled","active"]],template:function(o,l){o&1&&(i(0,"c-row",0)(1,"c-nav",1)(2,"c-nav-item",2),g(3,me,4,1,"button",3)(4,_e,2,0,"p",4),n(),i(5,"c-nav-item",5),g(6,ue,2,0,"button",6)(7,ge,2,0,"p",4),n()()(),i(8,"c-row")(9,"c-col",7),g(10,Ce,8,0,"p",4)(11,he,24,7,"c-card",8),n()(),i(12,"c-modal",9)(13,"c-modal-header")(14,"h5",10),s(15,"Confirmation de suppression"),n(),i(16,"button",11),d("click",function(){return l.deleteModel=!1}),n()(),i(17,"c-modal-body",12),s(18," \xCAtes-vous s\xFBr de vouloir supprimer ce pay ? "),n(),i(19,"c-modal-footer")(20,"button",13),d("click",function(){return l.deleteModel=!1}),s(21,"Fermer"),n(),i(22,"button",14),d("click",function(){return l.delete()}),s(23,"Supprimer"),n()()()),o&2&&(c(3),f(l.loading?4:3),c(3),f(l.loading?7:6),c(4),f(l.loading?10:11),c(2),C("visible",l.deleteModel))},dependencies:[q,O,A,$,ae,z,V,M,K,J,oe,ne,ie,R,ee,Z,te,G,j,N,H,Y,W,Q,U,X,F]});let t=r;return t})();export{ze as PaysListComponent};
