import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfereService {

  constructor() { }
  private data1: any;
  private data2: any;

  setData(data: any){
    this.data1 = data;
  }

  setData2(data: any, data2: any){
    this.data1 = data;
    this.data2 = data2;
  }

  getData(){
    let temp = this.data1;
    this.clearData();
    return temp;
  }
  getData2(){
    let temp = this.data2;
    this.clearData2();
    return temp;
  }

  clearData(){
    this.data1 = undefined;
  }
  clearData2(){
    this.data2 = undefined;
  }
}
