import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'facilities', component:FacilitiesComponent},
  {path:'customer', component:CustomerComponent},
  {path:'contract', component:ContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
