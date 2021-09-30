import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CookieComponent } from './cookie/cookie.component';
import { CertificatComponent } from './certificat/certificat.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {APIServiceService} from "./apiservice.service";
import { ListeCookieComponent } from './liste-cookie/liste-cookie.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    SearchBarComponent,
    CookieComponent,
    CertificatComponent,
    ListeCookieComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
