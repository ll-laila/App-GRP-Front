import './polyfills.server.mjs';
import{a as K,b as y}from"./chunk-D4RJRHB5.mjs";import{a as N}from"./chunk-IJRDI6QA.mjs";import{b as W,c as P,d as q,e as A,f as G,g as O,n as J}from"./chunk-ZDJMNRIQ.mjs";import{B as T,I as V,ma as L}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import"./chunk-UR2QYS3H.mjs";import{a as z}from"./chunk-YN4AEEQH.mjs";import{a as U}from"./chunk-BA7HZXNG.mjs";import{a as H}from"./chunk-XWMWN5XG.mjs";import"./chunk-IIYCLNRC.mjs";import{a as B}from"./chunk-ENKAC57S.mjs";import{e as j,f as D}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import{b as F}from"./chunk-YCIOFEEA.mjs";import{Eb as u,Kb as k,Pb as n,Qb as r,Rb as g,Xd as _,Yb as I,aa as c,ga as l,hc as s,ib as m,ic as v,jb as R,ka as x,nc as b,oc as S,pc as C,rc as M,yb as f,za as E}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";var p=class{};var X=(()=>{let t=class t{constructor(){this.url=B.login,this.http=l(F)}login(){return this.http.post(this.url,this.item)}get item(){return this._item==null&&(this._item=new p),this._item}set item(e){this._item=e}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var Y=(()=>{let t=class t extends K{constructor(){super(...arguments),this.username=new y(()=>this.item().username,e=>this.item().username=e||"",e=>{this.username.stringValidators?.required()?.valid()}),this.password=new y(()=>this.item().password,e=>this.item().password=e||"",e=>{this.password.stringValidators?.required()?.valid()}),this.validatorItems=[this.username,this.password]}static init(e){let i=new t;return i.item=e,i}getValidatorItem(e){return this[e]}};t.\u0275fac=(()=>{let e;return function(a){return(e||(e=E(t)))(a||t)}})(),t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var h=class{};function Z(o,t){o&1&&(n(0,"div",27),s(1," Vous devez cr\xE9er un compte ! "),r())}function $(o,t){o&1&&g(0,"c-spinner",23)}var Be=(()=>{let t=class t{constructor(e){this.userInfosService=e,this.loading=!1,this.message=!1,this.authService=l(X),this.toasterService=l(N),this.router=l(j),this.tokenService=l(z),this.validator=Y.init(()=>this.item),this.appUserService=l(U),this.remade=0,this.subResponse=new h}get item(){return this.authService.item}set item(e){this.authService.item=e}login(){this.validator.validate()&&(this.loading=!0,this.authService.login().subscribe({next:e=>{this.appUserService.findByUsernameWithRoles(e.username).subscribe({next:i=>{console.log("is Supper Admin:",i.isSupperAdmin),i.isSupperAdmin?this.router.navigate(["/support"]).then():(this.userInfosService.setUsername(e.username),console.log(e),this.tokenService.setToken(e.accessToken),this.tokenService.setRole(e.roles),this.validator.reset(),this.item=new p,this.getDaysRemaining(e.username))},error:i=>{console.error(i)}})},error:e=>{console.log(e),this.loading=!1,this.message=!0}}))}getDaysRemaining(e){this.appUserService.getDaysRemaining(e).subscribe(i=>{this.subResponse.daysRemaining=i.daysRemaining,this.subResponse.isSubEnd=i.isSubEnd,this.subResponse.haveSub=i.haveSub,console.log("remade:",this.subResponse),this.subResponse.daysRemaining<=0&&!this.subResponse.haveSub||this.subResponse.isSubEnd?(console.log("remade essai:",this.subResponse.daysRemaining),console.log("remade sub:",this.subResponse.isSubEnd),this.router.navigate(["abonnements"]).then()):(console.log("remade essai:",this.subResponse.daysRemaining),console.log("remade sub:",this.subResponse.isSubEnd),this.router.navigate(["dashboard"]).then(),this.loading=!1,this.toasterService.toast({message:"Bienvenue sur l'application de gestion !",color:"success"}))},i=>{console.log(i)})}};t.\u0275fac=function(i){return new(i||t)(R(H))},t.\u0275cmp=x({type:t,selectors:[["app-login"]],standalone:!0,features:[M],decls:44,vars:8,consts:[[1,"vh-100","bmg"],[1,"container","py-5","h-100"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col","col-xl-10"],[1,"card","hover-zoom","shadow-lg",2,"border-radius","2rem","position","relative"],[1,"row","g-0"],[1,"col-md-6","col-lg-5","d-none","d-md-block","position-relative"],["src","assets/images/stock.jpg","alt","login form",1,"img-fluid","bottom-image"],[1,"col-md-6","col-lg-7","d-flex","align-items-center"],[1,"card-body","p-4","p-lg-5","text-black"],[1,"d-flex","align-items-center","mb-3","pb-1"],[1,"fas","fa-cubes","fa-2x","me-3",2,"color","#ff6219"],[1,"h1","fw-bold","mb-0"],[1,"fw-normal","mb-3","pb-3",2,"letter-spacing","1px"],["class","alert alert-danger","role","alert",4,"ngIf"],["data-mdb-input-init","",1,"form-outline","mb-4"],["for","form2Example17",1,"form-label"],["id","form2Example17","name","username","autoComplete","username","cFormControl","",3,"ngModelChange","ngModel"],[3,"valid"],["for","form2Example27",1,"form-label"],["id","form2Example27","name","password","autoComplete","current-password","cFormControl","","type","password",3,"ngModelChange","ngModel"],[1,"pt-1","mb-4"],["data-mdb-button-init","","data-mdb-ripple-init","","type","button",1,"btn","btn-dark","btn-lg","btn-block",3,"click"],["aria-hidden","true","size","sm"],["href","#!",1,"small","text-muted"],[1,"mb-5","pb-lg-2",2,"color","#393f81"],["routerLink","/register",2,"color","#393f81"],["role","alert",1,"alert","alert-danger"]],template:function(i,a){i&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),g(7,"img",7),r(),n(8,"div",8)(9,"div",9)(10,"form")(11,"div",10),g(12,"i",11),n(13,"span",12),s(14,"erplain"),r()(),n(15,"h5",13),s(16,"Connectez-vous \xE0 votre compte"),r(),f(17,Z,2,0,"div",14),n(18,"div",15)(19,"label",16),s(20,"Nom d'utilisateur ou email"),r(),n(21,"input",17),C("ngModelChange",function(d){return S(a.item.username,d)||(a.item.username=d),d}),r(),n(22,"c-form-feedback",18),s(23),r()(),n(24,"div",15)(25,"label",19),s(26,"Mot de passe"),r(),n(27,"input",20),C("ngModelChange",function(d){return S(a.item.password,d)||(a.item.password=d),d}),r(),n(28,"c-form-feedback",18),s(29),r()(),n(30,"div",21)(31,"button",22),I("click",function(){return a.login()}),f(32,$,1,0,"c-spinner",23),s(33," Se connecter "),r()(),n(34,"a",24),s(35,"Mot de passe oubli\xE9?"),r(),n(36,"p",25),s(37,"Vous n'avez pas un compte? "),n(38,"a",26),s(39,"Inscrivez-vous ici"),r()(),n(40,"a",24),s(41,"Conditions d'utilisation, "),r(),n(42,"a",24),s(43,"Politique de confidentialit\xE9"),r()()()()()()()()()()),i&2&&(m(17),u("ngIf",a.message),m(4),b("ngModel",a.item.username),m(),u("valid",!1),m(),v(a.validator.username.message),m(4),b("ngModel",a.item.password),m(),u("valid",!1),m(),v(a.validator.password.message),m(3),k(a.loading?32:-1))},dependencies:[V,J,O,W,P,q,G,A,L,D,T,_],styles:[`.bmg[_ngcontent-%COMP%] {
    background-image: url('assets/images/backColor.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }

  .bottom-image[_ngcontent-%COMP%] {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
    border-radius: 1rem 0 0 1rem;
  }

  .hover-zoom[_ngcontent-%COMP%]:hover {
    transform: scale(1.02);
  }`]});let o=t;return o})();export{Be as LoginComponent};
