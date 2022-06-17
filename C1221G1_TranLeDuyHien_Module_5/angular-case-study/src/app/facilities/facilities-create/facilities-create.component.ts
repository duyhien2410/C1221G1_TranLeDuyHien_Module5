import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilitiesService} from "../../service/facilities/facilities.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  facilitiesForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern('^[^\\d]*$')]),
    url: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(100000)])
  });

  constructor(private facilitiesService: FacilitiesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.facilitiesForm.valid) {
      this.facilitiesService.saveFacilities(this.facilitiesForm.value).subscribe(() => {
        this.facilitiesForm.reset();
        alert('Thêm mới thành công!');
      }, e => {
        console.log(e);
      }, () => {
        this.router.navigate(['/list']);
      });
    }
  }

}
