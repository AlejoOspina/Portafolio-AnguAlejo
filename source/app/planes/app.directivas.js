(function () {
    'use strict';

    angular.module('app.planes.directivas', [

    ]).directive('planes', planes);
    
    function planes() {
        return {
            scope: {},
            templateUrl: 'app/planes/planes.html',
        }
    }
})();