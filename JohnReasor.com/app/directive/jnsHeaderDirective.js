/// <reference path="C:\Users\John\Source\Repos\JohnReasor.com\JohnReasor.com\Views/header.html" />
(function () {
    'use strict';

    var app = angular.module('jnsApp');

    app.directive('jnsHeaderDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'Views/header.html'
        };
    });
})();
