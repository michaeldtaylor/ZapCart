'use strict';

var productResource = function ($resource) {
    return $resource('api/products/', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
};

module.exports = productResource;