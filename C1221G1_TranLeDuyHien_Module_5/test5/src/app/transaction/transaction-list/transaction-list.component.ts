import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../model/transaction";
import {TransactionService} from "../../service/transaction.service";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  id: number;
  name: string;
  p: string | number = 0;

  constructor(private transactionService: TransactionService,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.transactionService.getAll().subscribe(transactions => {
      this.transactions = transactions;
    })
  }

  getTransaction(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.transactionService.deleteTransaction(id).subscribe(() => {
      alert('Xoá giao dịch thành công');
      this.ngOnInit();
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigate(['/transaction/list']);
    });
  }
}
