import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-prueba1',
  imports: [ButtonModule, CardModule],
  template: `<div class="flex items-center justify-center h-screen bg-gray-900">
    <p-card class="w-96">
      <ng-template #title>Prueba1</ng-template>
      <div class="flex gap-2">
        <p-button label="Boton1" />
        <p-button label="Boton2" />
      </div>
    </p-card>
    <p-button label="Volver" severity="secondary" (onClick)="volver()" />
  </div>`,
})
export class Prueba1Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/']);
  }
}
