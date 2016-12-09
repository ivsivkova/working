import { Component } from '@angular/core';
import { Brand } from './../../../../_models/brand.model';

@Component({
    selector: 'brand-list',
    inputs: ['brandsList'],
    templateUrl:'./../app/classificators/brand/subcomponents/brand-list/brand-list.component.html'
})

export class BrandListComponent {
    brandsList: Brand[];
}