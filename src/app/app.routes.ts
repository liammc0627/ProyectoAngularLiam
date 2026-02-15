import { Routes } from '@angular/router';
import { DiseñoLiamHome } from './home/home';
import { DiseñoLiamMenu } from './menu/menu';
import { DiseñoLiamAdmin } from './admin/admin';
import { DiseñoLiamLogin } from './login/login';

export const routes: Routes = [
  { path: 'home', component: DiseñoLiamHome, title: 'Inicio' },
  { path: 'menu', component: DiseñoLiamMenu, title: 'Carta' },
  { path: 'admin', component: DiseñoLiamAdmin, title: 'Gestión' },
  { path: 'login', component: DiseñoLiamLogin, title: 'Login' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
