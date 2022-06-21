import { Component, OnInit } from '@angular/core';
import {Station} from "../../model/station";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StationService} from "../../service/station.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TypeVehicle} from "../../model/type-vehicle";
import {TypeVehicleService} from "../../service/type-vehicle.service";

@Component({
  selector: 'app-station-edit',
  templateUrl: './station-edit.component.html',
  styleUrls: ['./station-edit.component.css']
})
export class StationEditComponent implements OnInit {
  typeVehicles: TypeVehicle[];
  stationForm: FormGroup;
  id: number;

  constructor(private stationService: StationService,
              private typeVehicleService: TypeVehicleService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getStation(this.id);
    });
  }

  ngOnInit() {
    this.typeVehicleService.getAll().subscribe(typeVehicles => {
      this.typeVehicles = typeVehicles;
    });
  }

  getStation(id: number) {
    return this.stationService.findById(id).subscribe(station => {
      console.log(station);
      this.stationForm = new FormGroup({
        stationId: new FormControl(station.stationId),
        licensePlates: new FormControl(station.licensePlates),
        typeVehicleId: new FormControl(station.typeVehicleId, [Validators.required]),
        name: new FormControl(station.name, [Validators.required]),
        go: new FormControl(station.go, [Validators.required]),
        arrive: new FormControl(station.arrive, [Validators.required]),
        phone: new FormControl(station.phone, [Validators.required, Validators.pattern('^((090)\\d{7})|((093)\\d{7})|((097)\\d{7})$')]),
        email: new FormControl(station.email, [Validators.required, Validators.email]),
        start: new FormControl(station.start, [Validators.required]),
        end: new FormControl(station.end, [Validators.required]),
      });
    });
  }

  updateStation(id: number) {
    const station = this.stationForm.value;
    this.stationService.updateStation(id, station).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigate(['station/list']);
    });
  }

  equals = (item1, item2) => {
    return item1 && item2 && item1.id === item2.id;
  }
}
