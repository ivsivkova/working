import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeComponent } from './product-type.component';
import { ProductTypeListComponent } from './subcomponents/product-type-list/product-type-list.component';
import { CreateProductTypeComponent } from './subcomponents/create-product-type/create-product-type.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ProductTypeComponent,
        ProductTypeListComponent,
        CreateProductTypeComponent
    ],
    exports:[ProductTypeComponent]
})

export class ProductTypeModule {

}