import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create2',
  templateUrl: './todo-create2.component.html',
  styleUrls: ['./todo-create2.component.scss']
})
export class TodoCreate2Component implements OnInit {

  todoForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.todoForm.valid) {
      this.todoService.createTodo(this.todoForm.getRawValue());
      this.router.navigate(['/']);
    }
  }

}
