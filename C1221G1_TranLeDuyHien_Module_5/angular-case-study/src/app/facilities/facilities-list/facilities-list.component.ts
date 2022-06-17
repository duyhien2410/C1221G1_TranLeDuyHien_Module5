import {Component, OnInit} from '@angular/core';
import {IFacility} from "../../model/facility";
import {CustomerService} from "../../service/customer/customer.service";
import {FacilitiesService} from "../../service/facilities/facilities.service";
import {ICustomer} from "../../model/customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilities: IFacility[] = [];
  id: number;
  name: string;
  p: string | number = 0;

  constructor(private facilitiesService: FacilitiesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilitiesService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    })
  }

  getFacilities(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.facilitiesService.deleteFacilities(id).subscribe(() => {
      alert('Xoá khách hàng thành công');
      this.ngOnInit();
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigate(['/facilities/list']);
    });
  }
  // facilitiess: IFacility[] = [];
  // id: number;
  // name: string
  //
  // constructor(private facilitiesService: FacilitiesService) {
  // }
  //
  // ngOnInit(): void {
  //   this.getAll();
  // }
  //
  // getAll() {
  //   this.facilitiess = this.facilitiesService.getAll();
  // }
  //
  //
  // getFacility(id: number, name:string) {
  //   this.id = id;
  //   this.name = name;
  // }
  //
  // delete(id: number) {
  //   this.facilitiesService.deleteFacility(id);
  //   this.ngOnInit();
  // }

}
