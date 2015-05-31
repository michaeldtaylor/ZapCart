'use strict';

var productResource = function ($resource) {
    return $resource('http://localhost:5001/api/products/', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
};

module.exports = productResource;