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
var brand_model_1 = require('./../../_models/brand.model');
var BrandComponent = (function () {
    function BrandComponent() {
        this.brands = [
            new brand_model_1.Brand(1, "Pilos"),
            new brand_model_1.Brand(2, "Vereia"),
            new brand_model_1.Brand(3, "Madjarov"),
            new brand_model_1.Brand(4, "Orehite")
        ];
    }
    BrandComponent.prototype.createNewBrand = function (event) {
        console.log('Almost done creating new Brand!');
        event.preventDefault();
    };
    BrandComponent = __decorate([
        core_1.Component({
            selector: 'brand-class',
            templateUrl: './../app/classificators/brand/brand.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BrandComponent);
    return BrandComponent;
}());
exports.BrandComponent = BrandComponent;
//# sourceMappingURL=brand.component.js.map