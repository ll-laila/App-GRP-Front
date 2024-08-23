import {Component, inject} from '@angular/core';
import {AppUserService} from "../../../../controller/auth/services/app-user.service";
import {AppUser} from "../../../../controller/auth/entities/app-user";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Entreprise} from "../../../../controller/entities/parametres/entreprise";
import {EntrepriseService} from "../../../../controller/services/parametres/entreprise.service";
import {SubscriptionService} from "../../../../controller/services/parametres/abonnement/subscription.service";
import {Subscription} from "../../../../controller/entities/parametres/abonnement/Subscription";
import {DatePipe, NgForOf} from "@angular/common";
import {ButtonDirective} from "@coreui/angular";

@Component({
  selector: 'app-details-user',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    ButtonDirective,
    RouterLink
  ],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.scss'
})
export class DetailsUserComponent {

  private _appUserService = inject(AppUserService);
  readonly router = inject(ActivatedRoute);
  private entrepriseService = inject(EntrepriseService);
  public subscriptionService = inject(SubscriptionService);

  public subscription: Subscription = new Subscription();
  public entreprises!: Entreprise[];
  protected admin!: AppUser;
  private id!: number;

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.id = +params['id'];
    });
    this.getAdminById(this.id);

  }

  getAdminById(id: number) {
    this._appUserService.findById(id).subscribe({
      next: (res) => {
        this.admin = res;
        console.log('Admin data:', this.admin);

        this.entrepriseService.findByAdmin(res.username).subscribe(res => {
          console.log("admin entreprises: ",res);
          this.entreprises = res;
        }, error => {
          console.log(error);
        });

        this.subscriptionService.findById(res.id).subscribe({
          next: (res) => {
            this.subscription = res;
            console.log('Subscription :', this.subscription);
          },
          error: (err) => {
            console.error('Error:', err);
          }
        });

      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
