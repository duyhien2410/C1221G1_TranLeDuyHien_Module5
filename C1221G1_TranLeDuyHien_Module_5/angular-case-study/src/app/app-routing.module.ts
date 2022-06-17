import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ContractComponent } from './contract/contract.component';
import { FacilitiesCreateComponent } from './facilities-create/facilities-create.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {FacilitiesEditComponent} from "./facilities-edit/facilities-edit.component";

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'about', component:AboutComponent},
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {path:'facilities', component:FacilitiesListComponent},
  {path:'contract', component:ContractComponent},
  {path:'facilities-list-create', component:FacilitiesCreateComponent},
  {path:'facilities-list-edit/:id', component:FacilitiesEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
