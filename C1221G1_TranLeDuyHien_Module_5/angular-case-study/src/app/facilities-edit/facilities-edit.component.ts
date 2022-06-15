import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FacilitiesService} from "../service/facilities/facilities.service";

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  facilitiesForm: FormGroup;
  id: number;

  constructor(private facilitiesService: FacilitiesService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilitiesForm = new FormGroup({
        id: new FormControl(facility.id, [Validators.required]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern('^[^\\d]*$')]),
        url: new FormControl(facility.url, [Validators.required]),
        price: new FormControl(facility.price, [Validators.required, Validators.min(100000)])
      });
    });
  }

  ngOnInit() {
  }

  getFacility(id: number) {
    return this.facilitiesService.findById(id);
  }

  updateFacility(id: number) {
    const facility = this.facilitiesForm.value;
    this.facilitiesService.updateFacility(id, facility);
    alert('Cập nhật thành công');
  }
}
