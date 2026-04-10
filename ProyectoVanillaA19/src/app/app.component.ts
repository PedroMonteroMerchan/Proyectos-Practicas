import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  template: ` <div
    class="bg-red-500 w-full h-screen flex items-center justify-center"
  >
    <p-button label="Hola Mundo" />
  </div>`,
})
export class AppComponent {
  title = 'ProyectoVanillaA19';
}
