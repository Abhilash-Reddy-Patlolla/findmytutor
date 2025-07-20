import { Routes } from '@angular/router';
import { TuitionList } from './components/tuition-list/tuition-list';
import { AddTuition } from './components/add-tuition/add-tuition';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: TuitionList ,canActivate: [authGuard] },
  { path: 'add', component: AddTuition },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
];
