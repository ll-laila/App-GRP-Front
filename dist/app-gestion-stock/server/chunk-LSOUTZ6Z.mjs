import './polyfills.server.mjs';
import{a,b as t}from"./chunk-D4RJRHB5.mjs";var s=class r extends a{constructor(){super(...arguments),this.tauxDeChange=new t(()=>this.item().tauxDeChange,e=>this.item().tauxDeChange=e||0,e=>{this.tauxDeChange.numberValidators?.required()?.valid()}),this.nouvelleDevise=new t(()=>this.item().nouvelleDevise,e=>this.item().nouvelleDevise=e,e=>{this.nouvelleDevise.validators?.errorIf(e?.id==null,"Aucun NouvelleDevise n'a \xE9t\xE9 fournie!")?.valid()}),this.validatorItems=[this.tauxDeChange,this.nouvelleDevise]}getValidatorItem(e){return this[e]}static init(e){let i=new r;return i.item=e,i}};export{s as a};
