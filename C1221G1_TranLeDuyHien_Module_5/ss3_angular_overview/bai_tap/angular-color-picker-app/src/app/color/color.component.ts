import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: string;
  character: string;
  constructor() { }

  ngOnInit(): void {
  }
  code(color): void {
    color = this.colors ;
    console.log(color);
  }

  changedColorValue($event: any) {
    this.colors = ($event.target.value);
    console.log(this.colors);
  }
  changedCharacter(char: string) {
    this.character = char;
  }
}
