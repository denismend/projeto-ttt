import { NgModule } from '@angular/core';
import { SelectPlayerComponent } from './select-hero-player/select-hero-player.component';
import { SearchHeroComponent } from './search-hero/search-hero.component';
import { ListHeroComponent } from './list-hero/list-hero.component';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
    declarations: [
        SelectPlayerComponent,
        SearchHeroComponent,
        ListHeroComponent
    ],
    imports: [ 
        DarkenOnHoverModule, 
        CardModule
    ]
})
export class HeroesModule {}