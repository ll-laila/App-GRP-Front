import './polyfills.server.mjs';
import{a as d}from"./chunk-FO7JI6NW.mjs";import{a}from"./chunk-ENKAC57S.mjs";import{b as p}from"./chunk-YCIOFEEA.mjs";import{aa as n,ga as h}from"./chunk-VWPO2VC4.mjs";var i=class{};var I=(()=>{let e=class e{constructor(){this.api=a.apiUrl+"livraison",this.http=h(p),this.keepData=!1,this.toReturn=()=>this.returnUrl!=null}findAll(){return this.http.get(this.api)}findById(t){return this.http.get(`${this.api}/id/${t}`)}getLivraisons(t){return this.http.get(`${this.api}/livraisonErp/${t}`)}findAllOptimized(){return this.http.get(`${this.api}/optimized`)}findPaginated(t=0,s=10){return this.http.get(`${this.api}/paginated?page=${t}&size=${s}`)}create(){return this.http.post(this.api,this.item)}createList(){return this.http.post(`${this.api}/all`,this.items)}update(){return this.http.put(this.api,this.item)}updateList(){return this.http.put(`${this.api}/all`,this.items)}delete(t){return this.http.delete(this.api,{body:t})}deleteAll(t){return this.http.delete(this.api,{body:t})}deleteById(t){return this.http.delete(`${this.api}/id/${t}`)}deleteByTaxeExpeditionId(t){return this.http.delete(`${this.api}/taxeexpedition/${t}`)}findByTaxeExpeditionId(t){return this.http.get(`${this.api}/taxeexpedition/${t}`)}deleteByFournisseurId(t){return this.http.delete(`${this.api}/fournisseur/${t}`)}findByFournisseurId(t){return this.http.get(`${this.api}/fournisseur/${t}`)}deleteByEntrepriseId(t){return this.http.delete(`${this.api}/entreprise/${t}`)}findByEntrepriseId(t){return this.http.get(`${this.api}/entreprise/${t}`)}get itemIsNull(){return this._item==null}get items(){return this._items==null&&(this._items=[]),this._items}get pagination(){return this._pagination==null&&(this._pagination=new d),this._pagination}set pagination(t){this._pagination=t}set items(t){this._items=t}get item(){return this._item==null&&(this._item=new i),this._item}set item(t){this._item=t}get createdItemAfterReturn(){let t={item:this.item,created:this.toReturn()};return this.returnUrl="",this.item=new i,t}getNextCode(){return this.http.get(`${this.api}/next-code`)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{i as a,I as b};
