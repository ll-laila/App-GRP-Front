import{a as s,b as i}from"./chunk-SR3OXJX3.js";var r=class a extends s{constructor(){super(...arguments),this.nom=new i(()=>this.item().nom,t=>this.item().nom=t,t=>{this.nom.stringValidators?.required()?.pattern(/^[a-zA-Z0-9]+$/,"Nom invalide, Veuillez entrer un nom contenant uniquement des lettres et/ou des chiffres")?.valid()}),this.actif=new i(()=>this.item().actif,t=>this.item().actif=t,t=>{this.actif.validators?.required()?.valid()}),this.type=new i(()=>this.item().type,t=>this.item().type=t,t=>{this.type.validators?.errorIf(t==null,"Aucun Type n'a \xE9t\xE9 fourni!")?.valid()}),this.validatorItems=[this.nom,this.actif,this.type]}getValidatorItem(t){return this[t]}static init(t){let e=new a;return e.item=t,e}};export{r as a};
