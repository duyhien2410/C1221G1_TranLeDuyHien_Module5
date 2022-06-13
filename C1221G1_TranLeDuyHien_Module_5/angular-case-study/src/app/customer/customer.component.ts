import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../model/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: ICustomer[] = [];
  customerss: ICustomer = {id: "4", code:"KH-004", typeCustomer:"Diamond", name:"Hiển Duy", dayOfBirth:"2000-12-12",
  gender:"Name", idCard:"201931444", phone:"0933999999", email:"hienduy241012@gmail.com", address:"Đà Nẵng"};
  constructor() {
    this.customers.push({id: "1", code:"KH-001", typeCustomer:"Diamond", name:"Hiển Duy", dayOfBirth:"2000-12-12",
      gender:"Name", idCard:"201931444", phone:"0933999999", email:"hienduy241012@gmail.com", address:"Đà Nẵng"})
    this.customers.push({id: "2", code:"KH-002", typeCustomer:"Diamond", name:"Hiển Duy", dayOfBirth:"2000-12-12",
      gender:"Name", idCard:"201931444", phone:"0933999999", email:"hienduy241012@gmail.com", address:"Đà Nẵng"})
    this.customers.push({id: "3", code:"KH-003", typeCustomer:"Diamond", name:"Hiển Duy", dayOfBirth:"2000-12-12",
      gender:"Name", idCard:"201931444", phone:"0933999999", email:"hienduy241012@gmail.com", address:"Đà Nẵng"})
  }

  ngOnInit(): void {
  }

  createCustomer(event: any) {
    this.customers.push(event);
    this.ngOnInit();
  }
}
