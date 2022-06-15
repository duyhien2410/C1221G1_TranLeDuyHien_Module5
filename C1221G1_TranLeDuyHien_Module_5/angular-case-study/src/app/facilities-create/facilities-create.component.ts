import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilitiesService} from "../service/facilities/facilities.service";

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  facilitiesForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('^[^\\d]*$')]),
    url: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(100000)])
  });

  constructor(private facilitiesService: FacilitiesService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const facility = this.facilitiesForm.value;
    this.facilitiesService.saveFacility(facility);
    this.facilitiesForm.reset();
  }

}
