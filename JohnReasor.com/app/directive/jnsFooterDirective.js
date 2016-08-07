(function () {
    'use strict';

    var app = angular.module('jnsApp');

    app.directive('jnsFooterDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'Views/footer.html'
        };
    });
})();