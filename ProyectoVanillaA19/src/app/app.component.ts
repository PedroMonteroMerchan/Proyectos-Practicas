import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  template: `<p-button label="Hola Mundo" />`,
})
export class AppComponent {
  title = 'ProyectoVanillaA19';
}
