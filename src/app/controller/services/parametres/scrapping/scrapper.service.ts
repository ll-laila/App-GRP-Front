import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Scrapper} from "../../../entities/parametres/scrapping/Scrapper";
import {ScrapperRequest} from "../../../entities/parametres/scrapping/ScrapperRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrapperService {

  private readonly api = environment.apiUrl + "scrapper";
  private http = inject(HttpClient)
  public keepData: boolean = false
  public returnUrl: string  = ''

  public toReturn = () => this.returnUrl != undefined;

  constructor() { }

  getPrices(request: ScrapperRequest): Observable<Scrapper[]> {
    return this.http.post<Scrapper[]>(this.api, request);
  }
}
