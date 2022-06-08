import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number

  constructor() {
  }

  ngOnInit(): void {
  }

  operation(value1: string, value2: string, value3: string) {

    switch (value3) {
      case '+':
        this.result = Number(value1) + Number(value2);
        break;
      case '-':
        this.result = Number(value1) - Number(value2);
        break;
      case '*':
        this.result = Number(value1) * Number(value2);
        break;
      case '/':
        this.result = Number(value1) / Number(value2);
        break;
    }

  }

}
