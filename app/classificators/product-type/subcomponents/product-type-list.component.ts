import { Component } from '@angular/core';
import { ProductTypeModel } from './../../../_models/product-type.model';

@Component({
    selector: 'product-type-list',
    inputs: ['productsTypeList'],
    templateUrl: './../app/classificators/product-type/subcomponents/product-type-list.component.html'
})

export class ProductTypeListComponent {
    productsTypeList:ProductTypeModel[];
}