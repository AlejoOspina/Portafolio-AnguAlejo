(function () {
    'use strict';

    angular.module('app.aliados.directivas', [

    ]).directive('aliados', aliados);
    
    function aliados() {
        return {
            scope: {},
            templateUrl: 'app/aliados/aliados.html',
        }
    }
})();