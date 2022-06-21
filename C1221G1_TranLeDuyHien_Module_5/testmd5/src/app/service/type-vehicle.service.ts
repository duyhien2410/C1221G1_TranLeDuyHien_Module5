import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypeVehicle} from "../model/type-vehicle";

@Injectable({
  providedIn: 'root'
})
export class TypeVehicleService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TypeVehicle[]> {
    return this.http.get<TypeVehicle[]>('http://localhost:8080/type-vehicle');
  }

  findById(id: number): Observable<TypeVehicle> {
    return this.http.get<TypeVehicle>('http://localhost:8080/type-vehicle/'+`${id}`);
  }
}
