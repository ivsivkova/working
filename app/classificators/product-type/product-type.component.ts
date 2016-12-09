import { Component, OnInit } from '@angular/core';
import { ProductTypeModel } from './../../_models/product-type.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component ({
    selector:'product-type',
    templateUrl: './../app/classificators/product-type/product-type.component.html'
})

export class ProductTypeComponent implements OnInit{
    productTypes: ProductTypeModel[];
    constructor(private http:Http){
    }

    getProductTypeClassificators():void {
        this.http.get("./../../../json/products-type.json")
        .subscribe((res:Response) => {
            this.productTypes = res.json();
        })
    }

    ngOnInit():void {
        this.getProductTypeClassificators();
    }

    createNewProductType(event):void {
        console.log('You will create new Product Type Classificator');
        event.preventDefault();
    }
}