import {Component, OnInit} from '@angular/core';
import {IFacility} from "../model/facility";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  facilities: IFacility[] = [];
  facility: IFacility = {
    id: "7", name: "Room deluxe hướng biển",
    url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg",
    price: "3000000"
  }

  constructor() {
    this.facilities.push({
      id: "1", name: "Villa hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg",
      price: "7000000"
    })
    this.facilities.push({
      id: "2", name: "Room suite hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
      price: "5000000"
    })
    this.facilities.push({
      id: "3", name: "Villa hướng vườn",
      url: "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg",
      price: "6000000"
    })
    this.facilities.push({
      id: "4", name: "Room studio suite hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg",
      price: "5000000"
    })
    this.facilities.push({
      id: "5", name: "House superior hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg",
      price: "6000000"
    })
    this.facilities.push({
      id: "6", name: "House superior hướng vườn",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg",
      price: "6000000"
    })
  }

  ngOnInit(): void {
  }

  createFacility(event: any){
    this.facilities.push(event);
    this.ngOnInit();
  }

}
