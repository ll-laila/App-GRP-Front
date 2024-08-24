import{b as I}from"./chunk-75ATZRL7.js";import{d as w}from"./chunk-EVAI7AMW.js";import"./chunk-2BQUVQN4.js";import"./chunk-ROZ2NHZE.js";import"./chunk-VVDYSQS6.js";import"./chunk-LUIBGOM6.js";import{Cb as g,Nb as n,Nd as S,Ob as i,Pb as l,Wb as u,bb as h,be as y,cb as C,fc as t,ga as x,gb as o,gc as r,hb as _,hc as p,ic as M,ka as v,kc as O,pc as E,sc as b,uc as f,wb as P}from"./chunk-BXK32XEB.js";import"./chunk-RGL3W33T.js";function k(d,m){if(d&1&&(n(0,"tr")(1,"td"),t(2),i(),n(3,"td"),t(4),i(),n(5,"td"),t(6),i(),n(7,"td"),t(8),i(),n(9,"td"),t(10),i()()),d&2){let s=m.$implicit;o(2),r(s.id),o(2),r(s.produit==null?null:s.produit.nom),o(2),r(s.prix),o(2),r(s.quantite),o(2),r(s.total)}}var j=(()=>{let m=class m{constructor(a){this.router=a,this.commandeService=x(I)}set items(a){this.commandeService.items=a}get item(){return this.commandeService.item}set item(a){this.commandeService.item=a}ngOnInit(){this.commandeService.findById(this.item.id).subscribe({next:a=>{this.commandeService.item=a,console.log(this.commandeService.item),this.logo=a.entreprise?.logo},error:a=>console.log(a)})}imprimerFacture(){window.print()}goTofacture(){this.router.navigate(["/ventes/facture/facture/create"])}};m.\u0275fac=function(c){return new(c||m)(_(w))},m.\u0275cmp=v({type:m,selectors:[["app-commande-pdf"]],standalone:!0,features:[E],decls:98,vars:25,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href",C`https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css`,"integrity","sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ","crossorigin","anonymous"],[1,"button-panel"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-secondary",3,"click"],[1,"pdf-container","p-3"],[1,"invoice"],[1,"row"],[1,"col-7"],["alt","Logo",2,"width","100px","padding-bottom","6px",3,"src"],[1,"col-5"],[1,"document-type","display-4"],[1,"row","address-section"],[1,"date-section"],[1,"table-responsive"],[1,"table","table-bordered"],[2,"width","70px"],[4,"ngFor","ngForOf"],["scope","row","colspan","4"],[1,"conditions"],[1,"bottom-page"]],template:function(c,e){c&1&&(n(0,"html",0)(1,"head"),l(2,"meta",1)(3,"meta",2),n(4,"title"),t(5,"Facture"),i(),l(6,"link",3),i(),n(7,"body")(8,"div",4)(9,"button",5),u("click",function(){return e.goTofacture()}),t(10,"Passer Facture"),i(),n(11,"button",6),u("click",function(){return e.imprimerFacture()}),t(12,"Imprimer"),i()(),n(13,"div",7)(14,"div",8)(15,"div",9)(16,"div",10),l(17,"img",11),i(),n(18,"div",12)(19,"h1",13),t(20,"COMMANDE"),i()()(),n(21,"div",14)(22,"div",10)(23,"p")(24,"strong"),t(25),i(),l(26,"br"),t(27),l(28,"br"),t(29),i()(),n(30,"div",12)(31,"p")(32,"strong"),t(33),i(),l(34,"br"),t(35),l(36,"br"),t(37),i()()(),n(38,"div",15)(39,"p"),t(40,"Date d'exp\xE9dition : "),n(41,"strong"),t(42),b(43,"date"),i()(),n(44,"p"),t(45,"Date d'expiration : "),n(46,"strong"),t(47),b(48,"date"),i()()(),n(49,"div",16)(50,"table",17)(51,"thead")(52,"tr")(53,"th",18),t(54,"#"),i(),n(55,"th"),t(56,"Produit"),i(),n(57,"th"),t(58,"Prix"),i(),n(59,"th"),t(60,"Quantit\xE9"),i(),n(61,"th"),t(62,"Total"),i()()(),n(63,"tbody"),P(64,k,11,5,"tr",19),n(65,"tr")(66,"th",20),t(67,"Sous Total"),i(),n(68,"td"),t(69),i()(),n(70,"tr")(71,"th",20),t(72,"Taxe"),i(),n(73,"td"),t(74),i()(),n(75,"tr")(76,"th",20),t(77,"Total"),i(),n(78,"td"),t(79),i()()()()(),n(80,"div",21),t(81," En votre aimable r\xE8glement"),l(82,"br"),t(83," Et avec nos remerciements."),l(84,"br")(85,"br"),t(86," Conditions de paiement : paiement \xE0 r\xE9ception de facture."),l(87,"br"),t(88," Aucun escompte consenti pour r\xE8glement anticip\xE9."),l(89,"br"),t(90," R\xE8glement par virement bancaire ou carte bancaire."),l(91,"br")(92,"br"),i(),n(93,"div",22),t(94),l(95,"br"),t(96),l(97,"br"),i()()()()()),c&2&&(o(17),g("src","data:image/png;base64,"+e.logo,h),o(8),r(e.item.entreprise==null?null:e.item.entreprise.nom),o(2),p(" ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.address1,""),o(2),p(" ",e.item.entreprise==null||e.item.entreprise.adresse==null||e.item.entreprise.adresse.pays==null?null:e.item.entreprise.adresse.pays.name," "),o(4),r(e.item.client==null?null:e.item.client.nom),o(2),p(" ",e.item.client==null||e.item.client.adresse==null?null:e.item.client.adresse.address1,""),o(2),p(" ",e.item.client==null||e.item.client.adresse==null||e.item.client.adresse.pays==null?null:e.item.client.adresse.pays.name," "),o(5),r(f(43,19,e.item.dateExpedition,"dd/MM/yyyy")),o(5),r(f(48,22,e.item.dateExperation,"dd/MM/yyyy")),o(17),g("ngForOf",e.item.commandeProduit),o(5),r(e.item.sousTotal),o(5),r(e.item.taxe==null?null:e.item.taxe.tauxImposition),o(5),r(e.item.total),o(15),M(" ",e.item.entreprise==null?null:e.item.entreprise.nom," SARL - Email ",e.item.entreprise==null?null:e.item.entreprise.email,""),o(2),O(" ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.address1," - ",e.item.entreprise==null||e.item.entreprise.adresse==null?null:e.item.entreprise.adresse.city," ",e.item.entreprise==null?null:e.item.entreprise.telephone," - ",e.item.entreprise==null?null:e.item.entreprise.siteweb,""))},dependencies:[y,S],styles:[`body[_ngcontent-%COMP%] {
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
    }`]});let d=m;return d})();export{j as CommandePdfComponent};
