import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Pagination} from "src/app/controller/utils/pagination/pagination";
import { Taxe } from 'src/app/controller/entities/parametres/taxe';
import { TaxeValidator } from 'src/app/controller/validators/parametres/taxe.validator';
import {NiveauPrix} from "../../entities/parametres/niveau-prix";

@Injectable({ providedIn: 'root' })
export class TaxeService {
  private readonly api = environment.apiUrl + "taxe";
  private _item!: Taxe ;
  private _items!: Array<Taxe>;
  private _pagination!: Pagination<Taxe>

  private http = inject(HttpClient)

  public keepData: boolean = false
 public returnUrl!: string  ; public toReturn = () => this.returnUrl != undefined


  public findAll() {
    return this.http.get<Array<Taxe>>(this.api);
  }

  public findById(id: number) {
    return this.http.get<Taxe>(`${this.api}/id/${id}`);
  }

  public findAllOptimized() {
    return this.http.get<Array<Taxe>>(`${this.api}/optimized`);
  }

  public findPaginated(page: number = 0, size: number = 10) {
    return this.http.get<Pagination<Taxe>>(`${this.api}/paginated?page=${page}&size=${size}`);
  }

  public create() {
    return this.http.post<Taxe>(this.api, this.item);
  }

  public createList() {
    return this.http.post<Array<Taxe>>(`${this.api}/all`, this.items);
  }

  public update() {
    return this.http.put<Taxe>(this.api, this.item);
  }

  public updateList() {
    return this.http.put<Array<Taxe>>(`${this.api}/all`, this.items);
  }

  public delete(dto: Taxe) {
    return this.http.delete<number>(this.api, {body: dto});
  }

  public deleteAll(dtos: Array<Taxe>) {
    return this.http.delete<number>(this.api, {body: dtos});
  }

  public deleteById(id: number) {
    return this.http.delete<number>(`${this.api}/id/${id}`);
  }


    public findByEntrepriseId(id: number) {
        return this.http.get<Array<Taxe>>(`${this.api}/Entreprise/id/${id}`);
    }


    //------------- getters and setters -----------------------
  public get itemIsNull(): boolean {
    return this._item == undefined
  }

  public get items() {
    if (this._items == undefined)
      this._items = [];
    return this._items;
  }

  get pagination() {
    if (this._pagination == null)
      this._pagination = new Pagination();
    return this._pagination;
  }

  set pagination(value) {
    this._pagination = value;
  }

  public set items(value) {
    this._items = value;
  }

  public get item(): Taxe {
    if (this._item == null)
      this._item = new Taxe();
    return this._item;
  }

  public set item(value: Taxe ) {
    this._item = value;
  }

  public get createdItemAfterReturn() {
    let created = {
      item: this.item,
       created: this.toReturn()
    }
    this.returnUrl = ""
    this.item = new Taxe()

    return created
  }
}

