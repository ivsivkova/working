import { Component } from '@angular/core';
//Import of custom written components
import { Product } from './../../../_models/product.model';
import { ProductIconComponent } from './../product-icon/product-icon.component';
import { ProductTotalPriceComponent } from './../product-total-price/product-total-price.component';

@Component({
    selector: 'product-item',
    inputs: ['product'],
    templateUrl: './../app/products/subcomponents/product-item/product-item.component.html'
})

export class ProductItemComponent {
    product:Product;
}