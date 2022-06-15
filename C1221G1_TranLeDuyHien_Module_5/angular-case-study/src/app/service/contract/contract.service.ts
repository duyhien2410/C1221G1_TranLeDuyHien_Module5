import { Injectable } from '@angular/core';
import {Contract} from "../../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract[] = [{
    id: "1", code: "HD-001", startDay: "2020-01-01", endDay: "2020-02-02", reserve: "500000",
    total: "3500000", employee: "Trần Lê Duy Hiển", customer: "Hoàng Định", facility: "Room Suite hướng biển"
  }, {
    id: "2", code: "HD-002", startDay: "2020-01-01", endDay: "2020-02-02", reserve: "500000",
    total: "3500000", employee: "Trần Lê Duy Hiển", customer: "Hoàng Định", facility: "Room Suite hướng biển"
  }, {
    id: "3", code: "HD-003", startDay: "2020-01-01", endDay: "2020-02-02", reserve: "500000",
    total: "3500000", employee: "Trần Lê Duy Hiển", customer: "Hoàng Định", facility: "Room Suite hướng biển"
  }];

  constructor() {
  }

  getAll() {
    return this.contracts;
  }

  saveContract(contract) {
    this.contracts.push(contract);
  }

  findById(id: number) {
    return this.contracts.find(contract => parseInt(contract.id) === id);
  }

  updateContract(id: number, contract: Contract) {
    for (let i = 0; i < this.contracts.length; i++) {
      if (parseInt(this.contracts[i].id) === id) {
        this.contracts[i] = contract;
      }
    }
  }

  deleteContract(id: string) {
    this.contracts = this.contracts.filter(contract => {
      return contract.id !== id;
    });
  }
}
