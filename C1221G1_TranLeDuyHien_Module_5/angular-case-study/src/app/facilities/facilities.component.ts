import {Component, OnInit} from '@angular/core';
import {IFacility} from "../model/facility";
import {CustomerService} from "../service/customer/customer.service";
import {FacilitiesService} from "../service/facilities/facilities.service";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  facilitiess: IFacility[] = [];
  id: string;
  name: string

  constructor(private facilitiesService: FacilitiesService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilitiess = this.facilitiesService.getAll();
  }


  getFacility(id: string, name:string) {
    this.id = id;
    this.name = name;
  }

  delete(id: string) {
    this.facilitiesService.deleteFacility(id);
    this.ngOnInit();
  }

}
