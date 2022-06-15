import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract/contract.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];
  id: string;
  name: string;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contracts = this.contractService.getAll();
  }


  getContract(id: string, name:string) {
    this.id = id;
    this.name = name;
  }

  delete(id: string) {
    this.contractService.deleteContract(id);
    this.ngOnInit();
  }
}
