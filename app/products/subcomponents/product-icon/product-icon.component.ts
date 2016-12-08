import { Component } from '@angular/core';
// Custom Components import
import { Product } from '../../../_models/product.model';

@Component({
    selector: 'product-icon',
    inputs: ['product'],
    templateUrl: './../app/products/subcomponents/product-icon/product-icon.component.html'
})

export class ProductIconComponent {
    product: Product;
}