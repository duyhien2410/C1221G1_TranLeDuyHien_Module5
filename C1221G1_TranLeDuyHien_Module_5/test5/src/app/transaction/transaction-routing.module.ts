import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionListComponent} from "./transaction-list/transaction-list.component";
import {TransactionCreateComponent} from "./transaction-create/transaction-create.component";
import {TransactionDetailComponent} from "./transaction-detail/transaction-detail.component";
import {TransactionEditComponent} from "./transaction-edit/transaction-edit.component";


const routes: Routes = [
  {path:'list', component:TransactionListComponent},
  {path:'create', component:TransactionCreateComponent},
  {path:'detail/:id', component:TransactionDetailComponent},
  {path:'edit/:id', component:TransactionEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
