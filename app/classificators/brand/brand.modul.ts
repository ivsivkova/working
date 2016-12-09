import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandComponent } from './brand.component';
import { BrandListComponent } from './subcomponents/brand-list/brand-list.component';

@NgModule({
    imports:[CommonModule],
    declarations:[
        BrandComponent,
        BrandListComponent
    ],
    exports:[BrandComponent]
})

export class BrandModul {
    
}