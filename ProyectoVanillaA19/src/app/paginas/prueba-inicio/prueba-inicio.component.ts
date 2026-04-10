import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prueba-inicio',
  imports: [RouterLink, ButtonModule],
  template: ` <div
    class="flex flex-col items-center justify-center h-screen bg-gray-900 gap-6"
  >
    <h1 class="text-white text-4xl font-bold">Proyectos de Práctica</h1>
    <p class="text-gray-400">Paginas hechas</p>
    <div class="flex gap-4">
      <p-button label="Prueba 1" routerLink="/prueba1" />
      <p-button label="Prueba 2" routerLink="/prueba2" severity="secondary" />
      <p-button label="Pokemon" routerLink="/pokemon" severity="success" />
    </div>
  </div>`,
})
export class PruebaInicioComponent {}
