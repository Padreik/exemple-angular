import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoCreate2Component} from './todo-create2/todo-create2.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'new', canActivate: [AuthGuard],component: TodoCreate2Component },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
