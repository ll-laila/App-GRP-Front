import {Component, inject} from '@angular/core';
import {
  ButtonDirective, CardBodyComponent, CardComponent, ColComponent, ColDirective,
  NavComponent, NavItemComponent, PlaceholderAnimationDirective,
  RowComponent, SpinnerComponent, TableDirective, PlaceholderDirective,
  PageItemDirective, PageLinkDirective, PaginationComponent,
  DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective,
  ModalComponent, ModalToggleDirective, ModalHeaderComponent, ModalBodyComponent, TooltipDirective, ModalFooterComponent, PopoverDirective, ModalTitleDirective, ButtonCloseDirective,
} from "@coreui/angular";
import {FactureService} from "src/app/controller/services/ventes/facture/facture.service";
import {Facture} from "src/app/controller/entities/ventes/facture/facture";
import {Router, RouterLink} from "@angular/router";
import {IconDirective} from "@coreui/icons-angular";
import {generatePageNumbers, paginationSizes} from "src/app/controller/utils/pagination/pagination";
import {UserInfosService} from "../../../../../controller/shared/user-infos.service";
import {Employe} from "../../../../../controller/entities/contacts/user/employe";
import {EmployeService} from "../../../../../controller/services/contacts/user/employe.service";
import {TokenService} from "../../../../../controller/auth/services/token.service";
import {NgIf} from "@angular/common";
import {ToasterService} from "../../../../../toaster/controller/toaster.service";
import {EntrepriseSelectedService} from "../../../../../controller/shared/entreprise-selected.service";
import {EntrepriseService} from "../../../../../controller/services/parametres/entreprise.service";
import {Entreprise} from "../../../../../controller/entities/parametres/entreprise";


@Component({
  selector: 'app-facture-list',
  standalone: true,
  imports: [
    RowComponent, ColComponent, CardComponent, CardBodyComponent, TableDirective,
    ButtonDirective, RouterLink, IconDirective, IconDirective, NavComponent,
    NavItemComponent, SpinnerComponent, PlaceholderAnimationDirective, PlaceholderDirective,
    ColDirective, PageItemDirective, PageLinkDirective, PaginationComponent,
    DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective,
    ModalComponent, ModalToggleDirective, ModalHeaderComponent, ModalBodyComponent, TooltipDirective, ModalFooterComponent, PopoverDirective, ModalTitleDirective, ButtonCloseDirective, NgIf,
  ],
  templateUrl: './facture-list.component.html',
  styleUrl: './facture-list.component.scss'
})
export class FactureListComponent {
  protected loading = false
  protected paginating = false
  protected currentIndex: number  = 0
  protected deleteModel = false
  private toasterService = inject(ToasterService);
  private router = inject(Router);
  private entrepriseSelectedService = inject(EntrepriseSelectedService);
  private service = inject(FactureService);
  private serviceEmploye = inject(EmployeService);
  private entrepriseService = inject(EntrepriseService);
  private userInfosService = inject(UserInfosService);
  private tokenService = inject(TokenService);
  private employeService = inject(EmployeService);
  private employe: Employe = new Employe();
  public isEmploye: boolean = false;
  public addShow: boolean = false;
  public updateShow: boolean = false;
  public deleteShow: boolean = false;
  public a: boolean = false;
  public facturesList!: Facture[];


  ngOnInit() {
  // this.getPermissions();
  //  this.loadFacturesList();
    const newVar = this.tokenService.getRole()?.some(it => it == "ADMIN") ? 1 : 0;

    if (newVar == 1) {
      this.getFacturesForAdmin();
    } else {
      this.getFactureForEmploye();
    }
    this.getEmployeByUsername(this.userInfosService.getUsername());
  }


