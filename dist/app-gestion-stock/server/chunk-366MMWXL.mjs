import './polyfills.server.mjs';
import{a as n}from"./chunk-IIYCLNRC.mjs";import{a as p}from"./chunk-32WZQ4LQ.mjs";import{b as h}from"./chunk-YCIOFEEA.mjs";import{aa as s,ga as r}from"./chunk-VWPO2VC4.mjs";var c=(()=>{let i=class i{constructor(){this.api=p.apiUrl+"app-user",this.http=r(h)}findAll(){return this.http.get(this.api)}getDaysRemaining(t){return this.http.get(`${this.api}/essai/${t}`)}findById(t){return this.http.get(`${this.api}/id/${t}`)}findByUsernameWithRoles(t){return this.http.get(`${this.api}/username/${t}`)}findAllAdmin(){return this.http.get(`${this.api}/admins`)}findByUsername(t){return this.http.get(`${this.api}/admin/${t}`)}deleteById(t){return this.http.delete(`${this.api}/id/${t}`)}deleteByUsername(t){return this.http.delete(`${this.api}/username/${t}`)}create(){return this.http.post(this.api,this.item)}update(){return this.http.put(this.api,this.item)}delete(t){return this.http.delete(this.api,{body:t})}get item(){return this._item==null&&(this._item=new n),this._item}set item(t){this._item=t}get items(){return this._items==null&&(this._items=[]),this._items}set items(t){this._items=t}};i.\u0275fac=function(a){return new(a||i)},i.\u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();export{c as a};
