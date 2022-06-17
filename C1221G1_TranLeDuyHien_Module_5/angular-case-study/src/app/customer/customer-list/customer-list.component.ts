import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../model/customer";
import {CustomerService} from "../../service/customer/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  id: number;
  name: string;
  p: string | number = 0;

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    })
  }

  getCustomer(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      alert('Xoá khách hàng thành công');
      this.ngOnInit();
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigate(['/customer/list']);
    });
  }

  // getCustomer(id: string, name:string) {
  //   this.id = id;
  //   this.name = name;
  // }
  //
  // delete(id: string) {
  //   this.customerService.deleteCustomer(id);
  //   this.ngOnInit();
  // }
}
