(function () {
    'use strict';

    angular
        .module('jnsApp')
        .service('jnsDataService', jnsDataService);

    jnsDataService.$inject = ['$http'];

    function jnsDataService($http) {
        this.getData = getData;

        function getData() { }
    }
})();