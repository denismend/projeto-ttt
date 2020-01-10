import { Component, Input } from '@angular/core';


@Component({
    selector: 'tttm-hero-photo',
    templateUrl: 'photo-hero.component.html'
})
export class PhotoHeroComponent {
    
    private _url = '';

    @Input() description='';
    
    @Input() set url(url: string)  {
        this._url = `${url}/standard_amazing.jpg`;
    }

    get url() {
        return this._url;
    }
}