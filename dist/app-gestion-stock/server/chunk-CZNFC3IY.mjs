import './polyfills.server.mjs';
import{a as n,b as e}from"./chunk-D4RJRHB5.mjs";import{aa as a,za as o}from"./chunk-VWPO2VC4.mjs";var u=(()=>{let i=class i extends n{constructor(){super(...arguments),this.username=new e(()=>this.item().username,t=>this.item().username=t||"",t=>{this.username.stringValidators?.required()?.valid()}),this.password=new e(()=>this.item().password,t=>this.item().password=t||"",t=>{this.password.stringValidators?.required()?.min(6)?.valid()}),this.confirmPassword=new e(()=>this.item().confirmPassword,t=>this.item().confirmPassword=t||"",t=>{this.confirmPassword.stringValidators?.required()?.errorIf(t!==this.item().password,"The Confirm Password Must Be The Same As Password")?.valid()}),this.email=new e(()=>this.item().email,t=>this.item().email=t||"",t=>{this.email.stringValidators?.required()?.email()?.valid()}),this.phone=new e(()=>this.item().phone,t=>this.item().phone=t||"",t=>{this.phone.stringValidators?.required()?.phone()?.valid()}),this.validatorItems=[this.username,this.password,this.email,this.phone,this.confirmPassword]}getValidatorItems(){return this.validatorItems}static init(t){let r=new i;return r.item=t,r}getValidatorItem(t){return this[t]}};i.\u0275fac=(()=>{let t;return function(m){return(t||(t=o(i)))(m||i)}})(),i.\u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{u as a};
