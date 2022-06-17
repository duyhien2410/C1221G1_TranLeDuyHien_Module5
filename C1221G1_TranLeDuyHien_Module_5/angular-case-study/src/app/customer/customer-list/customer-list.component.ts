import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../model/customer";
import {CustomerService} from "../../service/customer/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  id: string;
  name: string;
  p: string | number =0;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
  }


  getCustomer(id: string, name:string) {
    this.id = id;
    this.name = name;
  }

  delete(id: string) {
    this.customerService.deleteCustomer(id);
    this.ngOnInit();
  }
}
