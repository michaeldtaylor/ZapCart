'use strict';

var _ = require('underscore');

var Cart = function ($localStorage) {
    var cartItems = {};

    if ($localStorage.cartItems) {
        _.each($localStorage.cartItems, function (cartItem) {
            cartItems[cartItem.product.id] = cartItem;
        });
    }

    function save() {
        $localStorage.cartItems = cartItems;
    };

    function changeQuantity(product, newQuantity) {
        cartItems[product.id] = {
            product: product,
            quantity: newQuantity,
            totalCost: product.price * newQuantity
        };

        save();
    };

    function removeItem(product) {
        if (cartItems[product.id] !== undefined) {
            delete cartItems[product.id];
        }

        save();
    };

    return {
        getAllItems: function () {
            return cartItems;
        },

        incrementQuantity: function (product) {
            var existingQuantity = 0;

            if (cartItems[product.id] !== undefined) {
                existingQuantity = cartItems[product.id].quantity;
            }

            changeQuantity(product, existingQuantity + 1);
        },

        decrementQuantity: function (product) {
            if (cartItems[product.id] !== undefined) {
                if (cartItems[product.id].quantity > 1) {
                    changeQuantity(product, cartItems[product.id].quantity - 1);
                } else {
                    removeItem(product);
                }
            }
        },

        removeItem: removeItem,

        totalCost: function () {
            return _.reduce(cartItems, function (memo, cartItem) {
                return memo + cartItem.totalCost;
            }, 0);
        }
    };
};

module.exports = Cart;