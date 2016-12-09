"use strict";
var Product = (function () {
    function Product(id, icon, name, // product-name.model.ts
        brand, // brand.model.ts
        singlePrice, quantity, productType, // product-type.model.ts
        date) {
        this.id = id;
        this.icon = icon;
        this.name = name;
        this.brand = brand;
        this.singlePrice = singlePrice;
        this.quantity = quantity;
        this.productType = productType;
        this.date = date;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.model.js.map