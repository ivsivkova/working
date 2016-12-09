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
var ProductNameListComponent = (function () {
    function ProductNameListComponent() {
    }
    ProductNameListComponent = __decorate([
        core_1.Component({
            selector: 'product-name-list',
            inputs: ['classificatorsList'],
            templateUrl: './app/classificators/product-name/subcomponents/product-name-list/product-name-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductNameListComponent);
    return ProductNameListComponent;
}());
exports.ProductNameListComponent = ProductNameListComponent;
//# sourceMappingURL=product-name-list.component.js.map