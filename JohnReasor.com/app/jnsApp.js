(function () {
    'use strict';

    var jnsApp =angular.module('jnsApp', [
        // Angular modules
        'ngAnimate',
        'ngRoute',
        // Custom modules

        // 3rd Party Modules
        
    ]);

    jnsApp.config(function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'Views/home.html',
                controller: 'jnsController'
            }).
            when('/contact', {
                templateUrl: 'Views/contact.html',
                controller: 'jnsController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    });
})();
