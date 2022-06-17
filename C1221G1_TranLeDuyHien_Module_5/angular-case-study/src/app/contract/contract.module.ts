import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractComponent} from "./contract-list/contract.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';


@NgModule({
  declarations: [
    ContractComponent,
    ContractCreateComponent,
    ContractEditComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ContractModule { }
