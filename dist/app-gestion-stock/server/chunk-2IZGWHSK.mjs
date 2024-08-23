import './polyfills.server.mjs';
import{a as p}from"./chunk-FO7JI6NW.mjs";import{a}from"./chunk-ENKAC57S.mjs";import{b as d}from"./chunk-OCP4HJ6B.mjs";import{aa as h,ga as n}from"./chunk-NYO24GET.mjs";var s=class{};var I=(()=>{let e=class e{constructor(){this.api=a.apiUrl+"commande",this.http=n(d),this.keepData=!1,this.toReturn=()=>this.returnUrl!=null}getNbCommandes(t){return this.http.get(`${this.api}/commandes/${t}`)}getCommandes(t){return this.http.get(`${this.api}/commandesErp/${t}`)}findAll(){return this.http.get(this.api)}findById(t){return this.http.get(`${this.api}/id/${t}`)}findAllOptimized(){return this.http.get(`${this.api}/optimized`)}findPaginated(t=0,i=10){return this.http.get(`${this.api}/paginated?page=${t}&size=${i}`)}create(){return this.http.post(this.api,this.item)}createList(){return this.http.post(`${this.api}/all`,this.items)}update(){return this.http.put(this.api,this.item)}updateList(){return this.http.put(`${this.api}/all`,this.items)}delete(t){return this.http.delete(this.api,{body:t})}deleteAll(t){return this.http.delete(this.api,{body:t})}deleteById(t){return this.http.delete(`${this.api}/id/${t}`)}deleteByFactureId(t){return this.http.delete(`${this.api}/facture/${t}`)}findByFactureId(t){return this.http.get(`${this.api}/facture/${t}`)}deleteByTaxeId(t){return this.http.delete(`${this.api}/taxe/${t}`)}findByTaxeId(t){return this.http.get(`${this.api}/taxe/${t}`)}deleteByTaxeExpeditionId(t){return this.http.delete(`${this.api}/taxeexpedition/${t}`)}findByTaxeExpeditionId(t){return this.http.get(`${this.api}/taxeexpedition/${t}`)}deleteByClientId(t){return this.http.delete(`${this.api}/client/${t}`)}findByClientId(t){return this.http.get(`${this.api}/client/${t}`)}deleteByDevisesId(t){return this.http.delete(`${this.api}/devises/${t}`)}findByDevisesId(t){return this.http.get(`${this.api}/devises/${t}`)}deleteByNiveauPrixId(t){return this.http.delete(`${this.api}/niveauPrix/${t}`)}findByNiveauPrixId(t){return this.http.get(`${this.api}/niveauPrix/${t}`)}deleteByAddressFacturationId(t){return this.http.delete(`${this.api}/addressfacturation/${t}`)}findByAddressFacturationId(t){return this.http.get(`${this.api}/addressfacturation/${t}`)}deleteByAddressExpeditionId(t){return this.http.delete(`${this.api}/addressexpedition/${t}`)}findByAddressExpeditionId(t){return this.http.get(`${this.api}/addressexpedition/${t}`)}deleteByEntrepriseId(t){return this.http.delete(`${this.api}/entreprise/${t}`)}findByEntrepriseId(t){return this.http.get(`${this.api}/entreprise/${t}`)}get itemIsNull(){return this._item==null}get items(){return this._items==null&&(this._items=[]),this._items}get pagination(){return this._pagination==null&&(this._pagination=new p),this._pagination}set pagination(t){this._pagination=t}set items(t){this._items=t}get item(){return this._item==null&&(this._item=new s),this._item}set item(t){this._item=t}get createdItemAfterReturn(){let t={item:this.item,created:this.toReturn()};return this.returnUrl="",this.item=new s,t}getNextCode(){return this.http.get(`${this.api}/next-code`)}commandeFacture(t,i){return this.http.put(this.api+"/idC/"+t+"/idF/"+i,null)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{s as a,I as b};
