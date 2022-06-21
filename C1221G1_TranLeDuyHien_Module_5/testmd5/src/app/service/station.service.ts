import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Station} from "../model/station";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Station[]> {
    return this.http.get<Station[]>('http://localhost:8080/station/list');
  }

  // saveTransaction(station): Observable<Station> {
  //   return this.http.post<Station>('http://localhost:3000/transaction', transaction);
  // }

  deleteStation(id: number): Observable<Station> {
    return this.http.delete<Station>('http://localhost:8080/station/'+`${id}`);
  }

  findById(id: number): Observable<Station> {
    return this.http.get<Station>('http://localhost:8080/station/'+`${id}`);
  }

  updateStation(id: number, station: Station): Observable<Station> {
    return this.http.put<Station>('http://localhost:8080/station/'+`${id}`, station);
  }
}
