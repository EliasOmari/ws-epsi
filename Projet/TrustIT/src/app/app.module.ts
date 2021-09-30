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
import { APIServiceComponent } from './apiservice/apiservice.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    SearchBarComponent,
    CookieComponent,
    CertificatComponent,
    APIServiceComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
