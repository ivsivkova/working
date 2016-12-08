import { Component } from '@angular/core';
import { Brand } from './../../_models/brand.model';

@Component ({
    selector:'brand-class',
    templateUrl:'./../app/classificators/brand/brand.component.html'
})

export class BrandComponent {
    brands: Brand[];
    constructor(){
        this.brands = [
            new Brand(1,"Pilos"),
            new Brand(2,"Vereia"),
            new Brand(3,"Madjarov"),
            new Brand(4,"Orehite")
        ];
    }

    createNewBrand(event):void {
        console.log('Almost done creating new Brand!');
        event.preventDefault();
    }
}