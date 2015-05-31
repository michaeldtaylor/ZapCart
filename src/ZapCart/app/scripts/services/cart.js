'use strict';

var _ = require('underscore');

var cart = function ($localStorage) {
    var cartItems = {};

    if ($localStorage.cartItems) {
        _.each($localStorage.cartItems, function (cartItem) {
            cartItems[cartItem.productResource.id] = cartItem;
        });
    }

    var save = function () {
        $localStorage.cartItems = cartItems;
    };

    var changeQuantity = function (productResource, newQuantity) {
        cartItems[productResource.id] = {
            productResource: productResource,
            quantity: newQuantity,
            totalCost: productResource.price * newQuantity
        };

        save();
    };

    var removeItem = function (productResource) {
        if (cartItems[productResource.id] !== undefined) {
            delete cartItems[productResource.id];
        }

        save();
    };

    return {
        getAllItems: function () {
            return cartItems;
        },

        incrementQuantity: function (productResource) {
            var existingQuantity = 0;

            if (cartItems[productResource.id] !== undefined) {
                existingQuantity = cartItems[productResource.id].quantity;
            }

            changeQuantity(productResource, existingQuantity + 1);
        },

        decrementQuantity: function (productResource) {
            if (cartItems[productResource.id] !== undefined) {
                if (cartItems[productResource.id].quantity > 1) {
                    changeQuantity(productResource, cartItems[productResource.id].quantity - 1);
                } else {
                    removeItem(productResource);
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

module.exports = cart;