import { Component, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Brand } from './../../../_models/brand.model';
import { ProductNameModel } from './../../../_models/product-name.model';
import { ProductTypeModel } from './../../../_models/product-type.model';
import { Product } from './../../../_models/product.model';

import { getBrandsService } from './../../../_services/getBrands.service';

@Component({
    selector:'create-product',
    outputs: ['closeCreateProduct'],
    providers: [getBrandsService],
    templateUrl:'./../app/products/subcomponents/create-product/create-product.component.html'
})

export class CreateProductComponent {
    productNameArray: ProductNameModel[];
    brandsArray: Brand[];
    productTypeArray: ProductTypeModel[];
    closeCreateProduct: EventEmitter<boolean> = new EventEmitter<boolean>();
    newProduct:Product;

    constructor(
            private http:Http, 
            private brandsService: getBrandsService
        ){
            this.brandsService.getClassificator('brand').subscribe((res:Response)=>{
                this.brandsArray = res.json();
            });
            this.brandsService.getClassificator('product-name').subscribe((res:Response)=>{
                this.productNameArray = res.json();
            });
            this.brandsService.getClassificator('product-type').subscribe((res:Response)=>{
                this.productTypeArray = res.json();
            });

        }

    createProduct(pPI, quantity, productName, brand, productType):void {  
        // make some checks and dislay messages depending on the error    
        if ((pPI && pPI > 0) && (quantity && quantity > 0) && (productName && brand && productType)) {
            this.newProduct = new Product(3,'icon', productName, brand, pPI, quantity, productType, new Date() );
            console.log(this.newProduct);
            this.closeCreateProduct.emit(false);
        }
        else {
            alert('Please fill the required fields');
        }
    }
    createProductClose():void {
        this.closeCreateProduct.emit(false);
    }
}