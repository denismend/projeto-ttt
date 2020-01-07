import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SelectPlayerComponent } from './heroes/select-hero-player/select-hero-player.component';
import { TttFieldComponent } from './views/ttt-field/ttt-field.component';
import { MarvelApiService } from './shared/services/marvel-api.service';
import { HttpMarvelInterceptor } from './heroes/interceptors/http-marvel.interceptor';
import { AppRoutingModule } from './app.routing.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    TttFieldComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    HeroesModule
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
