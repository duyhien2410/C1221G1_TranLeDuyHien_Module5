import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";
import {ContractService} from "../../service/contract/contract.service";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern('^(HD)\\-\\d{4}$')]),
    startDay: new FormControl('', [Validators.required]),
    endDay: new FormControl('', [Validators.required]),
    reserve: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    total: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
    employee: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
  });

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract);
    this.contractForm.reset();
  }
}
