import './polyfills.server.mjs';
import{Ma as i,aa as l,fa as a,we as o}from"./chunk-NYO24GET.mjs";var p=(()=>{let t=class t{constructor(e){this.platformId=e}getToken(){return o(this.platformId)?localStorage?.getItem("token"):null}setToken(e){o(this.platformId)&&localStorage?.setItem("token",e)}getRole(){return o(this.platformId)?localStorage?.getItem("role")?.split(","):void 0}setRole(e){o(this.platformId)&&localStorage?.setItem("role",e.join(","))}clearToken(){o(this.platformId)&&localStorage?.removeItem("token")}isLoggedIn(){return!!this.getToken()}};t.\u0275fac=function(n){return new(n||t)(a(i))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{p as a};
