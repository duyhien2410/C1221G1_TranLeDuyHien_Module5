import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IFacility} from "../model/facility";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  @Output() submitCreate = new EventEmitter();
  facilitiesForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.facilitiesForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('^[^\\d]*$')]),
      url: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(100000)])
    })
  }

  createFacility() {
    if (this.facilitiesForm.valid){
      this.submitCreate.emit(this.facilitiesForm.value);
    }
  }

}
