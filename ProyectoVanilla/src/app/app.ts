import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  template: `<p-button label="¡Hola Mundo!" />`,
})
export class App {
  protected readonly title = signal('ProyectoVanilla');
}
