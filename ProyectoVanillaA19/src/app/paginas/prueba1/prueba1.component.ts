import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [TableModule, ButtonModule, TagModule],
  templateUrl: './prueba1.component.html',
})
export class Prueba1Component {
  usuarios = [
    {
      id: 1,
      nombre: 'Pedro',
      email: 'pedro@email.com',
      rol: 'Administrador',
      activo: true,
    },
    {
      id: 2,
      nombre: 'María',
      email: 'maria@email.com',
      rol: 'Usuario',
      activo: true,
    },
    {
      id: 3,
      nombre: 'Carlos',
      email: 'carlos@email.com',
      rol: 'Invitado',
      activo: false,
    },
    {
      id: 4,
      nombre: 'Ana',
      email: 'ana@email.com',
      rol: 'Usuario',
      activo: true,
    },
    {
      id: 5,
      nombre: 'Luis',
      email: 'luis@email.com',
      rol: 'Invitado',
      activo: false,
    },
  ];

  constructor(private router: Router) {}
  volver() {
    this.router.navigate(['/']);
  }
}
