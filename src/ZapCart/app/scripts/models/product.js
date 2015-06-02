'use strict';

function Product(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
}

Product.prototype.makeFavorite = function () {
  this.favorite = true;
};

module.exports = Product;