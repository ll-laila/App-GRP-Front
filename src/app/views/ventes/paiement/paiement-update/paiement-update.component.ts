import { Component, inject, Input } from '@angular/core';
import {
  FormSelectDirective, ColComponent, FormControlDirective,
  FormFloatingDirective, FormLabelDirective, RowComponent,
  CardComponent, CardBodyComponent, CardHeaderComponent, SpinnerComponent,
  InputGroupComponent, ButtonDirective, NavComponent, NavItemComponent,
  FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent
} from "@coreui/angular";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {IconDirective} from "@coreui/icons-angular";
import {NgTemplateOutlet} from "@angular/common";


import {PaiementService} from "src/app/controller/services/ventes/paiement.service";
import {Paiement} from "src/app/controller/entities/ventes/paiement";
import {PaiementValidator} from "src/app/controller/validators/ventes/paiement.validator";
import {MethodePaiementService} from "src/app/controller/services/parametres/methode-paiement.service";
import {MethodePaiement} from "src/app/controller/entities/parametres/methode-paiement";
import {EntrepriseService} from "src/app/controller/services/parametres/entreprise.service";
import {Entreprise} from "src/app/controller/entities/parametres/entreprise";
import {FactureService} from "../../../../controller/services/ventes/facture/facture.service";
import {RetourProduitService} from "../../../../controller/services/ventes/retourproduit/retour-produit.service";
import {DomSanitizer} from "@angular/platform-browser";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Facture} from "../../../../controller/entities/ventes/facture/facture";

@Component({
  selector: 'app-paiement-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,

  ],
  templateUrl: './paiement-update.component.html',
  styleUrl: './paiement-update.component.scss'
})
export class PaiementUpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Paiement) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: Paiement ) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: PaiementValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(PaiementService)
  private methodePaiementService = inject(MethodePaiementService)
  private entrepriseService = inject(EntrepriseService)
  private factureService =inject(FactureService)

  protected validator = PaiementValidator.init(() => this.item)

  protected methodePaiementList!: MethodePaiement[]
  protected entrepriseList!: Entreprise[]
  private route = inject(ActivatedRoute);




  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const idPaiement = params['idPaiement'];
      if (idPaiement) {
        this.service.findById(idPaiement).subscribe({
          next: (paiement) => {
            this.item = paiement;
            this.loadMethodePaiementList();
            this.loadEntrepriseList();
          },
          error: (err) => console.error(err)
        });
      }
    });
    if(this.service.keepData) {
      let methodePaiementCreated = this.methodePaiementService.createdItemAfterReturn;
      if (methodePaiementCreated.created) {
        this.item.methodePaiement = methodePaiementCreated.item
      }
    } else { this.validator.reset() }

    this.loadMethodePaiementList()
    this.loadEntrepriseList()
  }

 // ngAfterContentInit() {
   // if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/ventes/paiement"]).then()
  //}

  // LOAD DATA
  loadMethodePaiementList() {
    this.methodePaiementService.findAllOptimized().subscribe({
      next: data => this.methodePaiementList = data,
      error: err => console.log(err)
    })
  }
  loadEntrepriseList() {
    this.entrepriseService.findAllOptimized().subscribe({
      next: data => this.entrepriseList = data,
      error: err => console.log(err)
    })
  }

  calculPrixImpaye(): number {
    return this.item.montantRest- this.item.montantPaye;
  }

  // METHODS
  update() {
    this.item.montantRest=this.calculPrixImpaye();
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.update().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        this.router.navigate(["/ventes/paiement"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
      }
    })
  }

  reset() {
    this.resetting = true
    this.service.findById(this.item.id).subscribe({
      next: value => {
        this.item = value
        this.validator.reset()
        this.resetting = false
      },
      error: err => {
        console.log(err)
        this.resetting = false
      }
    })
  }

  // GETTERS AND SETTERS

  public get itemF(): Facture {
    return this.factureService.item;
  }
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): Paiement {
    return this.itemGetter();
  }

  public set item(value: Paiement ) {
    this.itemSetter(value);
  }

  private itemGetter(): Paiement {
    return this.service.item;
  }

  private itemSetter(value: Paiement ) {
    this.service.item = value;
  }

  public get methodePaiement(): MethodePaiement {
    if (this.item.methodePaiement == null)
      this.item.methodePaiement = new MethodePaiement()
    return this.item.methodePaiement;
  }
  public set methodePaiement(value: MethodePaiement ) {
    this.item.methodePaiement = value;
  }


  public get entreprise(): Entreprise {
    if (this.item.entreprise == null)
      this.item.entreprise = new Entreprise()
    return this.item.entreprise;
  }
  public set entreprise(value: Entreprise ) {
    this.item.entreprise = value;
  }



  public navigateToMethodePaiementCreate() {
    this.methodePaiementService.returnUrl = this.router.url
    this.router.navigate(['/parametres/methode-paiement/create']).then()
  }
  public navigateToEntrepriseCreate() {
    this.entrepriseService.returnUrl = this.router.url
    this.router.navigate(['/parametres/entreprise/create']).then()
  }
  cancel(){
    this.item = new Paiement();
  }
  retour(){
    this.router.navigate(['/pays/pays/list']).then()
  }
  ////
}
