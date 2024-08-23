import {Component, inject} from '@angular/core';
import {DevisService} from "../../../../../controller/services/ventes/devis/devis.service";
import {Devis} from "../../../../../controller/entities/ventes/devis/devis";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-devis-pdf',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './devis-pdf.component.html',
  styleUrl: './devis-pdf.component.scss'
})
export class DevisPdfComponent {
  private devisService = inject(DevisService)
  public logo?:string;

  public set items(value:Devis[]) {
    this.devisService.items = value;
  }

  public get item(): Devis {
    return this.devisService.item;
  }

  public set item(value: Devis ) {
    this.devisService.item = value;
  }
  ngOnInit() {
    this.devisService.findById(this.item.id).subscribe({
      next: data => {
        this.devisService.item = data
        this.logo = data.entreprise?.logo;

      },
      error: err => console.log(err)
    })
  }

  imprimerDevis() {
    window.print();
  }
}
