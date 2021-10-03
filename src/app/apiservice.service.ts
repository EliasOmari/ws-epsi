import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private httpClient: HttpClient) { }

  get2(url: string,option: number): Observable<any> {
    //this.addLogWarn('Demande de Récuperation de la recheche').subscribe();
    return this.httpClient.get('https://localhost:3000/recherche/');
  }

  get(url: string,options: number): Observable<any> {
    var a = { options: options, url: url};
    console.log(a);
    return this.httpClient.post('/recherche/',{ options: options, url: url });
  }


}
