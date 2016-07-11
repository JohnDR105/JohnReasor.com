(function () {
    'use strict';

    angular
        .module('jnsApp')
        .controller('jnsController', jnsHomeController);

    jnsHomeController.$inject = ['$scope']; 

    function jnsHomeController($scope) {
        $scope.title = 'jnsController';

        activate();

        function activate() { }
    }
})();
