import{a as o}from"./chunk-2BQUVQN4.js";import{a}from"./chunk-ROZ2NHZE.js";import{b as p}from"./chunk-LUIBGOM6.js";import{aa as n,ga as h}from"./chunk-BXK32XEB.js";var e=class{};var _=(()=>{let i=class i{constructor(){this.api=a.apiUrl+"methodepaiement",this.http=h(p),this.keepData=!1,this.toReturn=()=>this.returnUrl!=null}findAll(){return this.http.get(this.api)}findById(t){return this.http.get(`${this.api}/id/${t}`)}findByEntrepriseId(t){return this.http.get(`${this.api}/Entreprise/id/${t}`)}findAllOptimized(){return this.http.get(`${this.api}/optimized`)}findPaginated(t=0,r=10){return this.http.get(`${this.api}/paginated?page=${t}&size=${r}`)}create(t){return this.http.post(`${this.api}/${t}`,this.item)}createList(){return this.http.post(`${this.api}/all`,this.items)}update(){return this.http.put(this.api,this.item)}updateList(){return this.http.put(`${this.api}/all`,this.items)}delete(t){return this.http.delete(this.api,{body:t})}deleteAll(t){return this.http.delete(this.api,{body:t})}deleteById(t){return this.http.delete(`${this.api}/id/${t}`)}get itemIsNull(){return this._item==null}get items(){return this._items==null&&(this._items=[]),this._items}get pagination(){return this._pagination==null&&(this._pagination=new o),this._pagination}set pagination(t){this._pagination=t}set items(t){this._items=t}get item(){return this._item==null&&(this._item=new e),this._item}set item(t){this._item=t}get createdItemAfterReturn(){let t={item:this.item,created:this.toReturn()};return this.returnUrl="",this.item=new e,t}};i.\u0275fac=function(r){return new(r||i)},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{e as a,_ as b};
