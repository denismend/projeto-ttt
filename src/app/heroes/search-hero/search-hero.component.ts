import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, catchError, tap, filter } from 'rxjs/operators';
import { Hero } from '../hero';
import { MarvelApiService } from 'src/app/shared/services/marvel-api.service';

@Component({
  selector: 'ttt-app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {
    
    //@Output() onTyping = new EventEmitter<string>();
    @Output() heroesListEmitter = new EventEmitter<Hero[]>();
    public value: string = '';
    debounce: Subject<string> = new Subject<string>();

    constructor(
        private marvelAPIService: MarvelApiService) { }
    
    ngOnInit(): void {
        this.debounce
        .pipe(
            debounceTime(400),
            tap(this.hasLenght),
            filter((heroName: string) => heroName.length > 1),
            switchMap(value => this.marvelAPIService.getCharacter(value))
        )
        .subscribe(data => {
            console.log('result debounce');
            this.heroesListEmitter.emit(data.data.results)},
            err => this.heroesListEmitter.emit([])
        );
    } 

    /**
        * Check the length of heroName string in input field
    */
    private hasLenght = (heroName: string): void => {
        if (heroName.length < 1)  {
            this.heroesListEmitter.emit([]);
        }
    }
       
    ngOnDestroy(): void {
        console.log('destroy');
        this.debounce.unsubscribe();
    }
 }