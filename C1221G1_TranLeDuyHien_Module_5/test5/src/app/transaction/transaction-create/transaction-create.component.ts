import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TransactionService} from "../../service/transaction.service";
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  customers: Customer[];
  transactionForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required, Validators.pattern('^(MGD)[-]\\d{4}$')]),
    name: new FormControl('', [Validators.required]),
    typeFacility: new FormControl('', [Validators.required]),
    dayTrading: new FormControl('', [Validators.required]),
    unitPrice: new FormControl('', [Validators.required, Validators.min(500000)]),
    area: new FormControl('', [Validators.required, Validators.min(20)])
  });

  constructor(private transactionService: TransactionService,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  submit() {
    if (this.transactionForm.valid) {
      this.transactionService.saveTransaction(this.transactionForm.value).subscribe(() => {
        this.transactionForm.reset();
        alert('Thêm mới thành công!');
      }, e => {
        console.log(e);
      }, () => {
        this.router.navigate(['/list']);
      });
    }
  }
}
