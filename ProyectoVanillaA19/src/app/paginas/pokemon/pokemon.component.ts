import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {
  nombre = '';
  pokemon: any = null;
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  buscar() {
    this.error = '';
    this.pokemon = null;
    const query = this.nombre.toLowerCase().trim();
    if (!query) return;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${query}`).subscribe({
      next: (data) => (this.pokemon = data),
      error: () => (this.error = 'Pokémon no encontrado.'),
    });
  }

  volver() {
    this.router.navigate(['/']);
  }

  getColorTipo(tipo: string): string {
    const colores: any = {
      fire: 'bg-#a50a0a-500',
      water: 'bg-blue-500',
      grass: 'bg-green-500',
      electric: 'bg-yellow-400',
      psychic: 'bg-pink-500',
      ice: 'bg-cyan-400',
      dragon: 'bg-#350358-600',
      dark: 'bg-#1f0606-700',
      fairy: 'bg-pink-300',
      fighting: 'bg-#ff6a00-700',
      flying: 'bg-#54d2dd-400',
      poison: 'bg-purple-500',
      ground: 'bg-#996818-700',
      rock: 'bg-#443117-600',
      bug: 'bg-lime-500',
      ghost: 'bg-purple-700',
      steel: 'bg-gray-400',
      normal: 'bg-gray-500',
    };
    return colores[tipo] || 'bg-gray-500';
  }

  getColorStat(valor: number): string {
    if (valor >= 100) return 'bg-green-400';
    if (valor >= 60) return 'bg-yellow-400';
    return 'bg-red-400';
  }
}
