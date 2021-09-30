import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeCookieComponent} from "./liste-cookie/liste-cookie.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  {path: 'liste-cookie', component: ListeCookieComponent},
  {path: '',component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
