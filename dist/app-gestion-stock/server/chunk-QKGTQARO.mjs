import './polyfills.server.mjs';
import{a as e,b as t}from"./chunk-D4RJRHB5.mjs";var a=class o extends e{constructor(){super(...arguments),this.disponiblePos=new t(()=>this.item().disponiblePos,i=>this.item().disponiblePos=i,i=>{this.disponiblePos.validators?.required()?.valid()}),this.actif=new t(()=>this.item().actif,i=>this.item().actif=i,i=>{this.actif.validators?.required()?.valid()}),this.validatorItems=[this.disponiblePos,this.actif]}getValidatorItem(i){return this[i]}static init(i){let s=new o;return s.item=i,s}};export{a};
