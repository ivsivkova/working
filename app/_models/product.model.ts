import { ProductNameModel } from './product-name.model';
import { Brand } from './brand.model';
import { ProductTypeModel } from './product-type.model'; 

export class Product {
    constructor(
        public id: number,
        public icon: string,
        public name: ProductNameModel, // product-name.model.ts
        public brand: Brand, // brand.model.ts
        public singlePrice: number,
        public quantity: number,
        public productType: ProductTypeModel, // product-type.model.ts
        public date: Date
    ){}
}