import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerListComponent} from "../customer-list/customer-list.component";
import {CustomerService} from "../../service/customer/customer.service";
import {Router} from "@angular/router";
import {ICustomer} from "../../model/customer";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required, Validators.pattern('^(KH)\\-\\d{4}$')]),
    typeCustomer: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(((090)|(091))\\d{7})|(([(]84[)][+](90)|[(]84[)][+](91))\\d{7})$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  });

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // submit() {
  //   const customer = this.customerForm.value;
  //   this.customerService.saveCustomer(customer);
  //   this.customerForm.reset();
  // }

  submit() {
    if (this.customerForm.valid) {
      this.customerService.saveCustomer(this.customerForm.value).subscribe(() => {
        this.customerForm.reset();
        alert('Thêm mới thành công!');
      }, e => {
        console.log(e);
      }, () => {
        this.router.navigate(['/list']);
      });
    }
  }
}
