import { Component, OnInit } from '@angular/core';
import {Cookie} from "../cookie";

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cookie = new Cookie();



}
