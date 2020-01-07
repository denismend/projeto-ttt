import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SelectPlayerComponent } from './views/select-player/select-player.component';
import { TttFieldComponent } from './views/ttt-field/ttt-field.component';
import { MarvelApiService } from './services/marvel-api.service';
import { HttpMarvelInterceptor } from './interceptors/http-marvel-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SelectPlayerComponent,
    TttFieldComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    HttpClientModule,
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
