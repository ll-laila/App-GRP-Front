import './polyfills.server.mjs';
import{a as e,b as t}from"./chunk-D4RJRHB5.mjs";var r=class n extends e{constructor(){super(...arguments),this.nom=new t(()=>this.item().nom,i=>this.item().nom=i,i=>{this.nom.stringValidators?.required()?.valid()}),this.sku=new t(()=>this.item().sku,i=>this.item().sku=i,i=>{this.sku.stringValidators?.required()?.valid()}),this.disponible=new t(()=>this.item().disponible,i=>this.item().disponible=i,i=>{this.disponible.stringValidators?.required()?.valid()}),this.validatorItems=[this.nom,this.sku,this.disponible]}getValidatorItem(i){return this[i]}static init(i){let s=new n;return s.item=i,s}};export{r as a};
