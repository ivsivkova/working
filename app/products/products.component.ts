import { Component } from '@angular/core';

import { Product } from './../_models/product.model';
import { ProductNameModel } from './../_models/product-name.model';
import { Brand } from './../_models/brand.model';
import { ProductTypeModel } from './../_models/product-type.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { OnInit } from '@angular/core';


@Component({
  selector: 'products',
  templateUrl: '../app/products/products.component.html'
})

export class ProductsComponent implements OnInit{
  createView:boolean = false;
  initialProducts: Product[];

  constructor (public http:Http) {       
  }

  makeRequest():void {
    this.http.get('./../../json/products.json')
      .subscribe((res: Response) => {
        this.initialProducts = res.json();
      })
  }

  ngOnInit():void {
    this.makeRequest();
  }

  createProduct(event):void {
    this.createView = true;
    event.preventDefault();
  }
  hideCreateView(boolCreate):void {
    this.createView = boolCreate;
  }
}
