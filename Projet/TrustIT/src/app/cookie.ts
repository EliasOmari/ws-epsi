export class Cookie {
  name = '';
  domain = '';
  expire = 0;
  secure = false;
  httpOnly = false;
  colorCarte = 0;
  isExpire = false;

  public warningCookie(): boolean{
    if (this.isExpire) {
      this.colorCarte = 1
    }
  }


}
