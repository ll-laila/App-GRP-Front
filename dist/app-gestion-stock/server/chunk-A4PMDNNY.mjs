import './polyfills.server.mjs';
import{a as d}from"./chunk-FO7JI6NW.mjs";import{a}from"./chunk-ENKAC57S.mjs";import{b as p}from"./chunk-YCIOFEEA.mjs";import{aa as n,ga as h}from"./chunk-VWPO2VC4.mjs";var e=class{};var I=(()=>{let i=class i{constructor(){this.api=a.apiUrl+"commandeproduit",this.http=h(p),this.keepData=!1,this.toReturn=()=>this.returnUrl!=null}findAll(){return this.http.get(this.api)}findById(t){return this.http.get(`${this.api}/id/${t}`)}findAllOptimized(){return this.http.get(`${this.api}/optimized`)}findPaginated(t=0,s=10){return this.http.get(`${this.api}/paginated?page=${t}&size=${s}`)}create(){return this.http.post(this.api,this.item)}createList(){return this.http.post(`${this.api}/all`,this.items)}update(){return this.http.put(this.api,this.item)}updateList(){return this.http.put(`${this.api}/all`,this.items)}delete(t){return this.http.delete(this.api,{body:t})}deleteAll(t){return this.http.delete(this.api,{body:t})}deleteById(t){return this.http.delete(`${this.api}/id/${t}`)}deleteByProduitId(t){return this.http.delete(`${this.api}/produit/${t}`)}findByProduitId(t){return this.http.get(`${this.api}/produit/${t}`)}deleteByCommandeId(t){return this.http.delete(`${this.api}/commande/${t}`)}findByCommandeId(t){return this.http.get(`${this.api}/commande/${t}`)}get itemIsNull(){return this._item==null}get items(){return this._items==null&&(this._items=[]),this._items}get pagination(){return this._pagination==null&&(this._pagination=new d),this._pagination}set pagination(t){this._pagination=t}set items(t){this._items=t}get item(){return this._item==null&&(this._item=new e),this._item}set item(t){this._item=t}get createdItemAfterReturn(){let t={item:this.item,created:this.toReturn()};return this.returnUrl="",this.item=new e,t}getNextCode(){return this.http.get(`${this.api}/next-code`)}};i.\u0275fac=function(s){return new(s||i)},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();export{e as a,I as b};
