import { Component, OnInit } from '@angular/core';
import {Cookie} from "../Cookie";
import {APIServiceService} from "../apiservice.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cookies = [new Cookie()];
}
