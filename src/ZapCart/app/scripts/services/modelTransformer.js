'use strict';

var modelTransformer = function () {
    function transformObject(jsonResult, constructor) {
        var model = new constructor();
        angular.extend(model, jsonResult);

        return model;
    };

    function transformResult(jsonResult, constructor) {
        if (angular.isArray(jsonResult)) {
            var models = [];

            angular.forEach(jsonResult, function (object) {
                models.push(transformObject(object, constructor));
            });

            return models;
        } else {
            return transformObject(jsonResult, constructor);
        }
    };

    return {
        transform: transformResult
    };
};

module.exports = modelTransformer;