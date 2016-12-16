import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'create-brand',
    outputs: ['closeCreateBrand'],
    templateUrl:'./../app/classificators/brand/subcomponents/create-brand/create-brand.component.html'
})

export class CreateBrandComponent {
    closeCreateBrand: EventEmitter<boolean> = new EventEmitter<boolean>();

    closeBrandCreate():void {
        this.closeCreateBrand.emit(false);
    }

}