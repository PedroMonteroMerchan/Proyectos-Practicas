import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-prueba3',
  standalone: true,
  imports: [ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './prueba3.component.html',
})
export class Prueba3Component {
  constructor(
    private router: Router,
    private msg: MessageService,
  ) {}

  mostrar(tipo: string) {
    this.msg.add({
      severity: tipo,
      summary: tipo.charAt(0).toUpperCase() + tipo.slice(1),
      detail: `Este es un mensaje de tipo ${tipo}`,
    });
  }

  volver() {
    this.router.navigate(['/']);
  }
}
