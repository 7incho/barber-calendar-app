import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavouriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavouriteEvent.emit(gameName);
  }

  games = [
    {
      id: '1',
      name: 'Cyberpunk 2077',
      'videogame genre': 'RPG',
    },
    {
      id: '2',
      name: 'The Legend of Zelda: Breath of the Wild 2',
      'videogame genre': 'Action-adventure',
    },
    {
      id: '3',
      name: 'Elden Ring',
      'videogame genre': 'Action RPG',
    },
  ];
}
