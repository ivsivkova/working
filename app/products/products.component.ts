import { Component } from '@angular/core';

import { Product } from './../_models/product.model';
import { ProductNameModel } from './../_models/product-name.model';
import { Brand } from './../_models/brand.model';
import { ProductTypeModel } from './../_models/product-type.model';


@Component({
  selector: 'products',
  templateUrl: '../app/products/products.component.html'
})

export class ProductsComponent{
  initialProducts: Product[];

  constructor () {
        this.initialProducts = [
            new Product(1,"http://icons.iconarchive.com/icons/icons8/android/512/Food-Vegeterian-Food-icon.png", new ProductNameModel(1,"Milk"), new Brand(1,"Pilos"), 1.59, 2, new ProductTypeModel(1,"Food"), new Date(2016,3,26)),
            new Product(2,"http://icons.iconarchive.com/icons/icons8/android/512/Food-Vegeterian-Food-icon.png", new ProductNameModel(1,"Milk"), new Brand(2,"Vereia"), 1.69, 2, new ProductTypeModel(1,"Food"), new Date(2016,3,26))
        ];
  }

  createProduct(event):void {
    console.log('Yay!You are trying to create new product!');
    event.preventDefault();
  }
}
