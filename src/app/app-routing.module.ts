import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoCreate2Component} from './todo-create2/todo-create2.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'new', component: TodoCreate2Component },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
