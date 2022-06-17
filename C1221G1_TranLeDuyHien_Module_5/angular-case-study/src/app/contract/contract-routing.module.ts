import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractComponent} from "./contract-list/contract.component";
import {ContractCreateComponent} from "./contract-create/contract-create.component";
import {ContractEditComponent} from "./contract-edit/contract-edit.component";


const routes: Routes = [
  {path:'list', component:ContractComponent},
  {path:'create', component:ContractCreateComponent},
  {path:'edit/:id', component:ContractEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
