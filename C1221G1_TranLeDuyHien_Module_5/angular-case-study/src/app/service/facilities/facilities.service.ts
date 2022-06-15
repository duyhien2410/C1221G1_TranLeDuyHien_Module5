import {Injectable} from '@angular/core';
import {ICustomer} from "../../model/customer";
import {IFacility} from "../../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  facilities: IFacility[] = [
    {
      id: "1", name: "Villa hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg",
      price: "7000000"
    }, {
      id: "2", name: "Room suite hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
      price: "5000000"
    }, {
      id: "3", name: "Villa hướng vườn",
      url: "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg",
      price: "6000000"
    }, {
      id: "4", name: "Room studio suite hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg",
      price: "5000000"
    }, {
      id: "5", name: "House superior hướng biển",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg",
      price: "6000000"
    }, {
      id: "6", name: "House superior hướng vườn",
      url: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg",
      price: "6000000"
    }];

  constructor() {
  }

  getAll() {
    return this.facilities;
  }

  saveFacility(facility) {
    this.facilities.push(facility);
  }

  findById(id: number) {
    return this.facilities.find(facility => parseInt(facility.id) === id);
  }

  updateFacility(id: number, facility: IFacility) {
    for (let i = 0; i < this.facilities.length; i++) {
      if (parseInt(this.facilities[i].id) === id) {
        this.facilities[i] = facility;
      }
    }
  }

  deleteFacility(id: string) {
    this.facilities = this.facilities.filter(facility => {
      return facility.id !== id;
    });
  }
}
