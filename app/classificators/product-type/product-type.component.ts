import { Component } from '@angular/core';
import { ProductTypeModel } from './../../_models/product-type.model';

@Component ({
    selector:'product-type',
    templateUrl: './../app/classificators/product-type/product-type.component.html'
})

export class ProductTypeComponent {
    productTypes: ProductTypeModel[];
    constructor(){
        this.productTypes = [
            new ProductTypeModel(1, "Food"),
            new ProductTypeModel(2, "Cleaning Supplies"),
            new ProductTypeModel(3, "Technical equipment")
        ];
    }

    createNewProductType(event):void {
        console.log('You will create new Product Type Classificator');
        event.preventDefault();
    }
}