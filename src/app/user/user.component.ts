import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'Martin';
  isLoggedIn = false;
  favGame = '';

  bgColor = [
    {
      id: 1,
      rawColor: 'Blanco',
      colorCode: '#FDF0D1',
    },
    {
      id: 2,
      rawColor: 'Rosado',
      colorCode: '#AC7D88',
    },
    {
      id: 3,
      rawColor: 'Tinto',
      colorCode: '#643843',
    },
  ];

  indiceColorActual: number = 0;

  setColor(): void {
    this.indiceColorActual = (this.indiceColorActual + 1) % this.bgColor.length;
    document.body.style.backgroundColor =
      this.bgColor[this.indiceColorActual].colorCode;
  }

  getFavourite(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert('Holisss');
  }
}
