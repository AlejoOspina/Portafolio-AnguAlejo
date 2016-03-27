(function () {
    'use strict';

    angular.module('app.inicio.directivas', [

    ]).directive('inicio', inicio)
    
    function inicio() {
        return {
            scope: {},
            templateUrl: 'app/inicio/inicio.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'
        }
    }
    
})();