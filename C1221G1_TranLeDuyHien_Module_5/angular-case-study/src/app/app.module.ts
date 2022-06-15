import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FacilitiesComponent} from './facilities/facilities.component';
import {AboutComponent} from './about/about.component';
import {CustomerComponent} from './customer/customer.component';
import {ContractComponent} from './contract/contract.component';
import {RouterModule} from '@angular/router';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { FacilitiesEditComponent } from './facilities-edit/facilities-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilitiesComponent,
    AboutComponent,
    CustomerComponent,
    ContractComponent,
    FacilitiesCreateComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    FacilitiesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
