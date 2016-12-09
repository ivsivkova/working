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
var common_1 = require('@angular/common');
//imports for Product Components declarations
var product_icon_component_1 = require('./subcomponents/product-icon/product-icon.component');
var product_total_price_component_1 = require('./subcomponents/product-total-price/product-total-price.component');
var product_item_component_1 = require('./subcomponents/product-item/product-item.component');
var product_list_component_1 = require('./subcomponents/product-list/product-list.component');
var products_component_1 = require('./products.component');
var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                product_icon_component_1.ProductIconComponent,
                product_total_price_component_1.ProductTotalPriceComponent,
                product_item_component_1.ProductItemComponent,
                product_list_component_1.ProductListComponent,
                products_component_1.ProductsComponent
            ],
            exports: [products_component_1.ProductsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map