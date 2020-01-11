import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { MarvelApiService } from '../shared/services/marvel-api.service';

@Component({
  selector: 'ttt-app-game-ttt',
  templateUrl: './game-ttt.component.html',
  styleUrls: ['./game-ttt.component.css']
})
export class GameTttComponent implements OnInit {

  public status: string = 'sp1';

  constructor(private _marvelApiService: MarvelApiService) { }

  ngOnInit() {
  }


  selectPlayer1(hero: Hero) {
    this.status = 'sp2';
    this._marvelApiService.setPlayer1(hero);
  }

  selectPlayer2(hero: Hero) {
    this.status = 'startGame';
    this._marvelApiService.setPlayer2(hero);
  }

  restartGame() {
    this._marvelApiService.setPlayer1(null);
    this._marvelApiService.setPlayer2(null);

    this.status = 'sp1';
  }
}
