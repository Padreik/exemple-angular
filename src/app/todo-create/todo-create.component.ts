import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  @Input() count: number;
  @Output() createEvent = new EventEmitter<Todo>();
  todoForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.todoForm.valid) {
      this.createEvent.emit(this.todoForm.getRawValue());
      this.submitted = false;
      this.todoForm.reset();
    }
  }

}
