import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer/customer.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        code: new FormControl(customer.code, [Validators.required, Validators.pattern('^(KH)\\-\\d{4}$')]),
        typeCustomer: new FormControl(customer.typeCustomer, [Validators.required]),
        name: new FormControl(customer.name, [Validators.required]),
        dayOfBirth: new FormControl(customer.dayOfBirth, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(((090)|(091))\\d{7})|(([(]84[)][+](90)|[(]84[)][+](91))\\d{7})$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required])

      });
    });
  }

  ngOnInit() {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer);
    alert('Cập nhật thành công');
  }
}
