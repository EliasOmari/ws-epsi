import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private httpClient: HttpClient) { }

  // getCookies(): Observable<any> {
  //   this.addLogWarn('Demande de Récuperation des cookies').subscribe();
  //   return this.httpClient.get('http://localhost:8000/cookie');
  // }
  //
  // addLogWarn(message: string): Observable<any> {
  //   return this.httpClient.get('http://localhost:8000/logger/warn?message='+message);
  // }
}
