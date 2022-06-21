import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StationListComponent} from "./station-list/station-list.component";
import {StationEditComponent} from "./station-edit/station-edit.component";
import {StationCreateComponent} from "./station-create/station-create.component";


const routes: Routes = [
  {path:'list', component:StationListComponent},
  {path:'create', component:StationCreateComponent},
  {path:'edit/:id', component:StationEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationRoutingModule { }
