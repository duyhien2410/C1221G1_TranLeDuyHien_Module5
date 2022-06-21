import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationRoutingModule } from './station-routing.module';
import { StationListComponent } from './station-list/station-list.component';
import { StationEditComponent } from './station-edit/station-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { StationCreateComponent } from './station-create/station-create.component';


@NgModule({
  declarations: [
    StationListComponent,
    StationEditComponent,
    StationCreateComponent],
  imports: [
    CommonModule,
    StationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class StationModule { }
