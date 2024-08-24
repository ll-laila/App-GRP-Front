import './polyfills.server.mjs';
var u=Object.defineProperty,s=(t,r)=>{for(var e in r)u(t,e,{get:r[e],enumerable:!0})},m=class{item;nestedValidators;getValidatorItems(){return this.validatorItems}get allGood(){return this.validatorItems?.every(t=>t.valid)}applyAll(){this.validatorItems?.forEach(t=>t.validate())}reset(){this.validatorItems?.forEach(t=>t.reset()),this.nestedValidators?.forEach(t=>t.validator.reset())}validate(){let t=[this,...this.nestedValidators?this.nestedValidators.map(r=>r.validator):[]];return t.forEach(r=>r.applyAll()),t.every(r=>r.allGood)}nested(t,r){this.nestedValidators==null&&(this.nestedValidators=[]),this.nestedValidators.push({name:t,validator:r})}import(t){t.forEach(r=>{let e=this.getValidatorItem(r.field);if(e==null)throw new Error(`Unknown validatorItem ${r.field} for ${Object.getPrototypeOf(this).constructor.name}!`);e.valid=r.valid,e.message=r.message,e.setter(r.value)})}},n={};s(n,{AnyValidators:()=>a,BaseValidator:()=>i,NumberValidator:()=>o,StringValidator:()=>h,ValidatorsCollector:()=>v});var i=class{validatorItem;constructor(t){this.validatorItem=t}get value(){return this.validatorItem.field()}error(t){this.validatorItem.error(t)}valid(){this.validatorItem.valid=!0,this.validatorItem.message=void 0}baseCondition(t,r,e){if(t){this.error(r);return}return e}},a=class extends i{constructor(t){super(t)}required(t=void 0){return this.errorIf(this.value==null||this.value=="",t||"This field is required!")}errorIf(t,r){return super.baseCondition(t,r,this)}},o=class extends i{constructor(t){super(t)}required(t=void 0){return this.errorIf(this.value==null,t||"This field is required!")}gt(t,r=void 0){return this.value==null?this:this.errorIf(this.value<=t,r||`Must be greeter then '${t}'!`)}gte(t,r=void 0){return this.value==null?this:this.errorIf(this.value<t,r||`Must be greeter then or equals '${t}'!`)}lt(t,r=void 0){return this.value==null?this:this.errorIf(this.value<=t,r||`Must be less then '${t}'!`)}lte(t,r=void 0){return this.value==null?this:this.errorIf(this.value<t,r||`Must be less then or equals '${t}'!`)}multipleOf(t,r=void 0){return this.value==null?this:this.errorIf(this.value%t!=0,r||`Must be multiple of '${t}'!`)}safe(t=void 0){return this.value==null?this:this.errorIf(this.value>=Number.MIN_SAFE_INTEGER&&this.value<=Number.MAX_SAFE_INTEGER,t||`value must be between '${Number.MIN_SAFE_INTEGER}' and '${Number.MAX_SAFE_INTEGER}'!`)}positive(t=void 0){return this.value==null?this:this.errorIf(this.value<0,t||"This Field Must be positive!")}negative(t=void 0){return this.value==null?this:this.errorIf(this.value>0,t||"This Field Must be Negative!")}errorIf(t,r){return super.baseCondition(t,r,this)}},f={};s(f,{EMAIL_PATTERN:()=>d,PHONE_PATTERN:()=>l});var d=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,l=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,h=class extends i{constructor(t){super(t)}required(t=void 0){return this.errorIf(this.value==null||this.value=="",t||"This field is required!")}max(t,r=void 0){return this.value==null?this:this.errorIf(this.value.length>t,r||`Must be ${t} or fewer characters long`)}min(t,r=void 0){return this.value==null?this:this.errorIf(this.value.length<t,r||`Must be ${t} or more characters long`)}length(t,r=void 0){return this.value==null?this:this.errorIf(this.value.length==t,r||`Must be exactly ${t} characters long`)}includes(t,r=void 0){return this.value==null?this:this.errorIf(this.value.includes(t),r||`Must Include '${t}'`)}startsWith(t,r=void 0){return this.value==null?this:this.errorIf(this.value.startsWith(t),r||`Must Start With '${t}'`)}endsWith(t,r=void 0){return this.value==null?this:this.errorIf(this.value.endsWith(t),r||`Must End With '${t}'`)}email(t=void 0){return this.pattern(d,t||"Invalid email address!")}phone(t=void 0){return this.pattern(l,t||"Invalid phone number!")}pattern(t,r){return this.value==null?this:this.errorIf(!t.test(this.value),r)}errorIf(t,r){return super.baseCondition(t,r,this)}},v=class{value;_validators;get validators(){return this._validators==null&&(this._validators=new a(this)),this._validators}_stringValidators;get stringValidators(){return this.checkType("string"),this._stringValidators==null&&(this._stringValidators=new h(this)),this._stringValidators}_numberValidators;get numberValidators(){return this.value!=null&&isNaN(parseInt(this.value))&&this.typeError("number"),this._numberValidators==null&&(this._numberValidators=new o(this)),this._numberValidators}checkType(t){this.value!=null&&typeof this.value!=t&&this.typeError(t)}typeError(t){throw new Error(`Can not access the ${t} validator from non ${t} ValidatorItem`)}},I=class extends v{constructor(t,r,e=void 0){super(),this.field=t,this.setter=r,e!=null&&(this.validations=e)}valid=void 0;message=void 0;field;setter;validate(){this.value=this.field(),this.validations(this.field())}validations=t=>{this.valid=t!=null,t==null&&(this.message="No Value Passed!")};reset(){this.valid=void 0,this.message=void 0}error(t){this.valid=!1,this.message=t}};export{m as a,I as b};
