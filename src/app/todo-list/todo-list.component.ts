import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  error: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    }, error => {
      this.error = error.message;
    });
  }

  done(todo: Todo): void {
    todo.done = true;
  }

  newTodo(todo: Todo): void {
    this.todos.push(todo);
  }

}
