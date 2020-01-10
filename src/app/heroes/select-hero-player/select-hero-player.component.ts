import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'ttt-select-player',
  templateUrl: './select-hero-player.component.html',
  styleUrls: ['./select-hero-player.component.css']
})
export class SelectPlayerComponent implements OnInit {

  public heroes: Hero[] = [];
  @Output() selectHeroEmitterFunc: EventEmitter<any> = new EventEmitter();
  
  constructor(
  ) { }

  ngOnInit(): void {
      
  }
  
}
