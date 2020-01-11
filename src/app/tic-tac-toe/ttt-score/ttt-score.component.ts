import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/heroes/hero';

@Component({
  selector: 'ttt-score',
  templateUrl: './ttt-score.component.html',
  styleUrls: ['./ttt-score.component.scss']
})
export class TttScoreComponent implements OnInit {

  @Input() player1: Hero;
  @Input() player2: Hero;

  constructor() { }

  ngOnInit() {
  }

}
