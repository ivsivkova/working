import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports for Product Components declarations
import { ProductIconComponent } from './subcomponents/product-icon/product-icon.component';
import { ProductTotalPriceComponent } from './subcomponents/product-total-price/product-total-price.component';
import { ProductItemComponent } from './subcomponents/product-item/product-item.component';
import { ProductListComponent } from './subcomponents/product-list/product-list.component'; 
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './subcomponents/create-product/create-product.component';

@NgModule({
    imports:[CommonModule],
    declarations:[
        ProductIconComponent,
        ProductTotalPriceComponent,
        ProductItemComponent,
        ProductListComponent,
        ProductsComponent,
        CreateProductComponent
    ],
    exports:[ProductsComponent]
})

export class ProductsModule{}