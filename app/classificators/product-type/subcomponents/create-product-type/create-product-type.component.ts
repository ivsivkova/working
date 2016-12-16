import { Component, EventEmitter } from '@angular/core';

@Component({
    selector:'create-product-type',
    outputs: ['closeCreateProductType'],
    templateUrl:'./../app/classificators/product-type/subcomponents/create-product-type/create-product-type.component.html'
})

export class CreateProductTypeComponent {
    closeCreateProductType: EventEmitter<boolean> = new EventEmitter<boolean>();
    closeProductTypeCreate():void {
        this.closeCreateProductType.emit(false);
    }
}