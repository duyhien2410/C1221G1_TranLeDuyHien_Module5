import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('name') name: ElementRef;
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
    this.stationService.searchNameStation('').subscribe(stations => {
      this.stations = stations;
    })
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


  searchNameStation() {
    this.stationService.searchNameStation(this.name.nativeElement.value).subscribe(response => {
      this.stations = response;
      console.log(response);
    },  e => {
      console.log(e);
    });
  }
}
