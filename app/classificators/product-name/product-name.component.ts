import { Component } from '@angular/core';
import { ProductNameModel } from './../../_models/product-name.model';

@Component({
    selector:'product-name',
    templateUrl: './../app/classificators/product-name/product-name.component.html'
})

export class ProductNameClassComponent {
    classificators: ProductNameModel[];
    constructor(){
        this.classificators=[
            new ProductNameModel(1,"Milk"),
            new ProductNameModel(2,"Wine"),
            new ProductNameModel(3,"Bread"),
            new ProductNameModel(4,"Vegetables")
        ];
    }

    createNewProductName(event):void {
        console.log('Trying to cerate new Product Name Classificator ha?');
        event.preventDefault();
    }
}