import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarvelApiService } from './shared/services/marvel-api.service';
import { HttpMarvelInterceptor } from './heroes/interceptors/http-marvel.interceptor';
import { AppRoutingModule } from './app.routing.module';
import { GameTttModule } from './game-ttt/game-ttt.module';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    GameTttModule,
  ],
  providers: [
    MarvelApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMarvelInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
