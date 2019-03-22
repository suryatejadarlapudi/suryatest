import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page1Component } from './components/page1/page1.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';
import { HelloComponent } from './hello.component';
import { NgbdTabsetBasic } from './components/tabset-basic';
import {DataTableModule} from "angular-6-datatable";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { OtpPage2Component } from './components/otp-page2/otp-page2.component';
import { RoleselectionComponent } from './components/roleselection/roleselection.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page1Component,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    HelloComponent,
    NgbdTabsetBasic,
    OtpPageComponent,
    OtpPage2Component,
    RoleselectionComponent,
    GooglemapsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    
    Ng2CarouselamosModule,
     // Specify your library as an import
     FormsModule, ReactiveFormsModule, HttpClientModule,NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
