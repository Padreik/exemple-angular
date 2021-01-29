import { Injectable } from '@angular/core';
import {Todo} from './models/todo';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];

  constructor() {
    this.todos = [
      new Todo('Installer les packages'),
      new Todo('Regarder les packages les packages s\'installer'),
      new Todo('Sacrer')
    ];
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  createTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}
