import './polyfills.server.mjs';
import{a as $,b as X}from"./chunk-JLVHC6GN.mjs";import{b as H}from"./chunk-ES2MRNLW.mjs";import{b as j}from"./chunk-P5M4VVBN.mjs";import{V as N,W as L,X as T,Y as A,Z as F,i as D,j as I}from"./chunk-NVRXDY5V.mjs";import"./chunk-XR27ODAI.mjs";import{c as E}from"./chunk-UR2QYS3H.mjs";import{a as B}from"./chunk-YN4AEEQH.mjs";import{b as G}from"./chunk-YBXQW75Z.mjs";import{a as R}from"./chunk-GAHSYCFE.mjs";import{a as U}from"./chunk-XWMWN5XG.mjs";import"./chunk-IIYCLNRC.mjs";import{b as Y,c as V}from"./chunk-FO7JI6NW.mjs";import"./chunk-ENKAC57S.mjs";import{f as z}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import"./chunk-YCIOFEEA.mjs";import{Eb as u,Mb as x,Nb as w,Ob as v,Pb as e,Qb as o,Rb as p,Vb as k,Yb as s,_b as M,eb as h,ga as c,hc as i,ib as g,ic as m,jc as y,ka as O,rc as S,va as b,wa as _,xa as C,ya as f}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";function q(d,a){if(d&1){let l=k();e(0,"tr")(1,"th"),i(2),o(),e(3,"td"),i(4),o(),e(5,"td"),i(6),o(),e(7,"td"),i(8),o(),e(9,"td")(10,"button",18),s("click",function(){b(l);let n=M();return _(n.item)}),C(),p(11,"svg",19),o(),f(),e(12,"button",20),s("click",function(){let n=b(l).$index,r=M();return r.currentIndex=n,_(r.deleteModel=!0)}),C(),p(13,"svg",21),o()()()}if(d&2){let l=a.$implicit;g(2),m(l.id),g(2),m(l.nom),g(2),m(l.sku),g(2),m(l.disponible)}}var It=(()=>{let a=class a{constructor(){this.loading=!1,this.paginating=!1,this.currentIndex=0,this.deleteModel=!1,this.produitList=[],this.service=c(X),this.produitService=c(H),this.entrepriseSelectedService=c(R),this.employeService=c(G),this.entrepriseService=c(j),this.userInfosService=c(U),this.tokenService=c(B),this.paginationSizes=Y}ngOnInit(){this.produit(),(this.tokenService.getRole()?.some(n=>n=="ADMIN")?1:0)==1?this.getStockForAdmin():this.getStockForEmploye()}getStockForAdmin(){this.entrepriseSelectedService.getEntrepriseSelected()!=0?this.service.getNiveauStock(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:t=>{this.niveauStockList=t,console.log("niveau Stock List :",t)},error:t=>console.log(t)}):this.entrepriseService.findByAdmin(this.userInfosService.getUsername()).subscribe(t=>{console.log("Entreprises: ",t),t&&t.length>0?this.service.getNiveauStock(t[0].id).subscribe({next:n=>{this.niveauStockList=n,console.log("niveau Stock List :",n)},error:n=>console.log(n)}):console.log("Aucune facture trouv\xE9e.")},t=>{console.log(t)})}getStockForEmploye(){this.entrepriseSelectedService.getEntrepriseSelected()!=0?this.service.getNiveauStock(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({next:t=>{this.niveauStockList=t,console.log("niveau Stock List :",t)},error:t=>console.log(t)}):this.employeService.findByUserName(this.userInfosService.getUsername()).subscribe(t=>{console.log("empId: ",t.id),this.entrepriseService.findEntreprisesAdroitAcces(t.id).subscribe(n=>{console.log("Entreprises\xC0droit: ",n),n&&n.length>0?this.service.getNiveauStock(n[0].id).subscribe({next:r=>{this.niveauStockList=r,console.log("niveau Stock List :",r)},error:r=>console.log(r)}):console.log("Aucune facture trouv\xE9e.")},n=>{console.log(n)})},t=>{console.log(t)})}delete(){this.service.deleteById(this.item.id).subscribe({next:t=>{this.item=new $,this.currentIndex=-1,this.deleteModel=!1,(this.tokenService.getRole()?.some(r=>r=="ADMIN")?1:0)==1?this.getStockForAdmin():this.getStockForEmploye()},error:t=>{console.log(t)}})}get items(){return this.service.items}set items(t){this.service.items=t}get pagination(){return this.produitService.pagination}set pagination(t){this.produitService.pagination=t}get item(){return this.produitService.item}set item(t){this.service.item=t}get generatePageNumbers(){return V(this.pagination)}set itemsP(t){this.produitService.items=t}get itemP(){return this.produitService.item}set itemP(t){this.produitService.item=t}produit(){this.produitService.findAll().subscribe({next:t=>{this.produitList=t},error:t=>console.log(t)})}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=O({type:a,selectors:[["app-niveau-stock-list"]],standalone:!0,features:[S],decls:40,vars:2,consts:[["href",h`https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700`,"rel","stylesheet"],[1,"row","pt-4"],[1,"col"],[1,"card","shadow-lg"],[1,"card-header","border-0"],[1,"mb-0"],[1,"table-responsive"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col"],[1,"footer"],[1,"row","align-items-center","justify-content-xl-between"],[1,"col-xl-6","m-auto","text-center"],["alignment","center","backdrop","static",3,"visible"],["cModalTitle",""],["cButtonClose","",3,"click"],["cButton","","color","secondary","variant","ghost",3,"click"],["cButton","","color","danger",3,"click"],["cButton","","color","","routerLink","update",3,"click"],["cIcon","","name","cil-pen","size","xl",2,"color","#61be04"],[3,"click"],["cIcon","","name","cil-trash","size","xl",2,"color","#ef0a34"]],template:function(n,r){n&1&&(p(0,"link",0),e(1,"body")(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h3",5),i(7,"Niveau de Stock"),o()(),e(8,"div",6)(9,"table",7)(10,"thead",8)(11,"tr")(12,"th",9),i(13,"No."),o(),e(14,"th",9),i(15,"Nom"),o(),e(16,"th",9),i(17,"Sku"),o(),e(18,"th",9),i(19,"Disponible"),o(),e(20,"th",9),i(21,"Actions"),o()()(),e(22,"tbody"),w(23,q,14,4,"tr",null,x),o()()()()()(),e(25,"footer",10)(26,"div",11),p(27,"div",12),o()()(),e(28,"c-modal",13)(29,"c-modal-header")(30,"h5",14),i(31,"Confirmation de suppression"),o(),e(32,"button",15),s("click",function(){return r.deleteModel=!1}),o()(),e(33,"c-modal-body"),i(34),o(),e(35,"c-modal-footer")(36,"button",16),s("click",function(){return r.deleteModel=!1}),i(37,"Fermer"),o(),e(38,"button",17),s("click",function(){return r.delete()}),i(39,"Supprimer"),o()()()),n&2&&(g(23),v(r.niveauStockList),g(5),u("visible",r.deleteModel),g(6),y(" \xCAtes-vous s\xFBr de vouloir supprimer (No. ",r.item.id,")? "))},dependencies:[D,z,E,F,T,N,L,A,I],styles:['[_ngcontent-%COMP%]:root{--blue: #5e72e4;--indigo: #5603ad;--purple: #8965e0;--pink: #f3a4b5;--red: #f5365c;--orange: #fb6340;--yellow: #ffd600;--green: #2dce89;--teal: #11cdef;--cyan: #2bffc6;--gray: #8898aa;--gray-dark: #32325d;--light: #ced4da;--lighter: #e9ecef;--primary: #5e72e4;--secondary: #f7fafc;--success: #2dce89;--info: #11cdef;--warning: #fb6340;--danger: #f5365c;--light: #adb5bd;--dark: #212529;--default: #172b4d;--white: #fff;--neutral: #fff;--darker: black;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: Open Sans, sans-serif;--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}@-ms-viewport{width:900px}figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], main[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}.table-responsive[_ngcontent-%COMP%]{max-height:500px;overflow-y:auto}.btnAddColor[_ngcontent-%COMP%]{background:linear-gradient(81.67deg,#053f7a,#0a0000)}body[_ngcontent-%COMP%]{font-family:Georgia,serif;font-size:1rem;font-weight:490;line-height:1.5;margin:0;text-align:left;color:#525f7f;background-color:#fff}[tabindex="-1"][_ngcontent-%COMP%]:focus{outline:0!important}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem}p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}dfn[_ngcontent-%COMP%]{font-style:italic}strong[_ngcontent-%COMP%]{font-weight:bolder}a[_ngcontent-%COMP%]{text-decoration:none;color:#5e72e4;background-color:transparent;-webkit-text-decoration-skip:objects}a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#233dd2}a[_ngcontent-%COMP%]:not([href]):not([tabindex]){text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus{outline:0}img[_ngcontent-%COMP%]{vertical-align:middle;border-style:none}table[_ngcontent-%COMP%]{border-collapse:collapse}caption[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem;caption-side:bottom;text-align:left;color:#8898aa}th[_ngcontent-%COMP%]{text-align:inherit}button[_ngcontent-%COMP%]{border-radius:0}button[_ngcontent-%COMP%]:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{padding:0;border-style:none}input[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}input[type=date][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%]{-webkit-appearance:listbox}legend[_ngcontent-%COMP%]{font-size:1.5rem;line-height:inherit;display:block;width:100%;max-width:100%;margin-bottom:.5rem;padding:0;white-space:normal;color:inherit}progress[_ngcontent-%COMP%]{vertical-align:baseline}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{outline-offset:-2px;-webkit-appearance:none}[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}[hidden][_ngcontent-%COMP%]{display:none!important}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#32325d}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.25rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.0625rem}.container[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px}@media (min-width: 576px){.container[_ngcontent-%COMP%]{max-width:540px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:720px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{max-width:960px}}@media (min-width: 1200px){.container[_ngcontent-%COMP%]{max-width:1140px}}.row[_ngcontent-%COMP%]{display:flex;margin-right:-15px;margin-left:-15px;flex-wrap:wrap}.col[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%]{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col[_ngcontent-%COMP%]{max-width:100%;flex-basis:0;flex-grow:1}@media (min-width: 1200px){.col-xl-6[_ngcontent-%COMP%]{max-width:50%;flex:0 0 50%}}.table[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem;background-color:transparent}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem;vertical-align:top;border-top:1px solid #e9ecef}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:bottom;border-bottom:2px solid #e9ecef}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] + tbody[_ngcontent-%COMP%]{border-top:2px solid #e9ecef}.table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{background-color:#f8f9fe}.table-dark[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{background-color:#c1c2c3}.table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#f8f9fe;border-color:#1f3a68;background-color:#172b4d}.table[_ngcontent-%COMP%]   .thead-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#8898aa;border-color:#e9ecef;background-color:#f6f9fc}.table-dark[_ngcontent-%COMP%]{color:#f8f9fe;background-color:#172b4d}.table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-color:#1f3a68}.table-responsive[_ngcontent-%COMP%]{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.btn[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;line-height:1.5;display:inline-block;padding:.625rem 1.25rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;text-align:center;vertical-align:middle;white-space:nowrap;border:1px solid transparent;border-radius:.375rem}@media screen and (prefers-reduced-motion: reduce){.btn[_ngcontent-%COMP%]{transition:none}}.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus{text-decoration:none}.btn[_ngcontent-%COMP%]:focus{outline:0;box-shadow:0 7px 14px #32325d1a,0 3px 6px #00000014}.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled{opacity:.65;box-shadow:none}.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active{box-shadow:none}a.btn.disabled[_ngcontent-%COMP%]{pointer-events:none}.btn-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.5;padding:.25rem .5rem;border-radius:.375rem}.dropdown[_ngcontent-%COMP%]{position:relative}.dropdown-menu[_ngcontent-%COMP%]{font-size:1rem;position:absolute;z-index:1000;top:100%;left:0;display:none;float:left;min-width:10rem;margin:.125rem 0 0;padding:.5rem 0;list-style:none;text-align:left;color:#525f7f;border:0 solid rgba(0,0,0,.15);border-radius:.4375rem;background-color:#fff;background-clip:padding-box;box-shadow:0 50px 100px #32325d1a,0 15px 35px #32325d26,0 5px 15px #0000001a}.dropdown-menu-right[_ngcontent-%COMP%]{right:0;left:auto}.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%]{right:auto;bottom:auto}.dropdown-item[_ngcontent-%COMP%]{font-weight:400;display:block;clear:both;width:100%;padding:.25rem 1.5rem;text-align:inherit;white-space:nowrap;color:#212529;border:0;background-color:transparent}.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus{text-decoration:none;color:#16181b;background-color:#f6f9fc}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{text-decoration:none;color:#fff;background-color:#5e72e4}.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled{color:#8898aa;background-color:transparent}.nav[_ngcontent-%COMP%]{display:flex;margin-bottom:0;padding-left:0;list-style:none;flex-wrap:wrap}.card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;background-color:#fff;background-clip:border-box}.card-header[_ngcontent-%COMP%]{margin-bottom:0;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(0,0,0,.05);background-color:#fff}.card-header[_ngcontent-%COMP%]:first-child{border-radius:calc(.375rem - 1px) calc(.375rem - 1px) 0 0}.card-footer[_ngcontent-%COMP%]{padding:1.25rem 1.5rem;border-top:1px solid rgba(0,0,0,.05);background-color:#fff}.card-footer[_ngcontent-%COMP%]:last-child{border-radius:0 0 calc(.375rem - 1px) calc(.375rem - 1px)}.pagination[_ngcontent-%COMP%]{display:flex;padding-left:0;list-style:none;border-radius:.375rem}.page-link[_ngcontent-%COMP%]{line-height:1.25;position:relative;display:block;margin-left:-1px;padding:.5rem .75rem;color:#8898aa;border:1px solid #dee2e6;background-color:#fff}.page-link[_ngcontent-%COMP%]:hover{z-index:2;text-decoration:none;color:#8898aa;border-color:#dee2e6;background-color:#dee2e6}.page-link[_ngcontent-%COMP%]:focus{z-index:2;outline:0;box-shadow:none}.page-link[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%]{margin-left:0;border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%]{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{z-index:1;color:#fff;border-color:#5e72e4;background-color:#5e72e4}.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{cursor:auto;pointer-events:none;color:#8898aa;border-color:#dee2e6;background-color:#fff}.badge[_ngcontent-%COMP%]{font-size:66%;font-weight:600;line-height:1;display:inline-block;padding:.35rem .375rem;text-align:center;vertical-align:baseline;white-space:nowrap;border-radius:.375rem}.badge[_ngcontent-%COMP%]:empty{display:none}.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:relative;top:-1px}@keyframes _ngcontent-%COMP%_progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress[_ngcontent-%COMP%]{font-size:.75rem;display:flex;overflow:hidden;height:1rem;border-radius:.375rem;background-color:#e9ecef;box-shadow:inset 0 .1rem .1rem #0000001a}.progress-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column;transition:width .6s ease;text-align:center;white-space:nowrap;color:#fff;background-color:#5e72e4;justify-content:center}@media screen and (prefers-reduced-motion: reduce){.progress-bar[_ngcontent-%COMP%]{transition:none}}.media[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.media-body[_ngcontent-%COMP%]{flex:1 1}.tooltip[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.875rem;font-weight:400;font-style:normal;line-height:1.5;position:absolute;z-index:1070;display:block;margin:0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:break-word;word-break:normal;opacity:0;text-shadow:none;line-break:auto}.tooltip.show[_ngcontent-%COMP%]{opacity:.9}.tooltip[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before{position:absolute;content:"";border-style:solid;border-color:transparent}.bs-tooltip-top[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=top][_ngcontent-%COMP%]{padding:.4rem 0}.bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=top][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{bottom:0}.bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before, .bs-tooltip-auto[x-placement^=top][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-right[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=right][_ngcontent-%COMP%]{padding:0 .4rem}.bs-tooltip-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=right][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{left:0;width:.4rem;height:.8rem}.bs-tooltip-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before, .bs-tooltip-auto[x-placement^=right][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-bottom[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=bottom][_ngcontent-%COMP%]{padding:.4rem 0}.bs-tooltip-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=bottom][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{top:0}.bs-tooltip-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before, .bs-tooltip-auto[x-placement^=bottom][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-left[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=left][_ngcontent-%COMP%]{padding:0 .4rem}.bs-tooltip-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=left][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{right:0;width:.4rem;height:.8rem}.bs-tooltip-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before, .bs-tooltip-auto[x-placement^=left][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner[_ngcontent-%COMP%]{max-width:200px;padding:.25rem .5rem;text-align:center;color:#fff;border-radius:.375rem;background-color:#000}.bg-success[_ngcontent-%COMP%]{background-color:#2dce89!important}a.bg-success[_ngcontent-%COMP%]:hover, a.bg-success[_ngcontent-%COMP%]:focus, button.bg-success[_ngcontent-%COMP%]:hover, button.bg-success[_ngcontent-%COMP%]:focus{background-color:#24a46d!important}.bg-info[_ngcontent-%COMP%]{background-color:#11cdef!important}a.bg-info[_ngcontent-%COMP%]:hover, a.bg-info[_ngcontent-%COMP%]:focus, button.bg-info[_ngcontent-%COMP%]:hover, button.bg-info[_ngcontent-%COMP%]:focus{background-color:#0da5c0!important}.bg-warning[_ngcontent-%COMP%]{background-color:#fb6340!important}a.bg-warning[_ngcontent-%COMP%]:hover, a.bg-warning[_ngcontent-%COMP%]:focus, button.bg-warning[_ngcontent-%COMP%]:hover, button.bg-warning[_ngcontent-%COMP%]:focus{background-color:#fa3a0e!important}.bg-danger[_ngcontent-%COMP%]{background-color:#f5365c!important}a.bg-danger[_ngcontent-%COMP%]:hover, a.bg-danger[_ngcontent-%COMP%]:focus, button.bg-danger[_ngcontent-%COMP%]:hover, button.bg-danger[_ngcontent-%COMP%]:focus{background-color:#ec0c38!important}.bg-default[_ngcontent-%COMP%]{background-color:#172b4d!important}a.bg-default[_ngcontent-%COMP%]:hover, a.bg-default[_ngcontent-%COMP%]:focus, button.bg-default[_ngcontent-%COMP%]:hover, button.bg-default[_ngcontent-%COMP%]:focus{background-color:#0b1526!important}.bg-transparent[_ngcontent-%COMP%]{background-color:transparent!important}.border-0[_ngcontent-%COMP%]{border:0!important}.rounded-circle[_ngcontent-%COMP%]{border-radius:50%!important}.d-flex[_ngcontent-%COMP%]{display:flex!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}@media (min-width: 1200px){.justify-content-xl-between[_ngcontent-%COMP%]{justify-content:space-between!important}}.sr-only[_ngcontent-%COMP%]{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;padding:0;white-space:nowrap;border:0}.shadow[_ngcontent-%COMP%]{box-shadow:0 0 2rem #8898aa26!important}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.mr-3[_ngcontent-%COMP%]{margin-right:1rem!important}.mr-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.mt-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mb-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mt-7[_ngcontent-%COMP%]{margin-top:6rem!important}.py-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.py-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.m-auto[_ngcontent-%COMP%]{margin:auto!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-light[_ngcontent-%COMP%]{color:#adb5bd!important}a.text-light[_ngcontent-%COMP%]:hover, a.text-light[_ngcontent-%COMP%]:focus{color:#919ca6!important}@media print{*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-shadow:none!important;text-shadow:none!important}a[_ngcontent-%COMP%]:not(.btn){text-decoration:underline}thead[_ngcontent-%COMP%]{display:table-header-group}tr[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{page-break-inside:avoid}p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{orphans:3;widows:3}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{page-break-after:avoid}@page{size:a3}body[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{min-width:992px!important}.badge[_ngcontent-%COMP%]{border:1px solid #000}.table[_ngcontent-%COMP%]{border-collapse:collapse!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff!important}.table-dark[_ngcontent-%COMP%]{color:inherit}.table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] + tbody[_ngcontent-%COMP%]{border-color:#e9ecef}.table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:inherit;border-color:#e9ecef}}figcaption[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{display:block}main[_ngcontent-%COMP%]{overflow:hidden}@keyframes _ngcontent-%COMP%_floating-lg{0%{transform:translateY(0)}50%{transform:translateY(15px)}to{transform:translateY(0)}}@keyframes _ngcontent-%COMP%_floating{0%{transform:translateY(0)}50%{transform:translateY(10px)}to{transform:translateY(0)}}@keyframes _ngcontent-%COMP%_floating-sm{0%{transform:translateY(0)}50%{transform:translateY(5px)}to{transform:translateY(0)}}[class*=shadow][_ngcontent-%COMP%]{transition:all .15s ease}.text-sm[_ngcontent-%COMP%]{font-size:.875rem!important}.text-white[_ngcontent-%COMP%]{color:#fff!important}a.text-white[_ngcontent-%COMP%]:hover, a.text-white[_ngcontent-%COMP%]:focus{color:#e6e6e6!important}.text-light[_ngcontent-%COMP%]{color:#ced4da!important}a.text-light[_ngcontent-%COMP%]:hover, a.text-light[_ngcontent-%COMP%]:focus{color:#b1bbc4!important}.avatar[_ngcontent-%COMP%]{font-size:1rem;display:inline-flex;width:48px;height:48px;color:#fff;border-radius:50%;background-color:#adb5bd;align-items:center;justify-content:center}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:50%}.avatar-sm[_ngcontent-%COMP%]{font-size:.875rem;width:36px;height:36px}.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{position:relative;z-index:2;border:2px solid #fff}.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover{z-index:3}.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] + .avatar[_ngcontent-%COMP%]{margin-left:-1rem}.badge[_ngcontent-%COMP%]{text-transform:uppercase}.badge[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:not(:first-child){margin-left:.5rem}.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:not(:last-child){margin-right:.5rem}.badge-dot[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;padding-right:0;padding-left:0;text-transform:none;background:transparent}.badge-dot[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#32325d}.badge-dot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:.375rem;height:.375rem;margin-right:.375rem;vertical-align:middle;border-radius:50%}.btn[_ngcontent-%COMP%]{font-size:.875rem;position:relative;transition:all .15s ease;letter-spacing:.025em;text-transform:none;will-change:transform}.btn[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 7px 14px #32325d1a,0 3px 6px #00000014}.btn[_ngcontent-%COMP%]:not(:last-child){margin-right:.5rem}.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:first-child){margin-left:.5rem}.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:last-child){margin-right:.5rem}.btn-sm[_ngcontent-%COMP%]{font-size:.75rem}[class*=btn-outline-][_ngcontent-%COMP%]{border-width:1px}.btn-icon-only[_ngcontent-%COMP%]{width:2.375rem;height:2.375rem;padding:0}a.btn-icon-only[_ngcontent-%COMP%]{line-height:2.5}.btn-icon-only.btn-sm[_ngcontent-%COMP%]{width:2rem;height:2rem}.main-content[_ngcontent-%COMP%]{position:relative}.dropdown[_ngcontent-%COMP%]{display:inline-block}.dropdown-menu[_ngcontent-%COMP%]{min-width:12rem}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{font-size:.875rem;padding:.5rem 1rem}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:1rem;margin-right:1rem;vertical-align:-17%}.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{line-height:1}.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8898aa}.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#172b4d!important}.footer[_ngcontent-%COMP%]{padding:2.5rem 0;background:#f7fafc}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{font-size:.875rem}@media (min-width: 768px){@keyframes show-navbar-dropdown{0%{transition:visibility .25s,opacity .25s,transform .25s;transform:translateY(10px) perspective(200px) rotateX(-2deg);opacity:0}to{transform:translate(0);opacity:1}}@keyframes hide-navbar-dropdown{0%{opacity:1}to{transform:translateY(10px);opacity:0}}}@keyframes _ngcontent-%COMP%_show-navbar-collapse{0%{transform:scale(.95);transform-origin:100% 0;opacity:0}to{transform:scale(1);opacity:1}}@keyframes _ngcontent-%COMP%_hide-navbar-collapse{0%{transform:scale(1);transform-origin:100% 0;opacity:1}to{transform:scale(.95);opacity:0}}.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{box-shadow:0 7px 14px #32325d1a,0 3px 6px #00000014}.page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%], .page-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem;display:flex;width:36px;height:36px;margin:0 3px;padding:0;border-radius:50%!important;align-items:center;justify-content:center}.progress[_ngcontent-%COMP%]{overflow:hidden;height:8px;margin-bottom:1rem;border-radius:.25rem;background-color:#e9ecef;box-shadow:inset 0 1px 2px #0000001a}.progress[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{font-size:13px;line-height:20px;left:0;clip:auto;width:auto;height:20px;margin:0 0 0 30px}.progress-bar[_ngcontent-%COMP%]{height:auto;border-radius:0;box-shadow:none}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:.65rem;padding-top:.75rem;padding-bottom:.75rem;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #e9ecef}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{width:120px;height:3px;margin:0}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:.8125rem;white-space:nowrap}.table.align-items-center[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table.align-items-center[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle}.table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#4d7bca;background-color:#1c345d}.table[_ngcontent-%COMP%]   .thead-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#8898aa;background-color:#f6f9fc}.table-flush[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-flush[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-right:0;border-left:0}.table-flush[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%], .table-flush[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]{border-top:0}.table-flush[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], .table-flush[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]{border-bottom:0}.card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{margin-bottom:0}.card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:1.5rem;padding-left:1.5rem}p[_ngcontent-%COMP%]{font-size:1rem;font-weight:300;line-height:1.7}@media (max-width: 768px){.btn[_ngcontent-%COMP%]{margin-bottom:10px}}']});let d=a;return d})();export{It as NiveauStockListComponent};
