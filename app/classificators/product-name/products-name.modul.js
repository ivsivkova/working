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
var product_name_list_component_1 = require('./subcomponents/product-name-list/product-name-list.component');
var product_name_component_1 = require('./product-name.component');
var ProductNameModule = (function () {
    function ProductNameModule() {
    }
    ProductNameModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                product_name_list_component_1.ProductNameListComponent,
                product_name_component_1.ProductNameClassComponent
            ],
            exports: [product_name_component_1.ProductNameClassComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductNameModule);
    return ProductNameModule;
}());
exports.ProductNameModule = ProductNameModule;
//# sourceMappingURL=products-name.modul.js.map