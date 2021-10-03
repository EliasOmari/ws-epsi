import { Component, OnInit } from '@angular/core';
import {Cookie} from "../Cookie";
import {APIServiceService} from "../apiservice.service";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {TransfereService} from "../transfere.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-liste-cookie',
  templateUrl: './liste-cookie.component.html',
  styleUrls: ['./liste-cookie.component.css']
})
export class ListeCookieComponent implements OnInit {
  len=0;
  public cookies = [new Cookie()];
  constructor(private api: APIServiceService,
              private transfereService: TransfereService,
              private SpinnerService: NgxSpinnerService) { }
  url= this.transfereService.getData();
  value=this.transfereService.getData2();
  color= this.transfereService.getColor();
  ngOnInit(): void {
    this.SpinnerService.show();
    this.api.get(this.url,this.value).subscribe(
    succes => this.onAppelReussi(succes),
      error => this.onAppelEchec(error)
    );
  }
  private onAppelReussi(succes: any) {
    this.SpinnerService.hide()
    this.len= succes.length;
    console.log(this.len);
    this.cookies = succes.cookies;
    console.log(this.cookies.length)
    console.log(this.cookies);
  }

  private onAppelEchec(error: any) {
    this.SpinnerService.hide(),
    this.cookies = error;
  }

}
