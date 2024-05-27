import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

export const routes: Routes = [
  {
    title: 'Login',
    path: 'login',
    component: Login2Component
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
