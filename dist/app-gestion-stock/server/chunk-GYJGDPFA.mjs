import './polyfills.server.mjs';
import{Ha as r,aa as i,sb as n}from"./chunk-NYO24GET.mjs";import{a as o}from"./chunk-XAJIYFV3.mjs";var f={color:"primary",delay:5e3,autohide:!0};var p=(()=>{let s=class s{constructor(){this.toasts=n([]),this.onToast=new r}toast(t){t instanceof Array?t.length>0&&this.addToasts(t):t!=null&&this.addToasts([t]),this.onToast.emit()}addToasts(t){let e=t.map(d=>o(o({},f),d));this.toasts.set([...this.toasts(),...e])}validateThenToast(t){return t.validate()?!1:(this.toast({message:"Please fix the issues and try again.",color:"danger"}),!0)}};s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=i({token:s,factory:s.\u0275fac,providedIn:"root"});let a=s;return a})();export{p as a};
