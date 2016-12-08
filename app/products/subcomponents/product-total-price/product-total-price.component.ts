import { Component } from '@angular/core';

//Import of custom written components
import { Product } from './../../../_models/product.model';

@Component ({
    selector: 'product-total-price',
    inputs: ['product'],
    templateUrl: './../app/products/subcomponents/product-total-price/product-total-price.component.html'
})

export class ProductTotalPriceComponent {
    product: Product;
}