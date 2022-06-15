import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Todo} from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL = ' http://localhost:3000/todo';
  constructor(private http: HttpClient) { }
  getInfo(): any {
    return this.http.get(this.URL).pipe(map(res => res));
  }
  deleteTodo(id: number) {
    return this.http.delete<Todo>(this.URL + '/' + id);
  }

}
