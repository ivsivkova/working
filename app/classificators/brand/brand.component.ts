import { Component, OnInit } from '@angular/core';
import { Brand } from './../../_models/brand.model';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Component ({
    selector:'brand-class',
    templateUrl:'./../app/classificators/brand/brand.component.html'
})

export class BrandComponent implements OnInit{
    brands: Brand[];
    constructor( private http:Http){
    }

    takeBrands():void {
        this.http.get("./../../../json/brands.json")
        .subscribe((res:Response) => {
            this.brands = res.json();
        })
    }

    ngOnInit():void {
        this.takeBrands();
    }

    createNewBrand(event):void {
        console.log('Almost done creating new Brand!');
        event.preventDefault();
    }
}