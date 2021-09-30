import {Component, Input, OnInit} from '@angular/core';
import {Cookie} from "../Cookie";

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  cookie = new Cookie();





}
