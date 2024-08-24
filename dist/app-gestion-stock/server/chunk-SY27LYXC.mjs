import './polyfills.server.mjs';
import{b as E}from"./chunk-JNCCIPDP.mjs";import{b as S}from"./chunk-FO7M7KBJ.mjs";import"./chunk-FO7JI6NW.mjs";import"./chunk-32WZQ4LQ.mjs";import{e as M}from"./chunk-GFB74FXC.mjs";import"./chunk-ISUWMF2A.mjs";import"./chunk-YCIOFEEA.mjs";import{Eb as g,Pb as i,Qb as n,Rb as r,Wd as O,Yb as x,db as f,eb as v,ga as u,hc as t,ib as o,ic as l,jc as p,ka as b,kc as C,mc as _,rc as P,yb as h}from"./chunk-VWPO2VC4.mjs";import"./chunk-XAJIYFV3.mjs";function y(d,m){if(d&1&&(i(0,"tr")(1,"td"),t(2),n(),i(3,"td"),t(4),n(),i(5,"td"),t(6),n(),i(7,"td"),t(8),n(),i(9,"td"),t(10),n(),i(11,"td"),t(12),n()()),d&2){let s=m.$implicit;o(2),l(s.id),o(2),l(s.produit==null?null:s.produit.nom),o(2),l(s.prix),o(2),l(s.quantite),o(2),l(s.total),o(2),l(s.produit==null||s.produit.taxe==null?null:s.produit.taxe.tauxImposition)}}var A=(()=>{let m=class m{constructor(){this.livraisonService=u(E),this.bonCommandeService=u(S),this.router=u(M)}set items(a){this.livraisonService.items=a}get item(){return this.livraisonService.item}set item(a){this.livraisonService.item=a}imprimerFacture(){window.print()}ngOnInit(){this.livraisonService.findById(this.item.id).subscribe({next:a=>{this.livraisonService.item=a,console.log(this.livraisonService.item),this.logo=a.entreprise?.logo},error:a=>console.log(a)})}};m.\u0275fac=function(c){return new(c||m)},m.\u0275cmp=b({type:m,selectors:[["app-livraison-pdf"]],standalone:!0,features:[P],decls:83,vars:16,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href",v`https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css`,"integrity","sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ","crossorigin","anonymous"],[1,"button-panel"],[1,"btn","btn-secondary",3,"click"],[1,"pdf-container","p-3"],[1,"invoice"],[1,"row"],[1,"col-7"],["alt","Logo",2,"width","100px","padding-bottom","6px",3,"src"],[1,"col-5"],[1,"document-type","display-4"],[1,"row","address-section"],[1,"table-responsive"],[1,"table","table-bordered"],[2,"width","70px"],[4,"ngFor","ngForOf"],["scope","row","colspan","4"],[1,"conditions"],[1,"bottom-page"]],template:function(c,e){c&1&&(i(0,"html",0)(1,"head"),r(2,"meta",1)(3,"meta",2),i(4,"title"),t(5,"Facture"),n(),r(6,"link",3),n(),i(7,"body")(8,"div",4)(9,"button",5),x("click",function(){return e.imprimerFacture()}),t(10,"Imprimer"),n()(),i(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9),r(15,"img",10),n(),i(16,"div",11)(17,"h1",12),t(18,"LIVRAISON"),n()()(),i(19,"div",13)(20,"div",9)(21,"p")(22,"strong"),t(23),n(),r(24,"br"),t(25),r(26,"br"),t(27),n()(),i(28,"div",11)(29,"p")(30,"strong"),t(31),n(),r(32,"br"),t(33),r(34,"br"),t(35),n()()(),i(36,"div",14)(37,"table",15)(38,"thead")(39,"tr")(40,"th",16),t(41,"#"),n(),i(42,"th"),t(43,"Produit"),n(),i(44,"th"),t(45,"Prix"),n(),i(46,"th"),t(47,"Quantit\xE9"),n(),i(48,"th"),t(49,"Total"),n()()(),i(50,"tbody"),h(51,y,13,6,"tr",17),i(52,"tr")(53,"th",18),t(54,"Sous Total"),n(),i(55,"td"),t(56),n()(),i(57,"tr")(58,"th",18),t(59,"Taxe"),n()(),i(60,"tr")(61,"th",18),t(62,"Total"),n(),i(63,"td"),t(64),n()()()()(),i(65,"div",19),t(66," En votre aimable r\xE8glement"),r(67,"br"),t(68," Et avec nos remerciements."),r(69,"br")(70,"br"),t(71," Conditions de paiement : paiement \xE0 r\xE9ception de facture."),r(72,"br"),t(73," Aucun escompte consenti pour r\xE8glement anticip\xE9."),r(74,"br"),t(75," R\xE8glement par virement bancaire ou carte bancaire."),r(76,"br")(77,"br"),n(),i(78,"div",20),t(79),r(80,"br"),t(81),r(82,"br"),n()()()()()),c&2&&(o(15),g("src","data:image/png;base64,"+e.logo,f),o(8),l(e.item.entreprise==null?null:e.item.entreprise.nom),o(2),p(" ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.address1,""),o(2),p(" ",e.item.entreprise==null||e.item.entreprise.adresse==null||e.item.entreprise.adresse.pays==null?null:e.item.entreprise.adresse.pays.name," "),o(4),l(e.item.fournisseur==null?null:e.item.fournisseur.nom),o(2),p(" ",e.item.fournisseur==null||e.item.fournisseur.adresse==null?null:e.item.fournisseur.adresse.address1,""),o(2),p(" ",e.item.fournisseur==null||e.item.fournisseur.adresse==null||e.item.fournisseur.adresse.pays==null?null:e.item.fournisseur.adresse.pays.name," "),o(16),g("ngForOf",e.item.livraisonProduit),o(5),l(e.item.sousTotal),o(8),l(e.item.total),o(15),C(" ",e.item.entreprise==null?null:e.item.entreprise.nom," SARL - Email ",e.item.entreprise==null?null:e.item.entreprise.email,""),o(2),_(" ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.address1," - ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.city," ",e.item.entreprise==null?null:e.item.entreprise.telephone," - ",e.item.entreprise==null?null:e.item.entreprise.siteweb,""))},dependencies:[O],styles:[`body[_ngcontent-%COMP%] {
      margin: 0;
      padding: 0;
      font-size: 1em;
      color: #333;
      display: flex;
    }
    .button-panel[_ngcontent-%COMP%] {
      width: 250px; 

      background: #f8f9fa;
      padding: 20px;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
    }
    .button-panel[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
      margin-bottom: 15px;
    }
    .pdf-container[_ngcontent-%COMP%] {
      flex: 1;
      padding: 20px;
      overflow: auto;
    }
    .invoice[_ngcontent-%COMP%] {
      background: #fff;
      padding: 20px;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      position: relative;
      min-height: 29.7cm; 

      width: 100%;
    }
    .logo[_ngcontent-%COMP%] {
      width: 100px;
    }
    .document-type[_ngcontent-%COMP%] {
      text-align: right;
      color: #444;
      margin-bottom: 20px;
    }
    .address-section[_ngcontent-%COMP%] {
      margin-bottom: 40px;
    }
    .address-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
      font-size: 1.2em;
    }
    .table[_ngcontent-%COMP%] {
      margin-bottom: 40px;
    }
    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
      background: #f9f9f9;
    }
    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
      padding: 15px;
      text-align: right;
    }
    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
      text-align: left;
    }
    .conditions[_ngcontent-%COMP%] {
      font-size: 0.9em;
      color: #666;
    }
    .bottom-page[_ngcontent-%COMP%] {
      font-size: 0.9em;
      text-align: right;
      color: #666;
      margin-top: 40px;
    }
    .date-section[_ngcontent-%COMP%] {
      margin-bottom: 20px;
      text-align: right;
    }
    .total-section[_ngcontent-%COMP%] {
      margin-top: 20px;
    }
    .total-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
      margin: 0;
      font-weight: 600;
    }

    .total-section[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%] {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    .total-section[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
      font-weight: bold;
    }

    .total-section[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {
      color: #28a745;
    }

    .table[_ngcontent-%COMP%]   .total-item-paid[_ngcontent-%COMP%] {
      color: #28a745;
      font-weight: bold;
    }

    .table[_ngcontent-%COMP%]   .total-item-unpaid[_ngcontent-%COMP%] {
      color: #dc3545;
      font-weight: bold;
    }

    

    @media print {
      .button-panel[_ngcontent-%COMP%], 
   .footer[_ngcontent-%COMP%] {
        display: none !important;
      }

      .pdf-container[_ngcontent-%COMP%] {
        margin: 0;
        padding: 0;
      }

      .invoice[_ngcontent-%COMP%] {
        box-shadow: none;
      }
    }`]});let d=m;return d})();export{A as LivraisonPdfComponent};
