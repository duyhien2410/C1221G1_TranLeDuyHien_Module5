import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerComponent} from "../customer/customer.component";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output() submitCreate = new EventEmitter();
  customerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(''),
      code: new FormControl('', [Validators.required, Validators.pattern('^(KH)\\-\\d{4}$')]),
      typeCustomer: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(((090)|(091))\\d{7})|(([(]84[)][+](90)|[(]84[)][+](91))\\d{7})$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required])
    })
  }

  createCustomer() {
    if (this.customerForm.valid){
      this.submitCreate.emit(this.customerForm.value);
    }
  }
}
