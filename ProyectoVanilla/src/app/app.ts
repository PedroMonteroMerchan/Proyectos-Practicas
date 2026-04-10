import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, RouterOutlet],
  template: ` <div class="bg-red-500 w-full h-screen flex items-center justify-center">
    <p-button label="¡Hola Mundo!" />
  </div>`,
})
export class App {
  protected readonly title = signal('ProyectoVanilla');
}
