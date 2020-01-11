import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameTttComponent } from './game-ttt.component';
import { HeroesModule } from '../heroes/heroes.module';
import { TicTacToeModule } from '../tic-tac-toe/tic-tac-toe.module';

@NgModule({
    declarations: [
        GameTttComponent
    ],
    imports: [ 
        CommonModule,
        HeroesModule,
        TicTacToeModule
    ],
})
export class GameTttModule {}