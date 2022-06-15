import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { FacilitiesCreateComponent } from './facilities-create/facilities-create.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {FacilitiesEditComponent} from "./facilities-edit/facilities-edit.component";

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'about', component:AboutComponent},
  {path:'facilities', component:FacilitiesComponent},
  {path:'customer', component:CustomerComponent},
  {path:'contract', component:ContractComponent},
  {path:'facilities-create', component:FacilitiesCreateComponent},
  {path:'customer-create', component:CustomerCreateComponent},
  {path:'customer-edit/:id', component:CustomerEditComponent},
  {path:'facilities-edit/:id', component:FacilitiesEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
