import{a as w}from"./chunk-CBLK3ESW.js";import{a as O}from"./chunk-37VUKUGD.js";import{a as E}from"./chunk-VWWTJBTP.js";import{a as S}from"./chunk-WSA7JG33.js";import{d as M}from"./chunk-7D4QPVHB.js";import{Cb as u,Nb as n,Ob as e,Od as C,Pb as i,Wb as _,bb as f,fb as r,fc as t,ga as c,gc as b,ic as p,ka as v,pc as P,wb as x,xa as d,ya as g}from"./chunk-4HLAVBW4.js";function k(m,s){m&1&&(n(0,"div",29),d(),n(1,"svg",30),i(2,"use",31),e(),g(),n(3,"strong"),t(4,"Votre p\xE9riode d'essai est termin\xE9e !"),e(),t(5," vous devez souscrire \xE0 un de nos abonnements. "),i(6,"button",32),e())}function y(m,s){m&1&&(n(0,"div",29),d(),n(1,"svg",30),i(2,"use",31),e(),g(),n(3,"strong"),t(4,"Votre abonnement est termin\xE9e pour cet mois !"),e(),t(5," vous devez souscrire \xE0 un de nos abonnements. "),i(6,"button",32),e())}var F=(()=>{let s=class s{constructor(){this.subscriptionService=c(O),this.userInfosService=c(S),this.appUserService=c(E),this.planService=c(w),this.router=c(M),this.remade=0,this.msgRemade=!1,this.msgSub=!1}ngOnInit(){this.getDaysRemaining(this.userInfosService.getUsername()),this.getPlans()}getPlanFIRST(o){this.router.navigate(["/paiement"],{queryParams:{id:o}}).then()}getPlanPREMIUM(o){this.router.navigate(["/paiement"],{queryParams:{id:o}}).then()}getPlanELITE(o){this.router.navigate(["/paiement"],{queryParams:{id:o}}).then()}getPlans(){this.planService.findAllPlans().subscribe(o=>{this.plans=o,console.log("Plans : ",this.plans)},o=>{console.log(o)})}getDaysRemaining(o){this.appUserService.getDaysRemaining(o).subscribe(l=>{this.remade=l.daysRemaining,this.remade<=0&&!l.haveSub&&(this.msgRemade=!0),l.haveSub&&l.isSubEnd&&(this.msgSub=!0)},l=>{console.log(l)})}};s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=v({type:s,selectors:[["app-abonnements"]],standalone:!0,features:[P],decls:95,vars:17,consts:[["rel","stylesheet","href",f`https://cdn.lineicons.com/3.0/lineicons.css`],[1,"navbar","navbar-light","bg-light","shadow-lg","pb-3"],[1,"navbar-brand",2,"padding-left","30px"],[1,"fas","fa-cubes","fa-2x","me-3",2,"color","#ff6219"],[1,"h1","fw-bold","mb-0"],["xmlns","http://www.w3.org/2000/svg",2,"display","none"],["id","exclamation-triangle-fill","fill","currentColor","viewBox","0 0 16 16"],["d","M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"],["class","alert alert-warning alert-dismissible fade show","role","alert",4,"ngIf"],["id","pricing",1,"price_plan_area","section_padding_130_80","pt-4"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-sm-8","col-lg-6"],["data-wow-delay","0.2s",1,"section-heading","text-center","wow","fadeInUp",2,"visibility","visible","animation-delay","0.2s","animation-name","fadeInUp"],[1,"line"],[1,"col-12","col-sm-8","col-md-6","col-lg-4","c-Info"],["data-wow-delay","0.2s",1,"single_price_plan","back","wow","fadeInUp",2,"visibility","visible","animation-delay","0.2s","animation-name","fadeInUp"],[1,"title"],[1,"price"],[1,"description"],[1,"lni","lni-checkmark-circle"],[1,"lni","lni-close"],[1,"button"],[1,"btn","btn-success","btn-2",3,"click"],["data-wow-delay","0.2s",1,"single_price_plan","active","wow","fadeInUp",2,"visibility","visible","animation-delay","0.2s","animation-name","fadeInUp"],[1,"side-shape"],["src","https://bootdey.com/img/popular-pricing.png","alt",""],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-info",3,"click"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["width","24","height","24","role","img","aria-label","Warning:",1,"bi","flex-shrink-0","me-2"],[0,"xlink","href","#exclamation-triangle-fill"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"]],template:function(l,a){l&1&&(i(0,"link",0),n(1,"nav",1)(2,"a",2),i(3,"i",3),n(4,"span",4),t(5,"erplain"),e()()(),d(),n(6,"svg",5)(7,"symbol",6),i(8,"path",7),e()(),x(9,k,7,0,"div",8)(10,y,7,0,"div",8),g(),n(11,"section",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"div",13)(16,"h3"),t(17,"Plans tarifaires"),e(),n(18,"p"),t(19,"Optimisez vos op\xE9rations commerciales avec notre application de gestion & tout-en-un pour vente, achat, stockage et livraison."),e(),i(20,"div",14),e()()(),n(21,"div",11)(22,"div",15)(23,"div",16)(24,"div",17)(25,"h3"),t(26),e(),n(27,"p"),t(28,"La version standard"),e(),i(29,"div",14),e(),n(30,"div",18)(31,"h4"),t(32),e()(),n(33,"div",19)(34,"p"),i(35,"i",20),t(36,"Duration: par mois"),e(),n(37,"p"),i(38,"i",20),t(39),e(),n(40,"p"),i(41,"i",21),t(42,"-"),e()(),n(43,"div",22)(44,"a",23),_("click",function(){return a.getPlanFIRST(a.plans[0].id)}),t(45,"Choisir cet abonnement"),e()()()(),n(46,"div",15)(47,"div",24)(48,"div",25),i(49,"img",26),e(),n(50,"div",17)(51,"span"),t(52,"Popular"),e(),n(53,"h3"),t(54),e(),n(55,"p"),t(56,"Choix le plus populaire"),e(),i(57,"div",14),e(),n(58,"div",18)(59,"h4"),t(60),e()(),n(61,"div",19)(62,"p"),i(63,"i",20),t(64,"Duration: par mois"),e(),n(65,"p"),i(66,"i",20),t(67),e(),n(68,"p"),i(69,"i",21),t(70,"-"),e()(),n(71,"div",22)(72,"a",27),_("click",function(){return a.getPlanPREMIUM(a.plans[1].id)}),t(73,"Choisir cet abonnement"),e()()()(),n(74,"div",15)(75,"div",16)(76,"div",17)(77,"h3"),t(78),e(),n(79,"p"),t(80,"Possibilit\xE9s illimit\xE9es"),e(),i(81,"div",14),e(),n(82,"div",18)(83,"h4"),t(84),e()(),n(85,"div",19)(86,"p"),i(87,"i",20),t(88,"Duration: par mois"),e(),n(89,"p"),i(90,"i",20),t(91),e()(),n(92,"div",22)(93,"a",28),_("click",function(){return a.getPlanELITE(a.plans[2].id)}),t(94,"Choisir cet abonnement"),e()()()()()()()),l&2&&(r(9),u("ngIf",a.msgRemade),r(),u("ngIf",a.msgSub),r(16),b(a.plans[0].name),r(6),p("",a.plans[0].price,""," MAD",""),r(7),p("",a.plans[0].maxEntreprises,""," Entreprises",""),r(15),b(a.plans[1].name),r(6),p("",a.plans[1].price,""," MAD",""),r(7),p("",a.plans[1].maxEntreprises,""," Entreprises",""),r(11),b(a.plans[2].name),r(6),p("",a.plans[2].price,""," MAD",""),r(7),p("",a.plans[2].maxEntreprises,""," Entreprises",""))},dependencies:[C],styles:['body[_ngcontent-%COMP%]{margin-top:20px}.price_plan_area[_ngcontent-%COMP%]{position:relative;z-index:1}.single_price_plan[_ngcontent-%COMP%]{position:relative;z-index:1;border-radius:.5rem .5rem 0 0;-webkit-transition-duration:.5s;transition-duration:.5s;margin-bottom:50px;background-color:#fff;padding:3rem 4rem}@media only screen and (min-width: 992px) and (max-width: 1199px){.single_price_plan[_ngcontent-%COMP%]{padding:3rem}}@media only screen and (max-width: 575px){.single_price_plan[_ngcontent-%COMP%]{padding:3rem}}.single_price_plan[_ngcontent-%COMP%]:after{position:absolute;content:"";background-image:url(https://bootdey.com/img/half-circle-pricing.png);background-repeat:repeat;width:100%;height:17px;bottom:-17px;z-index:1;left:0}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:capitalize;-webkit-transition-duration:.5s;transition-duration:.5s;margin-bottom:2rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;padding:.2rem .6rem;font-size:12px;text-transform:uppercase;background-color:#2ecc71;display:inline-block;margin-bottom:.5rem;border-radius:.25rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;line-height:1;font-size:14px}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:80px;height:4px;border-radius:10px;background-color:#3f43fd}.single_price_plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{margin-bottom:1.9rem}.single_price_plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{position:relative;z-index:1;font-size:2.4rem;line-height:1;margin-bottom:0;color:#3f43fd;display:inline-block;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-color:transparent;background-image:-webkit-gradient(linear,left top,right top,from(#e24997),to(#2d2ed4));background-image:linear-gradient(90deg,#e24997,#2d2ed4)}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{position:relative;margin-bottom:1.5rem}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:16px;margin:0;padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#2ecc71;margin-right:.5rem}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .lni-close[_ngcontent-%COMP%]{color:#e74c3c}.single_price_plan.active[_ngcontent-%COMP%], .single_price_plan[_ngcontent-%COMP%]:hover, .single_price_plan[_ngcontent-%COMP%]:focus{-webkit-box-shadow:0 6px 50px 8px rgba(23,112,218,.33);box-shadow:0 6px 50px 8px #218cf352}.back[_ngcontent-%COMP%]{-webkit-box-shadow:0 6px 50px 8px rgba(21,131,233,.15);box-shadow:0 6px 50px 8px #1583e926}.c-Info[_ngcontent-%COMP%]{transition:transform .3s ease}.c-Info[_ngcontent-%COMP%]:hover{transform:scale(1.05);z-index:1}.single_price_plan[_ngcontent-%COMP%]   .side-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:auto;top:0;right:0;z-index:-2}.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:3.125rem;letter-spacing:-1px}.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:1.25rem}.section-heading[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:120px;height:5px;margin:30px auto 0;border-radius:6px;background:#2d2ed4;background:-webkit-gradient(linear,left top,right top,from(#e24997),to(#2d2ed4));background:linear-gradient(to right,#e24997,#2d2ed4)}']});let m=s;return m})();export{F as a};
