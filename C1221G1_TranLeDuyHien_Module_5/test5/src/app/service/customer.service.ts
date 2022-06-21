import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../model/transaction";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:3000/customer/'+`${id}`);
  }
}
