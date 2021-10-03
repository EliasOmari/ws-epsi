import { Component, OnInit } from '@angular/core';
import {APIServiceService} from "../apiservice.service";
import {Router} from "@angular/router";
import {TransfereService} from "../transfere.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router, private transfereService: TransfereService) { }
  ngOnInit(): void {
  }
  public url = '';
  public value = 0;
  options = [
    { id: 1, name: "Cookies" },
    { id: 2, name: "Certificats" }
  ];
  selectedOption = this.options[0].name;
  validURL(string: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(string);
  }
  onClick() {
    this.onValue();
    console.log(this.url);
    console.log(this.selectedOption);
    console.log(this.value);
    this.transfereService.setData2(this.url,this.value);
    if(this.value==1) {
      this.router.navigate(['/liste-cookie']);
    }else{
      this.router.navigate(['/certificat']);
    }
  }
  onValue(){
    if (this.selectedOption=== 'Cookies'){
      this.value=1;
    } else {
      this.value=2;
    }
  }
  selectOpt(event: Event) {
    this.selectedOption = ((event.target as HTMLSelectElement).value);
  }

}
