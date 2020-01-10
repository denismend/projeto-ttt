import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameTttComponent } from './game-ttt/game-ttt.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'game',
    },
    { 
        path: 'game',
        component: GameTttComponent,
    },
    { 
        path: '**', 
        redirectTo: 'game'
    }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

