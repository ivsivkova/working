import { Component } from '@angular/core';
// Imports of custom written components
import { Product } from './../../../_models/product.model';
import { ProductItemComponent } from './../product-item/product-item.component';

@Component({
    selector: 'product-list',
    inputs: ['productsList'],
    templateUrl: './../app/products/subcomponents/product-list/product-list.component.html'
})

export class ProductListComponent {
    productsList: Product[];
}