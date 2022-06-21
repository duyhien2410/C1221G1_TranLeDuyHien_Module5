import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../service/transaction.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  customers: Customer[];
  transactionForm: FormGroup;
  id: number;

  constructor(private transactionService: TransactionService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTransaction(this.id);
    });
  }

  ngOnInit() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  getTransaction(id: number) {
    return this.transactionService.findById(id).subscribe(transaction => {
      console.log(transaction);
      this.transactionForm = new FormGroup({
        id: new FormControl(transaction.id),
        code: new FormControl(transaction.code, [Validators.required, Validators.pattern('^(MGD)[-]\\d{4}$')]),
        name: new FormControl(transaction.name, [Validators.required]),
        typeFacility: new FormControl(transaction.typeFacility, [Validators.required]),
        dayTrading: new FormControl(transaction.dayTrading, [Validators.required]),
        unitPrice: new FormControl(transaction.unitPrice, [Validators.required, Validators.min(500000)]),
        area: new FormControl(transaction.area, [Validators.required, Validators.min(20)])
      });
    });
  }

  updateTransaction(id: number) {
    const transaction = this.transactionForm.value;
    this.transactionService.updateTransaction(id, transaction).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigate(['transaction/list']);
    });
  }
}
