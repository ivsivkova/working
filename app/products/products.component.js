"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_model_1 = require('./../_models/product.model');
var product_name_model_1 = require('./../_models/product-name.model');
var brand_model_1 = require('./../_models/brand.model');
var product_type_model_1 = require('./../_models/product-type.model');
var ProductsComponent = (function () {
    function ProductsComponent() {
        this.initialProducts = [
            new product_model_1.Product(1, "http://icons.iconarchive.com/icons/icons8/android/512/Food-Vegeterian-Food-icon.png", new product_name_model_1.ProductNameModel(1, "Milk"), new brand_model_1.Brand(1, "Pilos"), 1.59, 2, new product_type_model_1.ProductTypeModel(1, "Food"), new Date(2016, 3, 26)),
            new product_model_1.Product(2, "http://icons.iconarchive.com/icons/icons8/android/512/Food-Vegeterian-Food-icon.png", new product_name_model_1.ProductNameModel(1, "Milk"), new brand_model_1.Brand(2, "Vereia"), 1.69, 2, new product_type_model_1.ProductTypeModel(1, "Food"), new Date(2016, 3, 26))
        ];
    }
    ProductsComponent.prototype.createProduct = function (event) {
        console.log('Yay!You are trying to create new product!');
        event.preventDefault();
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            templateUrl: '../app/products/products.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map