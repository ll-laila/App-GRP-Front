import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FactureService} from "../../../../../controller/services/ventes/facture/facture.service";
import {Facture} from "../../../../../controller/entities/ventes/facture/facture";
import {CommonModule} from "@angular/common";
import {PaiementService} from "../../../../../controller/services/ventes/paiement.service";
import {Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Paiement} from "../../../../../controller/entities/ventes/paiement";

import {AvatarComponent} from "@coreui/angular";
import {RetourProduitService} from "../../../../../controller/services/ventes/retourproduit/retour-produit.service";


@Component({
  selector: 'app-facture-pdf',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './facture-pdf.component.html',
  styleUrl: './facture-pdf.component.scss'
})
export class FacturePdfComponent {
  @ViewChild('invoiceModal') invoiceModal!: ElementRef;
  invoiceUrl?: SafeResourceUrl;
  private modalRef?: NgbModalRef;
  public logo?:string;

  private service = inject(PaiementService);

  constructor(
      private factureService: FactureService,
      private paiement: PaiementService,
      private retourproduit:RetourProduitService,
      private router: Router,
      private sanitizer: DomSanitizer,
      private modalService: NgbModal,

  ) {}
  public set items(value:Facture[]) {
    this.factureService.items= value;
  }

  public get item(): Facture {
    return this.factureService.item;
  }

  public set item(value: Facture ) {
    this.factureService.item = value;
  }

  imprimerFacture() {
    window.print();
  }

    effectuerPaiement() {
        this.paiement.returnUrl = this.router.url;
        this.factureService.keepData = true;

        // Vérifiez si un paiement existe déjà pour cette facture
        if (this.item.paiement && this.item.paiement.id) {
            console.log("paiement existe");
            const queryParams = {
                idPaiement: this.item.paiement.id, // Passez l'ID du paiement existant
                idFacture: this.item.id // Passez l'ID de la facture
            };
            this.router.navigate(['/ventes/paiement/update'], { queryParams }).then();
        } else {
            console.log("paiement existe pas ");
            const queryParams = {
                idFacture: this.item.id
            };
            this.router.navigate(['/ventes/paiement/create'], { queryParams }).then();
        }
    }


    retourProduit(){
        this.retourproduit.returnUrl = this.router.url;
        this.factureService.keepData = true;
        const queryParams = {
            idFacture: this.item.id,
        };
        this.router.navigate(['/ventes/retourproduit/retour-produit/create'], { queryParams }).then();
    }


    ngOnInit() {
    this.factureService.findById(this.item.id).subscribe({
        next: data => {
            this.factureService.item = data;
            this.service.findByIdFacture(this.item.id).subscribe({
                next: paiement => {
                    this.item.paiement = paiement;
                    console.log(this.item.paiement)
                },
                error: err => console.log(err)
            });
            this.logo = data.entreprise?.logo;
          console.log( this.item.id );
            console.log( this.item );

        },
        error: err => console.log(err)
    })
  }



}

