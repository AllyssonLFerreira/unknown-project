import { Component } from '@angular/core';

@Component({
  selector: 'app-card-games',
  templateUrl: './card-games.component.html',
  styleUrls: ['./card-games.component.scss']
})
export class CardGamesComponent {

  constructor(  ) {  }


 /* getGames() {
    this.gamesService.getAllGames().subscribe((res: GetResponse  ) => {
      this.games = res.results;
    })
  } */
}
