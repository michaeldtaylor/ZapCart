'use strict';

var productDataSource = function ($resource) {
    return $resource('api/products/', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
};

module.exports = productDataSource;