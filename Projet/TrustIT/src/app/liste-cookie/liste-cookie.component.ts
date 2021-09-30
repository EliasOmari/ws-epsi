import { Component, OnInit } from '@angular/core';
import {Cookie} from "../Cookie";
import {APIServiceService} from "../apiservice.service";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {TransfereService} from "../transfere.service";

@Component({
  selector: 'app-liste-cookie',
  templateUrl: './liste-cookie.component.html',
  styleUrls: ['./liste-cookie.component.css']
})
export class ListeCookieComponent implements OnInit {
  public cookies = [new Cookie()];
  constructor(private api: APIServiceService,private transfereService: TransfereService) { }
  url= this.transfereService.getData();
  value=this.transfereService.getData2();
  ngOnInit(): void {

    this.api.get(this.url,this.value).subscribe(
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
