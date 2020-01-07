import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectPlayerComponent } from './heroes/select-hero-player/select-hero-player.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'player',
    },
    { 
        path: 'newgame',
        component: SelectPlayerComponent,
    },
    { 
        path: '**', 
        redirectTo: 'newgame'
    }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

