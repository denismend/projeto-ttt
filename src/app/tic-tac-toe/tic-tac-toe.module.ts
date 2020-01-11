import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TttScoreComponent } from './ttt-score/ttt-score.component';
import { HeroesModule } from '../heroes/heroes.module';
import { tcSetValue } from './directives/ttt-setvalue.directive';
import { tttService } from './service/ttt-service';
import { TttMainComponent } from './ttt-main/ttt-main.component';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
    declarations: [
        TttScoreComponent,
        tcSetValue,
        TttMainComponent
    ],
    imports: [ 
        CommonModule,
        HeroesModule
    ],
    exports: [
        TttMainComponent
    ],
    providers: [
        tttService
    ]
})
export class TicTacToeModule {}