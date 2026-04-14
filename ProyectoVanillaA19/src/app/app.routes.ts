import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./paginas/prueba-inicio/prueba-inicio.component').then(
        (m) => m.PruebaInicioComponent,
      ),
    children: [
      {
        path: 'prueba1',
        loadComponent: () =>
          import('./paginas/prueba1/prueba1.component').then(
            (m) => m.Prueba1Component,
          ),
      },
      {
        path: 'prueba2',
        loadComponent: () =>
          import('./paginas/prueba2/prueba2.component').then(
            (m) => m.Prueba2Component,
          ),
      },
      {
        path: 'prueba3',
        loadComponent: () =>
          import('./paginas/prueba3/prueba3.component').then(
            (m) => m.Prueba3Component,
          ),
      },
      {
        path: 'prueba4',
        loadComponent: () =>
          import('./paginas/prueba4/prueba4.component').then(
            (m) => m.Prueba4Component,
          ),
      },
      {
        path: 'pokemon',
        loadComponent: () =>
          import('./paginas/pokemon/pokemon.component').then(
            (m) => m.PokemonComponent,
          ),
      },
    ],
  },
];
