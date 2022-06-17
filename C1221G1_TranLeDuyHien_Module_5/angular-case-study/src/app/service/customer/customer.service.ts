import {Injectable} from '@angular/core';
import {ICustomer} from "../../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: ICustomer [] = [];
  // customers: ICustomer[] = [{
  //   id: "1", code: "KH-001", typeCustomer: "Diamond", name: "Hiển Duy", dayOfBirth: "1996-12-12",
  //   gender: "Nam", idCard: "201931344", phone: "0933995599", email: "hienduy241012@gmail.com", address: "Đà Nẵng"
  // }, {
  //   id: "2", code: "KH-002", typeCustomer: "Platinum", name: "Long database", dayOfBirth: "1997-12-12",
  //   gender: "Nam", idCard: "201531444", phone: "0933999999", email: "longdragon@gmail.com", address: "Đà Nẵng"
  // }, {
  //   id: "3", code: "KH-003", typeCustomer: "Gold", name: "Định cục", dayOfBirth: "1998-12-12",
  //   gender: "Nam", idCard: "206931444", phone: "0933949999", email: "hoangdinh@gmail.com", address: "Đà Nẵng"
  // }];

  constructor(private http: HttpClient) {
  }

  // getAll() {
  //   return this.customers;
  // }
  getAll(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>('http://localhost:3000/customer');
  }

  // saveCustomer(customer) {
  //   this.customers.push(customer);
  // }
  saveCustomer(customer): Observable<ICustomer> {
    return this.http.post<ICustomer>('http://localhost:3000/customer', customer);
  }

  deleteCustomer(id: number): Observable<ICustomer> {
    return this.http.delete<ICustomer>('http://localhost:3000/customer/'+`${id}`);
  }

  findById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>('http://localhost:3000/customer/'+`${id}`);
  }

  updateCustomer(id: number, customer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>('http://localhost:3000/customer/'+`${id}`, customer);
  }

  // findById(id: number) {
  //   return this.customers.find(customer => parseInt(customer.id) === id);
  // }

  // updateCustomer(id: number, customer: ICustomer) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (parseInt(this.customers[i].id) === id) {
  //       this.customers[i] = customer;
  //     }
  //   }
  // }

  // deleteCustomer(id: string) {
  //   this.customers = this.customers.filter(customer => {
  //     return customer.id !== id;
  //   });
  // }
}
