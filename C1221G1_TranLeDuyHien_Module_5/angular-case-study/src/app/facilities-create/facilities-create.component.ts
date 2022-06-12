import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IFacility} from "../model/facility";

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  facility: IFacility = {
    id: "7", name: "Room deluxe hướng biển",
    url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg",
    price: "3000000"
  }
  @Output() submitCreate = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  createFacility() {
    this.submitCreate.emit(this.facility);
    this.facility = {
      id: "7", name: "Room deluxe hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg",
      price: "3000000"
    }
  }

}