  public getEmployeByUsername(username: string) {
    this.serviceEmploye.findByUserName(username).subscribe(res => {
      this.employe.username = res.username;
      this.employe.email = res.email;
      this.employe.phone = res.phone;
      this.employe.enabled = res.enabled;
      this.employe.credentialsNonExpired = res.credentialsNonExpired;
      this.employe.accountNonExpired = res.accountNonExpired;
      this.employe.accountNonLocked = res.accountNonLocked;
      this.employe.password = res.password;
      this.employe.passwordChanged = res.passwordChanged;
      this.employe.confirmPassword = res.confirmPassword;
      this.employe.code = res.code;
      this.employe.nom = res.nom;
      this.employe.prenom = res.prenom;
      this.employe.telephone = res.telephone;
      this.employe.adresse = res.adresse;
      this.employe.destinataireEmploye = res.destinataireEmploye;
      this.employe.entreprise = res.entreprise;
      this.employe.entreprisesAdroitAcces = res.entreprisesAdroitAcces;
      this.employe.permissionsAcces = res.permissionsAcces;
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  getPermissions(){
    //permissions
    this.isEmploye = !!this.tokenService.getRole()?.some(it => it == "EMPLOYE");
    if(this.isEmploye) {
      // @ts-ignore
      this.employe.permissionsAcces.forEach(permission => {
        if (permission.nom == 'ajouter facture' && permission.etat == true &&
            (permission.entrepriseId === this.employe.entreprise?.id ||
                this.employe.entreprisesAdroitAcces?.some(entreprise => entreprise.id === permission.entrepriseId))) {
          this.addShow = true;
        }

      });

      // @ts-ignore
      this.employe.permissionsAcces.forEach(permission => {
        if (permission.nom == 'modifier facture' && permission.etat == true
            && permission.entrepriseId == this.employe.entreprise?.id &&
            (permission.entrepriseId === this.employe.entreprise?.id ||
                this.employe.entreprisesAdroitAcces?.some(entreprise => entreprise.id === permission.entrepriseId))
        ) {
          this.updateShow = true;
        }
      });

      // @ts-ignore
      this.employe.permissionsAcces.forEach(permission => {
        if (permission.nom == 'supprimer facture' && permission.etat == true &&
            (permission.entrepriseId === this.employe.entreprise?.id ||
                this.employe.entreprisesAdroitAcces?.some(entreprise => entreprise.id === permission.entrepriseId))
        ) {
          this.deleteShow = true;
        }
      });
    }
  }


  getFacturesForAdmin() {
    if (this.entrepriseSelectedService.getEntrepriseSelected() != 0) {
      this.service.getFactures(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({
        next: data => {
          this.facturesList = data;
          console.log("factures List :",data);
        },
        error: err => console.log(err)
      })
    } else {
      this.entrepriseService.findByAdmin(this.userInfosService.getUsername()).subscribe((res: Entreprise[]) => {
        console.log("Entreprises: ", res);
        if (res && res.length > 0) {
          this.service.getFactures(res[0].id).subscribe({
            next: data => {
              this.facturesList = data;
              console.log("factures List :",data);
            },
            error: err => console.log(err)
          })
        } else {
          console.log('Aucune facture trouvée.');
        }
      }, error => {
        console.log(error);
      });
    }
  }


  getFactureForEmploye() {
    if (this.entrepriseSelectedService.getEntrepriseSelected() != 0) {
      this.service.getFactures(this.entrepriseSelectedService.getEntrepriseSelected()).subscribe({
        next: data => {
          this.facturesList = data;
          console.log("factures List :",data);
        },
        error: err => console.log(err)
      })
    } else {
      this.employeService.findByUserName(this.userInfosService.getUsername()).subscribe((res: Employe) => {
        console.log("empId: ", res.id);
        this.entrepriseService.findEntreprisesAdroitAcces(res.id).subscribe((reslt: Entreprise[]) => {
          console.log("EntreprisesÀdroit: ", reslt);
          if (reslt && reslt.length > 0) {
            this.service.getFactures(reslt[0].id).subscribe({
              next: data => {
                this.facturesList = data;
                console.log("factures List :",data);
              },
              error: err => console.log(err)
            })
          } else {
            console.log('Aucune facture trouvée.');
          }
        }, error => {
          console.log(error);
        });
      }, error => {
        console.log(error);
      });
    }
  }








  public deletefacture(){
    this.service.deleteById(this.item.id).subscribe({
      next: value => {
        this.item = new Facture()
        this.currentIndex = -1
        this.deleteModel = false
        const newVar = this.tokenService.getRole()?.some(it => it == "ADMIN") ? 1 : 0;
        if (newVar == 1) {
          this.getFacturesForAdmin();
        } else {
          this.getFactureForEmploye();
        }
        },

      error: err => {
        console.log(err)
      }
    })

  }

  delete() {
    this.isEmploye = !!this.tokenService.getRole()?.some(it => it == "EMPLOYE");
    if(this.isEmploye){
      // @ts-ignore
      this.employe.permissionsAcces.forEach(permission => {
        if(permission.nom == 'supprimer facture' && permission.etat == true &&
            (permission.entrepriseId === this.employe.entreprise?.id ||
                this.employe.entreprisesAdroitAcces?.some(entreprise => entreprise.id === permission.entrepriseId))
        ){
          this.a = true;
        }
      });
      if(this.a){
        this.deletefacture();
      }else{
        this.router.navigate(["/ventes/facture/facture"]).then();
        this.toasterService.toast({message: "Vous n'avez pas le droit de supprimer une facture", color: "danger"});
      }
    } else{
      this.deletefacture();
    }
  }

  public navigateToPdfCreate() {
    this.service.keepData = true
    this.router.navigate(['/ventes/facture/facture/facturepdf']).then()
  }

  create(){
    this.isEmploye = !!this.tokenService.getRole()?.some(it => it == "EMPLOYE");
    if(this.isEmploye){
      // @ts-ignore
      this.employe.permissionsAcces.forEach(permission => {
        if(permission.nom == 'ajouter facture' && permission.etat == true &&
            (permission.entrepriseId === this.employe.entreprise?.id ||
                this.employe.entreprisesAdroitAcces?.some(entreprise => entreprise.id === permission.entrepriseId))        ){
          this.a = true;
        }
      });
      if(this.a){
        this.a = false;
        this.router.navigate(["/ventes/facture/facture/create"]).then();
      }else{
        this.router.navigate(["/ventes/facture/facture"]).then();
        this.toasterService.toast({message: "Vous n'avez pas le droit de créer une facture", color: "danger"});
      }
    } else{
      this.router.navigate(["/ventes/facture/facture/create"]).then();
    }
  }

  updateFacture(it: Facture){
    this.item = it;
    this.isEmploye = !!this.tokenService.getRole()?.some(it => it == "EMPLOYE");
    if(this.isEmploye){
      // @ts-ignore
      this.employe.permissionsAcces.forEach(permission => {
        if(permission.nom == 'modifier facture' && permission.etat == true
            && permission.entrepriseId == this.employe.entreprise?.id &&
            (permission.entrepriseId === this.employe.entreprise?.id ||
                this.employe.entreprisesAdroitAcces?.some(entreprise => entreprise.id === permission.entrepriseId))
        ){
          this.a = true;
        }
      });
      if(this.a){
        this.a = false;
        this.router.navigate(["/ventes/facture/facture/update"]).then();
      }else{
        this.router.navigate(["/ventes/facture/facture"]).then();
        this.toasterService.toast({message: "Vous n'avez pas le droit de modifier une facture", color: "danger"});
      }
    } else{
      this.router.navigate(["/ventes/facture/facture/update"]).then();
    }
  }


  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get pagination() {
    return this.service.paginationF;
  }

  public set pagination(value) {
    this.service.paginationF = value;
  }

  public get item(): Facture {
    return this.service.item;
  }

  public set item(value: Facture ) {
    this.service.item = value;
  }

  public get generatePageNumbers() {
    return generatePageNumbers(this.pagination)
  }
  /////
  protected readonly paginationSizes = paginationSizes;

}
