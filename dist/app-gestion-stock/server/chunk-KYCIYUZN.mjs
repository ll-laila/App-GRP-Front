import './polyfills.server.mjs';
import{a as G}from"./chunk-FIMT3G46.mjs";import"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import"./chunk-UR2QYS3H.mjs";import{a as H}from"./chunk-AXJG7MVV.mjs";import{a as Z}from"./chunk-QAYZEBHG.mjs";import{a as L}from"./chunk-366MMWXL.mjs";import{a as q}from"./chunk-XWMWN5XG.mjs";import"./chunk-IIYCLNRC.mjs";import"./chunk-FO7JI6NW.mjs";import{a as Q}from"./chunk-32WZQ4LQ.mjs";import{b as A,e as F,f as D}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import{b as j}from"./chunk-YCIOFEEA.mjs";import{Eb as x,Fa as V,Pb as i,Qb as n,Rb as p,Vb as b,Xd as B,Yb as _,_b as d,aa as S,dc as v,ec as C,fc as P,ga as m,ge as R,hc as o,ib as l,ic as M,jb as y,jc as w,ka as I,kc as E,rc as z,te as N,uc as U,va as g,vc as T,wa as u,xa as O,yb as f}from"./chunk-VWPO2VC4.mjs";import{l as k}from"./chunk-XAJIYFV3.mjs";var W=(()=>{let c=class c{constructor(){this.api=Q.apiUrl+"plan",this.http=m(j),this.keepData=!1,this.returnUrl="",this.toReturn=()=>this.returnUrl!=null}charge(t,e){return this.http.post("http://13.60.180.224:4000/stripe_checkout",{stripeToken:e,cantidad:t}).toPromise()}};c.\u0275fac=function(e){return new(e||c)},c.\u0275prov=S({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var X=["cardNumber"],Y=["cardExpiry"],$=["cardCvc"];function ee(a,c){if(a&1&&(i(0,"div",35),o(1),n()),a&2){let r=d(2);l(),M(r.cardError)}}function te(a,c){if(a&1){let r=b();i(0,"div",36)(1,"div",37)(2,"h4"),o(3),U(4,"titlecase"),n(),i(5,"input",38),_("change",function(e){g(r);let s=d(2);return u(s.onFileSelected(e))}),n(),i(6,"button",39),_("click",function(){g(r);let e=d(2);return u(e.uploadReceipt())}),o(7,"Upload"),n(),i(8,"button",39),_("click",function(){g(r);let e=d(2);return u(e.closeUploadModal())}),o(9,"Cancel"),n()()()}if(a&2){let r=d(2);l(3),w("",T(4,1,r.selectedBank)," - Upload Payment Receipt")}}function ne(a,c){if(a&1){let r=b();i(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",9),p(5,"img",10),n(),i(6,"div",11)(7,"h3"),o(8),n(),i(9,"p"),o(10),n(),p(11,"div",12),n(),i(12,"div",13)(13,"h4"),o(14),n()(),i(15,"div",14)(16,"p"),p(17,"i",15),o(18),n(),i(19,"p"),p(20,"i",15),o(21),n()(),i(22,"div",16)(23,"a",17),o(24,"Changer l'abonnement"),n()()()()(),i(25,"div",18)(26,"div",19)(27,"div",20)(28,"h4",21),o(29,"Informations de paiement"),n(),i(30,"label",22),o(31,"Num\xE9ro de carte"),n(),p(32,"div",23,0),i(34,"div",24)(35,"div",25)(36,"label",26),o(37,"Date d'expiration"),n(),p(38,"div",27,1),n(),i(40,"div",25)(41,"label",28),o(42,"CVC"),n(),p(43,"div",29,2),n()(),f(45,ee,2,1,"div",30),i(46,"button",31),_("click",function(){g(r);let e=d();return u(e.onClick())}),O(),i(47,"svg",32),p(48,"path",33),n(),o(49," Payer "),n()()(),f(50,te,10,3,"div",34),n()()}if(a&2){let r=d();l(8),M(r.plan.name),l(2),M(r.plan.description),l(4),E("",r.plan.price,""," MAD",""),l(4),E("- ",r.plan.maxEntreprises,""," Entreprises",""),l(3),w("- Un montant de ",r.plan.price," MAD par mois vous sera factur\xE9 \xE0 compter d'aujourd'hui"),l(24),x("ngIf",r.cardError),l(5),x("ngIf",r.selectedBank)}}function ie(a,c){if(a&1){let r=b();i(0,"div")(1,"div",19)(2,"div",20)(3,"h3",21),o(4,"Confirmation de paiement"),n(),i(5,"p",14),o(6),n(),i(7,"div",40)(8,"a",41),_("click",function(){g(r);let e=d();return u(e.annulerPay())}),o(9,"Annuler"),n(),i(10,"a",42),_("click",function(){g(r);let e=d();return u(e.confirmPay())}),O(),i(11,"svg",32),p(12,"path",33),n(),o(13," Confirmer"),n()()()()()}if(a&2){let r=d();l(6),w("Veuillez confirmer que vous souhaitez effectuer le paiement de ",r.plan.price," en cliquant sur le bouton ci-dessous.")}}function re(a,c){a&1&&(i(0,"div")(1,"div",19)(2,"div",20)(3,"div")(4,"h2",43),o(5,"Votre paiement est termin\xE9e avec succ\xE8s"),n()(),i(6,"div",40)(7,"a",44),o(8,"Retour accueil"),n()()()()())}var ve=(()=>{let c=class c{constructor(t,e){this.ngZone=t,this.stripeService=e,this.route=m(F),this.router=m(A),this.planService=m(H),this.confirm=!1,this.pay=!0,this.sucess=!1,this._userInfosService=m(q),this._appUserService=m(L),this.subscriptionService=m(Z),this.subscription=new G,this.selectedBank=null}ngOnInit(){this.getAdminByUsername(this._userInfosService.getUsername()),this.router.queryParams.subscribe(t=>{this.planId=+t.id,console.log("Received Plan ID: ",this.planId)}),this.getPlanById(this.planId)}getPlanById(t){this.planService.findById(t).subscribe(e=>{this.price=e.price,this.plan=e,this.subscription.plan=this.plan,console.log("Plan : ",e)},e=>{console.log(e)})}getAdminByUsername(t){this._appUserService.findByUsernameWithRoles(t).subscribe({next:e=>{this.admin=e,this.subscription.user=this.admin,console.log("Admin data:",this.admin)},error:e=>{console.error("Error fetching admin data:",e)}})}confirmPay(){this.subscription.plan=this.plan,this.subscription.user=this.admin,this.subscriptionService.create(this.subscription).subscribe({next:t=>{this.sucess=!0,this.confirm=!1,console.log("Subscription :",t)},error:t=>{console.error("Error:",t)}})}annulerPay(){this.route.navigate(["/parametresCompte"]).then()}ngAfterViewInit(){let t=stripe.elements();this.cardNumberElement=t.create("cardNumber"),this.cardExpiryElement=t.create("cardExpiry"),this.cardCvcElement=t.create("cardCvc"),this.cardNumberElement.mount(this.cardNumber.nativeElement),this.cardExpiryElement.mount(this.cardExpiry.nativeElement),this.cardCvcElement.mount(this.cardCvc.nativeElement),this.cardNumberElement.addEventListener("change",this.onChange.bind(this)),this.cardExpiryElement.addEventListener("change",this.onChange.bind(this)),this.cardCvcElement.addEventListener("change",this.onChange.bind(this))}onChange({error:t}){t?this.ngZone.run(()=>this.cardError=t.message):this.ngZone.run(()=>this.cardError=null)}onClick(){return k(this,null,function*(){let{token:t,error:e}=yield stripe.createToken(this.cardNumberElement);if(t){let s=yield this.stripeService.charge(this.price,t.id);this.confirm=!0,this.pay=!1,console.log(s)}else this.ngZone.run(()=>this.cardError=e.message)})}selectBank(t){this.selectedBank=t}onFileSelected(t){let e=t.target.files[0]}uploadReceipt(){console.log("Uploading receipt for",this.selectedBank),this.closeUploadModal()}closeUploadModal(){this.selectedBank=null}};c.\u0275fac=function(e){return new(e||c)(y(V),y(W))},c.\u0275cmp=I({type:c,selectors:[["app-paiement"]],viewQuery:function(e,s){if(e&1&&(v(X,5),v(Y,5),v($,5)),e&2){let h;C(h=P())&&(s.cardNumber=h.first),C(h=P())&&(s.cardExpiry=h.first),C(h=P())&&(s.cardCvc=h.first)}},standalone:!0,features:[z],decls:3,vars:3,consts:[["cardNumber",""],["cardExpiry",""],["cardCvc",""],["class","row",4,"ngIf"],[4,"ngIf"],[1,"row"],[1,"col-left"],[1,"c-Info"],["data-wow-delay","0.2s",1,"single_price_plan","active","wow","fadeInUp",2,"visibility","visible","animation-delay","0.2s","animation-name","fadeInUp"],[1,"side-shape"],["src","https://bootdey.com/img/popular-pricing.png","alt",""],[1,"title"],[1,"line"],[1,"price"],[1,"description"],[1,"lni","lni-checkmark-circle"],[1,"button"],["routerLink","/parametresCompte",1,"btn","btn-warning"],[1,"col-right"],[1,"container","shadow-lg"],[1,"pb-5"],[1,"mb-4"],["for","card-number"],["id","card-number"],[1,"row","mt-2"],[1,"col"],["for","card-expiry"],["id","card-expiry"],["for","card-cvc"],["id","card-cvc"],["class","error",4,"ngIf"],[1,"mt-4",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-credit-card-fill"],["d","M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"],["class","upload-receipt-modal shadow-lg",4,"ngIf"],[1,"error"],[1,"upload-receipt-modal","shadow-lg"],[1,"upload-receipt-content"],["type","file",3,"change"],[3,"click"],["align","right"],["type","button",1,"btn","btn-secondary","btn-lg","m-2",3,"click"],["type","button",1,"btn","btn-lg","m-2",2,"background-color","#053F7AFF","color","white",3,"click"],[1,"m-4","cad"],["type","button","routerLink","/dashboard",1,"btn","btn-secondary","btn-lg","m-2"]],template:function(e,s){e&1&&f(0,ne,51,9,"div",3)(1,ie,14,1,"div",4)(2,re,9,0,"div",4),e&2&&(x("ngIf",s.pay),l(),x("ngIf",s.confirm),l(),x("ngIf",s.sucess))},dependencies:[B,D,N,R],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{max-width:1000px;margin:auto;padding:20px;background-color:#f8f9fa;border-radius:8px;box-shadow:0 2px 4px #0000001a}.row[_ngcontent-%COMP%]{display:flex;width:100%}.col-left[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}.cad[_ngcontent-%COMP%]{justify-content:center;align-items:center}.col-left[_ngcontent-%COMP%], .col-right[_ngcontent-%COMP%]{flex:1;padding:20px}.pb-5[_ngcontent-%COMP%]{display:flex;flex-direction:column}label[_ngcontent-%COMP%]{font-size:14px;margin-bottom:5px;color:#333}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.col[_ngcontent-%COMP%]{flex:1}#card-number[_ngcontent-%COMP%], #card-expiry[_ngcontent-%COMP%], #card-cvc[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;box-shadow:0 1px 3px #0000001a;margin-bottom:15px;background-color:#fff}#card-expiry[_ngcontent-%COMP%]{margin-right:10px}button[_ngcontent-%COMP%]{width:100%;padding:15px;background-color:#053f7a;border:none;border-radius:4px;color:#fff;font-size:16px;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#0667d0}button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:8px}.error[_ngcontent-%COMP%]{color:red;margin-top:10px}body[_ngcontent-%COMP%]{margin-top:20px}.price_plan_area[_ngcontent-%COMP%]{position:relative;z-index:1}.single_price_plan[_ngcontent-%COMP%]{position:relative;z-index:1;border-radius:.5rem .5rem 0 0;-webkit-transition-duration:.5s;transition-duration:.5s;margin-bottom:30px;background-color:#fff;padding:2rem 2.5rem;width:90%;max-width:500px;box-sizing:border-box}@media only screen and (min-width: 992px) and (max-width: 1199px){.single_price_plan[_ngcontent-%COMP%]{padding:2rem 2.5rem;width:90%}}@media only screen and (max-width: 575px){.single_price_plan[_ngcontent-%COMP%]{padding:1.5rem 2rem;width:90%;max-width:none}}.single_price_plan[_ngcontent-%COMP%]:after{position:absolute;content:"";background-image:url(https://bootdey.com/img/half-circle-pricing.png);background-repeat:repeat;width:100%;height:17px;bottom:-17px;z-index:1;left:0}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:capitalize;-webkit-transition-duration:.5s;transition-duration:.5s;margin-bottom:1.5rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;padding:.2rem .6rem;font-size:12px;text-transform:uppercase;background-color:#2ecc71;display:inline-block;margin-bottom:.5rem;border-radius:.25rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.7rem}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;line-height:1;font-size:19px}.single_price_plan[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:60px;height:4px;border-radius:10px;background-color:#3f43fd}.single_price_plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{margin-bottom:1.5rem}.single_price_plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{position:relative;z-index:1;font-size:1.8rem;line-height:1;margin-bottom:0;color:#3f43fd;display:inline-block;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-color:transparent;background-image:-webkit-gradient(linear,left top,right top,from(#e24997),to(#2d2ed4));background-image:linear-gradient(90deg,#e24997,#2d2ed4)}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:16px;margin:0;padding:8px 0;display:flex;align-items:center;font-size:15px}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#2ecc71;margin-right:.5rem}.single_price_plan[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .lni-close[_ngcontent-%COMP%]{color:#e74c3c}.single_price_plan.active[_ngcontent-%COMP%], .single_price_plan[_ngcontent-%COMP%]:hover, .single_price_plan[_ngcontent-%COMP%]:focus{-webkit-box-shadow:0 6px 50px 8px rgba(23,112,218,.33);box-shadow:0 6px 50px 8px #218cf352}.back[_ngcontent-%COMP%]{-webkit-box-shadow:0 6px 50px 8px rgba(21,131,233,.15);box-shadow:0 6px 50px 8px #1583e926}.c-Info[_ngcontent-%COMP%]{transition:transform .3s ease;width:80%;max-width:500px}.c-Info[_ngcontent-%COMP%]:hover{transform:scale(1.05);z-index:1}.single_price_plan[_ngcontent-%COMP%]   .side-shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;max-width:50%;height:auto;top:0;right:0;z-index:-2}.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:3.125rem;letter-spacing:-1px}.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:1.25rem}.section-heading[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:120px;height:5px;margin:30px auto 0;border-radius:6px;background:#2d2ed4;background:-webkit-gradient(linear,left top,right top,from(#e24997),to(#2d2ed4));background:linear-gradient(to right,#e24997,#2d2ed4)}.upload-receipt-modal[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a;z-index:1000}.upload-receipt-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:15px}.upload-receipt-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-right:5px}.payment-options[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin-top:20px}.bank-icon-button[_ngcontent-%COMP%]{border:none;background:none;cursor:pointer;padding-left:10px;padding-right:10px}.small-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:auto}']});let a=c;return a})();export{ve as PaiementComponent};
