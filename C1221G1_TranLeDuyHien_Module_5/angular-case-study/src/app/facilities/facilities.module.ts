import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import {FacilitiesListComponent} from "./facilities-list/facilities-list.component";
import {FacilitiesCreateComponent} from "./facilities-create/facilities-create.component";
import {FacilitiesEditComponent} from "./facilities-edit/facilities-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    FacilitiesListComponent,
    FacilitiesCreateComponent,
    FacilitiesEditComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class FacilitiesModule { }
