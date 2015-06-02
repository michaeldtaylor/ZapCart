'use strict';

var ProductRepository = function ($resource, modelTransformer) {
    return $resource('http://localhost:5001/api/products/', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
};

module.exports = ProductRepository;