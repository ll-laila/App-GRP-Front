import{a as k}from"./chunk-VB4JKWOV.js";import{a as w}from"./chunk-CBLK3ESW.js";import{a as O}from"./chunk-37VUKUGD.js";import{a as E}from"./chunk-VWWTJBTP.js";import{a as S}from"./chunk-WSA7JG33.js";import"./chunk-KBKVWUMZ.js";import{d as M}from"./chunk-7D4QPVHB.js";import"./chunk-2BQUVQN4.js";import"./chunk-RTZTBWEW.js";import"./chunk-3HUUSNPM.js";import"./chunk-H2QFYA5F.js";import{Cb as h,Nb as t,Ob as e,Od as C,Pb as i,Wb as _,bb as f,fb as o,fc as n,ga as c,gc as u,ic as p,ka as v,pc as P,wb as x,xa as d,ya as g}from"./chunk-4HLAVBW4.js";import"./chunk-RGL3W33T.js";function y(m,s){m&1&&(t(0,"div",25),d(),t(1,"svg",26),i(2,"use",27),e(),g(),t(3,"strong"),n(4,"Votre p\xE9riode d'essai est termin\xE9e !"),e(),n(5," vous devez souscrire \xE0 un de nos abonnements. "),i(6,"button",28),e())}function I(m,s){m&1&&(t(0,"div",25),d(),t(1,"svg",26),i(2,"use",27),e(),g(),t(3,"strong"),n(4,"Votre abonnement est termin\xE9e pour cet mois !"),e(),n(5," vous devez souscrire \xE0 un de nos abonnements. "),i(6,"button",28),e())}var G=(()=>{let s=class s{constructor(){this.subscriptionService=c(O),this.userInfosService=c(S),this.appUserService=c(E),this.planService=c(w),this.router=c(M),this.remade=0,this.msgRemade=!1,this.msgSub=!1}ngOnInit(){this.getDaysRemaining(this.userInfosService.getUsername()),this.getPlans()}getPlanFIRST(r){this.router.navigate(["/paiement"],{queryParams:{id:r}}).then()}getPlanPREMIUM(r){this.router.navigate(["/paiement"],{queryParams:{id:r}}).then()}getPlanELITE(r){this.router.navigate(["/paiement"],{queryParams:{id:r}}).then()}getPlans(){this.planService.findAllPlans().subscribe(r=>{this.plans=r,console.log("Plans : ",this.plans)},r=>{console.log(r)})}getDaysRemaining(r){this.appUserService.getDaysRemaining(r).subscribe(l=>{this.remade=l.daysRemaining,this.remade<=0&&!l.haveSub&&(this.msgRemade=!0),l.haveSub&&l.isSubEnd&&(this.msgSub=!0)},l=>{console.log(l)})}};s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=v({type:s,selectors:[["app-parametres-compte"]],standalone:!0,features:[P],decls:90,vars:17,consts:[["rel","stylesheet","href",f`https://cdn.lineicons.com/3.0/lineicons.css`],["xmlns","http://www.w3.org/2000/svg",2,"display","none"],["id","exclamation-triangle-fill","fill","currentColor","viewBox","0 0 16 16"],["d","M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"],["class","alert alert-warning alert-dismissible fade show","role","alert",4,"ngIf"],["id","pricing",1,"price_plan_area","section_padding_130_80","pt-4"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-sm-8","col-lg-6"],["data-wow-delay","0.2s",1,"section-heading","text-center","wow","fadeInUp",2,"visibility","visible","animation-delay","0.2s","animation-name","fadeInUp"],[1,"line"],[1,"col-12","col-sm-8","col-md-6","col-lg-4","c-Info"],["data-wow-delay","0.2s",1,"single_price_plan","back","wow","fadeInUp",2,"visibility","visible","animation-delay","0.2s","animation-name","fadeInUp"],[1,"title"],[1,"price"],[1,"description"],[1,"lni","lni-checkmark-circle"],[1,"lni","lni-close"],[1,"button"],[1,"btn","btn-success","btn-2",3,"click"],["data-wow-delay","0.2s",1,"single_price_plan","active","wow","fadeInUp",2,"visibility","visible","animation-delay","0.2s","animation-name","fadeInUp"],[1,"side-shape"],["src","https://bootdey.com/img/popular-pricing.png","alt",""],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-info",3,"click"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["width","24","height","24","role","img","aria-label","Warning:",1,"bi","flex-shrink-0","me-2"],[0,"xlink","href","#exclamation-triangle-fill"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"]],template:function(l,a){l&1&&(i(0,"link",0),d(),t(1,"svg",1)(2,"symbol",2),i(3,"path",3),e()(),x(4,y,7,0,"div",4)(5,I,7,0,"div",4),g(),t(6,"section",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"h3"),n(12,"Plans tarifaires"),e(),t(13,"p"),n(14,"Optimisez vos op\xE9rations commerciales avec notre application de gestion & tout-en-un pour vente, achat, stockage et livraison."),e(),i(15,"div",10),e()()(),t(16,"div",7)(17,"div",11)(18,"div",12)(19,"div",13)(20,"h3"),n(21),e(),t(22,"p"),n(23,"La version standard"),e(),i(24,"div",10),e(),t(25,"div",14)(26,"h4"),n(27),e()(),t(28,"div",15)(29,"p"),i(30,"i",16),n(31,"Duration: par mois"),e(),t(32,"p"),i(33,"i",16),n(34),e(),t(35,"p"),i(36,"i",17),n(37,"-"),e()(),t(38,"div",18)(39,"a",19),_("click",function(){return a.getPlanFIRST(a.plans[0].id)}),n(40,"Choisir cet abonnement"),e()()()(),t(41,"div",11)(42,"div",20)(43,"div",21),i(44,"img",22),e(),t(45,"div",13)(46,"span"),n(47,"Popular"),e(),t(48,"h3"),n(49),e(),t(50,"p"),n(51,"Choix le plus populaire"),e(),i(52,"div",10),e(),t(53,"div",14)(54,"h4"),n(55),e()(),t(56,"div",15)(57,"p"),i(58,"i",16),n(59,"Duration: par mois"),e(),t(60,"p"),i(61,"i",16),n(62),e(),t(63,"p"),i(64,"i",17),n(65,"-"),e()(),t(66,"div",18)(67,"a",23),_("click",function(){return a.getPlanPREMIUM(a.plans[1].id)}),n(68,"Choisir cet abonnement"),e()()()(),t(69,"div",11)(70,"div",12)(71,"div",13)(72,"h3"),n(73),e(),t(74,"p"),n(75,"Possibilit\xE9s illimit\xE9es"),e(),i(76,"div",10),e(),t(77,"div",14)(78,"h4"),n(79),e()(),t(80,"div",15)(81,"p"),i(82,"i",16),n(83,"Duration: par mois"),e(),t(84,"p"),i(85,"i",16),n(86),e()(),t(87,"div",18)(88,"a",24),_("click",function(){return a.getPlanELITE(a.plans[2].id)}),n(89,"Choisir cet abonnement"),e()()()()()()()),l&2&&(o(4),h("ngIf",a.msgRemade),o(),h("ngIf",a.msgSub),o(16),u(a.plans[0].name),o(6),p("",a.plans[0].price,""," MAD",""),o(7),p("",a.plans[0].maxEntreprises,""," Entreprises",""),o(15),u(a.plans[1].name),o(6),p("",a.plans[1].price,""," MAD",""),o(7),p("",a.plans[1].maxEntreprises,""," Entreprises",""),o(11),u(a.plans[2].name),o(6),p("",a.plans[2].price,""," MAD",""),o(7),p("",a.plans[2].maxEntreprises,""," Entreprises",""))},dependencies:[C,k],styles:['body[_ngcontent-%COMP%]{margin-top:20px}.price_plan_area[_ngcontent-%COMP%]{position:relative;z-index:1}.single_price_plan[_ngcontent-%COMP%]{position:relative;z-index:1;border-radius:.5rem .5rem 0 0;-webkit-transition-duration:.5s;transition-duration:.5s;margin-bottom:50px;background-color:#fff;padding:3rem 4rem}@media only screen and (min-width: 992px) and (max-width: 1199px){.single_price_plan[_ngcontent-%COMP%]{padding:3rem}}@media only screen and (max-width: 575px){.single_price_plan[_ngcontent-%COMP%]{padding:3rem}}.single_price_plan[_ngcontent-%COMP%]:after{position:absolute;content:"";background-image:url(https://bootdey.com/img/half-circle-pricing.png);background-repeat:repeat;width:100%;height:17px;bottom:-17px;z-index:1;left:0}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:capitalize;-webkit-transition-duration:.5s;transition-duration:.5s;margin-bottom:2rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;padding:.2rem .6rem;font-size:12px;text-transform:uppercase;background-color:#2ecc71;display:inline-block;margin-bottom:.5rem;border-radius:.25rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;line-height:1;font-size:14px}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:80px;height:4px;border-radius:10px;background-color:#3f43fd}.single_price_plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{margin-bottom:1.9rem}.single_price_plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{position:relative;z-index:1;font-size:2.4rem;line-height:1;margin-bottom:0;color:#3f43fd;display:inline-block;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-color:transparent;background-image:-webkit-gradient(linear,left top,right top,from(#e24997),to(#2d2ed4));background-image:linear-gradient(90deg,#e24997,#2d2ed4)}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{position:relative;margin-bottom:1.5rem}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:16px;margin:0;padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#2ecc71;margin-right:.5rem}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .lni-close[_ngcontent-%COMP%]{color:#e74c3c}.single_price_plan.active[_ngcontent-%COMP%], .single_price_plan[_ngcontent-%COMP%]:hover, .single_price_plan[_ngcontent-%COMP%]:focus{-webkit-box-shadow:0 6px 50px 8px rgba(23,112,218,.33);box-shadow:0 6px 50px 8px #218cf352}.back[_ngcontent-%COMP%]{-webkit-box-shadow:0 6px 50px 8px rgba(21,131,233,.15);box-shadow:0 6px 50px 8px #1583e926}.c-Info[_ngcontent-%COMP%]{transition:transform .3s ease}.c-Info[_ngcontent-%COMP%]:hover{transform:scale(1.05);z-index:1}.single_price_plan[_ngcontent-%COMP%]   .side-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:auto;top:0;right:0;z-index:-2}.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:3.125rem;letter-spacing:-1px}.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:1.25rem}.section-heading[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:120px;height:5px;margin:30px auto 0;border-radius:6px;background:#2d2ed4;background:-webkit-gradient(linear,left top,right top,from(#e24997),to(#2d2ed4));background:linear-gradient(to right,#e24997,#2d2ed4)}']});let m=s;return m})();export{G as ParametresCompteComponent};
