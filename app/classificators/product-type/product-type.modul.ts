import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeComponent } from './product-type.component';
import { ProductTypeListComponent } from './subcomponents/product-type-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ProductTypeComponent,
        ProductTypeListComponent
    ],
    exports:[ProductTypeComponent]
})

export class ProductTypeModule {

}