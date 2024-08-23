import{b as y}from"./chunk-3XG6BTFS.js";import"./chunk-2BQUVQN4.js";import"./chunk-RTZTBWEW.js";import"./chunk-H2QFYA5F.js";import{Cb as g,Nb as n,Nd as E,Ob as i,Pb as o,Wb as P,ab as f,bb as h,be as S,fb as l,fc as t,ga as v,gc as r,hc as p,ic as _,ka as x,kc as M,pc as O,sc as u,uc as b,wb as C}from"./chunk-4HLAVBW4.js";import"./chunk-RGL3W33T.js";function w(m,d){if(m&1&&(n(0,"tr")(1,"td"),t(2),i(),n(3,"td"),t(4),i(),n(5,"td"),t(6),i(),n(7,"td"),t(8),i(),n(9,"td"),t(10),i()()),m&2){let s=d.$implicit;l(2),r(s.id),l(2),r(s.produit==null?null:s.produit.nom),l(2),r(s.prix),l(2),r(s.quantite),l(2),r(s.total)}}var R=(()=>{let d=class d{constructor(){this.devisService=v(y)}set items(a){this.devisService.items=a}get item(){return this.devisService.item}set item(a){this.devisService.item=a}ngOnInit(){this.devisService.findById(this.item.id).subscribe({next:a=>{this.devisService.item=a,this.logo=a.entreprise?.logo},error:a=>console.log(a)})}imprimerDevis(){window.print()}};d.\u0275fac=function(c){return new(c||d)},d.\u0275cmp=x({type:d,selectors:[["app-devis-pdf"]],standalone:!0,features:[O],decls:96,vars:25,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href",h`https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css`,"integrity","sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ","crossorigin","anonymous"],[1,"button-panel"],[1,"btn","btn-secondary",3,"click"],[1,"pdf-container","p-3"],[1,"invoice"],[1,"row"],[1,"col-7"],["alt","Logo",2,"width","100px","padding-bottom","6px",3,"src"],[1,"col-5"],[1,"document-type","display-4"],[1,"row","address-section"],[1,"date-section"],[1,"table-responsive"],[1,"table","table-bordered"],[2,"width","70px"],[4,"ngFor","ngForOf"],["scope","row","colspan","4"],[1,"conditions"],[1,"bottom-page"]],template:function(c,e){c&1&&(n(0,"html",0)(1,"head"),o(2,"meta",1)(3,"meta",2),n(4,"title"),t(5,"Facture"),i(),o(6,"link",3),i(),n(7,"body")(8,"div",4)(9,"button",5),P("click",function(){return e.imprimerDevis()}),t(10,"Imprimer"),i()(),n(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9),o(15,"img",10),i(),n(16,"div",11)(17,"h1",12),t(18,"Devis"),i()()(),n(19,"div",13)(20,"div",9)(21,"p")(22,"strong"),t(23),i(),o(24,"br"),t(25),o(26,"br"),t(27),i()(),n(28,"div",11)(29,"p")(30,"strong"),t(31),i(),o(32,"br"),t(33),o(34,"br"),t(35),i()()(),n(36,"div",14)(37,"p"),t(38,"Date d'exp\xE9dition : "),n(39,"strong"),t(40),u(41,"date"),i()(),n(42,"p"),t(43,"Date d'expiration : "),n(44,"strong"),t(45),u(46,"date"),i()()(),n(47,"div",15)(48,"table",16)(49,"thead")(50,"tr")(51,"th",17),t(52,"#"),i(),n(53,"th"),t(54,"Produit"),i(),n(55,"th"),t(56,"Prix"),i(),n(57,"th"),t(58,"Quantit\xE9"),i(),n(59,"th"),t(60,"Total"),i()()(),n(61,"tbody"),C(62,w,11,5,"tr",18),n(63,"tr")(64,"th",19),t(65,"Sous Total"),i(),n(66,"td"),t(67),i()(),n(68,"tr")(69,"th",19),t(70,"Taxe"),i(),n(71,"td"),t(72),i()(),n(73,"tr")(74,"th",19),t(75,"Total"),i(),n(76,"td"),t(77),i()()()()(),n(78,"div",20),t(79," En votre aimable r\xE8glement"),o(80,"br"),t(81," Et avec nos remerciements."),o(82,"br")(83,"br"),t(84," Conditions de paiement : paiement \xE0 r\xE9ception de facture."),o(85,"br"),t(86," Aucun escompte consenti pour r\xE8glement anticip\xE9."),o(87,"br"),t(88," R\xE8glement par virement bancaire ou carte bancaire."),o(89,"br")(90,"br"),i(),n(91,"div",21),t(92),o(93,"br"),t(94),o(95,"br"),i()()()()()),c&2&&(l(15),g("src","data:image/png;base64,"+e.logo,f),l(8),r(e.item.entreprise==null?null:e.item.entreprise.nom),l(2),p(" ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.address1,""),l(2),p(" ",e.item.entreprise==null||e.item.entreprise.adresse==null||e.item.entreprise.adresse.pays==null?null:e.item.entreprise.adresse.pays.name," "),l(4),r(e.item.client==null?null:e.item.client.nom),l(2),p(" ",e.item.client==null||e.item.client.adresse==null?null:e.item.client.adresse.address1,""),l(2),p(" ",e.item.client==null||e.item.client.adresse==null||e.item.client.adresse.pays==null?null:e.item.client.adresse.pays.name," "),l(5),r(b(41,19,e.item.dateExpedition,"dd/MM/yyyy")),l(5),r(b(46,22,e.item.dateExperation,"dd/MM/yyyy")),l(17),g("ngForOf",e.item.devisProduit),l(5),r(e.item.sousTotal),l(5),r(e.item.taxe==null?null:e.item.taxe.tauxImposition),l(5),r(e.item.total),l(15),_(" ",e.item.entreprise==null?null:e.item.entreprise.nom," SARL - Email ",e.item.entreprise==null?null:e.item.entreprise.email,""),l(2),M(" ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.address1," - ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.city," ",e.item.entreprise==null?null:e.item.entreprise.telephone," - ",e.item.entreprise==null?null:e.item.entreprise.siteweb,""))},dependencies:[S,E],styles:[`body[_ngcontent-%COMP%] {
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
    }`]});let m=d;return m})();export{R as DevisPdfComponent};
