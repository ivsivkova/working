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
var product_name_model_1 = require('./../../_models/product-name.model');
var ProductNameClassComponent = (function () {
    function ProductNameClassComponent() {
        this.classificators = [
            new product_name_model_1.ProductNameModel(1, "Milk"),
            new product_name_model_1.ProductNameModel(2, "Wine"),
            new product_name_model_1.ProductNameModel(3, "Bread"),
            new product_name_model_1.ProductNameModel(4, "Vegetables")
        ];
    }
    ProductNameClassComponent.prototype.createNewProductName = function (event) {
        console.log('Trying to cerate new Product Name Classificator ha?');
        event.preventDefault();
    };
    ProductNameClassComponent = __decorate([
        core_1.Component({
            selector: 'product-name',
            templateUrl: './../app/classificators/product-name/product-name.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductNameClassComponent);
    return ProductNameClassComponent;
}());
exports.ProductNameClassComponent = ProductNameClassComponent;
//# sourceMappingURL=product-name.component.js.map