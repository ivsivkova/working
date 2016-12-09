"use strict";
var Product = (function () {
    function Product(id, icon, name, // it won't be string
        brand, // it won't be string
        singlePrice, quantity, productType, // it won't be string
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
//# sourceMappingURL=product.js.map