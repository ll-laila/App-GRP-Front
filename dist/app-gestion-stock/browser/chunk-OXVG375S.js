import{a as s,b as i}from"./chunk-SR3OXJX3.js";var a=class r extends s{constructor(){super(...arguments),this.code=new i(()=>this.item().code,t=>this.item().code=t,t=>{this.code.stringValidators?.required()?.valid()}),this.dateExperation=new i(()=>this.item().dateExperation,t=>this.item().dateExperation=t,t=>{this.dateExperation.validators?.required()?.valid()}),this.dateExpedition=new i(()=>this.item().dateExpedition,t=>this.item().dateExpedition=t,t=>{this.dateExpedition.validators?.required()?.valid()}),this.rabais=new i(()=>this.item().rabais,t=>this.item().rabais=t||0,t=>{this.rabais.numberValidators?.required()?.valid()}),this.totalUnites=new i(()=>this.item().totalUnites,t=>this.item().totalUnites=t||0,t=>{this.totalUnites.numberValidators?.required()?.valid()}),this.remiseGlobal=new i(()=>this.item().remiseGlobal,t=>this.item().remiseGlobal=t||0,t=>{this.remiseGlobal.numberValidators?.required()?.valid()}),this.sousTotal=new i(()=>this.item().sousTotal,t=>this.item().sousTotal=t||0,t=>{this.sousTotal.numberValidators?.required()?.valid()}),this.total=new i(()=>this.item().total,t=>this.item().total=t||0,t=>{this.total.numberValidators?.required()?.valid()}),this.typeRabais=new i(()=>this.item().typeRabais,t=>this.item().typeRabais=t,t=>{this.typeRabais.validators?.errorIf(t==null,"Aucun  TypeRabais n'a \xE9t\xE9 fourni!")?.valid()}),this.taxe=new i(()=>this.item().taxe,t=>this.item().taxe=t,t=>{this.taxe.validators?.errorIf(t?.id==null,"Aucun  Taxe n'a \xE9t\xE9 fourni!")?.valid()}),this.client=new i(()=>this.item().client,t=>this.item().client=t,t=>{this.client.validators?.errorIf(t?.id==null,"Aucun Client n'a \xE9t\xE9 fourni!")?.valid()}),this.devises=new i(()=>this.item().devises,t=>this.item().devises=t,t=>{this.devises.validators?.errorIf(t?.id==null,"Aucun Devises n'a \xE9t\xE9 fourni!")?.valid()}),this.entreprise=new i(()=>this.item().entreprise,t=>this.item().entreprise=t,t=>{this.entreprise.validators?.errorIf(t?.id==null,"Aucune Entreprise n'a \xE9t\xE9 fournie!")?.valid()}),this.validatorItems=[this.code,this.dateExperation,this.dateExpedition,this.rabais,this.totalUnites,this.remiseGlobal,this.sousTotal,this.total,this.typeRabais,this.taxe,this.client,this.devises,this.entreprise]}getValidatorItem(t){return this[t]}static init(t){let e=new r;return e.item=t,e}setPaiement(t){return this.paiement=t,this.nested("paiement",t),this}};export{a};
