import { Component, OnInit } from '@angular/core';
import {Cookie} from "../Cookie";
import {APIServiceService} from "../apiservice.service";

@Component({
  selector: 'app-liste-cookie',
  templateUrl: './liste-cookie.component.html',
  styleUrls: ['./liste-cookie.component.css']
})
export class ListeCookieComponent implements OnInit {

  constructor(private api: APIServiceService) { }

  ngOnInit(): void {
  }
  public cookies = [new Cookie()];
}
