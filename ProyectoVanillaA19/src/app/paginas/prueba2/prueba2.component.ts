import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-prueba2',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    CheckboxModule,
    TextareaModule,
  ],
  templateUrl: './prueba2.component.html',
})
export class Prueba2Component {
  form = { nombre: '', email: '', mensaje: '', rol: null, aceptar: false };
  roles = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Usuario', value: 'user' },
    { label: 'Invitado', value: 'guest' },
  ];

  constructor(private router: Router) {}
  enviar() {
    console.log(this.form);
  }
  volver() {
    this.router.navigate(['/']);
  }
}
