import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';


@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionCreateComponent,
    TransactionDetailComponent,
    TransactionEditComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class TransactionModule { }
