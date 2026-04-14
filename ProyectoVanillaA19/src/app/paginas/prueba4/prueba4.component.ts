import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba4',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: './prueba4.component.html',
})
export class Prueba4Component {
  visible = false;

  constructor(private router: Router) {}

  abrir() {
    this.visible = true;
  }
  cerrar() {
    this.visible = false;
  }
  volver() {
    this.router.navigate(['/']);
  }
  confirmar() {
    this.visible = false;
  }
}
