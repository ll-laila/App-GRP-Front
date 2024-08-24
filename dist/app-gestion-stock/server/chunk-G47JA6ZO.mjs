import './polyfills.server.mjs';
import{b as N,c as I,d as L,e as z,f as T,g as q,i as R,j as D,k as F,n as V}from"./chunk-ZDJMNRIQ.mjs";import{a as k}from"./chunk-ENKAC57S.mjs";import{b as j}from"./chunk-YCIOFEEA.mjs";import{Eb as g,Pb as e,Qb as t,Rb as u,Xd as E,Yb as w,_b as y,aa as b,ga as p,hc as n,ib as a,ic as h,jc as f,ka as P,nc as C,oc as _,pc as M,rc as S,xa as O,ya as x,yb as v}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";var W=(()=>{let i=class i{constructor(){this.api=k.apiUrl+"scrapper",this.http=p(j),this.keepData=!1,this.returnUrl="",this.toReturn=()=>this.returnUrl!=null}getPrices(l){return this.http.post(this.api,l)}};i.\u0275fac=function(c){return new(c||i)},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();function B(r,i){r&1&&(e(0,"div",44),u(1,"img",45),t())}function U(r,i){r&1&&(e(0,"div",46),n(1," La demande prend plus de temps que pr\xE9vu. Veuillez r\xE9essayer plus tard. "),t())}function G(r,i){r&1&&(e(0,"div",47),n(1," Aucun r\xE9sultat trouv\xE9 pour votre recherche. Veuillez essayer avec des crit\xE8res diff\xE9rents. "),t())}function H(r,i){if(r&1&&(e(0,"div")(1,"div",48)(2,"table",49)(3,"tbody"),u(4,"tr"),e(5,"tr")(6,"td")(7,"div",50)(8,"p",51)(9,"b"),n(10," Le produit : "),t()()()(),e(11,"td")(12,"div",50)(13,"p",51),n(14),t()()()(),e(15,"tr")(16,"td")(17,"div",50)(18,"p",51)(19,"b"),n(20," Le prix max sur le march\xE9 : "),t()()()(),e(21,"td")(22,"div")(23,"span",52),n(24),t()()()(),e(25,"tr")(26,"td")(27,"div",50)(28,"p",51)(29,"b"),n(30," Le prix min sur le march\xE9 : "),t()()()(),e(31,"td")(32,"div")(33,"span",53),n(34),t()()()(),e(35,"tr")(36,"td")(37,"div",50)(38,"p",51)(39,"b"),n(40,"Sources :"),t()()()(),e(41,"td")(42,"div",50)(43,"p",51),n(44),t()()()()()()()()),r&2){let m=y();a(14),h(m.product),a(10),f("",m.max_price," Dhs"),a(10),f("",m.min_price," Dhs"),a(10),h(m.sources)}}var ie=(()=>{let i=class i{constructor(){this.scrapperService=p(W),this.category="",this.productName="",this.max_price=0,this.min_price=0,this.sources="",this.product="",this.isLoading=!1,this.noResults=!1,this.timeoutMessage=!1}onSubmit(){console.log("Category:",this.category),console.log("Product Name:",this.productName);let l={productName:this.productName,categorie:this.category};this.isLoading=!0,this.noResults=!1,this.timeoutMessage=!1;let c=setTimeout(()=>{this.isLoading=!1,this.timeoutMessage=!0},12e4);this.scrapperService.getPrices(l).subscribe({next:o=>{clearTimeout(c),this.scrapperList=o,console.log("Scrapper List :",o),o.length>0?(this.product=this.productName,this.max_price=Math.max(...o.map(d=>d.prix??0)),this.min_price=Math.min(...o.map(d=>d.prix??1/0)),this.sources=o[0].source):this.noResults=!0,this.isLoading=!1},error:o=>{clearTimeout(c),console.log(o),this.isLoading=!1}})}};i.\u0275fac=function(c){return new(c||i)},i.\u0275cmp=P({type:i,selectors:[["app-compare"]],standalone:!0,features:[S],decls:64,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-lg-12","card-margin"],[1,"card","search-form"],[1,"card-body","p-0"],["id","search-form",3,"ngSubmit"],[1,"col-12"],[1,"row","no-gutters"],[1,"col-lg-3","col-md-3","col-sm-12","p-0"],["name","category","id","exampleFormControlSelect1",1,"form-control",2,"background-color","#f8f9fa","border-left","1px solid #e6e4e9","border-bottom","1px solid #e6e4e9","border-top","1px solid #e6e4e9","border-radius","8px 0 0 8px",3,"ngModelChange","ngModel"],["value",""],["value","informatique"],["value","electronique"],["value","sports-loisirs"],["value","terrasse-jardin-exterieur"],["value","telephone-tablette"],["value","jeux-et-jouets"],["value","fashion-mode"],["value","maison-cuisine-jardin"],["value","automobile-outils"],["value","beaute-hygiene-sante"],["value","bebe-puericulture"],["value","industriel-scientifique"],["value","livres-papeterie"],[1,"col-lg-8","col-md-6","col-sm-12","p-0"],["name","productName","type","text","placeholder","Nom du produit...","id","search",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-lg-1","col-md-3","col-sm-12","p-0"],["type","submit",1,"btn","btn-base"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-search"],["cx","11","cy","11","r","8"],["x1","21","y1","21","x2","16.65","y2","16.65"],[1,"card","card-margin"],[1,"card-body"],[1,"row","search-body"],[1,"col-lg-12"],[1,"search-result"],[1,"result-header"],[1,"col-lg-6"],[1,"records"],[1,"result-body"],["class","loadings pt-lg-5 p-lg-5",4,"ngIf"],["class","alert alert-warning",4,"ngIf"],["class","alert alert-info",4,"ngIf"],[4,"ngIf"],[1,"loadings","pt-lg-5","p-lg-5"],["src","assets/loading.svg","alt","loading"],[1,"alert","alert-warning"],[1,"alert","alert-info"],[1,"table-responsive"],[1,"table","widget-26"],[1,"widget-26-job-title"],[1,"type","m-0"],[1,"badge","badge-soft-danger"],[1,"badge","badge-soft-success"]],template:function(c,o){c&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"form",5),w("ngSubmit",function(){return o.onSubmit()}),e(6,"div",1)(7,"div",6)(8,"div",7)(9,"div",8)(10,"select",9),M("ngModelChange",function(s){return _(o.category,s)||(o.category=s),s}),e(11,"option",10),n(12,"Categorie"),t(),e(13,"option",11),n(14,"informatique"),t(),e(15,"option",12),n(16,"electronique"),t(),e(17,"option",13),n(18,"sports-loisirs"),t(),e(19,"option",14),n(20,"terrasse-jardin-exterieur"),t(),e(21,"option",15),n(22,"telephone-tablette"),t(),e(23,"option",16),n(24,"jeux-et-jouets"),t(),e(25,"option",17),n(26,"fashion-mode"),t(),e(27,"option",18),n(28,"maison-cuisine-jardin"),t(),e(29,"option",19),n(30,"automobile-outils"),t(),e(31,"option",20),n(32,"beaute-hygiene-sante"),t(),e(33,"option",21),n(34,"bebe-puericulture"),t(),e(35,"option",22),n(36,"industriel-scientifique"),t(),e(37,"option",23),n(38,"livres-papeterie"),t()()(),e(39,"div",24)(40,"input",25),M("ngModelChange",function(s){return _(o.productName,s)||(o.productName=s),s}),t()(),e(41,"div",26)(42,"button",27),O(),e(43,"svg",28),u(44,"circle",29)(45,"line",30),t()()()()()()()()()()(),x(),e(46,"div",1)(47,"div",6)(48,"div",31)(49,"div",32)(50,"div",33)(51,"div",34)(52,"div",35)(53,"div",36)(54,"div",1)(55,"div",37)(56,"div",38)(57,"b"),n(58,"R\xE9sultats :"),t()()()()(),e(59,"div",39),v(60,B,2,0,"div",40)(61,U,2,0,"div",41)(62,G,2,0,"div",42)(63,H,45,4,"div",43),t()()()()()()()()()),c&2&&(a(10),C("ngModel",o.category),a(30),C("ngModel",o.productName),a(20),g("ngIf",o.isLoading),a(),g("ngIf",o.timeoutMessage),a(),g("ngIf",o.noResults&&!o.isLoading),a(),g("ngIf",!o.isLoading&&!o.noResults&&!o.timeoutMessage))},dependencies:[V,q,D,F,N,R,I,L,T,z,E],styles:["body[_ngcontent-%COMP%]{background:#dcdcdc;margin-top:20px}.widget-26[_ngcontent-%COMP%]{color:#3c4142;font-weight:400}.widget-26[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]{border:0}.widget-26[_ngcontent-%COMP%]   .widget-26-job-emp-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%}.widget-26[_ngcontent-%COMP%]   .widget-26-job-title[_ngcontent-%COMP%]{min-width:200px}.widget-26[_ngcontent-%COMP%]   .widget-26-job-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400;font-size:.875rem;color:#3c4142;line-height:1.5}.widget-26[_ngcontent-%COMP%]   .widget-26-job-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#68cbd7;text-decoration:none}.widget-26[_ngcontent-%COMP%]   .widget-26-job-title[_ngcontent-%COMP%]   .employer-name[_ngcontent-%COMP%]{margin:0;line-height:1.5;font-weight:400;font-size:.8125rem;color:#3c4142}.widget-26[_ngcontent-%COMP%]   .widget-26-job-title[_ngcontent-%COMP%]   .employer-name[_ngcontent-%COMP%]:hover{color:#68cbd7;text-decoration:none}.widget-26[_ngcontent-%COMP%]   .widget-26-job-title[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:12px;font-weight:400}.widget-26[_ngcontent-%COMP%]   .widget-26-job-info[_ngcontent-%COMP%]{min-width:100px;font-weight:400}.widget-26[_ngcontent-%COMP%]   .widget-26-job-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.5;color:#3c4142;font-size:.8125rem}.widget-26[_ngcontent-%COMP%]   .widget-26-job-info[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{color:#3c4142}.widget-26[_ngcontent-%COMP%]   .widget-26-job-salary[_ngcontent-%COMP%]{min-width:70px;font-weight:400;color:#3c4142;font-size:.8125rem}.widget-26[_ngcontent-%COMP%]   .widget-26-job-category[_ngcontent-%COMP%]{padding:.5rem;display:inline-flex;white-space:nowrap;border-radius:15px}.widget-26[_ngcontent-%COMP%]   .widget-26-job-category[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{width:13px;height:13px;margin-right:.5rem;float:left;border-radius:50%}.widget-26[_ngcontent-%COMP%]   .widget-26-job-category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8125rem;color:#3c4142;font-weight:600}.widget-26[_ngcontent-%COMP%]   .widget-26-job-starred[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px;color:#fd8b2c}.widget-26[_ngcontent-%COMP%]   .widget-26-job-starred[_ngcontent-%COMP%]   svg.starred[_ngcontent-%COMP%]{fill:#fd8b2c}.bg-soft-base[_ngcontent-%COMP%]{background-color:#e1f5f7}.bg-soft-warning[_ngcontent-%COMP%]{background-color:#fff4e1}.bg-soft-success[_ngcontent-%COMP%]{background-color:#d1f6f2}.bg-soft-danger[_ngcontent-%COMP%]{background-color:#fedce0}.bg-soft-info[_ngcontent-%COMP%]{background-color:#d7efff}.search-form[_ngcontent-%COMP%]{width:80%;margin:0 auto;margin-top:1rem}.search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:transparent;border:0;display:block;width:100%;padding:1rem;height:100%;font-size:1rem}.search-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:transparent;border:0;padding:1rem;height:100%;font-size:1rem}.search-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{border:0}.search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:100%;width:100%;font-size:1rem}.search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;height:24px}.search-body[_ngcontent-%COMP%]{margin-bottom:1.5rem}.search-body[_ngcontent-%COMP%]   .search-filters[_ngcontent-%COMP%]   .filter-list[_ngcontent-%COMP%]{margin-bottom:1.3rem}.search-body[_ngcontent-%COMP%]   .search-filters[_ngcontent-%COMP%]   .filter-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#3c4142;margin-bottom:1rem}.search-body[_ngcontent-%COMP%]   .search-filters[_ngcontent-%COMP%]   .filter-list[_ngcontent-%COMP%]   .filter-text[_ngcontent-%COMP%]{color:#727686}.search-body[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]{margin-bottom:2rem}.search-body[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .records[_ngcontent-%COMP%]{color:#3c4142}.search-body[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]{text-align:right;display:flex;align-items:center;justify-content:space-between}.search-body[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .result-sorting[_ngcontent-%COMP%]{display:flex;align-items:center}.search-body[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .result-sorting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex-shrink:0;font-size:.8125rem}.search-body[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .result-sorting[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:#68cbd7}.search-body[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .result-sorting[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:#3c4142}@media (min-width: 768px) and (max-width: 991.98px){.search-body[_ngcontent-%COMP%]   .search-filters[_ngcontent-%COMP%]{display:flex}.search-body[_ngcontent-%COMP%]   .search-filters[_ngcontent-%COMP%]   .filter-list[_ngcontent-%COMP%]{margin-right:1rem}}@media (min-width: 992px){.col-lg-2[_ngcontent-%COMP%]{flex:0 0 16.66667%;max-width:16.66667%}}.card-margin[_ngcontent-%COMP%]{margin-bottom:1.875rem}.card[_ngcontent-%COMP%]{border:0;box-shadow:0 0 10px #523f691a;-webkit-box-shadow:0px 0px 10px 0px rgba(82,63,105,.1);-moz-box-shadow:0px 0px 10px 0px rgba(82,63,105,.1);-ms-box-shadow:0px 0px 10px 0px rgba(82,63,105,.1)}.card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #e6e4e9;border-radius:8px}.badge-soft-danger[_ngcontent-%COMP%]{color:#f56e6e!important;background-color:#f56e6e1a}.badge-soft-success[_ngcontent-%COMP%]{color:#63ad6f!important;background-color:#63ad6f1a}.loadings[_ngcontent-%COMP%]{margin-left:36%}"]});let r=i;return r})();export{ie as CompareComponent};
