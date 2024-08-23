import {Component, inject} from '@angular/core';
import {NgIf} from "@angular/common";
import {AppUserService} from "../../../controller/auth/services/app-user.service";
import {AppUser} from "../../../controller/auth/entities/app-user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-support',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {

  private appUserService = inject(AppUserService);
  readonly router = inject(Router);

  public adminsList!: Array<AppUser>;


  ngOnInit() {
    this.loadAdminsList();
  }


  loadAdminsList() {
    this.appUserService.findAllAdmin().subscribe({
      next: data => {
        this.adminsList = data.filter(user => !user.isSupperAdmin);
        console.log("Admins List :",data);
      },
      error: err => console.log(err)
    })
  }


  getDetails(id: number){
    this.router.navigate(['/detailsUser'], { queryParams: { id: id } }).then();
  }

}
