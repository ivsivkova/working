import { Component } from '@angular/core';
import { ProductNameModel } from './../../../../_models/product-name.model';

@Component({
    selector:'product-name-list',
    inputs: ['classificatorsList'],
    templateUrl: './app/classificators/product-name/subcomponents/product-name-list/product-name-list.component.html'
})

export class ProductNameListComponent {
    classificatorsList: ProductNameModel[];
}