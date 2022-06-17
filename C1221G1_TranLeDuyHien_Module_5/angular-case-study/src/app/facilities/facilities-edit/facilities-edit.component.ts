import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FacilitiesService} from "../../service/facilities/facilities.service";

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  facilitiesForm: FormGroup;
  id: number;

  constructor(private facilitiesService: FacilitiesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacilities(this.id);
    });
  }

  ngOnInit() {
  }

  getFacilities(id: number) {
    return this.facilitiesService.findById(id).subscribe(facilities => {
      this.facilitiesForm = new FormGroup({
        id: new FormControl(facilities.id),
        name: new FormControl(facilities.name, [Validators.required, Validators.pattern('^[^\\d]*$')]),
        url: new FormControl(facilities.url, [Validators.required]),
        price: new FormControl(facilities.price, [Validators.required, Validators.min(100000)])
      });
    });
  }

  updateFacilities(id: number) {
    const facilities = this.facilitiesForm.value;
    this.facilitiesService.updateFacilities(id, facilities).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigate(['facilities/list']);
    });
  }

  // facilitiesForm: FormGroup;
  // id: number;
  //
  // constructor(private facilitiesService: FacilitiesService,
  //             private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //     this.id = +paramMap.get('id');
  //     const facility = this.getFacility(this.id);
  //     this.facilitiesForm = new FormGroup({
  //       id: new FormControl(facility.id, [Validators.required]),
  //       name: new FormControl(facility.name, [Validators.required, Validators.pattern('^[^\\d]*$')]),
  //       url: new FormControl(facility.url, [Validators.required]),
  //       price: new FormControl(facility.price, [Validators.required, Validators.min(100000)])
  //     });
  //   });
  // }
  //
  // ngOnInit() {
  // }
  //
  // getFacility(id: number) {
  //   return this.facilitiesService.findById(id);
  // }
  //
  // updateFacility(id: number) {
  //   const facility = this.facilitiesForm.value;
  //   this.facilitiesService.updateFacility(id, facility);
  //   alert('Cập nhật thành công');
  // }
}
