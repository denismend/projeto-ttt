import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameTttComponent } from './game-ttt.component';
import { HeroesModule } from '../heroes/heroes.module';

@NgModule({
    declarations: [
        GameTttComponent
    ],
    imports: [ 
        CommonModule,
        HeroesModule
    ],
})
export class GameTttModule {}