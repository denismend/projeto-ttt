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
    
    @Output() heroesListEmitter = new EventEmitter<Hero[]>();
    @Output() loaderEmitter: EventEmitter<boolean> = new EventEmitter();

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
            tap(this.startLoader),
            switchMap(value => this.marvelAPIService.getCharacter(value))
        )
        .subscribe(data => {
            this.loaderEmitter.emit(false);
            console.log('result debounce');
            this.heroesListEmitter.emit(data.data.results)},
            (err) => {
                console.log(err);
                this.heroesListEmitter.emit([]); 
                this.loaderEmitter.emit(false);
            }
        );
    } 

    private hasLenght = (heroName: string): void => {
        if (heroName.length < 1)  {
            this.heroesListEmitter.emit([]);
        }
    }
       
    ngOnDestroy(): void {
        console.log('destroy');
        this.debounce.unsubscribe();
    }

    private startLoader = (): void => {
        this.loaderEmitter.emit(true);
        this.heroesListEmitter.emit([]);
    }
 }