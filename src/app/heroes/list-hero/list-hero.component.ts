import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'tttm-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnChanges {

  @Input() heroes: Hero[] = [];
  rows: any[] = [];
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos) 
      this.rows = this.groupColumns(this.heroes);
  }

  groupColumns(heroes: Hero[]) {
    const newRows = [];

    for(let index = 0; index < heroes.length; index+=3) {
      newRows.push(heroes.slice(index, index + 3));
    }                            
    return newRows;
  }
}
