import { Component, EventEmitter } from '@angular/core';

@Component({
    selector:'create-product-name',
    outputs: ['closeCreateProductName'],
    templateUrl:'./../app/classificators/product-name/subcomponents/create-product-name/create-product-name.component.html'
})

export class CreateProductNameComponent {
    closeCreateProductName: EventEmitter<boolean> = new EventEmitter<boolean>();
    createProductNameClose():void {
        this.closeCreateProductName.emit(false);
    }
}