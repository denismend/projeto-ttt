import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private player1: BehaviorSubject<any>;
  private player2: BehaviorSubject<any>;

  private URL = 'https://gateway.marvel.com/v1/public';

  constructor(private _http: HttpClient) {

  }

  public getCharacter(name: string):Observable<any> {
    let _uri = `${this.URL}/characters`; 
    return this._http.get<any>(_uri, {params: {'nameStartsWith': name}});
  }
  
}
