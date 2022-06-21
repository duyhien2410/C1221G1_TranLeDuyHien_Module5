import { Component, OnInit } from '@angular/core';
import {Station} from "../../model/station";
import {StationService} from "../../service/station.service";
import {Router} from "@angular/router";
import {TypeVehicleService} from "../../service/type-vehicle.service";

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations: Station[] = [];
  id: number;
  licensePlates: string;
  p: string | number = 0;

  constructor(private stationService: StationService,
              private typeVehicleService: TypeVehicleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.stationService.getAll().subscribe(stations => {
      this.stations = stations;
    })
  }

  getStation(id: number, licensePlates: string) {
    this.id = id;
    this.licensePlates = licensePlates;
  }

  delete(id: number) {
    this.stationService.deleteStation(id).subscribe(() => {
      alert('Xoá chuyến xe thành công');
      this.ngOnInit();
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigate(['/station/list']);
    });
  }
}
