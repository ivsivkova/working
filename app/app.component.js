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
var AppComponent = (function () {
    function AppComponent(_elRef) {
        this._elRef = _elRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        jQuery(this._elRef.nativeElement).find('#menu').mmenu({
            extensions: ['effect-slide-menu', 'shadow-page', 'shadow-panels'],
            keyboardNavigation: true,
            screenReader: true,
            counters: true,
            navbar: {
                title: 'Menu'
            },
            navbars: [
                {
                    position: 'top',
                    content: ['searchfield']
                }, {
                    position: 'top',
                    content: [
                        'prev',
                        'title',
                        'close'
                    ]
                }, {
                    position: 'bottom',
                    content: [
                        '<a href="http://mmenu.frebsite.nl/wordpress-plugin.html" target="_blank">WordPress plugin</a>'
                    ]
                }
            ]
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[my-app]',
            templateUrl: '../app/app.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map