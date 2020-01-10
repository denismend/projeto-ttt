import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'tttm-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnChanges, OnInit {

  @Input() heroes: Hero[] = [];
  @Output() selectHero: EventEmitter<any> = new EventEmitter();

  rows: any[] = [];
  
  constructor() { }

  ngOnInit() {
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.heroes) 
      this.rows = this.groupColumns(this.heroes);
  }

  groupColumns(heroes: Hero[]) {
    const newRows = [];

    for(let index = 0; index < heroes.length; index+=4) {
      newRows.push(heroes.slice(index, index + 4));
    }                            
    return newRows;
  }

}
