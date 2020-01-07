import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private URL = 'https://gateway.marvel.com:443/v1/public';

  constructor(private _http: HttpClient) {

  }

  public getCharacter(name: string):Observable<any> {
    let _uri = `${this.URL}/characters`; 
    return this._http.get<any>(_uri);
  }
  
}
