import {Component, Input, OnInit} from '@angular/core';
import {Certificat} from "../Certificat";
import {APIServiceService} from "../apiservice.service";
import {TransfereService} from "../transfere.service";

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent implements OnInit {
  @Input()
  certificat=new Certificat();
  color='';
  len=0;
  constructor(private api: APIServiceService, private transfereService: TransfereService) { }

  url= this.transfereService.getData();
  value=this.transfereService.getData2();
  ngOnInit(): void {
    if(this.certificat.certificatExiste){
      this.color='green';
    }else{
      this.color='red';
    }

    this.api.get(this.url,this.value).subscribe(
      succes => this.onAppelReussi(succes),
      error => this.onAppelEchec(error));
  }
  changeDate(dateUnix: number) {
    let d = new Date(dateUnix * 1000);
    return d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
  }

  private onAppelReussi(succes: any) {
    this.len= succes.length;
    console.log(this.len);
    this.certificat = succes.securityDetails;
  }

  private onAppelEchec(error: any) {
    this.certificat = error;
  }
  whenExpired(): string {
    let message='';
    if(this.certificat._validTo > this.certificat._validFrom){
      message='Votre certificat est toujours en état de validité'
    }else{
      message="Votre certificat n'est malheuresement plus valide"
    }
    return message;
  }

}
