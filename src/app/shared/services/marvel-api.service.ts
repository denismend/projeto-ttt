import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from 'src/app/heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private player1: BehaviorSubject<any>;
  private player2: BehaviorSubject<any>;

  private URL = 'https://gateway.marvel.com/v1/public';

  constructor(private _http: HttpClient) {

  }

  public getCharacter(name: string): Observable<any> {
    let _uri = `${this.URL}/characters`;
    return this._http.get<any>(_uri, { params: { 'nameStartsWith': name } });
  }


  getPlayer1() {
    return this.player1.asObservable();
  }

  getPlayer2() {
    return this.player2.asObservable();
  }

  setPlayer1(hero: Hero) {
    this.player1.next(hero);
  }

  setPlayer2(hero: Hero) {
    this.player2.next(hero);
  }


}
