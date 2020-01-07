import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'tttm-select-player',
  templateUrl: './select-hero-player.component.html',
  styleUrls: ['./select-hero-player.component.css']
})
export class SelectPlayerComponent implements OnInit {

  private heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

  
}
