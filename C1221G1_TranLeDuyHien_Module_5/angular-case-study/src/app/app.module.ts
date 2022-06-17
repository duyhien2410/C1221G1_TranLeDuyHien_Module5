import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {AboutComponent} from './about/about.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {ContractComponent} from './contract/contract.component';
import {RouterModule} from '@angular/router';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { FacilitiesEditComponent } from './facilities-edit/facilities-edit.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilitiesListComponent,
    AboutComponent,
    ContractComponent,
    FacilitiesCreateComponent,
    FacilitiesEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
