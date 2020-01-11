import { NgModule } from '@angular/core';
import { SelectPlayerComponent } from './select-hero-player/select-hero-player.component';
import { SearchHeroComponent } from './search-hero/search-hero.component';
import { ListHeroComponent } from './list-hero/list-hero.component';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from '../shared/components/card/card.module';
import { PhotoHeroComponent } from './photo-hero/photo-hero.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/components/loader/loader.module';

@NgModule({
    declarations: [
        SelectPlayerComponent,
        SearchHeroComponent,
        ListHeroComponent,
        PhotoHeroComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        DarkenOnHoverModule, 
        CardModule,
        LoaderModule,
    ],
    exports: [
        SelectPlayerComponent,
        PhotoHeroComponent
    ]
})
export class HeroesModule {}