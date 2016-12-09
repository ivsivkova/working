import { Component, OnInit } from '@angular/core';
import { ProductNameModel } from './../../_models/product-name.model';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Component({
    selector:'product-name',
    templateUrl: './../app/classificators/product-name/product-name.component.html'
})

export class ProductNameClassComponent implements OnInit{
    classificators: ProductNameModel[];
    constructor(private http: Http){
    }

    makeProductNameRequest():void{
        this.http.get("./../../../json/products-name.json")
        .subscribe((res:Response) => {
            this.classificators = res.json();
        })
    }

    ngOnInit():void {
        this.makeProductNameRequest();
    }

    createNewProductName(event):void {
        console.log('Trying to cerate new Product Name Classificator ha?');
        event.preventDefault();
    }
}