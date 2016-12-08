import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { ProductNameListComponent } from './subcomponents/product-name-list/product-name-list.component';
import { ProductNameClassComponent } from './product-name.component';

@NgModule({
    imports:[CommonModule],
    declarations:[
        ProductNameListComponent,
        ProductNameClassComponent
    ],
    exports:[ProductNameClassComponent]
})

export class ProductNameModule {}