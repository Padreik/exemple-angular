import { Injectable } from '@angular/core';
import {Todo} from './models/todo';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of([
      new Todo('Installer les packages'),
      new Todo('Regarder les packages les packages s\'installer'),
      new Todo('Sacrer')
    ]);
  }
}
