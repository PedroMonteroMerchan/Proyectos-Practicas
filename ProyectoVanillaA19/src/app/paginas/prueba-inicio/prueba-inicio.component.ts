import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prueba-inicio',
  standalone: true,
  imports: [RouterLink, ButtonModule, RouterOutlet],
  template: ` <div class="h-screen flex flex-col bg-gray-900 text-white">
    <!-- HEADER -->
    <header class="h-20 flex items-center px-6 bg-gray-800 shadow">
      <h1 class="text-2xl font-bold">Proyectos de Práctica</h1>
    </header>

    <div class="flex flex-1">
      <!-- MENÚ LATERAL -->
      <aside class="w-64 bg-gray-800 p-4 flex flex-col gap-3">
        <p-button label="Prueba 1" routerLink="/prueba1" />
        <p-button label="Prueba 2" routerLink="/prueba2" severity="secondary" />
        <p-button label="Prueba 3" routerLink="/prueba3" severity="warn" />
        <p-button label="Prueba 4" routerLink="/prueba4" severity="info" />
        <p-button label="Pokemon" routerLink="/pokemon" severity="success" />
      </aside>

      <!-- CONTENIDO DINÁMICO -->
      <main class="flex-1 p-6 overflow-auto">
        <router-outlet></router-outlet>
      </main>
    </div>
  </div>`,
})
export class PruebaInicioComponent {}
