import {Component, inject} from '@angular/core';
import {CommandeService} from "../../../../../controller/services/ventes/commande/commande.service";
import {Commande} from "../../../../../controller/entities/ventes/commande/commande";
import {DatePipe, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-commande-pdf',
  standalone: true,
    imports: [
        DatePipe,
        NgForOf
    ],
  templateUrl: './commande-pdf.component.html',
  styleUrl: './commande-pdf.component.scss'
})
export class CommandePdfComponent {
private commandeService = inject(CommandeService)
  public logo?:string;

  constructor(private router: Router) {}
  public set items(value:Commande[]) {
    this.commandeService.items = value;
  }

  public get item(): Commande {
    return this.commandeService.item;
  }

  public set item(value: Commande ) {
    this.commandeService.item = value;
  }
  ngOnInit() {
    this.commandeService.findById(this.item.id).subscribe({
      next: data => {
        this.commandeService.item = data
        console.log(this.commandeService.item);
        this.logo = data.entreprise?.logo;
      },
      error: err => console.log(err)
    })
  }


  imprimerFacture() {
    window.print();
  }

  goTofacture(){
    this.router.navigate(['/ventes/facture/facture/create']);
  }



}
