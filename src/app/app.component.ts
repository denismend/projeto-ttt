import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './services/marvel-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-ttt';

  constructor(private service: MarvelApiService) {

  }

  ngOnInit() {
    this.service.getCharacter('').subscribe(res => {
      console.log(res);
    })
  }
}
