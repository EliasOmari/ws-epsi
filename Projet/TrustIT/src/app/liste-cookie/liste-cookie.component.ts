import { Component, OnInit } from '@angular/core';
import {Cookie} from "../Cookie";
import {APIServiceService} from "../apiservice.service";

@Component({
  selector: 'app-liste-cookie',
  templateUrl: './liste-cookie.component.html',
  styleUrls: ['./liste-cookie.component.css']
})
export class ListeCookieComponent implements OnInit {
  public cookies = [new Cookie()];
  constructor(private api: APIServiceService) { }

  ngOnInit(): void {
    this.api.get().subscribe(
    succes => this.onAppelReussi(succes),
      error => this.onAppelEchec(error)
    );
  }
  private onAppelReussi(succes: any) {
    this.cookies = succes;
  }

  private onAppelEchec(error: any) {
    this.cookies = error;
  }

}
