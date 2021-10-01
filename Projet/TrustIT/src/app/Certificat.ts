import {formatDate} from "@angular/common";

export class Certificat {
  subjectName = '';
  certificatExiste= false;
  certificatValide= false;
  protocol='';
  validFrom= '';
  validTo= '';

  constructor() {
  }
}
