import { Routes } from '@angular/router';
import { Prueba1 } from './paginas/prueba1/prueba1';

export const routes: Routes = [
  { path: 'prueba1', component: Prueba1 },
  { path: '', redirectTo: 'prueba1', pathMatch: 'full' },
];
