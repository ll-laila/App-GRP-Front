import{a as h}from"./chunk-2BQUVQN4.js";import{a as o}from"./chunk-ROZ2NHZE.js";import{b as a}from"./chunk-LUIBGOM6.js";import{aa as r,ga as s}from"./chunk-BXK32XEB.js";var e=class{};var I=(()=>{let i=class i{constructor(){this.api=o.apiUrl+"plan",this.http=s(a),this.keepData=!1,this.returnUrl="",this.toReturn=()=>this.returnUrl!=null}findById(t){return this.http.get(`${this.api}/plan/${t}`)}findAllPlans(){return this.http.get(`${this.api}/planList`)}get itemIsNull(){return this._item==null}get items(){return this._items==null&&(this._items=[]),this._items}get pagination(){return this._pagination==null&&(this._pagination=new h),this._pagination}set pagination(t){this._pagination=t}set items(t){this._items=t}get item(){return this._item==null&&(this._item=new e),this._item}set item(t){this._item=t}get createdItemAfterReturn(){let t={item:this.item,created:this.toReturn()};return this.returnUrl="",this.item=new e,t}};i.\u0275fac=function(m){return new(m||i)},i.\u0275prov=r({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();export{I as a};
