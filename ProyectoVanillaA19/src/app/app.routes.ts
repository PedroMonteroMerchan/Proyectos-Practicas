import { Routes } from '@angular/router';
import { Prueba1Component } from './paginas/prueba1/prueba1.component';
import { Prueba2Component } from './paginas/prueba2/prueba2.component';
import { PruebaInicioComponent } from './paginas/prueba-inicio/prueba-inicio.component';
import { PokemonComponent } from './paginas/pokemon/pokemon.component';
import { Prueba3Component } from './paginas/prueba3/prueba3.component';

export const routes: Routes = [
  { path: 'prueba1', component: Prueba1Component },
  { path: 'prueba2', component: Prueba2Component },
  { path: 'prueba-inicio', component: PruebaInicioComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'prueba3', component: Prueba3Component },
  { path: '', redirectTo: 'prueba-inicio', pathMatch: 'full' },
];
