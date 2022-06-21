import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../model/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('http://localhost:3000/transaction');
  }

  saveTransaction(transaction): Observable<Transaction> {
    return this.http.post<Transaction>('http://localhost:3000/transaction', transaction);
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>('http://localhost:3000/transaction/'+`${id}`);
  }

  findById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>('http://localhost:3000/transaction/'+`${id}`);
  }

  updateTransaction(id: number, transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>('http://localhost:3000/transaction/'+`${id}`, transaction);
  }
}
