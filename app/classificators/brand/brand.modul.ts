import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandComponent } from './brand.component';
import { BrandListComponent } from './subcomponents/brand-list/brand-list.component';
import { CreateBrandComponent } from './subcomponents/create-brand/create-brand.component';

@NgModule({
    imports:[CommonModule],
    declarations:[
        BrandComponent,
        BrandListComponent,
        CreateBrandComponent
    ],
    exports:[BrandComponent]
})

export class BrandModul {
    
}