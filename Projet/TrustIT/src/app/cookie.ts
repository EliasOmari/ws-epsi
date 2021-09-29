export class Cookie {
  name = '';
  domain = '';
  expire = 0;
  secure = false;
  httpOnly = false;
  isExpire = false;
  colorCarte = '';


  public warningCookie(): void{
    if (this.isExpire) {
      this.colorCarte = 'red';
    } else {
      if (!this.secure) {
        this.colorCarte = 'orange';
      } else {
        this.colorCarte = 'white';
      }
    }
  }


}
