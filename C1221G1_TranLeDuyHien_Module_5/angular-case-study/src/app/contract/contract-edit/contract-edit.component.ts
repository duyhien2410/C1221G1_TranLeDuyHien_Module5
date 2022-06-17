import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ContractService} from "../../service/contract/contract.service";

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {
  contractForm: FormGroup;
  id: number;

  constructor(private contractService: ContractService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const contract = this.getContract(this.id);
      this.contractForm = new FormGroup({
        id: new FormControl(contract.id),
        code: new FormControl(contract.code, [Validators.required, Validators.pattern('^(HD)\\-\\d{4}$')]),
        startDay: new FormControl(contract.startDay, [Validators.required]),
        endDay: new FormControl(contract.endDay, [Validators.required]),
        reserve: new FormControl(contract.reserve, [Validators.required, Validators.pattern('^\\d+$')]),
        total: new FormControl(contract.total, [Validators.required, Validators.pattern('^\\d+$')]),
        employee: new FormControl(contract.employee, [Validators.required]),
        customer: new FormControl(contract.customer, [Validators.required]),
        facility: new FormControl(contract.facility, [Validators.required])
      });
    });
  }

  ngOnInit() {
  }

  getContract(id: number) {
    return this.contractService.findById(id);
  }

  updateContract(id: number) {
    const contract = this.contractForm.value;
    this.contractService.updateContract(id, contract);
    alert('Cập nhật thành công');
  }
}
