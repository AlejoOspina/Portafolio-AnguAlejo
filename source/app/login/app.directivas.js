(function () {
    'use strict';

    angular.module('app.login.directivas', [

    ]).directive('login', login);
    
    function login() {
        return {
            scope: {},
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'
        }
    }
})();