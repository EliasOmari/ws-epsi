import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    //this.addLogWarn('Demande de Récuperation de la recheche').subscribe();
    return this.httpClient.get('127.0.0.1:3000/recherche/');
  }

}
