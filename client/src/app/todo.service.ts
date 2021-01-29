import { Injectable } from '@angular/core';
import {Todo} from './models/todo';
import {Observable, of} from 'rxjs';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}/todo`);
  }

  createTodo(todo: Todo): Observable<any> {
    return this.http.post(`${environment.apiUrl}/todo`, todo);
  }
}
