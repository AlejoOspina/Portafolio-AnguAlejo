(function () {
    'use strict';

    angular.module('app.faq.directivas', [

    ]).directive('faq', faq);
    
    function faq() {
        return {
            scope: {},
            templateUrl: 'app/faq/faq.html',
        }
    }
})();