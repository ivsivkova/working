import { Injectable } from '@angular/core';
import { Brand } from './../_models/brand.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class getBrandsService {
    brandsArray: Brand[];
    constructor(private http: Http){}
    getClassificator( classificator:string ):any {
        switch(classificator){
            case "brand": return this.http.get('./../../json/brands.json');  
            case "product-name": return this.http.get('./../../json/products-name.json');
            case "product-type": return this.http.get('./../../json/products-type.json');
        }
              
    }
}