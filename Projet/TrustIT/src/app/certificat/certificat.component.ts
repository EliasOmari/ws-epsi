import {Component, Input, OnInit} from '@angular/core';
import {Certificat} from "../Certificat";

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent implements OnInit {
  @Input()
  certificat=new Certificat();
  color='';
  constructor() { }

  ngOnInit(): void {
    if(this.certificat.certificatExiste){
      this.color='green';
    }else{
      this.color='red';
    }
  }

  whenExpired(): string {
    let message='';
    if(this.certificat.certificatValide){
      message='Votre certificat est toujours en état de validité'
    }else{
      message="Votre certificat n'est alheuresement plus valide"
    }
    return message;
  }

}
