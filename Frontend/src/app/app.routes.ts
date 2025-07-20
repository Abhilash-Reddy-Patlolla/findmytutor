import { Routes } from '@angular/router';
import { TuitionList } from './components/tuition-list/tuition-list';
import { AddTuition } from './components/add-tuition/add-tuition';
import { Login } from './components/auth/login/login';
import { Signup } from './components/auth/signup/signup';
import { authGuard } from './guards/auth-guard';
import { Subscription } from 'rxjs';

export const routes: Routes = [
  { path: '', component: TuitionList ,canActivate: [authGuard] },
  { path: 'add', component: AddTuition,canActivate: [authGuard] },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'subscriptions', component: Subscription },


];
