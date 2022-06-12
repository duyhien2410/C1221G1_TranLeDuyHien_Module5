import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { RouterModule } from '@angular/router';
import { FacilitiesCreateComponent } from './facilities-create/facilities-create.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilitiesComponent,
    AboutComponent,
    CustomerComponent,
    ContractComponent,
    FacilitiesCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
