import {Component, Input, OnInit} from '@angular/core';
import {Cookie} from "../Cookie";
import {TransfereService} from "../transfere.service";

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor(private transfere: TransfereService) { }

  ngOnInit(): void {
  }
  @Input()
  cookie = new Cookie();
  isSecure():string {
    let affichage;
    if (this.cookie.httpOnly) {
      affichage = 'Ce cookie utilise vos données sensible et est bien protégé';

    } else {
      affichage = 'Ce cookie ne garde pas de données sensible ou ne les protège pas...';
    }
    return affichage;
  }
  public warningCookie(): string{
    if (this.cookie.isExpire) {
      this.cookie.colorCarte = 'red';
    } else {
      if (!this.cookie.secure) {
        this.cookie.colorCarte = 'orange';
      } else {
        this.cookie.colorCarte = 'green';
      }
    }
    return this.cookie.colorCarte;
    this.transfere.setColor(this.cookie.colorCarte)
  }






}
