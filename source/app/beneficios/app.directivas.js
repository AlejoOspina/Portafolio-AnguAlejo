(function () {
    'use strict';

    angular.module('app.beneficios.directivas', [

    ]).directive('beneficios', beneficios);
    
    function beneficios() {
        return {
            scope: {},
            templateUrl: 'app/beneficios/beneficios.html',
        }
    }
})();