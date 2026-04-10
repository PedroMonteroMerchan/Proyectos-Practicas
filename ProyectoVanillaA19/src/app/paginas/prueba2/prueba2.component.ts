import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prueba2',
  imports: [ButtonModule],
  template: `<div
    class="bg-red-500 w-full h-screen flex items-center justify-center"
  >
    <p-button label="Hola Mundo" />
    <p-button label="Volver" severity="secondary" (onClick)="volver()" />
  </div>`,
})
export class Prueba2Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/']);
  }
}
