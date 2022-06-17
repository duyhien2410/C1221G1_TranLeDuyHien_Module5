import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract/contract.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];
  id: number;
  code: string;
  p: string | number =0;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contracts = this.contractService.getAll();
  }


  getContract(id: number, code:string) {
    this.id = id;
    this.code = name;
  }

  delete(id: number) {
    this.contractService.deleteContract(id);
    this.ngOnInit();
  }
}
