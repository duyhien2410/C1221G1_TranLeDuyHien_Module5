import { Component, OnInit } from '@angular/core';
import {TypeVehicle} from "../../model/type-vehicle";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StationService} from "../../service/station.service";
import {Router} from "@angular/router";
import {TypeVehicleService} from "../../service/type-vehicle.service";

@Component({
  selector: 'app-station-create',
  templateUrl: './station-create.component.html',
  styleUrls: ['./station-create.component.css']
})
export class StationCreateComponent implements OnInit {
  typeVehicles: TypeVehicle[];
  stationForm: FormGroup = new FormGroup({
    stationId: new FormControl(''),
    licensePlates: new FormControl('', [Validators.required]),
    typeVehicleId: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    go: new FormControl('', [Validators.required]),
    arrive: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^((090)\\d{7})|((093)\\d{7})|((097)\\d{7})$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  });

  constructor(private stationService: StationService,
              private typeVehicleService: TypeVehicleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.typeVehicleService.getAll().subscribe(typeVehicles => {
      this.typeVehicles = typeVehicles;
    });
  }

  submit() {
    if (this.stationForm.valid) {
      this.stationService.saveTransaction(this.stationForm.value).subscribe(() => {
        this.stationForm.reset();
        alert('Thêm mới thành công!');
      }, e => {
        console.log(e);
      }, () => {
        this.router.navigate(['/list']);
      });
    }
  }
}
