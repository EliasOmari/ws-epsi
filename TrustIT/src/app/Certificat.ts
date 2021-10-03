import {formatDate} from "@angular/common";

export class Certificat {
  _issuer = '';
  _subjectName='';
  certificatExiste= false;
  certificatValide= false;
  _protocol='';
  _validFrom= 0;
  _validTo=  0;

  constructor() {
  }
}
